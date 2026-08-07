// const conteinerPerguntas = document.querySelector('.perguntas');

// conteinerPerguntas.addEventListener('click', (event) => {
//  
//   if (event.target.classList.contains('pergunta')) {
//     
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

   
    document.querySelectorAll('.dropdown').forEach((item) => {
      if (item !== dropdown) item.classList.remove('show');
    });

    // Alterna o atual
    dropdown?.classList.toggle('show');
  });
});