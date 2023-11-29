function goBack() {
    window.history.back();
}

function nextPage() {
    var selectedValue = document.querySelector('input[name="twowheels"]:checked');
    
    if (selectedValue) {
        if (selectedValue.value === "1") {
            window.location.href = "cruiserbikes.html";
        } else if (selectedValue.value === "2") {
            window.location.href = "sportbikes.html";
        }
    } else {
        alert("Please select the Bike Type before proceeding");
    }
}