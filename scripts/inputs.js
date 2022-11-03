export function getValues(elements) {
    let apiBody = {}
    
    let formElements = [...elements]

    formElements.forEach((element) => {
        if (element.tagName == "INPUT" || element.tagName == "TEXTAREA") {
            apiBody[element.id] = element.value
        } else if (element.tagName == "SELECT" && element.value) {
            apiBody[element.id] = element.value
        }
    }) 
    return apiBody
}