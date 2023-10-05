'use client';

interface InputProps {
    type?: any,
    // value: any,
    // onChange?:(event: React.ChangeEvent<HTMLInputElement>) => void;
    name: string,
    textarea?: boolean,
    id: string,
    placeholder?: string,
    small?: boolean,
    tag?:boolean,
    value?: string,
    onChange?:any,
    onKeyDown?:any,
}

export default function Input({
    type,
    // value,
    // onChange,
    name,
    textarea,
    id,
    placeholder,
    small,
    tag,
    value,
    onChange,
    onKeyDown,
} : InputProps) {

    return (
        <input 
            type={type}
            id={id}
            placeholder={placeholder}
            // value={value}
            // onChange={onChange}
            name={name}
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
            className={` '' : text-black py-[0.5rem] px-[0.5rem] border outline-none ${small ? 'w-[20rem] cursor-pointer' : ''} ${textarea ? 'w-[900px] pb-[6rem] h-500px' : 'w-full'} ${tag ? 'w-[20rem]' : ''}`}
        />
    )
}