import { Tooltip } from '@mui/material';
import React, { ReactElement, useEffect, useRef, useState } from 'react';

import CloseIcon from '@mui/icons-material/Close';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import CopyrightOutlinedIcon from '@mui/icons-material/CopyrightOutlined';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { useScroll } from '../context/ScrollPosition';
import SideHeader from './SideHeader';
import { useColorMode } from '../context/ColorModeContext';

type Section = {
    id: string,
    icon: ReactElement<any, any>,
    title: string,
}

interface pageProps {
    title:string,
    props: Section[],
    footer: string,
}

const getOffSet = (id:string) => {
    const offset = document.getElementById(id)?.offsetTop
    return offset
}

const calculateOffSets = (idList: string[]) => {
    let offSets = []
    for (let i=0; i< idList.length; i++){
        let obj:any = {}
        obj['id'] = idList[i]
        obj['offset'] = getOffSet(idList[i])
        offSets.push(obj)
    }
    return offSets
}


const SideBar: React.FC<pageProps> = ({title, footer, props}) => {
    const [ showSideBar, setShowSideBar ] = useState<Boolean>(true);
    const [ selected, setSelected ] = useState<string>("Home")
    const { isScrolled, activeScroll } = useScroll()
    const [ active, setActive ] = useState<string>("Home")
    const { mode } = useColorMode()
    const offsets = useRef<any>()

    const updateMedia = () => {
        const slicedArr = props.map(obj => obj.id);
        const offSetValues = calculateOffSets(slicedArr);
        offsets.current = offSetValues;
    }

    useEffect(() => {
        updateMedia();
    });

    useEffect(()=> {
        const element = document.getElementById(selected)
        element?.scrollIntoView({behavior: "smooth" , block: "start"})
      }, [selected]);

    useEffect(() => {
        setShowSideBar(!showSideBar);
        if (window.innerWidth >= 1024) {
          setShowSideBar(true);
        } else {
          setShowSideBar(false);
        };
    
        const updateMedia = () => {
          if (window.innerWidth >= 1024) {
            setShowSideBar(true);
          } else {
            setShowSideBar(false);
          }
        };

        window.addEventListener('resize', updateMedia);
        return () => window.removeEventListener('resize', updateMedia);
    }, []);

    useEffect(() => {
        const scroll = activeScroll;
        for(let i=0; i<offsets.current.length; i++){
            let temp = ""
            if (offsets.current[i].offset < scroll + 200) {
                temp = offsets.current[i].id
                setActive(temp)
            }
        }
    }, [activeScroll])

    useEffect(() => {
        updateMedia()
        window.addEventListener('resize', updateMedia);
        return () => window.removeEventListener('resize', updateMedia);
    }, [])


    return(
        <div className={`${mode === "dark" ? 'dark' : ''}`}>
            <div className={`fixed z-20 h-full w-72 sidebar-background origin-left transition-all duration-500 ${showSideBar ? "ml-0" : "-ml-72"}`}>
                <section className='w-full h-full flex flex-col justify-between'>
                    <div className='flex flex-col space-y-10 overflow-y-auto'>
                        <header className='flex text-center text-3xl font-bold w-full justify-center text-white'>
                            <SideHeader title={title}/>
                        </header>
                        <section className='flex flex-col w-full space-y-6 text-white !scrollbar-thin !scrollbar-thumb-sky-600 '>
                            {
                                props?.map((section:Section) => (
                                    <button key = {section.id} onClick = { () => setSelected(section.id)}
                                    className='flex w-full justify-center group'>
                                        {
                                            active === section.id ?
                                            (
                                                <li className='group flex flex-row w-5/6 bg-gray-600 rounded-lg p-2 bg-opacity-20 space-x-2 cursor-pointer transition-all delay-150'>
                                                    <p className='flex text-sky-600 font-medium delay-150'>{section.icon}</p>
                                                    <p className='flex text-white font-medium delay-150'>{section.title}</p>
                                                </li>
                                            )
                                            :
                                            (
                                                <li className='group flex flex-row w-5/6 rounded-lg p-2 bg-opacity-20 space-x-2 cursor-pointer transition-all delay-150'>
                                                    <p className='sidebar-section-inactive'>{section.icon}</p>
                                                    <p className='sidebar-section-inactive'>{section.title}</p>
                                                </li>
                                            )
                                        }
                                    </button>
                                ))
                            }
                        </section>
                    </div>
                    <footer className='flex flex-col'>
                        <p className='flex text-center text-sm text-gray-600 w-full justify-center py-8'>
                            <CopyrightOutlinedIcon className='flex scale-75 opacity-80 pb-1'/>
                            {footer}
                        </p>
                    </footer>
                </section>
            </div>

            {showSideBar ? (
                <button
                    type="button"
                    onClick={() => setShowSideBar(!showSideBar)}
                    className="fixed z-10 rounded-full button-theme right-6 top-6 w-10 h-10 text-center lg:scale-0"
                >
                    <Tooltip title="Close">
                        <CloseIcon className="text-white" />
                    </Tooltip>
                </button>
            ) : (
                <button
                    type="button"
                    onClick={() => setShowSideBar(!showSideBar)}
                    className="fixed z-10 rounded-full button-theme right-6 top-6 w-10 h-10 text-center lg:scale-0"
                >
                    <Tooltip title="Open">
                        <DensityMediumIcon className="text-white" />
                    </Tooltip>
                </button>
            )}

            {isScrolled ? (
                <button
                    type="button"
                    className="fixed transition-all z-10 button-theme rounded-full w-10 h-10 right-5 bottom-5 text-center cursor-pointer"
                    onClick={() =>
                    document
                        .getElementById("Home")
                        ?.scrollIntoView({ behavior: "smooth", block: "center" })
                    }
                >
                    <Tooltip title="Home">
                        <ArrowUpwardIcon className="text-white" />
                    </Tooltip>
                </button>
                ) : (
                <></>
            )}
        </div>
    );
};

export default SideBar;