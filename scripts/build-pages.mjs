import {cp,mkdir,readdir,readFile,writeFile} from 'node:fs/promises';
import path from 'node:path';
import assert from 'node:assert/strict';

const root=path.resolve(import.meta.dirname,'..');
const output=path.join(root,'docs');
const base=(process.env.PAGES_BASE_PATH||'/up-service').replace(/\/$/,'');
assert(/^\/[a-zA-Z0-9_-]+$/.test(base),'Expected a single GitHub project path');
await mkdir(output,{recursive:true});
await cp(path.join(root,'dist'),output,{recursive:true,force:true});
async function prepare(directory){
  for(const item of await readdir(directory,{withFileTypes:true})){
    const filename=path.join(directory,item.name);
    if(item.isDirectory()){await prepare(filename);continue;}
    if(!/\.(html|css|js)$/.test(item.name))continue;
    let content=await readFile(filename,'utf8');
    content=content.replaceAll('href="/','href="'+base+'/').replaceAll('src="/','src="'+base+'/');
    content=content.replaceAll('"/assets/','"'+base+'/assets/').replaceAll("url('/assets/","url('"+base+"/assets/");
    if(item.name==='app.js'){
      assert(content.includes('.test(location.pathname)'),'Offer route matcher changed; update Pages preparation');
      content=content.replace('.test(location.pathname)',`.test(location.pathname.slice(${base.length}))`);
    }
    assert(!/(?:src|href)="\/(?!\/)/.test(content.replaceAll(base+'/','BASE/')),'Unexpected root-relative link');
    await writeFile(filename,content);
  }
}
await prepare(output);
await writeFile(path.join(output,'.nojekyll'),'');
console.log(`GitHub Pages ready: docs/ with base ${base}/`);
