import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Headers from "./components/Headers";
import MeanMenu from "./components/MeanMenu";
import ApplyLeave from "./screens/ApplyLeave";
import Employee from "./screens/Employee";
import LoginForm from "./screens/LoginForm";
import Main from "./screens/Main";
function App() {
  
  return (
    <BrowserRouter>
      <Route path="/" component={LoginForm} exact></Route>

      <div className="custemgrid-container">
        <Headers />
        <MeanMenu/>
        <main>
          <Route path="/dashboard" component={Main} exact></Route>
          <Route path="/employees" component={Employee} exact></Route>
          <Route path="/applyleave" component={ApplyLeave} exact></Route>
        </main>
        <footer className="custemrow custemcenter">All right reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
