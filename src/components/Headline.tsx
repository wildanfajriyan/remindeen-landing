export default function Headline({ text }: { text: string }) {
  return <h1 className='text-5xl font-bold sm:text-8xl'>{text}</h1>;
}
