
//get elements

const wood_tab = document.querySelectorAll('.tab-section .tab-menu ul a');

const wood_paneAll =document.querySelectorAll('.tab-content .tab-pane');


wood_tab.forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();

        wood_tab.forEach(item => {
            item.classList.remove('active');
        });

        item.classList.add('active');

        const wood_pane = document.querySelector(this.getAttribute('href'));

        
        wood_paneAll.forEach( item => {

            item.classList.remove('active');

        });

        wood_pane.classList.add('active')


    })
})