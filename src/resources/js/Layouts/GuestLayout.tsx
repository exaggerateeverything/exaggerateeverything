import GlobalNav from '@/Components/GlobalNav';
import { usePage } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

export default function Guest({ children }: PropsWithChildren) {
    const page = usePage().props as {
        auth: { user: { name: string; email: string } | null };
        appName?: string;
        canLogin?: boolean;
        canRegister?: boolean;
    };

    const brandLabel =
        page.appName || import.meta.env.VITE_APP_NAME || 'Exaggerate';

    const navLinks = [
        {
            label: 'Home',
            href: route('home'),
            active: route().current('home'),
        },
    ];

    return (
        <div className="flex min-h-screen flex-col bg-[#f7f7f2] text-gray-900 dark:bg-black dark:text-gray-50">
            <GlobalNav
                brandLabel={brandLabel}
                links={navLinks}
                user={page.auth.user}
                canLogin={page.canLogin ?? true}
                canRegister={page.canRegister ?? true}
            />

            <main className="flex flex-1 items-center justify-center px-4 py-12">
                <div className="w-full max-w-md rounded-2xl border border-black/10 bg-white/85 p-8 shadow-sm backdrop-blur dark:border-white/10 dark:bg-black/40">
                    {children}
                </div>
            </main>
        </div>
    );
}
