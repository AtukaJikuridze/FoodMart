import React from "react";

export default function Tag(props: { title: string }) {
  return (
    <div className="tag">
      <p>{props.title}</p>
    </div>
  );
}
