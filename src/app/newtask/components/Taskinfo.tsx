'use client'

import { useForm, SubmitHandler } from 'react-hook-form';
import { taskFormSchema } from '@/lib/validation/taskFormVal';
import { zodResolver } from '@hookform/resolvers/zod'

import { IoInformationOutline } from 'react-icons/io5'

type Inputs = {
    taskName: string;
}

const Taskinfo = () => {

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        watch
    } = useForm<Inputs>({
        defaultValues: {
            taskName: ''
        },
        resolver: zodResolver(taskFormSchema)
    })

    return (
        <div className='flex flex-col'>
            <div className="flex flex-row items-center gap-4">
                <div className='rounded-full bg-[#e8f3ff] p-[0.4rem]'>
                    <IoInformationOutline className='h-6 w-6 text-[#494949]'/>
                </div>

                <div className='flex flex-col'>
                    <span className='text-[#5082b8] text-[1.2rem]'>Task information</span>
                    <span className='text-[#9ca3ab] text-[0.8rem]'>Enter Name, Due date and Priority of the task. </span>
                </div>
            </div>

            <div className='ml-[3.3rem] mt-[1rem] flex flex-col'>
                <input style={{borderBottom:'solid 1px', outline:'none'}} className='
                    w-[30rem]
                    py-[0.2rem]
                    px-4
                '
                placeholder='e.g Wash the car tonight'
                type='text'
                id='taskName'
                disabled={isSubmitting}
                />
                <label className='text-[0.82rem] mt-[0.4rem] text-zinc-500' htmlFor='taskName'>Task Name</label>

                {errors.taskName?.message && <div className='text-red-400 text-sm'>{errors.taskName?.message}</div>}
            </div>

            <div className='ml-[3.3rem] mt-[1.5rem]'>
                <label className='text-zinc-500'>Due date:</label>
                <input className='
                    cursor-pointer
                    ml-[0.5rem]
                    border
                    border-zinc-300
                    py-[0.3rem]
                    px-[0.8rem]
                '
                type='date'
                />
            </div>
        </div>
    );
}
 
export default Taskinfo;