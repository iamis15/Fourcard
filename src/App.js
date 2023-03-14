import React from "react";
import Calculator from "./images/icon-calculator.svg";
import Karma from "./images/icon-karma.svg";
import Supervisor from "./images/icon-supervisor.svg";
import TeamBuilder from "./images/icon-team-builder.svg";

export default function App() {
  return (
    <main className="main">
      <section className="header">
        <h1>Reliable, efficient delivery</h1>
        <h1>Powered by Technology</h1>
        <p>Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful</p>
      </section>
      <section className="grid">
        <section className="item top">
          <h1>Team Builder</h1>
          <p>Scans our talent network to create the optimal team for your project</p>
          <img src={TeamBuilder} alt="team-builder-img" />
        </section>
        <section className="item left">
          <h1>Supervisor</h1>
          <p>Monitors activity to identify project roadblocks</p>
          <img src={Supervisor} alt="supervisor-img" />
        </section>
        <section className="item right">
          <h1>Calculator</h1>
          <p>
            Uses data from past projects to provide better delivery estimates
          </p>
          <img src={Calculator} alt="calculator-img" />
        </section>
        <section className="item bottom">
          <h1>Karma</h1>
          <p>Regularly evaluates our talent to ensure quality</p>
          <img src={Karma} alt="karma-img" />
        </section>
      </section>
    </main>
  );
}
