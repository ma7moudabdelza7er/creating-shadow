let inputs = document.querySelectorAll(".sliders input")
let output = document.getElementById("css-code");
let btn = document.getElementById("copy");
let color = document.getElementById("shadowcolor")
let box = document.getElementById("box")
inputs.forEach(function(input){
    input.addEventListener("change",createBox)
})
color.addEventListener("change",createBox)

btn.addEventListener("click",function(){
    output.select()
    document.execCommand("copy")
    alert("code copied")
})
function createBox(){
    let X = inputs[0].value;
    let Y = inputs[1].value;
    let blurRadies = inputs[2].value;
    let spreadRadies = inputs[3].value;
    shadowColor = color.value
    let BShadow = `${X}px ${Y}px ${blurRadies}px ${spreadRadies}px`
    box.style.boxShadow = `${BShadow} ${shadowColor}` 
    output.value = `${BShadow} ${shadowColor}`
}
// createBox()