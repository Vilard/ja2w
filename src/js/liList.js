import sortTheData from "./sortTheData.js"
import submenuButton from "./submenuButton.js"
async function liList(sortedData) {
	let obj = {
		ul			: document.querySelector(".submenu"),
		li			: document.createElement("li"),
		arr 		: sortedData.getFilterKeys,
		arr2		: sortedData.getDeltaKeys
	}
	obj.setSubmenuNameProps = function (arr=this.arr) {
		for (let i of arr) {
			let li = document.createElement("li") 
			li.innerHTML = i
			this.ul.appendChild(li)
		}
	}
	obj.setSubmenuNameProps()

	let headerMenuProps = document.createElement("div") 
			headerMenuProps.setAttribute("class", `header-prop`)
			content.appendChild(headerMenuProps)
	let header = document.querySelector(".header-prop");
	obj.headerProps = function () {
		for (let i of this.arr2) {
			let g = document.createElement("div")
			g.setAttribute("class", `element ${i}`  )
			if (i != "name") {
				g.innerHTML = i
			}
			header.appendChild(g)
		}
	}
	obj.headerProps()
// ===========================================
	submenuButton()
// -------------------------------------------

let menuActiveProps = document.querySelectorAll(".element")
// console.log(menuActiveProps)
menuActiveProps.forEach(function(x) {

	if(x.innerHTML != "type") {
		x.addEventListener("click", function () {
		let	elementArr = x.innerHTML
		let indexElement = sortedData.getDeltaKeys.indexOf(elementArr)
		// let weapHtmlAll = document.querySelectorAll(".weapon")
		console.log(sortedData.getFilterKeys)
		sortedData.getFilterKeys.push(elementArr)
		sortedData.getDeltaKeys.splice(indexElement, 1)

		console.log(sortedData.getFilterKeys)
		console.log(sortedData.getDeltaKeys)
		// console.log(sortedData.getObj)
		// console.log(sortedData.getElementList)
		// sortTheData.getElementList()




			x.remove()
		})
	}
})
	// function a () {
	// 	let weapHtmlAll = document.querySelectorAll("weapon")
	// 	console.log(weapHtmlAll)

	// }
		// document.getElementClassName(x.innerHTML)
}

export default liList