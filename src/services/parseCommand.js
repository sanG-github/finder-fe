import commandToUrl from './commandToUrl'

function analyzeCommandToApiUrl(command) {
    const cmd_prefix = command.split(' ')[0];

    return commandToUrl[cmd_prefix];
}

export default analyzeCommandToApiUrl;