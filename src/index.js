import "./css/style.css"
// import loadWeapon from "./js/xhr.js";
import filterData from "./js/filterData.js";
import clear from "./js/clear.js";
import getIndex from "./js/getIndex.js";
// import getMaskDelta from "./js/getMaskDelta.js";

import sortTheData from "./js/sortTheData.js";
import liList from "./js/liList.js"
// import wobj from "./js/weaponObj.js"
// import ddd from "./js/new.js"
import createElementContent from "./js/createElementContent.js"

// ------------------------------
// мэйн вкладка - ALL

let index = 1;
createContent()
async function createContent () {
	clear()
	let data = await filterData()
	let sortedData = await sortTheData(data)
	let createLiList = await liList(sortedData) 
	// console.log(sortedData.getElementList())
	for (let i of sortedData.getElementList()) {
		if(i.type == index) {
		// ------------------------------
				createElementContent(i)
		// ------------------------------
		}
	}
}





// --------------------------------------------
// upper menu listner


var upperMenuListener = function (){
	var m = document.querySelectorAll(".menu>a")
	for (let i of m) {
		i.addEventListener("click", function(e){
			let element = this;

			index = getIndex(m, element)
			createContent()	
		})
	}		
}

upperMenuListener()

// =========================================


	