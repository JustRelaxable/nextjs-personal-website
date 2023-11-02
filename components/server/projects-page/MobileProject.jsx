import ImageShowcase from "../../client/ImageShowcase";
import ProjectDescription from "./ProjectDescription";
import styles from "./MobileProject.module.css";
import ProjectHeader from "./ProjectHeader";
import projectInfoStyles from "./ProjectInfo.module.css";
import ProjectInfo from "./ProjectInfo";
export default function MobileProject({
  imageData,
  headerText,
  children,
  customAspectRatio,
  projectUrl,
}) {
  return (
    <div className={styles.container}>
      <ImageShowcase
        imageData={imageData}
        containerClass={styles.imageShowcaseContainer}
        controlContainerClass={styles.imageShowcaseControlContainer}
        customAspectRatio={customAspectRatio}
      ></ImageShowcase>
      <ProjectInfo projectUrl={projectUrl} headerText={headerText}>
        {children}
      </ProjectInfo>
    </div>
  );
}
