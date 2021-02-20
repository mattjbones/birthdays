import Image from 'next/image';

export default function ProfileImage() {
  return (
    <Image src="/images/me.jpg" height={144} width={144} alt="Your Name" />
  );
}
