const publicKey = 'HiP8frUaEIRG_3Tij';

(function(){
  emailjs.init(publicKey);
})();



const btn = document.getElementById('button-send');
const feedbackMessage = document.getElementById('feedback-message');
const form = document.getElementById('form-send'); // Reference to the form element

form.addEventListener("submit", function(event) {
  event.preventDefault();

  btn.value = 'Sending...';
  feedbackMessage.style.display = 'none';

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const mensagem = document.getElementById('mensagem').value;

  if (nome.trim() === "" || email.trim() === "" || mensagem.trim() === "") {
    alert("Please fill in all fields.");
    btn.value = "Send Email";
    return;
  }


  const serviceID = 'service_rsmrj9n';
  const templateId = 'template_a63rf9j';

  const templateParams = {
    nome: nome,
    email: email,
    mensagem: mensagem
  };

  emailjs.send(serviceID, templateId, templateParams).then(
    () => {
      btn.value = "Send Email";
      feedbackMessage.style.display = 'block';
      form.reset(); // Reset form after successful submission
    },
    (err) => {
      btn.value = "Send Email";
      alert(JSON.stringify(err));
    }
  );
});

