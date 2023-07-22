export function isNodeAuthorized(nodes, required) {
  const targetLevels = required.split('.');

  for (const node of nodes) {
    let isAuthorized = true;
    const nodeLevels = node.split('.');

    if (
      nodeLevels.length < targetLevels.length &&
      nodeLevels[nodeLevels.length - 1] !== '*'
    ) {
      continue;
    }

    if (nodeLevels.length > targetLevels.length) {
      continue;
    }

    for (let i = 0; i < nodeLevels.length; i++) {
      if (nodeLevels[i] === '*') {
        continue;
      }

      if (nodeLevels[i] !== targetLevels[i]) {
        isAuthorized = false;
        break;
      }
    }

    if (isAuthorized) {
      return true;
    }
  }

  return false;
}
