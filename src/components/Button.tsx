export default function Button({ text }: { text: string }) {
  const handleClick = () => {
    window.open('https://chromewebstore.google.com/detail/remindeen/hoaielmggcbaiaomgmieobdloimgphio?utm_source=item-share-cb')
  };
  return (
    <div className='bg-white text-slate-900 rounded-full px-4 py-1 text-center'>
      <button className='text-lg cursor-pointer sm:text-lg' onClick={handleClick}>{text}</button>
    </div>
  );
}
