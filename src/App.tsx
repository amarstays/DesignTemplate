import { MuiThemeProvider } from "@material-ui/core";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import theme from "./assets/theme";
// components
import Home from "./Views/Home";
import Gallery from "./Views/Gallery";
import Services from "./Views/Services";
import Philosophy from "./Views/Philosophy";
import EnquireSection from "./Components/Enquire/EnquireSection";
import Team from "./Views/Team";
import Testimonials from "./Views/Testimonials";
import Enquire from "./Views/Enquire";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Router basename="/">
        <Switch>
          <Route path="/" exact>
            <Home />
            <EnquireSection />
          </Route>
          <Route path="/gallery" exact>
            <Gallery />
            <EnquireSection />
          </Route>
          <Route path="/services" component={Services} exact>
            <Services />
            <EnquireSection />
          </Route>
          <Route path="/philosophy" exact>
            <Philosophy />
            <EnquireSection />
          </Route>
          <Route path="/testimonials" exact>
            <Testimonials />
            <EnquireSection />
          </Route>
          <Route path="/team" exact>
            <Team />
            <EnquireSection />
          </Route>
          <Route path="/enquire" component={Enquire} exact />
        </Switch>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
