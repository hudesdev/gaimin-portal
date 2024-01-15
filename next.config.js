/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    RPC_HOST:"https://lively-cool-hill.solana-mainnet.quiknode.pro/c9cdc92c17469a3cc71f79fbbdbf9f6fa6d973e8/",
    DEV_URI: "http://192.168.144.39:3000",
    TEST_URI: "http://192.168.144.27:8082",
    PRODUCT_URI: "https://master.d3g447rfm21a25.amplifyapp.com",
    // DISCORD_ENDPOINT: "https://discord.com/api/oauth2/authorize?client_id=1148191384902307880&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fdashboard&response_type=code&scope=identify%20email%20guilds"
    DISCORD_ENDPOINT: "https://discord.com/api/oauth2/authorize?client_id=1084099021251039293&redirect_uri=http%3A%2F%2F192.168.144.39%3A3000%2Fdashboard&response_type=code&scope=identify%20guilds%20email%20guilds.join%20guilds.members.read%20messages.read"
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
