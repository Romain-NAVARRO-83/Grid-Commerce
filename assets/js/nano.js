// Get bigger (height) child
function getBiggerChild() {

}

// tab panels
document.addEventListener("DOMContentLoaded", () =>{
    // const tabPanels = document.querySelectorAll('.tabContainer > *:not(.active)');
    const tabNavs = document.querySelectorAll('.tabNav');
    // Toggle panels
    tabNavs.forEach((tabNav) => {
        
        tabNav.addEventListener("click",()=>{
            const targetContainer = tabNav.dataset.target;
            const targetPanel =  document.querySelector(`#${tabNav.dataset.panel}`);
            const allPanels = document.querySelectorAll(`#${targetContainer}> *`);
            allPanels.forEach((panel)=>{
                panel.classList.remove('active'); 
                // TODO => ARIA
                targetPanel.classList.add('active'); 
            })
        })
    })
    
});
// document.querySelectorAll('.tabNav').forEach( (tabvnav) =>{
//     tabvnav.addEventListener('click',() => {
        
//     })
// })