import React from 'react'
import styled from 'styled-components';

interface iLittle{
    image?: any,
    title?: string,
    text?: string,

}

const Little:React.FC<iLittle> = ({image, title, text}) => {
  return (
    <div>
        <Container>
            <Image src={image}/>
            <Title>{title}</Title>
            <Text>{text}</Text>
        </Container>
    </div>
  )
}

export default Little

const Title = styled.div`

font-weight: 500;
margin-top: 15px;
font-size: 20px;
`;


const Text = styled.div`
font-size: 16px;
margin-top: 15px;
line-height: 23px;
`;

const Image = styled.img`
height: 60px;
width: 60px;
background-color: whitesmoke;
margin-top: 15px;
border-radius: 5px;
`;

const Container = styled.div`
width: 250px;
height: 300px;
display: flex;
padding: 0 10px;
/* justify-content: center; */
flex-direction: column;
background-color: silver;
border-radius: 5px;
cursor: pointer;
transition: all 400ms ease-in-out;

:hover{
    background-color: brown;
}

:hover  ${Image}{
    background-color: darkorange;
};
:hover  ${Title}{
    color: blanchedalmond;
};
:hover  ${Text}{
    color: whitesmoke;
};
`;