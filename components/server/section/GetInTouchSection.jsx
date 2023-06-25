"use client";
import LinkButtonPrimary from "../button/link/LinkButtonPrimary";
import SectionHeader from "../header/SectionHeader";
import PagePadding from "../layout/PagePadding";
import PrimaryParagraph from "../text/PrimaryParagraph";
import styles from "./GetInTouchSection.module.css";
import { motion } from "framer-motion";
import variants from "../../../sectionVariants";
export default function GetInTouchSection() {
  return (
    <section className={styles.background}>
      <PagePadding>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={variants}
          className={styles.container}
        >
          <SectionHeader doubleSideSeperator={true}>Get in Touch</SectionHeader>
          <PrimaryParagraph>
            Although I’m not currently looking for any new opportunities, my
            inbox is always open. Whether you have a question or just want to
            say hi, I’ll try my best to get back to you!
          </PrimaryParagraph>
          <LinkButtonPrimary href={"mailto:tahasokmen222@gmail.com"}>
            Say Hello
          </LinkButtonPrimary>
        </motion.div>
      </PagePadding>
    </section>
  );
}
