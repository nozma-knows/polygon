import Image from 'next/image';

interface LogoProps {
  size?: 'default' | 'lg';
}

export const Logo = ({ size = 'default' }: LogoProps) => {
  const dimensions =
    size === 'lg' ? { width: 80, height: 80 } : { width: 60, height: 60 };

  return (
    <Image
      src="/icons/logo.svg"
      alt="Sync Logo"
      {...dimensions}
      className="size-8"
    />
  );
};
