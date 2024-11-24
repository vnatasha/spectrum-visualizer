import React, { FunctionComponent } from 'react';
import { useGetSpectrumQuery } from '../../generated/graphql';
import { LineChart } from '../lineChart';
import './style.scss';
import { LoadingErrorHandler } from '../loadingErrorHandler'; 

type SpectrumProps = {
    id: number;
};

export interface Coordinate {
    x: number;
    y: number;
}

export const Spectrum: FunctionComponent<SpectrumProps> = ({ id }) => {
    const { loading, error, data } = useGetSpectrumQuery({ variables: { id: id.toString() } });

    const spectrum = (data?.spectrum?.filter((coordinate) => coordinate !== null) || []) as Coordinate[];

    return (
        <LoadingErrorHandler loading={loading} error={error}>
            <div className="chart">
                <LineChart coordinates={spectrum} />
            </div>
        </LoadingErrorHandler>
    );
};
