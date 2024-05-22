import React from "react";

type InputProps = {
    name: string,
    placeholder: string,
    icon: React.ReactNode
}

const Input:React.FC<InputProps> = ({name, placeholder, icon}) => {
    return (
        <>
        <div className="flex flex-col">
            <div className="relative">
                <div className="absolute flex border border-transparent left-0 top-0 h-full w-10">
                    <div className="flex items-center justify-center rounded-tl rounded-bl z-10 text-gray-600 text-lg h-full w-full">
                        {icon}
                    </div>
                </div>
                <input 
                    style={{
                        border: '2px solid rgba(231, 231, 233, 0.85)',
                        borderRadius: '108px'
                    }}
                    id={name}
                    name={name}
                    type="text"
                    placeholder={placeholder}
                    value=""
                    className="rounded-2xl text-[14px] relative w-full placeholder-gray-400 focus:border-indigo-400 focus:outline-none py-[14px] pr-[20px] pl-[35px]" />
            </div>
        </div>
        </>
    )
}

export default Input;