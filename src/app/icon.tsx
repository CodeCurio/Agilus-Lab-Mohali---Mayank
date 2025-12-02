import { ImageResponse } from 'next/og';
import { readFileSync } from 'fs';
import { join } from 'path';

// Route segment config
export const runtime = 'nodejs';

// Image metadata
export const size = {
    width: 192,
    height: 192,
};
export const contentType = 'image/png';

// Image generation
export default function Icon() {
    // Read the logo file
    const logoPath = join(process.cwd(), 'public', 'logo.png');
    const logoData = readFileSync(logoPath);
    const logoBase64 = `data:image/png;base64,${logoData.toString('base64')}`;

    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                style={{
                    background: 'white',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '20%', // Rounded corners for a modern look
                }}
            >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={logoBase64}
                    alt="Logo"
                    style={{
                        width: '80%',
                        height: '80%',
                        objectFit: 'contain',
                    }}
                />
            </div>
        ),
        {
            ...size,
        }
    );
}
