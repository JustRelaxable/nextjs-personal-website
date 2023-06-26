import ProjectDescription from "./ProjectDescription";
import ImageShowcase from "../../client/ImageShowcase";

export default function DesktopProject({ imageData, headerText, children }) {
  return (
    <div>
      <ImageShowcase imageData={imageData}></ImageShowcase>
      <ProjectDescription headerText={headerText}>
        {children}
      </ProjectDescription>
    </div>
  );
}
