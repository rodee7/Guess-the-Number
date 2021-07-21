var guess=Math.floor(Math.random()*100)
function guessNumber()
{
    var num=document.getElementById('num').value
    if(guess==num)
    document.getElementById('result').innerHTML= "Hurray! You've Guessed it right"
    else if(guess>num)
    document.getElementById('result').innerHTML= "Try your luck with a greater number"
    else
    document.getElementById('result').innerHTML= "Try your luck with a smaller number"

}