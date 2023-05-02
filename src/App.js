import './App.css';
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import ShotTracker from "./ShotTracker"
import BucketList from "./BucketList";
import People from "./People"
import ExploreScreen from "./Explore";
import itemReducer
    from "./reducers/item-reducer";
import completedReducer from "./reducers/completed-reducer";
import drinksReducer from "./reducers/drinks-reducer";
import ShoutCount from "./ShoutCount";
import { configureStore }
    from '@reduxjs/toolkit';
import {Provider} from "react-redux";
const store = configureStore(
    {reducer: {item: itemReducer, completedData: completedReducer, drinksData: drinksReducer}});

function App() {
  return (
      <Provider store={store}>
        <div className="container">
          <BrowserRouter>
            <Routes>
              <Route path="/list"
              element={<BucketList/>}/>
                <Route path="/people"
                   element={<People/>}/>
            <Route index element={<ExploreScreen/>}/>
                <Route path="/shots"
                       element={<ShotTracker/>}>
                </Route>
                <Route path="/shotCounts" element={<ShoutCount/>}/>
          </Routes>
          </BrowserRouter>
        </div>
      </Provider>
  );
}

export default App;
