async function createElementContent (weapon) {
	var	element, namePlaceholder, valuePlaceholder;
	var div = document.createElement("div");
	// console.log(1)
	function view (){
		for (var k in weapon ) {
			if(k != "filter" /*&& k != "type"*/ ) {
				element = document.createElement("div")
				namePlaceholder = document.createElement("p")
				valuePlaceholder = document.createElement("div")
				if (k!= "name"){
					namePlaceholder.innerHTML = k;
				}
				valuePlaceholder.innerHTML = weapon[k];
				element.setAttribute("class", "element " + k)
				// element.appendChild(namePlaceholder) //название свойства
				element.appendChild(valuePlaceholder)
				div.appendChild(element)
				div.setAttribute("class", "weapon")
				content.appendChild(div)
			}
		}
	}
	view()
}

export default createElementContent;