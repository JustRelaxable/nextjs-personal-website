import ImageShowcase from "../../../../components/client/ImageShowcase";
import SectionHeader from "../../../../components/server/header/SectionHeader";
import PagePadding from "../../../../components/server/layout/PagePadding";
import styles from "./page.module.css";

import emily1 from "../../../../public/project-screenshots/unity/emilys-adventures/emily-adventures-1.webp";
import emily2 from "../../../../public/project-screenshots/unity/emilys-adventures/emily-adventures-2.webp";
import emily3 from "../../../../public/project-screenshots/unity/emilys-adventures/emily-adventures-3.webp";
import emily4 from "../../../../public/project-screenshots/unity/emilys-adventures/emily-adventures-4.webp";
import emily5 from "../../../../public/project-screenshots/unity/emilys-adventures/emily-adventures-5.webp";
import ProjectDescription from "../../../../components/server/projects-page/ProjectDescription";
import VerticalSeperator from "../../../../components/server/layout/VerticalSeperator";
export default function UnityProjectsPage() {
  return (
    <section className={styles.background}>
      <PagePadding>
        <SectionHeader doubleSideSeperator={true}>Unity Projects</SectionHeader>
        <ImageShowcase
          imageData={[
            { path: emily1, caption: "Emily's backyard" },
            { path: emily2, caption: "Giant's living room" },
            { path: emily3, caption: "Camp area of Piggy's Island" },
            { path: emily4, caption: "Piano puzzle" },
            { path: emily5, caption: "Graveyard area of Piggy's Island" },
          ]}
        ></ImageShowcase>
        <ProjectDescription headerText={"Emily's Adventures"}>
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
        </ProjectDescription>

        <VerticalSeperator></VerticalSeperator>

        <ImageShowcase
          imageData={[
            { path: emily1, caption: "Emily's backyard" },
            { path: emily2, caption: "Giant's living room" },
            { path: emily3, caption: "Camp area of Piggy's Island" },
            { path: emily4, caption: "Piano puzzle" },
            { path: emily5, caption: "Graveyard area of Piggy's Island" },
          ]}
        ></ImageShowcase>
        <ProjectDescription headerText={"Emily's Adventures"}>
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
        </ProjectDescription>
      </PagePadding>
    </section>
  );
}
