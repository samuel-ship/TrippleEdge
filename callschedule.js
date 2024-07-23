var firebaseConfig = {
    apiKey: "AIzaSyB_fQZKPJcCwOdFyoUqYB2DAYJCTAFW8OM",
    authDomain: "request-form-42eb1.firebaseapp.com",
    databaseURL: "https://request-form-42eb1.firebaseio.com",
    projectId: "request-form-42eb1",
    storageBucket: "",
    messagingSenderId: "172902378090",
    appId: "1:172902378090:web:840ee77926b131f9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// Reference message collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
  e.preventDefault();
  
  //Get values
  var firstname = getInputVal('firstname');
  var lastname = getInputVal('lastname');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');
  
  // Save message
  saveMessage(firstname, lastname, email, phone, message);
  
  // Show alert
  document.querySelector('.alert').style.display = 'block';
  
  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  };3000);
  
  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(firstname, lastname, email, phone, message) {
  var newMessageref = messagesRef.push();
  newMessageRef.set({
    firstname: firstname,
    lastname: lastname,
    email: email,
    phone: phone,
    message: message
  });
}