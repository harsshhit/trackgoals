import React from "react";

interface ProgressData {
  date: string;
  percentage: number;
}

interface ProgressGraphProps {
  data: ProgressData[];
}

const ProgressGraph: React.FC<ProgressGraphProps> = ({ data }) => {
  // Find the maximum percentage to determine the scale of the y-axis
  const maxPercentage = Math.max(...data.map((item) => item.percentage));

  return (
    <div style={{ display: "flex" }}>
      {data.map((item) => (
        <div key={item.date} style={{ marginRight: "20px" }}>
          <div
            style={{
              width: "20px",
              height: "200px",
              border: "1px solid black",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                bottom: 0,
                width: "100%",
                backgroundColor: "green",
                height: `${(item.percentage / maxPercentage) * 100}%`,
              }}
            ></div>
          </div>
          <p style={{ textAlign: "center" }}>{item.date}</p>
        </div>
      ))}
    </div>
  );
};

export default ProgressGraph;
