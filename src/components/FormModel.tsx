"use client"

import Image from 'next/image';
import React from 'react'

function FormModel({
    table,
    type,
    data,
    id,
}: {
    table:
    | "teacher"
    | "student";
    type: "create" | "update" | "delete";
    data?: any;
    id?: number;
}) {

    const size = type === "create" ? "w-8 h-8" : "w-7 h-7"

    let bgColor = "bg-zeroYellow";

    if(type === "update") {
        bgColor = "bg-zeroSky"
    }

    if(type === "delete") {
        bgColor = "bg-zeroPurple"
    }

    return (
        <>
            <button className={`${size} flex items-center justify-center rounded-full ${bgColor}`}/>
            <Image src={`/${type}.png`} alt='' width={16} height={16} />
        </>
    )
}

export default FormModel