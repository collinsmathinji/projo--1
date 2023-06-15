let btn=document.querySelector(".button")
let person=document.querySelector(".person")
let quote=document.querySelector(".quote")

const quotes=[{
    quote:"Frankly, my dear, I don't give a damn.",
    person:"Rhett Butler"
},{
    quote:"I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character.",
    person:"Martin Luther King"
},{
    quote:"I'll be back.",
    person:"Terminator"
},{
    quote:"Not all those who wander are lost.",
    person:"J. R. R. Tolkein"
},{
    quote:"Nothing is certain except for death and taxes.",
    person:"Benjamin Franklin"
},{
    quote:"The love of money is the root of all evil.",
    person:"The Bible"
},{
    quote:"You must be the change you wish to see in the world.",
    person:"Mahatma Ghandi"
},{
    quote:"To be or not to be, that is the question.",
    person:"William Shakespeare"
}]
btn.addEventListener("click",function(){
let random=Math.floor(Math.random()*quotes.length)
 quote.innerText=quotes[random].quote
 person.innerText=quotes[random].person
})