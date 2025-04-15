"use client";

import styles from "./index.module.css";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "motion/react";

const NavLinks = [
  {
    id: "1",
    title: "Home",
    href: "/",
  },
  {
    id: "2",
    title: "About",
    href: "/about",
  },
  {
    id: "3",
    title: "Projects",
    href: "/projects",
  },
  {
    id: "4",
    title: "News",
    href: "/news",
  },
  {
    id: "5",
    title: "Contact",
    href: "/contact",
  }
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const  toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 bg-green-100/50 backdrop-blur-lg transition-all duration-300 ${isScrolled ? "shadow-md bg-white/80" : ""}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-bold text-green-400 hover:text-green-500 flex items-center gap-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-xl">DODCARS LBG</span>
            </motion.div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {NavLinks.map((link) => (
              <motion.div
                key={link.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Link href={link.href} className="text-gray-500 hover:text-gray-700 font-medium transition-colors duration-300">
                  {link.title}
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Link href="/donate">
                <Button className="bg-green-400 font-medium hover:bg-green-500" size="sm">Donate</Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </header>
  )
}
