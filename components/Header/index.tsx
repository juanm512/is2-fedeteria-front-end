import Image from 'next/image';

import Notifications from '@/components/Header/Notifications';
import NotificationsViewer from '@/components/Header/Notifications/Viewer';
import ProfileButton from '@/components/Header/Profile';
import ProfileLinks from '@/components/Header/Profile/Links';
import NavLinks from './NavLinks';
import Link from 'next/link';
import MobileContainer from './MobileContainer';
import MobileMenuButton from '@/components/Header/MobileMenuButton';
import FloatContainer from './FloatContainer';

export default async function Nav() {
  return (
    <nav className="relative w-full bg-secondary-700 z-30">
      <div className="mx-auto w-full max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between z-30">
          {/* <!-- Mobile menu, show/hide based on menu state. --> */}
          <MobileMenuButton />
          <MobileContainer menu="MOBILE">
            <div className="w-11/12 mx-auto space-y-1 px-2 pb-3 pt-2">
              <NavLinks />
            </div>
          </MobileContainer>
          <MobileContainer menu="PROFILE">
            <ProfileLinks />
          </MobileContainer>
          <MobileContainer menu="NOTIFICATIONS">
            <NotificationsViewer />
          </MobileContainer>

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
                {/* hacer un wrapper para pasarle el pathname por el data- del parent */}
                <NavLinks />
              </div>
            </div>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center gap-1 sm:gap-4 pr-1 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Notifications />
            <FloatContainer menu="NOTIFICATIONS" wClass={'w-96'}>
              <NotificationsViewer />
            </FloatContainer>

            {/* PROFILE */}
            <ProfileButton />
            <FloatContainer menu="PROFILE" wClass={'w-48'}>
              <ProfileLinks />
            </FloatContainer>
          </div>
        </div>
      </div>
    </nav>
  );
}
