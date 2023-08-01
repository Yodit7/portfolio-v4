import { styled } from 'styled-components';
import { BsEnvelopeAt } from "react-icons/bs";

const ContactContainer = styled.div`
    padding-bottom: 60px;
`;

const Title = styled.p`
    color: white;
    font-size: 18px;
    font-weight: 100;
    text-decoration: underline;
    text-underline-offset: 5px;
    padding-bottom: 8px;
`;

const Info = styled.div`

    p {
        padding: 10px 0px;
        color: rgb(162, 172, 189);
        font-weight: 100;
    }

    .icon-mail {
        font-size: 18px;
        color: rgb(162, 172,189);
        cursor: pointer;
    }
`;

const Contact = () => {
    const handleMail = () => {
        window.location.href = 'mailto:yoditahmed@gmail.com';
    }

    return (
        <>
            <ContactContainer id="contact">
                <Title>Contact</Title>
                <Info>
                    <p>
                        Let's get in touch. 
                        <br />
                        Currently looking for new opportunities, <br />
                        regardless my inbox is always open. 
                    </p>
                    <BsEnvelopeAt className="icon-mail" onclick={handleMail}/>
                </Info>
            </ContactContainer>
        </>
    )
}

export default Contact;