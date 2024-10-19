import { ChevronDown, FolderOpen, Plus, Search } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import img from '../../public/bgHome.png';
import Image from 'next/image';

export function SeedMyProject() {
  return (
    <main className='h-screen flex flex-col pt-28 bg-[#fafafa]'>
      <div className='px-64'>
        <div className='flex mb-4'>
          <FolderOpen className=' size-8 text-[#444648] ' />
          <h1 className='text-3xl font-normal'>Meus Projetos</h1>
        </div>
        <div className=' w-full flex items-center gap-2 justify-between'>
          <div className='pl-1 w-full flex items-center gap-1 border rounded'>
            <Search className='text-[#8a8a8a]' />
            <Input
              type='text'
              placeholder='Faça sua busca...'
              className='border-none border-inp bg-transparent focus:outline-none'
            />
          </div>
          <Button variant='outline'>
            Projetos ativos
            <ChevronDown className='size-6' />
          </Button>
          <Button className=' '>
            Novo Projeto
            <Plus className='size-6' />
          </Button>
        </div>
      </div>
      <div className='flex flex-col items-center mt-32'>
        <span>Parece que ainda não há nenhum projeto criado</span>
        <Image src={img} alt='imagem sem projeto'></Image>
      </div>
    </main>
  );
}
