import styled from "styled-components";

export const ItemContainer = styled.div`
    width: 500px;

    h3 {
        font-size: 32px;
        color: #FAFAFA;
    }

    p {
        font-size:16px;
        color: #FAFAFA60;
        margin-bottom:20px;
    }

    a {
        color: white;
    }

    button {
        background-color: #D00000;
        border: 1px solid #500000;
        border-radius: 20px;

        height: 20px;
        width: 80px;

        font-weight: bold;

        margin: 10px 0 0 0;

        &: hover {
            background-color: #D0000095;
            cursor: pointer;
        }
    }

    hr {
        color: #FAFAFA60;
        margin: 20px 0;
    }
`