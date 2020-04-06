import * as Highcharts from "highcharts";

export const highChartOptions: Highcharts.Options = {
    title:{
        text:''
    },
    plotOptions:{
        series:{
            turboThreshold: 10000
        }
    },
    legend: {
        enabled: false
    },
    xAxis: {
        title: {
            text: 'Frequency'
        },
        gridLineWidth: 1,
        crosshair: true
    },
    yAxis: {
        title: {
            text: 'Signal intensity'
        },
        gridLineWidth: 2,
        crosshair: true
    },
    tooltip: {
        enabled: false
    }
};