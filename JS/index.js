var mailInput = document.getElementById("mail");

var passInput = document.getElementById("pass");

var nameInput = document.getElementById("name");

var logBtn = document.getElementById("login");

var userContainer = [];


// check local storage
if(localStorage.getItem("users")==null){
    userContainer=[];
}
else{
    userContainer = JSON.parse(localStorage.getItem("users"));
}


// to say welcome in home page
var username = localStorage.getItem('nameInput')
if (username) {
    document.getElementById('username').innerHTML = username;

}

// for check email is exist
function isEmailExist() {
  for (var i = 0; i < userContainer.length; i++) {
      if (userContainer[i].email.toLowerCase() == signupEmail.value.toLowerCase()) {
          return false
      }
  }
}


// signup

function signUp() {

  if(
    nameInput.classList.contains('is-valid')&&
     mailInput.classList.contains('is-valid')&&
     passInput.classList.contains('is-valid')
   )
   {

  var user = {
      name: nameInput.value,
      email: mailInput.value,
      password: passInput.value,
  }

  userContainer.push(user);

     localStorage.setItem("users" , JSON.stringify(userContainer));

     document.getElementById('exist').innerHTML = '<span class="text-success m-3">Success</span>';

     return true


  }

    if (isEmailExist() == false) {
    document.getElementById('exist').innerHTML = '<span class="text-danger m-3">email already exists</span>'
    
    } 
    else  {
    signUpArray.push(signUp)
    localStorage.setItem('users', JSON.stringify(signUpArray))
    document.getElementById('exist').innerHTML = '<span class="text-success m-3">Success</span>'
    
    }

    console.log(userContainer);
    clearForm();
};




// enter an email
function enterEmail() {

    if(
       mailInput.classList.contains('is-valid')&&
       passInput.classList.contains('is-valid')
     )
     {

    var user = {
        email: mailInput.value,
        password: passInput.value,
    }

    userContainer.push(user);

       localStorage.setItem("users" , JSON.stringify(userContainer));

    console.log(userContainer);


    clearForm();
    
    }
       else{
           alert("Please complete the form");
       }
};



//    clear
function clearForm() {
    mailInput.value = null;
    passInput.value = null;
    nameInput.value = null;

    mailInput.classList.remove('is-valid');
    passInput.classList.remove('is-valid');
    nameInput.classList.remove('is-valid');
}


// validation
function checkValidation(person , msgId){
  var msg = document.getElementById(msgId);
 var regex = {
    mail: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-]/,
    pass: /^[A-Za-z0-9._+-]{5,11}/,
    name:/^[A-Za-z]{3,15}$/
 }

 if (regex[person.id].test(person.value)){
  person.classList.add('is-valid');
  person.classList.remove('is-invalid');
  msg.classList.add('d-none')

  return true;
  } else {
    person.classList.add('is-invalid');
    person.classList.remove('is-valid')
    msg.classList.remove('d-none');

    return false;
 }

}


//for check inputs is empty or not
function isEmpty() {

  if (nameInput.value == "" || mailInput.value == "" || passInput.value == "") {
      return false
  } else {
      return true
  }
}

function logout(){
  localStorage.removeItem('user');
}




