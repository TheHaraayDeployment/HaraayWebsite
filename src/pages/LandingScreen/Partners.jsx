import React from "react";

import styles from "../styles/Partners.module.scss";

import AkoyaLOGO from "../../assets/Logo/LOGO Akoya.png";
import BakersLOGO from "../../assets/Logo/LOGO Bakers.png";
import BoschLOGO from "../../assets/Logo/LOGO Bosch.png";
import EdynamicsLOGO from "../../assets/Logo/LOGO Edynamics.png";
import MittalLOGO from "../../assets/Logo/LOGO Mittal.png";
import PurusLOGO from "../../assets/Logo/LOGO Purus.png";
import SamrudhaLOGO from "../../assets/Logo/LOGO Samruddh.png";
import SunLOGO from "../../assets/Logo/LOGO Sun.png";
import ViratLOGO from "../../assets/Logo/LOGO Virat.png";
import OtherLOGO from "../../assets/Logo/LOGO h.png";

const partnerImages = [
  { logo: AkoyaLOGO, name: "Akoya" },
  { logo: BakersLOGO, name: "Bakers" },
  { logo: BoschLOGO, name: "Bosch" },
  { logo: EdynamicsLOGO, name: "Edynamics" },
  { logo: MittalLOGO, name: "Mittal" },
  { logo: PurusLOGO, name: "Purus" },
  { logo: SamrudhaLOGO, name: "Samrudha" },
  { logo: SunLOGO, name: "Sun" },
  { logo: ViratLOGO, name: "Virat" },
  { logo: OtherLOGO, name: "Other" },
];

const Partners = () => {
  return (
    <section data-aos="fade-up" className={styles.partners}>
      <div className={styles.partnrshead}>
        <h1>Our Partners</h1>
        <p>
          From champions to challengers, our clients have creative courage in
          common.
        </p>
      </div>

      <div data-aos="fade-up" className={styles.partnerGrid}>
        {partnerImages.map(({ logo, name }, i) => (
          <div key={i} className={styles.partnerCell}>
            <img
              src={logo}
              alt={name}
              className={styles.partnerLogo}
              draggable="false"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;
