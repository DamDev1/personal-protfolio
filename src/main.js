const openSidebar = document.querySelector(".toggle");
const sideBar = document.querySelector(".sideBar");
const closeSideBar = document.querySelector(".close")

openSidebar.addEventListener("click", () =>{
    alert("hello")
});

closeSideBar.addEventListener("click", () =>{
    sideBar.style.display = "none"
})