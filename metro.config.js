const {getDefaultConfig} = require('metro-config');

module.exports = (async () => {
  const {
    resolver: {sourceExts, assetExts},
  } = await getDefaultConfig();
  return {
    resolver: {
      assetExts: [assetExts, 'txt', 'xml', 'png', 'jpg', 'pb', 'tflite','html'],
      sourceExts: [...sourceExts, 'txt', 'xml', 'png', 'jpg', 'pb', 'tflite'],
    },
  };
})();