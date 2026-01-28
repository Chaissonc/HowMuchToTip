const submitButton = document.getElementById('submitButton');
const result = document.getElementById('result');
const percentage10Button = document.getElementById('percentage10Button');
const percentage15Button = document.getElementById('percentage15Button');
const percentage20Button = document.getElementById('percentage20Button');
const percentage25Button = document.getElementById('percentage25Button');



percentage10Button.addEventListener('click', function(){
console.log("Percentage 10 HIT")
const percentChosen = document.getElementById('percent')
percentChosen.value = 10;
})

percentage15Button.addEventListener('click', function(){
console.log("Percentage 15 HIT")
const percentChosen = document.getElementById('percent')
percentChosen.value = 15;
})

percentage20Button.addEventListener('click', function(){
console.log("Percentage 20 HIT")
const percentChosen = document.getElementById('percent')
percentChosen.value = 20;
})

percentage25Button.addEventListener('click', function(){
console.log("Percentage 25 HIT")
const percentChosen = document.getElementById('percent')
percentChosen.value = 25;
})

submitButton.addEventListener('click', function()
    {
    const bill = Number(document.getElementById('bill').value);
    const percent = Number(document.getElementById('percent').value);
    const tip = (bill * percent) / 100;
    result.innerText = "Your tip is: $" + tip;
    console.log(bill, percent, tip ); //for debug
    });
