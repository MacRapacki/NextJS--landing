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
          <Image src={Slack} />
        </div>
        <div className={style.imgControl}>
          <Image src={Netflix} />
        </div>
        <div className={style.imgControl}>
          <Image src={Fitbit} />
        </div>
        <div className={style.imgControl}>
          <Image src={Google} />
        </div>
        <div className={style.imgControl}>
          <Image src={Airbnb} />
        </div>
        <div className={style.imgControl}>
          <Image src={Uber} />
        </div>
      </div>
    </section>
  );
}
