
let switcherCircle = document.querySelector('.main__switcher-circle')
let switcher = document.querySelector('.main__switcher')

switcher.addEventListener('click', () => {
    //добавляет темную тему
    if (switcherCircle.classList.contains("main__switcher-circle_dark")) {
        switcherCircle.classList.remove('main__switcher-circle_dark')
        switcherCircle.classList.toggle("main__switcher-circle_light")
        document.querySelector('.main__switcher').style.background = "#0d1117";
        document.querySelector('.main').style.background = "#0d1117";
        document.querySelector('.main').style.color = "#c9d1d9"
        document.querySelector('.link__image').style.background = "#c9d1d9"
        document.querySelector('.link__image').style.borderRadius = "50%"

    }

    //добавляет светулю тему
    else {
        switcherCircle.classList.toggle('main__switcher-circle_dark')
        switcherCircle.classList.remove("main__switcher-circle_light")
        document.querySelector('.main__switcher').style.background = "#F5F5F5";
        document.querySelector('.main').style.background = "#F5F5F5"
        document.querySelector('.main').style.color = "#0d1117"
        document.querySelector('.link__image').style.background = "none"
        document.querySelector('.link__image').style.borderRadius = "0"
    }
})

