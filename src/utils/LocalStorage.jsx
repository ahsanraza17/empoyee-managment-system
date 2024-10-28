const employees = [
  {
    id: 1,
    name: "Ahsan Ali",
    email: "ahsan@gmail.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Prepare sales report",
        taskDescription: "Create and submit the sales report for Q3",
        taskDate: "2024-10-21",
        taskCategory: "Sales",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Client meeting",
        taskDescription: "Discuss contract renewal with Client A",
        taskDate: "2024-10-22",
        taskCategory: "Meetings",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Bug fixing",
        taskDescription: "Fix login page issue reported by users",
        taskDate: "2024-10-24",
        taskCategory: "Development",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 2,
    name: "Fatima Khan",
    email: "fatima@gmail.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Website redesign",
        taskDescription: "Complete the redesign of the corporate website",
        taskDate: "2024-10-23",
        taskCategory: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Bug fixing",
        taskDescription: "Fix login page issue reported by users",
        taskDate: "2024-10-24",
        taskCategory: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
    taskCount: {
      active: 2,
      newTask: 0,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 3,
    name: "Hamza Malik",
    email: "hamza@gmail.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Inventory audit",
        taskDescription: "Complete the annual inventory audit",
        taskDate: "2024-10-25",
        taskCategory: "Audit",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Budget review",
        taskDescription: "Review department budget for next quarter",
        taskDate: "2024-10-26",
        taskCategory: "Finance",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Product testing",
        taskDescription: "Test the new product features",
        taskDate: "2024-10-27",
        taskCategory: "Quality Assurance",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
      {
        taskTitle: "Social media campaign",
        taskDescription: "Launch a new social media campaign for brand awareness",
        taskDate: "2024-10-29",
        taskCategory: "Marketing",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
  },
  {
    id: 4,
    name: "Sara Ahmed",
    email: "sara@gmail.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Marketing plan",
        taskDescription: "Draft the marketing plan for the upcoming product",
        taskDate: "2024-10-28",
        taskCategory: "Marketing",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Social media campaign",
        taskDescription: "Launch a new social media campaign for brand awareness",
        taskDate: "2024-10-29",
        taskCategory: "Marketing",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 0,
      failed: 0,
    },
  },
  {
    id: 5,
    name: "Zainab Yousuf",
    email: "zainab@gmail.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Server maintenance",
        taskDescription: "Perform the scheduled maintenance of the server",
        taskDate: "2024-10-30",
        taskCategory: "IT",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Data backup",
        taskDescription: "Ensure all critical data is backed up before updates",
        taskDate: "2024-10-31",
        taskCategory: "IT",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
    taskCount: {
      active: 0,
      newTask: 2,
      completed: 0,
      failed: 1,
    },
  },
];

const admin = [
  {
    id: 100,
    name: "Usman Sheikh",
    email: "admin@example.com",
    password: "123",
  },
];



export const setLocalStorage = () => {
    localStorage.setItem("employees", JSON.stringify(employees));
    localStorage.setItem("admin", JSON.stringify(admin));
}

export const getLocalStorage = () => {
    const employee = localStorage.getItem("employees");
    const employeeData = JSON.parse(employee);
    const admins = localStorage.getItem("admin")
    const adminData = JSON.parse(admins);
    return {employeeData, adminData};
}