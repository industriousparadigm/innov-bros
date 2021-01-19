import { useRouter } from "next/router"
import Link from "next/link"

const NavItem = ({ item }) => {
  const { pathname } = useRouter()
  const isCurrentPage = pathname === item.path

  return (
    <li className="flex items-center">
      <Link href={item.path}>
        <a
          className={`font-normal hover:text-black ${
            isCurrentPage ? "text-black font-bold" : ""
          } transition duration-300 ease-in-out`}
        >
          {item.name}
        </a>
      </Link>
    </li>
  )
}

export default NavItem
