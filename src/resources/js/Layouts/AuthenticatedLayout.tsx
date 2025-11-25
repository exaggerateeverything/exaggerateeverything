import GlobalNav from '@/Components/GlobalNav';
import { usePage } from '@inertiajs/react';
import { PropsWithChildren, ReactNode } from 'react';

export default function Authenticated({
    header,
    children,
}: PropsWithChildren<{ header?: ReactNode }>) {
    const page = usePage().props as {
        auth: { user: { name: string; email: string } | null };
        appName?: string;
    };
    const user = page.auth.user;
    const brandLabel =
        page.appName || import.meta.env.VITE_APP_NAME || 'Exaggerate';
    const navLinks = [
        {
            label: 'Home',
            href: route('home'),
            active: route().current('home'),
        },
        {
            label: 'Dashboard',
            href: route('dashboard'),
            active: route().current('dashboard'),
        },
    ];

    return (
        <div className="min-h-screen bg-[#f7f7f2] text-gray-900 dark:bg-black dark:text-gray-50">
            <GlobalNav brandLabel={brandLabel} links={navLinks} user={user} />

            {header && (
                <header className="border-b border-black/5 bg-white/70 backdrop-blur dark:border-white/10 dark:bg-black/40">
                    <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-0">
                        {header}
                    </div>
                </header>
            )}

            <main className="mx-auto w-full max-w-6xl px-4 pb-16 pt-10 sm:px-6 lg:px-0">
                {children}
            </main>
        </div>
    );
}
