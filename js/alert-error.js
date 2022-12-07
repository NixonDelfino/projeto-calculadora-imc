export const AlertError = {
    element: document.querySelector('.alerterror'),
    open(){
        AlertError.element.classList.add('open')    
    },
    close(){
        AlertError.element.classList.remove('open')    
    }
}

