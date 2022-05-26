import React, { useState, useEffect } from "react";

import PieChart, {
  Series,
  Label,
  Connector,
  SmallValuesGrouping,
  Legend,
  Font,
  Title,
} from "devextreme-react/pie-chart";

import { areas } from "./Data";

function Pie() {
  const [hpos, setHPos] = useState("center");
  const [vpos, setVPos] = useState("top");
  useEffect(() => {
    if (window.innerWidth > 800) {
      setVPos("top");
      setHPos("left");
    }
  });
  return (
    <PieChart
      dataSource={areas}
      palette="Bright"
 
      className="pie"
    >
        
        <Title text="Task Tokenomics" subtitle="$task" >   <Font weight='bold' size={20} /></Title>
      <Series argumentField="country" valueField="area">
        <Label visible={true} customizeText={formatLabel} format="fixedPoint">
          <Connector visible={true} width={0.5} />
        </Label>
        <SmallValuesGrouping threshold={4.5} mode="smallValueThreshold" />
      </Series>

      <Legend verticalAlignment={'top'} horizontalAlignment={'center'} />
    </PieChart>
  );
}

function formatLabel(arg) {
  return `${arg.argumentText}: ${arg.valueText}%`;
}

export default Pie;
