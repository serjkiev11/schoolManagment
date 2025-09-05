import Menu from '@/components/Menu'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import Link from 'next/link'

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className='min-h-screen w-full flex'>
      {/* LEFT */}
      <div className='w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4 h-full'>
        <Link
          href='/'
          className='flex items-center justify-center lg:justify-start gap-2'
        >
          <Image src='/lsel.png' alt='logo' width={32} height={32} />
          <span className='hidden lg:block font-bold'>L-SEL Group</span>
        </Link>
        <Menu />
      </div>
      {/* RIGHT */}
      <div className='w-full min-w-0 bg-[#F7F8FA] overflow-x-auto flex flex-col fix'>
        <Navbar />
        {children}
      </div>
    </div>
  )
}
