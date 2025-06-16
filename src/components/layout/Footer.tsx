"use client";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-100 py-8">
            <div className="max-w-6x1 mx-auto px-4 flex flex-col items-center space-y-4 md:space-y-6">
                {/* ナビゲーションリンク */}
                <nav className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
                    <FooterLink href="/">Home</FooterLink>
                    <FooterLink href="/about">About</FooterLink>
                    <FooterLink href="/blog">Blog</FooterLink>
                    <FooterLink href="/apps">Apps</FooterLink>
                    <FooterLink href="/contact">Contact</FooterLink>
                </nav>
                <nav className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
                    <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
                    <FooterLink href="/terms-of-service">Terms of Service</FooterLink>
                </nav>

                {/* 外部リンク (GitHub) */}
                <div className="text-sm">
                    <a
                        href="https://github.com/atsushi0507"
                        target="_blank"
                        rel="noopener roreferrer"
                        className="hover:underline text-blue-300"
                    >
                        GitHub
                    </a>
                </div>

                {/* 著作権情報 */}
                <p className="text-sx text-gray-400 text-center">
                    &copy; 2024 Atsushi Mizukami. All rights reserved.
                </p>

                {/* 補足文 */}
                <p className="text-xs text-gray-500 text-center">
                    Design and Development by Atsushi Mizukami
                </p>
            </div>
        </footer>
    );
};

const FooterLink = ({ href, children}: {href: string; children: React.ReactNode }) => (
    <Link href={href} className="hover:text-blue-300 transition-colors">
        {children}
    </Link>
);

export default Footer;