const button = document.querySelector(".login__button");
const img = document.getElementById("bounce");

button.addEventListener("click", function () {
    const myInput = document.getElementById("input-1");
    const myInput2 = document.getElementById("input-2");
    if (myInput && myInput.value && myInput2 && myInput2.value) {
        img.classList.add("start-bouncing");
    }
});

img.onanimationend = () => {
    img.classList.remove("start-bouncing");
};


// if (document.getElementById("ismForm")) {
//     setTimeout("submitForm()", 5000); // set timout 
// }