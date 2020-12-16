const accordionItemsEL = document.getElementsByClassName('accordion__item');

function accordion() {
    for(let item of accordionItemsEL){
        let accHeader = item.firstElementChild;
        accHeader.addEventListener('click', () =>{
            let accDetails = accHeader.nextElementSibling;
            if(accDetails.style.maxHeight){
                accDetails.style.maxHeight = null
                accHeader.lastElementChild.innerHTML = '+'
            }else{
                accDetails.style.maxHeight = accDetails.scrollHeight + 'px';
                accHeader.lastElementChild.innerHTML = '-'
            }
        })
    }
}

accordion()