// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import Alert from "./componets/Alert";
import Home from "./componets/Home";
import Navbar from "./componets/Navbar";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (type, message) => {
    setAlert({
      type: type,
      message: message,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const [appTheme, setAppTheme] = useState("light");
  const toggleAppTheme = () => {
    if (appTheme === "dark") {
      setAppTheme("light");
      showAlert("success", "Light mode enabled");
    } else {
      setAppTheme("dark");
      showAlert("success", "Dark mode enabled");
    }
  };

  return (
    <div className={`i-bg-${appTheme}`}>
      <Navbar
        userName='Jubayer Ali'
        isUserLoggedIn='true'
        mode={appTheme}
        toggleMode={toggleAppTheme}
        myAlert={alert}
      />
      <Alert myAlert={alert} />
      <Home mode={appTheme} myAlert={showAlert} />
    </div>
  );
}

export default App;
