const menuSection = document.querySelector('.menu-section')
const theList = document.querySelector('header ul')
const menus = document.querySelector('.menus')

// get all li for animation entry
const testy = theList.querySelectorAll(':scope > li')

let menuChange = false

menuSection.addEventListener('click', () => {
    if (!menuChange) {
        theList.classList.add('nav-active')
        menuChange = true
        menuSection.classList.add('animate')
        // get each list 
        testy.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ``
            }
            // each li delays entry after their index seconds
            else {
                link.style.animation = `fadeIn .5s ease forwards ${index/7 + 0.3}s`
            }
        })
    }
    else {
        theList.classList.remove('nav-active')
        menuChange = false
        menuSection.classList.remove('animate')

        // remove the animation after closing sidebar
        testy.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ``
            }
        })
    }

})

const myLogo = document.getElementById('my-logo')



//////////////////////////////////////////////

// the percentages
const percentOne = document.querySelector('.per-one')
const percentTwo = document.querySelector('.per-two')
const percentThree = document.querySelector('.per-three')
const percentFour = document.querySelector('.per-four')
const percentFive = document.querySelector('.per-five')
const percentSix = document.querySelector('.per-six')
const percentSeven = document.querySelector('.per-seven')
const percentEight = document.querySelector('.per-eight')
const percentNine = document.querySelector('.per-nine')
const percentTen = document.querySelector('.per-ten')
const percentEleven = document.querySelector('.per-eleven')
const percentTwelve = document.querySelector('.per-twelve')

// header
const header = document.querySelector('header')

// section four
const sectionFour = document.querySelector('.section-four')
var sectionFourRect = sectionFour.getBoundingClientRect();
var sectionFourTop = sectionFourRect.top;

window.addEventListener('scroll', activateOnScroll);

// animate to display on getting to element
// animation for mobile - mob
// animatoin for desktpo and tab - tab-desk
function activateOnScroll() {
    header.classList.toggle("show-bg-color", window.scrollY > 0)
    myLogo.classList.toggle("active", window.scrollY > 0)
    percentOne.classList.toggle("animate-tab-desk", window.scrollY > sectionFourTop)
    percentOne.classList.toggle("animate-mob", window.scrollY > 3350)
    percentTwo.classList.toggle("animate-tab-desk", window.scrollY > sectionFourTop)
    percentTwo.classList.toggle("animate-mob", window.scrollY > 3400)
    percentThree.classList.toggle("animate-tab-desk", window.scrollY > sectionFourTop)
    percentThree.classList.toggle("animate-mob", window.scrollY > 3450)
    percentFour.classList.toggle("animate-tab-desk", window.scrollY > sectionFourTop)
    percentFour.classList.toggle("animate-mob", window.scrollY > 3500)
    percentFive.classList.toggle("animate-tab-desk", window.scrollY > sectionFourTop)
    percentFive.classList.toggle("animate-mob", window.scrollY > 3550)
    percentSix.classList.toggle("animate-tab-desk", window.scrollY > sectionFourTop)
    percentSix.classList.toggle("animate-mob", window.scrollY > 3600)
    percentSeven.classList.toggle("animate-tab-desk", window.scrollY > sectionFourTop)
    percentSeven.classList.toggle("animate-mob", window.scrollY > 3650)
    percentEight.classList.toggle("animate-tab-desk", window.scrollY > sectionFourTop)
    percentEight.classList.toggle("animate-mob", window.scrollY > 3700)
    percentNine.classList.toggle("animate-tab-desk", window.scrollY > sectionFourTop)
    percentNine.classList.toggle("animate-mob", window.scrollY > 3750)
    percentTen.classList.toggle("animate-tab-desk", window.scrollY > sectionFourTop)
    percentTen.classList.toggle("animate-mob", window.scrollY > 3800)
    percentEleven.classList.toggle("animate-tab-desk", window.scrollY > sectionFourTop)
    percentEleven.classList.toggle("animate-mob", window.scrollY > 3850)
    percentTwelve.classList.toggle("animate-tab-desk", window.scrollY > sectionFourTop)
    percentTwelve.classList.toggle("animate-mob", window.scrollY > 3900)
}
activateOnScroll()


