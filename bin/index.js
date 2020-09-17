#!/usr/bin/env node
const createProject = require('./createProject');

const [command, ...params] = process.argv.slice(2);

const template = {
    create: createProject,
}

template[command] ? template[command](...params) : console.error('Command not found!');
