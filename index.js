//1
let container1 = document.getElementById("container")
console.log(container1)
//2
let container2 = document.querySelector("#container")
console.log(container2)
//3
let allListItems = document.querySelectorAll(".second")
console.log(allListItems)
//4
let olTagInThird = container1.querySelector("ol").querySelector(".third")
console.log(olTagInThird)
//5
//container1.textContent = "Hello!"
//6
let footer = document.querySelector(".footer")
footer.classList.add("main")
console.log(footer.className)
//7
footer.classList.remove("main")
console.log(footer.className)
//8, 9 and 10
let ulEl = document.querySelector("ul")
let newli = ulEl.appendChild(document.createElement("li"))
newli.textContent = 4
//12 (there is no 11 in the docs)
let ol = container1.querySelector("ol")
let olchildren = ol.children
for(let i of olchildren){
    i.style.backgroundColor = "green"
}
//13
footer.remove()

