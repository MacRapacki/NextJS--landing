import styles from "../styles/Home.module.css";

import Header from "../components/header/Header";
import SponsorsSection from "../components/sponsorsSection/SponsorsSection";
import SpeakersSection from "../components/speakersSection/SpeakersSection";

export default function Home() {
  return (
    <>
      <Header />
      <SponsorsSection />
      <SpeakersSection />
    </>
  );
}
