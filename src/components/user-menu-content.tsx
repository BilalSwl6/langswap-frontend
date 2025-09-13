import { DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from '@/components/ui/dropdown-menu';
import { UserInfo } from '@/components/user-info';
import { useMobileNavigation } from '@/hooks/use-mobile-navigation';
import { type User } from '@/types';
// import { Link } from 'react-router';
import { LogOut, Settings } from 'lucide-react';
import axios from 'axios';

interface UserMenuContentProps {
    user: User;
}

export function UserMenuContent({ user }: UserMenuContentProps) {
    const cleanup = useMobileNavigation();

    const handleLogout = () => {
        cleanup();
        axios.post('/logout');
    }

    const handleProfile = () => {
        cleanup();
        axios.get('/profile')
    }

    return (
        <>
            <DropdownMenuLabel className="p-0 font-normal">
                <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                    <UserInfo user={user} showEmail={true} />
                </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
                <DropdownMenuItem asChild>
                    <button onClick={handleProfile}>
                    {/* <Link className="block w-full" href={route('profile.edit')} as="button" prefetch onClick={cleanup}> */}
                        <Settings className="mr-2" />
                        Settings
                    {/* </Link> */}
                    </button>
                </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
                <button className="block w-full" onClick={handleLogout}>
                {/* <Link className="block w-full" method="post" href={route('logout')}> */}
                    <LogOut className="mr-2" />
                    Log out
                {/* </Link> */}
                </button>
            </DropdownMenuItem>
        </>
    );
}