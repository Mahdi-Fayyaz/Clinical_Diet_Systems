import * as React from "react";
// import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";
import "./globals.css";
import "./css/colors.css";
import { Roboto } from "next/font/google";
const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});
export default function RootLayout(props) {
  return (
    <html lang="fa" dir="ltr" className={roboto.className}>
   
      <body>
        {/* <AppRouterCacheProvider options={{ enableCssLayer: true }}> */}
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            {props.children}
          </ThemeProvider>
        {/* </AppRouterCacheProvider> */}
      </body>
    </html>
  );
}
