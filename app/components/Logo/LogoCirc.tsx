import React from 'react';
import Image from 'next/image';
import Styles from './Logos.module.css'

export default function LogoCirc() {
    return (
      <Image
        className={Styles.navLogoCirc}
        src='/images/logos/logo-circle.png'
        alt='Mountain Mixology circle-shaped logo.'
        width={800}
        height={800}
      />
    );
  }
  