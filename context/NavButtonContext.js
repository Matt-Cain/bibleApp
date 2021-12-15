import React, { useState } from "react";

const NavButtonContext = React.createContext([false, () => {}]);

const NavButtonProvider = (props) => {
  const [navButtonState, setNavButtonState] = useState({});
  return (
    <NavButtonContext.Provider value={[navButtonState, setNavButtonState]}>
      {props.children}
    </NavButtonContext.Provider>
  );
};

export { NavButtonContext, NavButtonProvider };
