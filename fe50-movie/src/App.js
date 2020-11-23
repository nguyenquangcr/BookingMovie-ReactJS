import React, { useEffect } from 'react';
import './App.css';
import { useDispatch } from "react-redux";
import Home from './Screen/Home';
import SignupScreen from './Screen/Signup';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header';
import SigninScreen from './Screen/Signin';


function App() {
  const credentialStr = localStorage.getItem("credentials");
  const dispatch = useDispatch();
  const _getCredentialFromLocal = () =>{
    if(credentialStr){
      dispatch(
          {
            type: "FETCH_CREDENTIAL",
            payload: JSON.parse(credentialStr),
          }
        )
      }
  }

  useEffect(() => {
    _getCredentialFromLocal()
  }, [])

  return (
    <BrowserRouter>
    <div className='header'>
    <Header />
    </div>
      <Switch>
        <Route path='/dangky' exact component={SignupScreen} />
        <Route path='/dangnhap' exact component={SigninScreen} />
        <Route path='/' exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
