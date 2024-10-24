import React from "react"
class TableGestion extends React.Component {
    render() {
        return (
            <div>
                <table className="border-collapse border border-slate-400  w-full place-content-center">
                    <thead>
                        <tr className="">
                            <th className="border border-slate-300 text-start">Taches</th>
                            <th className="border border-slate-300 text-start">Description</th>
                            <th className="border border-slate-300 text-start">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-slate-300 ">Coder</td>
                            <td className="border border-slate-300 ">Choisir une techno</td>
                            <td className="border border-slate-300 ">Otto</td>

                        </tr>
                        <tr>
                            <td className="border border-slate-300 ">Deployer</td>
                            <td className="border border-slate-300 ">Uttiliser github pour le faire</td>
                            <td className="border border-slate-300 ">Otto</td>

                        </tr>
                        <tr>
                            <td className="border border-slate-300 ">Tester</td>
                            <td className="border border-slate-300 ">Utiliser les test unitaires</td>
                            <td className="border border-slate-300 ">Otto</td>

                        </tr>
                    </tbody>
                </table>
                
            </div>
        )
    }
}
export default TableGestion;