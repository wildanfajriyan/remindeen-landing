export default function Headline({ text }: { text: string }) {
  return <h1 className='text-4xl font-bold sm:text-8xl pb-2'>{text}</h1>;
}
