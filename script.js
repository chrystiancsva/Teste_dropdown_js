// const conteinerPerguntas = document.querySelector('.perguntas');

// conteinerPerguntas.addEventListener('click', (event) => {
//   // Verifica se o clique foi em um elemento com a classe "pergunta"
//   if (event.target.classList.contains('pergunta')) {
//     // Pega o elemento irmão seguinte (o dropdown dentro da mesma ul)
//     const dropdown = event.target.nextElementSibling;
    
//     if (dropdown) {
//       dropdown.classList.toggle('show');
//     }
//   }
// });


// document.querySelectorAll('.pergunta').forEach((pergunta) => {
//   pergunta.addEventListener('click', () => {
//     pergunta.nextElementSibling?.classList.toggle('show');
//   });
// });


const perguntas = document.querySelectorAll('.pergunta');

perguntas.forEach((pergunta) => {
  pergunta.addEventListener('click', () => {
    const dropdown = pergunta.nextElementSibling;

    // Fecha todos os dropdowns que não sejam o atual
    document.querySelectorAll('.dropdown').forEach((item) => {
      if (item !== dropdown) item.classList.remove('show');
    });

    // Alterna o atual
    dropdown?.classList.toggle('show');
  });
});