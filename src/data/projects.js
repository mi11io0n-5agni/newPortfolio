export const featuredProjects = [
  {
    id: "ecommerce",
    name: "Ethio Gebeya — E-commerce Store",
    shortName: "E-commerce Store",
    overview:
      "Full-stack MERN store where users register and log in with JWT, browse and search products, manage a cart, checkout, place orders, and view order history and profile details.",
    highlights: [
      "JWT authentication with protected routes",
      "Cart quantity updates and checkout flow",
      "Order history and user profile management",
      "Deployed frontend (Vercel) and API (Render)",
    ],
    stack: [
      "React",
      "Redux Toolkit",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
    ],
    image: "/projects/ecommerce-home.png",
    imageAlt: "Ethio Gebeya e-commerce home page screenshot",
    github: "https://github.com/mi11io0n-5agni/CodeAlpha_EcommerceStore",
    liveDemo: "https://ethiogebeya-store.vercel.app/",
    caseStudy: {
      challenge:
        "Build a real shopping experience where customers can browse products, hold a cart, and complete secure checkout without losing context across the app.",
      approach:
        "I modeled the application around a full MERN flow, combining JWT-protected routes with a responsive storefront and persistent account actions such as order history and profile management.",
      result:
        "The app demonstrates a clean end-to-end product flow from browsing to checkout, making it a strong example of my full-stack product thinking and API-driven frontend implementation.",
      process: [
        "Designed the storefront architecture and user flow around secure sessions and cart state.",
        "Built REST endpoints for products, authentication, orders, and protected user actions.",
        "Connected frontend state management to support checkout, user updates, and order tracking.",
      ],
    },
  },
  {
    id: "taskflow",
    name: "TaskFlow — Project Management",
    shortName: "TaskFlow",
    overview:
      "Collaborative MERN workspace with projects, Kanban boards (Todo → In Progress → Review → Done), task assignment, drag-and-drop, comments, notifications, and Socket.IO real-time updates.",
    highlights: [
      "Project membership and task CRUD",
      "Drag-and-drop board with @hello-pangea/dnd",
      "Task comments and notification center",
      "Live demo on Vercel",
    ],
    stack: [
      "React",
      "Vite",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.IO",
    ],
    image: "/projects/taskflow-dashboard.png",
    imageAlt: "TaskFlow dashboard screenshot",
    github: "https://github.com/mi11io0n-5agni/CodeAlpha_ProjectManagement",
    liveDemo: "https://taskflow-management-tool.vercel.app/",
    caseStudy: {
      challenge:
        "Create a project management app that supports multi-user collaboration and shows real-time task movement across a shared workflow.",
      approach:
        "I structured the app around project-based workspaces, task states, comments, and live notifications so the interface feels responsive and team-driven rather than static.",
      result:
        "The project highlights my ability to design collaborative product features and build a real-time workflow that feels modern and practical for team-based work.",
      process: [
        "Modeled projects, teams, and task states as data-heavy entities with clear ownership rules.",
        "Implemented drag-and-drop interactions and notification flows to keep updates visible in real time.",
        "Used Socket.IO to synchronize task changes and keep collaboration live across sessions.",
      ],
    },
  },
  {
    id: "netflix-clone",
    name: "Netflix Clone — Streaming UI",
    shortName: "Netflix Clone",
    overview:
      "Streaming-platform-inspired React app using TMDB data: featured banner, category rows, movie and TV browsing, detail pages with trailers (YouTube), My List, watch history, and client-side auth stored in localStorage.",
    highlights: [
      "Home banner and horizontal content rows",
      "Movies, TV, Latest, and detail routes",
      "Trailer playback and My List persistence",
      "Deployed on GitHub Pages",
    ],
    stack: ["React", "Vite", "React Router", "Axios", "Material UI", "TMDB API"],
    image: "/projects/netflix-clone-preview.png",
    imageAlt: "Netflix clone project preview",
    github: "https://github.com/mi11io0n-5agni/Netflix-Clone",
    liveDemo: "https://mi11io0n-5agni.github.io/Netflix-Clone/",
    caseStudy: {
      challenge:
        "Replicate the feel of a streaming platform while keeping the app fast, responsive, and easy to browse across many categories and media types.",
      approach:
        "I used a data-driven UI pattern with reusable components, category sections, and detail views to match the behavior of modern streaming apps while keeping the experience polished.",
      result:
        "This project demonstrates my frontend design instincts, component reuse, and ability to build immersive interfaces that feel close to real product experiences.",
      process: [
        "Integrated TMDB API data and shaped the UI around movie and TV categories.",
        "Built detail pages, banners, and persistent preferences like My List and watch history.",
        "Focused on clean navigation and responsive layout decisions to improve browsing flow.",
      ],
    },
  },
  {
    id: "coop-bank",
    name: "COOP Bank Queue Management",
    shortName: "COOP Bank Queue",
    overview:
      "Bank service queue system: customers request tickets by service type, check status by queue number, and staff manage Waiting → Serving → Completed workflows with role-based admin and employee dashboards.",
    highlights: [
      "Customer ticket generation (kiosk / get-queue flow)",
      "Queue lookup by ticket number",
      "Employee dashboard filtered by assigned service",
      "Admin employee management and full queue overview",
    ],
    stack: ["React", "Vite", "Node.js", "Express", "MongoDB", "JWT"],
    image: "/projects/coop-bank-preview.png",
    imageAlt: "COOP Bank queue system preview",
    github: "https://github.com/mi11io0n-5agni/BankingOperation",
    liveDemo: "https://coopbankqueue.vercel.app/",
    caseStudy: {
      challenge:
        "Design a queue management workflow that helps customers and staff work efficiently without confusion during service requests and status tracking.",
      approach:
        "I built a role-based system that separated customer, employee, and admin experiences while keeping the same business flow consistent across all interfaces.",
      result:
        "The app shows my ability to create practical business tools with clear user roles, process logic, and workflow management features.",
      process: [
        "Mapped the queue lifecycle from ticket creation through completion and staff status updates.",
        "Created role-specific dashboards to support different operational needs.",
        "Used structured data and route logic to keep ticket tracking clear and reliable.",
      ],
    },
  },
];
