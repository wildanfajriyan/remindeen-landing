import NavItem from './NavItem';

export default function Nav() {
  return (
    <nav>
      <ul className='flex gap-5 '>
        <NavItem text='Remindeen' toId='remindeen' />
        <NavItem text='Preview' toId='preview' />
        <NavItem text='Gallery' toId='gallery' />
        <NavItem text='About Us' toId='about' />
      </ul>
    </nav>
  );
}
