import SectionHeader from "../../header/SectionHeader";
import PagePadding from "../../layout/PagePadding";
import styles from "./ProjectSection.module.css";
import ProjecctCategoryLink from "./project-category-link/ProjectCategoryLink";
import unityCategory from "../../../../public/category-thumbnails/unity-category.jpg";
import desktopCategory from "../../../../public/category-thumbnails/desktop-category.jpg";
import mobileCategory from "../../../../public/category-thumbnails/mobile-category.jpg";
import webCategory from "../../../../public/category-thumbnails/web-category.jpg";
export default function ProjectSection() {
  return (
    <section className={styles.background}>
      <PagePadding>
        <div className={styles.content}>
          <SectionHeader doubleSideSeperator={true}>Projects</SectionHeader>
          <div className={styles.grid}>
            <ProjecctCategoryLink imgSrc={unityCategory}>
              Unity Game Projects
            </ProjecctCategoryLink>
            <ProjecctCategoryLink imgSrc={webCategory}>
              Frontend Projects
            </ProjecctCategoryLink>
            <ProjecctCategoryLink imgSrc={mobileCategory}>
              Mobile App Projects
            </ProjecctCategoryLink>
            <ProjecctCategoryLink imgSrc={desktopCategory}>
              Desktop App Projects
            </ProjecctCategoryLink>
          </div>
        </div>
      </PagePadding>
    </section>
  );
}
