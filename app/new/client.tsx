"use client"

import React, { useState } from 'react'

export default function Client({title}: {title: string}) {
  const [user, setUser] = useState("Hello");
  return (
    <div className="flex justify-between items-center mb-4">
        <h1>{title}</h1>
    </div>
  )
}
