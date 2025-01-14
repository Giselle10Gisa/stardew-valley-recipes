import { ChangeEvent } from "react";

interface SearchBarProps {
    value: string,
    onChange: (value: string) => void;
}

export const SearchBar = ({ value, onChange }: SearchBarProps) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
    };

    return (
        <div className="relative max-w-md mx-auto mb-8">
            <input 
                type="text"
                value={value}
                onChange={handleChange}
                placeholder="Seach recipes..."
                className="w-full px-4 py-2 rounded-full font-pixelify bg-[#F2E7C4] text-[#853605] border-[#853605] dark:bg-[#853605] dark:text-[#F2E7C4] dark:border-[#F2E7C4] border-[2px] shadow-sm"
            />
            <i className="pi pi-search absolute right-3 top-2.5 h-5 w-5 text-[#853605] dark:text-[#F2E7C4]"></i>
        </div>
    )
}