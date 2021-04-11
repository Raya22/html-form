> ## TEXT

html **tags** provide extra meaning
and allow browsers to show users the
appropriate structure for the page. and it's known as a **markup**.
 * Headings 

    in html we have 6 level of headings
    `<h1>` is used for main headings

    `<h2>` is used for subheadings

* Paragraphs

   To create a paragraph, we use `<p>` to open the
tag and `</p>` to close the paragraph tag.


* Bold & Italic
```html

<p>This is how we make a word appear <b>bold.</b>
 </p>
<p>Inside a product description you might see some
<b>key features</b> in bold.</p>

```
```html

<p>This is how we make a word appear <i>italic</i>.
 </p>
<p>It's a potato <i>Solanum teberosum</i>.</p>
<p>Captain Cook sailed to Australia on the
<i>Endeavour</i>.</p>
```
![](https://www.web4college.com/html/socialImages/html-text-formatting.png)

* Superscript & Subscrip

`<sup>` to contain characters that
should be superscript 

`<sub>` to
contain characters that should
be subscript. 


```html

<p>when should you use <sup>subscript</sup> and</p>
<p><sub>superscript</sub> in your writting?</p>
```
![](https://getproofed.com/wp-content/uploads/2020/07/21-How-and-When-to-Use-Subscript-and-Superscript-1024x537.png)


* White Space **to make code easier to
read**
add extra spaces or start some
elements on new lines.

* Line Breaks & Horizontal Rules
 `<hr>` tag in HTML stands for horizontal rule and is used to insert a horizontal rule or a thematic break ,`<hr>` tag is an empty tag and it does not require an end tag.

 `<br>` element produces a line break in text
 ![](https://images.slideplayer.com/22/6409318/slides/slide_3.jpg)

  > ### Semantic Markup
  introduces meaning to the web page rather than just presentation.
  ![](https://internetingishard.netlify.app/html-sectioning-elements-00c3fd.a9d1b00b.png)


  > ## Introducing CSS
  CSS stands for Cascading Style Sheets , it is treats each HTML element as if it appears inside
its own box and uses rules to indicate how that
element should look
CSS can be added to HTML documents in 3 ways:

Inline - by using the style attribute inside HTML elements
Internal - by using a `<style>` element in the `<head>` section
External - by using a `<link>` element to link to an external CSS file

![](https://startingelectronics.org/tutorials/arduino/ethernet-shield-web-server-tutorial/CSS-introduction/CSS-HTML-markup-ex1.png)

we can change fonts , colors and many things with CSS

> ## Basoc JavaScript instructions

A script is a series of instructions that a computer can follow one-by-one
Each individual instruction or step is known as a statement. 
Statements should end with a semicolon. 

**Statements** to control the program flow.

**comments** to add more information about the code and it will not be visible in the browser.
```js
//this is a comment
```

**Variables** to store the bits of information it 
needs to do its job.
```js
var x=5;
var name="Raya";
var yes = true;
var no = false;
```
* STRING OPERATORS  : which can be used on string values, the concatenation operator (+) concatenates two string values together, returning another string that is the union of the two operand strings
```js
var n1 = "Raya";
var n2 = "Lobany";
var full-n = n1 + n2;
var direc = 'hello' + 'world'
```
and the variable can be a number or a string or boolean and we can change the value of the variable when we re assign a new value


**Arrays**

to stores a list of values.
```js
var cars = ["KIA", "AUDI", "BMW"];
```
Values in an array are accessed as if they are in 
a numbered list.
```js
var name = cars[0];
```
## comparison operators
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



###  LOGICAL OPERATORS  :  combine expression 

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


> ## if statement

Conditional statements are used to perform different actions based on different conditions.


```js
if (condition) {
  //  block of code to be executed if the condition is true
}
```
```js
if (mark >= 50) {
  grade = "pass";
}
```
```js
if (mark >= 50) {
  grade = "pass";
}
  else
  {
      grade ="fail";
  }
```
















