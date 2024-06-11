import React from 'react'

export default function NqmListTask({ renderNqmListTasks, onEditTask, onRemoveTask }) {
    console.log(renderNqmListTasks);

    // Render data
    let nqmElementTask = renderNqmListTasks.map((task, index) => {
        return (
            <tr key={index}>
                <td>{index + 1}</td>
                <td>{task.nqmId}</td>
                <td>{task.nqmName}</td>
                <td>{task.nqmAge}</td>
                <td>{task.nqmIsActive ? "Active" : "Inactive"}</td>
                <td>
                    <button className='btn btn-success' onClick={() => onEditTask(index)}>sửa</button>
                    <button className='btn btn-danger' onClick={() => onRemoveTask(index)}>xóa</button>
                </td>
            </tr>
        )
    })

    return (
        <div>
            <h2>danh sách các nhiệm vụ</h2>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Task ID</th>
                        <th>Task Name</th>
                        <th>Age</th>
                        <th>Status</th>
                        <th>Hoạt động</th>
                    </tr>
                </thead>
                <tbody>
                    {nqmElementTask}
                </tbody>
            </table>
        </div>
    )
}
