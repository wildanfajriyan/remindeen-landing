export default function NavItem({ text }: { text: string }) {
  return (
    <li className='cursor-pointer text-lg font-bold hover:text-gray-300 transition-all'>
      {text}
    </li>
  );
}
