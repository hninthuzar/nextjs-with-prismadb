"use client"
import React, { useState } from 'react'

export default function Client() {
    const [user, setUser] = useState("Hello");
  return (
    <header className="flex justify-between items-center mb-4">
        <h1>New</h1>
    </header>
  )
}
