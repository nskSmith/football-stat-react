import "./App.css";
import "./index.css";
import DataTable from "./components/DataTable/DataTable";
import SetTeamId from "./components/SetTeamId/SetTeamId";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>This app uses football statistics from</p>
        <a
          className="App-link"
          href="https://www.sportmonks.com/football-api/"
          target="_blank"
          rel="noopener noreferrer"
        >
          SPORTMONKS.COM
        </a>
      </header>
      <div className="App-set-team">
        <SetTeamId />
      </div>
      <main className="App-data-table">
        <DataTable />
      </main>
    </div>
  );
}

export default App;
