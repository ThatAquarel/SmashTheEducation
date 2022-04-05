import { Grid, Avatar, Badge, Stack, Title, Box } from '@mantine/core';
import React from "react";

export function AppHeader() {
    return (
        <Grid grow columns={6}>
            <Grid.Col span={1}>
                <Avatar color="cyan" radius="xl">AAA</Avatar>
            </Grid.Col>
            <Grid.Col span={3}>
                <Stack spacing="xs">
                    <Title order={2}>Smash the</Title>
                    <Title order={1}>Education</Title>
                </Stack>
            </Grid.Col>
            <Grid.Col span={1}>
                <Stack spacing="xs">
                    <Badge variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>
                        2022.04
                    </Badge>
                    <Badge variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 105 }}>
                        active
                    </Badge>
                </Stack>
            </Grid.Col>
        </Grid>
    );
}