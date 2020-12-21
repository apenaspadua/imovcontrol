import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar";

import SectionAbout from "./sections/about";
import SectionProfile from "./sections/profile";
import SectionAdvice from "./sections/advice"
import SectionContactUs from "./sections/contact-us";
import SectionFooter from "./sections/footer";

import dummyText from "./DummyText";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <SectionAbout
          title="Section 1"
          subtitle={dummyText}
          id="section1"
        />
       <SectionProfile
          title="Section 2"
          subtitle={dummyText}
          dark={false}
          id="section2"
        />
        <SectionAdvice
          title="Section 3"
          subtitle={dummyText}
          dark={true}
          id="section3"
        />
        <SectionContactUs
          title="Section 4"
          subtitle={dummyText}
          dark={false}
          id="section4"
        />
        <SectionFooter
          title="Section 5"
          subtitle={dummyText}
          dark={true}
          id="section5"
        /> 
      </div>
    );
  }
}

export default App;
