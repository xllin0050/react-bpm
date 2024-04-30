export default function NoteTable({
  pitchName,
  scaleType,
}: {
  pitchName: string;
  scaleType: string;
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
  const minorSteps = [0, 2, 3, 5, 7, 8, 10];
  const majorSteps = [0, 2, 4, 5, 7, 9, 11];
  const typeSteps = scaleType === "major" ? majorSteps : minorSteps;
  function findScale(steps: number[], targetPitchName: string) {
    const targetPitchIndex = pitchNames.indexOf(targetPitchName);
    const sortPitchNames = [
      ...pitchNames.slice(targetPitchIndex),
      ...pitchNames.slice(0, targetPitchIndex),
    ];

    const scale: string[] = [];
    for (let i = 0; i < 7; i++) {
      scale.push(sortPitchNames[steps[i]]);
    }
    return scale;
  }

  const scale = findScale(typeSteps, pitchName);
  const list = scale.map((note, idx) => {
    return (
      <div key={idx} style={{ padding: "1em", fontSize: "1.2em" }}>
        {note}
      </div>
    );
  });
  return <div style={{ display: "flex", padding: "1em" }}>{list}</div>;
}
