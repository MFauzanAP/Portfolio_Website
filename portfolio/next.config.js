const config = {
	reactStrictMode         : true,
	env			: {
		mongodburl		: process.env.MONGODB_STRING,
	},
	async headers () {
		return [
			{
				sources		: '/(.*)',
				headers		: [
					{
						key	: 'X-DNS-Prefetch-Control',
						value	: 'on'
					},
					{
						key	: 'X-XSS-Protection',
						value	: '1; mode=block'
					},
					{
						key	: 'X-Frame-Options',
						value	: 'SAMEORIGIN'
					},
					{
						key	: 'X-Content-Type-Options',
						value	: 'nosniff'
					}
				]
			}
		]
	},
};

module.exports = config
