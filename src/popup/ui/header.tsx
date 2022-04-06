import { Badge, Box, Grid, Stack, Text, Title } from '@mantine/core';
import React from "react";

export function AppHeader() {
    return (
        <Box>
            <Grid grow columns={4} gutter="xs">
                <Grid.Col span={3}>
                    <Stack spacing="xs" style={{
                        marginLeft: "6px"
                    }}>
                        <Text size="xl" weight={400}
                            style={{
                                marginTop: "-3px",
                            }}>
                            Smash the
                        </Text>
                        <Title order={1} style={
                            {
                                marginTop: "-26px",
                            }}
                        >
                            Education
                        </Title>
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
        </Box>
    );
}