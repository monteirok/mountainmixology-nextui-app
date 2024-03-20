import React from 'react';
import Image from 'next/image';
import Styles from './Logos.module.css'

export default function LogoRect() {
    return (
      <Image
        className={Styles.navLogoRect}
        src='/images/logos/logo.png'
        alt='Mountain Mixology rectangle-shaped logo.'
        width={800}
        height={800}
      />
    );
  }
  