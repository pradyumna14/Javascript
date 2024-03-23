const clock = document.getElementById('clock')
// const clock = document.querySelector('#clock')   Anather way of selecting an ID!

// We want a clock that changes every second!

setInterval(function(){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);