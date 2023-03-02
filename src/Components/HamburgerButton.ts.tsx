import styled from "styled-components";

export const OpenButton = styled.button`
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #1c3529;
    border: none;
    color:white;
    font-size: 1.4rem;
    cursor: pointer;
    @media (max-width:861px) {
        font-size: 2rem;
    }

    @media (min-width:861px) {
        display: none;
    }
`