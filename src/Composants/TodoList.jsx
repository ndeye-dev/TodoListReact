import React from "react";
import SearchInput from "./SearchInput";
import ButtonAjouter from "./ButtonAjouter";
import TableGestion from "./TableGestion";

class TodoList extends React.Component {
//   render() {

//     return (
//       <div className="mx-auto">
//         <div className="flex justify-between justify-center">
//             <SearchInput />
//            <ButtonAjouter /> 
//         </div>
//         <div className="py-5 ">
//             <TableGestion />
//         </div>
//       </div>
//     )
//   }

constructor(props) {
    super(props);
    this.state = {
        tasks: [
            { title: "Coder", description: "Choisir une techno" },
            { title: "Déployer", description: "Utiliser github pour le faire" },
            { title: "Tester", description: "Utiliser les tests unitaires" },
        ],
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
            <div className="flex justify-between justify-center">
               <SearchInput />
               <ButtonAjouter addTask={this.addTask}/> 
           </div>
            <div className="py-5">
               <TableGestion tasks={this.state.tasks} />
            </div>
        </div>
    );
}
}
export default TodoList