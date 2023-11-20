import * as React from 'react';
import CardItem from './CardItem';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import listData from './listdata.json'
export default function ChecklistForm () {
    return (
        <div>
            <h2>Watch Checklist</h2>
            <Stack
                direction="column"
                divider={<Divider orientation="vertical" flexItem />}
                spacing={1.5}
            >
                <CardItem 
                    system={listData.cyber_Security.name}
                    device={"IPS & Firewall Security Events Log"} 
                    normalStatus={"Antivirus Log no results"}

                />
                <CardItem/>
                <CardItem/>
                
            </Stack>
        </div>
    );
}

