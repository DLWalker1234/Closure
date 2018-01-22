let x = 0;
let timer1;
let timer2;
// let counter = 0;

function setup() {
    createCanvas(200, 200);
    timer1 = createP('timer 1');
    timer2 = createP('timer 2');

    makeTimer(timer1, 500);
    makeTimer(timer2, 750);
}

// Each time makeTimer function is called a new instance of timeIt() is created and maintained
// in memory as long as it is needed ( meaning counting )
function makeTimer(elt, wait) {
    let counter = 0;
    setInterval(timerIt, wait);

    function timeIt() {
        elt.html(counter);
        counter++;
    }
}



function draw() {

}