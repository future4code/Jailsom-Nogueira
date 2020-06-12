    function cadastrarDespesa() {
        const elementoDespesa = document.getElementById('despesa').value; //elemento todo
        const elementoTipo = document.getElementById('tipo').value;
        const elementoDescricao = document.getElementById('descricao').value;

        if ((elementoDespesa === "") || (elementoTipo === "default") || (elementoDescricao === "")) {
            alert("Todos os campos devem ser preenchidos!") //em caso de um campo vazio
        } else {
            const umaDespesa = { //objeto com UMA despesa 
                valor: Number(elementoDespesa),
                tipo: elementoTipo,
                descricao: elementoDescricao
            }

            minhasDespesas.push(umaDespesa) //cada despesa é colocada aqui

            document.getElementById("despesa").innerHTML = despesa.value = '' //limpa os valores dos campos
            document.getElementById("descricao").innerHTML = descricao.value = ''

            document.getElementById("mostra-despesas").innerHTML = ``;

            valorTotal += umaDespesa.valor
            document.getElementById("extrato").innerHTML = ``;
            document.getElementById("extrato").innerHTML = `<p>${valorTotal}</p>`;

            minhasDespesas.forEach(element => {
                document.getElementById("mostra-despesas").innerHTML += `<div class="uma-despesa"><p>${element.valor}</p>
                <p>${element.tipo}</p><p>${element.descricao}</p></div>`;
            });
        }
    }

    let valorTotal = 0
    let minhasDespesas = [] //todas as despesas estão aqui

    function filtrar() {
        document.getElementById("despesas-filtradas").innerHTML = ``;

        const elementoFiltro = document.getElementById('tipoFiltro').value; //elemento todo
        const elementoValorMinimo = document.getElementById('valorMinimo').value;
        const elementoValorMaximo = document.getElementById('valorMaximo').value;

        let numeroValorMinimo = 0
        let numeroValorMaximo = 0

        if ((elementoValorMinimo !== "") && (elementoValorMaximo !== "")) {
            numeroValorMinimo = Number(elementoValorMinimo)
            numeroValorMaximo = Number(elementoValorMaximo)
        }

        if ((elementoFiltro === "default") || (elementoValorMinimo === "") || (elementoValorMaximo === "")) {
            alert("Todos os filtros devem ser escolhidos!") //em caso de um campo vazio
        } else {
            minhasDespesas.forEach(element => {
                if ((elementoFiltro === element.tipo) && (numeroValorMinimo <= element.valor) && (numeroValorMaximo >= element.valor)) {
                    document.getElementById("despesas-filtradas").innerHTML += `<div class="uma-despesa"><p>${element.valor}</p>
                    <p>${element.tipo}</p><p>${element.descricao}</p></div>`;
                } else {
                    document.getElementById("despesas-filtradas").innerHTML = ``;
                }
            });
        }
    }

    function limparFiltros() {
        document.getElementById("valorMinimo").innerHTML = valorMinimo.value = '' //limpa os valores dos campos
        document.getElementById("valorMaximo").innerHTML = valorMaximo.value = ''
        document.getElementById("despesas-filtradas").innerHTML = ``;
    }