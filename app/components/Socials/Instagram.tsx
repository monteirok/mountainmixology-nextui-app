import React from 'react';
import Image from 'next/image';
import Styles from './Socials.module.css';

export default function Instagram() {
  return (
    <Image
        className={Styles.instagramIcon}
        src='/images/icons/instagram.svg'
        width={1000}
        height={1000}
        alt='instagram icon'
    />
  );
}
