/** @format */

import style from './index.less'

console.log(style)

function component() {
	var element = document.createElement('div')

	// Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
	element.innerHTML = '<p>hello webpack</p>'

	return element
}

document.body.appendChild(component())
