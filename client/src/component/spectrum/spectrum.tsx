import { Response, Variables } from "./model";
import React, {FunctionComponent} from "react";
import {Query, QueryResult} from "react-apollo";
import {SPECTRUM_QUERY} from "./query";
import {LineChart} from "../chart/lineChart";
import './style.scss'

type SpectrumProps = {
    id: number;
}

export const Spectrum: FunctionComponent<SpectrumProps> = ({id}) => (
    <Query<Response, Variables> variables={{id}} query={SPECTRUM_QUERY} fetchPolicy={'network-only'}>
        {({loading, error, data}: QueryResult<Response, Variables>): JSX.Element => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error! {error.message}</p>;

            const {spectrum} = data || {spectrum: null};

            return (
                <div className ='chart'>
                    <LineChart coordinates={spectrum}/>
                </div>
            )
        }}
    </Query>
);