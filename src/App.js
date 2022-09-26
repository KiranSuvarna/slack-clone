import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Chat from "./components/Chat";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <AppBody>
          <SideBar />
          <Routes>
            <Route path="/" exact element={<Chat />} />
          </Routes>
        </AppBody>
      </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
