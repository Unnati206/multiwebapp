function showMessage(){
    alert("Welcome to Glow Beauty Salon!");
}

document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("appointmentForm");

    if(form){
        form.addEventListener("submit", function(e){

            e.preventDefault();

            alert("Appointment Booked Successfully!");

            form.reset();
        });
    }

});
