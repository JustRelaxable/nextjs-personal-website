import ProjectDescription from "./ProjectDescription";
import ImageShowcase from "../../client/ImageShowcase";
import ProjectInfo from "./ProjectInfo";

export default function DesktopProject({
  imageData,
  headerText,
  children,
  projectUrl,
}) {
  return (
    <div>
      <ImageShowcase imageData={imageData}></ImageShowcase>
      <ProjectInfo headerText={headerText} projectUrl={projectUrl}>
        {children}
      </ProjectInfo>
    </div>
  );
}
