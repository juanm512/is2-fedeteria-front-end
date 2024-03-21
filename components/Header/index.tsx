import Image from 'next/image';

import MobileMenu from '@/components/Header/MobileMenu';
import Notifications from '@/components/Header/Notifications';
import NotificationsViewer from '@/components/Header/Notifications/Viewer';
import Profile from '@/components/Header/Profile';
import ProfileLinks from '@/components/Header/Profile/Links';
import NavLinks from './NavLinks';
import Link from 'next/link';

export default async function Nav() {
  return (
    <nav className="w-full bg-secondary-700">
      <div className="mx-auto w-full max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between z-30">
          {/* <!-- Mobile menu, show/hide based on menu state. --> */}
          <MobileMenu>
            <div
              className="absolute z-20 -ml-2 w-screen bg-secondary-700 top-16 sm:hidden group-data-[state=expanded]:opacity-100 group-data-[state=collapsed]:opacity-0 group-data-[state=expanded]:-translate-y-0 group-data-[state=collapsed]:-translate-y-[200%] transition-all duration-500"
              id="mobile-menu"
            >
              <div className="w-11/12 mx-auto space-y-1 px-2 pb-3 pt-2">
                {/* <!-- Current: "bg-primary-500 text-text-800 font-semibold", Default: "text-text-200 hover:bg-secondary-800 hover:text-text-100" --> */}
                <NavLinks />
              </div>
            </div>
          </MobileMenu>

          <div className="flex flex-1 items-center justify-center sm:justify-start">
            <Link
              href={'/'}
              className="relative h-16 aspect-video flex flex-shrink-0 items-center drop-shadow-lg"
            >
              <Image
                width={100}
                height={100}
                className="h-fit w-fit object-contain"
                src="/fedeteria_logos/Fedeteria_Horizontal.svg"
                alt="Your Company"
              />
            </Link>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {/* <!-- Current: "bg-primary-500 text-text-800 font-semibold", Default: "text-text-200 hover:bg-secondary-800 hover:text-text-100" --> */}
                <NavLinks />
              </div>
            </div>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center gap-1 sm:gap-4 pr-1 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Notifications>
              <NotificationsViewer />
            </Notifications>
            <Profile>
              <ProfileLinks />
            </Profile>
          </div>
        </div>
      </div>
    </nav>
  );
}
