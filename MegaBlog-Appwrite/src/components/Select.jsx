import React, { useId } from "react";

function Select({
    options,
    label,
    className="",
    ...props
}, ref){
    const id = useId();
    return(
        <div className="w-full">
            {label && <label className="" htmlFor={id}>
                {label}</label>}
                <section {...props}
                id={id}
                ref={ref}
                className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className} `}
                >
                    {option?.map((option) =>(
                        <options key={option} value={option}>
                            {option}
                        </options>
                    ))}
                </section>
        </div>
    )
}

export  default React.forwardRef(Select)