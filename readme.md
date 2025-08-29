

### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?

---------
1. answer: 
  getElementById use to find the specific element of the element, that define "id" selector.
  getElementByClassName finds all elements with a given classname use, getElementByclassName one kind array of element type.
  quarySelector finds the first element matching a css selector.
  quarySelectorAll finding all elements matching the selector.

2. answer:
  use document.createElement('tagName') to create, then 
  use text content or innerHtml to add content after there
  use appendchild()or append() to insert it.
  

3. answer:
  when event happens on an element then it work first runs on the element and then bubbles up parant element-grandparent element- body-document.


4. answer:
  Event delegation is insted of adding event listeners to many child was clicked.
  1. Event delegation added Elements dynamically,
  2. Many elements saves memory.


5. answer:
  prevenDefault(): It stops the default browser behavior,
  stoppropagation(): It stops event bubling up the DOM.




