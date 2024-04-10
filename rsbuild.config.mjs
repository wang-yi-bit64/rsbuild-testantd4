import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  server: {
    port: 8023,
    proxy: {
      "/api": {
        target: "http://localhost:8085",
        changeOrigin: true,
        pathRewrite: { "^/api": "/api" },
      },
    }
  },
  source: {
    transformImport: [
      {
        libraryName: "antd",
        libraryDirectory: "es",
        style: true,
      },
    ]
  },
  tools: {
    less: {
      lessOptions: {
        javascriptEnabled: true,
        modifyVars: {
          "@border-radius-base": "3px",
          "@border-radius-sm": "2px",
          "@shadow-color": "rgba(0, 0, 0, 0.05)",
          "@shadow-1-down": "4px 4px 40px @shadow-color",
          "@border-color-split": "#f4f4f4",
          "@border-color-base": "#e5e5e5",
          "@menu-dark-bg": "#3e3e3e",
          "@text-color": "#666",
          "@icon-url": "/antd/iconfont",
          "@dark-half": "#494949",
          "@purple": "#d897eb",
          "@shadow-1": "4px 4px 20px 0 rgba(0, 0, 0, 0.01)",
          "@shadow-2": "4px 4px 20px 0 rgba(0, 0, 0, 0.05)",
          "@transition-ease-in": "all 0.3s ease-out",
          "@transition-ease-out": "all 0.3s ease-in",
          "@ease-in": "ease-in",
          "@primary-color": "#1890ff"
        }
      }
    }
  }
});
