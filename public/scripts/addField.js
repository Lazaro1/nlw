//Procurar o botao 
document.querySelector("#add-time")
//Quando clicar no botao
.addEventListener('click', cloneField)

//Executar uma ação
function cloneField () {
    // Duplicar os campos. Que Campo?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true);

    //Pegar os campos, que campos?
    const fields = newFieldContainer.querySelectorAll('input')

    //Para cada campo, limpar
    fields.forEach(function(field) {
        // pega o field do momento e limpa ele
        field.value = ""
    })

    //Colocar na página: onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer);
}

