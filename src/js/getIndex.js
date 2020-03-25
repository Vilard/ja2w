// getIndex.js
//--------------------------------
// Получение номера элемента

function getIndex (obj, element) {
	let counter = -1;
	for(let k of obj) {
			counter++;
		if (k == element) {
			break
		}
	}
	return counter
}
// -----------------------------
export default getIndex;