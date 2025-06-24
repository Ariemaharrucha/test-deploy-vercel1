'use client'

import { Button } from "@/components/ui/button"
import { ChevronDown, Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
      <header className="sticky top-0 z-10 container mx-auto text-white bg-[#101010]">
        <div className="flex items-center justify-between px-4 sm:px-6 py-4">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <span className="font-bold text-lg sm:text-xl">EasyLetter</span>
            </div>
            <nav className="hidden md:flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-1 hover:text-gray-300 cursor-pointer">
                <a href="#features">
                  <span>Features</span>
                </a>
              </div>
              <div className="flex items-center space-x-1 hover:text-gray-300 cursor-pointer">
                <a href="#testimonials">
                  <span>Testimonials</span>
                </a>
              </div>
              <div className="flex items-center space-x-1 hover:text-gray-300 cursor-pointer">
                <span>FAQ</span>
              </div>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/dashboard/cover-letter">
              <Button className="bg-purple-600 hover:bg-purple-700 text-gray-100 px-4 sm:px-6 text-sm rounded-full font-semibold cursor-pointer">
                Get Started
              </Button>
            </Link>
            <Button 
              variant="ghost" 
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#101010] border-t border-gray-800 py-4 px-6 z-50">
            <nav className="flex flex-col space-y-4">
              <div className="flex items-center space-x-1 hover:text-gray-300 cursor-pointer">
                <a href="#features">
                  <span>Features</span>
                </a>
              </div>
              <div className="flex items-center space-x-1 hover:text-gray-300 cursor-pointer">
                <a href="#testimonials">
                  <span>Testimonials</span>
                </a>
              </div>
              <div className="flex items-center space-x-1 hover:text-gray-300 cursor-pointer">
                <span>FAQ</span>
              </div>
            </nav>
          </div>
        )}
      </header>
    );
}