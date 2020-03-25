// import permutationObj from "./objectPremutation.old";
// import crEl from "./createElement.js"
// // import createElementContent from "./createElementContent.js"
// import submenuListeners from "./submenuListeners.js"
// // import * as a from "./objectPremutation.js";
// // import "css/style.css";


const url = './src/json/weapons.json';
async function loadData () {
	let response = await fetch(url)
	let data = await response.json() 
	let dataListArr = await data.WEAPONLIST.WEAPON;
	
	let weaponList = function (){
		let list = dataListArr;
		let wpList = [];
			for (let i of list){
			var weapon = {
				// filter: list[i].szWeaponName != "Nothing",
				name: i.szWeaponName,									//название
				index: i.uiIndex,									//индекс 
				class: i.ubWeaponClass,						
				type: i.ubWeaponType,									//тип оружия(пп, автомат, снайперка и тд)
				calibre: i.ubCalibre,							//калибр боеприпасов
				readyTime: i.ubReadyTime,							//скорость вскидывания
				handling: i.Handling,									//сложность обращения
				shotsPer4Turns: i.ubShotsPer4Turns,   //скорострельность 
				burstPenalty: i.ubBurstPenalty,		//??? отдача ???
				bulletSpeed: i.ubBulletSpeed,
				impact: i.ubImpact,										//урон
				deadliness: i.ubDeadliness,
				accuracy: i.bAccuracy,							//точность
				magSize: i.ubMagSize,				 					//емкость обоймы
				range: i.usRange,									//дистанция
				reloadDelay: i.usReloadDelay,
				burstAniDelay: i.BurstAniDelay,		
				attackVolume: i.ubAttackVolume,       //громкость выстрела
				hitVolume: i.ubHitVolume,							//громкость попадания
				sound: i.sSound,
				burstSound: i.sBurstSound,
				silencedBurstSound: i.sSilencedBurstSound,
				reloadSound: i.sReloadSound,
				locknLoadSound: i.sLocknLoadSound,
				silencedSound: i.SilencedSound,
				autofireShotsPerFiveAP: i.bAutofireShotsPerFiveAP,
				apToReload: i.APsToReload,
				swapClips: i.SwapClips,
				maxDistForMessyDeath: i.MaxDistForMessyDeath,
				autoPenalty: i.AutoPenalty,
				manualReloadSound: i.ManualReloadSound,
				accuracy: i.nAccuracy,
				recoilX: i.bRecoilX,
				recoilY: i.bRecoilY,
				aimLevels: i.ubAimLevels,
				overheatingJamThreshold: i.usOverheatingJamThreshold,
				overheatingDamageThreshold: i.usOverheatingDamageThreshold,
				overheatingSingleShotTemperature: i.usOverheatingSingleShotTemperature
			}
			wpList.push(weapon);
		}
			return wpList;
	}
	return weaponList();
}

export default loadData
