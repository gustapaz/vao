import {test} from 'node:test';
import assert from 'node:assert/strict';
import {valid,move,actions,solve,won,blank,readSave,record,type Board} from '../src/model.ts';
import {levels} from '../src/levels.ts';

test('ten distinct valid layouts with increasing verified shortest routes',()=>{
 assert.equal(levels.length,10);assert.equal(new Set(levels.map(l=>JSON.stringify(l.board))).size,10);
 let last=0;for(const l of levels){assert.ok(valid(l.board));assert.ok(!won(l.board));const route=solve(l.board);assert.ok(route);assert.equal(route.length,l.par);assert.ok(l.par>=last);last=l.par;let board=l.board;
  for(const action of route){const next=move(board,action);assert.ok(next);assert.ok(valid(next));assert.equal(next.length,board.length);for(const p of next){const prev=board.find(q=>q.id===p.id)!;assert.equal(p.length,prev.length);assert.equal(p.axis,prev.axis);if(p.axis==='h')assert.equal(p.y,prev.y);else assert.equal(p.x,prev.x);}board=next;}
 assert.ok(won(board));assert.deepEqual(actions(board),[]);assert.equal(move(board,{id:'@',delta:-1}),null);}
});
test('collision checks every intermediate cell, not just endpoint',()=>{const b:Board=[{id:'@',axis:'h',length:2,x:0,y:2},{id:'A',axis:'v',length:2,x:2,y:1}];assert.equal(move(b,{id:'@',delta:4}),null);assert.equal(move(b,{id:'A',delta:4}),null);});
test('legal moves are immutable and preserve orthogonal axis',()=>{const b=levels[0].board,copy=structuredClone(b),a=actions(b)[0],next=move(b,a)!;assert.deepEqual(b,copy);assert.notEqual(next,b);assert.notEqual(next[0],b[0]);assert.ok(valid(next));});
test('invalid moves and bounds rejected',()=>{const b=levels[0].board;for(const delta of [0,1.5,NaN,Infinity,6,-6])assert.equal(move(b,{id:'@',delta}),null);assert.equal(move(b,{id:'?',delta:1}),null);const c:Board=[{id:'@',axis:'h',length:2,x:0,y:2},{id:'A',axis:'h',length:2,x:0,y:0}];assert.equal(move(c,{id:'@',delta:-1}),null);assert.equal(move(c,{id:'A',delta:-1}),null);assert.ok(move(c,{id:'@',delta:4}));});
test('layout validation rejects overlaps, duplicate ids, malformed coordinates and wrong target',()=>{const b=structuredClone(levels[0].board);b[1]={...b[0]};assert.ok(!valid(b));b[1]={...b[0],id:'A'};assert.ok(!valid(b));assert.ok(!valid([{id:'@',axis:'h',length:2,x:0,y:3},...levels[0].board.slice(1)]));assert.ok(!valid(null as unknown as Board));});
test('solver deterministic and capped; malformed boards rejected',()=>{assert.deepEqual(solve(levels[0].board),solve(levels[0].board));assert.equal(solve(levels[9].board,1),null);assert.equal(solve([]),null);});
test('every accessible neighboring board in early levels remains solvable',()=>{for(const l of levels.slice(0,3))for(const a of actions(l.board)){const b=move(l.board,a)!;assert.ok(solve(b));}});
test('save parser rejects corrupt, out of range, wrong schema, aliased arrays',()=>{for(const raw of ['{','null','[]',JSON.stringify({...blank(),unlocked:10}),JSON.stringify({...blank(),solo:[0]}),JSON.stringify({...blank(),motion:'true'})])assert.deepEqual(readSave(raw),blank());const s=blank();s.unlocked=4;s.solo[1]=8;s.sound=true;assert.deepEqual(readSave(JSON.stringify(s)),s);});
test('solo and guided records isolated and lower is better; unlock capped',()=>{const s=blank(),a=record(s,0,5,true),b=record(a,0,7,false),c=record(b,0,8,false),d=record(c,0,4,false);assert.equal(s.unlocked,0);assert.equal(a.unlocked,1);assert.equal(a.solo[0],null);assert.equal(a.guided[0],5);assert.equal(c.solo[0],7);assert.equal(d.solo[0],4);assert.equal(record(d,9,20,false).unlocked,9);});
test('records ignore invalid counters and level indices',()=>{const s=blank();assert.equal(record(s,10,4,false),s);assert.equal(record(s,-1,4,false),s);assert.equal(record(s,1,0,false),s);assert.equal(record(s,1,Infinity,false),s);});
