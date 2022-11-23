const openSideBar = document.querySelector(".toggle");
const sideBar = document.querySelector(".sideBar")
const main =  document.querySelector("main")
const theme = document.querySelector(".theme");
const body = document.querySelector("body");
const project = document.querySelectorAll(".project")

openSideBar.addEventListener("click", () =>{
    sideBar.classList.toggle("sidebarActive");
    openSideBar.classList.toggle("toggleActive")
    main.classList.toggle("mainActive")
});

theme.addEventListener("click", () =>{
    body.classList.toggle("activeBody");
    theme.classList.toggle("themeActive");
    sideBar.classList.toggle("sidebarTheme");
    
    project.forEach(element => {
        element.classList.toggle("projectActive");
    });
})