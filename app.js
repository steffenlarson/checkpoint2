let totalCats = 0

setInterval(update,
    1000)

function update() {
    console.log("Herro dere")

}

function count() {
    // let totalCats = document.getElementById('cat-number')
    totalCats++
    console.log(totalCats)
    document.getElementById('cat-number').innerHTML = `${totalCats}`
}

function purchase() {


}

function changePrice() {

}

function drawInventory() {

}

