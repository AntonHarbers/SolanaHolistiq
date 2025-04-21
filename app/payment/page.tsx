// File: app/payment/page.tsx
import { Suspense } from 'react';
import PaymentPageClient from './PaymentPageClient';


export default function Page() {
    return (
        <Suspense fallback={<p className="p-8 text-center">Loading payment...</p>}>
            <PaymentPageClient />
        </Suspense>
    );
}
