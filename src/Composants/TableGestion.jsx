
import React from "react";
import { IoMdEye } from "react-icons/io";
import { MdDelete } from "react-icons/md";

class TableGestion extends React.Component {
    render() {
        return (
            <div>
                <table className="border-collapse border border-slate-400 w-full place-content-center">
                    <thead>
                        <tr>
                            <th className="border border-slate-300 text-start p-2">Tâches</th>
                            <th className="border border-slate-300 text-start">Description</th>
                            <th className="border border-slate-300 text-start">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.tasks.map((task, index) => (
                            <tr key={index} className="">
                                <td className="border border-slate-300 p-3">{task.title}</td>
                                <td className="border border-slate-300">{task.description}</td>
                                <td className="border border-slate-300"><div className="flex"><IoMdEye /> <MdDelete /></div></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TableGestion;
