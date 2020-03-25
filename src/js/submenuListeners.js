import crEl from "./createElement.js"
import createElementContent from "./createElementContent.js"

function permutation() {
	var list = document.querySelectorAll(".submenu>li")
	var headerProp = document.querySelector(".header-prop")
	// var arr = []
		list.forEach(function(element) {
			element.addEventListener("click", function(){
			var tag = {
				p: element.querySelector("p"),
				input: element.querySelector("input")
			}
			if(!tag.input.checked) {
				tag.input.checked = true;
				// if(!arr.includes(tag.p.innerHTML)) {
				// 	arr.push(tag.p.innerHTML)
				// }if(!arr.includes(tag.p.innerHTML)) {
				// 	arr.push(tag.p.innerHTML)
				// }
				var prop = crEl("div", tag.p.innerHTML)
				headerProp.appendChild(prop)
				createElementContent(weapon)
			}
			else {
				tag.input.checked = false;	
				var headerPropsList = document.querySelectorAll(".header-prop>div")
				headerPropsList.forEach(function(element){
					if(element.innerHTML == tag.p.innerHTML)
						element.remove()
				})
				// console.log(typeof(headerProp))
				// arr.splice(arr.indexOf(tag.p.innerHTML), 1)	
			}
			// console.log(tag.input.checked)
			})
    })
			// return arr
	}

export default permutation;