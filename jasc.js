var msg;
var answer = window.confirm('do you want to rent?');
if(answer == true)
{

    msg = alert("so you are on the right place");
    var age =window.prompt("how old are you ? ");
    
    if(age <= 18)
    {
        alert("sorry you are under age , lets do something else ");
        var num1 = window.prompt("enter a number please")
        alert("the number is "+num1);
        var conv = (parseInt(num1));
        var oper = 3 + conv;
        


       alert("we join what your input with 3 as string  " + num1+ 3);
       alert("we add your input to 3 as a summation = "+ oper);
       alert("come back when you grow up :p ");
    }
    else
    {
        var name = window.prompt("what is your name ?");
        alert ("so your name is :"+ name +"  and your age is "+age );
        alert("ok , lets check out");
    }
}
else
{
    msg = alert("it is ok , you can check our offers");

}

document.write("welcome any time ");





