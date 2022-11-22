let count = 0

function increment_clk() {
    count+=1
    document.getElementById("counter").innerText = count
}

function save_clk(){
    document.getElementById("save-paragraph").innerText = document.getElementById("save-paragraph").innerText + document.getElementById("counter").innerText + " - "
}