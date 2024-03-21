'use client'

import React from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link} from "@nextui-org/react";
import LogoRect from '../Logo/LogoRect';
import InstagramIcon from '../Socials/Instagram';
import ReserveBtn from '../ReserveBtn/NavReserveBtn';
import Styles from './Nav.module.css';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuItems = [
    { name: "Home", link: "/" },
    { name: "Our Story", link: "/our-story" },
    { name: "Menu", link: "/menu" },
  ];

  return (
    <Navbar className={Styles.nav} onMenuOpenChange={setIsMenuOpen} shouldHideOnScroll>
      <NavbarContent justify='center'>
        {/* Nav Hamburger Menu */}
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className={`${Styles.navHamburgerMenuIcon} sm:hidden`}
        />
        {/* Nav Logo */}
        <NavbarBrand className={Styles.navLogo}>
          <Link href="/">
            <LogoRect />
          </Link>
        </NavbarBrand>
      </NavbarContent>
      {/* Nav Links */}
      <NavbarContent className={`${Styles.navLinksContainer} hidden sm:flex gap-6`} justify="center">
        <NavbarItem>
          <Link className={`${Styles.navLink}`} href="/our-story">
            OUR STORY
          </Link>
        </NavbarItem>
        <NavbarItem>
        <Link className={`${Styles.navLink}`} href="/menu">
          MENU
        </Link>
        </NavbarItem>
      </NavbarContent>
      {/* Nav Right */}
      <NavbarContent className={`${Styles.navRightContainer} gap-5`} justify="end">
        {/* Reserve Btn */}
        <NavbarItem>
          <ReserveBtn />
        </NavbarItem>
        {/* Socials */}
        <NavbarItem>
          <Link href='https://instagram.com/mountain.mixology' target='_blank'>
            <InstagramIcon />
          </Link>
        </NavbarItem>
      </NavbarContent>
      {/* Nav Hamburger Menu */}
      <NavbarMenu className={Styles.navHamburgerMenu}>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              color="foreground"
              className={`${Styles.navHamburgerMenuLinks} w-full`}
              href={item.link}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
