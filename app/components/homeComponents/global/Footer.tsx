import Image from 'next/image'
import React from 'react'
import Logo from '@/public/Logo.png'

export default function Footer() {
    return (
        <footer
            className="py-4 border-t border-gray-200 animate-fadeIn bg-amber-50"
        >
            <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
                {/* Left section: Logo above copyright */}
                <div className="flex flex-col items-center">
                    <Image
                        src={Logo}
                        alt="Logo"
                        width={75}
                        height={50}
                        className="h-auto mb-2"
                    />
                    <span className="text-sm">
                        &copy; {new Date().getFullYear()} Solana Holistiq
                    </span>
                </div>
                {/* Right section: Social media icons */}
                <div className="flex space-x-4">
                    <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition transform hover:scale-110 duration-300"
                    >
                        <Image
                            src="https://cdn.jsdelivr.net/npm/simple-icons@8.15.0/icons/youtube.svg"
                            alt="YouTube"
                            width={24}
                            height={24}
                            className="w-6 h-6"
                        />
                    </a>
                    <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition transform hover:scale-110 duration-300"
                    >
                        <Image
                            src="https://cdn.jsdelivr.net/npm/simple-icons@8.15.0/icons/linkedin.svg"
                            alt="LinkedIn"
                            width={24}
                            height={24}
                            className="w-6 h-6"
                        />
                    </a>
                    <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition transform hover:scale-110 duration-300"
                    >
                        <Image
                            src="https://cdn.jsdelivr.net/npm/simple-icons@8.15.0/icons/tiktok.svg"
                            alt="TikTok"
                            width={24}
                            height={24}
                            className="w-6 h-6"
                        />
                    </a>
                </div>
            </div>
        </footer>)
}
