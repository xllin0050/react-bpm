export default function PitchNameInput({
  pitchNamechanged,
}: {
  pitchNamechanged: (pitchName: string) => void;
}) {
  const pitchNames = [
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "G#",
    "A",
    "A#",
    "B",
  ];

  const pitchNamesOptions = pitchNames.map((pitchName, idx) => {
    return (
      <option value={pitchName} key={idx}>
        {pitchName}
      </option>
    );
  });
  return (
    <div style={{ padding: "1em 0 0" }}>
      <select
        onChange={(e) => {
          pitchNamechanged(e.target.value);
        }}
      >
        {pitchNamesOptions}
      </select>
    </div>
  );
}
