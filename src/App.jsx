import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Player from "./pages/Player";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

function App() {
    // const navigate = useNavigate();

    // useEffect(() => {
    //     onAuthStateChanged(auth, async (user) => {
    //         if (user) {
    //             console.log("User is logged in:", user);
    //             navigate("/");
    //         } else {
    //             console.log("logged OUT");
    //             navigate("/login");
    //         }
    //     });
    // }, [navigate]);

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/player/:id" element={<Player />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
