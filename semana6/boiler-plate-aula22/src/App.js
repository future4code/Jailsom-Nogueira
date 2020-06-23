import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
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
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
