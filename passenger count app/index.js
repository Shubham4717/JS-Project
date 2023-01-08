
let count = 0
savedCount = 'Previous entrise: '

let incrementClicked = []
let decrementClicked = []

function action(expr,elementCountId,elementSaveId) {
    let element = document.getElementById(elementCountId)
    let elementSave = document.getElementById(elementSaveId)
    let currentTime = new Date();
    
    switch (expr) {
        case 'increment':
            count += 1
            incrementClicked.push(currentTime)
            break;

        case 'decrement':
            if(count != 0){
                count -= 1
                decrementClicked.push(currentTime)
            }
            break;
        
        case 'save':
            savedCount += count + ' - '
            elementSave.innerText = savedCount
            count = 0
            element.innerText = count
            console.log(count)
        default:
            break;
    }
    element.innerText = count
    console.log("incrementClicked",incrementClicked.length ,'\n',"decrementClicked",decrementClicked.length)
}


let timeGiven = 0

function getTimePeriod(){
    let time = prompt("Please enter time period", "1")
    timeGiven = time
    console.log(timeGiven)
}

// let saveEl = document.getElementById('save-el')
// function action(increment,decrement,elementId) {
//     let element = document.getElementById(elementId)
//     let currentTime = new Date();

//     if (increment==true){
//         count += 1
//         incrementClicked.push(currentTime)
//     }
//     if(decrement==true && count != 0){
//         count -= 1
//         decrementClicked.push(currentTime)
//     }
//     countEL.innerText = count
//     console.log("incrementClicked",incrementClicked.length ,'\n',"decrementClicked",decrementClicked.length)
// }
// function increment() {
//     count += 1
//     countEL.innerText = count
// }
// function decrement() {
//     if(count != 0){
//         count -= 1
//         countEL.innerText = count
//     }
    
// }


// savedCount = 'Previous entrise: '

// function save(){
//     savedCount += count + ' - '
//     saveEl.innerText = savedCount
//     count = 0
//     countEL.innerText = count
//     console.log(count)
// }