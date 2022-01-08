import React, { useState } from "react";
import "./MenuNav.css";
import "./FontAwesome";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const MenuNav = () => {
  const [selected, select] = useState(1);
  return (
    <nav className="Menu_bar">
      <Link to="/first" className="Menu_button" onClick={() => select(1)}>
        <FontAwesomeIcon
          icon="fa-solid fa-house"
          className={selected === 1 ? "selected" : "notselected"}
        />
      </Link>
      <Link to="/second" className="Menu_button" onClick={() => select(2)}>
        <FontAwesomeIcon
          icon="fa-solid fa-comments"
          className={selected === 2 ? "selected" : "notselected"}
        />
      </Link>
      <Link to="/third" className="Menu_button" onClick={() => select(3)}>
        <FontAwesomeIcon
          icon="fa-solid fa-gear"
          className={selected === 3 ? "selected" : "notselected"}
        />
      </Link>
      <Link to="/forth" className="Menu_button" onClick={() => select(4)}>
        <FontAwesomeIcon
          icon="fa-solid fa-comments"
          className={selected === 4 ? "selected" : "notselected"}
        />
      </Link>
      <Link to="/fifth" className="Menu_button" onClick={() => select(5)}>
        <FontAwesomeIcon
          icon="fa-solid fa-gear"
          className={selected === 5 ? "selected" : "notselected"}
        />
      </Link>
    </nav>
  );
};

export default MenuNav;
