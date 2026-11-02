export type Piece = {id:string; axis:'h'|'v'; length:2|3; x:number; y:number};
export type Board = Piece[];
export type Move = {id:string; delta:number};
export function valid(board:Board):boolean {
  if(!Array.isArray(board)||board.length<2||board.length>16) return false;
  const cells=new Set<number>(),ids=new Set<string>();
  for(const p of board){
    if(!p||!/^[@A-O]$/.test(p.id)||ids.has(p.id)||!['h','v'].includes(p.axis)||![2,3].includes(p.length)||!Number.isInteger(p.x)||!Number.isInteger(p.y)) return false;
    ids.add(p.id);
    for(let j=0;j<p.length;j++) { const x=p.x+(p.axis==='h'?j:0),y=p.y+(p.axis==='v'?j:0),c=y*6+x;
      if(x<0||x>5||y<0||y>5||cells.has(c)) return false; cells.add(c); }
  }
  return board[0].id==='@'&&board[0].axis==='h'&&board[0].length===2&&board[0].y===2;
}
export function won(board:Board){return board[0].x===4;}
export function move(board:Board, action:Move):Board|null {
  if(won(board)||!Number.isInteger(action.delta)||action.delta===0||Math.abs(action.delta)>5) return null;
  const p=board.find(p=>p.id===action.id); if(!p)return null;
  const step=Math.sign(action.delta),occupied=new Set<number>();
  for(const q of board)if(q!==p)for(let i=0;i<q.length;i++)occupied.add((q.y+(q.axis==='v'?i:0))*6+q.x+(q.axis==='h'?i:0));
  for(let d=step;Math.abs(d)<=Math.abs(action.delta);d+=step){
    const x=p.x+(p.axis==='h'?d:0),y=p.y+(p.axis==='v'?d:0);
    if(x<0||y<0||x+(p.axis==='h'?p.length:1)>6||y+(p.axis==='v'?p.length:1)>6)return null;
    for(let i=0;i<p.length;i++)if(occupied.has((y+(p.axis==='v'?i:0))*6+x+(p.axis==='h'?i:0)))return null;
  }
  return board.map(q=>q===p?{...q,x:q.x+(q.axis==='h'?action.delta:0),y:q.y+(q.axis==='v'?action.delta:0)}:{...q});
}
export function actions(board:Board):Move[]{
  if(won(board))return [];
  const out:Move[]=[];
  for(const p of board)for(const sign of [-1,1])for(let n=1;n<=5;n++){const m={id:p.id,delta:sign*n};if(!move(board,m))break;out.push(m);}
  return out;
}
const key=(b:Board)=>b.map(p=>p.axis==='h'?p.x:p.y).join('');
export function solve(start:Board,limit=70000):Move[]|null {
  if(!valid(start))return null;if(won(start))return [];
  const queue:{board:Board,parent:number,action:Move|null}[]=[{board:start,parent:-1,action:null}],seen=new Set([key(start)]);
  for(let i=0;i<queue.length&&i<limit;i++){
    const item=queue[i];
    for(const a of actions(item.board)){
      const next=move(item.board,a)!,k=key(next); if(seen.has(k))continue;
      seen.add(k);queue.push({board:next,parent:i,action:a});
      if(won(next)){const route:Move[]=[];let j=queue.length-1;while(queue[j].action){route.push(queue[j].action!);j=queue[j].parent;}return route.reverse();}
      if(queue.length>=limit)return null;
    }
  }
  return null;
}
export type Save={version:1;unlocked:number;solo:(number|null)[];guided:(number|null)[];sound:boolean;motion:boolean};
export function blank():Save{return {version:1,unlocked:0,solo:Array(10).fill(null),guided:Array(10).fill(null),sound:false,motion:false};}
export function readSave(raw:string|null):Save {
  try{const s=JSON.parse(raw||'null');if(s?.version!==1||!Number.isInteger(s.unlocked)||s.unlocked<0||s.unlocked>9||typeof s.sound!=='boolean'||typeof s.motion!=='boolean')return blank();
    for(const a of [s.solo,s.guided])if(!Array.isArray(a)||a.length!==10||a.some(v=>v!==null&&(!Number.isInteger(v)||v<1||v>9999)))return blank();
    return {version:1,unlocked:s.unlocked,solo:[...s.solo],guided:[...s.guided],sound:s.sound,motion:s.motion};
  }catch{return blank();}
}
export function record(s:Save,level:number,moves:number,guided:boolean):Save {
  if(!Number.isInteger(level)||level<0||level>9||!Number.isInteger(moves)||moves<1||moves>9999)return s;
  const next={...s,solo:[...s.solo],guided:[...s.guided],unlocked:Math.max(s.unlocked,Math.min(9,level+1))};
  const a=guided?next.guided:next.solo;a[level]=a[level]===null?moves:Math.min(a[level]!,moves);return next;
}
