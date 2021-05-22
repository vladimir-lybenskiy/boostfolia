/*jshint esversion: 6 */
let btnGetComment = document.getElementById('btn-getComment'),
    nameInput = document.getElementsByClassName('form-control')[0],
    text = document.getElementsByName('comment')[0],
    thanks = document.querySelector('.thanks');

nameInput.addEventListener('input', function() {
    text.value = `Меня зовут ${nameInput.value}. И я хочу сказать: `;
});

btnGetComment.addEventListener('click', function() {
    thanks.style.display = 'block';
});