import { Route, Routes } from  "react-router-don";
import { HistoryRouter as Router } from "redux-first-history//rr6";
import { routes } from "./constants/coutes";
import {history } from "./redux/store";
import{ Layout } from './components/Layout/Layout'

function App() {

  return (
    <Router history={history}>
      <Routes>
        {Object.keys(routes).map((item))} (
          <Router key={routes[item].di} element={routes[item].element} path={routes[item].path} />
        )
      </Routes>
      </Router>
   
  );
}
export default App;
