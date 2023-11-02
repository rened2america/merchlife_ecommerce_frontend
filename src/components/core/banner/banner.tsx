import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import styles from "./banner.module.css";

export default component$(() => {
  return (
    <div
      style={{
        maxWidth: "1300px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "48px 32px",
        boxSizing: "border-box",
        justifySelf: "center",
      }}
    >
      <div
        style={{
          fontSize: "16px",
          backgroundColor: "#ffda79",
          color: "#1B1B1B",
          padding: "10px 16px",
          width: "fit-content",
          borderRadius: "9999999px",
          fontWeight: "600",
        }}
      >
        Over 100 artist al ready earning!
      </div>
      <h1 class={styles["banner-title"]}>
        Turn your brand into merch and get money (for free)!
      </h1>
      <div
        style={{
          fontSize: "20px",
          lineHeight: "36px",
          fontWeight: "500",
          color: "white",
          textAlign: "center",
          background: "transparent",
        }}
      >
        Transform your art into earnings
      </div>
      <Link
        href={import.meta.env.PUBLIC_URL_APP_DASHBOARD + "/register"}
        style={{
          backgroundColor: "white",
          color: "#1B1B1B",
          padding: "24px",
          fontSize: "14px",
          fontWeight: "600",
          borderRadius: "9999999px",
          marginTop: "24px",
          cursor: "pointer",
        }}
      >
        Learn How
      </Link>
    </div>
  );
});
