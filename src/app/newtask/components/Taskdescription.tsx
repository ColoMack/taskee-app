'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { taskFormSchema } from '@/lib/validation/taskFormVal';
import { zodResolver } from '@hookform/resolvers/zod'

import { BsTextLeft } from 'react-icons/bs'

type Inputs = {
    description: String;
}

const Taskdescription = () => {
    const {
        formState: { errors, isSubmitting },
    } = useForm<Inputs>({
        defaultValues: {
            description: ''
        },
        resolver: zodResolver(taskFormSchema)
    })

    return (
        <div className='flex flex-col'>
            <div className="flex flex-row items-center gap-4">
                <div className='rounded-full bg-[#e8f3ff] p-[0.5rem]'>
                    <BsTextLeft className='h-5 w-5 text-[#494949]'/>
                </div>

                <div className='flex flex-col'>
                    <span className='text-[#5082b8] text-[1.2rem]'>Task Description</span>
                    <span className='text-[#9ca3ab] text-[0.8rem]'>Enter description of the task. </span>
                </div>
            </div>

            <div className='ml-[3.3rem] mt-[1rem] flex flex-col'>
                <textarea style={{border:'', outline:'none'}} className='
                    border
                    border-zinc-300
                    py-[0.5rem]
                    px-4
                '
                placeholder='Enter text here'
                rows={6}
                cols={10}
                id='description'
                disabled={isSubmitting}
                ></textarea>
                <label className='text-[0.82rem] mt-[0.4rem] text-zinc-500' htmlFor='description'>Description</label>

                {errors.description?.message && <div className='text-red-400 text-sm'>{errors.description?.message}</div>}
            </div>
        </div>
    );
}
 
export default Taskdescription;