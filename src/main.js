const openSideBar = document.querySelector(".toggle");
const sideBar = document.querySelector(".sideBar")
const main =  document.querySelector("main");
const theme = document.querySelector(".theme")

openSideBar.addEventListener("click", () =>{
    sideBar.classList.toggle("sidebarActive");
    openSideBar.classList.toggle("toggleActive")
    main.classList.toggle("mainActive")
});

theme.addEventListener("click", () =>{
    document.body.classList.toggle("dark")
})
