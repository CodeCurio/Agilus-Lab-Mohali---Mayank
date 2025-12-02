"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Booking } from "@/lib/storage";
import { Lock, RefreshCw, LogOut, Calendar, MapPin, Phone, User, Trash2, CheckCircle, Clock, XCircle } from "lucide-react";

export default function AdminPage() {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState("");
    const [bookings, setBookings] = useState<Booking[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleLogout = () => {
        setIsAuthenticated(false);
        router.push("/");
    };

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === "admin123") { // Hardcoded for demo
            setIsAuthenticated(true);
            fetchBookings();
        } else {
            setError("Invalid password");
        }
    };

    const fetchBookings = async () => {
        setLoading(true);
        try {
            const res = await fetch("/api/booking?key=admin123");
            if (res.ok) {
                const data = await res.json();
                setBookings(data.bookings);
            }
        } catch (err) {
            console.error("Failed to fetch bookings", err);
        } finally {
            setLoading(false);
        }
    };

    const updateStatus = async (id: string, newStatus: string) => {
        try {
            const res = await fetch("/api/booking", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id, status: newStatus, key: "admin123" }),
            });
            if (res.ok) {
                fetchBookings();
            }
        } catch (err) {
            console.error("Failed to update status", err);
        }
    };

    const deleteBooking = async (id: string) => {
        if (!confirm("Are you sure you want to delete this booking?")) return;
        try {
            const res = await fetch(`/api/booking?key=admin123&id=${id}`, {
                method: "DELETE",
            });
            if (res.ok) {
                fetchBookings();
            }
        } catch (err) {
            console.error("Failed to delete booking", err);
        }
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
                    <div className="text-center mb-8">
                        <div className="h-12 w-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Lock className="h-6 w-6 text-brand-primary" />
                        </div>
                        <h1 className="text-2xl font-bold text-slate-900">Admin Login</h1>
                        <p className="text-slate-500">Enter password to access dashboard</p>
                    </div>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all"
                        />
                        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
                        <Button type="submit" className="w-full h-12 text-lg">
                            Login
                        </Button>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Admin Header */}
            <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <h1 className="font-bold text-xl text-slate-800">Agilus Admin</h1>
                    <div className="flex items-center gap-4">
                        <Button variant="outline" size="sm" onClick={fetchBookings} disabled={loading}>
                            <RefreshCw className={`h-4 w-4 mr-2 ${loading ? "animate-spin" : ""}`} />
                            Refresh
                        </Button>
                        <Button variant="ghost" size="sm" onClick={handleLogout} className="text-red-500 hover:text-red-600 hover:bg-red-50">
                            <LogOut className="h-4 w-4 mr-2" />
                            Logout
                        </Button>
                    </div>
                </div>
            </header>

            <main className="container mx-auto px-4 py-8">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-bold">Recent Bookings</h2>
                    <span className="bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full text-sm font-medium">
                        {bookings.length} Total
                    </span>
                </div>

                {bookings.length === 0 ? (
                    <div className="bg-white rounded-2xl p-12 text-center border border-slate-200">
                        <p className="text-slate-500">No bookings found yet.</p>
                    </div>
                ) : (
                    <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-slate-200">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-slate-50 text-slate-600 border-b border-slate-100">
                                    <tr>
                                        <th className="p-4 font-semibold">Date</th>
                                        <th className="p-4 font-semibold">Name</th>
                                        <th className="p-4 font-semibold">Phone</th>
                                        <th className="p-4 font-semibold">Package</th>
                                        <th className="p-4 font-semibold">Address</th>
                                        <th className="p-4 font-semibold">Status</th>
                                        <th className="p-4 font-semibold text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {bookings.map((booking) => (
                                        <tr key={booking.id} className="hover:bg-slate-50 transition-colors">
                                            <td className="p-4 whitespace-nowrap text-slate-500">
                                                {new Date(booking.createdAt).toLocaleDateString()}
                                            </td>
                                            <td className="p-4 font-medium text-slate-900">{booking.name}</td>
                                            <td className="p-4 text-slate-600">{booking.phone}</td>
                                            <td className="p-4 text-brand-primary font-medium">{booking.packageName}</td>
                                            <td className="p-4 max-w-xs truncate text-slate-500" title={booking.address}>
                                                {booking.address}
                                            </td>
                                            <td className="p-4">
                                                <select
                                                    value={booking.status}
                                                    onChange={(e) => updateStatus(booking.id, e.target.value)}
                                                    className={`px-2 py-1 rounded-full text-xs font-medium uppercase tracking-wide border-none outline-none cursor-pointer ${booking.status === 'confirmed' ? 'bg-green-100 text-green-700' :
                                                        booking.status === 'completed' ? 'bg-blue-100 text-blue-700' :
                                                            booking.status === 'cancelled' ? 'bg-red-100 text-red-700' :
                                                                'bg-yellow-100 text-yellow-700'
                                                        }`}
                                                >
                                                    <option value="pending">Pending</option>
                                                    <option value="confirmed">Confirmed</option>
                                                    <option value="completed">Completed</option>
                                                    <option value="cancelled">Cancelled</option>
                                                </select>
                                            </td>
                                            <td className="p-4 text-right">
                                                <button
                                                    onClick={() => deleteBooking(booking.id)}
                                                    className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                                                    title="Delete Booking"
                                                >
                                                    <Trash2 className="h-4 w-4" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}
