function artcleless(arr){
	let StringArray = arr.split(",");
  console.log(StringArray);
	let len = StringArray.length;
  console.log(len);
	
	let artclelessArray = [];
	let regx = /\bthe|an|a\b/gi;

	let mp = {};

	for(let i = 0; i < len; i++){
		let word = StringArray[i].replace(regx, "").trim();
		artclelessArray.push(word);
		mp[word] = StringArray[i];
	}
  console.log(mp);
  console.log(artclelessArray);
	let ans = [];
	artclelessArray.sort();
  console.log(artclelessArray);

	for(let i of artclelessArray){
    console.log(i);
		ans.push(mp[i])
	}
  return ans;
}

const input = prompt("Enter/ a coma separated String");
// console.log(input.s/plit(","))

alert(artcleless(input)); 


