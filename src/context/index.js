import ColorBox from "../components/ColorBox";
import SelectColors from "../components/SelectColors";
import { ColorProvider } from "./color";

const Context = () => {
  return (
    <ColorProvider value={{ color: "red" }}>
      <div className="App">
        <SelectColors />
        <ColorBox />
      </div>
    </ColorProvider>
  );
};

export default Context;
