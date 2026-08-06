const acordeao = document.getElementById('pergunta')
const lista = document.getElementById('dropdown')

acordeao.addEventListener('click', ()=>{
    if (lista.classList.contains('show')) {
        lista.classList.remove('show')
    } else {
        lista.classList.add('show')
    }
}) 