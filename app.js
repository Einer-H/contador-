let count = 0
const d = document
const valor = d.querySelector('#valor')
const btns = d.querySelectorAll('.btn')

btns.forEach(function(btn){
    btn.addEventListener('click', e =>{
        const style = e.currentTarget.classList
        if(style.contains('negativo')){
            count--
        } else if(style.contains('positivo')){
            count++
        }else{
            count = 0
    }
        valor.textContent = count
    })
})