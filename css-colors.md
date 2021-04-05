> ## css
cascading style sheats to design the elements of HTML how they will be displayed , without the CSS your page will be boring 
you can write your css code 

1 - inline by using `style` attribute inside HTML
```html
<h1 style="color:blue;">head1 will be blue</h1>
```

2 - internal by using `<style>` element in the <head>

```html
<style>
body {background-color: powderblue;}
h1   {color: blue;}
p    {color: red;}
</style>
```

3 - external by using `<link>` element to link an external css file
```html

<link rel="stylesheet" href="styles.css">

```

**and the most common way is the external** because it is easy to edit and it keeps the HTML code readable and clean.



there are many things you can change it and control it with the CSS for example :
* change the font type of any paragraph in your page
* change the font-size
* change the color of the font or the background
```css
h1 
{
 font-family: Arial;
 color: yellow;
 }
```
if you know the name of the font which you want you can type it directly , and if you dont you can search google fonts and select what you want then copy @import statement and paste it in you .css file 
then copy the css rules of the font and paste it where you want to execute the font .

![](https://i1.wp.com/css-tricks.com/wp-content/uploads/2020/03/google-fonts-redesign.png?fit=2956%2C1834&ssl=1)

![](https://f.hubspotusercontent40.net/hub/2832391/hubfs/Marketing/Website/Website-Pages/import-google-fonts-to-stylesheet.png?width=2238&name=import-google-fonts-to-stylesheet.png)

* change the position of any element in your page
this an example using `padding`  for the all sides of an element
**"the space between the element and the page borders "**

```css
div {
  padding-top: 50px;
  padding-right: 30px;
  padding-bottom: 50px;
  padding-left: 80px;
}
```
we use `margin` **the space between the element's borders and the other elements**

```css
p {
  margin-top: 100px;
  margin-bottom: 100px;
  margin-right: 150px;
  margin-left: 80px;
}
```
float property specifies how an element should float
the elements can float right or left
```css
p
{
float : right;
}

div
{
    float : left;
}

```
then you can use clean at the same side where you type the float to erase the effect of the float

```css
p
{
clear : right;
}

div
{
    clear : left;
}

```

> ### colors
in css you can use the Colors to bring your pages to life.
it will be more attractive
color can be specified by using a predefined color name
```css
p
{
    background-color:DodgerBlue;
    color:Tomato;
    
}
```

colors can also be specified using RGB values, HEX values, HSL values, RGBA values

```css
p
{
   color: rgba(255, 99, 71, 0.5);
   backgroung-color:#ff6347;
}
div
{
    background-color : hsl(9, 100%, 64%);
}
```
you can git Hex values from google search

![](https://i.pinimg.com/736x/6e/9d/ca/6e9dcada75a3f3413baa573e97ea4c25.jpg)











