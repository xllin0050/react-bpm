export default function ScaleTypeSelect({
  scaleTypeChanged,
  scaleType,
}: {
  scaleTypeChanged: (scaleType: string) => void;
  scaleType: string;
}) {
  const scaleTypes = ["major", "minor"].map((type, idx) => {
    return (
      <div key={idx}>
        <label>
          <input
            type="radio"
            value={type}
            checked={scaleType === type}
            onChange={(e) => scaleTypeChanged(e.target.value)}
          />

          {type}
        </label>
      </div>
    );
  });

  return <div>{scaleTypes}</div>;
}
