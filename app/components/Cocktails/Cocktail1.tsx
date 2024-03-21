import React from 'react';
import Image from 'next/image';
import { Card, CardBody } from "@nextui-org/react";
import Styles from './Cocktails.module.css'

export default function Cocktail1() {
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
                        src="/images/cocktails/1.png"
                        alt="Cocktail1 image"
                        height={800}
                        width={800}
                    />
                    <p className={Styles.cocktailDescription}>Cocktail1 description.</p>
                </CardBody>
            </Card>
        </>
    );
  }
  