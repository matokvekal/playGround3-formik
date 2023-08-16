import React, { useState } from "react";
import "./App.scss";

import Main from "./Main/Main.js";
import MainFormikValidayion from "./Main/MainFormikValidayion.js";
import MainFormik from "./Main/MainFormik.js";
import MainFormikYup from "./Main/MainFormikYup.js";


function App() {
  return (
    <div className="App">


        <div className="content">
          {/* <Main /> */}
          {/* <MainFormik /> */}
          {/* <MainFormikValidayion /> */}
          <MainFormikYup />
        </div>
    </div>
  );
}

export default App;
