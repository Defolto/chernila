const body = document.querySelector("body")
const fill = document.querySelector(".fill")
const chernila = document.querySelector(".chernila")

let heightFill = 100

function useChernil() {
    fill.style.height = heightFill + "%"
}

useChernil()

body.addEventListener('mousemove', ()=>{
    if (heightFill <= 0) {
        chernila.classList.add("chernila_empty")
        return
    }

    heightFill -= 0.1
    useChernil()
})

chernila.addEventListener('click', ()=>{
    if (heightFill > 0) {
        return
    }

    chernila.classList.remove("chernila_empty")
    heightFill = 100
    useChernil()
})