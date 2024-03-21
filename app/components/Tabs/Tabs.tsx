'use client'
import React from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import Cocktail1 from '../Cocktails/Cocktail1'
import Cocktail2 from '../Cocktails/Cocktail2'
import Cocktail3 from '../Cocktails/Cocktail3'
import Styles from './Tabs.module.css'

export default function TabsComponent() {
  return (
    <>
        <div className={`${Styles.tabsContainer} flex w-full flex-col`}>
            <Tabs aria-label="Options">
                <Tab key="photos" title="Cocktail1">
                    <Cocktail1 />
                </Tab>
                <Tab key="music" title="Cocktail2">
                    <Cocktail2 />
                </Tab>
                <Tab key="videos" title="Cocktail3">
                    <Cocktail3 />
                </Tab>
            </Tabs>
        </div>
    </>
  );
}
