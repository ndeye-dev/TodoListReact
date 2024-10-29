

import React from "react";
import { IoMdEye } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { HiPencilAlt } from "react-icons/hi";
import SearchInput from "./SearchInput";
import ButtonAjouter from "./ButtonAjouter";

class TableGestion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            searchTerm: '',
            isOpen: false,
            cle: null

        };
    }

    handleSearchChange = (e) => {
        this.setState({ searchTerm: e.target.value });
    };

    addTask = (newTask) => {
        this.setState((prevState) => ({
            tasks: [...prevState.tasks, newTask],
        }));
    };
// voir 
    buttonVoir = (voir) => {
        this.setState((prevState) => ({
            isOpen: !prevState.isOpen,
            cle: voir
        }))
    }
// supprimer
    suppLigne = (index) => {
        this.setState((prevState) => ({
            tasks: prevState.tasks.filter((_, i) => i !== index)
        }));
    };
    // suppLigne = (index) => {
    //     this.setState((state) => {
    //         const supp = [...state.tasks]; 
    //         supp.splice(index, 1);
    //         return { tasks: supp }; 
    //     });
    // };
    render() {
        const filteredTasks = this.state.tasks.filter(task =>
            task.title.toLowerCase().includes(this.state.searchTerm.toLowerCase()) ||
            task.description.toLowerCase().includes(this.state.searchTerm.toLowerCase())
        );
        const tabVoir = filteredTasks[this.state.cle]
        console.log(tabVoir);


        return (
            <div>
                <div className="flex justify-between justify-center">
                    <SearchInput onChange={this.handleSearchChange} />
                    <ButtonAjouter addTask={this.addTask} />
                </div>
                <table className="border-collapse border border-slate-700 w-full place-content-center">
                    <thead>
                        <tr>
                            <th className="border border-slate-700 text-start p-2">Tâches</th>
                            <th className="border border-slate-700 text-start">Description</th>
                            <th className="border border-slate-700 text-start">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredTasks.map((task, index) => (
                            <tr key={index}>
                                <td className="border border-slate-700 p-3">{task.title}</td>
                                <td className="border border-slate-700">{task.description}</td>
                                <td className="border border-slate-700">
                                    <div className="flex">
                                        <button className="text-sm flex py-3 px-2 rounded-lg shadow-md focus:outline-none "
                                            onClick={() => this.buttonVoir(index)}
                                        >
                                            <IoMdEye />
                                        </button>
                                        {this.state.isOpen && (
                                            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ">
                                                <div className="bg-white rounded-xl shadow-lg p-20">
                                                    <h2 className="text-lg  font-bold mb-4">Voir la tâche</h2>
                                                    <table className="border-collapse border border-slate-700 ">
                                                        <thead>
                                                            <tr>
                                                                <th className="border border-slate-700 text-start">Tache</th>
                                                                <th className="border border-slate-700 text-start">Description</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td className="border border-slate-700 ">{tabVoir.title}</td>
                                                                <td className="border border-slate-700 ">{tabVoir.description}</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <button className="text-sm text-center flex mt-10 p-3 bg-slate-400 px-2 rounded-lg shadow-lg w-2/4 focus:outline-none "
                                                        onClick={() => this.buttonVoir(index)}
                                                    >
                                                        Fermer
                                                    </button>

                                                </div>
                                            </div>
                                        )}
                                        <button className="text-sm flex py-3 px-2 rounded-lg shadow-md focus:outline-none "
                                           
                                        >
                                        <HiPencilAlt />
                                        </button>
                                        <button className="text-sm flex py-3 px-2 rounded-lg shadow-md focus:outline-none "
                                         onClick={() => this.suppLigne(filteredTasks.indexOf(task))} 
                                        >
                                            <MdDelete />
                                        </button>
                                        
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TableGestion;
