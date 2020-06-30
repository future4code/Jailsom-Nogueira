import React from 'react';
import styled from 'styled-components';
import Users from "./components/Users";
import NewUser from "./components/NewUser";

const AppContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
padding: 8px;
`;

class App extends React.Component {
  state = {
    page: false,
  };

  handleClickPage = () => {
    this.setState({ page: !this.state.page });
  };

  render() {
    const renderiza = () => {
      if (this.state.page) {
        return (
          <Users handleClickPage={this.handleClickPage} />
        );
      } else {
        return <NewUser handleClickPage={this.handleClickPage} />;
      }
    };

    return <AppContainer>{renderiza()}</AppContainer>;
  }
}

export default App;

