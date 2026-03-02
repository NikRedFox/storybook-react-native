import { mergeConfig } from "vite";

export default {
  framework: "@storybook/react-vite",

  stories: [
    "../src/**/*.stories.jsx"
  ],

  addons: [
    "@storybook/addon-essentials"
  ],

  async viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: {
          "react-native": "react-native-web",
        },
        extensions: [".js", ".jsx"],
      },
    });
  },
};