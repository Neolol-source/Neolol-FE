const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const nextRuntimeDotenv = require('next-runtime-dotenv')

const withConfig = nextRuntimeDotenv({
  public: [
    'API_URL'
  ]
})

module.exports = withConfig(withPlugins([
  [optimizedImages, {
    optimizeImages: true,
  }],

  // your other plugins here

]));
