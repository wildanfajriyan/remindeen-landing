import Image from 'next/image';
import { Frank_Ruhl_Libre } from 'next/font/google';
import Header from '@/components/Header';
import Headline from '@/components/Headline';
import previewPic from '../../public/preview.png';
import galleryOnePic from '../../public/1.png';
import galleryTwoPic from '../../public/2.png';
import galleryThreePic from '../../public/3.png';
import galleryFourPic from '../../public/4.png';
import galleryFivePic from '../../public/5.png';
import Footer from '@/components/Footer';

const ruhl = Frank_Ruhl_Libre({
  subsets: ['latin'],
});

export default function Home() {
  return (
    <div className={ruhl.className}>
      <Header />

      <section id='remindeen'>
        <div className='block items-center gap-12 px-10 lg:flex lg:h-screen lg:m-0 m-10'>
          <div className='lg:flex-6/12 lg:h-1/2'>
            <div className='border-b-2 text-center lg:text-left'>
              <Headline text='Remindeen' />
            </div>
          </div>
          <div className='lg:flex-6/12 mt-4 lg:mt-0'>
            <p className='text-sm text-center lg:text-xl lg:text-left'>
              Remindeen adalah sebuah browser extension yang dirancang khusus
              untuk menjadi pengingat dan sumber inspirasi bagi umat Muslim
              dalam menjalani aktivitas sehari-hari. Dengan fitur utama berupa
              jadwal salat yang akurat sesuai lokasi pengguna, Remindeen
              membantu memastikan ibadah kamu selalu tepat waktu. Selain itu,
              Remindeen juga menampilkan dakwah singkat berupa ayat-ayat
              Al-Qur&apos;an dan hadits pilihan yang memberi motivasi dan menyejukkan
              hati.
            </p>
          </div>
        </div>
      </section>

      <section id='preview'>
        <div className='block lg:h-screen lg:flex flex-col items-center gap-5 px-10'>
          <div>
            <div className='lg:flex flex-col items-center'>
              <div className='border-b-2 text-center'>
                <Headline text='Preview' />
              </div>
              <div className='lg:w-8/12 mt-4 w-full'>
                <p className='text-sm text-center lg:text-xl'>
                  Remindeen adalah sebuah browser extension yang dirancang
                  khusus untuk menjadi pengingat dan sumber inspirasi bagi umat
                  Muslim dalam menjalani aktivitas sehari-hari
                </p>
              </div>
            </div>
          </div>
          <div className='my-4'>
            <Image src={previewPic} alt='preview' />
          </div>
          <div>
            <p className='text-sm lg:text-xl text-center lg:text-left'>
              Remindeen adalah sebuah browser extension yang dirancang khusus
              untuk menjadi pengingat dan sumber inspirasi bagi umat Muslim
              dalam menjalani aktivitas sehari-hari
            </p>
          </div>
        </div>
      </section>

      <section id='gallery'>
        <div className='block lg:h-screen lg:flex flex-col items-center justify-center px-10 mt-10'>
          <div className='border-b-2 text-center'>
            <Headline text='Gallery' />
          </div>
          <p className='text-sm mt-5 lg:text-xl'>
            Dengan berbagai background tidak hanya menampilkan sisi islamic
            namun keindahan serta berbagai macam kenikmatan
          </p>
          <div className='block lg:flex flex-col gap-5 items-center text-center mt-4'>
            <div className=''>
              <Image src={galleryOnePic} alt='one' className='m-auto mb-4' />
            </div>
            <div className='block lg:flex flex-wrap gap-5'>
              <Image src={galleryTwoPic} alt='two' className='m-auto mb-4' />
              <Image
                src={galleryThreePic}
                alt='three'
                className='m-auto mb-4'
              />
              <Image src={galleryFourPic} alt='four' className='m-auto mb-4' />
              <Image src={galleryFivePic} alt='five' className='m-auto mb-4' />
            </div>
          </div>
        </div>
      </section>

      <section id='about'>
        <div className='block lg:h-screen lg:flex flex-col items-center justify-center text-center px-10'>
          <div className='border-b-2'>
            <Headline text='About Us' />
          </div>
          <div className='lg:w-1/2 mt-5 w-full'>
            <p className='text-sm lg:text-xl'>
              Serdadu Code adalah sebuah tim yang terdiri dari para ahli
              teknologi informasi yang berdedikasi untuk menciptakan aplikasi
              inovatif dan berdampak positif. Dalam kebersamaan mereka, setiap
              anggota Serdadu IT memegang peran penting dalam proses
              pengembangan aplikasi yang efisien dan solutif.
            </p>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}
