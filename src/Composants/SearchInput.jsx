
// import React from "react";

// class SearchInput extends React.Component {

//   render() {

//     return (
//       <div>
//         <form>
//           <input
//             type="text"
//             placeholder="Recherche..."
//             className="block w-4/5 rounded-md border-0 py-1.5 pl-7 pr-20 ring-1 ring-inset ring-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//             onChange={this.handleSearchChange}
//           />
//         </form>
//       </div>
//     );
//   }
// }

// export default SearchInput;

import React from "react";

class SearchInput extends React.Component {
    render() {
      
        return (
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Recherche..."
                    className="block w-4/5 rounded-md border-0 py-1.5 pl-7 pr-20 ring-1 ring-inset ring-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                     onChange={this.props.onChange}
                />
            </div>
        );
    }
}

export default SearchInput;

