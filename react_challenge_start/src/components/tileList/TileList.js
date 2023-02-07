import React from "react";
import { Tile } from "../tile/Tile";
export const TileList = ({ tiles }) => {
  return (
    <div>
      {tiles.map((rdv, index) => (
        <Tile key={index} tile={rdv} />
      ))}
    </div>
  );
};
