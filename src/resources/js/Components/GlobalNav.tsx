import { Link } from '@inertiajs/react';
import { useState } from 'react';

type NavItem = {
    label: string;
    href: string;
    external?: boolean;
    active?: boolean;
};

type GlobalNavProps = {
    brandLabel?: string;
    brandHref?: string;
    links?: NavItem[];
    user?: {
        name?: string | null;
        email?: string | null;
    } | null;
    canLogin?: boolean;
    canRegister?: boolean;
};

const cx = (...classes: Array<string | false | null | undefined>) =>
    classes.filter(Boolean).join(' ');

export default function GlobalNav({
    brandLabel = 'Exaggerate Everything',
    brandHref = '/',
    links = [],
    user = null,
    canLogin = true,
    canRegister = true,
}: GlobalNavProps) {
    const [menuOpen, setMenuOpen] = useState(false);

    const linkClass =
        'font-body text-[0.7rem] tracking-[0.32em] uppercase text-zinc-500 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50';

    return (
        <div className="border-b border-zinc-200 bg-white/90 text-gray-900 backdrop-blur dark:border-zinc-800 dark:bg-black/60 dark:text-gray-50">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-0">
                <Link
                    href={brandHref}
                    className="font-accent text-xs uppercase tracking-[0.45em] text-gray-900 transition hover:text-black dark:text-gray-50 dark:hover:text-white"
                >
                    {brandLabel}
                </Link>

                <button
                    type="button"
                    aria-label="Toggle navigation"
                    aria-expanded={menuOpen}
                    className="flex size-9 items-center justify-center rounded-full border border-black/15 text-black transition hover:bg-black hover:text-white focus:outline-none focus-visible:ring-1 focus-visible:ring-black dark:border-white/25 dark:text-white dark:hover:bg-white dark:hover:text-black sm:hidden"
                    onClick={() => setMenuOpen((prev) => !prev)}
                >
                    <span className="relative block h-px w-4 bg-current before:absolute before:-top-1.5 before:block before:h-px before:w-full before:bg-current after:absolute after:top-1.5 after:block after:h-px after:w-full after:bg-current"></span>
                </button>

                <div className="hidden items-center gap-8 sm:flex">
                    {links.map((item) => (
                        <NavAnchor
                            key={item.href + item.label}
                            item={item}
                            className={cx(
                                linkClass,
                                item.active && 'text-gray-900 dark:text-white',
                            )}
                        />
                    ))}
                </div>

                <div className="hidden items-center gap-4 sm:flex">
                    {user ? (
                        <>
                            <span className="font-body text-[0.68rem] uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-300">
                                {user.name}
                            </span>
                            <Link
                                href={route('profile.edit')}
                                className={linkClass}
                            >
                                Profile
                            </Link>
                            <Link
                                href={route('logout')}
                                method="post"
                                as="button"
                                className={cx(
                                    linkClass,
                                    'text-gray-900 dark:text-gray-50',
                                )}
                            >
                                Logout
                            </Link>
                        </>
                    ) : (
                        <>
                            {canLogin && (
                                <Link href={route('login')} className={linkClass}>
                                    Sign in
                                </Link>
                            )}
                            {canRegister && (
                                <Link
                                    href={route('register')}
                                    className={cx(
                                        linkClass,
                                        'text-gray-900 dark:text-white',
                                    )}
                                >
                                    Join
                                </Link>
                            )}
                        </>
                    )}
                </div>
            </div>

            {menuOpen && (
                <div className="border-t border-zinc-200 px-4 py-4 text-sm dark:border-zinc-800 sm:hidden">
                    <div className="flex flex-col gap-3">
                        {links.map((item) => (
                            <NavAnchor
                                key={`mobile-${item.href}-${item.label}`}
                                item={item}
                                className={cx(
                                    'font-body text-xs uppercase tracking-[0.28em]',
                                    item.active
                                        ? 'text-gray-900 dark:text-white'
                                        : 'text-zinc-500 dark:text-zinc-400',
                                )}
                                onNavigate={() => setMenuOpen(false)}
                            />
                        ))}
                    </div>
                    <div className="mt-6 flex flex-col gap-3 border-t border-zinc-200 pt-4 text-xs uppercase tracking-[0.28em] dark:border-zinc-800">
                        {user ? (
                            <>
                                <span className="text-zinc-500 dark:text-zinc-300">
                                    {user.name}
                                </span>
                                <Link
                                    href={route('profile.edit')}
                                    className="text-gray-900 dark:text-white"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Profile
                                </Link>
                                <Link
                                    href={route('logout')}
                                    method="post"
                                    as="button"
                                    className="text-gray-900 dark:text-white"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Logout
                                </Link>
                            </>
                        ) : (
                            <>
                                {canLogin && (
                                    <Link
                                        href={route('login')}
                                        className="text-gray-900 dark:text-white"
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        Sign in
                                    </Link>
                                )}
                                {canRegister && (
                                    <Link
                                        href={route('register')}
                                        className="text-gray-900 dark:text-white"
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        Join
                                    </Link>
                                )}
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

const NavAnchor = ({
    item,
    className,
    onNavigate,
}: {
    item: NavItem;
    className?: string;
    onNavigate?: () => void;
}) => {
    if (item.external) {
        return (
            <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className={className}
            >
                {item.label}
            </a>
        );
    }

    return (
        <Link
            href={item.href}
            className={className}
            aria-current={item.active ? 'page' : undefined}
            onClick={onNavigate}
        >
            {item.label}
        </Link>
    );
};

