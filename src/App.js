/* eslint-disable jsx-a11y/anchor-is-valid */
import "./App.css";
import React, {useState} from "react"
import TopSection from "./TopSection"
import DnDLogo from "./images/dnd-logo.png"
import StatBox from "./StatBox"
import { nameByRace } from "fantasy-name-generator";
import Skills from "./Skills"

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
      <nav className="navbar mb-4 navfillwidth bg-secondary justify-content-center">
        <span className="navbar-brand mb-0 h1 " style={{ color: "#FFFFFF" }}>
          D&D Character Sheet 🧙
        </span>
      </nav>
      {/* TOP SECTION */}
      <div className="container-flex">
        <div className="row mb-4 gx-3" style={{ margin: "auto" }}>
          <div className="col-12 col-lg-2 bg-light border border-secondary rounded mr-1 ">
            <img src={DnDLogo} alt="dnd-logo" className="dndlogo" />

            <TopSection label="CHARACTER NAME" randomName={characterName} />
            <a href="#" class="link-danger" onClick={handleClick}>
              Randomize 🎲!
            </a>
          </div>
          <div class="col-sm-12 d-sm-block d-lg-none">&nbsp;</div>
          <div
            id="mainbox"
            className="col border border-secondary rounded bg-light"
          >
            <div className="row">
              <div class="form-group col text-center topsectiondropdown">
                <select class="form-control" id="class">
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
                <label for="class">CLASS</label>
              </div>
              <TopSection label="LEVEL" />
              <TopSection label="BACKGROUND" />
            </div>

            <div className="row ">
              <div class="form-group col text-center topsectiondropdown">
                <select class="form-control" id="race">
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
                <label for="race">RACE</label>
              </div>
              <TopSection label="ALIGNMENT" />
              <TopSection label="PLAYER NAME" />
            </div>
          </div>
        </div>
      </div>
      {/* MAIN SECTION */}
      <div className="container-flex">
        <div className="row " style={{ margin: "auto" }}>
          {/* LEFT SIDE */}
          <div className="col col-lg-2 col-sm-3 mr-1 border border-secondary rounded bg-secondary">
            <StatBox stats="STRENGTH" />
            <StatBox stats="DEXTERITY" />
            <StatBox stats="CONSTITUION" />
            <StatBox stats="INTELLIGENCE" />
            <StatBox stats="WISDOM" />
            <StatBox stats="CHARISMA" />
          </div>
          {/* MIDDLE SIDE */}
          <div className="col col-lg-2 col-sm-3 mr-md-1 bg-secondary rounded">
            <div className="container">
              <div className="row position-relative bg-light my-3 border rounded justify-content-center">
                <input
                  id="proficiency"
                  className="dndinputcircle form-control text-center p-0"
                  type="text"
                ></input>
                <div class="ml-3 d-sm-block d-lg-none">&nbsp;</div>
                <div className="">
                  <label for="proficiency" className="h6">
                    PROFICIENCY
                  </label>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row position-relative bg-light mb-3 border rounded justify-content-center">
                <input
                  id="INSPRIRATION"
                  className="dndinputbox form-control text-center p-0"
                  type="text"
                ></input>
                <div class="ml-3 d-sm-block d-lg-none">&nbsp;</div>
                <div className="">
                  <label for="INSPIRATION" className="h6">
                    INSPIRATION
                  </label>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="row position-relative bg-light border rounded justify-content-center">
                <input
                  id="PASSIVEWISDOM"
                  className=" dndinputbox form-control text-center p-0"
                  type="text"
                ></input>
                <div class="ml-3 d-sm-block d-lg-none">&nbsp;</div>
                <div className="">
                  <label for="PASSIVEWISDOM" className="h6">
                    P-PERCEPTION
                  </label>
                </div>
              </div>
            </div>
            <div className="container-flex">
              <div
                id="SAVINGTHROWS"
                className="row-12 bg-light my-3 border rounded pb-2"
              >
                <label for="SAVINGTHROWS" className="h6">
                  SAVING THROWS
                </label>
                <Skills skills="STRENGTH" />
                <Skills skills="DEXTERITY" />
                <Skills skills="CONSTITUTION" />
                <Skills skills="INTELLIGENCE" />
                <Skills skills="WISDOM" />
                <Skills skills="CHARISMA" />
              </div>
            </div>
            <div className="container-flex">
              <div
                id="SKILLS"
                className="row-12 bg-light my-3 border rounded pb-2"
              >
                <label for="SKILLS" className="h6">
                  SKILLS
                </label>
                <Skills skills="Acrobatics (Dex)" />
                <Skills skills="Animal Handling (Wis)" />
                <Skills skills="Arcana (Int)" />
                <Skills skills="Athletics (Str)" />
                <Skills skills="Deception (Cha)" />
                <Skills skills="History (Int)" />
                <Skills skills="Insight (Wis)" />
                <Skills skills="Intimidation (Cha)" />
                <Skills skills="Investigation (Int)" />
                <Skills skills="Medicine (Wis)" />
                <Skills skills="Nature (Int)" />
                <Skills skills="Perception (Wis)" />
                <Skills skills="Performance (Cha)" />
                <Skills skills="Persuasion (Cha)" />
                <Skills skills="Religion (Int)" />
                <Skills skills="Sleight of Hand (Dex)" />
                <Skills skills="Stealth (Dex)" />
                <Skills skills="Survival (Wis)" />
              </div>
            </div>
          </div>
          <div class="col-sm-12 d-sm-block d-lg-none">&nbsp;</div>
          {/* RIGHT SIDE */}
          <div className="col-lg-3 col-sm-3 mr-md-1 bg-secondary rounded p-0">
            <div className="row mx-3 justify-content-around">
              <div className="my-2 bg-light border armorclass">
                <input
                  id="ARMORCLASS"
                  className=" form-control text-center p-0"
                  type="text"
                ></input>
                <label for="ARMORCLASS" className="h6">
                  ARMOR CLASS
                </label>
              </div>
              <div className="my-2 bg-light border initspeed">
                <input
                  id="INITIATIVE"
                  className=" form-control text-center p-0"
                  type="text"
                ></input>
                <p className="mb-2">🏹</p>
                <label for="INITIATIVE" className="h6">
                  INITIATIVE
                </label>
              </div>
              <div className="my-2 bg-light border initspeed">
                <input
                  id="SPEED"
                  className=" form-control text-center p-0"
                  type="text"
                ></input>
                <p className="mb-2">🏃</p>
                <label for="SPEED" className="h6">
                  SPEED
                </label>
              </div>
            </div>
            <div className="container-fluid">
              <div className="col-12 bg-light my-3 border rounded pb-2">
                <div className="row justify-content-around">
                  <div className="my-2 bg-light border initspeed">
                    <input
                      id="HP"
                      className=" form-control text-center p-0"
                      type="text"
                    ></input>
                    <p className="mb-2">❤️🤍🤍</p>
                    <label for="HP" className="h6">
                      HP
                    </label>
                  </div>
<div className="divider align-self-center"></div>
                  <div className="my-2 bg-light border initspeed">
                    <input
                      id="HP"
                      className=" form-control text-center p-0"
                      type="text"
                    ></input>
                    <p className="mb-2">❤️❤️❤️</p>
                    <label for="HP" className="h6">
                      MAX HP
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-12 d-sm-block d-lg-none">&nbsp;</div>
          {/* NOTES SECTION */}
          <div className="col bg-secondary rounded">
            <form>
              <div className="form-group mt-1 ">
                <label className="h6 text-white " for="NOTES">
                  📚 NOTES
                </label>
                <textarea
                  class="form-control notes my-1 h-25"
                  id="NOTES"
                  rows="25"
                ></textarea>
              </div>
            </form>
          </div>
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
