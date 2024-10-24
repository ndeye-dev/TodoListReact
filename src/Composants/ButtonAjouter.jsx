import React from "react"
class ButtonAjouter extends React.Component {
    render() {
        return (
            <div>
                <button
                    type="submit"
                    className=" w-full rounded-md bg-blue-600 px-3 py-1.5 text-sm  text-white shadow-sm hover:bg-blue-500  focus-visible:outline-indigo-600"
                >
                    Ajouter
                </button>
            </div>
        )
    }
}
export default ButtonAjouter;