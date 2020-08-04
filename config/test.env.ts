import { merge } from 'webpack-merge'
import devEnv from './dev.env'

export default merge(devEnv, {
    // @ts-ignore
    NODE_ENV: '"testing"'
})