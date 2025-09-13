import AppLayoutTemplate from '@/layout/app/app-header-layout';
import { type BreadcrumbItem } from '@/types';
// import { usePage } from '@inertiajs/react';
import { type ReactNode } from 'react';
import { Link } from 'react-router';

interface AppLayoutProps {
    children: ReactNode;
    breadcrumbs?: BreadcrumbItem[];
}

export default function AppLayout({ children, breadcrumbs, ...props }: AppLayoutProps) {
    const currentYear = new Date().getFullYear();
    const data = {
        app_name: import.meta.env.VITE_APP_NAME ?? 'LangSwap',
        footer_link: import.meta.env.VITE_FOOTER_LINK ?? 'https://fb.com/BilalSwl.6',
        footer_text: import.meta.env.VITE_FOOTER_TEXT ?? 'Bilal',
    };


    return (
        <>
            <AppLayoutTemplate breadcrumbs={breadcrumbs} {...props}>
                {children}
                <footer className="w-full border-t py-6">
                    <div className="container mx-auto flex flex-col items-center space-y-2 p-4 px-4 text-center md:flex-row md:items-center md:justify-between md:space-y-0 md:text-left">
                        <p className="text-muted-foreground text-sm">
                        &copy; {currentYear} - {data.app_name}. All rights reserved.
                        </p>
                        <p className="text-muted-foreground text-sm">
                        Developed by{" "}
                        <span>
                            <Link to={data.footer_link} target="_blank">{data.footer_text}</Link>
                        </span>
                        </p>
                    </div>
                </footer>

            </AppLayoutTemplate>
        </>
    );
};