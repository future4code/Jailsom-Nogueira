    function cadastrarDespesa() {
        const elementoDespesa = parseInt(document.getElementById('despesa').value); //elemento todo
        const elementoTipo = document.getElementById('tipo').value;
        const elementoDescricao = document.getElementById('descricao').value;

        if ((elementoDespesa === "") || (elementoTipo === "default") || (elementoDescricao === "")) {
            alert("Todos os campos devem ser preenchidos!") //em caso de um campo vazio
        } else {
            const umaDespesa = { //objeto com UMA despesa 
                valor: elementoDespesa,
                tipo: elementoTipo,
                descricao: elementoDescricao
            }

            minhasDespesas.push(umaDespesa) //cada despesa é colocada aqui

            document.getElementById("despesa").innerHTML = despesa.value = '' //limpa os valores dos campos
            document.getElementById("descricao").innerHTML = descricao.value = ''

            document.getElementById("mostra-despesas").innerHTML = ``;

            minhasDespesas.forEach(element => {
                document.getElementById("mostra-despesas").innerHTML += `<div class="uma-despesa"><p>${element.valor}</p>
                <p>${element.tipo}</p><p>${element.descricao}</p></div>`;
            });
        }
    }

    let minhasDespesas = [] //todas as despesas estão aqui

    function filtrar() {
        const elementoFiltro = document.getElementById('tipoFiltro').value; //elemento todo
        const elementoValorMinimo = parseInt(document.getElementById('valorMinimo').value);
        const elementoValorMaximo = parseInt(document.getElementById('valorMaximo').value);

        document.getElementById("valorMinimo").innerHTML = valorMinimo.value = '' //limpa os valores dos campos
        document.getElementById("valorMaximo").innerHTML = valorMaximo.value = ''

        if ((elementoFiltro === "default") || (elementoValorMinimo === "") || (elementoValorMaximo === "")) {
            alert("Todos os filtros devem ser escolhidos!") //em caso de um campo vazio
        } else {
            minhasDespesas.forEach(element => {
                if ((elementoFiltro === element.tipo) && (elementoValorMinimo <= element.valor) && (elementoValorMaximo >= element.valor)) {
                    document.getElementById("despesas-filtradas").innerHTML = ``;
                    document.getElementById("despesas-filtradas").innerHTML += `<div class="uma-despesa"><p>${element.valor}</p>
                    <p>${element.tipo}</p><p>${element.descricao}</p></div>`;
                } else {
                    document.getElementById("despesas-filtradas").innerHTML = ``;
                }
            });
        }

    }