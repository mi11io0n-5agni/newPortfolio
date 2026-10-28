import { useState } from "react";
import { siteMeta } from "../../data/site";
import "./ProfileImage.css";

function getInitials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

export default function ProfileImage({ className = "", size = "md", priority = false }) {
  const [failed, setFailed] = useState(false);
  const src = siteMeta.profileImage;
  const showPhoto = Boolean(src) && !failed;

  if (showPhoto) {
    return (
      <img
        className={`profile-image profile-image--${size} ${className}`.trim()}
        src={src}
        alt={`${siteMeta.name} profile photo`}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        onError={() => setFailed(true)}
      />
    );
  }

  return (
    <div
      className={`profile-image profile-image--fallback profile-image--${size} ${className}`.trim()}
      role="img"
      aria-label={`${siteMeta.name} profile placeholder`}
    >
      <span aria-hidden="true">{getInitials(siteMeta.name)}</span>
      {!src && (
        <span className="profile-image__hint">Add photo at public/profile.jpg</span>
      )}
    </div>
  );
}
