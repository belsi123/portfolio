import React, { useState, useEffect } from 'react';

function TaskPage() {
    const [tasks, setTasks] = useState([]);
    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [editingTaskId, setEditingTaskId] = useState(null);
    const [editTitle, setEditTitle] = useState('');
    const [editDescription, setEditDescription] = useState('');
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
    const [taskIdToDelete, setTaskIdToDelete] = useState(null);

    useEffect(() => {
        getTasks();
    }, []);

    const getTasks = () => {
        fetch("http://127.0.0.1:8000/tasks")
            .then((response) => response.json())
            .then((data) => {
                setTasks(data);
                console.log(data);
            })
            .catch((error) => console.error('Error fetching tasks:', error));
    };

    const createTask = (e) => {
        e.preventDefault();
        if (!taskTitle) return;
        fetch("http://localhost:8000/tasks", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title: taskTitle, description: taskDescription }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setTaskTitle('');
                setTaskDescription('');
                getTasks();
            })
            .catch((error) => console.error('Error creating task:', error));
    };

    const editTask = (task) => {
        setEditingTaskId(task.id);
        setEditTitle(task.title);
        setEditDescription(task.description || '');
    };

    const saveEditTask = (e, taskId) => {
        e.preventDefault();
        if (!editTitle) return;
        fetch(`http://localhost:8000/tasks/${taskId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title: editTitle, description: editDescription }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setEditingTaskId(null);
                setEditTitle('');
                setEditDescription('');
                getTasks();
            })
            .catch((error) => console.error('Error updating task:', error));
    };

    const cancelEdit = () => {
        setEditingTaskId(null);
        setEditTitle('');
        setEditDescription('');
    };

    const initiateDelete = (taskId) => {
        setTaskIdToDelete(taskId);
        setShowDeleteConfirm(true);
    };

    const confirmDelete = () => {
        if (!taskIdToDelete) return;
        fetch(`http://localhost:8000/tasks/${taskIdToDelete}`, {
            method: 'DELETE',
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setShowDeleteConfirm(false);
                setTaskIdToDelete(null);
                getTasks();
            })
            .catch((error) => console.error('Error deleting task:', error));
    };

    const cancelDelete = () => {
        setShowDeleteConfirm(false);
        setTaskIdToDelete(null);
    };

    console.log('TaskPage rendering with centered content');

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-4" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-4">
                <h1 className="text-2xl font-bold text-gray-800 mb-2 text-center">Task Manager</h1>

                <div className="mb-4 bg-gray-50 p-4 rounded-md border border-gray-200 transition-all duration-200 hover:shadow-sm">
                    <h2 className="text-lg font-semibold text-gray-700 mb-2">Create New Task</h2>
                    <form onSubmit={createTask} className="space-y-2">
                        <div>
                            <label htmlFor="taskTitle" className="block text-sm font-medium text-gray-600">
                                Task Title
                            </label>
                            <input
                                id="taskTitle"
                                type="text"
                                value={taskTitle}
                                onChange={(e) => setTaskTitle(e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                placeholder="Enter task title"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="taskDescription" className="block text-sm font-medium text-gray-600">
                                Task Description
                            </label>
                            <textarea
                                id="taskDescription"
                                value={taskDescription}
                                onChange={(e) => setTaskDescription(e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                placeholder="Enter task description"
                                rows="2"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200"
                        >
                            Create Task
                        </button>
                    </form>
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200 rounded-md">
                        <thead>
                            <tr className="bg-gray-50 text-gray-700 text-xs font-semibold uppercase">
                                <th className="py-2 px-4 text-left">ID</th>
                                <th className="py-2 px-4 text-left">Title</th>
                                <th className="py-2 px-4 text-left">Description</th>
                                <th className="py-2 px-4 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600 text-xs">
                            {tasks.length > 0 ? (
                                tasks.map((task) => (
                                    <tr
                                        key={task.id}
                                        className="border-b border-gray-200 hover:bg-gray-50 transition-all duration-200"
                                    >
                                        <td className="py-2 px-4">{task.id}</td>
                                        <td className="py-2 px-4">
                                            {editingTaskId === task.id ? (
                                                <input
                                                    type="text"
                                                    value={editTitle}
                                                    onChange={(e) => setEditTitle(e.target.value)}
                                                    className="w-full p-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                                    required
                                                />
                                            ) : (
                                                <span className="font-medium">{task.title}</span>
                                            )}
                                        </td>
                                        <td className="py-2 px-4">
                                            {editingTaskId === task.id ? (
                                                <textarea
                                                    value={editDescription}
                                                    onChange={(e) => setEditDescription(e.target.value)}
                                                    className="w-full p-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                                    rows="1"
                                                />
                                            ) : (
                                                <span className="text-gray-500">{task.description || 'No description'}</span>
                                            )}
                                        </td>
                                        <td className="py-2 px-4 text-center">
                                            {editingTaskId === task.id ? (
                                                <div className="flex gap-2 justify-center">
                                                    <button
                                                        onClick={(e) => saveEditTask(e, task.id)}
                                                        className="bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 transition-all duration-200"
                                                    >
                                                        Save
                                                    </button>
                                                    <button
                                                        onClick={cancelEdit}
                                                        className="bg-gray-400 text-white px-2 py-1 rounded-md hover:bg-gray-500 focus:ring-2 focus:ring-gray-300 transition-all duration-200"
                                                    >
                                                        Cancel
                                                    </button>
                                                </div>
                                            ) : (
                                                <div className="flex gap-2 justify-center">
                                                    <button
                                                        onClick={() => editTask(task)}
                                                        className="bg-amber-500 text-white px-2 py-1 rounded-md hover:bg-amber-600 focus:ring-2 focus:ring-amber-400 transition-all duration-200"
                                                    >
                                                        Edit
                                                    </button>
                                                    <button
                                                        onClick={() => initiateDelete(task.id)}
                                                        className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 focus:ring-2 focus:ring-red-400 transition-all duration-200"
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            )}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4" className="py-2 px-4 text-center text-gray-500">
                                        No tasks available.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {showDeleteConfirm && (
                    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
                        <div className="bg-white p-4 rounded-md shadow-md max-w-sm w-full transform transition-all duration-200 scale-100">
                            <h2 className="text-lg font-semibold text-gray-800 mb-2">Confirm Deletion</h2>
                            <p className="text-gray-600 mb-2">Are you sure you want to delete this task?</p>
                            <div className="flex justify-end gap-2">
                                <button
                                    onClick={confirmDelete}
                                    className="bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all duration-200"
                                >
                                    Yes
                                </button>
                                <button
                                    onClick={cancelDelete}
                                    className="bg-gray-400 text-white px-3 py-1 rounded-md hover:bg-gray-500 focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 transition-all duration-200"
                                >
                                    No
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default TaskPage;