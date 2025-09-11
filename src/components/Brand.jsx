import React from "react";
import { brand } from "../theme";
import { useNavigate } from "react-router-dom";

export default function Brand({ size = 144 }) {
  const navigate = useNavigate();
  return (
    <div className="flex items-center gap-2 select-none">
      <button
        onClick={() => navigate("/")}
        className="flex items-center gap-2 hover:opacity-80 transition"
      >
        <img
          src="/logo.png"
          alt={brand.name}
          width={size}
          height={size}
          className="drop-shadow"
        />
      </button>
    </div>
  );
}
