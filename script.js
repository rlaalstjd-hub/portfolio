document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault(); // 폼 전송 막기

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  alert(`Thank you, ${name}! Your message has been successfully sent.`);
});
