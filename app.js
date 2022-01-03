//hovering of services 

Array.from(document.querySelectorAll('.card-image')).forEach(item=>{
    item.onmouseover=()=>{
        item.parentElement.parentElement.classList.toggle('change');
    };
});
Array.from(document.querySelectorAll('.navigation-button')).forEach(item=>{
    item.onclick=()=>{
        item.parentElement.parentElement.classList.toggle('change');
    };
});


// Dynamic year

var date =new Date()
var year =date.getFullYear();
document.getElementById('year').innerHTML= year;


// Form Validation 
 // contact form validation

 function validateForm() {
    var name =document.getElementById('name').value;
    var email=document.getElementById('email').value;
    var phone=document.getElementById('phone').value;
    var message=document.getElementById('message').value;
    var answer=document.getElementById('errorMessage');
    
    if (name =="" || message=="" || email=="" || phone=="") {
            answer.innerHTML="Fill All fields Correctly";
            return false;
    }
  }

  



  // to input only text in name
  function validateName(event) {
    char=event.which;
    if(char >31 && char !=32 && (char <65 || char >90) && (char <97 || char >122)) {
        return false;
    }
  }
  
////////////////////////////Allternative########################

//   document.getElementById('submit').addEventListener('click',validateForm)
// function validateForm(){
//   var name=document.getElementById('name').value;
//   var email=document.getElementById('email').value;
//   var message=document.getElementById('message').value;
//   var contact= document.getElementById('contact');
//   const output = document.getElementById('output');
//   const result = output.className= ' alert alert-danger';

// if (name == null || name== "") {
// output.innerHTML= 'Fill Name';
// setTimeout(clearError,3000);
// return false;
// }
// if (email=="" ) {
//   output.innerHTML=' Fill Email';
//   setTimeout(clearError,3000);
//   return false;
// }
// if (message =="") {
//   output.innerHTML='Fill message';
//   setTimeout(clearError,3000);
//   return false;
//  }
//  else {
//   output.innerHTML='Succesfully Submitted';
//   return true;
// }
//  }
//  function clearError(){
//     document.querySelector('.alert').remove();
// }