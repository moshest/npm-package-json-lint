'use strict';

const hasDepPrereleaseVers = require('./../validators/dependency-audit').hasDepPrereleaseVers;
const LintIssue = require('./../LintIssue');
const lintId = 'no-restricted-pre-release-devDependencies';
const nodeName = 'devDependencies';
const message = 'You are using a restricted pre-release dependency. Please remove it.';
const ruleType = 'no-restricted-pre-release-dependencies';

const lint = function(packageJsonData, lintType, invalidPreRelDeps) {
  if (hasDepPrereleaseVers(packageJsonData, nodeName, invalidPreRelDeps)) {
    return new LintIssue(lintId, lintType, nodeName, message);
  }

  return true;
};

module.exports.lint = lint;
module.exports.ruleType = ruleType;