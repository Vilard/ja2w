import loadData from "./xhr.js";
import mask from "./sortTheData.js"

async function filterData() {

	let data = await loadData();
	let arrData = [];

	for (let i of data) {
		if (i.name != "Nothing") {
			arrData.push(i)
		}
	}
	return arrData 
}

export default filterData