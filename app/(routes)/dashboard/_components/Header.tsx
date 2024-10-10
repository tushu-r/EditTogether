import { Button } from '@/components/ui/button';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { Search , Send } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function Header({user1}:{user1:any}) {
    const user:any= user1
  return (
    <div className='header flex justify-end w-full gap-2 items-center'>
        
        <div>
            <Image src={user?.picture} alt='user'
            width={30}
            height={30}
            className='rounded-full'
            />
        </div>
      
    </div>
  )
}

export default Header