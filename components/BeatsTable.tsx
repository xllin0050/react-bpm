import styles from "./BeatsTable.module.css";

export default function BeatsTable({
  qNoteLengthMs,
}: {
  qNoteLengthMs: number;
}) {
  const beats = ["1/4", "1/8", "1/16", "1/32", "1/64", "1/128"];
  const list = beats.map((beat, idx) => {
    return (
      <div className={styles.beat} key={idx}>
        <div className={styles.beatLength}>{beat}</div>
        <div className={styles.beatMs}>
          {(qNoteLengthMs / Math.pow(2, idx)).toFixed(1)} <span>ms</span>
        </div>
      </div>
    );
  });
  return <div className={styles.wrap}>{list}</div>;
}
