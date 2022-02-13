//get element

const tab_menu = document.querySelectorAll('.tab-menu ul li .dropdown-item');
const drop_menu = document.querySelectorAll('.tab-menu ul li .dropdown-item a');


tab_menu.forEach(item=>{
    item.addEventListener('click',function(e){
        e.preventDefault();
        const currentActive = document.querySelector('.active');

        if(currentActive && (currentActive!==this)){
           
            currentActive.classList.remove('active');
            currentActive.nextElementSibling.style.height='0px';
        }
        item.classList.toggle('active');
        
        if(item.classList.contains('active')){
            item.nextElementSibling.style.height =this.nextElementSibling.scrollHeight +'px'
        }else{
            item.nextElementSibling.style.height='0px'
        }
    })
});

