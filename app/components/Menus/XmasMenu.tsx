import React from 'react';
import Image from 'next/image'
import Styles from './Menus.module.css'

export default function Nav() {
  return (
    <Image
        className={Styles.xmasMenu}
        src='/images/menus/xmas-menu.png'
        alt='Christmas part menu.'
        width={800}
        height={800}
    />
  );
}
