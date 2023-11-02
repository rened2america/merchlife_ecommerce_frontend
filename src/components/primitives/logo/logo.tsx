import { component$ } from "@builder.io/qwik";
import logo from "../../../../public/logo/Logo_footer.png";

export default component$(() => {
  return (
    <img
      style={{ cursor: "pointer" }}
      width="58"
      height="55"
      src={logo}
      alt="logo"
    />
  );
});
