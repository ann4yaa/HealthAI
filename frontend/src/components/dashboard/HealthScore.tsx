import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

interface HealthScoreProps {
    score: number
    message: string
}

export const HealthScore: React.FC<HealthScoreProps> = ({ score, message }) => {
    const getColor = () => {
        if (score >= 80) return '#10B981'
        if (score >= 60) return '#F59E0B'
        return '#EF4444'
    }

    return (
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-6 text-white">
            <div className="flex items-center justify-between">
                <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">Health Score Anda</h3>
                    <p className="text-sm opacity-90">{message}</p>
                    <div className="mt-4">
                        <div className="flex items-baseline">
                            <span className="text-4xl font-bold">{score}</span>
                            <span className="text-xl ml-1">/100</span>
                        </div>
                        <div className="mt-2 h-2 bg-white/30 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-white rounded-full transition-all duration-500"
                                style={{ width: `${score}%` }}
                            />
                        </div>
                    </div>
                </div>
                <div className="w-24 h-24">
                    <CircularProgressbar
                        value={score}
                        text={`${score}`}
                        styles={buildStyles({
                            textColor: 'white',
                            pathColor: 'white',
                            trailColor: 'rgba(255,255,255,0.3)',
                            textSize: '32px',
                        })}
                    />
                </div>
            </div>
        </div>
    )
}