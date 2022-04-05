import { Grid } from '@mantine/core';
import React from "react";

export function AppHeader() {
    return (
        <Grid>
            <Grid.Col span={1}>Icon</Grid.Col>
            <Grid.Col span={3}>Smash the Education</Grid.Col>
        </Grid>
    );
}