import chalk from 'chalk'
import semver from 'semver'
import packageConfig from '../package.json'
import shell from 'shelljs'
import childProcess from 'child_process'

const exec = (cmd: string) => {
    return childProcess.execSync(cmd).toString().trim()
}

const versionRequirements = [
    {
        name: 'node',
        currentVersion: semver.clean(process.version),
        versionRequirement: packageConfig.engines.node
    }
]

if (shell.which('npm')) {
    versionRequirements.push({
        name: 'npm',
        currentVersion: exec('npm --version'),
        versionRequirement: packageConfig.engines.npm
    })
}

export default () => {
    const warnings = []

    for (let i = 0; i < versionRequirements.length; i++) {
        const mod = versionRequirements[i]

        if (mod.currentVersion && !semver.satisfies(mod.currentVersion, mod.versionRequirement)) {
            warnings.push(mod.name + ': ' +
                chalk.red(mod.currentVersion) + ' should be ' +
                chalk.green(mod.versionRequirement)
            )
        }
    }

    if (warnings.length) {
        console.log('')
        console.log(chalk.yellow('To use this template, you must update following to modules:'))
        console.log()

        for (let i = 0; i < warnings.length; i++) {
            const warning = warnings[i]
            console.log('  ' + warning)
        }

        console.log()
        process.exit(1)
    }
}
