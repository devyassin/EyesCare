import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { overlayAction } from "./store/OverlaySlice";
import NavBar from "./Components/NavBar";
import Overlay from "./Components/Overlay";
import Cours from "./Components/Cours/Cours";
import About from "./Components/About/About";
import DoctorDetails from "./Components/Doctors/DoctorDetails";
import Doctors from "./Components/Doctors/Doctors";
import Login from "./Components/Login/Login";
import { loginActions } from "./store/LoginSlice";
import { useState, useEffect } from "react";

const App = () => {
  const visibile = useSelector((state) => state.overlay.visible);
  const isLogin = useSelector((state) => state.login.isLogged);
  console.log(isLogin);

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    fetch("https://eyescare-7572f-default-rtdb.firebaseio.com/Users.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setLoading(false);
        setData(data);
        // dispatch(loginActions.addUsers(Object.values(data)));
      });
  }, []);

  useEffect(() => {
    if (!loading) {
      dispatch(loginActions.addUsers(Object.values(data)));
    }
  }, [loading]);

  return (
    <BrowserRouter>
      {visibile && (
        <div
          onClick={() => dispatch(overlayAction.toggle())}
          className="overlay-container z-40"
        ></div>
      )}

      {isLogin && <NavBar />}
      {visibile && <Overlay />}

      <Routes>
        <Route path="/" element={<Login />} />
        {isLogin && <Route path="/Cours" element={<Cours />} />}
        {isLogin && <Route path="/Doctors" element={<Doctors />} />}
        {isLogin && <Route path="/Doctors/:id" element={<DoctorDetails/>} />}
        {isLogin && <Route path="/About" element={<About />} />}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
