const header = document.querySelector('.header');

const headerHTML = `
<div class="header-fixed">
    <div class="header-block block">
        <div class="header-content">

            <a href="./index.html" class="header-logo">
                <h2 class="header-logo__title">СК АРРИВ</h2>
                <p class="header-logo__subtitle">проектируем и строим</p>
            </a>

            <ul class="header-nav">
                <li><div class="header-link about-btn" onClick="document.getElementById('about-window').scrollIntoView({ behavior: 'smooth', block: 'center' })">о компании</div></li>
                <li><div class="header-link" onClick="document.getElementById('service-window').scrollIntoView({ behavior: 'smooth', block: 'start' })">услуги</div></li>
                <li><div class="header-link" onClick="document.getElementById('work-window').scrollIntoView({ behavior: 'smooth', block: 'center' })">этапы</div></li>
                <li><div class="header-link" onClick="document.getElementById('example-window').scrollIntoView({ behavior: 'smooth', block: 'center' })">галерея</div></li>
                <li><div class="header-link" onClick="document.getElementById('contact-window').scrollIntoView({ behavior: 'smooth', block: 'center' })">контакты</div></li>
            </ul>

            <a href="tel: 8 (495) 155-20-65" class="header-connect">8 (495) 155-20-65</a>

            <div class="header-menu">
                <div class="header-line"></div>
            </div>

        </div>
    </div>
    <div class="header-bg"></div>
</div>`

header.insertAdjacentHTML('beforeend', headerHTML)



const menu = document.querySelector('.header-menu');
const body = document.querySelector('body')
const menuContent = document.querySelector('.menu')

const menuActive = document.querySelector('.menu-active')

menu.addEventListener('click', () => {
    menu.classList.toggle('menu--stuck')
    body.classList.toggle('body-stuck')
    menuContent.classList.toggle('menu-active')
})

document.querySelectorAll('.menu-list-item').forEach( i => i.addEventListener('click', () => {
    menuContent.classList.remove('menu-active');
    body.classList.remove('body-stuck')
    menu.classList.remove('menu--stuck')
}))


// ANIMATION
class SlideLeft {
    constructor(selector) {
        const sliderBlock = typeof selector === 'string' ? document.querySelector(selector) : selector;

        sliderBlock.dataset.styleLeft = 'style-left';

        slideTrans(sliderBlock)

        const animationName = 'slide-animation'

        observer(animationName, sliderBlock)
    }
}

class SlideRight {
    constructor(selector) {
        const sliderBlock = typeof selector === 'string' ? document.querySelector(selector) : selector;

        sliderBlock.dataset.styleRight = 'style-right'

        slideTrans(sliderBlock)

        const animationName = 'slide-animation-right'

        observer(animationName, sliderBlock)
    }
}

class SlideBottom {
    constructor(selector) {
        const sliderBlock = typeof selector === 'string' ? document.querySelector(selector) : selector;

        sliderBlock.dataset.styleBottom = 'style-bottom'

        slideTrans(sliderBlock)

        const animationName = 'slide-animation-bottom'

        observer(animationName, sliderBlock)
    }
}

class Line {
    constructor(selector) {
        const sliderBlock = typeof selector === 'string' ? document.querySelector(selector) : selector;

        sliderBlock.dataset.styleScale = 'style-line'

        const animationName = 'line-animation'

        transition(sliderBlock)

        observer(animationName, sliderBlock)
    }
}

function transition(i) {
    i.classList.add('transition')
}

function slideTrans(item) {
    item.classList.add('transition', 'opacity')
}

function observer(animationName, itemName) {
    let observer = new IntersectionObserver(ens => {
        ens.forEach(en => {
            if(typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
                return
            }

            if(en.isIntersecting) {
                en.target.classList.add(animationName)
            }
        })
    })
    observer.observe(itemName)
}

const slideBottom = document.querySelectorAll('.slide-bottom');
const slideRight = document.querySelectorAll('.slide-right');
const slideLeft = document.querySelectorAll('.slide-left');
const line = document.querySelectorAll('.line');

