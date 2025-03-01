import NavItem from './NavItem';

export default function Nav() {
  return (
    <div>
      <ul className='flex gap-5'>
        <NavItem text='Remindeen' />
        <NavItem text='Preview' />
        <NavItem text='Gallery' />
        <NavItem text='About Us' />
      </ul>
    </div>
  );
}
