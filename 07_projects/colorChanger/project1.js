const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body")

// created buttons is a nodelist that is formed soo we can create a forEach loop in it!

buttons.forEach(function(button){
    console.log(button);
    // harek button mah event lagauxam aaba!
    button.addEventListener('click', function(e){
        console.log(e)
        console.log(e.target)
    })
});

