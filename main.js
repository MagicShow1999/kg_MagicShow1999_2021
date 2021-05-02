const nums = process.argv;
const map = ["Zero","One","Two","Three","Four","Five", "Six", "Seven", "Eight","Nine"];

let res = "";
for (let i = 2; i < nums.length; i++) {
	
	for (let j = 0; j < nums[i].length; j++) {
		res += map[parseInt(nums[i].charAt(j))];
	}
	res += ",";
}

// use substring to get rid of the trailing ,
console.log(res.substring(0, res.length-1));