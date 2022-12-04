// const ProgrammingLanguages = document.querySelector(".ProgrammingLanguages")

// fetch('https://api.github.com/repos/DamDev1/BackgroundChanging/languages', {
//   headers: new Headers({
//     'User-agent': 'Mozilla/4.0 Custom User Agent'
//   })
// })
// .then(response => response.json())
// .then(data => {
//     for(const key in data){
//         const languageContainer = document.createElement("div")
//         languageContainer.className = "languageContainer"
//         ProgrammingLanguages.appendChild(languageContainer);
        
//         const language = document.createElement("span");
//         languageContainer.appendChild(language)
//         language.className = "language"
//         language.innerHTML = key

//         const totalCodeLine = document.createElement("span");
//         languageContainer.appendChild(totalCodeLine)
//         totalCodeLine.className = "totalCodeLine"
//         totalCodeLine.innerHTML = data[key];
        
//     }
// })
// .catch(error => console.error(error))