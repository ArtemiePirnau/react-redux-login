import "./app.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Form } from "../form/form.jsx";
import { WelcomePage } from "../welcome-page/welcome-page.jsx";
export const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/welcome" element={<WelcomePage />} />
      </Routes>
    </div>
  );
};
