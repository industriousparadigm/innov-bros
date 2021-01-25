import NavItem from "./nav-item";
import siteData from "../siteData";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex flex-wrap justify-center sticky top-0 bg-white lg:mb-12 z-10 md:px-8 lg:px-16 xl:px-32">
      <div className="w-72 py-4 sm:w-1/3 md:w-1/3 lg:w-1/4">
        <Link href="/">
          <img
            className="cursor-pointer"
            src="/theinnovationbrothers-logo-trimmy.png"
            alt="the innovation brothers logo"
          />
        </Link>
      </div>

      <ul className="flex justify-evenly w-full ml-0 mb-0 lg:w-3/4 px-8 py-3 text-gray-500">
        {siteData.navItems.map((item) => (
          <NavItem item={item} key={item.name} />
        ))}
      </ul>
    </nav>
  );
}
