import style from "./SpeakersSection.module.css";

import SpeakerInfo from "../speakerInfo/SpeakerInfo";

import Claudio from "../../images/speakers/Claudio.png";
import Elise from "../../images/speakers/Elise.png";
import Philip from "../../images/speakers/Philip.png";
import Angela from "../../images/speakers/Angela.png";

export default function SpeakersSection() {
  return (
    <section className={style.section}>
      <div className={style.overlay}>
        <div className={style.badge}>SPEAKERS</div>

        <h3 className={style.header}>TheFutureTalks Speakers</h3>

        <div className={style.speakersInfoWrapper}>
          <SpeakerInfo
            image={Claudio}
            name="Claudio Giglieri"
            info1="Co-creator of Skype"
            info2="Investor at Sebo Digital Ventures"
          />

          <SpeakerInfo
            image={Elise}
            name="Elise Mendoza"
            info1="VP of BukaDagang"
            info2="Co-founder at Slack"
            second={true}
          />

          <SpeakerInfo
            image={Philip}
            name="Philip Castro"
            info1="CEO at Berkarya"
            info2="Investor at Sebo Digital Ventures"
          />

          <SpeakerInfo
            image={Angela}
            name="Carrie Angela"
            info1="Founder of Nike"
            info2="Investor at BukaDagang"
            second={true}
            last={true}
          />
        </div>
      </div>
    </section>
  );
}
