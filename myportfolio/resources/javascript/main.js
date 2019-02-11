$(document).ready(() => {

$('#doelen-button').on('click', () => {
    $('.doelen').toggle();
})

$('#beroep-button').on('click', () => {
    $('.beroep').slideToggle();
})

$('#portfolio-button').on('click', () => {
    $('.portfolio').fadeToggle('slow');
})

$('#contact-button').on('click', () => {
    $('.contact').fadeToggle(3000);
})

})