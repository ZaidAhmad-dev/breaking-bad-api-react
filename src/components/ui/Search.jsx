import { useState } from "react"


const Search = ({getQuery}) => {
    console.log(getQuery)
    
    const [search, setSearch] = useState("")

    const handleChange = (e) => {
        setSearch(e.target.value)
        getQuery(e.target.value)
    }

    return (
        <section>
            <form>
                <input type="text" placeholder="Search for a character" className="form-control" value={search} onChange={
                    (e) => handleChange(e)
                }  autoFocus />
            </form>
        </section>
    )
}

export default Search
