import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import useTelegram from "./components/hooks/useTelegram";

function App() {
  const { tg, onToggleButton } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div className="App">
      <button onClick={onToggleButton}>toggle</button>
      <Header />
    </div>
  );
}

export default App;
