'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const db_1 = require("../db");
const crypto = require("crypto");
const router = express.Router();
function addETag(content, res) {
    if (res.locals.asPartial) {
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
router.get('/', (req, res, next) => {
    const posts = db_1.getRecentPost() || [];
    res.render('index', { title: 'Nuno Cruz', posts });
});
router.get('/post/{id}', (req, res, next) => {
    const post = db_1.getPostHtml(req.params.id);
    res.send(post);
});
router.get('/contact', (req, res, next) => {
    res.render('contact', { title: 'Nuno Cruz - Contact' }, (e, b) => addETag(b, res));
});
router.get('/articles', (req, res, next) => {
    res.render('articles', { title: 'Nuno Cruz - Articles' }, (e, b) => addETag(b, res));
});
router.get('/about', (req, res, next) => {
    res.render('about', { title: 'Nuno Cruz - About' }, (e, b) => addETag(b, res));
});
exports.default = router;
//# sourceMappingURL=index.js.map