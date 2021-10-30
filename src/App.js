import "./styles.css";
import { Calulator, Display } from "./components";

export default function App() {
    return (
        <div className="app">
          <div class="wrapper">
            <header className="calcHeader"> Betterhalf Calculator </header>
            <Display />
            <Calulator />
          </div>
        </div>
    );
}