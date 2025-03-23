import Link from 'next/link';
import { Logo } from '~/components/logo';
import { ProfileMenu } from '~/components/header/profile-menu';
import { type Session } from 'next-auth';
import { ProjectsSelector } from '~/app/(protected)/projects/_components/projects-selector';

interface HeaderProps {
  session: Session | null;
}

export function Header({ session }: HeaderProps) {
  const user = session?.user;

  return (
    <header className="px-6 border-b h-16 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Link href="/" className="z-10 flex-shrink-0">
          <Logo />
        </Link>
        <ProjectsSelector />
      </div>

      {user && <ProfileMenu />}
    </header>
  );
}