import React,{useState} from 'react'

export default function SearchComponent() {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const handleChange = (event: any) => {
        const { value } = event.target;
        setSearchTerm(value);
      };
    return (
        <div>
            <input
                type="text"
                value={searchTerm}
                onChange={handleChange}
                placeholder="search user here"
                className="input input-bordered w-full max-w-xs"
            /> 
        </div>
    )
}
