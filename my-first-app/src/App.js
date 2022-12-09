// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import Alert from "./componets/Alert";
import Home from "./componets/Home";
import Navbar from "./componets/Navbar";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Resume from "./componets/Resume";
import Users from "./componets/Users";
import User from "./componets/User";
// import Page404 from "./componets/functional-components/Page404";

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
      <BrowserRouter>
        <Navbar
          userName='Jubayer Ali'
          isUserLoggedIn='true'
          mode={appTheme}
          toggleMode={toggleAppTheme}
          myAlert={alert}
        />
        <Alert myAlert={alert} />
        <Routes>
          <Route
            path='/'
            element={
              <Home
                mode={appTheme}
                myAlert={showAlert}
                toggleMode={toggleAppTheme}
              />
            }
          ></Route>
          <Route path='/resume' element={<Resume mode={appTheme} />}></Route>
          <Route path='/users' element={<Users mode={appTheme} />}></Route>
          <Route path='/users/:name' element={<User mode={appTheme} />}></Route>

          {/* <Route path='/*' element={<Page404 mode={appTheme} />}></Route> */}
          {/* Or */}
          <Route path='/*' element={<Navigate to='/' />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
