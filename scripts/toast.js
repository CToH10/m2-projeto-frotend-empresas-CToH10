export function createToast(response) {
    let body = document.querySelector("body")
    let message = "Requisição realizada com sucesso"
    if (!response) {
        response = []
    }
    if (response.error) {
        if (response.error.length == 0) {
            message = response.error[0]
        }
        message = response.error
        body.insertAdjacentHTML("beforeend", `
        <section class="toast redToast absolute">
            <p>${message}</p>
        </section>
        `)
    } else {
        body.insertAdjacentHTML("beforeend", `
        <section class="toast greenToast absolute">
            <p>${message}</p>
        </section>
        `)
    }


    let toast = document.querySelector(".toast")
    setTimeout(()=> {
        toast.remove()
    }, 4000)
}