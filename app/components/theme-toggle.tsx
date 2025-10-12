'use client'

import { MoonStar, SunIcon } from 'lucide-react'
import { useState, useEffect } from 'react'

export function ThemeToggle() {
    const [theme, setTheme] = useState('light')

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light'
        setTheme(savedTheme)
        document.documentElement.setAttribute('data-theme', savedTheme)
    }, [])

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light'
        setTheme(newTheme)
        localStorage.setItem('theme', newTheme)
        document.documentElement.setAttribute('data-theme', newTheme)
    }

    return (
        <button
            onClick={toggleTheme}
            className="transition-colors flex align-middle relative group flex-col text-sm items-center justify-center"
            style={{ color: 'var(--text)' }}
        >
            {theme === 'light' ? <MoonStar className="w-5 h-5" /> : <SunIcon className="w-5 h-5" />}
        </button>
    )
}