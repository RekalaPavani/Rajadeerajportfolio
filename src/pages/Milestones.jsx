import React, { useEffect, useState } from "react";
import "./Milestones.css";

const milestonesData = [
  { number: 10, label: "RECOGNITIONS" },
  { number: 18, label: "SKILLS" },
  { number: 21, label: "PROJECTS" },
  { number: 33, label: "CLIENTS" },
  { number: 99, label: "ESTEEM" }, // added extra circle
];

const Milestones = () => {
  const [counts, setCounts] = useState(milestonesData.map(() => 0));

  useEffect(() => {
    const intervals = milestonesData.map((item, index) => {
      return setInterval(() => {
        setCounts((prevCounts) => {
          const newCounts = [...prevCounts];
          if (newCounts[index] < item.number) {
            newCounts[index] += 1;
          }
          return newCounts;
        });
      }, 80); // speed of counting
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
      <div className="milestones">
      <h1 className="milestones-heading">MILESTONES</h1>
      <div className="milestones-container">
        {milestonesData.map((item, index) => (
          <div className="circle" key={index}>
            <h2>{counts[index]}+</h2>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </div>

  );
};

export default Milestones;
