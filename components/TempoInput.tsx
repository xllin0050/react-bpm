import styles from "./TempoInput.module.css";

export default function TempoInput({
  tempochanged,
  currentTempo = 120,
}: {
  tempochanged: (tempo: number) => void;
  currentTempo: number;
}) {
  return (
    <div className={styles.wrap}>
      <input
        type="number"
        value={currentTempo}
        min="1"
        max="300"
        onChange={(e) => {
          if (Number(e.target.value) > 0) tempochanged(Number(e.target.value));
        }}
      />
    </div>
  );
}
