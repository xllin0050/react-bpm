export default function TempoInput({
  tempochanged,
  currentTempo = 120,
}: {
  tempochanged: (tempo: number) => void;
  currentTempo: number;
}) {
  return (
    <div>
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
