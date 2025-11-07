const employees = [
  {
    id: 1,
    firstName: "Aaradhya",
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        id: 101,
        title: "Update client report",
        description: "Revise the quarterly report with latest sales data.",
        date: "2025-10-20",
        category: "Reporting",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        id: 102,
        title: "Fix login bug",
        description: "Resolve login issue reported by QA team.",
        date: "2025-10-18",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        id: 103,
        title: "Prepare presentation",
        description: "Design slides for the upcoming stakeholder meeting.",
        date: "2025-10-22",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ],
    taskCount: {
      active: 2,
      completed: 1,
      failed: 0,
      newTask: 1
    }
  },
  {
    id: 2,
    firstName: "Ishita",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        id: 201,
        title: "Research competitors",
        description: "Gather information about top 5 competitors.",
        date: "2025-10-19",
        category: "Research",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        id: 202,
        title: "Client follow-up",
        description: "Call client to confirm feedback on proposal.",
        date: "2025-10-17",
        category: "Communication",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        id: 203,
        title: "Organize assets",
        description: "Clean up shared drive and label folders correctly.",
        date: "2025-10-16",
        category: "Admin",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        id: 204,
        title: "Weekly team sync",
        description: "Attend and contribute to weekly sync-up.",
        date: "2025-10-21",
        category: "Meeting",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ],
    taskCount: {
      active: 2,
      completed: 1,
      failed: 1,
      newTask: 1
    }
  },
  {
    id: 3,
    firstName: "Kavya",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        id: 301,
        title: "Code review",
        description: "Review PRs assigned for module A.",
        date: "2025-10-18",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        id: 302,
        title: "Onboard intern",
        description: "Help new intern with system setup.",
        date: "2025-10-20",
        category: "HR",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        id: 303,
        title: "Update documentation",
        description: "Add new APIs to developer docs.",
        date: "2025-10-19",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        id: 304,
        title: "Sprint retrospective",
        description: "Prepare notes for sprint retro.",
        date: "2025-10-21",
        category: "Scrum",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        id: 305,
        title: "Build test cases",
        description: "Write tests for new feature release.",
        date: "2025-10-23",
        category: "QA",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ],
    taskCount: {
      active: 3,
      completed: 1,
      failed: 1,
      newTask: 2
    }
  },
  {
    id: 4,
    firstName: "Meera",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        id: 401,
        title: "Product demo",
        description: "Give demo of new features to sales team.",
        date: "2025-10-20",
        category: "Product",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        id: 402,
        title: "Design wireframes",
        description: "Create wireframes for mobile app redesign.",
        date: "2025-10-19",
        category: "Design",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        id: 403,
        title: "Bug triage",
        description: "Organize and prioritize reported bugs.",
        date: "2025-10-18",
        category: "Support",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        id: 404,
        title: "Feature planning",
        description: "Draft spec for next major feature.",
        date: "2025-10-21",
        category: "Planning",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ],
    taskCount: {
      active: 2,
      completed: 1,
      failed: 1,
      newTask: 1
    }
  },
  {
    id: 5,
    firstName: "Riya",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        id: 501,
        title: "Security audit",
        description: "Run audit on internal systems.",
        date: "2025-10-17",
        category: "Security",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        id: 502,
        title: "Server backup",
        description: "Ensure daily backups are successful.",
        date: "2025-10-18",
        category: "IT",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        id: 503,
        title: "Monitor uptime",
        description: "Track and report server uptime logs.",
        date: "2025-10-20",
        category: "Operations",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        id: 504,
        title: "Patch deployment",
        description: "Deploy critical security patch.",
        date: "2025-10-22",
        category: "Maintenance",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        id: 505,
        title: "Incident report",
        description: "Write report for last week's downtime.",
        date: "2025-10-19",
        category: "Reporting",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ],
    taskCount: {
      active: 2,
      completed: 2,
      failed: 1,
      newTask: 1
    }
  }
];


const admin = [
  {
    id: 100,
    email: "admin@example.com",
    password: "123"
  }
];

export const setLocalStorage = () => {
  if (!localStorage.getItem('employees')) {
      localStorage.setItem("employees", JSON.stringify(employees))
    }
  if (!localStorage.getItem('admin')) {
    localStorage.setItem("admin",JSON.stringify(admin))
  }
};

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem("employees") || "[]");
    const admin = JSON.parse(localStorage.getItem('admin') || "[]");
    
    return {employees,admin}
    
};

export const updateLocalStorage = (employees) => {
  localStorage.setItem("employees",JSON.stringify(employees))
}