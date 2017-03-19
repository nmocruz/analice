import * as low from 'lowdb';
import * as uuid from 'uuid';
import * as markdown from 'markdown';
import * as fs from 'fs';

const db = low('db.json');

db.defaults({ 
    recent: [],
    posts: [{
        id: 1,
        title: 'T1',
        content: '11111',
        published: true,
        date: '2017-02-09'
    }], 
    user: {}
 }).write()

 
export function getRecentPost(){
    return db.get('posts')
        .filter({published: true})
        .sortBy('date')
        .take(5)
        .value()
 }

export function getPost(id: number){
   return db.get('posts').find({id}).value()
} 

export function addPost(title){
   return db.get('posts').push({ id: uuid(), title }).write().id
}

export function getPostHtml(id: number){
    
    fs.readFile('post/'+id, (text)=>{
        
    });
}