
function sendEmail(params) {
  sendButtonClicked = true;
  var tempParams = {
    from_name: document.getElementById("name").value,
    from_email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value
  }

  if(formValidation(tempParams)) {
    emailjs.send("contact_service", "template_m1g4iwp", tempParams)
    .then(function(res) {
      console.log("Email sent");
      document.querySelector('#sendmessage').style.display = "block";
    });
  }
  else {
    console.log("Can't send email");
  }

}

//https://www.emailjs.com

const nameField = document.querySelector('#name')
const emailField = document.querySelector('#email')
const subjectField = document.querySelector('#subject')
const msgField = document.querySelector('#message')


function formValidation(params) {

  let ok = true;

  // Name
  if(params["from_name"] === "") {
    console.log("No name");
    ok = false;
    nameField.placeholder = "Enter your name"
    nameField.classList.add("form-control-error")
  }

  // Email
  if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(params["from_email"]))
  {
    console.log("Wrong email")
    ok = false;
    emailField.placeholder = "Enter a valid email address"
    emailField.classList.add("form-control-error")
  }


  // Subject
  if(params["subject"] === "") {
    console.log("No subject");
    ok = false;
    subjectField.placeholder = "Enter a subject"
    subjectField.classList.add("form-control-error")
  }

  // Message
  if(params["message"] === "") {
    console.log("No message");
    ok = false;
    msgField.placeholder = "Enter your message"
    msgField.classList.add("form-control-error")
  }

  return ok;
  //return false;
}


document.querySelectorAll('input').forEach(item => {
  item.addEventListener('focus', inputFocus);
});
document.querySelectorAll('input').forEach(item => {
  item.addEventListener('blur', inputBlur);
});
document.querySelector('textarea').addEventListener('focus', inputFocus);
document.querySelector('textarea').addEventListener('blur', inputBlur);



function inputFocus(e) {
  e.target.classList.remove('form-control-error');
}

function inputBlur(e) {
  if(e.target === nameField) {
    if (e.target.value === "") {
      e.target.classList.add('form-control-error');
    }
  }
  else if(e.target === emailField) {
    if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(e.target.value)) {
      e.target.classList.add('form-control-error');
    }
  }
  else if(e.target === subjectField) {
    if (e.target.value === "") {
      e.target.classList.add('form-control-error');
    }
  }
  else if(e.target === msgField) {
    if (e.target.value === "") {
      e.target.classList.add('form-control-error');
    }
  }
}


