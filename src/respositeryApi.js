const projects = document.querySelector(".projects");

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

        const projectname = document.createElement('h2')
        projectname.className = "projectName";
        project.appendChild(projectname);
        projectname.innerHTML = projectName;
        
        const projectDiscription = document.createElement("p");
        projectDiscription.innerHTML = "I love creating empty Respository"
        project.appendChild(projectDiscription);
        projectDiscription.className = "projectDiscription"

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
