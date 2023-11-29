function goBack() {
    window.history.back();
}

function checkInput() {
    let startDate = document.getElementById('StartDate').value;
    let endDate = document.getElementById('EndDate').value;
    let submitButton = document.getElementById('submitButton');
    if (startDate !== '' && endDate !== '') {
        submitButton.style.backgroundColor = '#0000FF'; 
        submitButton.disabled = false;
    } else {
        submitButton.style.backgroundColor = '#888888'; 
        submitButton.disabled = true;
    }
}

const getFirstName=localStorage.getItem("firstnamedata");
const getLastName=localStorage.getItem("lastnamedata");
const getBikeData=localStorage.getItem("Bike");
const getCarData=localStorage.getItem("Car");



document.addEventListener("DOMContentLoaded", () => {
    const myForm = document.getElementById('bookingform');

   if (myForm) {
       myForm.addEventListener('submit', function (event) {
           event.preventDefault();
        const startDate = document.getElementById('StartDate').value;
        const start = new Date(startDate).toISOString().split('T')[0];
        console.log(start);
        const endDate = document.getElementById('EndDate').value;
        const end = new Date(endDate).toISOString().split('T')[0];
        console.log(end);

        function validateDates(InitialDate, FinalDate) {
        
            if (FinalDate < InitialDate) {
                window.alert("End date should be after Start Date");
                return "Invalid End date"
                
            }
            return `${InitialDate} + ${FinalDate}`;
        }
        
        const result = validateDates(start, end);
        console.log(result);
        const formData = {
               "firstName":getFirstName,
               "lastName": getLastName,
               "bikeModel":getBikeData,
               "carModel":getCarData,
               "startDate":start,
               "endDate": end
       } 

       async function fetchData() {
        try {
            const params = new URLSearchParams({
                bikeData: formData.bikeModel,
                carData: formData.carModel,
                startDate: formData.startDate,
                endDate: formData.endDate,
            });
    
            const response = await fetch(`/getData?${params}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json();   
            console.log("Searched for data" + data);
            if (data.length === 0) {
                submitData();           
             } else {
                data.forEach(entry => {
                    const { startdate, enddate } = entry;
                    const setInitialDate = new Date(startdate);
                    const setFinalDate = new Date(enddate);
                    window.alert(`Vehicle was booked between ${setInitialDate} and ${setFinalDate}`);
                });
            } 
        } catch (error) {
            console.error('Error:', error);
        }
    }
    
    fetchData();
    
    async function submitData() {
        try {
            const response = await fetch('/bookingData', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
    
            const data = await response.json();
            console.log(data);
            alert("Booking successfully Done");
            localStorage.clear();
           window.location.href = '../html/index.html';
        } catch (error) {
            console.error('Error:', error);
        }
    }
 });
   } else {
       console.log("Form not found");
   }
});