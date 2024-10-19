import * as React from 'react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { FolderOpen, X } from 'lucide-react';

export function NewProject() {
  return (
    <div className=' absolute top-0 left-0 z-10 w-full h-screen flex items-center justify-center bg-[#D9D9D9] bg-opacity-5 backdrop-blur-sm '>
      <Card className='w-[600px] ml-[340px] '>
        <CardHeader className='py-7 flex flex-row items-center justify-between border-b'>
          <div className='flex flex-row items-center gap-2 '>
            <FolderOpen className=' size-6 text-[#444648] ' />
            <CardTitle className=' font-semibold text-base'>
              Novo Projeto
            </CardTitle>
          </div>
          <X className='text-[#444648]' />
        </CardHeader>
        <CardContent className='py-8'>
          <form>
            <div className='flex flex-col space-y-1.5'>
              <Label className='font-semibold ' htmlFor='name'>
                Name
              </Label>
              <Input id='name' placeholder='Digite nome do projeto' />
            </div>
          </form>
        </CardContent>
        <CardFooter className='py-3 flex gap-2 justify-end border-t '>
          <Button className='w-[102px] border-none ' variant='outline'>
            Cancel
          </Button>
          <Button className='w-[102px] '>Criar</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
