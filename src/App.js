import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';


import LogInForm from './components/pages/loginPage';
import RegistrationForm from './components/pages/registration';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <header className="App-header">
        <LogInForm />
        {/* <RegistrationForm /> */}
      </header>
    </div>
  );
}

export default App;
