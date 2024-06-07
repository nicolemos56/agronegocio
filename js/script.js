const form = document.getElementById('contact-form');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Impede o envio padrão do formulário

    /
    
    alert('Formulário enviado com sucesso!');

    // Limpa os campos do formulário
    form.reset();
});