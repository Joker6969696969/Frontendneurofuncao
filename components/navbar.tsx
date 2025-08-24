"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Globe, LogOut, UserCircle } from "lucide-react" // Added LogOut and UserCircle
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useLanguage } from "@/contexts/language-context"
import { useAuth } from "@/contexts/auth-context" // Import useAuth
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()
  const { isAuthenticated, isAdmin, logout, isLoading } = useAuth() // Use auth context
  const pathname = usePathname()

  const navigation = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.services"), href: "/services" },
    { name: t("nav.articles"), href: "/articles" },
    { name: t("nav.about"), href: "/about" },
    { name: t("nav.contact"), href: "/contact" },
  ]

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       <div className="flex justify-between h-24"> {/* <-- changed h-20 -> h-24 */}
        <div className="flex items-center">
         <Link href="/" className="flex-shrink-0">
          <Image
           src="/logo.png"
           alt="Neurofunção"
           width={220}
           height={64}
           className="h-14 md:h-16 lg:h-20 w-auto" />
         </Link>
        </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors duration-200 ${
                  pathname === item.href ? "text-orange-500" : "text-gray-700 hover:text-orange-500"
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Admin Articles Link (only for admins) */}
            {!isLoading && isAuthenticated && isAdmin && (
              <Link
                href="/articles/admin"
                className={`font-medium transition-colors duration-200 ${
                  pathname === "/articles/admin" ? "text-orange-500" : "text-gray-700 hover:text-orange-500"
                }`}
              >
                {t("nav.adminArticles")}
              </Link>
            )}

            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="ml-4 bg-transparent">
                  <Globe className="h-4 w-4 mr-2" />
                  {language.toUpperCase()}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setLanguage("pt")}>Português</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("en")}>English</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Auth Buttons */}
            {!isLoading &&
              (isAuthenticated ? (
                <Button onClick={logout} variant="outline" size="sm" className="ml-4 bg-transparent">
                  <LogOut className="h-4 w-4 mr-2" />
                  {t("nav.logout")}
                </Button>
              ) : (
                <>
                  <Link href="/login">
                    <Button variant="outline" size="sm" className="ml-4 bg-transparent">
                      <UserCircle className="h-4 w-4 mr-2" />
                      {t("nav.login")}
                    </Button>
                  </Link>
                  <Link href="/register">
                    <Button variant="default" size="sm" className="bg-orange-500 hover:bg-orange-600">
                      {t("nav.register")}
                    </Button>
                  </Link>
                </>
              ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="mr-2 bg-transparent">
                  <Globe className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setLanguage("pt")}>Português</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("en")}>English</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {!isLoading &&
              (isAuthenticated ? (
                <Button onClick={logout} variant="outline" size="sm" className="mr-2 bg-transparent">
                  <LogOut className="h-4 w-4" />
                </Button>
              ) : (
                <>
                  <Link href="/login">
                    <Button variant="outline" size="sm" className="mr-2 bg-transparent">
                      <UserCircle className="h-4 w-4" />
                    </Button>
                  </Link>
                </>
              ))}

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary focus:outline-none focus:text-primary"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 transition-colors duration-200 ${
                    pathname === item.href ? "text-orange-500 font-semibold" : "text-gray-700 hover:text-orange-500"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              {!isLoading && isAuthenticated && isAdmin && (
                <Link
                  href="/articles/admin"
                  className={`block px-3 py-2 transition-colors duration-200 ${
                    pathname === "/articles/admin"
                      ? "text-orange-500 font-semibold"
                      : "text-gray-700 hover:text-orange-500"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {t("nav.adminArticles")}
                </Link>
              )}
              {!isLoading && !isAuthenticated && (
                <Link
                  href="/register"
                  className="block px-3 py-2 transition-colors duration-200 text-gray-700 hover:text-orange-500"
                  onClick={() => setIsOpen(false)}
                >
                  {t("nav.register")}
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
