import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
    HomeIcon,
    HeartIcon,
    InformationCircleIcon,
    ChatBubbleLeftRightIcon,
    ClockIcon,
    ChartBarIcon,
    UserIcon,
    Cog6ToothIcon
} from '@heroicons/react/24/outline'

const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
    { name: 'Deteksi Penyakit', href: '/detection', icon: HeartIcon },
    { name: 'Informasi Penyakit', href: '/diseases', icon: InformationCircleIcon },
    { name: 'AI Chatbot', href: '/chatbot', icon: ChatBubbleLeftRightIcon },
    { name: 'Riwayat', href: '/history', icon: ClockIcon },
    { name: 'Statistik', href: '/statistics', icon: ChartBarIcon },
    { name: 'Profil', href: '/profile', icon: UserIcon },
    { name: 'Pengaturan', href: '/settings', icon: Cog6ToothIcon },
]

export const Sidebar: React.FC = () => {
    const location = useLocation()

    const handleLogout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        window.location.href = '/login'
    }

    return (
        <div className="fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 shadow-lg">
            <div className="flex flex-col h-full">
                {/* Logo */}
                <div className="flex items-center justify-center h-16 px-4 border-b border-gray-200">
                    <img src="/assets/logo.svg" alt="HealthAI" className="w-8 h-8" />
                    <span className="ml-2 text-xl font-bold text-indigo-600">HealthAI</span>
                </div>

                {/* Navigation */}
                <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
                    {navigation.map((item) => {
                        const isActive = location.pathname === item.href
                        return (
                            <Link
                                key={item.name}
                                to={item.href}
                                className={`
                  group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-all duration-200
                  ${isActive
                                        ? 'bg-indigo-50 text-indigo-600'
                                        : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600'
                                    }
                `}
                            >
                                <item.icon
                                    className={`
                    mr-3 h-5 w-5 transition-colors
                    ${isActive ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600'}
                  `}
                                />
                                {item.name}
                            </Link>
                        )
                    })}
                </nav>

                {/* Logout Button */}
                <div className="p-4 border-t border-gray-200">
                    <button
                        onClick={handleLogout}
                        className="flex items-center w-full px-2 py-2 text-sm font-medium text-red-600 rounded-md hover:bg-red-50 transition-colors"
                    >
                        <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        Logout
                    </button>
                </div>
            </div>
        </div>
    )
}