slideBottom.forEach(e => {
    const slide = new SlideBottom(e);
})

line.forEach(i => {
    const line = new Line(i);
})

slideRight.forEach(e => {
    const slide = new SlideRight(e);
})

slideLeft.forEach(e => {
    const slide = new SlideLeft(e);
})


//TELEPHONE VALIDATION
document.addEventListener('readystatechange', function() {
    const eventCallback = function (e) {
        const el = e.target;
        const clearVal = el.dataset.phoneClear;
        const pattern = el.dataset.phonePattern;
        const matrix__def = '+7(___)___-__-__';
        const matrix = pattern ? pattern : matrix__def;
        let i = 0;
        let def = matrix.replace(/\D/g,""); 
        let val = e.target.value.replace(/\D/g,"");

        if(clearVal !== 'false' && e.type === 'blur') {
            if (val.length < matrix.match(/([\_\d])/g).length) { 
                e.target.value = '';
                return;
            }
        }

        if(def.length >= val.length) val = def;

        e.target.value = matrix.replace(/./g, function(a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
        }) 

    }

    const phoneInputs = document.querySelectorAll('[data-phone-pattern]');

    for(let elem of phoneInputs) {
        for(let ev of ['input', 'blur', 'focus']) {
            elem.addEventListener(ev, eventCallback)
        }
    }
})

window.addEventListener('scroll', () => {
    const headerContent = document.querySelector('.header-content');
    if(scrollY > 114) {
        headerContent.classList.add('padding-active');
    } else {
        headerContent.classList.remove('padding-active');
    }
})


// //scroll
// var box = document.querySelector('main');
// var aboutScroll = document.getElementById('about-window'); // <-- Scroll to here within ".box"
// const serviceScroll = document.getElementById('service-window');
// const exampleScroll = document.getElementById('example-window');
// const workScroll = document.getElementById('work-window');
// const contactScroll = document.getElementById('contact-window');

// const aboutBtn = document.querySelector('.about-btn');


// aboutBtn.addEventListener('click', function(){
//    scrollToElm( box, aboutScroll , 600 );
// });


// /////////////

// function scrollToElm(container, elm, duration){
//   var pos = getRelativePos(elm);
//   scrollTo( container, pos.top , 2);
// }

// function getRelativePos(elm){
//   var pPos = elm.parentNode.getBoundingClientRect(),
//       cPos = elm.getBoundingClientRect(),
//       pos = {};

//   pos.top    = cPos.top    - pPos.top + elm.parentNode.scrollTop,
//   pos.right  = cPos.right  - pPos.right,
//   pos.bottom = cPos.bottom - pPos.bottom,
//   pos.left   = cPos.left   - pPos.left;

//   return pos;
// }
    
// function scrollTo(element, to, duration, onDone) {
//     var start = element.scrollTop,
//         change = to - start,
//         startTime = performance.now(),
//         val, now, elapsed, t;

//     function animateScroll(){
//         now = performance.now();
//         elapsed = (now - startTime)/1000;
//         t = (elapsed/duration);

//         element.scrollTop = start + change * easeInOutQuad(t);

//         if( t < 1 )
//             window.requestAnimationFrame(animateScroll);
//         else
//             onDone && onDone();
//     };

//     animateScroll();
// }

// function easeInOutQuad(t){ return t<.5 ? 2*t*t : -1+(4-2*t)*t };


const form = document.forms['form']

form.addEventListener('submit', () => {
    formSubmit()
})

async function formSubmit() {
    const data = serializeForms(form);
    const response = await sendData(data);
    if(response.ok) {
        let result = await response.json();
        alert(result.message);
        formReset()
    } else {
        alert('Ошибка: ' + response.status);
    };
}

function serializeForms(formNode) {
    return new FormData(form);
}

async function sendData(data) {
    return await fetch('form.php', {
        method: "POST",
        body: data
    })
}

function formReset() {
    form.reset()
}