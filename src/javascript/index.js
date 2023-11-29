function checkNameInput() {
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let submitButton = document.getElementById('submitButton');
  
    if (firstName !== '' && lastName !== '') {
         submitButton.style.backgroundColor = '#0000FF';
         submitButton.disabled = false;
    } else {
        submitButton.style.backgroundColor = '#888888';
        submitButton.disabled = true;
    }

}


document.addEventListener("DOMContentLoaded", () => {
     const myForm = document.getElementById('myForm');

    if (myForm) {
        myForm.addEventListener('submit', function (event) {
          event.preventDefault();
        let firstName = document.getElementById('firstName').value;
         let lastName = document.getElementById('lastName').value;
         if(/^[a-zA-Z]+$/.test(firstName) && /^[a-zA-Z]+$/.test(lastName) )
        {
        localStorage.setItem("firstnamedata",firstName);
        localStorage.setItem("lastnamedata",lastName);
        window.location.href = '../html/wheelCheck.html';
        }
        else
        {
            window.alert("Firstname and Lastname should be alphabets")
        }
     });
     }
     else {
        console.log("Form not found");
    }
});