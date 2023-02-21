import './App.css';
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import ShotTracker from "./ShotTracker"
import BucketList from "./BucketList";
import People from "./People"
import Explore from "./Explore";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/list"
          element={<BucketList/>}/>
        <Route path="/people"
               element={<People/>}/>
        <Route index element={<Explore/>}/>
            <Route path="/shots"
                   element={<ShotTracker/>}>
            </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
