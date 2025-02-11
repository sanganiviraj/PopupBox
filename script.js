document.addEventListener("DOMContentLoaded", function () {
    let submitBtn = document.getElementById("submitBtn")
    let popupOpen = document.querySelector(".popup-overlay")
    let popupClose = document.querySelector(".popup-closeBtn")
    let currentDate = document.querySelector(".current-date")







    submitBtn.addEventListener("click", function () {
        popupOpen.classList.add("fade-in");
        popupOpen.style.display = "block";
        submitBtn.style.display = "none";
        // today=new Date()
        // console.log(today.toLocaleDateString());

        const today = new Date();
        let dd = today.getDate()
        let mm = today.getMonth() + 1
        let yyyy = today.getFullYear()

        newDate = `${dd}/${mm}/${yyyy}`
        currentDate.textContent = newDate
    })
    popupClose.addEventListener("click", function () {
        popupOpen.style.display = "none";
        submitBtn.style.display = "block";
        // popupOpen.classList.remove("fade-in");  
    })

});