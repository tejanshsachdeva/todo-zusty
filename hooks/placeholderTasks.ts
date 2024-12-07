import { v4 as uuidv4 } from 'uuid';

const placeholderTasks: Task[] = [
  {
    id: uuidv4(),
    title: 'Purchasing supplies for the kitchen',
    isTaskDone: false,
    isImportant: true,
    steps: [
      { id: uuidv4(), title: 'Milk', isStepDone: true },
      { id: uuidv4(), title: 'Ketchup', isStepDone: true },
      { id: uuidv4(), title: 'Bread', isStepDone: false },
      { id: uuidv4(), title: 'Eggs', isStepDone: false }
    ],
    isCardExpanded: false,
    link: '',
    note: 'Check the expiration date of the milk.',
  },
  {
    id: uuidv4(),
    title: 'Pay the bills',
    isTaskDone: false,
    isImportant: false,
    isCardExpanded: false,
    link: '',
    steps: [
      { id: uuidv4(), title: 'Electricity', isStepDone: true },
      { id: uuidv4(), title: 'Phone', isStepDone: false },
      { id: uuidv4(), title: 'Water', isStepDone: false },
      { id: uuidv4(), title: 'Internet', isStepDone: false }
    ],
    note: '',
  },
  {
    id: uuidv4(),
    title: 'Update the resume',
    isTaskDone: true,
    isImportant: true,
    steps: [
      { id: uuidv4(), title: "Add project's GitHub repo", isStepDone: true },
      { id: uuidv4(), title: 'Update email', isStepDone: true },
      { id: uuidv4(), title: 'Put the resume in LinkedIn', isStepDone: true }
    ],
    isCardExpanded: false,
    link: 'https://github.com/tejanshsachdeva',
    note: '', 
  },
  {
    id: uuidv4(),
    title: 'Prepare for presentation',
    isTaskDone: false,
    isImportant: true,
    steps: [
      { id: uuidv4(), title: 'Create slides', isStepDone: false },
      { id: uuidv4(), title: 'Practice delivery', isStepDone: false },
      { id: uuidv4(), title: 'Gather feedback', isStepDone: false }
    ],
    isCardExpanded: false,
    link: '',
    note: 'Focus on explaining the main ideas clearly.',
  },
  {
    id: uuidv4(),
    title: 'Plan weekend trip',
    isTaskDone: false,
    isImportant: false,
    steps: [
      { id: uuidv4(), title: 'Book hotel', isStepDone: false },
      { id: uuidv4(), title: 'Pack essentials', isStepDone: false },
      { id: uuidv4(), title: 'Prepare itinerary', isStepDone: false }
    ],
    isCardExpanded: false,
    link: '',
    note: 'Check for any travel restrictions or weather updates.',
  },
  {
    id: uuidv4(),
    title: 'Complete coding assignment',
    isTaskDone: false,
    isImportant: true,
    steps: [
      { id: uuidv4(), title: 'Write function logic', isStepDone: false },
      { id: uuidv4(), title: 'Add unit tests', isStepDone: false },
      { id: uuidv4(), title: 'Submit code to GitHub', isStepDone: false }
    ],
    isCardExpanded: false,
    link: '',
    note: 'Follow the project guidelines closely.',
  },
  {
    id: uuidv4(),
    title: 'Organize workspace',
    isTaskDone: true,
    isImportant: false,
    steps: [
      { id: uuidv4(), title: 'Sort papers', isStepDone: true },
      { id: uuidv4(), title: 'Clean desk', isStepDone: true },
      { id: uuidv4(), title: 'Organize cables', isStepDone: true }
    ],
    isCardExpanded: false,
    link: '',
    note: '',
  },
  {
    id: uuidv4(),
    title: 'Read a new book',
    isTaskDone: false,
    isImportant: false,
    steps: [
      { id: uuidv4(), title: 'Choose a book', isStepDone: false },
      { id: uuidv4(), title: 'Read 50 pages', isStepDone: false },
      { id: uuidv4(), title: 'Write a summary', isStepDone: false }
    ],
    isCardExpanded: false,
    link: '',
    note: 'Pick a book from the recommended list.',
  }
];

export default placeholderTasks;
