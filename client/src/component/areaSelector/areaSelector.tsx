import React, {FunctionComponent} from 'react';
import {Query, QueryResult} from 'react-apollo'
import {OptionType, Response} from "./model"
import {AREAS_QUERY} from "./query"
import './style.scss'
import Select, {ValueType} from "react-select";

type AreaListProps = {
    handleIdChange: (newId: number) => void;
    defaultId: number
}

export const AreaSelector: FunctionComponent<AreaListProps> = ({handleIdChange, defaultId}) => (
    <Query<Response> query={AREAS_QUERY}>
        {({loading, error, data}: QueryResult<Response, Record<number, string>>): JSX.Element => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error! {error.message}</p>;

            const {areas} = data || {areas: null};
            const options: Array<OptionType> = !!areas
                ? areas.map((area) => (({value: area.id.toString(), label: area.name})))
                : [];
            const defaultValue = options.find(o => o.value === defaultId.toString());

            return (
                <div className='areaSelector'>
                    <Select
                        className="selector"
                        defaultValue={defaultValue}
                        options={options}
                        onChange={(option: ValueType<OptionType>) =>
                            handleIdChange(parseInt((option as OptionType).value))}/>
                </div>
            );
        }}
    </Query>
);