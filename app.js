// reset value initial 
let count = 1;

// select value and buttons
const value = document.querySelector("#counter");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
   btn.addEventListener('click', function(e) {
    const styles = e.currentTarget.classList;
    if(styles.contains("left")) {
       count--;
    }else if(styles.contains("right")) {
       count++;
    }else {
        count = 0;
    }
    if (count < 2) {
        count = 1;
    }
    value.textContent = count;
   })
})
