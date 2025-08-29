import Link from "next/link";
import { IoRestaurant } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";

export function Nav() {
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <Link href="/" className="logo">
            <IoRestaurant />
          </Link>
          <Link href="/wishList" className="navLink">
            Wishlist <FaRegHeart />
          </Link>
          <Link href="/recipy" className="navLink">
            All recipes
          </Link>
        </div>
      </nav>
    </>
  );
}
