import "./BackgroundEffects.css";

export default function BackgroundEffects() {
  return (
    <div className="bg-effects" aria-hidden="true">
      <div className="bg-effects__grid" />
      <div className="bg-effects__orb bg-effects__orb--green" />
      <div className="bg-effects__orb bg-effects__orb--blue" />
    </div>
  );
}
