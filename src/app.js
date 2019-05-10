const tabris = require('tabris')
const pageA = require('./a')
const pageB = require('./b')

const navigationView = new tabris.NavigationView({
	left: 0,
	right: 0,
	top: 0,
	bottom: 0
}).appendTo(tabris.ui.contentView)

navigationView.append(pageA)
navigationView.append(pageB)