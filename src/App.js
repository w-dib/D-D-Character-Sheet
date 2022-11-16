import "./App.css";
import TopSection from "./TopSection"
import DnDLogo from "./images/dnd-logo.png"

<BrowserRouter basename={window.location.pathname || ''}>
  <Route exact path="/" component={Index} />
</BrowserRouter>

function App() {
  return (
    <div className="App">
      {/* TOP SECTION */}
      <div className="container-flex">
        <div className="row mb-4">
          <div className="col border border-danger rounded mr-3 align-self-center">
            <img src={DnDLogo} alt="dnd-logo" className="dndlogo" />
            <TopSection label="CHARACTER NAME" />
          </div>

          <div className="col-9 border border-danger rounded">
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

            <div className="row">
            <div class="form-group col text-center topsectiondropdown">
                <select class="form-control" id="exampleFormControlSelect1">
                  <option>Elf</option>
                  <option>Human</option>
                  <option>Half-elf</option>
                  <option>Gnome</option>
                  <option>Dwarf</option>
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
      <div className="row">
        <div className="col-md-4">1</div>
        <div className="col-md-4">2</div>
        <div className="col-md-4">3</div>
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
