var dollar = Number(10.900);
var yevro = Number(12272,64);
let bodyImg = document.querySelector(".body")


var cost = (dollar * 500 + dollar * 250 + yevro * 120);

console.log(cost)

var value = prompt("Mablag'ingizni kiriting (so'mda)")


if(value >= cost){
  console.log("Oka uje yol'dasiz!");
  bodyImg.classList.add("body-active")
}else{
  console.log("Xali ishlashiz kerag ekan!")
  bodyImg.classList.add("body-passive")
}