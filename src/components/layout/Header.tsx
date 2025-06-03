"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // アイコン用
// import Image from "next/image";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md w-full fixed top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-10 h-10">
            <img
              src="/logo.png"
              alt="logo"
              width={40}
              height={40}
              className="rounded-full object-cover"
            />
          </div>
        </Link>

        <nav className="hidden md:flex gap-6">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/blog">Blog</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </nav>

        {/* モバイルメニュー */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <MobileLink href="/" label="Home" onClick={() => setMenuOpen(false)} />
          <MobileLink href="/about" label="About" onClick={() => setMenuOpen(false)} />
          <MobileLink href="/blog" label="Blog" onClick={() => setMenuOpen(false)} />
          <MobileLink href="/contact" label="Contact" onClick={() => setMenuOpen(false)} />
        </div>
      )}
    </header>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className="text-gray-700 hover:text-blue-600 font-medium transition">
    {children}
  </Link>
);

const MobileLink = ({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick: () => void;
}) => (
  <Link
    href={href}
    className="block px-6 py-3 text-gray-800 border-t hover:bg-blue-50"
    onClick={onClick}
  >
    {label}
  </Link>
);

export default Header;
