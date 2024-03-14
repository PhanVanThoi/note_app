import React from 'react';

export interface User {
    id: number;
    username: string;
    email: string;
    password: string;
    full_name: string;
    address: string;
    phone_number: string;
    date_of_birth: string;
}
export const users: User[] =
    [
        {
            id: 1,
            username: "user1",
            email: "vanthanh@example.com",
            password: "password123",
            full_name: "Bùi Văn Thanh",
            address: "123 Street, City A, Country X",
            phone_number: "123-456-7890",
            date_of_birth: "1990-01-01"
        },
        {
            id: 2,
            username: "user2",
            email: "phuocdieu@example.com",
            password: "password456",
            full_name: "Nguyễn Phước Diệu",
            address: "456 Avenue, City B, Country Y",
            phone_number: "234-567-8901",
            date_of_birth: "1995-02-15"
        },
        {
            id: 3,
            username: "user3",
            email: "phuongngan@example.com",
            password: "password789",
            full_name: "Bùi Phương Ngân",
            address: "789 Boulevard, City C, Country Z",
            phone_number: "345-678-9012",
            date_of_birth: "1988-07-20"
        },
        {
            id: 4,
            username: "user4",
            email: "thidieu@example.com",
            password: "passwordabc",
            full_name: "Nguyễn Thị Diệu",
            address: "321 Road, City D, Country W",
            phone_number: "456-789-0123",
            date_of_birth: "1992-11-10"
        },
        {
            id: 5,
            username: "user5",
            email: "vannhat@example.com",
            password: "passwordxyz",
            full_name: "Võ Văn Nhật",
            address: "654 Lane, City E, Country V",
            phone_number: "567-890-1234",
            date_of_birth: "1985-04-05"
        },
    ]