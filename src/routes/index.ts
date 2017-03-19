'use strict';

import * as express from 'express';
import { getRecentPost, getPostHtml } from '../db';
import * as crypto from 'crypto';

const router = express.Router();

function addETag(content:string, res){

  if(res.locals.asPartial){ 
    const hash = crypto
                  .createHash('sha256')
                  .update(content)
                  .digest('hex');
    res.set({
        'ETag': hash,
        'Cache-Control': 'public, no-cache'
    });
   
  }
   res.send(content);
}

/* GET home page. */
router.get('/',(req,res,next) => {
  const posts = getRecentPost() || [];
  res.render('index', { title: 'Nuno Cruz', posts });
});

router.get('/post/{id}',(req,res,next) => {
  const post = getPostHtml(req.params.id);
  res.send(post);
});

router.get('/contact',(req,res,next) => {
  res.render('contact', {title: 'Nuno Cruz - Contact'}, (e,b)=> addETag(b, res));
  
});

router.get('/articles',(req,res,next) => {
  res.render('articles', {title: 'Nuno Cruz - Articles'}, (e,b)=> addETag(b, res));
});

router.get('/about',(req,res,next) => {
  res.render('about', {title: 'Nuno Cruz - About'}, (e,b)=> addETag(b, res));
});


export default router;