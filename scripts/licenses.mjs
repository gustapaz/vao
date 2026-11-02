import {readFileSync,writeFileSync} from 'node:fs';
const packages=['lit','lit-html','lit-element','@lit/reactive-element'];
let text='VÃ£o - third-party notices\n\n';
for(const name of packages){const root='node_modules/'+name+'/';const pkg=JSON.parse(readFileSync(root+'package.json','utf8'));text+=name+' '+pkg.version+'\n'+readFileSync(root+'LICENSE','utf8')+'\n\n';}
writeFileSync('public/third-party.txt',text.replace(/\r\n/g,'\n').trimEnd()+'\n');
