/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.module.rules.push({
          test: /\.(pdf)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                publicPath: '/_next/static/files', // Adjust this path as needed
                outputPath: 'static/files', // Adjust this path as needed
              },
            },
          ],
        });
        return config;
      },
}

module.exports = nextConfig
