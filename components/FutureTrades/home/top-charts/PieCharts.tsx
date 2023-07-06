import React from "react";
import { ResponsiveContainer, PieChart, Pie, Cell, Label } from "recharts";
const data02 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
];
const COLORS = ["#f6465d", "#0ecb81"];
export default function PieCharts() {
  return (
    <div
      className="bg-card-primary-clr"
      style={{ height: "224px", borderRadius: "8px" }}
    >
      <div className="p-3">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <span className="text-12">
              Long/Short Ratio{" "}
              <span
                className="ml-1 px-1 rounded"
                style={{ color: "#F0B90B", background: "#3C2601" }}
              >
                1h
              </span>
            </span>
            <div className="d-flex align-items-center">
              <h5 className="text-14">BTCUSDT</h5>
              <span className="text-12">Perpetual</span>
            </div>
          </div>
        </div>

        <div className="row pt-3">
          <div className="col-6 pl-3 pr-1">
            <div>
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  background: "#F6465D",
                  display: "inline-block",
                  marginRight: "6px",
                }}
              ></span>
              <span className="text-12">Short Account%</span>
              <h5 className="text-16" style={{ marginLeft: "12px" }}>65.4%</h5>
            </div>
            <div>
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  background: "#0ECB81",
                  display: "inline-block",
                  marginRight: "6px",
                }}
              ></span>
              <span className="text-12">Long Account%</span>
              <h5 className="text-16" style={{ marginLeft: "12px" }}>
                34.6%
              </h5>
            </div>
            <div>
              <span className="text-12" style={{ marginLeft: "12px" }}>
                Long/Short Ratio%
              </span>
              <h5 className="text-16" style={{ marginLeft: "12px" }}>
                0.94
              </h5>
            </div>
          </div>
          <div className="col-6 px-1 d-flex align-items-center">
            <div style={{ width: "100%", height: 100 }}>
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={data02}
                    innerRadius={30}
                    outerRadius={50}
                    dataKey="value"
                    stroke="none"
                  >
                    {data02.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                    <Label value={0.94} position="center" />
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
