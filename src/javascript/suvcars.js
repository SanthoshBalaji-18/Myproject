function goBack() {
    window.history.back();
}

function nextPage() {
    var selectedValue = document.querySelector('input[name="suvtype"]:checked');
    let value=selectedValue.value;
    if (selectedValue) {
        localStorage.setItem("Car",value);
            window.location.href = "bookingdate.html";
        }
    else {
        alert("Please select the Bike Type before proceeding");
    }
}