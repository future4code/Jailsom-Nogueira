function criarTarefa() {
    const meuInput = document.getElementById("novaTarefaTexto") //coleta a tarefa e guarda na variável
    const diaDaSemana = document.getElementById("diaDaSemana") //coleta o dia da semana e guarda na variável
    const tarefa = meuInput.value //guardo o valor em uma variável
    const dia = diaDaSemana.value //guardo o valor em uma variável
    if (tarefa === "") {
        alert('O campo "Nova tarefa" não pode ser vazio')
    } else {
        switch (dia) {
            case "segunda":
                // segunda.innerHTML += `<li> ${tarefa} </li>` //para referência futura
                document.getElementById("segunda").firstElementChild.innerHTML += `<li> ${tarefa} </li>`;
                break;
            case "terca":
                document.getElementById("terca").firstElementChild.innerHTML += `<li> ${tarefa} </li>`;
                break;
            case "quarta":
                document.getElementById("quarta").firstElementChild.innerHTML += `<li> ${tarefa} </li>`;
                break;
            case "quinta":
                document.getElementById("quinta").firstElementChild.innerHTML += `<li> ${tarefa} </li>`;
                break;
            case "sexta":
                document.getElementById("sexta").firstElementChild.innerHTML += `<li> ${tarefa} </li>`;
                break;
            case "sabado":
                document.getElementById("sabado").firstElementChild.innerHTML += `<li> ${tarefa} </li>`;
                break;
            case "domingo":
                document.getElementById("domingo").firstElementChild.innerHTML += `<li> ${tarefa} </li>`;
                break;
        }
        meuInput.value = ""
    }
}