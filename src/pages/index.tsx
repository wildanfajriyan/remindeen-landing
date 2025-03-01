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

const ruhl = Frank_Ruhl_Libre({
  subsets: ['latin'],
});

export default function Home() {
  return (
    <div className={ruhl.className}>
      <Header />

      <section>
        <div className='block items-center gap-12 px-10 lg:flex lg:h-screen'>
          <div className='lg:flex-6/12 lg:h-1/2'>
            <div className='border-b-2'>
              <Headline text='Remindeen' />
            </div>
          </div>
          <div className='lg:flex-6/12'>
            <p className='text-sm lg:text-xl'>
              Remindeen adalah sebuah browser extension yang dirancang khusus
              untuk menjadi pengingat dan sumber inspirasi bagi umat Muslim
              dalam menjalani aktivitas sehari-hari. Dengan fitur utama berupa
              jadwal salat yang akurat sesuai lokasi pengguna, Remindeen
              membantu memastikan ibadah kamu selalu tepat waktu. Selain itu,
              Remindeen juga menampilkan dakwah singkat berupa ayat-ayat
              Al-Qur'an dan hadits pilihan yang memberi motivasi dan menyejukkan
              hati.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className='h-screen flex flex-col items-center gap-5 px-10'>
          <div>
            <div className='flex flex-col items-center'>
              <Headline text='Preview' />
              <div className='w-8/12 mt-5'>
                <p className='text-xl text-center'>
                  Remindeen adalah sebuah browser extension yang dirancang
                  khusus untuk menjadi pengingat dan sumber inspirasi bagi umat
                  Muslim dalam menjalani aktivitas sehari-hari
                </p>
              </div>
            </div>
          </div>
          <div>
            <Image src={previewPic} alt='preview' />
          </div>
          <div>
            <p className='text-xl'>
              Remindeen adalah sebuah browser extension yang dirancang khusus
              untuk menjadi pengingat dan sumber inspirasi bagi umat Muslim
              dalam menjalani aktivitas sehari-hari
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className='h-screen flex flex-col items-center justify-center'>
          <div className='text-center mb-5'>
            <Headline text='Gallery' />
            <p className='text-xl mt-5'>
              Dengan berbagai background tidak hanya menampilkan sisi islamic
              namun keindahan serta berbagai macam kenikmatan
            </p>
          </div>
          <div className='flex flex-col gap-5 items-center'>
            <div className=''>
              <Image src={galleryOnePic} alt='one' />
            </div>
            <div className='flex flex-wrap gap-5'>
              <Image src={galleryTwoPic} alt='two' />
              <Image src={galleryThreePic} alt='three' />
              <Image src={galleryFourPic} alt='four' />
              <Image src={galleryFivePic} alt='five' />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='h-screen lg:flex flex-col items-center justify-center'>
          <div>
            <Headline text='About Us' />
          </div>
          <div className='w-1/2 mt-5'>
            <p className='text-xl'>
              Serdadu Code adalah sebuah tim yang terdiri dari para ahli
              teknologi informasi yang berdedikasi untuk menciptakan aplikasi
              inovatif dan berdampak positif. Dalam kebersamaan mereka, setiap
              anggota Serdadu IT memegang peran penting dalam proses
              pengembangan aplikasi yang efisien dan solutif.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
