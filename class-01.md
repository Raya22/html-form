> ## HTML

HTML is the standard markup language for creating Web pages , describes the structure of a Web page.


HTML Uses Elements
to Describe the
Structure of Pages ,element is everything from the start tag to the end tag:
```html
<h1> the first heading</h1>
<p> the paragraph</p>
```

```html
<html>
<body>
<h1> the first heading</h1>
<p> the paragraph</p>
</body>
</html>

```

![](https://i.pinimg.com/474x/54/48/25/5448256e69595b5a3f760b63f3345dbe.jpg)

Attributes provide additional information
about the contents of an element

![](https://i.pinimg.com/736x/53/34/0c/53340c208aa81aaa206a11fe4ddc6bb3.jpg)


ther are several versions of HTML
* HTML 4
* XHTML 1.0
* HTML5

that's why , each
web page should begin with a
DOCTYPE declaration to tell a
browser which version of HTML
the page is using 

html5
```html
<!DOCTYPE html>
```

html 4
```html
<!DOCTYPE html PUBLIC
"-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
```

Transitional XHTML 1.0
```html
<!DOCTYPE html PUBLIC
"-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/
 xhtml1-transitional.dtd">
```

Strict XHTML 1.0
```html
<!DOCTYPE html PUBLIC
"-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/
 xhtml1-strict.dtd">

```

XML Declaration
```html
<?xml version="1.0" ?>
```

> ### comments in html
we can add any comments which not visible in the user's browser by adding the text between `<!....>`

> ### ID Attribute
It is used to
uniquely identify that element
from other elements on the
page.  


> ### class attribute
specifies one or more classnames for an element and it used to point to a class in a style sheet.

> ### Block Elements
Block elements appear on the screen as if they have a line break before and after them. For example, the `<p>`, `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>`, `<ul>`, `<ol>`, `<dl>`, `<pre>`, `<hr />`, `<blockquote>`, and `<address>` elements are all block level elements. They all start on their own new line, and anything that follows them appears on its own new line.

> ### Inline Elements
can appear within sentences and do not have to appear on a new line of their own. The `<b>`, `<i>`, `<u>`, `<em>`, `<strong>`, `<sup>`, `<sub>`, `<big>`, `<small>`, `<li>`, `<ins>`, `<del>`, `<code>`, `<cite>`, `<dfn>`, `<kbd>`, and `<var>`.


> ### Grouping Text & Elements In a Block

with `<div>` tag ang `<span>`


> ### IFrames
it used to display a web page within a web page `<iframe>` inline frame
```html
<iframe src="url" title="description">

```

> ### Information About Your Pages
The `<meta>` element lives
inside the `<head>` element and
contains information about that
web page.
```html
<head>
  <meta charset="UTF-8">
  <meta name="description" content="Free Web tutorials">
  <meta name="keywords" content="HTML, CSS, JavaScript">
  <meta name="author" content="John Doe">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

```

> ## HTML5 Layouts

 HTML5 offers a set of markup elements that allow you to create a structured layout for web pages. These elements are often termed as Semantic Markup because they convey their meaning and purpose clearly to the developer and to the browser
 ![](https://static.packt-cdn.com/products/9781849694742/graphics/4742_02_04.jpg)


 >## process and design
*  Who is the Site For?
 you have to know the site's audience ***(Target Audience)***
 before you start your design

 * Why People Visit
YOUR Website
* What Your Visitors are
Trying to Achieve
* What Information
Your Visitors Need
* How Often People Will
Visit Your Site

after you know these information you can start your Site Maps
![](https://landing.moqups.com/img/content/diagrams/site-maps/ecommerce-shop-sitemap-template.png)

and your ***WireFrames***

![](https://d3n817fwly711g.cloudfront.net/blog/wp-content/uploads/2011/05/Wireframe2.png)

>### Getting your message across using design
The primary aim of any kind of visual design
is to communicate. Organizing and prioritizing
information on a page helps users understand
its importance and what order to read it in.

> ### Visual hierarchy
helps visitors understand what you are trying to tell them.

You can use grouping and similarity to help simplify
the information you present.





> ## The ABC of programming
before we start learning JS , we will talk about the script and how to write a script which is series of instructions that a 
computer can follow to achieve a goal. 
and when we write a script we need to
state our goal and then list the 
tasks that need to be completed in 
order to achieve it. 

1 - DEFINE THE GOAL

2 -  DESIGN THE SCRIPT

 3 - CODE EACH STEP


 > ### how do computers fit in with the world around them ?
 * computers creat models of the world using data
 ![](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Data_modeling_context.svg/1200px-Data_modeling_context.svg.png)

 the models use objects to represent physical things
 and to make your web page interactive let your code use the browser's model of the web page
