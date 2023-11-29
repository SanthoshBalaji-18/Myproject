function goBack() {
    window.history.back();
}

function nextPage() {
    var selectedValue = document.querySelector('input[name="wheels"]:checked');
    
    if (selectedValue) {
        if (selectedValue.value === "2") {
            localStorage.setItem("Car",null)
            window.location.href = "biketype.html";
        } else if (selectedValue.value === "4") {
            localStorage.setItem("Bike",null)
            window.location.href = "cartype.html";

        }
    } else {
        alert("Please select the number of wheels before proceeding");
    }
}