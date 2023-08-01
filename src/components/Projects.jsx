import { styled } from "styled-components";
import { HiArrowUpRight } from "react-icons/hi2";
import { BsGithub } from "react-icons/bs";
import Contact from "./Contact";


const ProjectsContainer = styled.div`
    color: white;
    padding-top: 100px;
    position: absolute;
    left: 50%;
    // right: 20%;
    max-width: 500px;

    .link-title {
        color: white;
        font-size: 18px;
        font-weight: 100;
        text-decoration: underline;
        text-underline-offset: 5px;
        padding-bottom: 8px;
    }

    @media (min-width: 769px) and (max-width: 1024px) {
        display: flex;
        flex-direction: column;
        margin: 0 40px;
        left: 0;
        top: 500px;
        max-width: 984px;
    }

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        margin: 0px 40px;
        left: 0;
        top: 600px;
        max-width: 768px;
        margin-top: 100px;
    }
`;

const Project = styled.div`
    margin-bottom: 50px;

    .project-title {
        display: flex;
        align-items: center;
        gap: 10px;

        a {
            display: flex;
            align-items: center;
        }
    }
`;

const Title = styled.p`
    margin: 15px 0px;
    font-size: 18px;
    font-weight: 600;
    color: rgb(162, 172, 189);
`;

const Preview = styled.div`
    img {
        height: 300px;
        // width: 100%;
        width: 550px;
        margin: 20px 0px;
        filter: brightness(65%);
        transition: filter 0.3s ease-in-out;

        @media(min-width: 1025px) and (max-width: 1200px) {
            max-width: 500px;
        }

        @media (min-width: 769px) and (max-width: 1024px){
            margin: 10px auto;
            max-width: 500px;
            width: 100%;
            height: auto;
        }

        @media (max-width: 768px) {
            margin: 10px auto;
            max-width: 500px;
            width: 100%;
            height: auto;
        }
    }

    img:hover {
        filter: brightness(100%);
    }
`;
    
    const ProjectDescription = styled.p`
    font-weight: 300;
    font-size: 16px;
    color:  #6E7888;
`;

const Frameworks = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    margin: 15px 0px;
    font-size: 14px;
`;

const Framework = styled.li`
    border: 1px solid rgb(162, 172, 189);
    padding: 4px 12px;
    border-radius: 14px;
    font-weight: 300;
    color: rgb(162, 172, 189);
`;

const Projects = () => {
    return (
        <>
            <ProjectsContainer id="projects">
                <a href="" className="link-title">Projects</a>
                <Project>
                    <div className="project-title">
                        <Title>CryptoCurrently</Title>
                        <a href="https://yodit7.github.io/cryptocurrently/" target="_blank"><HiArrowUpRight className="icon"/></a>
                        <a href="https://github.com/Yodit7/cryptocurrently" target="_blank"><BsGithub className="icon" /></a>
                    </div>
                    <ProjectDescription>
                    A web app for visualizing crypto currencies. View the top currencies, 
                    the current market, up to date news and genereal information about crpyto 
                    via crpyto-abc.
                    </ProjectDescription>
                    <Preview>
                        <img src="../images/cryptocurrently.png" alt="Preview Image" className="project-preview"/>
                    </Preview>
                    <Frameworks>
                        <Framework>html</Framework>
                        <Framework>css</Framework>
                        <Framework>javascript</Framework>
                        <Framework>bootstrap</Framework>
                        <Framework>coindesk api</Framework>
                    </Frameworks>
                </Project>
                <Project>
                    <div className="project-title">
                        <Title>Project Tracker</Title>
                        <a href="https://project-tracker-reactapp.netlify.app/" target="_blank"><HiArrowUpRight className="icon"/></a>
                        <a href="https://github.com/Yodit7/ProjectTracker" target="_blank"><BsGithub className="icon" /></a>
                    </div>
                    <ProjectDescription>
                    The project tracker is a web application that helps users 
                    manage tasks by organizing them into three sections: "To Do," "In Progress," and "Done." 
                    Users can easily drag and drop tasks between sections, allowing them to track the 
                    progress of their projects in a visual and efficient way.
                    </ProjectDescription>
                    <Preview>
                        <img src="../images/projecttracker_01.png" alt="Preview Image" className="project-preview"/>
                    </Preview>
                    <Frameworks>
                        <Framework>html</Framework>
                        <Framework>css</Framework>
                        <Framework>javascript</Framework>
                        <Framework>react</Framework>
                    </Frameworks>
                </Project>
                <Project>
                    <div className="project-title">
                        <Title>Agency Website</Title>
                        <a href="https://yodit7.github.io/agency-website/" target="_blank"><HiArrowUpRight className="icon"/></a>
                        <a href="https://github.com/Yodit7/agency-website" target="_blank"><BsGithub className="icon" /></a>
                    </div>
                    <ProjectDescription>
                    A minimal, black and white responsive website for a digital agency.
                    </ProjectDescription>
                    <Preview>
                        <img src="../images/agency.png" alt="Preview Image" className="project-preview"/>
                    </Preview>
                    <Frameworks>
                        <Framework>html</Framework>
                        <Framework>css</Framework>
                        <Framework>javascript</Framework>
                        <Framework>bootstrap</Framework>
                    </Frameworks>
                </Project>
            <Contact />
            </ProjectsContainer>
        </>
    )
}

export default Projects;