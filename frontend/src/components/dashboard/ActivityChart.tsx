import React from 'react'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts'

const data = [
    { day: 'Sen', detections: 12 },
    { day: 'Sel', detections: 19 },
    { day: 'Rab', detections: 15 },
    { day: 'Kam', detections: 22 },
    { day: 'Jum', detections: 28 },
    { day: 'Sab', detections: 24 },
    { day: 'Min', detections: 18 },
]

export const ActivityChart: React.FC = () => {
    return (
        <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Aktivitas Kesehatan</h3>
            <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                        <XAxis dataKey="day" stroke="#6B7280" />
                        <YAxis stroke="#6B7280" />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: 'white',
                                border: '1px solid #E5E7EB',
                                borderRadius: '8px',
                            }}
                        />
                        <Line
                            type="monotone"
                            dataKey="detections"
                            stroke="#4F46E5"
                            strokeWidth={3}
                            dot={{ fill: '#4F46E5', strokeWidth: 2 }}
                            activeDot={{ r: 8 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <div className="mt-4 text-center text-sm text-gray-600">
                Total Deteksi 30 Hari: 138 pemeriksaan
            </div>
        </div>
    )
}