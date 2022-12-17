import { Tooltip } from '@mui/material';
import Link from 'next/link';
import * as React from 'react';
import { useColorMode } from '../context/ColorModeContext';

interface pageProps {
    icon: React.ReactElement<any, any>,
    link: string
    title: string,
}

const IconLink: React.FC<pageProps> = ({title, icon, link}) => {
    const { mode } = useColorMode()
    return(
        <div className={`${mode === "dark" ? 'dark' : ''}`}>
            <Link href={link} target="_blank">
                <Tooltip title={title}>
                    <span className='bg-gray-600 dark:bg-gray-900 hover:bg-sky-300 dark:hover:bg-sky-600 text-white rounded-full h-10 w-10 text-sm p-2  flex items-center justify-center'>
                        {icon}
                    </span>
                </Tooltip>
            </Link>
        </div>
    );
};

export default IconLink;