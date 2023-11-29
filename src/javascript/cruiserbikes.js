function goBack() {
    window.history.back();
}

function nextPage() {
    var selectedValue = document.querySelector('input[name="cruisertype"]:checked');
    let value=selectedValue.value;
    console.log(value);
    if (selectedValue) {
            localStorage.setItem("Bike",value);
            window.location.href = "bookingdate.html";
        }
    else {
        alert("Please select the Bike Type before proceeding");
    }
}





