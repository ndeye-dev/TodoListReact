

import React from "react";
import { IoMdEye } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { HiPencilAlt } from "react-icons/hi";
import SearchInput from "./SearchInput";
import ButtonAjouter from "./ButtonAjouter";
import Pagination from "./Pagination";

class TableGestion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            searchTerm: '',
            isOpen: false,
            modific: false,
            cle: null,
            textModifie: null
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

    buttonVoir = (voir) => {
        this.setState((prevState) => ({
            isOpen: !prevState.isOpen,
            cle: voir
        }))
    };
//   supprimer
    suppLigne = (index) => {
        this.setState((prevState) => ({
            tasks: prevState.tasks.filter((_, i) => i !== index)
        }));
    };
    // suppLigne = (index) => {
    //      this.setState((state) => {
    //          const supp = [...state.tasks]; 
    //          supp.splice(index, 1);
    //          return { tasks: supp }; 
    //      });
    //  };

    // modification 
    modification = (index) => {
        this.setState({
            modific: true,
            textModifie: { ...this.state.tasks[index] },
            changeIndex: index
        });
    };

    handleEditChange = (e) => {
        const { name, value } = e.target;
        this.setState(prevState => ({
            textModifie: {
                ...prevState.textModifie,
                [name]: value
            }
        }));
    };

    submitModif = () => {
        const { changeIndex, textModifie } = this.state;
        this.setState(prevState => {
            const updatedTasks = [...prevState.tasks];
            updatedTasks[changeIndex] = textModifie;
            return { tasks: updatedTasks, modific: false, textModifie: null, changeIndex: null };
        });
    };

    render() {
        const filteredTasks = this.state.tasks.filter(task =>
            task.title.toLowerCase().includes(this.state.searchTerm.toLowerCase()) ||
            task.description.toLowerCase().includes(this.state.searchTerm.toLowerCase())
        );
        const tabVoir = filteredTasks[this.state.cle];

        return (
            <div>
                <div className="flex justify-between justify-center">
                    <SearchInput onChange={this.handleSearchChange} />
                    <ButtonAjouter addTask={this.addTask} />
                </div>
                <table className="border-collapse border border-slate-700 w-full place-content-center text-center">
                    <thead>
                        <tr>
                            <th className="border border-slate-700  p-2">Tâches</th>
                            <th className="border border-slate-700 ">Description</th>
                            <th className="border border-slate-700 ">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredTasks.map((task, index) => (
                            <tr key={index}>
                                <td className="border border-slate-700 p-3">{task.title}</td>
                                <td className="border border-slate-700">{task.description}</td>
                                <td className="border border-slate-700">
                                    <div className="flex justify-center.">
                                        <button className="text-sm font-bold text-green-600 flex py-3 px-2 rounded-lg shadow-md focus:outline-none "
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
                                        <button className="text-sm font-bold flex py-3 px-2 text-blue-600 rounded-lg shadow-md focus:outline-none "
                                            onClick={() => this.modification(index)}
                                        >
                                            <HiPencilAlt />
                                        </button>
                                        <button className="text-sm font-bold flex text-red-600 py-3 px-2 rounded-lg shadow-md focus:outline-none "
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
                <div className="mt-7 w-2/5">
                    <Pagination />
                </div>
                {this.state.modific && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white rounded-xl shadow-lg p-20">
                            <h2 className="text-lg font-bold mb-4 ">Modifier la tâche</h2>
                            <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Tâche</label>
                            <input
                                type="text"
                                name="title"
                                value={this.state.textModifie.title}
                                onChange={this.handleEditChange}
                                placeholder=""
                                className="text-sm p-2 mt-1 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                                required
                            /> 
                            </div>
                            <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Description</label>
                            <input
                                name="description"
                                value={this.state.textModifie.description}
                                onChange={this.handleEditChange}
                                placeholder=""
                                className="text-sm p-2 mt-1 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                                required
                            />
                            </div>
                            <div className="flex justify-end gap-3">
                            <button className="text-sm mt-5 bg-blue-600 text-white px-2 rounded-lg shadow-lg focus:outline-none "
                                onClick={() => this.setState({ modific: false, textModifie: null })}
                            >
                                Annuler
                            </button>
                            <button className="text-sm text-white  mt-5 p-3 bg-slate-400 px-2 rounded-lg shadow-lg  focus:outline-none "
                                onClick={this.submitModif}
                            >
                                Mise à jour
                            </button>
                            
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default TableGestion;