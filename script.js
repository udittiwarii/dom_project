let navabar = document.querySelector('.navbar');
let privscrollposition = window.scrollY;

window.addEventListener('scroll', function () {
    let currentscrollpositon = window.scrollY;
    if (currentscrollpositon > privscrollposition) {
        navabar.style.top = '-100px'

    } else {
        navabar.style.top = '0px'
    }

    privscrollposition = currentscrollpositon;
    console.log(privscrollposition)
})
