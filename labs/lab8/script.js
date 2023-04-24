function toggleTheme(){
    let el = document.body
    

    if (el.classList.contains("dark-mode")) {
        el.classList.remove("dark-mode")
    }
    else {
        el.classList.add("dark-mode")
    }
}

let buttonVariable = document.getElementById("toggleButton")
buttonVariable.onclick = toggleTheme;