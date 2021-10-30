import "./styles.css";
import { Calulator } from "./components";

export default function App() {
    return (
        <div className="app">
          <div className="wrapper">
            <header className="calcHeader"> Betterhalf Calculator </header>
            <Calulator />
          </div>
        </div>
    );
}