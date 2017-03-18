'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const db_1 = require("../db");
const router = express.Router();
router.get('/', (req, res, next) => {
    const posts = db_1.getRecentPost() || [];
    res.render('index', { title: 'Nuno Cruz', posts });
});
router.get('/contact', (req, res, next) => {
    res.render('contact', { title: 'Nuno Cruz - Contact' });
});
router.get('/articles', (req, res, next) => {
    res.render('articles', { title: 'Nuno Cruz - Articles' });
});
router.get('/about', (req, res, next) => {
    res.render('about', { title: 'Nuno Cruz - About' });
});
exports.default = router;
//# sourceMappingURL=index.js.map