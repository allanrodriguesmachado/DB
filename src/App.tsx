import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default.ts";
import { GlobalStyles } from "./styles/global.ts";
import { Router } from "./Router.tsx";
import { BrowserRouter } from "react-router-dom";


export function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <BrowserRouter>
                <Router />
                <GlobalStyles />
            </BrowserRouter>
        </ThemeProvider>
    )
}

