// Get bigger (height) child
function getBiggerChild() {

}

// tab panels
document.addEventListener("DOMContentLoaded", () => {
    // const tabPanels = document.querySelectorAll('.tabContainer > *:not(.active)');
    const tabNavs = document.querySelectorAll('.tabnav');
    // Toggle panels
    tabNavs.forEach((tabNav) => {

        tabNav.addEventListener("click", () => {
            const tabNavSiblings = Array.from(tabNav.parentElement.children);
            const targetContainer = tabNav.dataset.target;
            const targetPanel = document.querySelector(`#${tabNav.dataset.panel}`);
            // const allPanels = document.querySelectorAll(`#${targetContainer}> *`);
            const allPanels = Array.from(document.querySelector(`#${targetContainer}`).children);
            tabNavSiblings.forEach((tabNav) => {
                tabNav.classList.remove('active');
            })
            allPanels.forEach((panel) => {
                panel.classList.remove('active');
                // TODO => ARIA
            });
            targetPanel.classList.add('active');
            tabNav.classList.add('active');
        })
    })

});
// Read More
const readMores = document.querySelectorAll('.readmore');
if (readMores) {
    readMores.forEach((readMore) => {
        readMore.innerHTML += '<button type="button" class="readmore-button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="18" height="18"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" /></svg> Read more</button>';
        const btn = readMore.querySelector('.readmore-button');
        btn.addEventListener('click', () => {
            btn.parentNode.classList.toggle('active');
        })
    })
}