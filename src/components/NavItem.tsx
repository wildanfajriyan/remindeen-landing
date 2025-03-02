export default function NavItem({ text, toId }: { text: string, toId: string }) {
  return (
    <li className='cursor-pointer text-lg font-bold hover:text-gray-300 transition-all '>
      <a href={`#${toId}`}> {text}</a>
    </li>
  );
}
