
import './css/App.css';
import DataEntry from './Component/DataEntry';
import DataEntry2 from './Component/DataEntry2';
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import NotFound from "./Component/NotFound";
import Grid from "./Component/Grid";
import ContactList from "./Component/ContactList";

import MailState from "./Context/mailState";
function App() {
  return (
    <div className="App">
        
        <MailState>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={DataEntry} />

              <Route exact path="/ContactList" component={ContactList} />
              <Route exact path="/test1" component={DataEntry2} />
              <Route exact path="/grid" component={Grid} />
             
              <Route path="/" component={NotFound} />
            </Switch>
          </BrowserRouter>
        </MailState>
    </div>
  );
}

export default App;
