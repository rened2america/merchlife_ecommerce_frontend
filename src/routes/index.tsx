import { component$, useContextProvider, useStore } from "@builder.io/qwik";
import Banner from "~/components/core/banner/banner";
import HomeSearch from "~/components/core/home-search/home-search";
import SectionArtists from "~/components/core/section-artists/section-artists";
import SectionInfo from "~/components/core/section-info/section-info";
import { CartContext } from "~/context/cart";
import PreviewVideo from "../../public/videos/merchlifevideo.mp4";
export default component$(() => {
  const cart = useStore({
    products: [],
    numberProducts: 0,
  });
  useContextProvider(CartContext, cart);
  console.log(PreviewVideo);
  return (
    <>
      <div
        style={{
          width: "100%",
          display: "grid",
          position: "relative",
        }}
      >
        <video
          autoPlay
          muted
          loop
          style="width:100%;height:auto;position:absolute;top:0;left:0;z-index:-1;"
        >
          <source src={PreviewVideo} type="video/mp4" />
          Tu navegador no soporta la etiqueta video.
        </video>

        <div style="position:absolute;top:0;left:0;width:100%;height:100vh;z-index: -1" />
        <Banner />
        <HomeSearch />
        <SectionArtists />
      </div>

      <SectionInfo />
    </>
  );
});
