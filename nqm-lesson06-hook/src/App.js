import React, { useState } from 'react';
import './App.css';
import NqmListTask from './components/NqmListTask';
import NqmTaskOrEdit from './components/NqmTaskOrEdit';

function App() {
    // Mock data
    const nqm_listTasks = [
        { nqmId: 2210900039, nqmName: "nguyễn quang mạnh", nqmAge: 25, nqmIsActive: true },
        { nqmId: 1, nqmName: "Học lập trình frontend", nqmAge: 22, nqmIsActive: true },
        { nqmId: 2, nqmName: "Học lập trình reactjs", nqmAge: 23, nqmIsActive: false },
        { nqmId: 3, nqmName: "Lập trình với Frontend - Reactjs", nqmAge: 24, nqmIsActive: true },
        { nqmId: 4, nqmName: "Lập trình Fullstack (PHP, Java, NetCore)", nqmAge: 26, nqmIsActive: false },
    ]

    const [nqmlistTasks, setNqmListTasks] = useState(nqm_listTasks);
    const [nqmEditingTask, setNqmEditingTask] = useState(null);

    const nqmHandleSubmit = (nqmTask) => {
        if (nqmEditingTask !== null) {
            setNqmListTasks(prev => prev.map((task, index) => index === nqmEditingTask.index ? nqmTask : task));
            setNqmEditingTask(null);
        } else {
            setNqmListTasks(prev => [...prev, nqmTask]);
        }
    }

    const nqmHandleEditTask = (index) => {
        setNqmEditingTask({ ...nqmlistTasks[index], index });
    }

    const nqmHandleRemoveTask = (index) => {
        setNqmListTasks(prev => prev.filter((_, i) => i !== index));
    }

    return (
        <div className="container border">
            <h1>nguyễn quang mạnh</h1>
            <hr />
            <div>
                {/*danh sach list tasks*/}
                <NqmListTask renderNqmListTasks={nqmlistTasks} onEditTask={nqmHandleEditTask} onRemoveTask={nqmHandleRemoveTask} />
            </div>
            <div>
                <NqmTaskOrEdit nqmOnSubmit={nqmHandleSubmit} nqmEditingTask={nqmEditingTask} />
            </div>
        </div>
    );
}

export default App;
