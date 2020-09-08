import React from "react";
import Chart from "react-apexcharts";

export default function Charts() {
  const [state, setState] = React.useState({
    options: {
      chart: {
        type: "candlestick"
      }
    },
    series: [
      {
        data: [
          [1, [6593.34, 6600, 6582.63, 6600]],
          [2, [6593.34, 6600, 6582.63, 6600]],
          [3, [6593.34, 6600, 6582.63, 6600]],
          [4, [6593.34, 6600, 6582.63, 6600]],
          [5, [6593.34, 6600, 6582.63, 6600]],
          [6, [6593.34, 6600, 6582.63, 6600]],
          [7, [6595.16, 6604.76, 6590.73, 6593.86]]
        ]
      }
    ]
  });
  const candlestick = (
    <div>
      <Chart
        options={state.options}
        series={state.series}
        type="candlestick"
        width="500"
      />
    </div>
  );

  return <div>{candlestick}</div>;
}
