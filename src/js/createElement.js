function createElement(tag, innerHTML, attrName, attrVal) {
	// var parrent = document.querySelector(parrent);
	tag = document.createElement(tag);
	if(innerHTML != undefined) {
		tag.innerHTML = innerHTML;
	} 
	if(attrVal != undefined && attrName != undefined) {
		tag.setAttribute(attrName, attrVal);
	}
		// console.log(element)
	return tag 
}
export default createElement;