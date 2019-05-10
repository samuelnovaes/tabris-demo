const tabris = require('tabris')
const pageA = require('./a')

const page = new tabris.Page({
	title: 'B',
	autoDispose: false
})

const btn = new tabris.Button({
	text: 'Ir para A'
}).appendTo(page)

btn.on('select', () => {
	page.parent().append(pageA)
})

module.exports = page