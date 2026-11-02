const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');



// 1. querySelectorAll() → saare buttons select karta hai.
// 2. forEach() → har button par jaata hai.
// 3. addEventListener() → har button par click listener lagata hai

/* const buttons = document.querySelectorAll('.button');
      buttons.addEventListener('click', () => {
        console.log('Clicked');
    });
 ❌ Ye work nahi karega, kyunki buttons ek NodeList hai, single button nahi. NodeList par directly addEventListener() nahi laga sakte.
*/
buttons.forEach(function (button) {
    // console.log(button); 
    button.addEventListener('click', (e) => {
        // console.log("button clicked");
        console.log(e);
        console.log(e.target);
        // NOTE:- '.target' is used to identify which HTML element triggered an event.
        //  It is commonly used with events like click, input, and submit.
        if (e.target.id === 'grey') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'white') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'blue') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'yellow') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'purple') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'red') {
            body.style.backgroundColor = e.target.id;
        }
    })

});
