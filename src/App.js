import React, { useState } from "react";

import Sidebar from "./components/Sidebar";
import MyRoutes from "./features/MyRoutes";

import { ReactComponent as Menu } from "./icons/Menu.svg";
import { ReactComponent as Close } from "./icons/Close.svg";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="relative">
      <Sidebar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <button
        onClick={() => {
          setIsMenuOpen(!isMenuOpen);
        }}
        className="absolute top-5 right-10 lg:hidden"
      >
        {isMenuOpen ? <Close /> : <Menu />}
      </button>
      <MyRoutes />
    </div>
  );
}

export default App;
