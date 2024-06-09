const gridToggler = document.querySelectorAll('.modalToggler');
const modal = document.querySelector(".modal")
gridToggler.forEach((toggler) => {
    toggler.addEventListener("click", (e) => {
        e.preventDefault();
        modal.classList.toggle('active');
    })
})