const path = require('path');

module.exports.getContentPath = function (type) {
  switch (type) {
    case 'images':
      return path.join(this.get('paths:contentPath'), 'images/');
    case 'apps':
      return path.join(this.get('paths:contentPath'), 'apps/');
    case 'storage':
      return path.join(this.get('paths:contentPath'), 'adapters', 'storage/');
    case 'scheduling':
      return path.join(this.get('paths:contentPath'), 'adapters', 'scheduling/');
    case 'logs':
      return path.join(this.get('paths:contentPath'), 'logs/');
    case 'data':
      return path.join(this.get('paths:contentPath'), 'data/');
    default:
      throw new Error('getContentPath was called with: ' + type);
  }
};