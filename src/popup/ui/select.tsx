import { Checkbox, Switch, Tooltip } from '@mantine/core';
import { randomId, useListState } from '@mantine/hooks';
import React, { useEffect } from "react";
import { instances } from "../../inject/solutions/solutions";
import { SelectStorage } from "../storage/select_storage";


const select_storage = new SelectStorage();


export function Select() {
    let initialValues: { [id: string]: any }[] = [];
    instances.map((instance) => {
        initialValues.push({
            display_name: instance.display_name,
            description: instance.description,
            smash_tag: instance.smash_tag,
            checked: false,
            key: randomId(),
        });
    });

    const [values, handlers] = useListState(initialValues);
    useEffect(() => {
        select_storage.getState((state) => {
            handlers.setState((current) =>
                current.map((value) => ({ ...value, checked: state[value.smash_tag] }))
            );
        });
    }, []);

    useEffect(() => {
        let new_state: { [id: string]: boolean } = {}
        values.forEach((value) => {
            new_state[value.smash_tag] = value.checked;
        });

        select_storage.setState(new_state);
    }, [values]);

    const allChecked = values.every((value) => value.checked);
    const indeterminate = values.some((value) => value.checked) && !allChecked;

    const items = values.map((value, index) => (
        <Tooltip
            wrapLines
            width={220}
            withArrow
            transition="fade"
            transitionDuration={200}
            placement="center"
            position="top"
            label={value.description}
        >
            <Checkbox
                mt="xs"
                ml={33}
                label={value.display_name}
                key={value.key}
                checked={value.checked}
                onChange={(event) => handlers.setItemProp(index, 'checked', event.currentTarget.checked)}
            />
        </Tooltip>
    ));

    return (
        <>
            <Checkbox
                checked={allChecked}
                indeterminate={indeterminate}
                label="All exercices"
                transitionDuration={0}
                onChange={() =>
                    handlers.setState((current) =>
                        current.map((value) => ({ ...value, checked: !allChecked }))
                    )
                }
            />
            {items}
        </>
    );
}