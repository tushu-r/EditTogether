"use client" ;
import React, { useEffect, useState } from 'react'
import WorkspaceHeader from './/WorkspaceHeader';
import Canvas from './Canvas';
import Editor from './Editor';
import { useConvex } from 'convex/react';
import { FILE } from '../../dashboard/_components/FileList';
import { api } from '@/convex/_generated/api';

const page = ({params}:any) => {

    const [triggerSave,setTriggerSave] = useState(false) ;
    const convex = useConvex() ; 
    const [fileData,setFileData] = useState<FILE|any>() ;

    const getFileData=async()=>{ 
        const result = await convex.query(api.files.getFileById,{_id:params?.field})
        console.log(result);
        setFileData(result);
      }

    useEffect(()=>{
        params?.field&&getFileData() ;
    },[]) ;

  return (
    <div>
      <WorkspaceHeader fileName={fileData?.fileName} onSave={()=>setTriggerSave(!triggerSave)}/>

        <div className='flex flex-row justify-evenly items-center'>
            <div className='h-[93vh]  overflow-x-hidden w-[50%] mt-[0px] border-[2px] border-gray-400'> 
               <Editor onSaveTrigger={triggerSave}
               fileId={params.field}
               fileData={fileData}
               />
            </div>

            <div className='h-[93vh] border-[2px]  w-[50%] border-gray-400'>
                <Canvas 
                onSaveTrigger={triggerSave}
                fileId={params.field} 
                fileData={fileData}
                />
            </div>
        </div>
    </div>
  )
}

export default page
