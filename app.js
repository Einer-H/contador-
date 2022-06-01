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
        if(count > 0)valor.style.color = 'green'
        if(count < 0)valor.style.color = 'red'
        if(count == 0)valor.style.color = '#222'
        valor.textContent = count
    })
})