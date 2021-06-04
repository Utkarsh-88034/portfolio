let heroall = document.getElementsByClassName("hero_head_1")
heroall[0].addEventListener('mouseover', function(){
    let hero = document.getElementsByClassName("head_char")
    hero[0].classList.add("active")
})
heroall[0].addEventListener('mouseout', function(){
    let hero = document.getElementsByClassName("head_char")
    hero[0].classList.remove("active")
})
let bar = document.getElementsByClassName("bar")

bar[0].addEventListener("click", function(){
    let bar1 = document.getElementById("bar1")
    let bar2 = document.getElementById("bar2")
    let bar3 = document.getElementById("bar3")
    let nav = document.querySelector("#main-nav ul")

    if (bar3.style.opacity != "0"){
        bar3.style.opacity = "0"
        bar1.style.transform = " translateY(10px) rotate(-405deg)"
        bar2.style.transform = " rotate(405deg)"
        nav.classList.add("btn-active")

    }
    else{
        bar3.style.opacity = "1"
        bar1.style.transform = " translateY(0) rotate(-0)"
        bar2.style.transform = " rotate(0)"
        nav.classList.remove("btn-active")
    }
})
