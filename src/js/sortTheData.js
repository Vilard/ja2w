// функция должна принимать значения из обекта data[0] 
// и стравнивать на наличие ключей из массива/объекта,
// после возвращать объект из ключей которых нет в массиве
import getMask from "./getMask.js"

async function dataSort(obj) {

	function createArr () {
	let arrEnd = [];
		for(let i in obj) {
			arrEnd.push(oneElementArr(obj[i]))
		}
		return arrEnd
	}
	
	function oneElementArr (element){
		let d = getMask(obj).delta
		let g = element
		let objFilter = {};
		for(let key in element) {
			for(let i of d){
				if (i == key) {
					objFilter[key] = element[key];
				}
			}
		}
		return objFilter;
	}
	return {
		getElementList: createArr, 
		getDeltaKeys	: getMask(obj).delta,
		getFilterKeys : getMask(obj).filter,
		getObj				: obj
	}
}
// ======================================================


export default dataSort