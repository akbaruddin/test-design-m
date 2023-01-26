import { useState } from "react";
import Screen01 from "./screens/Screen01";
import Screen02 from "./screens/Screen02";

function App() {
  const [screen, setScreen] = useState(1);

  const changeScreen = (value) => {
    setScreen(value)
  }

  return (
    <>
      {screen === 1 ? <Screen01 screenChange={changeScreen} /> : null}
      {screen === 2 ? <Screen02  screenChange={changeScreen} /> : null}
    </>
  );
}

export default App;
