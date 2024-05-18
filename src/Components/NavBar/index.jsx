import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from "../../Context";

function NavBar() {
  const context = useContext(ShoppingCartContext)
  const activeStyle = 'underline underline-offset-4'

  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-slate-100
    shadow-lg">
      <ul className="flex items-center gap-3">
      <li className='font-semibold text-lg'>
          <NavLink to='/'>
            Shopi
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/'
            onClick={() => context.setSearchByCategory()}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/clothes'
            onClick={() => context.setSearchByCategory('clothes')}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/electronics'
            onClick={() => context.setSearchByCategory('electronics')}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/furnitures'
            onClick={() => context.setSearchByCategory('Furniture')}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/toys'
            onClick={() => context.setSearchByCategory('toys')}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/others'
            onClick={() => context.setSearchByCategory('others')}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Others
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        <li className="text-black/60">
          jose@example.com
        </li>
        <li>
          <NavLink
            to="/my-orders"
            onClick={() => context.setSearchByCategory()}
            className={({ isActive }) => isActive ? activeStyle : ""}
          >
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/my-account"
            onClick={() => context.setSearchByCategory()}
            className={({ isActive }) => isActive ? activeStyle : ""}
          >
            My Account
          </NavLink>
        </li>
        <li className="flex items-center">
          <ShoppingCartIcon className="size-6 text-black"></ShoppingCartIcon>
          <div>{context.cartProducts.length} </div>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar