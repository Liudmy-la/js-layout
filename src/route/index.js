// Підключаємо роутер до бек-енду
const express = require('express')
const router = express.Router()

// Підключіть файли роутів
const test = require('./test')
const page01 = require('./blog-page01')
const page02 = require('./blog-page02')
// Підключіть інші файли роутів, якщо є

// Об'єднайте файли роутів за потреби
router.use('/', test)
router.use('/page01', page01)
router.use('/page02', page02)
// Використовуйте інші файли роутів, якщо є

// Експортуємо глобальний роутер
module.exports = router
