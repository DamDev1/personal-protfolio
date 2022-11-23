const closeSideBar = document.querySelector(".close");
const sideBar = document.querySelector("#sidebar");
const toggle = document.querySelector(".toggle")

toggle.addEventListener("click", function() {
    sideBar.style.display = "block";
    alert("hello")
})

closeSideBar.addEventListener("click", function() {
    sideBar.style.display = "none";
})
