export interface User {
    id: number;
    username: string;
    email: string;
    full_name: string;
    date_of_birth?: string;
    gender?: 'M' | 'F' | 'O';
    phone?: string;
    address?: string;
    profile_picture?: string;
    role: 'user' | 'admin' | 'doctor';
    health_score?: number;
}

export interface LoginCredentials {
    email: string;
    password: string;
}

export interface RegisterData {
    username: string;
    email: string;
    password: string;
    full_name: string;
}

export interface AuthResponse {
    token: string;
    user: User;
}