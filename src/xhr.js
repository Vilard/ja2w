// const hello = require("./hello.js");
// import m from "./hello.js";
// console.log(m());

// import hello
// import "css/style.css";
var content = document.getElementById("content");
var data;
var list;

loadWeapon(2);
function loadWeapon(indexWeaponType) {
  var xhr = new XMLHttpRequest();

  // xhr.open('GET', 'json/phone.json', true);
  xhr.open('GET', './src/json/weapons.json', true);
  xhr.send();
	xhr.onreadystatechange = function() { // (3)
	  if (xhr.readyState != 4) return;
		// button.innerHTML = "ready";

    if (xhr.status != 200) {
      // обработать ошибку
      console.log(`Ошибка ${xhr.status}: ${xhr.statusText}`);
    } else {
      // вывести результат
			data = xhr.responseText;
			list = JSON.parse(data).WEAPONLIST.WEAPON;
			// for (let j in list) {
			// 	console.log(list[j])
			// }

			for (var i = 0; i < list.length; i++) {

				var weapon = {
					filter: list[i].szWeaponName != "Nothing",
					name: list[i].szWeaponName,									//название
					// index: list[i].uiIndex,									//индекс 
					// class: list[i].ubWeaponClass,						
					type: list[i].ubWeaponType,									//тип оружия(пп, автомат, снайперка и тд)
					calibre: list[i].ubCalibre,							//калибр боеприпасов
					readyTime: list[i].ubReadyTime,							//скорость вскидывания
					handling: list[i].Handling,									//сложность обращения
					shotsPer4Turns: list[i].ubShotsPer4Turns,   //скорострельность 
					// burstPenalty: list[i].ubBurstPenalty,		//??? отдача ???
					// bulletSpeed: list[i].ubBulletSpeed,
					impact: list[i].ubImpact,										//урон
					// deadliness: list[i].ubDeadliness,
					// accuracy: list[i].bAccuracy,							//точность
					magSize: list[i].ubMagSize,				 					//емкость обоймы
					range: list[i].usRange,									//дистанция
					// reloadDelay: list[i].usReloadDelay,
					// burstAniDelay: list[i].BurstAniDelay,		
					//attackVolume: list[i].ubAttackVolume,       //громкость выстрела
					//hitVolume: list[i].ubHitVolume,							//громкость попадания
					// sound: list[i].sSound,
					// burstSound: list[i].sBurstSound,
					// silencedBurstSound: list[i].sSilencedBurstSound,
					// reloadSound: list[i].sReloadSound,
					// locknLoadSound: list[i].sLocknLoadSound,
					// silencedSound: list[i].SilencedSound,
					// autofireShotsPerFiveAP: list[i].bAutofireShotsPerFiveAP,
					apToReload: list[i].APsToReload,
					// swapClips: list[i].SwapClips,
					// maxDistForMessyDeath: list[i].MaxDistForMessyDeath,
					// autoPenalty: list[i].AutoPenalty,
					// manualReloadSound: list[i].ManualReloadSound,
					// accuracy: list[i].nAccuracy,
					// recoilX: list[i].bRecoilX,
					// recoilY: list[i].bRecoilY,
					// aimLevels: list[i].ubAimLevels,
					// overheatingJamThreshold: list[i].usOverheatingJamThreshold,
					// overheatingDamageThreshold: list[i].usOverheatingDamageThreshold,
					// overheatingSingleShotTemperature: list[i].usOverheatingSingleShotTemperature
				}
				if (weapon.filter  ) { 
					if (indexWeaponType == 0 ){
						createElement()
					} else if( weapon.type == indexWeaponType) {
							createElement()
					} 
				}
			}
    }
		function createElement () {
				var	element, namePlaceholder, valuePlaceholder;
				var div = document.createElement("div");
				function view (){
					for (var k in weapon ) {
						if(k != "filter" && k != "type" ) {
							element = document.createElement("div")
							namePlaceholder = document.createElement("p")
							valuePlaceholder = document.createElement("div")
							if (k!= "name"){
								namePlaceholder.innerHTML = k;
							}
							valuePlaceholder.innerHTML = weapon[k];
							element.setAttribute("class", "element " + k)
							element.appendChild(namePlaceholder)
							element.appendChild(valuePlaceholder)
							div.appendChild(element)
							div.setAttribute("class", "weapon")
							content.appendChild(div)
						}
					}
				}
				view()
		}
  }
	// button.innerHTML = "loading...";
	// button.disabled = true;
}

// view
var menu = document.querySelector(".menu");
menu.addEventListener("click", function(e){
	var index = [].slice.call(this.children).indexOf(e.target);
    loadWeapon(index)
    if (content != "") {
    	clear()
    }
	function clear () {
		content.innerHTML = "";
	}
})

var submenuButton = document.querySelector(".submenu-button");
submenuButton.addEventListener("click", function() {
	var submenu = document.querySelector(".submenu");
	if (submenu.style.display != "flex") {
		submenu.style.display = "flex"
	} else {
		submenu.style.display = "none"
	}
})

export default loadWeapon;
