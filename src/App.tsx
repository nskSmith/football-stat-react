import "./App.css";
import "./index.css";
import DataTable from "./components/DataTable/DataTable";
import SetTeamId from "./components/SetTeamId/SetTeamId";
import Tabs from "./components/Tabs/Tabs";
import {Route, Routes, BrowserRouter as Router, Navigate } from "react-router-dom";
import TeamStatsTable from "./components/TeamStatsTable/TeamStatsTable";
import PlayerStatsTable from "./components/PlayerStatsTable/PlayerStatsTable";
import SetPlayerId from "./components/SetPlayerId/SetPlayerId";

function App() {
  return (
    <Router>
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
      <nav className="App-tabs">
        <Tabs />
      </nav>
      <div className="App-set-team">
        <Routes>
          <Route path= '/player-stats' element={<SetPlayerId/>}></Route>
          <Route path= '/team-stats' element={<SetTeamId/>}></Route>
          <Route path= '/team-squad' element={<SetTeamId/>}></Route>
        </Routes>
      </div>
      <main className="App-data-table">
        <Routes>
          <Route path = '/player-stats' element={<PlayerStatsTable/>}></Route>
          <Route path = '/team-stats' element={<TeamStatsTable/>}></Route>
          <Route path = '/team-squad' element={<DataTable/>}></Route>
          <Route path = '*' element={<Navigate to="/team-squad" />}/>
        </Routes>
      </main>
    </div>
    </Router>
  );
}

export default App;
