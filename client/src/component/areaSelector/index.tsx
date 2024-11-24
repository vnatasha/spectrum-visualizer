import React, { FunctionComponent } from 'react';
import { useGetAreasQuery } from '../../generated/graphql';
import './style.scss';
import Select, { SingleValue } from 'react-select';
import { LoadingErrorHandler } from '../loadingErrorHandler'; 

type AreaListProps = {
    handleIdChange: (newId: number) => void;
    selectedId: number;
  };

export const AreaSelector: FunctionComponent<AreaListProps> = ({ handleIdChange, selectedId }) => {
    const { loading, error, data } = useGetAreasQuery();

    const areas = data?.areas?.filter((area) => area !== null) || [];
    const options = areas.map((area) => ({
        value: area!.id.toString(),
        label: area!.name,
    }));
    const selectedOption = options.find((o) => o.value === selectedId.toString());

    return (
        <LoadingErrorHandler loading={loading} error={error}>
            <div className="areaSelector">
                <Select
                    className="selector"
                    value={selectedOption}
                    options={options}
                    onChange={(option: SingleValue<{ value: string; label: string }>) =>
                    handleIdChange(parseInt((option as { value: string; label: string }).value))
                    }
                />
            </div>
        </LoadingErrorHandler>
    );
};
