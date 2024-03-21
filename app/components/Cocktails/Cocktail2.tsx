import React from 'react';
import Image from 'next/image';
import { Card, CardBody } from "@nextui-org/react";
import Styles from './Cocktails.module.css'

export default function Cocktail2() {
    return (
        <>
            <Card
                isFooterBlurred
                radius="lg"
                className={`${Styles.cardContainer} border-none`}
            >
                <CardBody className={Styles.cardBody}>
                    <Image
                        className={Styles.cocktailImg}
                        src="/images/cocktails/2.png"
                        alt="Cocktail2 image"
                        height={800}
                        width={800}
                    />
                    <p className={Styles.cocktailDescription}>Cocktail2 description.</p>
                </CardBody>
            </Card>
        </>
    );
  }
  