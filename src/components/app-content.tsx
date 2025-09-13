import * as React from 'react';

interface AppContentProps extends React.ComponentProps<'main'> {
    variant?: 'header'; // add more from laravel-react-staterkit
}

export function AppContent({ variant = 'header', children, ...props }: AppContentProps) {
    return (
        <main className="mx-auto flex h-full w-full max-w-7xl flex-1 flex-col gap-4 rounded-xl" {...props}>
            {children}
        </main>
    );
}