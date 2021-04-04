> ## comparison operators
compares between operands and return a logical value depends on if the comparison is true.
* == is equal to
   * it's return true if the two compared values are the same.
   
       (2 == 2) it's will return true

       ('hello' == 'hi') it's will return false 

* != is not equal to 
   * it return false if the condition true 

      (2 != 2) it's will return false

       ('hello' != 'hi') it's will return true


* === strict equal to
   * it check if the value and the data type between the operands are the same
('2' === 2) it will return false because it's a different data type.

     ('2' === '2') it will return true.


* !== strict not equal to
   * it check if the value and the data type between the operands are not the same

     ('2' !== 2) it will return true because it's a different data type.

     ('2' !== '2') it will return false.

* ( > ) greater than
   * it's check if the number on the left is greater than the number on the right 

      2 > 3 it returns false
      7 > 2 it return true
    

* ( < ) less than
   *  it's check if the number on the left is less than the number on the right 

      2 < 3 it returns true
      7 < 2 it return false


* ( >= ) greater than or equal to
   *  it's check if the number on the left is greater than or equal the number on the right 

      2 >= 2 it returns true
      3 >= 8 it return false

* ( <= ) less than or equal
   *  it's check if the number on the left is less than or equal the number on the right 

      2 <= 3 it returns true
      7 <= 2 it return false
      2 <= 2 it returns true



> ## logical operators
allow you to compare the results of more than one comparison operator.

  ((2 > 5) && (7 > 3))
   
   ( false && true ) 
   
   the final result will be false.

   | x |&&  | y | result |
   | - | - | - | - |
   | true  |  && | true  | true  |
   |false   | &&| false   | false  |
   | true  | && | false  | false |
   |false   | && | true  | false   |

--------

| x | ! | result |
| - | - | - |
|  true | !  | false  |
|  false | !  | true  | 
-----


 | x |or  | y | result |
   | - | - | - | - |
   | true  |  or | true  | true  |
   |false   | or| false   | false  |
   | true  |or | false  | true |
   |false   | or | true  | true  |

   ------


   > ## loops

   if you want to run the same code over and over again when a condition is true, each time with a different value untill the condition is false.

   there are three common types of loops :
   * For
      * when we need to run the code specific number of times

```js
        for (var i =0 ; i< 5 ; i++)
      {
          document.write (i)

      }
```

it will print (i) five times.

![](https://i.stack.imgur.com/sScWG.png)


 * while loop 
    * when we don't know how many times we will repeat the loop , we use **while** and it will break out when the condition is false
```js
   while (expression)

   {

       statement1;
       statement2;

   }
```

* do while 
the difference between **do while** and **while** loop is do while loop will execute at least one time even if the condition is false

![](https://www.bookofnetwork.com/images/javascript-images/JS_Slide-73_09Mar17_1433.png)



for loop example :

```js
for (var i =0 ; i< 5 ; i++)
{
    document.write(i);
}



the output will be
0
1
2
3
4
```


while loop example :

```js
var j = 0
while (j < 5)
{
    document.write(j);
    j++;
}




the output will be 
0
1
2
3
4
```


do while example :
```js
var k = 0
do (document.write(k))
{
    while (k < 5)
    k++;
}




the output will be 
0
1
2
3
4
5
```







 


