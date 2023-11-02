import styles from "./ProjectInfo.module.css";
import ProjectHeader from "./ProjectHeader";
import ProjectDescription from "./ProjectDescription";
export default function ProjectInfo({ children, headerText, projectUrl }) {
  return (
    <div className={styles.container}>
      <ProjectHeader url={projectUrl}>{headerText}</ProjectHeader>
      <ProjectDescription headerText={headerText}>
        {children}
      </ProjectDescription>
    </div>
  );
}
