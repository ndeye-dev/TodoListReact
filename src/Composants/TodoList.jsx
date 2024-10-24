import React from "react";
import SearchInput from "./SearchInput";
import ButtonAjouter from "./ButtonAjouter";
import TableGestion from "./TableGestion";

class TodoList extends React.Component {
  render() {

    return (
      <div className="mx-auto">
        <div className="flex justify-between justify-center">
            <SearchInput />
           <ButtonAjouter /> 
        </div>
        <div className="py-5 ">
            <TableGestion />
        </div>
      </div>
    )
  }
}
export default TodoList