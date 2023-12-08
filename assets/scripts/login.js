const button = document.querySelector('.login__button');
const img = document.getElementById('bounce');
const form = document.querySelector('#ismForm');

form.addEventListener('submit', function (event) {
    event.preventDefault()
})

button.addEventListener('click', function () {
    const myInput = document.getElementById('input-1');
    const myInput2 = document.getElementById('input-2');
    if (myInput.value!= '' && myInput2.value!='') {
        img.classList.add('start-bouncing');
        console.log('myInput.value!=')
    }
});

img.onanimationend = () => {
    img.classList.remove('start-bouncing');
    window.location.href = './assets/pages/profile.html'
};
