import React from "react";
import Tasks from "./projects/todo/Todo";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Board from "./projects/tictactoe/Board";
import Hooks from "./hooks/Hooks";
import UseMemo1 from "./hooks/useMemo/useMemo1";
import UseCallback from "./hooks/useCallback/UseCallback";
import UseRef from "./hooks/useRef/UseRef";
import AppFilterBar from "./hooks/useCallback/filterBar/AppFilterBar";
import Counter from "./hooks/useCallback/counter/Counter";
import Greetings from "./hooks/useCallback/greeting/Greeting";
import {
  FocusInput,
  LiveCounter,
  Modal,
  Previous,
  RenderCounter,
  Timer,
} from "./hooks/useRef/Example";
import SmartTextareaLogger from "./projects/textLogger/SmartTextareaLogger";
import LikeCounter from "./hooks/useRef/LikeCounter";
import {
  ExpensiveCalc,
  FilteredProduct,
  FilterList,
  Parent,
} from "./hooks/useMemo/Example";
import CounterUseReducer from "./hooks/useReducer/counter/CounterUseReducer";
import About from "./hooks/useReducer/About";
import FormSignUP from "./hooks/useReducer/formInputHandle/FormSignUP";
import Todo from "./hooks/useReducer/todo/Todo";
import AboutUseContext from "./hooks/useContext/About";
import ThemeApp from "./hooks/useContext/themeSwitcher/ThemeApp";
import AuthApp from "./hooks/useContext/authStytem/AuthApp";
import CartApp from "./hooks/useContext/cartSystem/CartApp";
import AppWeather from "./projects/weather/AppWeather";
import LazyLoading from "./lazyLoading/LazyLoading";
import FormApp from "./hooks/useForm/FormApp";
import Register from "./hooks/useForm/Register";
import Login from "./hooks/useForm/Login";
import Welcome from "./hooks/useForm/Welcome";
import MemesApp from "./projects/memesGen/MemesApp";
import LyricsApp from "./projects/lyricsFinder/LyricsApp";
import OtpGenApp from "./projects/otpGen/OtpGenApp";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* --- Projects ----- */}
      <Route path="/todo" element={<Tasks />} />
      <Route path="/tictactoe" element={<Board />} />
      <Route path="/textLogger" element={<SmartTextareaLogger />} />
      <Route path="/weather" element={<AppWeather />} />
      <Route path="/memesGen" element={<MemesApp />} />
      <Route path="/lyricsFinder" element={<LyricsApp />} />
      <Route path="/genOtp" element={<OtpGenApp />} />
      {/* --- Hooks ---- */}
      <Route path="/hooks" element={<Hooks />} />
      {/* -- useCallback-- */}
      <Route path="/hooks/useCallback" element={<UseCallback />} />
      <Route path="/hooks/useCallback/filterBar" element={<AppFilterBar />} />
      <Route path="/hooks/useCallback/counter" element={<Counter />} />
      <Route path="/hooks/useCallback/greeting" element={<Greetings />} />
      {/* -- useMemo-- */}
      <Route path="/hooks/useMemo" element={<UseMemo1 />} />
      <Route path="/hooks/useMemo/1" element={<ExpensiveCalc />} />
      <Route path="/hooks/useMemo/2" element={<FilterList />} />
      <Route path="/hooks/useMemo/3" element={<Parent />} />
      <Route path="/hooks/useMemo/4" element={<FilteredProduct />} />
      {/* -- useRef-- */}
      <Route path="/hooks/useRef" element={<UseRef />} />
      <Route path="/hooks/useRef/1" element={<FocusInput />} />
      <Route path="/hooks/useRef/2" element={<Timer />} />
      <Route path="/hooks/useRef/3" element={<Previous />} />
      <Route path="/hooks/useRef/4" element={<LiveCounter />} />
      <Route path="/hooks/useRef/5" element={<Modal />} />
      <Route path="/hooks/useRef/6" element={<RenderCounter />} />
      <Route path="/hooks/useRef/7" element={<LikeCounter />} />
      {/* -- useReducer-- */}
      <Route path="/hooks/useReducer" element={<About />} />
      <Route path="/hooks/useReducer/1" element={<CounterUseReducer />} />
      <Route path="/hooks/useReducer/2" element={<FormSignUP />} />
      <Route path="/hooks/useReducer/3" element={<Todo />} />
      {/* -- useContext-- */}
      <Route path="/hooks/useContext" element={<AboutUseContext />} />
      <Route path="/hooks/useContext/1" element={<ThemeApp />} />
      <Route path="/hooks/useContext/2" element={<AuthApp />} />
      <Route path="/hooks/useContext/3" element={<CartApp />} />
      {/* -- useForm-- */}
      <Route path="/hooks/useForm" element={<FormApp />} />
      <Route path="/hooks/useForm/register" element={<Register />} />
      <Route path="/hooks/useForm/login" element={<Login />} />
      <Route path="/hooks/useForm/welcome" element={<Welcome />} />
      {/* -- Lazy Loading-- */}
      <Route path="/lazyloading" element={<LazyLoading />} />
    </Routes>
  );
};

export default App;
