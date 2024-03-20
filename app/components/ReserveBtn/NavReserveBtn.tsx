import React from 'react';
import {Link, Button} from '@nextui-org/react';
import Styles from './ReserveBtn.module.css'

export default function NavReserveBtn() {
  return (
    <>
      <Button className={Styles.navReserveBtn} as={Link} href='/reserve' color="warning" variant="ghost" size='md'>
        RESERVE
      </Button>
    </>
  );
}
