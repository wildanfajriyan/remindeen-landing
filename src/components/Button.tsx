export default function Button({ text }: { text: string }) {
  return (
    <div className='bg-white text-slate-900 rounded-full px-4 py-1 text-center'>
      <button className='text-lg cursor-pointer sm:text-lg'>{text}</button>
    </div>
  );
}
