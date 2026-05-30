import React from 'react'
import { CalendarIcon } from '@heroicons/react/24/outline'

const articles = [
    {
        id: 1,
        title: '5 Tips Menjaga Kesehatan di Musim Hujan',
        date: '12 Mei 2024',
        category: 'Tips Kesehatan',
        image: '/assets/article1.jpg',
    },
    {
        id: 2,
        title: 'Pentingnya Deteksi Dini Penyakit',
        date: '10 Mei 2024',
        category: 'Edukasi',
        image: '/assets/article2.jpg',
    },
    {
        id: 3,
        title: 'Polusi Udara dan Dampaknya pada Kesehatan',
        date: '8 Mei 2024',
        category: 'Lingkungan',
        image: '/assets/article3.jpg',
    },
]

export const RecentArticles: React.FC = () => {
    return (
        <div className="bg-white rounded-xl shadow-md">
            <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Artikel Kesehatan Terbaru</h3>
            </div>
            <div className="divide-y divide-gray-200">
                {articles.map((article) => (
                    <div key={article.id} className="p-4 hover:bg-gray-50 transition-colors cursor-pointer">
                        <div className="flex items-start space-x-3">
                            <div className="flex-1">
                                <h4 className="font-medium text-gray-900 mb-1">{article.title}</h4>
                                <div className="flex items-center text-sm text-gray-500">
                                    <CalendarIcon className="w-4 h-4 mr-1" />
                                    <span>{article.date}</span>
                                    <span className="mx-2">•</span>
                                    <span className="text-indigo-600">{article.category}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="p-4 border-t border-gray-200">
                <button className="text-indigo-600 text-sm font-medium hover:text-indigo-700 transition">
                    Lihat Semua Artikel →
                </button>
            </div>
        </div>
    )
}