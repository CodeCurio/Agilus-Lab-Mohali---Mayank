import fs from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data');
const BOOKINGS_FILE = path.join(DATA_DIR, 'bookings.json');

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
}

// Initialize bookings file if not exists
if (!fs.existsSync(BOOKINGS_FILE)) {
    fs.writeFileSync(BOOKINGS_FILE, JSON.stringify([]));
}

export interface Booking {
    id: string;
    name: string;
    phone: string;
    packageName: string;
    date: string;
    address: string;
    createdAt: string;
    status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
}

export const storage = {
    getBookings: (): Booking[] => {
        try {
            const data = fs.readFileSync(BOOKINGS_FILE, 'utf-8');
            return JSON.parse(data);
        } catch (error) {
            console.error('Error reading bookings:', error);
            return [];
        }
    },

    addBooking: (booking: Booking): void => {
        try {
            const bookings = storage.getBookings();
            bookings.unshift(booking); // Add to top
            fs.writeFileSync(BOOKINGS_FILE, JSON.stringify(bookings, null, 2));
        } catch (error) {
            console.error('Error saving booking:', error);
        }
    },

    updateBooking: (id: string, updates: Partial<Booking>): void => {
        try {
            const bookings = storage.getBookings();
            const index = bookings.findIndex(b => b.id === id);
            if (index !== -1) {
                bookings[index] = { ...bookings[index], ...updates };
                fs.writeFileSync(BOOKINGS_FILE, JSON.stringify(bookings, null, 2));
            }
        } catch (error) {
            console.error('Error updating booking:', error);
        }
    },

    deleteBooking: (id: string): void => {
        try {
            const bookings = storage.getBookings();
            const filteredBookings = bookings.filter(b => b.id !== id);
            fs.writeFileSync(BOOKINGS_FILE, JSON.stringify(filteredBookings, null, 2));
        } catch (error) {
            console.error('Error deleting booking:', error);
        }
    }
};
