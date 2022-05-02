nav_content = document.getElementsByClassName("toggleable")
nav_btn = document.getElementsByClassName("nav-toggler")[0]
var open = false
const toggle = () => {
    if(open){
        nav_btn.classList.remove("fa-close")
        nav_btn.classList.add("fa-bars")
        for(let i = 0; i < nav_content.length; i++) {
            nav_content[i].style.display = "none"
        }
        open = false
    }else{
        nav_btn.classList.add("fa-close")
        nav_btn.classList.remove("fa-bars")
        for(let i = 0; i < nav_content.length; i++) {
            nav_content[i].style.display = "block"
        }
        open = true
    }
}

const check_screen = () =>{
    if(window.innerWidth >= 1226){
        for(let i = 0; i < nav_content.length; i++) {
            nav_content[i].style.display = "block"
            document.getElementsByClassName("temp-mobile-nav")[0].style.display = "none"
        }
    }else if(window.innerWidth >= 701){
        if(!open){
            for(let i = 0; i < nav_content.length; i++) {
                nav_content[i].style.display = "none"
            }
            document.getElementsByClassName("temp-mobile-nav")[0].style.display = "none"
        }
    }else{
        for(let i = 0; i < nav_content.length; i++) {
            nav_content[i].style.display = "none"
        }
        document.getElementsByClassName("temp-mobile-nav")[0].style.display = "flex"
        document.getElementsByClassName("dropdown")[0].style.display = "block"
        document.getElementsByClassName("dropdown")[1].style.display = "block"
        document.getElementsByClassName("dropdown")[2].style.display = "block"
        document.getElementsByClassName("search")[0].style.display = "block"
    }
}

let daysTimer = document.getElementById("days")
let hoursTimer = document.getElementById("hours")
let minutesTimer = document.getElementById("minutes")
let secondsTimer = document.getElementById("seconds")
let days = 2, hours = 12, minutes = 3, seconds = 15
const myTimeout = setInterval(() => {
    if(seconds > 0){
        seconds--
    }else{
        seconds = 60
        if(minutes > 0){
            minutes--
        }else{
            minutes = 60
            if(hours > 0){
                hours--
            }else{
                hours = 60
                if(days > 0){
                    days--
                }else{
                    clearInterval(myTimeout)
                }
            }
        }
    }
    updateTimer()
}, 1000)
const updateTimer = () => {
    daysTimer.textContent = days
    hoursTimer.textContent = hours
    minutesTimer.textContent = minutes
    secondsTimer.textContent = seconds
}

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    },
})

const showMenu = () => {
    document.getElementsByClassName("loginMenu")[0].style.display = "block"
}
const hideMenu = () => {
    document.getElementsByClassName("loginMenu")[0].style.display = "none"
}

window.onscroll = function() {myFunction()}
function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight
    var scrolled = (winScroll / height) * 100
    document.getElementById("myBar").style.width = scrolled + "%"
}