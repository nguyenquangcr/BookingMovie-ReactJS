import React, { useEffect } from 'react';
import './App.scss';
import { useDispatch } from "react-redux";
import Home from './Screen/Home';
import SignupScreen from './Screen/Signup';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header';
import SigninScreen from './Screen/Signin';
import Booking from './Screen/Booking';
import SlickHeader from './components/slider';
import Detail from './Screen/Detail';




function App() {
  const credentialStr = localStorage.getItem("credentials");
  const dispatch = useDispatch();
  const _getCredentialFromLocal = () => {
    if (credentialStr) {
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
      <Switch>
        <Route path='/dangky'  component={SignupScreen} />
        <Route path='/dangnhap'  component={SigninScreen} />
        <Route path='/' exact={true} component={Home}>
        </Route>
        <Route path="/booking/:maLichChieu">
          <Booking />
        </Route>
        <Route path="/detail/:maPhim">
          <Detail />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;


