interface Project {
    githubLink: string | null,
    webLink: string | null,
    title: string,
    desc: string,
    tech: string[]
}

export const AllProjects: Project[] = [

]

export const TopProjects: Project[] = [
    {
        webLink: "",
        githubLink: "",
        title: "Knowledge & Wiki",
        desc: "[Work in progress]. Easily create, organize, and discover knowledge for your entire organization.",
        tech: ["React", "Node.js", "Express", "SCSS"]
    },
    
    {
        webLink: null,
        githubLink: "",
        title: "Team meeting application",
        desc: "[Work in progress] Using your browser, share your video, desktop, and presentations with teammates and customers",
        tech: ["React", "Node.js", "WebRTC"]
    },
        {
        webLink: "",
        githubLink: "",
        title: "My Personal Website",
        desc: "My personal website, made with React and Typescript.",
        tech: ["Styled Components", "Typescript", "React"]
    },
    {
        webLink: null,
        githubLink: "",
        title: "Dashborads and Landing page",
        desc: "Using your browser, share your video, desktop, and presentations with teammates and customers",
        tech: ["React", "SCSS", "Tailwind", "Styled Components"]
    },
]