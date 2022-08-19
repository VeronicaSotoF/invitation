import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  font-family: 'Poppins', sans-serif;
  color: var(--main-text-color);
  background: url('https://images.unsplash.com/photo-1521512233585-c0bb78faee37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80');
  background-repeat: repeat;
  background-size: auto;
  
  @media (min-width: 710px) {
    background-size: cover;
  }

}

h1,h2,h3{
  margin: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

.shadow {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
}
.glass {
  background: rgba( 255, 255, 255, 0.7 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 5px );
-webkit-backdrop-filter: blur( 5px );

border: 1px solid rgba( 255, 255, 255, 0.18 );
} 
.glass > h1, h2, h3, p, div, a, button {
  filter: none !important;
  -webkit-backdrop-filter: none;
}

:root {
  --main-bg-color: antiquewhite;
  ${"--secondary-bg-color: rgba(48, 50, 54, 0.6);"}
  --secondary-bg-color: rgba(33, 21, 6, 0.5);
  --main-text-color: black;
  --main-title-color: black;
  --light-text-color: white;
  --overlay-color: white;
  --accent-color: #A78556;
}
`;
//imagenes alternativas
//https://images.unsplash.com/photo-1576481564650-61d2ed81f6d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80
//https://images.unsplash.com/photo-1521512233585-c0bb78faee37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
