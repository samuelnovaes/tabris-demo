const tabris = require('tabris')
const pageB = require('./b')

const page = new tabris.Page({
	title: 'A',
	autoDispose: false
})

const btn = new tabris.Button({
	text: 'Ir para B'
}).appendTo(page)

btn.on('select', () => {
	page.parent().append(pageB)
})

module.exports = page