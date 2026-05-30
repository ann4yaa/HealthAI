import React from 'react'

export const Footer: React.FC = () => {
    return (
        <footer className="bg-white border-t border-gray-200 py-4">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
                    <p>&copy; 2024 HealthAI. All rights reserved.</p>
                    <div className="flex space-x-4 mt-2 md:mt-0">
                        <a href="/privacy" className="hover:text-indigo-600 transition">Kebijakan Privasi</a>
                        <a href="/terms" className="hover:text-indigo-600 transition">Syarat & Ketentuan</a>
                        <a href="/contact" className="hover:text-indigo-600 transition">Kontak</a>
                    </div>
                    <p className="mt-2 md:mt-0 text-xs">
                        ⚠️ Sistem tidak menggantikan diagnosis dokter profesional
                    </p>
                </div>
            </div>
        </footer>
    )
}