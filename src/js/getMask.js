// getMaskDelta.js
function getMask (obj) {
	let mask = {
		filterArr: [
			"bulletSpeed",
			"silencedSound",
			"class",
			"calibre",
			"sound",
			"burstSound",
			"overheatingSingleShotTemperature",
			"overheatingJamThreshold",
			"overheatingDamageThreshold",
			"recoilX",
			"recoilY",
			"magSize",
			"silencedBurstSound",
			"reloadSound",
			"swapClips",
			"manualReloadSound",
			"reloadDelay",
			"locknLoadSound",
			"autofireShotsPerFiveAP",
			"autoPenalty",
			"burstAniDelay",
			"burstPenalty",
			"index",
			"apToReload",
			"shotsPer4Turns",
			"maxDistForMessyDeath",
			"deadliness",
			"hitVolume"
			// "type" не отключать
		],
		inArr: Object.keys(obj[0]),
		delta: function  () {
			return this.inArr.filter(i=>!this.filterArr.includes(i))
	    // .concat(arr.filter(i=>!inArr.includes(i)))
		}
	}
	// console.log(mask.delta)
	return {
		delta : mask.delta(), 
		filter: mask.filterArr
	}
}

// =========================================================

export default getMask