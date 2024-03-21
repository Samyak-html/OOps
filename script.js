const grid = document.querySelector(".grid");
const container = document.querySelectorAll(".container");
const price = document.querySelector("#price");
const Title = document.querySelector("#title");
const Pic = document.querySelector("#pic");
class Item{
    
    img ;
    title;
    price;
};
// var Baloon = new Item;
// Baloon.title="Baloooon";
// Baloon.price=30;
// for(key in Baloon){
//     console.log(`${key} = ${Baloon[key]}  `);
// }
const Data = new Array;
function takeTitle(){

let obj = new Item;

obj.title=Title.value;
obj.price=price.value;
if(Pic.value){
    obj.img=Pic.value;
}
else{
obj.img="Content image.png"
}

let NewContainer = document.createElement("div");
NewContainer.setAttribute("class","container");
grid.append(NewContainer);
let NewIMG = document.createElement("img");
NewIMG.setAttribute("src",obj.img);
NewIMG.setAttribute("alt","unload image")
NewContainer.append(NewIMG);
let NewTitle = document.createElement("h3");
NewTitle.innerText=obj.title;
NewContainer.append(NewTitle);
let NewPrice = document.createElement("h4");
NewPrice.innerText=`price- ${obj.price}rs`;
NewContainer.append(NewPrice);
Data.push(obj);
}


