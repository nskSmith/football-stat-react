import "./App.css";
import "./index.css";
import { useContext } from "react";
import DataTable from "./components/DataTable/DataTable";
import SetTeamId from "./components/SetTeamId/SetTeamId";
import Tabs from "./components/Tabs/Tabs";
import { Route, Routes, BrowserRouter as Router, Navigate } from "react-router-dom";
import TeamStatsTable from "./components/TeamStatsTable/TeamStatsTable";
import PlayerStatsTable from "./components/PlayerStatsTable/PlayerStatsTable";
import SetPlayerId from "./components/SetPlayerId/SetPlayerId";
import { ThemeContext, LocaleContext } from './context';


function App() {
  const theme = useContext(ThemeContext);
  const locale = useContext(LocaleContext);

  return (
        <Router>
        <div className={theme}>
          <header className="App-header">
            <p className="App-header-info">
              This app uses football statistics from
              <a
                className="App-link"
                href="https://www.sportmonks.com/football-api/"
                target="_blank"
                rel="noopener noreferrer"
              >
                SPORTMONKS.COM
              </a>
            </p>
            <p className="App-theme-switch">
              <label className="switch">
                <input type="checkbox"/>
                <span className="slider round"></span>
              </label>
            </p>
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
        <div>{locale}</div>
        </Router>
        
  );
}

export default App;
