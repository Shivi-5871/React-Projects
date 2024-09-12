import JSONDATA from './MOCK_DATA.json';
import { useState } from 'react';

const SearchBar = () => {

    const [searchTerm, setSearchTerm] = useState('');

    return ( 
        <section>
            <div className="search-bar">
            <input type="text" placeholder="Search..." onChange={(event) => {
                setSearchTerm(event.target.value);
            }} />
            </div>
            <div className="datas">
            {JSONDATA.filter((val) => {
                if(searchTerm === ""){
                    return val;
                }
                else if(val.first_name.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return true;
                }
            }).map((val, key) => {
                return(
                    <div key ={val.id} className='firstname'>
                        <p>{val.first_name}</p>
                    </div>
                )
            })}
            </div>
        </section>
     );
}
 
export default SearchBar;