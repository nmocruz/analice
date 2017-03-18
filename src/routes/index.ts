'use strict';

import * as express from 'express';
import { getRecentPost, getPostHtml } from '../db';

const router = express.Router();


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
  res.render('contact', {title: 'Nuno Cruz - Contact'});
});
router.get('/articles',(req,res,next) => {
  res.render('articles', {title: 'Nuno Cruz - Articles'});
});
router.get('/about',(req,res,next) => {
  res.render('about', {title: 'Nuno Cruz - About'});
});
export default router;