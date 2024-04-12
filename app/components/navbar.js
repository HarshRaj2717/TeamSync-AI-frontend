import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className="navbar fixed pt-4 bg-base-100">
      <div className="flex-1">
        <Link href={"/"} className="text-xl font-bold font-sans mx-4">
            <Image src="/logo.png" alt="logo" width={150} height={150} />
        </Link>
      </div>
      {/* <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Link</a>
          </li>
        </ul>
      </div> */}
    </div>
  );
}
