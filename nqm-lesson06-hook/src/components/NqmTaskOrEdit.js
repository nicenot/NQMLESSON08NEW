import React, { useState, useEffect } from 'react';

export default function NqmTaskOrEdit({ nqmOnSubmit, nqmEditingTask }) {
    const nqmTasksObj = {
        nqmId: 0,
        nqmName: "",
        nqmAge: 0,
        nqmIsActive: false
    }
    const [nqmTask, setNqmTask] = useState(nqmTasksObj);

    // Update form state if editing task changes
    useEffect(() => {
        if (nqmEditingTask !== null) {
            setNqmTask(nqmEditingTask);
        } else {
            setNqmTask(nqmTasksObj);
        }
    }, [nqmEditingTask]); // eslint-disable-line react-hooks/exhaustive-deps

    const nqmHandleChange = (nqmEvent) => {
        let Name = nqmEvent.target.name;
        let value = nqmEvent.target.type === 'checkbox' ? nqmEvent.target.checked : nqmEvent.target.value;

        setNqmTask(prev => {
            return {
                ...prev,
                [Name]: value,
            }
        })
    }

    const nqmHandleSubmit = (nqmEvent) => {
        nqmEvent.preventDefault();
        nqmOnSubmit(nqmTask);
        setNqmTask(nqmTasksObj); // Reset form
    }

    return (
        <div className="card mt-4">
            <div className="card-header">
                <h2>{nqmEditingTask ? "Sửa Task" : "Thêm mới Task"}</h2>
            </div>
            <div className="card-body">
                <form onSubmit={nqmHandleSubmit}>
                    <div className="form-group mb-3">
                        <label>Task ID</label>
                        <input
                            type="text"
                            name='nqmId'
                            value={nqmTask.nqmId}
                            onChange={nqmHandleChange}
                            className="form-control"
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label>Task Name</label>
                        <input
                            type="text"
                            name='nqmName'
                            value={nqmTask.nqmName}
                            onChange={nqmHandleChange}
                            className="form-control"
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label>Age</label>
                        <input
                            type="number"
                            name='nqmAge'
                            value={nqmTask.nqmAge}
                            onChange={nqmHandleChange}
                            className="form-control"
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label>Status</label>
                        <div className="form-check">
                            <input
                                type="checkbox"
                                name='nqmIsActive'
                                checked={nqmTask.nqmIsActive}
                                onChange={nqmHandleChange}
                                className="form-check-input"
                            />
                            <label className="form-check-label">Active</label>
                        </div>
                    </div>
                    <button type='submit' className="btn btn-primary">Ghi lại</button>
                </form>
            </div>
        </div>
    )
}
