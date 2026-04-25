# Emergency Hotline Project
## Questions & Answers

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector/querySelectorAll?

ANS : 1:getElementById() is used to select a single element using its unique id. It returns only one element.
2:getElementsByClassName() selects all elements with the same class name and returns a collection of elements.
3:querySelector() selects the first matching element using a CSS selector. 
4:querySelectorAll() selects all matching elements using a CSS selector and returns a NodeList.

### 2. How do you create and insert a new element into the DOM?

ANS :A new element can be created using document.createElement().
Then content can be added using innerText or innerHTML.
Finally the element is inserted into the DOM using methods like appendChild().

### 3. What is Event Bubbling and how does it work?

ANS :Event Bubbling is a process where an event starts from the target element and then propagates upward through its parent elements. For example, clicking a button can also trigger click events on its parent elements.

### 4. What is Event Delegation in JavaScript? Why is it useful?

ANS :Event Delegation is a technique where an event listener is added to a parent element instead of multiple child elements. It works using event bubbling and is useful because it reduces code, improves performance, and works for dynamically added elements.

### 5. What is the difference between preventDefault() and stopPropagation() methods?

ANS :preventDefault() stops the browser’s default behavior, such as form submission or link navigation.
stopPropagation() stops the event from bubbling up to parent elements.