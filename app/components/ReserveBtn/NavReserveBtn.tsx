import React from 'react';
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from '@nextui-org/react';
import LogoRect from '../Logo/LogoRect';
import InstagramIcon from '../Socials/Instagram'
import Styles from './ReserveBtn.module.css'

export default function NavReserveBtn() {
  return (
    <Button className={Styles.navReserveBtn} as={Link} href='/reserve' color="warning" variant="flat" size='md'>
        RESERVE
    </Button>
  );
}
