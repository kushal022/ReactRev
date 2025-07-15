import React from "react";
import Tasks from "./projects/todo/Todo";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Board from "./projects/tictactoe/Board";
import Hooks from "./hooks/Hooks";
import UseMemo1 from "./hooks/useMemo/useMemo1";
import UseCallback from "./hooks/useCallback/UseCallback";
import UseRef from "./hooks/useRef/UseRef";
import FilterBar from "./hooks/useCallback/filterBar/FilterBar";
import AppFilterBar from "./hooks/useCallback/filterBar/AppFilterBar";
import Counter from "./hooks/useCallback/counter/Counter";
import Greetings from "./hooks/useCallback/greeting/Greeting";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* --- Projects ----- */}
      <Route path="/todo" element={<Tasks />} />
      <Route path="/tictactoe" element={<Board />} />
      {/* --- Hooks ---- */}
      <Route path="/hooks" element={<Hooks />} />
      <Route path="/hooks/useCallback" element={<UseCallback />} />
      <Route path="/hooks/useCallback/filterBar" element={<AppFilterBar />} />
      <Route path="/hooks/useCallback/counter" element={<Counter />} />
      <Route path="/hooks/useCallback/greeting" element={<Greetings />} />
      <Route path="/hooks/useMemo" element={<UseMemo1 />} />
      <Route path="/hooks/useRef" element={<UseRef />} />
    </Routes>
  );
};

export default App;
