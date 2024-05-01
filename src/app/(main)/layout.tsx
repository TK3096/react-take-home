import { SubmitButton } from '@/components/ballot/SubmitButton'
import { Navbar } from '@/components/navbar/Navbar'

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='h-full w-full md:w-[900px] lg:w-[1200px] mx-auto px-4 md:px-6'>
      <Navbar title='Awards 2024' />
      <main className='w-full pt-4 pb-20 '>{children}</main>
      <div className='fixed bottom-0 left-0 w-full bg-[#0D2436]'>
        <div className='px-4 py-5 md:px-6 w-full md:w-[900px] lg:w-[1200px] mx-auto'>
          <SubmitButton />
        </div>
      </div>
    </div>
  )
}

export default MainLayout
