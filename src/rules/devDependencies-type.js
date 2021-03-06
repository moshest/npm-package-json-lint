'use strict';

const isObject = require('./../validators/type').isObject;
const LintIssue = require('./../LintIssue');
const lintId = 'devDependencies-type';
const nodeName = 'devDependencies';
const message = 'Type should be an Object';
const ruleType = 'standard';

const lint = function(packageJsonData, lintType) {
  if (!isObject(packageJsonData, nodeName)) {
    return new LintIssue(lintId, lintType, nodeName, message);
  }

  return true;
};

module.exports.lint = lint;
module.exports.ruleType = ruleType;
