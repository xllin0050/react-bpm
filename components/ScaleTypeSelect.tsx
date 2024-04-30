export default function ScaleTypeSelect({
  scaleTypeChanged,
  scaleType,
}: {
  scaleTypeChanged: (scaleType: string) => void;
  scaleType: string;
}) {
  const scaleTypes = ["major", "minor"].map((type, idx) => {
    return (
      <div key={idx} style={{ padding: "1em" }}>
        <label>
          <input
            type="radio"
            value={type}
            checked={scaleType === type}
            onChange={(e) => scaleTypeChanged(e.target.value)}
          />
          <span
            style={{ textTransform: "uppercase", padding: "1em 0.5em 1em" }}
          >
            {type}
          </span>
        </label>
      </div>
    );
  });

  return <div style={{ display: "flex" }}>{scaleTypes}</div>;
}
