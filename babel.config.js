module.exports = {
  presets: [
    ['@vue/cli-plugin-babel/preset', {
      /* Disabled due to clash with Storybook MDX */
      jsx: false,
    }],
  ],
  plugins: [
    '@babel/plugin-proposal-optional-chaining',
  ],
}
