let btn = document.getElementById("btn");
let modal = document.querySelector(".modal");
let close = document.querySelector(".close")

btn.addEventListener("click", openModal);
close.addEventListener("click", closeModal);
modal.addEventListener("click", closeModal);


function openModal(e) {
    e.preventDefault();
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}