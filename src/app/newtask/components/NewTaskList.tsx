'use client';

import Input from "@/app/components/Input";
import Taskdescription from "./Taskdescription";
import Taskinfo from "./Taskinfo";
import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

// icons from react icons..
import { IoInformationOutline } from 'react-icons/io5'
import { BsTextLeft } from 'react-icons/bs'
import { BsTag } from 'react-icons/bs'
import { AiOutlinePlus } from 'react-icons/ai'
import { AiOutlineClose } from 'react-icons/ai'

interface InitialStateProps {
    taskName?:string,
    duedate: string,
}

const initialState: InitialStateProps = {
    taskName: '',
    duedate:'',
}

const NewTaskList = () => {

    const [state, setState] = useState(initialState)
    const router = useRouter()

    const setCustomValue = (id: any, value: any) => {
        setState((prevValues) => ({
            ...prevValues,
            [id]: value,
        }));

        function handleChange(event: ChangeEvent<HTMLInputElement>) {
            setState({...state, [event.target.name]: event.target.value});
        }

        const onSubmit = (event:FormEvent) => {
            event.preventDefault();

        }
    }

    // cretaing of the tag names..
    const [tagWords, setTagWords] = useState('');
    const [tags, setTags] = useState<string[]>([]);

    const createTagNameFromPhrase = (phrase: string): string => {
        return phrase
            
            .toLowerCase()
            .replace(/[\s_]+/g, "-");
    }

    const handleCreateTag = (event: React.FormEvent) => {
        event.preventDefault();
        const tagName = createTagNameFromPhrase(tagWords) as string;

        setTags([...tags, tagName]);
        setTagWords("");
    };

    return (
        <div style={{boxShadow:'0px 0px 0px 0px black'}} className="
            border
            border-zinc-200
            py-[2rem]
            px-[1.5rem]
            rounded-[7px]
            bg-white
            flex
            flex-col
        ">
            <form>
                <section>
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

                            <Input 
                                type='text'
                                name="taskName"
                                id="taskName"
                                placeholder="eg: Practise python coding"
                            //    onChange={}
                            //    value={}
                            />
                            

                            {/* <input style={{borderBottom:'solid 1px', outline:'none'}} className='
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

                            {errors.taskName?.message && <div className='text-red-400 text-sm'>{errors.taskName?.message}</div>} */}
                        </div>

                        <div className='ml-[3.3rem] mt-[1.5rem] flex flex-col gap-[0.3rem]'>
                            <label className='text-zinc-500'>Due date:</label>
                            <Input 
                                small
                                type='date'
                                name="duedate"
                                id="duedate"
                                placeholder=""
                            //    onChange={}
                            //    value={}
                            />
                            {/* <input className='
                                cursor-pointer
                                ml-[0.5rem]
                                border
                                border-zinc-300
                                py-[0.3rem]
                                px-[0.8rem]
                            '
                            type='date'
                            /> */}
                        </div>

                        {/* should use the select tag for the 'priority' input */}
                    </div> 
                </section>

                <hr className="border border-zinc-100 my-[2rem]" style={{}}></hr>

                <section>
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
                            <Input 
                                type='text'
                                textarea
                                id="description"
                                name="description"
                                placeholder="Add a detailed description.."
                            />

                            {/* <textarea style={{border:'', outline:'none'}} className='
                                border
                                border-zinc-300
                                py-[0.5rem]
                                px-4
                            '
                            placeholder='Enter text here'
                            rows={6}
                            cols={10}
                            id='description'
                            
                            ></textarea>
                            <label className='text-[0.82rem] mt-[0.4rem] text-zinc-500' htmlFor='description'>Description</label>

                            {errors.description?.message && <div className='text-red-400 text-sm'>{errors.description?.message}</div>} */}
                        </div>
                    </div>               
                </section>

                <hr className="border border-zinc-100 my-[2rem]" style={{}}></hr>

                <section>
                    <div className="flex flex-col">
                        <div className="flex flex-row items-center gap-4">
                                <div className='rounded-full bg-[#e8f3ff] p-[0.5rem]'>
                                    <BsTag className='h-5 w-5 text-[#494949]'/>
                                </div>

                                <div className='flex flex-col'>
                                    <span className='text-[#5082b8] text-[1.2rem]'>Task Tag</span>
                                    <span className='text-[#9ca3ab] text-[0.8rem]'>Create tags that summarise your task. </span>
                                </div>
                            </div>
                        </div>

                        <div className="ml-[3.3rem] mt-[1rem] flex flex-col">
                            <div className="flex flex-row items-center gap-[1rem]">
                                <Input 
                                    type='text'
                                    name='tasktag'
                                    id="tasktag"
                                    value={tagWords}
                                    onChange={(event: any) => setTagWords(event.target.value)}
                                    onKeyDown={(event: any) => {
                                        if (event.key === 'Enter') {
                                            event.preventDefault();
                                            handleCreateTag(event);
                                        }
                                    }}
                                    placeholder="Enter a tag phrase"
                                    tag

                                />

                                <div>
                                    <button className="flex flex-row items-center gap-[0.5rem] border py-[0.5rem] px-[1rem] text-[#565656] rounded-md hover:bg-[#f5f9ff] hover:border-[#d0ddea] hover:text-[#5082b8]" type="button" onClick={handleCreateTag}><AiOutlinePlus className='h-[1.5rem] w-[1.5rem]'/></button>
                                </div>
                            </div>

                            <div style={{display:'grid',gridTemplateColumns:'repeat(8, 5rem)', rowGap:'50px',columnGap:'50px', gridAutoFlow:'row', gridAutoRows:'min-content'}} className="tags">
                                {tags.map((tag) => {
                                    return <div className="
                                        flex
                                        flex-row
                                        items-center
                                        gap-[0.7rem]
                                        text-[80%]
                                        bg-[#dae8f7]
                                        w-fit
                                        mt-[0.5rem]
                                        rounded-full
                                        py-[0.3rem]
                                        px-[0.6rem]
                                    ">
                                        
                                        <span style={{}} key={tag} className="tag">{tag}</span>
                                        <button className="text-[#5082b8] rounded-full p-[0.1rem]"><AiOutlineClose /></button>
                                        
                                    </div>
                                })}
                            </div>
                        </div>
                </section>

                <hr className="border border-zinc-100 my-[2rem]" style={{}}></hr>

                <section>
                    <div className="flex justify-center">
                        <button className="
                            border
                            border-zinc-300
                            py-[0.7rem]
                            px-[1rem]
                            rounded-md
                        " 
                        type="submit">Add Task</button>
                    </div>
                </section>            
            </form>

            

            
        </div>
    );
}
 
export default NewTaskList;