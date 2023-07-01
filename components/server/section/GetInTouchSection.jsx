import LinkButtonPrimary from "../button/link/LinkButtonPrimary";
import SectionHeader from "../header/SectionHeader";
import PagePadding from "../layout/PagePadding";
import PrimaryParagraph from "../text/PrimaryParagraph";
import styles from "./GetInTouchSection.module.css";
export default function GetInTouchSection() {
  return (
    <section className={styles.background}>
      <PagePadding>
        <div className={styles.container}>
          <SectionHeader
            doubleSideSeperator={true}
            containerStyle={{ marginBottom: "0" }}
          >
            Get in Touch
          </SectionHeader>
          <PrimaryParagraph className={styles.text}>
            I would be delighted to connect with you and discuss potential
            collaboration or project opportunities. I look forward to hearing
            from you!
          </PrimaryParagraph>
          <LinkButtonPrimary href={"mailto:tahasokmen222@gmail.com"}>
            Say Hello
          </LinkButtonPrimary>
        </div>
      </PagePadding>
    </section>
  );
}
