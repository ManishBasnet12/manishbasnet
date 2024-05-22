import { RiArrowRightDownLine } from "react-icons/ri";

const HeroSectionContent = () => {
  return (
    <>
      <div className="title ">
        <div className="ptitle">
        <h1 className="manish"> Web Designer</h1>

        </div>
        <div className="ptitle">
        <h1>
          <span className="title-icon">
            <RiArrowRightDownLine />
          </span>
          & Developer
        </h1>
        </div>
        <div className="desc">
          <p>
            A frontend focused web Developer building the frontend of websites
            and web Applications that leads to the success of the overall
            product
          </p>
        </div>
      </div>
    </>
  );
};

export default HeroSectionContent;
