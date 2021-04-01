> # JavaSript
first let us know what is the meaning of script , **script**
is a chain of instructions to do something 

 it's seems to:
* recipes
* handbooks
* manuals

### before you write a script 
you have to state your goal and break it down then determine what is the steps and the chain instructions to reach it.

1. define the goal
2. design the script 
   * we can skitch in a flowchart 
3. code each step

![](https://cdn.lifehack.org/wp-content/uploads/2016/06/07110310/The-2.png)

and to write a script for the computer you have to think like a computer "prggrammatically" , when the computer solve a problem it follows a chain of instructions which often we will not choose if we will solve the same problem.
and to talk with computers we need a language to make a communication with them
![](https://devbizops.files.wordpress.com/2020/04/135-choice-of-programming-language.jpg)

for now we will use **JS** JavaScript to write the instructions which is the world's most popular,easy to learn programming language.
we will starting with the :
> expressions 

in JS expressions mean valid set of literals, variables, operators and expressions that evaluates to a single value. The value may be a number, a string, or a logical value ,there are two types of expressions:
* expressions that just assign a value to a variable
 like `var` expression
 ```js
 var welcome = "enjoy reading";
 var num = 12;
 ```
 * expression that use two or more values to return a single value

  ```js
 var mathoperation-sum = 1 + 2 ;
 var mathoperation-mul = 1 * 2 ;
 var mathoperation-sub = 1 - 2 ;
 var mathoperation-div = 1 / 2 ;

 ```

 > ### the operators

 the operator performs some operation on single or multiple operands and produces a result.

* ASSIGNMENT OPERATORS : assigns the value from the right operand to the left operand. 
```js
 var name = "Raya";
 var age = 27 ;
```
* ARITHMETIC OPERATORS :  it take numerical values as their operands and return a single numerical value.
```js
var f1 = 22;
var f2 = 2;
var fmul = f1 * f2; 
var fsum = f1 + f2;
var fsub = f1 - f2;
var fdiv = f1 / f2;
var fmod = f1 % f2;
```


* STRING OPERATORS  : which can be used on string values, the concatenation operator (+) concatenates two string values together, returning another string that is the union of the two operand strings
```js
var n1 = "Raya";
var n2 = "Lobany";
var full-n = n1 + n2;
var direc = 'hello' + 'world'
```

* COMPARISON OPERATORS : compares its operands and returns a logical value based on the comparison (true / false ).
```js
var check = 5 > 8 ;
var ch = 6 < 2 ;

```

* LOGICAL OPERATORS  :  combine expression 

**&&**  **(and)** it's true if the combined expressions all true ;

**||** **(or)** it's true if at least one of the combined expressions is true.

```js
var j = (8 > 3) && (1 < 4) ;
var h = (2 > 7) || (1 < 2) ;
var k = (4 > 3) && (9 < 4) ;
```
the value of **j** will be true it's return  **j=1** 

the value of **h** will be true it's return  **h=1** 

the value of **k** will be false it's return  **k=0** 

here is the mathematical 
operators, which you can use with numbers.

| name    |  operator   |  example  |
|   -  |  -   | -   |
| addition   |  +  | 1+1 =2 |
| subtraction    |  -   |  4-2=2  |
|division     |    / |  6/3=2  |
| multiplication | *    |2*3=6     |
|  increment |   ++  |   i =3; i++; **(i=4)** |
|  decrement |  --   | i =3; i--;  **(i=2)**    |
| modulus  |   %  | 9 % 2 =1   |



> ## what is functions
it is a group of series statements (block of code) to perform a specific task. 

```
function name(parameter1, parameter2, parameter3)
 {
  // code to be executed
}
```

![](https://res.cloudinary.com/practicaldev/image/fetch/s--pClJgvrv--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/mt2jlra7jd5gdgl8up8y.png)


so when we call the function the code which inside this function will execute 

calling the function
![](https://cdn.programiz.com/sites/tutorial2program/files/javascript-return-statement.png)


**declaring function** depends on what is the function suppose to do for example if we want to write a function to calculate the area of a rectangle we need two parameters **length** and **width** to return the **area** as aresult

```js
function recArea(length , width)
{
    var area = length * width ;
    return area ;
}

```

and wa can call `recArea()`
```js
function recArea(length , width)
{
    var area = length * width ;
    return area ;
}

var rectangle2 = recArea(8, 9);
var rectangle3= recArea(4, 3);


```






