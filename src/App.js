import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Routee from "./routes/routes";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routee />
      </BrowserRouter>
    </div>
  );
}

export default App;
