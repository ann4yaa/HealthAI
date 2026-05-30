import React from 'react'

interface CardProps {
    children: React.ReactNode
    className?: string
    hoverable?: boolean
    onClick?: () => void
}

export const Card: React.FC<CardProps> = ({
    children,
    className = '',
    hoverable = false,
    onClick,
}) => {
    return (
        <div
            className={`
        bg-white rounded-xl shadow-md overflow-hidden
        ${hoverable ? 'transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer' : ''}
        ${className}
      `}
            onClick={onClick}
        >
            {children}
        </div>
    )
}