import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import "@fontsource/cairo";
// import About from "./components/About/about";
import What from "./components/What";
// import Form from "./components/Form/form";
class App extends Component {
  state = {};
  render() {
    return (
      <div>
        {/* <Form /> */}
        <What />
        {/* <About /> */}
      </div>
    );
  }
}

export default App;
