// const query = document.querySelectorAll("box1","box2","box3","box4")

// query.forEach((box, index) => {
//     box.id = "id1"
// })

const boxes = document.querySelectorAll('.box1, .box2, .box3, .box4');

boxes.forEach((box,index) => {
    box.id = `id${index + 1}`; // id1, id2, id3, id4
});

console.log(document.baseURI); //base url
console.log(document.links);// this give html collection not array

console.log(document.getElementById("id1")); //we id
// console.log(document.getElementById("firsthead").innerHTML = "This is dom changed 1"); //we changed inner html
console.log(document.getElementById("id1").className); //give class

console.log(document.getElementById("id1").getAttribute("class")); //give class
console.log(document.getElementById("id1").setAttribute("class", "NewClass")); //change class

const store = document.getElementById("id2"); //store element in variable
const ht = document.createElement("h1");

store.style.backgroundColor = "Yellow" //change bg color with inline css
store.style.padding = "20px";

const firstelement = document.getElementById("id1")
firstelement.style.backgroundColor = "blue"

let text = document.getElementById("firsthead")

console.log(text.innerText);
console.log(text.textContent);
console.log(text.innerHTML);
console.log(document.getElementById("firsthead").innerHTML = "This is dom changed 1"); //we changed inner html
//innerText this does not show none display element
//textContent when text display is none it shows it fully
//innerHTML this show full html element

console.log(store.getElementsByClassName("box3")); //we got full html collection

/*important*/
console.log(document.querySelector(".box3")); //this give first element of class
document.querySelector("input[type = 'password']").style.backgroundColor = "orange"; //this give first element of input type password and change bg color

let myul = document.querySelector("ul")
myul.querySelector("li").style.color = "aqua"//query selected only select first item
myul.querySelector("li").style.backgroundColor = "green"//query selected only select first item

firsthead.innerText = "another change"
/* always remember 
nodelist and Html collection are not pure array some property of arreay can work on them */ 

// myul.querySelectorAll("li").style.color = "white"; //this will not work because querySelectorAll return nodelist not array
myul.querySelectorAll("li")[1].style.color = "white" //we are selecting element of node list not full node list.
let nodelist = myul.querySelectorAll("li")


nodelist.forEach( (p) => {p.style.backgroundColor = "skyblue"}); //this works we use function here

//js dome notes matches contain and clossest return true and false
// also there are some other methods like firstchild and parentelement

nodelist[2].style.backgroundColor = "brown"; //in node list we can acces elemt with index value
//we can convert nodelist to array 

document.getElementsByClassName('listitem') //without . write class name

let temp = document.getElementsByClassName('listitem')

const myArray = Array.from(temp) //converted and store in variable

myArray.forEach((item) => (item.style.backgroundColor = "yellow"))