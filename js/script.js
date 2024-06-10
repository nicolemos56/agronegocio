const form = document.getElementById('contact-form');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Impede o envio padrão do formulário

    
    alert('Formulário enviado com sucesso!');

    // Limpa os campos do formulário
    form.reset();
});

const toggleButton = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar ul');

toggleButton.addEventListener('click', () => {
    toggleButton.classList.toggle('active');
    navbarMenu.classList.toggle('mostrar');
});


