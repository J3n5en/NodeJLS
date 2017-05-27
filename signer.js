'use strict';
const NodeRSA = require('node-rsa');
const key = new NodeRSA('-----BEGIN RSA PRIVATE KEY-----\n'+
'MIIBOwIBAAJBALecq3BwAI4YJZwhJ+snnDFj3lF3DMqNPorV6y5ZKXCiCMqj8OeO\n'+
'mxk4YZW9aaV9ckl/zlAOI0mpB3pDT+Xlj2sCAwEAAQJAW6/aVD05qbsZHMvZuS2A\n'+
'a5FpNNj0BDlf38hOtkhDzz/hkYb+EBYLLvldhgsD0OvRNy8yhz7EjaUqLCB0juIN\n'+
'4QIhAMsJQ3xiJemnJ2pD65iRNCC/Kr7jtxbbBwa6ZFLjp12pAiEA54JCn41fF8GZ\n'+
'90b9L5dtFQB2/yIcGX4Xo7bCvl8DaPMCIBgOZ+2T33QYtwXTOFXiVm/O1qy5ZFcT\n'+
'6ng0m3BqwsjJAiEAqna/l7wAyP1E4U7kHqbhKxWsiTAUgLDXtzRbMNHFMQECIQCA\n'+
'xlpXEPqnC3P8if0G9xHomqJ531rOJuzB8fNtRFmxnA==\n'+
'-----END RSA PRIVATE KEY-----', {signingScheme: {hash: 'md5'}});

/**
 * 签名函数
 * @param  {String} message - 需要签名的字符串
 * @return {String}         - 签名后的字符串
 */
function sign(message) {
  return key.sign(message, 'hex');
}

module.exports = sign;
