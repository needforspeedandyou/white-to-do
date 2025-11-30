import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useTodoStore = create(
    persist(
        (set) => ({
            tasks: [],

            addTask: (taskName, tab) => set(state => ({
                tasks: [...state.tasks, {taskName: taskName, id: Date.now(), completed: false, undone: false, tab: tab}]
            })),

            completeTask: (id) => set(state => ({
                tasks: state.tasks.map(task => task.id == id ? {...task, completed: true, undone: false} : task)
            })),

            undoneTask: (id) => set(state => ({
                tasks: state.tasks.map(task => task.id == id ? {...task, completed: false, undone: true} : task)
            })),
            
            deleteTask: (id) => set(state => ({
                tasks: state.tasks.filter(task => id !== task.id)
            }))
        }),
        {
            name: 'todo-storage'
        }
    )
)