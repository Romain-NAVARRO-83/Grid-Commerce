// Get bigger (height) child
function getBiggerChild() {

}

// tab panels
document.addEventListener("DOMContentLoaded", () =>{
    // const tabPanels = document.querySelectorAll('.tabContainer > *:not(.active)');
    const tabNavs = document.querySelectorAll('.tabnav');
    // Toggle panels
    tabNavs.forEach((tabNav) => {
        
        tabNav.addEventListener("click",()=>{
            const tabNavSiblings = Array.from(tabNav.parentElement.children);
            const targetContainer = tabNav.dataset.target;
            const targetPanel =  document.querySelector(`#${tabNav.dataset.panel}`);
            // const allPanels = document.querySelectorAll(`#${targetContainer}> *`);
            const allPanels = Array.from(document.querySelector(`#${targetContainer}`).children);
            tabNavSiblings.forEach((tabNav)=>{
                tabNav.classList.remove('active');
            })
            allPanels.forEach((panel)=>{
                panel.classList.remove('active'); 
                // TODO => ARIA
            });
            targetPanel.classList.add('active'); 
            tabNav.classList.add('active');
        })
    })
    
});
// document.querySelectorAll('.tabNav').forEach( (tabvnav) =>{
//     tabvnav.addEventListener('click',() => {
        
//     })
// })