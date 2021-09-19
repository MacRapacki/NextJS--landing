import Image from "next/dist/client/image";

import style from "./SponsorsSection.module.css";

import Slack from "../../images/sponsors/slackslack.png";
import Netflix from "../../images/sponsors/netflix.png";
import Fitbit from "../../images/sponsors/fitbit.png";
import Google from "../../images/sponsors/google.png";
import Airbnb from "../../images/sponsors/airbnb.png";
import Uber from "../../images/sponsors/uber.png";

export default function SponsorsSection() {
  return (
    <section className={style.section}>
      <h2 className={style.sectionTitle}>
        Sponsors of TheFutureTalks Conference
      </h2>
      <div className={style.imgContainer}>
        <div className={style.imgControl}>
          <Image src={Slack} alt="slack logo" />
        </div>
        <div className={style.imgControl}>
          <Image src={Netflix} alt="netflix logo" />
        </div>
        <div className={style.imgControl}>
          <Image src={Fitbit} alt="fitbit logo" />
        </div>
        <div className={style.imgControl}>
          <Image src={Google} alt="google logo" />
        </div>
        <div className={style.imgControl}>
          <Image src={Airbnb} alt="airbnb logo" />
        </div>
        <div className={style.imgControl}>
          <Image src={Uber} alt="uber logo" />
        </div>
      </div>
    </section>
  );
}
