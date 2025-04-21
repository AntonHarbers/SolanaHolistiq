// File: app/confirmation/page.tsx
import { Suspense } from 'react';
import ConfirmationClient from './ConfirmationClient';

export default function Page() {
    return (
        <Suspense fallback={<p className="p-8 text-center">Loading confirmation...</p>}>
            <ConfirmationClient />
        </Suspense>
    );
}
