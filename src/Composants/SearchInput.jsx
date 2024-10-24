// import React, {useState} from "react";
import React   from "react";

class SearchInput extends React.Component {

  render() {
    // const [value, setValue] = useState('')
    
    return (
      <div>
        <form>
         <input
          type="text"
          placeholder="recherche..."
          className="block w-4/5 rounded-md border-0 py-1.5 pl-7 pr-20  ring-1 ring-inset ring-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        //   onChange={(e) => console.log(e.target.value)
        //   }
        />
        </form>
      </div>
    )
  }
}
export default SearchInput;