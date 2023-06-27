import PagePadding from "../../../../components/server/layout/PagePadding";
import SectionHeader from "../../../../components/server/header/SectionHeader";
import MobileProject from "../../../../components/server/projects-page/MobileProject";
import VerticalSeperator from "../../../../components/server/layout/VerticalSeperator";

import auto1 from "../../../../public/project-screenshots/mobile/autotrader19/autotrader19-1.jpg";

export default function MobileProjectsPage() {
  return (
    <section>
      <PagePadding>
        <SectionHeader doubleSideSeperator={true}>
          Mobile Projects
        </SectionHeader>
        <MobileProject
          headerText={"AutoTrader19"}
          imageData={[
            {
              path: auto1,
              caption: "Currencies page",
            },
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
