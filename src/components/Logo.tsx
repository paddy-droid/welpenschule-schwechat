import Image from 'next/image';

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

const Logo = ({ width = 200, height = 80, className = '' }: LogoProps) => {
  return (
    <div className={`logo-container ${className}`}>
      <Image
        src="https://www.willenskraft.co.at/wp-content/uploads/2018/06/Final.-Logo-Hundeschule-Willenskraft.-Gute-Hundeschule-Graz-Gleisdorf.png"
        alt="Hundeschule Willenskraft Logo"
        width={width}
        height={height}
        className="object-contain"
        priority
      />
    </div>
  );
};

export default Logo;
