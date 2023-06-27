import PagePadding from "../../../../components/server/layout/PagePadding";
import SectionHeader from "../../../../components/server/header/SectionHeader";
import MobileProject from "../../../../components/server/projects-page/MobileProject";
import DesktopProject from "../../../../components/server/projects-page/DesktopProject";
import VerticalSeperator from "../../../../components/server/layout/VerticalSeperator";

import simple1 from "../../../../public/project-screenshots/desktop/simple-chat/simple-chat-1.png";
import simple2 from "../../../../public/project-screenshots/desktop/simple-chat/simple-chat-2.png";
import simple3 from "../../../../public/project-screenshots/desktop/simple-chat/simple-chat-3.png";

export default function DesktopProjectsPage() {
  return (
    <section>
      <PagePadding>
        <SectionHeader doubleSideSeperator={true}>
          Desktop Projects
        </SectionHeader>

        <DesktopProject
          headerText={"SimpleChat"}
          imageData={[
            {
              path: simple1,
              caption: "Login screen, db contents on the background",
            },
            { path: simple2, caption: "Chat page" },
            { path: simple3, caption: "Chatting" },
          ]}
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
        </DesktopProject>
      </PagePadding>
    </section>
  );
}
