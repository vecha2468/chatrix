import Image from 'next/image';
import './globals.css'
import assets  from '@/assets/assets';
const  Home =() =>{
  return (
    <div className='home'>
      <Image src={assets.logo_big} alt=""/>
    </div>
  );
}
export default Home
