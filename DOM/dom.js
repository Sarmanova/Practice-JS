// addEventListener() method - sets up a fuction that will be called whenever the specified event is delivered to the terget.

/*
addEventListener(type, listener)
addEventListener(type, listener, options)
addEventListener(type, listener, useCapture) 

*/

// document pbject returns a reference to the document contained in the window - It's the entry point into the DOM
const btnMain = document.getElementById('btn-main');
const changeColors = document.getElementsByClassName('changeColor')
btnMain.addEventListener('click', function() {
    const headline = document.getElementById('headline');
    const input = document.querySelector('.input-main');
    //Select the <input> element and assign its value to the variable inputValue.
    const inputValue = document.querySelector('.input-main').value;
    
    const listContainer  = document.querySelector('.list-container');
   
    headline.className = 'grow'; 
    headline.innerHTML = input.value; 
   

    input.value ;
    console.log(headline);
    //listContainer.innerHTML = input.value;
    //headline.style.border = 'solid 3px red';

})

/* getElementsByTagName() method to get access to multiple elements  */

// const htmlItems = document.getElementsByTagName('li');
// // for loop
// for (let i = 0; i < htmlItems.length; i++) {
//     htmlItems[i].style.background = 'yellow'
// }

// for/of loop is similar to a for look, it is only more compact

// for(const changeColor of changeColors){
//    changeColor.style.background = 'cornsilk';
// }






// output : applies colors to each li element 
//const colors = ["#C2272D", "#F8931F", "#FFFF01", "#009245", "#0193D9", "#0C04ED", "#612F90"];
// let listItems = document.getElementsByClassName('li');

// for ( let i = 0; i < colors.length; i++ ) {
//   listItems[i].style.color = colors[i];    
// }




// querySelector() – returns the first element that matches the specified selector
// querySelectorAll() - returns a collaction of all elements or notes matching the given selector


// textContent - return and sets the content of the tag as plain text
// innerHTML-  can do a whole lot more than get or set text content, it allows to see exactly what's in the HTML markup contained with a string, including elements like spacing.


