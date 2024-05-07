
let btnCriarConta = document.getElementById('button__create__acount');

btnCriarConta.addEventListener('click', (evento)=>{
   evento.preventDefault();

   let invalidName         = document.getElementById('form_name_error');
   let name                = document.getElementById('registration_form_fname');
   let invalidLastName     = document.getElementById('form_lname_error');
   let lastName            = document.getElementById('registration_form_lname');
   let invalidCPF          = document.getElementById('form_cpf_error');
   let CPF                 = document.getElementById('registration_form_cpf');
   let invalidEmail        = document.getElementById('form_email_error');
   let email               = document.getElementById('registration_form_email');  
   let invalidEmailConfirm = document.getElementById('form_email_confirm_error');
   let emailConfirm        = document.getElementById('registration_form_email_confirm');     
   let invalidPwd          = document.getElementById('form_password_error');
   let pwd                 = document.getElementById('registration_form_password');  
   let invalidPwdConfirm   = document.getElementById('form_password_confirm');
   let pwdConfirm          = document.getElementById('registration_form_password_confirm');           

   invalidName.classList.remove('invalid_feedback', 'visible');
   invalidName.textContent = '';   
   invalidLastName.classList.remove('invalid_feedback', 'visible'); 
   invalidLastName.textContent = '';
   invalidCPF.classList.remove('invalid_feedback', 'visible'); 
   invalidCPF.textContent = '';
   invalidEmail.classList.remove('invalid_feedback', 'visible'); 
   invalidEmail.textContent = '';   
   invalidEmailConfirm.classList.remove('invalid_feedback', 'visible');
   invalidEmailConfirm.textContent = '';    
   invalidPwd.classList.remove('invalid_feedback', 'visible');     
   invalidPwd.textContent = '';
   invalidPwdConfirm.classList.remove('invalid_feedback', 'visible');     
   invalidPwdConfirm.textContent = '';        

   if(name.value.trim() == '' || name.value.trim().length < 5){
      invalidName.classList.add('invalid_feedback', 'visible');

      if(name.value.trim() == ''){
         invalidName.textContent = 'Campo obrigatório' 
                 
      }else if(name.value.trim().length < 5){         
         invalidName.textContent = 'Mínimo cinco caracteres'    
      }
   }

   if(lastName.value.trim() == ''){
      invalidLastName.classList.add('invalid_feedback', 'visible');
      invalidLastName.textContent = 'Campo obrigatório'       
   }

   if(CPF.value.trim() == '' || CPF.value.trim().length < 11){
      invalidCPF.classList.add('invalid_feedback', 'visible');

      if(CPF.value.trim() == ''){         
         invalidCPF.textContent = 'Campo obrigatório'  

      }else if(CPF.value.trim().length < 11){
         invalidCPF.textContent = 'Mínimo onze dígitos' 
      }    
   }

let qtdePonto = email.value.trim().split('.').length - 1;

   if(email.value.trim() == '' || !email.value.includes('@') || email.value.trim().length < 13 || qtdePonto < 1){
      invalidEmail.classList.add('invalid_feedback', 'visible');
      
      if(email.value.trim() == ''){
         invalidEmail.textContent = 'Campo obrigatório'; 

      }else if(!email.value.includes('@') || qtdePonto < 1){
         invalidEmail.textContent = 'E-Mail inválido'; 

      }else if(email.value.trim().length < 13){
         invalidEmail.textContent = 'Mínimo treze caracteres'; 
      }
   }

   qtdePonto = emailConfirm.value.trim().split('.').length - 1;

   if(emailConfirm.value.trim() == '' || !emailConfirm.value.includes('@') || emailConfirm.value.trim().length < 13 
   || qtdePonto < 1 || emailConfirm.value.trim() != email.value.trim()){
      invalidEmailConfirm.classList.add('invalid_feedback', 'visible');
      
      if(emailConfirm.value.trim() == ''){
         invalidEmailConfirm.textContent = 'Campo obrigatório'; 

      }else if(!emailConfirm.value.includes('@') || qtdePonto < 1){
         invalidEmailConfirm.textContent = 'E-Mail inválido'; 

      }else if(emailConfirm.value.trim().length < 13){
         invalidEmailConfirm.textContent = 'Mínimo treze caracteres';

      }else if(emailConfirm.value.trim() != email.value.trim()){
         invalidEmailConfirm.textContent = 'E-Mails diferenes'; 
      }
   }
   
   if(pwd.value.trim() == '' || pwd.value.trim().length < 6){
      invalidPwd.classList.add('invalid_feedback', 'visible');
      
      if(pwd.value.trim() == ''){
         invalidPwd.textContent = 'Campo obrigatório'; 

      }else if(pwd.value.trim().length < 6){
         invalidPwd.textContent = 'Mínimo seis caracteres'; 
      }
   } 
   
   if(pwdConfirm.value.trim() == '' || pwdConfirm.value.trim().length < 6 || pwdConfirm.value.trim() != pwd.value.trim()){
      invalidPwdConfirm.classList.add('invalid_feedback', 'visible');
      
      if(pwdConfirm.value.trim() == ''){
         invalidPwdConfirm.textContent = 'Campo obrigatório';  

      }else if(pwdConfirm.value.trim().length < 6){
         invalidPwdConfirm.textContent = 'Mínimo seis caracteres'; 

      }else if(pwdConfirm.value.trim() != pwd.value.trim()){
         invalidPwdConfirm.textContent = 'Senhas diferenes'; 
      }
   }   
})

