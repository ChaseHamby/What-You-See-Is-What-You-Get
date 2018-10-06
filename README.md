# What You See Is What You Get

* Create an array of objects that represents famous people (see structure below).
* Create a text input in your DOM.
* Beneath that, create a container, block element in your DOM.
* Create a DOM element for each of the objects inside the container. Style your person elements however you like.
* For every even numbered element, have a light yellow background.
* For every odd numbered element, have a light blue background.
* Each element's DOM structure should be as shown below.
* When you click on one of the person elements, a dotted border should appear around it.
* When you click on one of the person elements, the text input should immediately gain focus so that you can start typing.
* When there is a highlighted person element, and you begin typing in the input box, the person's biography should be immediately bound to what you are typing, letter by letter.
* When you press the enter/return key when typing in the input field, then the content of the input field should immediately be blank.

## Screenshots
<img width="1434" alt="screen shot 2018-09-26 at 6 57 54 pm" src="https://user-images.githubusercontent.com/16019344/46115850-986c9500-c1be-11e8-93f0-da24b10044c0.png">
<img width="1440" alt="screen shot 2018-09-26 at 6 58 06 pm" src="https://user-images.githubusercontent.com/16019344/46115853-9aceef00-c1be-11e8-8e9e-a4f1314c11e1.png">
<img width="1399" alt="screen shot 2018-09-26 at 6 58 28 pm" src="https://user-images.githubusercontent.com/16019344/46115856-9c98b280-c1be-11e8-8dc6-bf63581bed7a.png">


## How to run this project
* Use npm to install http-server in your terminal: 
```sh
npm install -g http-server
```
* Run the server
```sh
hs -p 9999
```
* Open chrome and navigate to: 
```
localhost: 9999
```
## Issues
* Had some trouble with `outputEl = document.getElementById(bio)`
* Originally had `let outputEl = document.getElementById(bio)` but once I removed `let`, the function worked properly
* `Let` was causing the function to store the previous variable set
