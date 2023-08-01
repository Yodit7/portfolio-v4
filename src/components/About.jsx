import { styled } from "styled-components";
import { HiArrowUpRight } from "react-icons/hi2";

const AboutContainer = styled.div`
    position: fixed;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 60px;
    color: white;
    margin: 0 40px;

    @media (min-width: 769px) and (max-width: 1024px) {
        position: absolute;
        flex-direction: row;
        margin: 0 40px;
        align-items: center;    
        padding-top: 0px;   
        height: 42vh;
        max-width: 984px;
        width: 94%;
        padding-bottom: 100px;
    }

    @media (max-width: 768px) {
        position: absolute;
        flex-direction: column;
        height: 50vh;
        margin-top: 30px;
    }
`;

const AboutDetails = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;

    .about-detail-title {
        font-size: 50px;
        color: white;
        font-weight: 800;
    }

    .about-detail-subtitle {
        font-size: 24px;
        font-weight: 300;    
    }

    .about-detail-description {
        font-size: 18px;
        color: rgb(162, 172, 189);
        font-weight: 300;
    }

`;

const AboutDetail = styled.p`
    
    .about-detail-education-list {
        list-style: none;
        gap: 5px;
        color: #6E7888;

        li {
            margin: 4px 0px;
        }
    }

    .about-detail-education-item {
        font-weight: 300;
    }

    .about-detail-education-item-bold {
        color: rgb(162, 172, 189);
        font-weight: 600;
    }
`;

const AboutEducation = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 16px;
    color: rgb(162, 172, 189);
`;

const Links = styled.ul`
    .links-title {
        font-size: 18px;
        font-weight: 100;
        text-decoration: underline;
        text-underline-offset: 5px;
        padding-bottom: 8px;
    }

    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-top: 150px;

    @media (min-width: 769px) and (max-width: 1024px) {
        padding-left: 40px;
    }

    @media (max-width: 768px){
        padding-top: 100px;
    }
`;

const Link = styled.li`
    padding: 2px 0px;
    color: rgb(162, 172, 189);

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    max-width: 410px;
    width: 100%;

    h4 {
        color: rgb(162, 172, 189);
        font-weight: 600; 
    }

    .link-row {
        display: flex;
        gap: 5px;
        align-items: center;

        p {
            font-weight: 100;
        }
    }

    a {
        grid-column-start: 2;
        color: rgb(162, 172, 189);
        text-decoration: none;
        font-size: 16px;
        font-weight: 100;
    }

    .link-refer {
        display: flex;
        gap: 10px;
        align-items: center;
    }

    .link-refer-no-tag {
        display: flex;
        gap: 5px;
        align-items: center;
    }

    @media (min-width: 769px) and (max-width: 1024px) {
        grid-template-columns: 30% 70%;
        width: 350px;
    }
`;

const About = () => {
    return (
        <>
            <AboutContainer id="about">
                <AboutDetails>
                    <AboutDetail className="about-detail-title">Yodit Ahmed.</AboutDetail>
                    <AboutDetail className="about-detail-subtitle">Fullstack Developer</AboutDetail>
                    <AboutDetail className="about-detail-description">I am passionate about building web products <br /> and digital experiences.</AboutDetail>
                    <AboutEducation>
                        <AboutDetail className="about-detail-education">
                            <ul className="about-detail-education-list">
                                <li className="about-detail-education-item about-detail-education-item-bold">B.Sc. + M.Sc. in Informatics</li> 
                                <li className="about-detail-education-item">@GoetheUniversity in Frankfurt am Main, Germany</li>
                            </ul>
                        </AboutDetail>
                        <AboutDetail className="about-detail-education">
                            <ul className="about-detail-education-list">
                                <li className="about-detail-education-item about-detail-education-item-bold">Semester Abroad in Computer Science</li> 
                                <li className="about-detail-education-item">@ChalmersUniversityOfTechnology in Göteborg, Sweden</li>
                            </ul>
                        </AboutDetail>
                    </AboutEducation>
                </AboutDetails>
                <Links>
                    <h6 className="links-title">Links</h6>
                    <Link>
                        <h4>Github</h4>
                        <div className="link-row">
                            <p>@yodit7</p>
                            <a href="https://github.com/Yodit7" className="link-refer"><HiArrowUpRight className="icon"/></a>
                        </div>
                    </Link>
                    <Link>
                        <h4>Linkedin</h4> 
                        <div className="link-row">
                            <p>Yodit Ahmed</p>
                            <a href="" className="link-refer"><HiArrowUpRight className="icon"/></a>
                        </div>
                    </Link>
                    <Link>
                        <h4>E-Mail</h4>
                        <div className="link-row">
                            <p>yoditahmed@gmail.com</p>
                            <a href="" className="link-refer link-refer-no-tag"><HiArrowUpRight className="icon"/></a>
                        </div>
                    </Link>
                </Links>
            </AboutContainer>
        </>
    )
}

export default About;