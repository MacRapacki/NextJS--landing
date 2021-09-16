import Image from "next/dist/client/image";

import CheckIcon from "../../images/Icon-check.svg";
import ArrowIcon from "../../images/arrow-right.png";
import ArrowIconSec from "../../images/arrow-right-sec.png";

import style from "./EventInfo.module.css";

export default function EventInfo({
  eventTitle,
  eventSubtitle,
  buttonText,
  secondary,
}) {
  return (
    <div className={style.eventOverlay}>
      <button className={`${style.button} ${secondary && style.secondary}`}>
        {buttonText}
        <div className={style.arrowOverlay}>
          <Image src={secondary ? ArrowIconSec : ArrowIcon} />
        </div>
      </button>
      <Image src={CheckIcon} alt="check icon" width={24} height={24} />
      <p className={style.eventTitle}>{eventTitle}</p>
      <p className={style.eventSubtitle}>{eventSubtitle}</p>
    </div>
  );
}
