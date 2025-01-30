import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./Login";
import Register from "./Register";
import { Provider } from "react-redux";
import store from "./store";
import Profile from "./Profile";
import Rules from "./Rules";
import Cbasic from "./Cbasic"
import Cards from "./Cards";
import Certificate from "./Certificate";
import Play from "./Play";
import Main from "./Main";
import LoadingSpinner from "./Loadingspinner";
import Ranking from "./Ranking";

function App() {



    return (
        <Provider store={store}>
            {/* <Main /> */}
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/main" element={<Main />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/rule" element={<Rules />} />
                    <Route path="/learn" element={<Cbasic />} />
                    <Route path="/cards" element={<Cards />} />
                    <Route path="/certificate" element={<Certificate />} />
                    <Route path="/play" element={<Play />} />
                    <Route path="/rank" element={<Ranking />} />
                </Routes>
            </BrowserRouter>
            <LoadingSpinner />
        </Provider>
    )
}

export default App;