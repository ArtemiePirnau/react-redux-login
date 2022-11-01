import { createRoot } from "react-dom/client";
import { App } from "./components/app/app.jsx";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "./redux/store.js";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
)