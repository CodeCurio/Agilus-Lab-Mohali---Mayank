import { z } from "zod";

export const bookingSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    phone: z.string().regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit mobile number"),
    email: z.string().email("Please enter a valid email address").optional().or(z.literal('')),
    address: z.string().min(10, "Please enter your complete address"),
    date: z.string().min(1, "Please select a preferred date"),
    packageId: z.string().optional(),
    packageName: z.string().optional(),
});

export type BookingFormData = z.infer<typeof bookingSchema>;
