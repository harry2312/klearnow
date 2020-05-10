import React from "react";

export default function MiniTab(props) {
  const linkArray = ["All", "Watched"];
  const { active, setActive } = props;

  return (
    <div className="space">
      <div className="tab">
        {linkArray.map((v, i) => (
          <button
            key={i}
            className={active == i ? "tablinks active" : "tablinks"}
            onClick={() => setActive(i)}
          >
            {v}
          </button>
        ))}
      </div>
    </div>
  );
}
