import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar";

import SectionAbout from "./sections/about";
import SectionProfile from "./sections/profile";
import SectionAdvice from "./sections/advice"
import SectionContactUs from "./sections/contact-us";
import SectionFooter from "./sections/footer";
import SectionCarrosel from "./sections/carrosel";

import dummyText from "./DummyText";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <SectionAbout
          title="Section 1"
          subtitle={dummyText}
          dark={true}
          id="section1"
        />
        <SectionCarrosel
          title="Section 2"
          subtitle={dummyText}
          dark={true}
          id="carrosel"
        />
       <SectionProfile
          title="Section 3"
          subtitle={dummyText}
          dark={true}
          id="profile"
        />
        <SectionAdvice
          title="Section 3"
          subtitle={dummyText}
          dark={true}
          id="advice"
        />
        <SectionContactUs
          title="Section 4"
          subtitle={dummyText}
          dark={true}
          id="contactUs"
        />
        <SectionFooter
          title="Section 5"
          subtitle={dummyText}
          dark={true}
          id="footer"
        /> 
      </div>
    );
  }
}

export default App;
