"use client"
import React, { useEffect } from 'react'
import Lenis from 'lenis'

export default function LenisComponent() {

    useEffect(() => {
        const lenis = new Lenis({
            autoRaf: true,
        });

        // Listen for the scroll event and log the event data
        lenis.on('scroll', (e) => {
            //console.log(e);
        });
        return () => lenis.destroy();
    }, [])
    return (

        <></>
    )
}
