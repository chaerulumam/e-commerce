import Link from "next/link";
import React from "react";

import { AiOutlineShopping } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href={"/"}>Jam Store</Link>
      </p>

      <button type="button" className="cart-icon">
        {<AiOutlineShopping />}
      </button>
    </div>
  );
};

export default Navbar;
