import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Head from 'next/head'
import Image from 'next/image'
import SideBar from '../components/SideBar'

export default function Home() {
  return (
    <div className='w-full'>
        <Head>
          <title>Portfolio</title>
          <link rel='icon' href="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Vsmart_logo.svg/402px-Vsmart_logo.svg.png?20200810165214"/>
        </Head>

      <SideBar title='Michael' footer='person' props =
        {
          [
            {id:"Home", icon:<HomeOutlinedIcon/>, title:"Home"},
            {id:"About", icon:<HomeOutlinedIcon/>, title:"About"},
            {id:"Resume", icon:<HomeOutlinedIcon/>, title:"Resume"},
            {id:"Portfolio", icon:<HomeOutlinedIcon/>, title:"Portfolio"},
          ]
        }
      />

      <div id="Home" className='flex h-screen w-full bg-white justify-center items-center text-2xl text-black'> Home </div>
      <div id="About" className='flex h-screen w-full bg-black justify-center items-center text-2xl text-white'> About </div>
      <div id="Resume" className='flex h-screen w-full bg-white justify-center items-center text-2xl text-black'> Resume </div>
      <div id="Portfolio" className='flex h-screen w-full bg-black justify-center items-center text-2xl text-white'> Portfolio </div>

    </div>
  )
}
