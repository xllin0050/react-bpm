"use client";

import BeatsTable from "@/components/BeatsTable";
import { useEffect, useState } from "react";
import TempoInput from "../components/TempoInput";
import styles from "./page.module.css";

export default function Home() {
  const [tempo, setTempo] = useState(120);
  const [qNoteLengthMs, setQNoteLengthMs] = useState(0);

  useEffect(() => {
    const minute = 60 * 1000;
    const quarterNote: number = minute / tempo;
    setQNoteLengthMs(quarterNote);
  }, [tempo]);

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        enter your <span style={{ textTransform: "uppercase" }}>bpm</span>
      </div>
      <div className={styles.center}>
        <TempoInput
          currentTempo={tempo}
          tempochanged={(v: number) => {
            setTempo(v);
          }}
        />
        <div className={styles.inputTitle}>
          <span style={{ textTransform: "uppercase" }}>bpm</span>
          <span>&#65072;</span>
          {tempo}
        </div>
      </div>
      <BeatsTable qNoteLengthMs={qNoteLengthMs} />
    </main>
  );
}
