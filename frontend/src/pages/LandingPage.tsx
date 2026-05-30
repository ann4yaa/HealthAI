import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
    ShieldCheckIcon,
    ChatBubbleLeftRightIcon,
    ChartBarIcon,
    ArrowRightIcon
} from '@heroicons/react/24/outline'

const LandingPage: React.FC = () => {
    const features = [
        {
            icon: ShieldCheckIcon,
            title: 'Deteksi Akurat',
            description: 'Menggunakan AI canggih untuk deteksi dini penyakit',
        },
        {
            icon: ChatBubbleLeftRightIcon,
            title: 'AI Chatbot',
            description: 'Konsultasi kesehatan dengan AI 24/7',
        },
        {
            icon: ChartBarIcon,
            title: 'Analisis Statistik',
            description: 'Pantau tren kesehatan Anda secara real-time',
        },
    ]

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
            {/* Hero Section */}
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-purple-600/10" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                HealthAI
                            </span>
                            <br />
                            AI Powered Health Screening
                        </h1>
                        <p className="text-xl text-gray-600 mb-4">
                            Deteksi Awal Penyakit Dengan Artificial Intelligence
                        </p>
                        <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
                            HealthAI membantu Anda melakukan screening awal penyakit berdasarkan gejala yang dialami
                            menggunakan teknologi Artificial Intelligence yang canggih dan terpercaya.
                        </p>
                        <div className="flex justify-center gap-4">
                            <Link
                                to="/register"
                                className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-all duration-200 transform hover:scale-105"
                            >
                                Mulai Deteksi
                                <ArrowRightIcon className="ml-2 w-5 h-5" />
                            </Link>
                            <Link
                                to="/login"
                                className="inline-flex items-center px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg border border-indigo-600 hover:bg-indigo-50 transition-all duration-200"
                            >
                                Login
                            </Link>
                        </div>
                        <div className="mt-8 text-sm text-gray-500">
                            ⚠️ Sistem ini tidak menggantikan diagnosis dokter profesional. Hasil yang diberikan hanya berupa prediksi awal.
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Statistics Section */}
            <div className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="text-4xl font-bold text-indigo-600">5,000+</div>
                            <div className="text-gray-600 mt-2">Pengguna Aktif</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-indigo-600">120+</div>
                            <div className="text-gray-600 mt-2">Penyakit</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-indigo-600">98%</div>
                            <div className="text-gray-600 mt-2">Tingkat Akurasi</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300"
                            >
                                <div className="inline-flex p-3 bg-indigo-100 rounded-full mb-4">
                                    <feature.icon className="w-6 h-6 text-indigo-600" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-indigo-600 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Siap Memulai Deteksi Dini?
                    </h2>
                    <p className="text-indigo-100 mb-8">
                        Bergabunglah dengan ribuan pengguna yang sudah merasakan manfaat HealthAI
                    </p>
                    <Link
                        to="/register"
                        className="inline-flex items-center px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105"
                    >
                        Daftar Sekarang
                        <ArrowRightIcon className="ml-2 w-5 h-5" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default LandingPage