import fs from 'fs'

const FILE_NAME_IN = 'input.txt'
const file = fs.readFileSync(`./${FILE_NAME_IN}`, 'utf8')
const arr = file.split(', ').map(c => +c)
