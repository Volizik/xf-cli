const shell = require('shelljs')

module.exports = function createProject(projectName) {
    shell.cd(process.cwd())
    shell.exec(`git clone https://github.com/Volizik/xf-project.git ${projectName}`);
}
