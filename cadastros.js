document.addEventListener('DOMContentLoaded', () => {

  const usuarioCadastradoParaExibir = JSON.parse(localStorage.getItem('usuario'));
  if (usuarioCadastradoParaExibir) {
    const nomeEl = document.getElementById('nome');
    if (nomeEl) {
      nomeEl.textContent = usuarioCadastradoParaExibir.nome;
    }
  }
  const cadastroForm = document.getElementById('cadastro');
  if (cadastroForm) {
    cadastroForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nome = document.getElementById('nome').value;
      const email = document.getElementById('email').value;
      const senha = document.getElementById('senha').value;

      const usuario = { nome, email, senha };
      localStorage.setItem('usuario', JSON.stringify(usuario));

      alert('Cadastro realizado com sucesso!');
    });
  }

  if (document.getElementById('login')) {
    const loginForm = document.getElementById('login');
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const email = document.getElementById('email-login').value;
      const senha = document.getElementById('senha-login').value;

      const usuario_cadastrado = JSON.parse(localStorage.getItem('usuario'));
        if(usuario_cadastrado && email === usuario_cadastrado.email && senha === usuario_cadastrado.senha){
            alert('Login realizado com sucesso!');
            window.location.href = 'usuario.html';
        }else{
            alert('Email ou senha incorretos. Tente novamente.');
        }


    });
  }




});