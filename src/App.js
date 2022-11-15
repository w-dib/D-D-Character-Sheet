import "./App.css";
import TopSection from "./TopSection"
import DnDLogo from "./images/dnd-logo.png"

function App() {
  return (
    <div className="App">
      {/* TOP SECTION */}
      <div className="container">
        <div className="row mb-1">
          <div className="col border border-primary rounded mr-3 align-self-center">
            <img src={DnDLogo} alt="dnd-logo" className="dndlogo"/>
            <TopSection label="CHARACTER NAME"/>
          </div>

          <div className="col-9 border border-primary rounded">
            <div className="row">
              <TopSection label="CLASS"/>
              <TopSection label="LEVEL"/>
              <TopSection label="BACKGROUND"/>
            </div>

            <div className="row">
              <TopSection label="RACE"/>
              <TopSection label="ALIGNMENT"/>
              <TopSection label="PLAYER NAME"/>
            </div>
          </div>
        </div>
      </div>
      <footer class="my-4 border-top">
    <span class="mb-3 mb-md-0 text-muted footertext">Walid Dib</span>
  </footer>
    </div>
  );
}

export default App;
