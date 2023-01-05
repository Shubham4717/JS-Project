let countEL = document.getElementById("count-el")

let saveEl = document.getElementById('save-el')

let count = 0

function increment() {
    count += 1
    countEL.innerText = count
}

savedCount = 'Previous entrise: '

function save(){
    savedCount += count + ' - '
    saveEl.textContent = savedCount
    count = 0
    countEL.textContent = count
    console.log(count)
}
