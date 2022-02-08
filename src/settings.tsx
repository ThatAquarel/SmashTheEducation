import SaveAltIcon from '@mui/icons-material/SaveAlt';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Tab from '@mui/material/Tab';
import * as React from 'react';
import { saveFunctionality } from './functions/save_functionality';
import { Functionality } from './settings/functionality';
import { instances } from './solutions/solutions';

export default function Settings() {
    const [value, setValue] = React.useState('1');
    const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    const [disabled, setDisabled] = React.useState(true);
    const [functionality, setFunctionality] = React.useState(Array(instances.length).fill(true));

    const onModifyFunctionality = (states: Boolean[]) => {
        setFunctionality(states);
        setDisabled(false);
    }

    const onSaveFunctionality = (_event: React.MouseEvent<HTMLElement>) => {
        console.log(functionality);

        saveFunctionality(functionality);
        setDisabled(true);
    }

    return (
        <div>
            <TabContext value={value} >
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="Functionality" value="1" />
                        <Tab label="Appearance" value="2" />
                    </TabList>
                </Box>
                <TabPanel value="1" sx={{ padding: "10px 10px 0px 10px" }}>
                    <Functionality onModify={onModifyFunctionality} />
                </TabPanel>
                <TabPanel value="2" sx={{ padding: "10px" }}>
                    Not yet implemented
                </TabPanel>
            </TabContext>
            <div style={{ paddingBottom: "10px" }}>
                <Button variant="outlined" startIcon={<SaveAltIcon />} disabled={disabled}
                    onClick={onSaveFunctionality}>
                    Save
                </Button>
            </div>
        </div >
    );
}