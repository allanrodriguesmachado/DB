import styled from "styled-components";

export const HomeContainer = styled.main`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
    }
`;

export const FormContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    color: ${(props) => props.theme['gray-100']};
    font-size: 1.25rem;
    font-weight: bold;
    flex-wrap: wrap;
`;

export const CountDownContainer = styled.div`
    font-family: 'Roboto Mono', monospace;
    font-size: 10rem;
    line-height: 8rem;
    color: ${(props) => props.theme['gray-100']};
    display: flex;
    gap: 1rem;

    span {
        background: ${(props) => props.theme['gray-700']};
        padding: 2rem 1rem;
        border-radius: 8px;
    }
`;

export const Separator = styled.div`
    padding: 2rem 0;
    color: ${(props) => props.theme['green-500']};
    width: 4rem;
    overflow: hidden;
    display: flex;
    justify-content: center;
`;

const BaseInput = styled.input`
    background: transparent;
    border: 0;
    height: 2.5rem;
    border-bottom:  2px solid ${(props) => props.theme['gray-500']};
    font-weight: bold;
    font-size: 1.025rem;
    padding: 0 0.5rem;
    color: ${(props) => props.theme['gray-100']};
    &::placeholder {
        color: ${(props) => props.theme['gray-500']};
    }

    &:focus {
        box-shadow: none;
        border-color: ${(props) => props.theme['green-500']};
    }
`;

export const TaskInput = styled(BaseInput)`
    flex: 1;
`;

export const MinutesAmountInput = styled(BaseInput)`
    width: 4rem;
`;

export const StartCountdownButton = styled.button`
    width: 100%;
    border: 0;
    padding: 1rem;
    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 0.5rem;
    font-weight: bold;
    cursor: pointer;
    margin-top: 1rem;

    background: ${(props) => props.theme['green-500']};
    color: ${(props) => props.theme['green-300']};

    &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }

    &:not(:disabled)hover {
        background: ${(props) => props.theme['green-700']};
    }
`;