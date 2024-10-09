"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface Props {
  href: string;
  children: ReactNode;
}
const NavLink = ({ href, children }: Props) => {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={pathname.startsWith(href) ? "active" : undefined}
    >
      {children}
    </Link>
  );
};

export default NavLink;
