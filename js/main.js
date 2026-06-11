'use strict'

/*****************************
 * 
 *  SMOOTH SCROLL TO ANCHOR
 * 
 */

 document.querySelectorAll('a[href^="#"').forEach(link => {

    link.addEventListener('click', function(e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);

        // const topOffset = document.querySelector('.top-offset').offsetHeight;
        const topOffset = 0; // нужен отступ сверху 
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});
//таймер
const minuteMilliseconds = 1000 * 60
const hourMilliseconds = minuteMilliseconds * 60
const dayMilliseconds = hourMilliseconds * 24

const startSaleTime = 1732807889073
const endSaleTime = startSaleTime + dayMilliseconds * 545

const saleDaysSpan = document.getElementById('saleDays')
const saleHoursSpan = document.getElementById('saleHours')
const saleMinutesSpan = document.getElementById('saleMinutes')
const saleSecondsSpan = document.getElementById('saleSeconds')

function updateSaleDate() {
    let rest = endSaleTime - Date.now()
    let days = Math.floor(rest / dayMilliseconds)

    rest -= days * dayMilliseconds
    let hours = Math.floor(rest / hourMilliseconds)

    rest -= hours * hourMilliseconds
    let minutes = Math.floor(rest / minuteMilliseconds)

    rest -= minutes * minuteMilliseconds
    let seconds = Math.ceil(rest / 1000)

    saleDaysSpan.innerText = days + " дня :"
    saleHoursSpan.innerText = hours + " :"
    saleMinutesSpan.innerText = formatTo00(minutes) + " :"
    saleSecondsSpan.innerText = formatTo00(seconds)
}

function formatTo00(number) {
    if (number < 10) return '0' + number
    return number
}

setInterval( () => updateSaleDate())

//слайдер
const sliders = document.querySelectorAll('.slider-img')
const slider = document.getElementById('slider')
const dec = document.getElementById("dec")

const firstBut = document.createElement('div')
    firstBut.innerText = "<"
    dec.append(firstBut)
    firstBut.style.backgroundColor = 'rgba(0, 0, 0, 0.50)'
    firstBut.style.height = '20px'
    firstBut.style.width = '20px'
    firstBut.style.marginTop = '-70px'
    firstBut.style.marginLeft = '10px'
    firstBut.style.borderRadius = '10px' 

const lastBut = document.createElement('div')
    lastBut.innerText = ">"
    dec.append(lastBut)
    lastBut.style.backgroundColor = 'rgba(0, 0, 0, 0.50)'
    lastBut.style.height = '20px'
    lastBut.style.width = '20px'
    lastBut.style.marginTop = '-20px'
    lastBut.style.marginLeft = '96%'
    lastBut.style.borderRadius = '10px' 

const tochka1 = document.createElement('div')
    dec.append(tochka1)
    tochka1.style.backgroundColor = "gray"
    tochka1.style.height = "15px"
    tochka1.style.width = "15px"
    tochka1.style.borderRadius = "10px"
    tochka1.style.marginLeft = "250px"
    tochka1.style.marginTop = "20px"

const tochka2 = document.createElement('div')
    dec.append(tochka2)
    tochka2.style.backgroundColor = "white"
    tochka2.style.height = "15px"
    tochka2.style.width = "15px"
    tochka2.style.borderRadius = "10px"
    tochka2.style.marginLeft = "280px"
    tochka2.style.marginTop = "-15px"

const tochka3 = document.createElement('div')
    dec.append(tochka3)
    tochka3.style.backgroundColor = "white"
    tochka3.style.height = "15px"
    tochka3.style.width = "15px"
    tochka3.style.borderRadius = "10px"
    tochka3.style.marginLeft = "310px"
    tochka3.style.marginTop = "-15px"

const sliderImg1 = document.getElementById("slide-img1")
const sliderImg2 = document.getElementById("slide-img2")
const sliderImg3 = document.getElementById("slide-img3")

lastBut.addEventListener("click", function() {
    if (sliderImg2.style.display === "none" && sliderImg3.style.display === "none") {
        sliderImg3.style.display = "block"
    }        
})



//форма заказа
const popUp = getElementById('popUp')
popUp.onclick = () => popUp.style.display = 'none' 
let userName = '' 
let number = ''
let userAgree = true

const inputUserName = document.getElementById('formName')
inputUserName.onchange = (event) => userName = event.target.value.trim()
const messageName = document.getElementById('nameMessage')

const inputPhone = document.getElementById('formPhone')
inputPhone.onchange = (event) => number = event.target.value.trim()
const messagePhone = document.getElementById('phoneMessage')

const inputAgreement = document.getElementById('formAgreement')
inputAgreement.onchange = (event) => userAgree = event.target.checked
const messageAgreement = document.getElementById('agreementMessage')

const formButton = document.getElementById('formButton')
formButton.onclick = checkForm()

function checkForm() {
    messageName.innerText = ''
    messagePhone.innerText = ''
    messageAgreement.innerText = ''

    if (userName.length < 2) {
        messageName.innerText = 'В имени должно быть больше 2 букв.'
        return
    }

    if (userAgree === false) {
        messageAgreement.innerText = 'Нужно отметить чекбокс для отправки данных'
        return
    }

    let phoneNumbersChars = ''

    for (let n = 0; n < number.length; n++) {
        if (number[n] !== ' ' && isNaN(number[n]) === false) {
            phoneNumbersChars += number[n]
        } 
    }

    if (phoneNumbersChars.length < 7) {
        messagePhone.innerText = 'В номере телефона должно быть от 7 цифр.'
        return
    }

    inputUserName.value = ''
    inputPhone.value = ''

    popUp.style.display = 'flex' 
}
