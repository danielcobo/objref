/**
 * Get deep property of an object via a string path
 * @public
 * @param {Object} obj - data object
 * @param {string} path - reference path
 * @param {string} [separator='/'] - separator used in path
 * @param {boolean} [buildPath=false] - true/false to define undefined object subpaths
 * @returns {*} - deep property value
 */
module.exports = function objRef(obj, path, separator, buildPath) {
  if (typeof separator !== 'string') {
    separator = '/';
  }
  const pathParts = path.split(separator);
  let ref = obj;

  for (let i = 0; i < pathParts.length; ++i) {
    const prop = pathParts[i];
    if (typeof ref[prop] === 'undefined') {
      if (buildPath) {
        ref[prop] = {};
      } else {
        throw new Error('Invalid path');
      }
    }
    ref = ref[prop];
  }

  return ref;
};
