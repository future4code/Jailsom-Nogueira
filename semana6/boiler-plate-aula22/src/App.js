import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 300px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`
const CadaTarefa = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  background-color: gainsboro;
  > button{
      z-index: 1;
      font-size: inherit;
      font-family: inherit;
      color: white;
      padding: 0.4em;
      outline: none;
      border: none;
      background-color: hsl(236, 32%, 26%);
      margin-left: 5px;
  }
  > button:hover {
      cursor: pointer;
      animation: jelly 0.5s;
  }
  @keyframes jelly {
  0%,
  100% {
    transform: scale(1, 1);
  }
  25% {
    transform: scale(0.9, 1.1);
  }
  50% {
    transform: scale(1.1, 0.9);
  }
  75% {
    transform: scale(0.95, 1.05);
  }
}
`

class App extends React.Component {
    state = {
      tarefas: [],
      inputValue: '',
      filter: ''
    }

  componentDidUpdate() {
    const novaTarefa = {
      id: this.state.id,
      texto: this.state.inputValue,
      completa: this.state.completa
    };
    const guardaTarefa = [...this.state.tarefas, novaTarefa]
    localStorage.setItem("guardaTarefa", JSON.stringify(guardaTarefa));
  };

  componentDidMount() {
    const tarefaString = localStorage.getItem("guardaTarefa");
    const tarefaObjeto = JSON.parse(tarefaString);
    console.log(tarefaObjeto);
  };

  onChangeInput = e => {
    this.setState({ inputValue: e.target.value });
  };

  criaTarefa = () => {
    const novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false
    };
    const listaDeTarefas = [...this.state.tarefas, novaTarefa]
    this.setState({tarefas: listaDeTarefas})
  }

  selectTarefa = (id) => {
    const novaTarefa = this.state.tarefas.map((cadaTarefa) =>{//passa pelo array de tarefas, copiando para novaTarefa
      if(id === cadaTarefa.id){ //se o id clicado é o mesmo que o itinerado 
        const novaTarefa = {...cadaTarefa, completa: !cadaTarefa.completa}
        return novaTarefa
      } else {
        return cadaTarefa
      }
    })
    this.setState({tarefas: novaTarefa}) //devolve a lista completa já com as alterações para o array de tarefas
  }

  apagarTarefa = (id) => {
    const novaListaTarefa = this.state.tarefas.filter((cadaTarefa) => {
      return id !== cadaTarefa.id
    })
    
    this.setState({tarefas: novaListaTarefa})
  }

  apagarTodas = () => {
    const listaDeTarefas = []
    this.setState({tarefas: listaDeTarefas})
  }

  onChangeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  render() {
    const listaFiltrada = this.state.tarefas
      .filter(tarefa => {
        switch (this.state.filter) {
          case 'pendentes':
            return !tarefa.completa
          case 'completas':
            return tarefa.completa
          default:
            return true
        }
      })
      // console.log(this.state.tarefas)
    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
          
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <CadaTarefa>
                <Tarefa
                  completa={tarefa.completa}
                  onClick={() => this.selectTarefa(tarefa.id)}
                >
                  {tarefa.texto}
                </Tarefa>
                <button onClick={() => this.apagarTarefa(tarefa.id)}>Apagar</button>
                <button onClick={this.apagarTodas}>Limpar</button>
              </CadaTarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
