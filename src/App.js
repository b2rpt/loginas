import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LogInForm from "./components/pages/loginPage";
import RegistrationForm from "./components/pages/registration";
import ForgotPassword from "./components/pages/forgotPassword";
import AddMember from "./components/pages/addMember";
import homePage from "./components/homepage/layout";
import LandingPage from "./components/pages/landingPage";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <BrowserRouter>
        <Switch>
          <header className="App-header">
            <Route path="/signin" exact component={LogInForm} />
            <Route path="/signup" exact component={RegistrationForm} />
            <Route path="/home" exact component={homePage} />
            <Route path="/forgotpassword" exact component={ForgotPassword} />
            <Route path="/addmemberdetils" exact component={AddMember} />
            <Route path="/" exact  component={LandingPage} />
            {/* <Route render={() => <h1> 404..this page is not valid! </h1>} /> */}
          </header>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
