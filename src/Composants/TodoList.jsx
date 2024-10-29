import React from "react";
import TableGestion from "./TableGestion";

class TodoList extends React.Component {

constructor(props) {
    super(props);
    this.state = {
        tasks: [],
    };
}

addTask = (task) => {
    this.setState((prevState) => ({
        tasks: [...prevState.tasks, task],
    }));
};
 
render() {
    return (
        <div className="p-4">
            <div className="py-5">
               <TableGestion tasks={this.state.tasks} />
            </div>
        </div>
    );
}
}
export default TodoList