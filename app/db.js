"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const low = require("lowdb");
const uuid = require("uuid");
const fs = require("fs");
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
}).write();
function getRecentPost() {
    return db.get('posts')
        .filter({ published: true })
        .sortBy('date')
        .take(5)
        .value();
}
exports.getRecentPost = getRecentPost;
function getPost(id) {
    return db.get('posts').find({ id }).value();
}
exports.getPost = getPost;
function addPost(title) {
    return db.get('posts').push({ id: uuid(), title }).write().id;
}
exports.addPost = addPost;
function getPostHtml(id) {
    fs.readFile('post/' + id, (text) => {
    });
}
exports.getPostHtml = getPostHtml;
//# sourceMappingURL=db.js.map