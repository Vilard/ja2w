// -------------------------------------------
// submenu button
function submenuButton () {
	let hum = document.createElement("div"),
			span = document.createElement("span")
			hum.setAttribute("class", "submenu-button")
			hum.appendChild(span)
			content.appendChild(hum)
			// -----------------------------------------------------

// Submenu button listner

	let smButton = document.querySelector(".submenu-button")
	smButton.addEventListener("click", function() {
		let submenu = document.querySelector(".submenu")
		if (submenu.style.display == "none") {
			submenu.style.display = "flex"
		} else { submenu.style.display = "none" }
	})
}
// ================================================
export default submenuButton