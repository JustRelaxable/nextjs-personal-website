import PagePadding from "../../../../components/server/layout/PagePadding";
import SectionHeader from "../../../../components/server/header/SectionHeader";
import MobileProject from "../../../../components/server/projects-page/MobileProject";
import VerticalSeperator from "../../../../components/server/layout/VerticalSeperator";

import movies1 from "../../../../public/project-screenshots/frontend/movies-to-watch/movies-to-watch-1.png";
import movies2 from "../../../../public/project-screenshots/frontend/movies-to-watch/movies-to-watch-2.png";
import movies3 from "../../../../public/project-screenshots/frontend/movies-to-watch/movies-to-watch-3.png";
import movies4 from "../../../../public/project-screenshots/frontend/movies-to-watch/movies-to-watch-4.png";
import movies5 from "../../../../public/project-screenshots/frontend/movies-to-watch/movies-to-watch-5.png";

import nasa1 from "../../../../public/project-screenshots/frontend/nasa-apod/nasa-apod-1.png";
import nasa2 from "../../../../public/project-screenshots/frontend/nasa-apod/nasa-apod-2.png";
import nasa3 from "../../../../public/project-screenshots/frontend/nasa-apod/nasa-apod-3.png";
import nasa4 from "../../../../public/project-screenshots/frontend/nasa-apod/nasa-apod-4.png";
import nasa5 from "../../../../public/project-screenshots/frontend/nasa-apod/nasa-apod-5.png";

import sticker1 from "../../../../public/project-screenshots/frontend/sticker-shop/sticker-shop-1.png";
import sticker2 from "../../../../public/project-screenshots/frontend/sticker-shop/sticker-shop-2.png";
import sticker3 from "../../../../public/project-screenshots/frontend/sticker-shop/sticker-shop-3.png";
import sticker4 from "../../../../public/project-screenshots/frontend/sticker-shop/sticker-shop-4.png";
import sticker5 from "../../../../public/project-screenshots/frontend/sticker-shop/sticker-shop-5.png";
import sticker6 from "../../../../public/project-screenshots/frontend/sticker-shop/sticker-shop-6.png";

export default function FrontendProjectsPage() {
  return (
    <section>
      <PagePadding>
        <SectionHeader doubleSideSeperator={true}>
          Frontend Projects
        </SectionHeader>
        <MobileProject
          headerText={"Movies to Watch"}
          imageData={[
            {
              path: movies1,
              caption: "Main page, suggestion fetched from imdb",
            },
            { path: movies2, caption: "Searching a movie, fetched from imdb" },
            { path: movies3, caption: "Movie details" },
            {
              path: movies4,
              caption: "Pagination after certain number of movies",
            },
            { path: movies5, caption: "Page 2" },
          ]}
          customAspectRatio={{ aspectRatio: 47 / 100 }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo in
          vitae turpis massa sed elementum. Purus ut faucibus pulvinar elementum
          integer enim neque. Sit amet aliquam id diam maecenas ultricies mi
          eget mauris. Est ante in nibh mauris. Elementum curabitur vitae nunc
          sed velit. Vulputate odio ut enim blandit volutpat maecenas volutpat.
          <br />
          Enim sit amet venenatis urna cursus eget nunc scelerisque. Adipiscing
          elit pellentesque habitant morbi tristique senectus et netus et. Magna
          ac placerat vestibulum lectus mauris ultrices eros in. Id volutpat
          lacus laoreet non curabitur gravida arcu. Sed euismod nisi porta lorem
          mollis aliquam. Donec enim diam vulputate ut. Sed viverra tellus in
          hac habitasse platea dictumst.
        </MobileProject>
        <VerticalSeperator></VerticalSeperator>
        <MobileProject
          headerText={"Nasa Apod"}
          imageData={[
            {
              path: nasa1,
              caption: "Main page, random event fetched from nasa api",
            },
            { path: nasa2, caption: "Mobile menu" },
            { path: nasa3, caption: "Requesting custom date event" },
            {
              path: nasa4,
              caption: "About page",
            },
            { path: nasa5, caption: "Requesting another random event" },
          ]}
          customAspectRatio={{ aspectRatio: 47 / 100 }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo in
          vitae turpis massa sed elementum. Purus ut faucibus pulvinar elementum
          integer enim neque. Sit amet aliquam id diam maecenas ultricies mi
          eget mauris. Est ante in nibh mauris. Elementum curabitur vitae nunc
          sed velit. Vulputate odio ut enim blandit volutpat maecenas volutpat.
          <br />
          Enim sit amet venenatis urna cursus eget nunc scelerisque. Adipiscing
          elit pellentesque habitant morbi tristique senectus et netus et. Magna
          ac placerat vestibulum lectus mauris ultrices eros in. Id volutpat
          lacus laoreet non curabitur gravida arcu. Sed euismod nisi porta lorem
          mollis aliquam. Donec enim diam vulputate ut. Sed viverra tellus in
          hac habitasse platea dictumst.
        </MobileProject>
        <VerticalSeperator></VerticalSeperator>
        <MobileProject
          headerText={"Sticker Shop"}
          imageData={[
            {
              path: sticker1,
              caption: "Main page",
            },
            { path: sticker2, caption: "Products showcase" },
            { path: sticker3, caption: "Product page" },
            {
              path: sticker4,
              caption: "Product added to cart notification",
            },
            { path: sticker5, caption: "Cart page" },
            { path: sticker6, caption: "Mobile menu screen" },
          ]}
          customAspectRatio={{ aspectRatio: 47 / 100 }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo in
          vitae turpis massa sed elementum. Purus ut faucibus pulvinar elementum
          integer enim neque. Sit amet aliquam id diam maecenas ultricies mi
          eget mauris. Est ante in nibh mauris. Elementum curabitur vitae nunc
          sed velit. Vulputate odio ut enim blandit volutpat maecenas volutpat.
          <br />
          Enim sit amet venenatis urna cursus eget nunc scelerisque. Adipiscing
          elit pellentesque habitant morbi tristique senectus et netus et. Magna
          ac placerat vestibulum lectus mauris ultrices eros in. Id volutpat
          lacus laoreet non curabitur gravida arcu. Sed euismod nisi porta lorem
          mollis aliquam. Donec enim diam vulputate ut. Sed viverra tellus in
          hac habitasse platea dictumst.
        </MobileProject>
      </PagePadding>
    </section>
  );
}
