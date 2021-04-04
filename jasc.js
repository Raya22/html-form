var msg;
var answer = window.confirm('do you want to rent?');
if(answer == true)
{

    msg = alert("so you are on the right place");
    var age =window.prompt("how old are you ? ");
    
    if(age <= 18)
    {
        alert("sorry you are under age , lets do something else ");
        var num1 = window.prompt("enter a number please");
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

         // add a function to calculate the rent coast
         var days =0; 
         function rentcoast(days)
       {
          
          var coast = days*50;

          alert("the cost will be "+coast);
        
        }
        days=window.prompt("for how many days you want to rent the car?");
        rentcoast(days);

        // show an image
        var counter =0;
        counter =window.prompt("type a number to show you pictures ");
        for (var i = 0 ; i < counter ; i++)
        {
            document.write( '<img src ="https://www.automobilemag.com/uploads/sites/5/2020/11/2021-Range-Rover-Evoque-12.jpg" />')
        }

    }
}
else
{

    msg = alert("it is ok , you can check our offers");

    //Add validation on one of the user inputs
    answer = window.confirm('do you want to see our new cars?');
    while (answer != true)
    {
        answer = window.confirm('do you want to see our new cars?');

    }


}

document.write("welcome any time ");





