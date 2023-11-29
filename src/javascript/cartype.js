function goBack() {
    window.history.back();
}

function nextPage() {
    var selectedValue = document.querySelector('input[name="fourwheels"]:checked');
    
    if (selectedValue) {
        if (selectedValue.value === "1") {
            window.location.href = "hatchbackcars.html";
        } else if (selectedValue.value === "2") {
            window.location.href = "suvcars.html";
        }
        else if (selectedValue.value === "3") {
            window.location.href = "sedancars.html";
        }
    } else {
        alert("Please select the Bike Type before proceeding");
    }
}