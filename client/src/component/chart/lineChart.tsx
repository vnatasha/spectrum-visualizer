import React, {FunctionComponent} from "react";
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import {Coordinate} from "../spectrum/model";
import {highChartOptions} from "./options";

interface LineChartProps {
  coordinates: Array<Coordinate> | null;
}

export const LineChart: FunctionComponent<LineChartProps> = (props ) => {
    const seriesOptions: Highcharts.Options = {
        series: [{
            type: 'line',
            data: props.coordinates || []
        }]
    };
    const options = {...highChartOptions, ...seriesOptions};

    return (
        <HighchartsReact
            highcharts={Highcharts}
            options={options}
        />
    )

};