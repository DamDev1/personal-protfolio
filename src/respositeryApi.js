const projects = document.querySelector(".projects");
const repositoryName = document.querySelector(".repositoryName");
const repositoryDetail = document.querySelector(".repositoryDetail")

const popUp = document.querySelector("#popUp")
const ProgrammingLanguages = document.querySelector(".ProgrammingLanguages")

//Clone urls
const cloneHttps = document.querySelector("#cloneHttps input")
const cloneSsh = document.querySelector("#cloneSsh input");

//view github
const view = document.querySelector(".view")

async function fetchData(){
    const api = await (fetch('https://api.github.com/users/DamDev1/repos', {
        headers: new Headers({
          'User-agent': 'Mozilla/4.0 Custom User Agent'
        })
    }));
    const myData = await api.json();
    const myRepositery = myData;

    myRepositery.forEach(element => {
        console.log(element)
        projectName = element.name;

        const project = document.createElement("div");
        project.className = "project"
        projects.appendChild(project)

        project.addEventListener("click",()=>{
            popUp.style.display = "block"
            repositoryName.textContent = checkingProjectName;
            repositoryDetail.textContent = checkingProjectDetail;


            //clone urls
            cloneHttps.value = element.clone_url;
            cloneSsh.value = element.ssh_url;
            view.href = element.html_url;

            fetch(`https://api.github.com/repos/DamDev1/${checkingProjectName}/languages`, {
                headers: new Headers({
                    'User-agent': 'Mozilla/4.0 Custom User Agent'
                })
            })
            .then(response => response.json())
            .then(data => {
                for(const key in data){
                    const languageContainer = document.createElement("div")
                    languageContainer.className = "languageContainer"
                    ProgrammingLanguages.appendChild(languageContainer);
                    
                    const language = document.createElement("span");
                    languageContainer.appendChild(language)
                    language.className = "language"
                    language.innerHTML = key

                    setTimeout(() => {
                        const totalCodeLine = document.createElement("span");
                        languageContainer.appendChild(totalCodeLine)
                        totalCodeLine.className = "totalCodeLine"
                        totalCodeLine.innerHTML = data[key];
                    }, 1000);

                    fetch(`https://api.github.com/repos/DamDev1/${checkingProjectName}/commits`, {
                        headers: new Headers({
                            'User-agent': 'Mozilla/4.0 Custom User Agent'
                        })
                    })
                    .then(response => response.json())
                    .then(data => {
                        console.log(data[0].commit.message)
                        const commit = document.createElement("span");
                        languageContainer.appendChild(commit)
                        commit.className = "commit"
                        commit.innerHTML = data[0].commit.message;
                    })
                    
                }
            })
            .catch(error => console.error(error))


        })

        const projectname = document.createElement('h2')
        projectname.className = "projectName";
        project.appendChild(projectname);
        projectname.innerHTML = projectName;
        repositoryName.innerHTML = projectName;
        const checkingProjectName = projectname.innerHTML;
        
        const projectDiscription = document.createElement("p");
        projectDiscription.innerHTML = element.description;
        project.appendChild(projectDiscription);
        projectDiscription.className = "projectDiscription";
        repositoryDetail.textContent = projectDiscription.textContent;

        if(projectDiscription.innerHTML == ""){
            projectDiscription.innerHTML = "i love creating empty repositary";
        }else{
            projectDiscription.innerHTML = element.description;
        }

        const checkingProjectDetail = projectDiscription.innerHTML;

        const icons = document.createElement("div")
        project.appendChild(icons)
        icons.className = "icons"

        const code = document.createElement('span')
        const codeIcon = document.createElement('i');
        codeIcon.className = "fa-solid fa-code";
        icons.appendChild(code);
        code.appendChild(codeIcon)
        code.innerHTML = "Javascript, CSS"
    });
}

fetchData();
