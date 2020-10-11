module.exports = {
  stories: [
    '../src/**/*.stories.(js|mdx)'
  ],
  addons: [
    'storybook-addon-vue-info/lib/register',
    '@storybook/addon-actions',
    '@storybook/addon-links/register',
    '@storybook/addon-docs/register',
    '@storybook/addon-viewport/register',
    '@storybook/addon-backgrounds/register'
  ],
}
