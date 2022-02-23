import React, { memo, useEffect, useMemo, useReducer, useState } from "react";
import * as echarts from "echarts/core";
import {
  ToolboxComponent,
  LegendComponent,
  TitleComponent,
} from "echarts/components";
import { PieChart } from "echarts/charts";
import { LabelLayout } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";

import { ChartWrapper } from "./style";

export default memo(function Chart() {
  echarts.use([
    ToolboxComponent,
    LegendComponent,
    TitleComponent,
    PieChart,
    CanvasRenderer,
    LabelLayout,
  ]);

  //   获取图表
  const getChart = (data, container) => {
    var chartDom = document.getElementById(container);
    var myChart = echarts.init(chartDom);
    var option;

    option = {
      title: {
        text: "学生测试评级情况",
        left: "center",
      },
      legend: {
        top: "bottom",
      },
      series: [
        {
          name: "学生测试情况",
          type: "pie",
          radius: [30, 150],
          center: ["50%", "50%"],
          roseType: "area",
          itemStyle: {
            borderRadius: 8,
          },
          data: data,
        },
      ],
    };

    option && myChart.setOption(option);
  };
  useEffect(() => {
    //   放获取到的数据
    let chartData = [];
    //模拟发送请求
    let time = setTimeout(() => {
      chartData = [
        { value: 40, name: "A" },
        { value: 38, name: "B" },
        { value: 32, name: "C" },
        { value: 30, name: "D" },
        { value: 28, name: "E" },
        { value: 26, name: "F" },
      ];
      getChart(chartData, "main");
    }, 100);
    return () => {
        clearTimeout(time);
    }
  }, []);
  return (
    <ChartWrapper>
      <div id="main"></div>
    </ChartWrapper>
  );
});
