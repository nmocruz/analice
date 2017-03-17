'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
router.get('/', (req, res, next) => {
    res.render('index', { title: 'Express' });
});
router.get('/contact', (req, res, next) => {
    res.render('contact', { title: 'Express' });
});
router.get('/articles', (req, res, next) => {
    res.render('articles', { title: 'Express' });
});
router.get('/about', (req, res, next) => {
    res.render('about', { title: 'Express' });
});
exports.default = router;
//# sourceMappingURL=index.js.map