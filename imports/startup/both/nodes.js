// Defines Default QRL Node Details
// Additional user defined node can be stored in session.
// All functions and variables are here are not defined by 'let' or 'const'
// so that they can be utilised in other files within Meteor.

// Define the default nodes available in the UI.
// eslint-disable-next-line no-unused-vars, no-undef
DEFAULT_NODES = [
  {
    id: 'testnet-backup',
    name: 'Testnet (Official QRL Node 1)',
    disabled: '',
    explorerUrl: 'http://qrlexplorer.info/',
    grpc: 'qrl-faucet.folio.ninja:9009',
  },
  {
    id: 'testnet',
    name: 'Testnet (Official QRL Node 2)',
    disabled: 'disabled',
    explorerUrl: 'http://qrlexplorer.info/',
    grpc: '104.251.219.215:9009',
  },
  {
    id: 'mainnet',
    name: 'Mainnet (Official QRL Node)',
    disabled: 'disabled',
    explorerUrl: 'http://qrlexplorer.info/',
    grpc: '104.251.219.215:9009',
  },
  {
    id: 'localhost',
    name: 'Localhost (Desktop App Only)',
    disabled: 'disabled',
    explorerUrl: 'http://qrlexplorer.info/',
    grpc: 'localhost:9009',
  },
]

// Function to search through the DEFAULT_NODES array and identify and return an
// object based on its 'id' value.
// eslint-disable-next-line no-unused-vars, no-undef
findNodeData = (array, key) => {
  const objFound = _.find(array, (obj) => {
    if (obj.id === key) {
      return obj
    }
    return null
  })
  if (objFound) {
    return objFound
  }
  return null
}
