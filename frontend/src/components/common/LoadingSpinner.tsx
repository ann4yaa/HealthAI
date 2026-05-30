import React from 'react'

interface LoadingSpinnerProps {
    size?: 'sm' | 'md' | 'lg'
    color?: string
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
    size = 'md',
    color = 'indigo'
}) => {
    const sizes = {
        sm: 'w-5 h-5',
        md: 'w-8 h-8',
        lg: 'w-12 h-12',
    }

    const colors = {
        indigo: 'border-indigo-600',
        white: 'border-white',
        gray: 'border-gray-600',
    }

    return (
        <div className="flex justify-center items-center">
            <div
                className={`
          ${sizes[size]}
          ${colors[color as keyof typeof colors]}
          border-4 border-t-transparent rounded-full animate-spin
        `}
            />
        </div>
    )
}