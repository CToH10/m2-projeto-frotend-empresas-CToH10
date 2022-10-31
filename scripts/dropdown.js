const dropdownBtn = document.querySelector(".dropdownBtn")
const formsBtn    = document.querySelector(".formsBtn")


export function dropdown() {
    if (dropdownBtn.innerText == "") {
        dropdownBtn.innerText        = "X"
        dropdownBtn.style.background = "0" 
    } else {
        dropdownBtn.innerText                = ""
        dropdownBtn.style.backgroundImage    = "url(../../assets/img/grad.svg)"
        dropdownBtn.style.backgroundRepeat   = "no-repeat"
        dropdownBtn.style.backgroundPosition = "center"
    }
    
    formsBtn.classList.toggle("noShow")
}