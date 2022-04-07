import { SegmentedControl } from '@mantine/core';
import React, { useEffect, useState } from "react";
import { ConfigStorage } from '../storage/config_storage';

const config_storage = new ConfigStorage();

export function Config() {
    const [value, setValue] = useState('react');

    useEffect(() => {
        config_storage.getState((state) => { setValue(state.config); });
    }, []);

    useEffect(() => {
        config_storage.setState({ config: value });
    }, [value]);

    return (
        <div>
            <SegmentedControl
                fullWidth
                value={value}
                onChange={setValue}
                data={[
                    { label: 'Auto', value: 'auto' },
                    { label: 'Hint', value: 'hint' },
                    { label: 'Off', value: 'off' },
                ]}
            />
        </div>
    );
}