const add = document.getElementById("+");
const away = document.getElementById("-");
const res = document.getElementById("0");
const counter = document.getElementById("count");
let count = 0;
add.onclick = function(){
	count++;
	counter.textContent = count
}
res.onclick = function(){
	count=0;
	counter.textContent = count
}
away.onclick = function(){
	count--;
	counter.textContent = count
}