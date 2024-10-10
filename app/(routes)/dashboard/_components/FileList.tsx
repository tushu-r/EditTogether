import { FileListContext } from '@/app/_context/FilesListContext' ;
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs' ;
import { Archive, MoreHorizontal } from 'lucide-react' ;
import moment from 'moment' ;
import Image from 'next/image' ;
import React, { useContext, useEffect, useState } from 'react' ;
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"  ;

import { useRouter } from 'next/navigation' ;

export interface FILE{
  archive?:boolean,
  createdBt?:string,
  document?:string,
  fileName?:string,
  teamId?:string,
  whiteboard?:string,
  _id?:string,
  _creationTime?:number
}

function FileList() {

  const {fileList_,setFileList_}=useContext(FileListContext);
  const [fileList,setFileList]=useState<any>();
  const {user}:any=useKindeBrowserClient();
  const router=useRouter();
  useEffect(()=>{
    fileList_&&setFileList(fileList_);
    console.log("filelist",fileList_);
  },[fileList_])

  return (
    <div className='mt-10'>

      
    <div className="overflow-x-auto ">
      <table className="min-w-full gray-200 bg-white text-sm">
        <thead className="text-center">
            <tr>
            <td className=" whitespace-nowrap px-4 py-2 font-medium text-gray-900">File Name</td>
            <td className=" whitespace-nowrap px-4 py-2 font-medium text-gray-900">Created At</td>
            <td className=" whitespace-nowrap px-4 py-2 font-medium text-gray-900">Edited</td>
            <td className=" whitespace-nowrap px-4 py-2 font-medium text-gray-900">Author</td>
            </tr>
        </thead>

        <tbody className="gray-200">
          {fileList&&fileList.map((file:FILE,index:number)=>(
            <tr key={index} className="odd:bg-gray-50 hover:bg-gray-300 cursor-pointer text-center"
            onClick={()=>router.push('/workspace/' + file?._id)}
            >
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                {file.fileName}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {moment(file._creationTime).format('DD MMM YYYY')} </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
              {moment(file._creationTime).format('DD MMM YYYY')}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700 flex justify-center">
              {user&& <Image src= {user?.picture}
                alt='user'
                width={30}
                height={30}
                className='rounded-full'
                />}
              </td>
            </tr>
          ))}
          
        </tbody>

      </table>
    </div>


    </div>
  )
}

export default FileList