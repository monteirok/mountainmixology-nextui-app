import React from 'react';
import {Card, CardHeader, CardBody, Image, CardFooter, Button, Link} from "@nextui-org/react";
import Styles from './Cards.module.css'

export default function Cocktail1() {
    return (
        <Card
            isFooterBlurred
            radius="lg"
            className={`${Styles.cardContainer} border-none`}
        >
      <Image
        className={`${Styles.cardImg} object-cover`}
        src="/images/icons/cocktails-placeholder.webp"
        alt="Cocktail placeholder image"
        height={1000}
        width={1000}
      />
      <CardFooter className="justify-between bg-white/15 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className={`${Styles.cardText} text-small text-black/75`}>Cocktail #1</p>
        <Button className={`${Styles.cardBtnText} text-small text-white bg-black/10`} as={Link} href='/menu' variant="flat" color="default" radius="lg" size="sm">
          more
        </Button>
      </CardFooter>
    </Card>
    );
  }
  