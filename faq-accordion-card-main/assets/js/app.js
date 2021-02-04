$(document).ready(()=>{
    var toggle = document.querySelector('.arrow-down svg');
    toggle.addEventListener('click', (e)=>{
        var target = e.target.parentNode.parentNode.children[0];
        var ques = e.target.parentNode.parentNode.parentNode.children[1];
        console.log(target)
        $(target).toggleClass('isBold');
        $(toggle).toggleClass('rotate360')
        $(ques).slideToggle()
    })
})