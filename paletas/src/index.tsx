import React from 'react';
import ReactDOM from 'react-dom';
import { Home } from './pages/home/Home';
import { CreatedForm } from "./pages/createdForm/CreatedForm";
import { Footer } from "./components/shared/footer/footer";
import { Header } from "./components/shared/header/header";
import { SearchContextProvider } from "./context/searchContext";
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min.js";

ReactDOM.render(
  <React.StrictMode>
    <SearchContextProvider>
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CreatedForm />} />
            <Route path="/update/:id" element={<CreatedForm update={true} />} />
          </Routes>
        <Footer/>
      </BrowserRouter>
    </SearchContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
