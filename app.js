let dark =document.querySelector(".dark")
let body=document.querySelector("body")
let nav =document.querySelector("nav")
let card =document.querySelector(".box2 .card")
let card2 =document.querySelector(".box1 .card")
let btn1 =document.querySelector(".btn1")
let input =document.querySelector(".card_div input")
let btn2 =document.querySelector(".btn2")
let form =document.querySelector("form")
let inp1 =document.querySelector(".inp1")
let inp2 =document.querySelector(".inp2")
let inp3 =document.querySelector(".inp3")
let inp4 =document.querySelector(".inp4")
let inp5 =document.querySelector(".inp5")
let btn3 =document.querySelector(".card_bottom button")
let i1=document.querySelector(".i1")
let i2=document.querySelector(".i2")
let i3=document.querySelector(".i3")
let i4=document.querySelector(".i4")
let h4=document.querySelector(".contact_div h4")
let p=document.querySelector(".contact_div p")
let img=document.querySelector(".card_top img")
let div=document.querySelector("#div")
let img1=document.querySelector(".img1")
let xbutton=document.querySelector(".x")
let download=document.querySelector(".download")

console.log(dark);

dark.addEventListener("click",function (){
body.classList.toggle("qora")
nav.classList.toggle("dark1")
card.classList.toggle("dark1")
dark.classList.toggle("border")
input.classList.toggle("border")
btn2.classList.toggle("border")
form.classList.toggle("dark1")
inp1.classList.toggle("border")
inp2.classList.toggle("border")
inp3.classList.toggle("border")
inp4.classList.toggle("border")
inp5.classList.toggle("border")
btn3.classList.toggle("tugma")
card2.classList.toggle("dark1")
if(body.classList.contains("qora")){
    dark.textContent="Kun rejimi🌞"

}
else{
    dark.textContent="Tun rejimi🌙"
}






















})
i1.addEventListener("click",function(){
    i1.classList.toggle("fa-solid")
})
i2.addEventListener("click",function(){
    i2.classList.toggle("fa-solid")
})
i3.addEventListener("click",function(){
    i3.classList.toggle("fa-solid")
})
i4.addEventListener("click",function(){
    i4.classList.toggle("fa-solid")
})

btn3.addEventListener("click",function(){
let ism =inp1.value
let familya =inp2.value
let raqam =inp3.value
let email =inp4.value
let izoh = inp5.value
// document.write(ism + familya + raqam + email )
h4.textContent = ism +"  "+ familya
p.textContent=raqam







}) 

img.addEventListener("click",function(){
    div.classList.add("web")
img1.style.display="block"
download.style.display ="none"

xbutton.style.display="block"

})
xbutton.addEventListener("click",function(){
    div.classList.remove("web")
    img1.style.display ="block"
    xbutton.style.display ="none"
})
download.addEventListener("click",function(){
    div.classList.remove("web")
    img1.style.display ="none"
    download.style.display ="none"
})  