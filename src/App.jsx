import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmojiGame from "./components/EmojiGame";
import EmojiRule from "./components/EmojiRule";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<EmojiGame />} />
        <Route exact path="/rules" element={<EmojiRule />} />
      </Routes>
    </Router>
  );
};

export default App;
