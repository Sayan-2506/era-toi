import { React, useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "./index";
import "./App.css";
import { Front } from "./components";
import Info from "./components/Info";
import Program from "./components/Program";
import DresCode from "./components/DresCode";
import Countdown from "./components/countdown/Countdown";
import Form from "./components/Form";
import PartyImage from "./components/PartyImage";
import CountDown from "./components/countdown/Countdown";

function App() {
  const { store } = useContext(Context);

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      store.checkAuth();
    }
  }, []);

  return (
    <div className="App">
      <Front />
      <Info />
      <Program />
      <DresCode />
      <CountDown />
      <Form />
      <PartyImage />
    </div>
  );
}

export default observer(App);
