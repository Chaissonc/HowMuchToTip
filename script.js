//declare variables
const submitButton = document.getElementById('submitButton');
const tipTotal = document.getElementById('tipTotal');
const totalTotal= document.getElementById('totalTotal');
const percentage10Button = document.getElementById('percentage10Button');
const percentage15Button = document.getElementById('percentage15Button');
const percentage20Button = document.getElementById('percentage20Button');
const percentage25Button = document.getElementById('percentage25Button');

//functions
function update (){
    const bill = Number(document.getElementById('bill').value);
    const percent = Number(document.getElementById('percent').value);
    const tip = (bill * percent) / 100;
    const total = (bill+tip);
    tipTotal.innerText = "$" + tip;
    totalTotal.innerHTML = "$" + total;
    console.log(bill, percent, tip ); //for debug
}

//buttons
percentage10Button.addEventListener('click', function(){
console.log("Percentage 10 HIT")
const percentChosen = document.getElementById('percent')
percentChosen.value = 10;
    update()
})

percentage15Button.addEventListener('click', function(){
console.log("Percentage 15 HIT")
const percentChosen = document.getElementById('percent')
percentChosen.value = 15;
    update()
})

percentage20Button.addEventListener('click', function(){
console.log("Percentage 20 HIT")
const percentChosen = document.getElementById('percent')
percentChosen.value = 20;
    update()
})

percentage25Button.addEventListener('click', function(){
console.log("Percentage 25 HIT")
const percentChosen = document.getElementById('percent')
percentChosen.value = 25;
   update()
})

