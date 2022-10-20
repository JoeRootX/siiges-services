// External dependencies
const { checkers, Logger } = require('@siiges-services/shared');

const updateFile = (updateFileQuery) => async (identifierObj, changes) => {
  Logger.info('[files]: Updating file');
  const fileUpdated = await updateFileQuery(identifierObj, changes);
  checkers.throwErrorIfDataIsFalsy(fileUpdated, 'files', identifierObj);
  Logger.info('[files]: file updated');

  return fileUpdated;
};

module.exports = updateFile;
