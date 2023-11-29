function goBack() {
   // localStorage.clear();
    window.history.back();
}

function nextPage() {
    var selectedValue = document.querySelector('input[name="sporttype"]:checked');
    let value=selectedValue.value;

    if (selectedValue) {
             localStorage.setItem("Bike",value);
            window.location.href = "bookingdate.html";
        }
    else {
        alert("Please select the Bike Type before proceeding");
    }
}
