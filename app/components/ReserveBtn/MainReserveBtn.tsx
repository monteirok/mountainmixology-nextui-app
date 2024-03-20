import React from 'react';
import Styles from './ReserveBtn.module.css'
import { Button, Link } from '@nextui-org/react';

export default function MainReserveBtn() {
  return (
    <Button className={Styles.mainReserveBtn} as={Link} href='/reserve' color="warning" variant="flat" size='lg'>
        RESERVE
    </Button>
  );
}
