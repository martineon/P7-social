import React, {Component} from 'react';
import styled, {keyframes} from 'styled-components';

const animConnectForm = keyframes`
  0%{
    opacity: 0;
  }100%{
    opacity: 1;
  }
`;

const ButtonLogin = styled.button`
  width: 150px;
  height: 40px;
  background-color: transparent;
  border: 2px solid ${props => props.inputColor};;
  border-radius: 10px;
  color: ${props => props.inputColor};;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
` ;
const ConnectWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left:0;
  position: fixed;
  background-color: rgba(89, 89, 89, 0.33);
  display: ${props => props.isClicked? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  flex-direction: column;
  animation: ${animConnectForm} 2s ease 1;
`;
const ConnectInput = styled.input`
  width: 200px;
  height: 40px;
  border-radius: 5px;
  background-color: transparent;
  border: 2px solid ${props => props.inputColor};
  color: ${props => props.inputColor};
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 5px;
  font-size: 25px;
`;
const CloseIcon = styled.a`
  text-decoration: none;
  color: #fff;
  font-size: 70px;
  position: absolute;
  cursor: pointer;
  top: -10px;
  right: 10px;
`;
const ConnectTitle = styled.h1`
  font-size: 80px;
  color: white;
  font-weight: 300
`;
const ConnectForm = styled.form`
  width: auto;
  height: 250px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
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
        <ButtonLogin href="#" inputColor={this.state.inputColor} onClick={() => this.setState({isLoginClicked: true})}>
          Log In / Sign In
        </ButtonLogin>
        <ConnectWrapper isClicked={this.state.isLoginClicked}>
          <CloseIcon onClick={() => this.setState({isLoginClicked: false})} >x</CloseIcon>
          <ConnectTitle inputColor={this.state.inputColor}>Log In</ConnectTitle>
          <ConnectForm action='/login' method='post' >
            <ConnectInput name='username' placeholder='UserName' inputColor='#fff '/>
            <ConnectInput name='password' placeholder='PassWord' type='password' inputColor='#fff'/>
            <ButtonLogin inputColor='#fff' type="submit">Connect</ButtonLogin>
          </ConnectForm>
        </ConnectWrapper>
      </div>
    );
  }
}
export default Login;
