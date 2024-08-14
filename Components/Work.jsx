import Image from "next/image";
import "./Work.css";
import Link from "next/link";
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
              <Link href="https://www.behance.net/gallery/195661385/Landing-page-Preloader" target="blank">
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
                <p className="aName">ui design, animation</p>
              </Link>
            </div>
            <div className="work">
              <Link
                href="https://www.subarnabhandari.com/studio"
                target="blank"
              >
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
                <p className="aName">Portfolio, Design</p>
              </Link>
            </div>

            <div className="work">
              <Link href="https://esabda.com/" target="blank">
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
                <p className="aName">web Devlopment, Design</p>
              </Link>
            </div>

            <div className="work">
              <Link href="https://lims.dftqc.gov.np/" target="blank">
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
                <p className="aName">Software, Devlopment</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;
