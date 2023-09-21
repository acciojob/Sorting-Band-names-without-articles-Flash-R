function artcleless(arr){
	let StringArray = arr.split(",");

	let len = StringArray.length;

	
	let artclelessArray = [];
	let regx = /\bthe|an|a\b/gi;

	let mp = {};

	for(let i = 0; i < len; i++){
		let word = StringArray[i].replace(regx, "").trim();
		artclelessArray.push(word);
		mp[word] = StringArray[i];
	}

	let ans = [];
	artclelessArray.sort();
	
	let ele = document.getElementById("#band");
	for(let i of artclelessArray){
		
	ele.innerHTML = '<li>'+ mp[i] +'</li>';
	}
	
}

const input = prompt("Enter/ a coma separated String");
// console.log(input.s/plit(","))

artcleless(input); 


