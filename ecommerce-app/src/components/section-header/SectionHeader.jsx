import "./sectionheader.css";

const SectionHeader = ({ sectionTitle }) => {
  return (
    <div className="section-header">
      <h1>{sectionTitle}</h1>
      <hr></hr>
    </div>
  );
};

export default SectionHeader;
