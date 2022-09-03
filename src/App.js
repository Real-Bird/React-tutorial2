import loadable from "@loadable/component";
import React, { Suspense } from "react";
import { useState } from "react";

// const SplitMe = React.lazy(() => import("./SplitMe"));
const SplitMe = loadable(() => import("./SplitMe"), {
  fallback: <div>loading...</div>,
});

function App() {
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    setVisible(true);
  };
  const onMouseOver = () => {
    SplitMe.preload();
  };
  return (
    <div>
      <header>
        <div style={{ width: 200, height: 100, backgroundColor: "tan" }} />
        <p onClick={onClick} onMouseOver={onMouseOver}>
          Hello React!
        </p>
      </header>
      {/* <Suspense fallback={<div>loading...</div>}> */}
      {visible && <SplitMe />}
      {/* </Suspense> */}
    </div>
  );
}

export default App;
