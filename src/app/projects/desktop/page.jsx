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
          The SimpleChat is a chat application developed with the aim of
          creating a secure chatting platform for a company's employees. The
          solution consists of three core projects: a client-side desktop
          application, a server-side console application, and web services API
          for backend operations. The application provides a secure environment
          for employees to communicate with each other in real-time. Messages
          are encrypted to protect sensitive information and ensure
          confidentiality. To create a new account, an employee must already be
          present in the database. This ensures that only authorized individuals
          within the company can sign up for the application. When an employee
          registers, a password hash is created and stored for their account,
          enhancing security. The client-side component is a desktop application
          that employees use to access and interact with the chat system. It
          provides a user-friendly interface for sending and receiving messages,
          managing contacts, and accessing other application features.
        </DesktopProject>
      </PagePadding>
    </section>
  );
}
