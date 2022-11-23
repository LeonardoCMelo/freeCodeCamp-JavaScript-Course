let count = 0
let count_el = document.getElementById("counter")

function increment_clk() {
    count+=1
    count_el.innerText = count
}

function save_clk(){
    document.getElementById("save-paragraph").textContent += count + " - "
    count = 0
    document.getElementById("counter").innerText = count
}