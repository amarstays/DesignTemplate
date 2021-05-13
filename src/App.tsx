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
// import Testimonials from "./Views/Testimonials";
import Enquire from "./Views/Enquire";
import CarouselDisplay from "./Components/Carousel/CarouselDisplay";
import Login from "./Views/Login";
import { getUser } from "./utils/methods";
import Dashboard from "./Views/Dashboard";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Router basename="/">
        <Switch>
          <Route path="/" exact>
            <Home />
            <EnquireSection />
            <CarouselDisplay />
          </Route>
          {getUser() && getUser()?.[0]?.roles.includes("admin") && (
            <Route path="/dashboard" exact>
              <Dashboard />
            </Route>
          )}
          <Route path="/gallery" exact>
            <Gallery />
            <EnquireSection />
          </Route>
          <Route path="/services" component={Services} exact>
            <Services />
            <EnquireSection />
            <CarouselDisplay />
          </Route>
          <Route path="/philosophy" exact>
            <Philosophy />
            <EnquireSection />
            <CarouselDisplay />
          </Route>
          {/* <Route path="/testimonials" exact>
            <Testimonials />
            <EnquireSection />
            <CarouselDisplay />
          </Route> */}
          <Route path="/team" exact>
            <Team />
            <EnquireSection />
            <CarouselDisplay />
          </Route>
          <Route path="/enquire" exact>
            <Enquire />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
        </Switch>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
