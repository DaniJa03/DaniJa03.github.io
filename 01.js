function change(){
    this.style.backgroundColor = "purple"
    this.classList += "change"
    setTimeout(() => {this.style.backgroundColor = "red";}, 1000)
}

console.log("test")
let c = document.querySelectorAll(".card")
console.log(c)

for (const ttt of c){
    ttt.addEventListener("click", change)
}

for(let index = 0; index < 16; index++){

}
