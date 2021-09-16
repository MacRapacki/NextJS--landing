import style from "./SpeakerInfo.module.css";

import Image from "next/image";

import CheckIcon from "../../images/speakers/checkicon.svg";

export default function SpeakerInfo({ image, name, info1, info2, second }) {
  return (
    <div className={style.speakerCard} style={second && { marginTop: "40px" }}>
      <div className={style.imageWrapper}>
        <Image src={image} alt="speaker image" />
      </div>

      <h4 className={style.speakerName}>{name}</h4>
      <p className={style.speakerInfo}>
        <span className={style.checkIcon}>
          <Image src={CheckIcon} alt="check icon" />
        </span>
        {info1}
      </p>
      <p className={style.speakerInfo}>
        <span className={style.checkIcon}>
          <Image src={CheckIcon} alt="check icon" />
        </span>
        {info2}
      </p>
    </div>
  );
}
