import Image from 'next/image';
import user from '../../public/user.png';
import {
  Bell,
  CalendarFold,
  ChevronDown,
  FolderOpen,
  PanelsTopLeft,
  Plus,
  Search,
} from 'lucide-react';
import { Input } from '@/components/ui/input';

export function SideBar() {
  return (
    <div className=' absolute z-10 top-0 left-0 px-5 h-screen flex-1 flex-col border-r drop-shadow-md'>
      <header className='py-4 border-b mb-5 shadow-none'>
        <div className='px-2 py-1 flex items-center gap-5'>
          <div className='w-52 h-12 flex items-center gap-1 '>
            <Image
              className=' size-10 rounded-full object-cover'
              src={user}
              alt='foto do usuario'
            />
            <div className='flex items-center gap-1'>
              <p className='text-sm font-normal text-[#8a8a8a] '>
                Nome do Usuário
              </p>
              <ChevronDown className='text-[#8a8a8a]' />
            </div>
          </div>
          <div className='flex items-center gap-2 '>
            <Bell className='text-[#8a8a8a]' />
            <PanelsTopLeft className='text-[#8a8a8a]' />
          </div>
        </div>
      </header>
      <main className=' flex flex-col gap-2'>
        <div className='pl-1 flex items-center gap-1 border rounded'>
          <Search className='text-[#8a8a8a]' />
          <Input
            type='text'
            placeholder='Faça sua busca...'
            className='border-none border-inp p-0 bg-transparent focus:outline-none'
          />
        </div>
        <div className=' p-2 flex items-center gap-2'>
          <CalendarFold />
          <p>Hoje</p>
        </div>
        <div className=' p-2 flex items-center justify-between rounded bg-[#7b00be] bg-opacity-15'>
          <div className='flex items-center gap-2 '>
            <FolderOpen className='text-[#7b00be] ' />
            <p className='text-[#7b00be] '>Meus Projetos</p>
          </div>
          <Plus className='text-[#7b00be] ' />
        </div>
      </main>
    </div>
  );
}
