/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

/* jshint latedef:false */
/* jshint forin:false */
/* jshint noempty:false */

'use strict';

const msRest = require('ms-rest');
const ServiceClient = msRest.ServiceClient;
const WebResource = msRest.WebResource;

const models = require('./models');


/**
 * Get test coverage report
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _getReport(options, callback) {
   /* jshint validthis: true */
  let client = this;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }

  // Construct URL
  let baseUrl = this.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'report';

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.headers = {};
  httpRequest.url = requestUrl;
  // Set Headers
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorModel']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = {
            required: false,
            serializedName: 'parsedResponse',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'NumberElementType',
                  type: {
                    name: 'Number'
                  }
              }
            }
          };
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @class
 * Initializes a new instance of the AutoRestReportService class.
 * @constructor
 *
 * @param {string} [baseUri] - The base URI of the service.
 *
 * @param {object} [options] - The parameter options
 *
 * @param {Array} [options.filters] - Filters to be added to the request pipeline
 *
 * @param {object} [options.requestOptions] - Options for the underlying request object
 * {@link https://github.com/request/request#requestoptions-callback Options doc}
 *
 * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
 *
 */
class AutoRestReportService extends ServiceClient {
  constructor(baseUri, options) {

    if (!options) options = {};

    super(null, options);

    this.baseUri = baseUri;
    if (!this.baseUri) {
      this.baseUri = 'http://localhost';
    }

    let packageInfo = this.getPackageJsonInfo(__dirname);
    this.addUserAgentInfo(`${packageInfo.name}/${packageInfo.version}`);
    this.models = models;
    this._getReport = _getReport;
    msRest.addSerializationMixin(this);
  }

  /**
   * Get test coverage report
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  getReportWithHttpOperationResponse(options) {
    let client = this;
    let self = this;
    return new Promise((resolve, reject) => {
      self._getReport(options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * Get test coverage report
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  getReport(options, optionalCallback) {
    let client = this;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._getReport(options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._getReport(options, optionalCallback);
    }
  }

}

module.exports = AutoRestReportService;
