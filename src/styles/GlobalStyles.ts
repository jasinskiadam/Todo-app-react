import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

*, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

:root {
    --main-color:  rgb(29, 6, 56);
    --secondary-color: #000000;
    --white: #ececec;
    --completed-color: #9fd3c7;
    --neon-text-color: #f40;
    --shadow-color: #08f;
}

body {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Helvetica;
    background-color: var(--main-color);
};

.isComplete {
    background-color: var(--completed-color);
}

.isComplete span {
    text-decoration: line-through;
}
`;