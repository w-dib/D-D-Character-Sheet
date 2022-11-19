/* eslint-disable jsx-a11y/anchor-is-valid */
import "./App.css";
import React, {useState} from "react"
import TopSection from "./TopSection"
import DnDLogo from "./images/dnd-logo.png"
import StatBox from "./StatBox"
import { nameByRace } from "fantasy-name-generator";
import SavingThrows from "./SavingThrows";

function App() {

  const [characterName, setCharacterName] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    const elfHero = nameByRace("elf", { gender: "male" });
    setCharacterName(elfHero);
  };
  return (
    <div className="App ">
      {/* NAVBAR */}
      <nav className="navbar mb-4 navfillwidth bg-danger">
        <span className="navbar-brand mb-0 h1" style={{ color: "#FFFFFF" }}>
          D&D Character Creator
        </span>
      </nav>
      {/* TOP SECTION */}
      <div className="container-flex">
        <div className="row mb-4 gx-3" style={{ margin: "auto" }}>
          <div className="col-12 col-lg-2 bg-light border border-danger rounded mr-3 ">
            <img src={DnDLogo} alt="dnd-logo" className="dndlogo" />

            <TopSection label="CHARACTER NAME" randomName={characterName} />
            <a href="#" class="link-danger" onClick={handleClick}>
              Randomize 🎲!
            </a>
          </div>
          <div class="col-sm-12 d-sm-block d-md-none mb-1">&nbsp;</div>
          <div className="col border border-danger rounded bg-light">
            <div className="row">
              <div class="form-group col text-center topsectiondropdown">
                <select class="form-control" id="exampleFormControlSelect1">
                  <option>Cleric</option>
                  <option>Monk</option>
                  <option>Ranger</option>
                  <option>Barbarian</option>
                  <option>Bard</option>
                  <option>Druid</option>
                  <option>Wizard</option>
                  <option>Sorcerer</option>
                  <option>Fighter</option>
                  <option>Paladin</option>
                  <option>Warlock</option>
                  <option>Rogue</option>
                </select>
                <label for="exampleFormControlSelect1">CLASS</label>
              </div>
              <TopSection label="LEVEL" />
              <TopSection label="BACKGROUND" />
            </div>

            <div className="row ">
              <div class="form-group col text-center topsectiondropdown">
                <select class="form-control" id="exampleFormControlSelect1">
                  <option>Elf</option>
                  <option>Human</option>
                  <option>Half-elf</option>
                  <option>Gnome</option>
                  <option>Dwarf</option>
                  <option>Dragonborn</option>
                  <option>Halfling</option>
                  <option>Tiefling</option>
                  <option>Half-Orc</option>
                </select>
                <label for="exampleFormControlSelect1">RACE</label>
              </div>
              <TopSection label="ALIGNMENT" />
              <TopSection label="PLAYER NAME" />
            </div>
          </div>
        </div>
      </div>
      {/* MAIN SECTION */}
      <div className="container-flex">
        <div className="row" style={{ margin: "auto" }}>
          {/* STATBOX */}
          <div className="col col-lg-2 col-sm-3 mr-3 border border-danger rounded bg-danger">
            <StatBox stats="STRENGTH" />
            <StatBox stats="DEXTERITY" />
            <StatBox stats="CONSTITUION" />
            <StatBox stats="INTELLIGENCE" />
            <StatBox stats="WISDOM" />
            <StatBox stats="CHARISMA" />
          </div>

          <div className="col col-lg-2 col-sm-3 bg-danger rounded">
            {/* INSPIRATION */}
            {/* <div className="d-flex justify-content-start">
              <input
                className="dndstatrow form-control text-center align-self-center"
                type="text"
              ></input>
              <div className="col bg-light text-center border border-danger rounded align-self-center">
                PROFICIENCY BONUS
              </div>
            </div> */}
            <div className="col">
              <input className="dndstatrow form-control text-center align-self-center" type="text"></input>
            </div>
            <div className="col bg-light text-center border border-danger rounded align-self-center">
              PROFICIENCY BONUS
            </div>

            <SavingThrows />
          </div>
          <div className="col-md-4">3</div>
        </div>
      </div>
      {/* FOOTER SECTION */}
      <footer class="my-4 border-top">
        <span class="mb-3 mb-md-0 text-muted footertext">
          Created by Walid Dib
        </span>
      </footer>
    </div>
  );
}

export default App;
