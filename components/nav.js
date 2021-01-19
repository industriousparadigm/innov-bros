import Image from "next/image"
import NavItem from "./nav-item"
import siteData from "../siteData"

export default function Nav() {
  return (
    <nav className="flex flex-wrap justify-center sticky top-0 bg-white z-10">
      <div className="h-28 w-2/3 md:w-1/5 relative">
        <Image
          layout="fill"
          objectFit="contain"
          src="/theinnovationbrothers-logo-trimmy.png"
          alt="the innovation brothers logo"
        />
      </div>

      <ul className="flex justify-around w-full md:w-4/5 px-8 py-3 text-gray-500">
        {siteData.navItems.map((item) => (
          <NavItem item={item} key={item.name} />
        ))}
      </ul>
    </nav>
  )
}
