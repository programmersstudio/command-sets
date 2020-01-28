// jshint esversion: 9

/**
 * @description undefined
 * @param {ParamsType} params list of command parameters
 * @param {?string} commandText text message
 * @param {!object} [secrets = {}] list of secrets
 * @return {Promise<SlackBodyType>} Response body
 */
async function _command(params, commandText, secrets = {}) {
    const {
      msg,
      varArgs
    } = params;
  
    return {
      response_type: 'in_channel', // or `ephemeral` for private response
      text: "This is a default response for a newly created command with text: " + commandText
    };
  }
  
  /**
   * @typedef {object} SlackBodyType
   * @property {string} text
   * @property {'in_channel'|'ephemeral'} [response_type]
   */
  
  const main = async ({__secrets = {}, commandText, ...params}) => ({body: await _command(params, commandText, __secrets)});
  module.exports = main;
  