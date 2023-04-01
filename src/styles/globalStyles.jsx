import {createGlobalStyle} from 'style-components'

export const GlobalStyle = createGlobalStyle`
  *{
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
    font-family: 'Source Sans Pro', sans-serif;
  }
  :root{
    font-size: 62.5%;

    /* brand colors */
    ---brand-color: #9333EA;
    ---brand-color-light: #A855F7;
    /* neutral colors */
    ---gray-900: #111827;
    ---gray-800: #1F2937;
    ---gray-700: #374151;
    ---gray-600: #4B5563;
    ---gray-500: #6B7280;
    ---gray-400: #9CA3AF;
    ---gray-300: #D1D5DB;
    ---gray-200: #E5E7EB;
    ---gray-100: #F3F4F6;
    ---gray-50: #F9FAFB;
    /* status color */
    ---status-sucess: #6EE7B7;
    ---status-error: #FB7185;
  }
`