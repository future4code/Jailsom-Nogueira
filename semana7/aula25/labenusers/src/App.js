import React from 'react';
import styled from 'styled-components';
import Users from "./components/Users";
import NewUser from "./components/NewUser";
import UserDetails from "./components/UserDetails";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 8px;
`;

const HeaderApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 10%;
  margin: 0 auto;
  margin-bottom: 32px;
`;

class App extends React.Component {
  state = {
    page: "NewUser",
    userId: '',
  };

  handleClickPage = (a,b) => {
    this.setState({ userId: b });
    if(a ===  "UserDetails"){
        this.setState({ page: "UserDetails"});
    }else {
      const click = this.state.page;
      switch (click) {
      case 'Users' :
        this.setState({ page: "NewUser"});
        break;  
      case 'UserDetails' :
        this.setState({ page: "NewUser"});
      break;   
      default:
        this.setState({ page: "Users" });
    }
  }
  };

  render() {
    
    let renderiza = "";
    switch (this.state.page) {
    case 'Users':
      renderiza = 
      <div>
        <HeaderApp>
          <button onClick={this.handleClickPage}>Ir para cadastro</button>
        </HeaderApp>      
        <Users handleClickPage={this.handleClickPage}/>
      </div>
      break;
    case 'UserDetails':
      renderiza = 
      <div>
        <HeaderApp>
          <button onClick={this.handleClickPage}>Ir para cadastro</button>
        </HeaderApp>
        <UserDetails userId={this.state.userId}/>
      </div>  
      break;
    default:
      renderiza = 
      <div>
        <HeaderApp>
          <button onClick={this.handleClickPage}>Ir para a lista</button>
        </HeaderApp>
        <NewUser />
      </div>  
  }
    return (
      <AppContainer>
        {renderiza}
      </AppContainer>
    );
  }
}

export default App;

