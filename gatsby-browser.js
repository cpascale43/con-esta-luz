/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
// bootstrap 
import 'bootstrap/dist/css/bootstrap.css';

// semantic-ui 
import 'semantic-ui-css/semantic.min.css'

import "./src/styles/global.css"

import wrapWithProvider from "./wrap-with-provider"
export const wrapRootElement = wrapWithProvider
