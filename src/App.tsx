import { useState } from "react";
import { MuiThemeProvider, Snackbar } from "@material-ui/core";
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
import Footer from "./Components/Footer/Footer";
import { Alert } from "@material-ui/lab";
import SiteAdmin from "./Views/Dashboard/SiteAdmin/Index";
import SalesDashboard from "./Views/Dashboard/SalesAdmin/Index";

function App() {
  const [message, setMessage] = useState<any>({});

  return (
    <MuiThemeProvider theme={theme}>
      <div className="content">
        <Router basename="/">
          <Switch>
            <Route path="/" exact>
              <Home />
              <EnquireSection />
              <CarouselDisplay />
            </Route>
            {getUser() && getUser()?.[0]?.roles.includes("admin") && (
              <Route path="/dashboard" exact>
                <Dashboard setMessage={setMessage} />
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
              <Enquire setMessage={setMessage} />
              <CarouselDisplay />
            </Route>
            <Route path="/login" exact>
              <Login />
            </Route>
            <Route path="/site-admin" exact>
              <SiteAdmin setMessage={setMessage} />
            </Route>
            <Route path="/sales-dash" exact>
              <SalesDashboard setMessage={setMessage} />
            </Route>
          </Switch>
        </Router>
      </div>
      <Footer setMessage={setMessage} />
      <Snackbar
        open={message.open}
        autoHideDuration={3000}
        onClose={() => setMessage({ ...message, open: false })}
      >
        <Alert severity={message?.severity}>{message?.msg}</Alert>
      </Snackbar>
    </MuiThemeProvider>
  );
}

export default App;
