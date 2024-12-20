import { v4 as uuidv4 } from 'uuid';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import placeholderTasks from './placeholderTasks';

const useTasks = create<TasksStore>()(
  persist(
    (set, get) => ({
      tasks: placeholderTasks,

      addTask: (title, dueDate = new Date()) =>
        set({
          tasks: [
            ...get().tasks,
            {
              id: uuidv4(),
              title,
              isTaskDone: false,
              isCardExpanded: false,
              steps: [],
              note: '',
              link: '',
              dueDate, 
            },
          ],
        }),

      deleteTask: (taskId) =>
        set({
          tasks: get().tasks.filter((task) => task.id !== taskId),
        }),

      editTask: (taskId, newTitle) =>
        set({
          tasks: get().tasks.map((task) =>
            task.id === taskId ? { ...task, title: newTitle } : task
          ),
        }),

      toggleTaskDone: (taskId) =>
        set({
          tasks: get().tasks.map((task) =>
            task.id === taskId
              ? { ...task, isTaskDone: !task.isTaskDone }
              : task
          ),
        }),

      clearCompeletedTasks: () =>
        set({
          tasks: get().tasks.filter((task) => !task.isTaskDone),
        }),

      checkTasksDone: () =>
        set({
          tasks: get().tasks.map((task) =>
            task.isTaskDone ? task : { ...task, isTaskDone: true }
          ),
        }),

      toggleImportance: (taskId) =>
        set({
          tasks: get().tasks.map((task) =>
            task.id === taskId
              ? { ...task, isImportant: !task.isImportant }
              : task
          ),
        }),

      toggleExpandCard: (taskId) =>
        set({
          tasks: get().tasks.map((task) =>
            task.id === taskId
              ? { ...task, isCardExpanded: !task.isCardExpanded }
              : { ...task, isCardExpanded: false }
          ),
        }),

      closeExpandedCards: () =>
        set({
          tasks: get().tasks.map((task) =>
            task.isCardExpanded ? { ...task, isCardExpanded: false } : task
          ),
        }),

      addLink: (taskId, newLink) =>
        set({
          tasks: get().tasks.map((task) =>
            task.id === taskId
              ? {
                  ...task,
                  link: newLink,
                }
              : task
          ),
        }),

      removeLink: (taskId) =>
        set({
          tasks: get().tasks.map((task) =>
            task.id === taskId ? { ...task, link: '' } : task
          ),
        }),

      addStep: (taskId, payload) =>
        set({
          tasks: get().tasks.map((task) =>
            task.id === taskId
              ? {
                  ...task,
                  steps: [
                    ...task.steps,
                    { id: uuidv4(), isStepDone: false, title: payload },
                  ],
                }
              : task
          ),
        }),

      toggleStepDone: (taskId, stepId) =>
        set({
          tasks: get().tasks.map((task) =>
            task.id === taskId
              ? {
                  ...task,
                  steps: task.steps.map((step) =>
                    step.id === stepId
                      ? { ...step, isStepDone: !step.isStepDone }
                      : step
                  ),
                }
              : task
          ),
        }),

      removeStep: (taskId, stepId) =>
        set({
          tasks: get().tasks.map((task) =>
            task.id === taskId
              ? {
                  ...task,
                  steps: task.steps.filter((step) => step.id !== stepId),
                }
              : task
          ),
        }),

      addNote: (taskId, payload) =>
        set({
          tasks: get().tasks.map((task) =>
            task.id === taskId
              ? {
                  ...task,
                  note: payload,
                }
              : task
          ),
        }),

      filteredTasks: (selectedDate: Date) =>
        get().tasks.filter(
          (task) =>
            task.dueDate && new Date(task.dueDate).toDateString() ===
            new Date(selectedDate).toDateString()
        ),
    }),
    { name: 'tasks-storage' }
  )
);

export default useTasks;
