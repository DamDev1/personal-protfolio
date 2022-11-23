const openSidebar = document.querySelector(".toggle");
const sideBar = document.querySelector(".sideBar");
const closeSideBar = document.querySelector(".close")

openSidebar.addEventListener("click", () =>{
    sideBar.style.display = "block"
});

closeSideBar.addEventListener("click", () =>{
    sideBar.style.display = "none"
})