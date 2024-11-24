import React, { FunctionComponent } from "react";
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Coordinate } from "../spectrum";
import { highChartOptions } from "./options";

interface LineChartProps {
    coordinates: Coordinate[] | null;
}

export const LineChart: FunctionComponent<LineChartProps> = ({ coordinates }) => {
    const seriesOptions: Highcharts.Options = {
        series: [{
            type: 'line',
            data: coordinates || [],
        }],
    };

    const options = { ...highChartOptions, ...seriesOptions };

    return (
        <HighchartsReact
            highcharts={Highcharts}
            options={options}
        />
    );
};