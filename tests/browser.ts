import {solve} from '../src/model.ts';
import {levels} from '../src/levels.ts';
localStorage.setItem('vao.save.v1','{corrupt');
await import('../src/main.ts');
const app=document.querySelector('vao-game') as HTMLElement & {updateComplete:Promise<unknown>};
const root=document.querySelector('#results')!;
const results:string[]=[];
const tick=async()=>{await app.updateComplete;await new Promise(r=>setTimeout(r,0));};
const click=async(selector:string)=>{const el=app.querySelector<HTMLButtonElement>(selector)!;if(!el||el.disabled)throw Error('Missing/disabled '+selector);el.click();await tick();};
const text=(s:string)=>app.querySelector(s)!.textContent!;
const check=(name:string,ok:boolean)=>{if(!ok)throw Error(name);results.push(name);const li=document.createElement('li');li.textContent='PASS — '+name;root.append(li);};
await tick();
try{
 check('corrupt save does not block a fresh game',text('#moves')==='00'&&!app.querySelector<HTMLButtonElement>('#piece-goal')!.disabled);
 await click('#piece-goal');app.querySelector('#board')!.dispatchEvent(new KeyboardEvent('keydown',{key:'ArrowLeft',bubbles:true,cancelable:true}));await tick();
 check('arrow keyboard makes a legal one-cell move',text('#moves')==='01'&&app.querySelector('#piece-goal')!.getAttribute('aria-label')!.includes('coluna 1'));
 await click('#undo');check('undo restores layout and counts another action',text('#moves')==='02'&&app.querySelector('#piece-goal')!.getAttribute('aria-label')!.includes('coluna 2'));
 window.dispatchEvent(new Event('blur'));await tick();check('blur opens a modal pause',app.querySelector('dialog')!.open);
 const before=text('#moves');app.querySelector('#board')!.dispatchEvent(new KeyboardEvent('keydown',{key:'ArrowLeft',bubbles:true,cancelable:true}));await tick();check('paused keyboard cannot mutate game',text('#moves')===before);
 app.querySelector('dialog')!.dispatchEvent(new Event('cancel',{cancelable:true}));await tick();await click('#restart');
 await click('#hint');await click('#restart');await new Promise(r=>setTimeout(r,200));check('restart terminates stale hint worker',text('#moves')==='00'&&!text('#status').includes('Dica:'));
 await click('#hint');const deadline=Date.now()+5000;while(!text('#status').includes('Dica:')&&Date.now()<deadline)await new Promise(r=>setTimeout(r,20));check('real worker returns a legal hint and marks guided',text('#status').includes('Dica:')&&app.textContent!.includes('ROTA GUIADA'));
 for(let level=0;level<10;level++){
   const route=solve(levels[level].board)!;
   for(const m of route){await click('#piece-'+(m.id==='@'?'goal':m.id));const select=app.querySelector<HTMLSelectElement>('#distance')!;select.value=String(Math.abs(m.delta));select.dispatchEvent(new Event('change',{bubbles:true}));await tick();const p=levels[level].board.find(p=>p.id===m.id)!;await click(`[aria-label="Mover para ${p.axis==='h'?(m.delta>0?'direita':'esquerda'):(m.delta>0?'baixo':'cima')}"]`);}
   check('yard '+(level+1)+' completes through normal controls',app.querySelector('[aria-label="Resultado"]')!==null&&Number(text('#moves'))===levels[level].par);
   if(level<9)await click('#next');
 }
 check('campaign completion has replay action',app.textContent!.includes('Os dez caminhos estão abertos.')&&text('#next').includes('Voltar ao primeiro'));
 const saved=JSON.parse(localStorage.getItem('vao.save.v1')!);check('guided and solo history persist separately',saved.guided[0]===levels[0].par&&saved.solo[0]===null&&saved.solo[9]===levels[9].par&&saved.unlocked===9);
 await click('#next');check('campaign replay resets move/history state',text('#moves')==='00'&&app.querySelector<HTMLButtonElement>('#undo')!.disabled);
 await click('#motion');await click('#sound');const preferences=JSON.parse(localStorage.getItem('vao.save.v1')!);check('preferences saved without erasing records',preferences.motion&&preferences.sound&&preferences.solo[9]===levels[9].par);
 document.title='PASS '+results.length+' — Vão';
}catch(e){const li=document.createElement('li');li.textContent='FAIL '+String(e);root.append(li);document.title='FAIL — Vão';}
