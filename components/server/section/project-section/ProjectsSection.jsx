import SectionHeader from "../../header/SectionHeader";
import PagePadding from "../../layout/PagePadding";
import styles from "./ProjectSection.module.css";
import ProjecctCategoryLink from "./project-category-link/ProjectCategoryLink";
import categoryPhoto from "../../../../public/placeholder-phone.jpg";
export default function ProjectSection() {
  return (
    <section className={styles.background}>
      <PagePadding>
        <SectionHeader>Projects</SectionHeader>
        <div className={styles.grid}>
          <ProjecctCategoryLink color="#29578d94" imgSrc={categoryPhoto}>
            Unity Projects
          </ProjecctCategoryLink>
          <ProjecctCategoryLink color="#29578d94" imgSrc={categoryPhoto}>
            Unity Projects
          </ProjecctCategoryLink>
          <ProjecctCategoryLink color="#29578d94" imgSrc={categoryPhoto}>
            Unity Projects
          </ProjecctCategoryLink>
          <ProjecctCategoryLink color="#29578d94" imgSrc={categoryPhoto}>
            Unity Projects
          </ProjecctCategoryLink>
        </div>
      </PagePadding>
    </section>
  );
}
