import React from "react";
import { Avatar } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import "./header.css";
import { useDataLayerValue } from "./DataLayer";
function Header() {
  const [{ user }, dispatch] = useDataLayerValue();
  return (
    <div className="header">
      <div className="header_left">
        <Search />
        <input type="text" placeholder="Search for Artist, Songs," />
      </div>
      <div className="header_right">
        <Avatar src={user?.images[0]?.url} alt="" />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
