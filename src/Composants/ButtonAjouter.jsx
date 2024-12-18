

import React from "react";

class ButtonAjouter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            task: '',
            description: '',
        };
    }
    
    toggleModal = () => {
        this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
    };

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const newTask = {
            title: this.state.task,
            description: this.state.description,
        };

        //localStorage
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push(newTask);
        localStorage.setItem('tasks', JSON.stringify(tasks));

        this.props.addTask(newTask);
        this.toggleModal();
        this.setState({ task: '', description: '' });
    };

    render() {
        
        return (
            <div>
                
                <button
                    type="button"
                    className="rounded-md bg-blue-600 px-3 py-1.5 text-sm text-white shadow-sm hover:bg-blue-500 focus-visible:outline-indigo-600"
                    onClick={this.toggleModal}
                >
                    Ajouter
                </button>
                {this.state.isOpen && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white rounded-lg p-20 shadow-lg">
                            <h2 className="text-lg font-bold mb-4">Ajouter une tâche</h2>
                            <form onSubmit={this.handleSubmit}>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Tâche</label>
                                    <input
                                        type="text"
                                        name="task"
                                        value={this.state.task}
                                        onChange={this.handleChange}
                                        className="mt-1 block w-full p-2 rounded-md border-2 border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Description</label>
                                    <input
                                        name="description"
                                        value={this.state.description}
                                        onChange={this.handleChange}
                                        className="mt-1 block p-2 rounded-md border-2 border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                                        required
                                    />
                                </div>
                                <div className="flex justify-end gap-3">
                                    <button
                                        type="button"
                                        className=" bg-gray-400 text-black px-4 py-2 rounded-md hover:bg-gray-400"
                                        onClick={this.toggleModal}
                                    >
                                        Annuler
                                    </button>
                                    <button
                                        type="submit"
                                        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500"
                                    >
                                        Ajouter
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default ButtonAjouter;

