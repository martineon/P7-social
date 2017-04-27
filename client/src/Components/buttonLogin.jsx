import React, {Component} from 'react';
import styled, {keyframes} from 'styled-components';

const animConnectForm = keyframes`
  0%{
    opacity: 0;
  }100%{
    opacity: 1;
  }
`;
const animEmail = keyframes`
  0%{
    height:0%;
    width: 0%;
    font-size: 0;
    opacity: 0;
  }50%{
    width: 200px;
    height: 40px;
    font-size: 25px;
    opacity: 0;
  }
`;

const ButtonLogin = styled.button`
  width: 150px;
  height: 40px;
  background-color: transparent;
  border: 2px solid ${props => props.Color};;
  border-radius: 5px;
  color: ${props => props.Color};;
  font-size: 15px;
  display: flex;
  justify-content: center;
  outline: none;
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
  background-color: rgba(117, 117, 117, 0.34);
  display: ${props => props.isClicked? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  flex-direction: column;
  animation: ${animConnectForm} 2s ease 1;
  z-index: 1000;
`;

const ConnectInput = styled.input`
  width: 200px;
  height: 40px;
  border-radius: 5px;
  background-color: transparent;
  border: 2px solid ${props => props.Color};
  color: ${props => props.Color};
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 5px;
  font-size: 25px;
  ${''/* animation: ${animEmail} 2s ease; */}
`;
const CloseIcon = styled.a`
  text-decoration: none;
  color: #fff;
  font-size: 70px;
  position: absolute;
  cursor: pointer;
  font-weight: light;
  font-family: helvetica neue;
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
`;
const SwitchLogSign = styled.a`
  color: ${props => props.Color};
  font-size: 20px;
  font-weight: light;
  cursor: pointer;
`;

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoginClicked : false,
      Color: '#009688',
      wantLogIn: true
    }
  }

  switchLogSign = () => {
    if(this.state.wantLogIn === true){
      return this.setState({wantLogIn: false});
    }else {
      return this.setState({wantLogIn: true});
    }
  }

  render(){
    return(
      <div>
        <ButtonLogin href="#" Color={this.state.Color} onClick={() => this.setState({isLoginClicked: true})}>
          Log In / Sign In
        </ButtonLogin>
        <ConnectWrapper isClicked={this.state.isLoginClicked}>
          <CloseIcon onClick={() => this.setState({isLoginClicked: false})} >x</CloseIcon>
          <ConnectTitle Color={this.state.Color}>
            {this.state.wantLogIn? 'Log In' : 'Sign In'}
          </ConnectTitle>
          <ConnectForm action={this.state.wantLogIn? '/signin' : '/signup'} method='post' >

            <ConnectInput name='username' placeholder='Username' Color='#fff'/>

            {this.state.wantLogIn? '' : <ConnectInput name='email' placeholder='Email' Color='#fff'/>}

            <ConnectInput name='password' placeholder='Password' type='password' Color='#fff'/>

            <ButtonLogin Color='#fff' type="submit">Connect</ButtonLogin>

            <SwitchLogSign onClick={this.switchLogSign} Color='#fff'>
              {this.state.wantLogIn? 'Want to Sign In?' : 'Already User?'}
            </SwitchLogSign>
          </ConnectForm>
        </ConnectWrapper>
      </div>
    );
  }
}
export default Login;
