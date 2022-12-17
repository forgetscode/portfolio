import React from 'react';

import Image from 'next/image'
import IconLink from './IconLink';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { useColorMode } from '../context/ColorModeContext';
import { Tooltip, FormControlLabel, Switch } from '@mui/material';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const portrait = require('../public/portrait.png');


interface pageProps {
    title:string,
}

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const SideHeader: React.FC<pageProps> = ({title}) => {
    const { mode, toggleColorMode } = useColorMode()
    
    return(
        <div className={`${mode === "dark" ? 'dark' : ''}`}>
            
            <Tooltip title="Theme" placement="right">
                <div className="absolute z-10 right-2">
                    <FormControlLabel
                        control ={<Switch {...label} defaultChecked onChange={() => toggleColorMode()} />}
                        label = {mode ==="dark" ? <DarkModeIcon className='text-white'/> : <WbSunnyIcon className='text-black'/>}
                    />
                </div>
            </Tooltip>

            <div className='pt-8 flex'>
                <div className='w-full flex flex-col justify-center items-center space-y-6'>
                    <div className='relative h-32 w-32 rounded-full border-4 border-gray-400'>
                            <Image
                                className="rounded-full transition-all"
                                src={portrait}
                                alt=""
                                fill
                                priority
                            />
                    </div>
                    <p className='header-text'>
                        {title}
                    </p>
                    <span className='flex flex-row space-x-3 justify-center pb-1'>
                        <IconLink
                            link={"https://www.youtube.com/channel/UCrKtXjuk-JANccPjEu4cxwQ"}
                            icon={<YouTubeIcon className="h-5 w-5"/>}
                            title={"Youtube"}
                        />
                        <IconLink
                            link={"https://www.youtube.com/channel/UCrKtXjuk-JANccPjEu4cxwQ"}
                            icon={<YouTubeIcon className="h-5 w-5"/>}
                            title={"Youtube"}
                        />
                        <IconLink
                            link={"https://www.youtube.com/channel/UCrKtXjuk-JANccPjEu4cxwQ"}
                            icon={<YouTubeIcon className="h-5 w-5"/>}
                            title={"Youtube"}
                        />
                        <IconLink
                            link={"https://www.youtube.com/channel/UCrKtXjuk-JANccPjEu4cxwQ"}
                            icon={<YouTubeIcon className="h-5 w-5"/>}
                            title={"Youtube"}
                        />
                    </span>
                </div>
            </div>
        </div>
    );
};

export default SideHeader;