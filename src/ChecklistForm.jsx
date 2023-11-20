import * as React from 'react';
import CardItem from './CardItem';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
export default function ChecklistForm () {
    return (
        <div>
            <h2>Watch Checklist</h2>
            <Stack
                direction="column"
                divider={<Divider orientation="vertical" flexItem />}
                spacing={1.5}
            >
                <CardItem/>
                <CardItem/>
                <CardItem/>
                
            </Stack>
        </div>
    );
}

