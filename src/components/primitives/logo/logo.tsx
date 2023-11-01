import { component$ } from "@builder.io/qwik";
import logo from "../../../../public/logo/Logo_rgb.png";

export default component$(() => {
  return (
    <img
      style={{ cursor: "pointer" }}
      width="39"
      height="44"
      src={logo}
      alt="logo"
    />
  );
});
