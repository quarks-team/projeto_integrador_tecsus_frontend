const fs = require('fs')
const path = require('path')

// Função para atualizar a versão no JSON
function updateVersion(filePath, newVersion) {
  const jsonPath = path.resolve(__dirname, filePath)
  const jsonData = require(jsonPath)
  jsonData.version = newVersion
  fs.writeFileSync(jsonPath, JSON.stringify(jsonData, null, 2) + '\n')
}

// Pegar a nova versão do argumento de linha de comando
const newVersion = process.argv[2]

// Atualiza 'package.json' e 'package-lock.json'
updateVersion('./package.json', newVersion)
updateVersion('./package-lock.json', newVersion)
