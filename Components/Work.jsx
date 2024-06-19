import Image from "next/image";
import "./Work.css";
const Work = () => {
  return (
    <>
      <section className="hworksec">
        <div className="workDesc">
          <h2>My showcase projects</h2>
        </div>
        <div className=" workShow">
          <div className="works">
            <div className="work">
              <div className="workImage">
                <Image
                  className="workImg"
                  src="/Work/home.jpg"
                  width={100}
                  height={100}
                  alt="home"
                  unoptimized
                />
              </div>
              <div className="pName">
                <div className="cName">
                  <p>E-Commerce</p>
                  <p style={{ color: "green" }}>E-Commerce</p>
                </div>
              </div>
            </div>
            <div className="work">
              <div className="workImage">
                <Image
                  className="workImg"
                  src="/Work/sbhd.png"
                  width={100}
                  height={100}
                  alt="sbhd"
                  unoptimized
                />
              </div>
              <div className="pName">
                <div className="cName">
                  <p>Subarna Bhandari</p>
                  <p style={{ color: "green" }}>Subarna Bhandari</p>
                </div>
              </div>
            </div>

            <div className="work">
              <div className="workImage">
                <Image
                  className="workImg"
                  src="/Work/esabda.png"
                  width={100}
                  height={100}
                  alt="esabda"
                  unoptimized
                />
              </div>
              <div className="pName">
                <div className="cName">
                  <p>Esabda</p>
                  <p style={{ color: "green" }}>Esabda</p>
                </div>
              </div>
            </div>

            <div className="work">
              <div className="workImage">
                <Image
                  className="workImg"
                  src="/Work/lims.png"
                  width={100}
                  height={100}
                  alt="lims"
                  unoptimized
                />
              </div>
              <div className="pName">
                <div className="cName">
                  <p>LIMS, DFTQC</p>
                  <p style={{ color: "green" }}>LIMS, DFTQC</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;
