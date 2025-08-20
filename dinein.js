document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault(); // stop form reload

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const people = document.getElementById("people").value;

  alert(`Thanks ${name}! Your table for ${people} people has been booked.\nA confirmation mail will be sent to ${email}.`);
});
