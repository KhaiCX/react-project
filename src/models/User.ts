export interface User {
    id: number;
    fullName: string;
    email: string;
    username: string;
    phone: string;
    imageUrl: string;
    role: 'ADMIN' | 'USER';
    status: boolean;
    created_at: string;
    updated_at: string;
}