import { FolderOpen, Settings } from 'lucide-react';

export function Header() {
  return (
    <div className=' absolute pl-[390px] w-full left-0 top-0 py-5 px-12 flex items-center justify-between bg-[#fafafa]'>
      <div className='flex items-center gap-1 scale-0'>
        <FolderOpen className=' size-6 text-[#444648] ' />
        <p>Meus Projetos |</p>
      </div>
      <div className='flex items-center'>
        <Settings className=' size-6 text-[#444648]' />
        Configurações
      </div>
    </div>
  );
}
