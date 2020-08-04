import { merge } from 'webpack-merge'
import prodEnv from './production.env'

// @ts-ignore
export default merge(prodEnv, {
    NODE_ENV: '"development"'
})
