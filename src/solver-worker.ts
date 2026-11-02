import {solve,type Board} from './model.ts';
self.onmessage=(event:MessageEvent<Board>)=>{self.postMessage(solve(event.data));};
