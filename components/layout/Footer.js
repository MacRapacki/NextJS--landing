// import Image from "next/image";
// import MediaQuery from "react-responsive";

// import Wave from "../../images/Wave.svg";
// import WaveDesktop from "../../images/Wave-desktop.svg";

import style from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={style.footer}>
      {/* <MediaQuery minWidth={500}>
        {(matches) =>
          matches ? (
            <Image src={WaveDesktop} alt="wave" layout="responsive" />
          ) : (
            <Image src={Wave} alt="wave" layout="responsive" />
          )
        }
      </MediaQuery> */}
    </footer>
  );
}
