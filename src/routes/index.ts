'use strict';

import * as express from 'express';
const router = express.Router();

/* GET home page. */
router.get('/',(req,res,next) => {
  res.render('index', {title: 'Express'});
});

router.get('/contact',(req,res,next) => {
  res.render('contact', {title: 'Express'});
});
router.get('/articles',(req,res,next) => {
  res.render('articles', {title: 'Express'});
});
router.get('/about',(req,res,next) => {
  res.render('about', {title: 'Express'});
});
export default router;