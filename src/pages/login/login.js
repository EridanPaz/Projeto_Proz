let btnLogin = document.getElementById('button__login');

btnLogin.addEventListener('click', (evento)=>{
   
  evento.preventDefault();

    const emailInvalido  = document.getElementById('form_email_error');
    const email          = document.getElementById('registration__form__email');
    const senhaInvalida  = document.getElementById('form_pwd_error');
    const senha          = document.getElementById('registration_form_password'); 
    
    // Remove as classes relacionados ao erro.
    emailInvalido.classList.remove('invalid_feedback', 'visible');
    emailInvalido.textContent = '';
    senhaInvalida.classList.remove('invalid_feedback', 'visible');       
    senhaInvalida.textContent = '';  

    // Validar o email
    let qtdePonto = email.value.trim().split('.').length - 1;

    if (email.value.trim() == '' || !email.value.includes('@') || email.value.trim().length < 13 || qtdePonto < 1) {       
      emailInvalido.classList.add('invalid_feedback', 'visible');

      if(email.value.trim() == ''){
        emailInvalido.textContent = 'Campo obrigatório';

      }else if (!email.value.includes('@') || qtdePonto < 1) {        
        emailInvalido.textContent = 'Email inválido';
        
      }else if (email.value.trim().length < 13){          
        emailInvalido.textContent = 'Mínimo: 13 caracteres';         
      }
  }

    //Validar a senha
    if(senha.value.trim() == ''){
      senhaInvalida.classList.add('invalid_feedback');
      senhaInvalida.textContent = 'Cambo obrigatório';
      senhaInvalida.classList.add('visible');
    }    
})