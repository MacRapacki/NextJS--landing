import Image from "next/image";

import HeroImg from "../../images/hero.png";

import style from "./Header.module.css";

import EventInfo from "../EventInfo/EventInfo";

export default function Header() {
  return (
    <header className={style.header}>
      <div className={style.headerImage}>
        <Image src={HeroImg} />
      </div>
      <div className={style.headerContent}>
        <h1 className={style.title}>TheFutureTalks Conference</h1>
        <p className={style.subtitle}>
          Event madness gathering innovators, startups {`&`} tech enthusiasts in
          Special Region of Yogyakarta
        </p>
        <EventInfo
          eventTitle="18 November 2019"
          eventSubtitle="25+ top notch 
speakers @ Sebostudio
Gallery Kreavi"
          buttonText="Conference"
          secondary=""
        />
        <EventInfo
          eventTitle="100+ startups"
          eventSubtitle="Top 8 startups competing
          in final @ TheFutureTalks
          Conference 2019"
          buttonText="Startup Awards"
          secondary=" secondary"
        />
      </div>
    </header>
  );
}
