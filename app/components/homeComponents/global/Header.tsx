import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from '@/public/Logo.png'

export default function Header() {
    return (
        <header
            className="fixed top-0 left-0 right-0 shadow shadow-white z-50 bg-[#f7e3cf] animate-fadeIn"
        >
            <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-1">
                <Link href="/" className="flex items-center">
                    <Image
                        priority
                        src={Logo}
                        alt="Logo"
                        width={100}
                        height={100}
                        className="h-auto"
                    />
                </Link>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <a
                                href="#packages"
                                className="text-gray-800 hover:text-blue-600 transition hover:underline active:scale-95"
                            >
                                Packages
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>)
}
