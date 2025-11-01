import project1 from "../assets/images/projects/project1.png";
import project2 from "../assets/images/projects/project2.png";
import project3 from "../assets/images/projects/project3.png";

export const Hero_content = " Hello , I'm kaushal Software Developer";


export const About_text = "Hello, I'm Kaushal, a Computer Science and Engineering student pursuing B.Tech. from Netaji Subhas University of Technology (NSUT). While working on several projects, I developed a strong interest in backend development and gained a solid understanding of it. I’m also deeply enthusiastic about Generative AI and love exploring how emerging technologies can solve real-world problems.";


export const PROJECTS = [
    {
        title: "Prescripto - Doctor Appointment Application",
        image: project1,
        description: "Developed a full-stack doctor appointment booking application with role-based access for doctors, patients, and admins. Implemented authentication, appointment scheduling, and real-time status updates.",
        technologies: ["React", "Node.js", "Express.js", "MongoDB", "Stripe"],
    },
    {
        title: "Railway Management System API",
        image: project2,
        description: "Built a RESTful API for managing railway operations including user registration, login, train management, seat availability, and booking details with admin-level access control.",
        technologies: ["Python", "Flask", "PostgreSQL"],
    },
    {
        title: "Customer Churn Prediction",
        image: project3,
        description: "Developed a machine learning model to predict customer churn using historical data and implemented algorithms like logistic regression and random forests to identify key churn indicators.",
        technologies: ["Python", "Pandas", "Jupyter Notebook"],
    }
];


export const CONTACT = {
    email : "kaushal01adv@gmail.com"
}