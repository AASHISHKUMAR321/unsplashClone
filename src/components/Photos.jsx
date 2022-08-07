import React from "react";

export const Photos = ({ photo }) => {
  const { user, urls } = photo;
  return (
    <div>
      <img className="img" src={urls.small} />
      <a
        className="credit"
        target="_blank"
        href={`https://unsplash.com/@${user.username}`}
      >
        {/* {user.name} */}
      </a>
    </div>
  );
};
