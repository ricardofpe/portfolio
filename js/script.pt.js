const publicKey = 'HiP8frUaEIRG_3Tij';

(function(){
  emailjs.init(publicKey);
})();

// Resto do seu código JavaScript
// ...


const btn = document.getElementById('button-send');
const feedbackMessage = document.getElementById('feedback-message');
const form = document.getElementById('form-send'); // Reference to the form element

form.addEventListener("submit", function(event) {
  event.preventDefault();

  btn.value = 'Enviando...';
  feedbackMessage.style.display = 'none';

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const mensagem = document.getElementById('mensagem').value;


  const serviceID = 'service_rsmrj9n';
  const templateId = 'template_a63rf9j';

  const templateParams = {
    nome: nome,
    email: email,
    mensagem: mensagem
  };

  emailjs.send(serviceID, templateId, templateParams).then(
    () => {
      btn.value = "Enviar Email";
      feedbackMessage.style.display = 'block';
      form.reset(); // Reset form after successful submission
    },
    (err) => {
      btn.value = "Enviar Email";
      alert(JSON.stringify(err));
    }
  );
});
