import React, {Component} from 'react';
import styled from 'styled-components';

const ButtonLogin = styled.a`
  width: 150px;
  height: 40px;
  background-color: transparent;
  border: 2px solid rgb(86, 215, 142);
  border-radius: 10px;
  color: rgb(86, 215, 142);
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
` ;
const ConnectWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: rgba(89, 89, 89, 0.33);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const ConnectInput = styled.input`
  width: 200px;
  height: 40px;
  border-radius: 5px;
  border: 2px solid ${props => props.inputColor};
  color: ${props => props.inputColor};
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 5px;
  font-size: 25px;
`;
const ConnectTitle = styled.h1`
  font-size: 80px;
  color: white;
  font-weight: 300
`

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoginClicked : false,
      inputColor: 'rgb(86, 215, 142)'
    }
  }
  render(){
    return(
      <div>
        {/* <ButtonLogin href="#" onClick={}> Log In / Sign In </ButtonLogin> */}
        <ConnectWrapper>
          <ConnectTitle inputColor={this.state.inputColor}>Log In</ConnectTitle>
          <form onSubmit="/login">
            <ConnectInput inputColor={this.state.inputColor}/>
            <ConnectInput type='password' inputColor={this.state.inputColor}/>
          </form>

        </ConnectWrapper>
      </div>
    );
  }
}
export default Login;
