import { Typography } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { createTheme } from '@mui/material/styles';
import Box from '@mui/system/Box';
import * as React from 'react';
import { loadFunctionality } from '../functions/save_functionality';
import { Solution } from '../solutions/solution';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

const solutions = Solution.get_instances();

interface FunctionalityProps {
    onModify: (func_state: Boolean[]) => void
}

export function Functionality(props: FunctionalityProps) {
    const [checked_list, setChecked] = React.useState(Array(solutions.length).fill(true));

    React.useEffect(() => {
        // loadFunctionality((states) => { setChecked(states) });

        let new_functionality = Array(solutions.length);
        let calls = 0;

        solutions.map((solution, i) => {
            loadFunctionality(solution.class_name, (states) => {
                // new_functionality[i] = state;
                new_functionality[i] = states;
                calls++;

                if (calls >= new_functionality.length) {
                    setChecked(new_functionality);
                }
            });
        });
    }, []);

    const parentOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let new_checked_list = Array(checked_list.length).fill(event.target.checked);
        setChecked(new_checked_list);

        props.onModify(new_checked_list);
    }

    const childOnChangeFactory = (i: number) => {
        return (event: React.ChangeEvent<HTMLInputElement>) => {
            let new_checked_list = [...checked_list];
            new_checked_list[i] = event.target.checked;
            setChecked(new_checked_list);

            props.onModify(new_checked_list);
        }
    }

    return (
        <div>
            <FormControlLabel
                label={<Typography color="text.secondary">
                    Show all answers
                </Typography>}
                control={
                    <Checkbox
                        checked={checked_list.every((a) => a === true)}
                        indeterminate={
                            checked_list.includes(false)
                            && checked_list.includes(true)}
                        onChange={parentOnChange}
                    />}
            />
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                ml: 3,
                borderLeft: `2px solid ${darkTheme.palette.divider}`,
                marginLeft: "9px",
                paddingLeft: "20px",
                marginBottom: "10px"
            }}>
                {solutions.map(function (solution, i) {
                    return (<FormControlLabel
                        label={<Typography color="text.secondary">
                            {solution.class_name}
                        </Typography>}
                        control={
                            <Checkbox
                                checked={checked_list[i]}
                                onChange={childOnChangeFactory(i)}
                            />
                        } />)
                })}
            </Box>
        </div>
    );
}
