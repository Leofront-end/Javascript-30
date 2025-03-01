const checkboxes = document.querySelectorAll('.inbox [type="checkbox"]')

let lastChecked

function handleCheck(e){
    // Ferificar se a tecla shift está prescionada
    // E se está sendo verificada (acionada)
    let inBetween = false
    if(e.shiftKey && this.checked) {
        // Percorrer cada verificação
        checkboxes.forEach(checkbox => {
            console.log(checkbox)
            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween
                console.log('Começando para checar entre eles! ')
            }

            if (inBetween ) {checkbox.checked = true}
        })
    }

    lastChecked = this
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck))