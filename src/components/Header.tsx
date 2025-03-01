import Image from 'next/image';
import backgroundPic from '../../public/home.jpg';
import logo from '../../public/logo.png';
import Nav from '@/components/Nav';
import Button from '@/components/Button';
import Headline from '@/components/Headline';

export default function Header() {
  return (
    <section>
      <div
        style={{
          top: 0,
          left: 0,
          right: 0,
          backgroundImage: `url(${backgroundPic.src})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          zIndex: -999,
        }}
      >
        <div className='text-white'>
          <div className='flex flex-col h-screen px-10 py-10'>
            <header className='flex flex-col'>
              <div>
                <Image src={logo} alt='logo kami' className='m-auto sm:m-0' />
              </div>
              <div className='hidden justify-between items-center mt-5 sm:flex'>
                <Nav />
                <Button text='Extension' />
              </div>
            </header>
            <main className='flex justify-start items-center h-full'>
              <div className='w-xl'>
                <Headline text='Never miss a prayer time' />
                <h3 className='mt-5 text-lg font-medium sm:text-xl'>
                  with Remindeen Prayer Reminder
                </h3>
              </div>
            </main>
            <div className='flex items-center justify-center sm:hidden'>
              <Button text='Extension' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
