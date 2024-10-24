
import React from "react";

class ButtonAjouter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };
    }

    toggleModal = () => {
        this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
    };

    render() {
        return (
            <div>
                <button
                    type="button"
                    className="w-full rounded-md bg-blue-600 px-3 py-1.5 text-sm text-white shadow-sm hover:bg-blue-500 focus-visible:outline-indigo-600"
                    onClick={this.toggleModal}
                >
                    Ajouter
                </button>

                {this.state.isOpen && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white rounded-lg p-6 shadow-lg">
                            <h2 className="text-lg font-bold mb-4">Ajouter un élément</h2>
                            <p>Contenu du modal ici...</p>
                            <button
                                type="button"
                                className="mt-4 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-500"
                                onClick={this.toggleModal}
                            >
                                Fermer
                            </button>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default ButtonAjouter;
