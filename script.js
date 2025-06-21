document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('formulario');
  const mensagem = document.getElementById('mensagem');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const nome = form.nome.value.trim();
      const email = form.email.value.trim();

      if (nome === '' || email === '') {
        mensagem.textContent = 'Por favor, preencha todos os campos.';
        mensagem.style.color = 'tomato';
        return;
      }

      // Simular envio, podes aqui ligar a backend real
      mensagem.style.color = '#8bc34a';
      mensagem.textContent = 'Formulário enviado com sucesso! Obrigado.';

      form.reset();
    });
  }
});
