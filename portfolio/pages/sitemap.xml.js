import React from "react";
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  	<url>
		<loc>http://www.muhammadfauzan.me</loc>
		<changefreq>monthly</changefreq>
		<priority>0.5</priority>
		<lastmod>2021-09-23</lastmod>
  	</url>
	<url>
		<loc>http://www.muhammadfauzan.me/projects</loc>
		<changefreq>monthly</changefreq>
		<priority>0.3</priority>
		<lastmod>2021-09-23</lastmod>
  	</url>
	<url>
		<loc>http://www.muhammadfauzan.me/projects/Snowball_Project</loc>
		<changefreq>monthly</changefreq>
		<priority>0.5</priority>
		<lastmod>2021-09-23</lastmod>
  	</url>
	<url>
		<loc>http://www.muhammadfauzan.me/projects/Portfolio_Project</loc>
		<changefreq>monthly</changefreq>
		<priority>0.5</priority>
		<lastmod>2021-09-23</lastmod>
  	</url>
	<url>
		<loc>http://www.muhammadfauzan.me/projects/Malvor</loc>
		<changefreq>monthly</changefreq>
		<priority>0.5</priority>
		<lastmod>2021-09-23</lastmod>
  	</url>
	<url>
		<loc>http://www.muhammadfauzan.me/projects/Data_Entry_Project</loc>
		<changefreq>monthly</changefreq>
		<priority>0.5</priority>
		<lastmod>2021-09-23</lastmod>
  	</url>
	<url>
		<loc>http://www.muhammadfauzan.me/projects/Chess_Project</loc>
		<changefreq>monthly</changefreq>
		<priority>0.5</priority>
		<lastmod>2021-09-23</lastmod>
  	</url>
	<url>
		<loc>http://www.muhammadfauzan.me/projects/USB_Project</loc>
		<changefreq>monthly</changefreq>
		<priority>0.5</priority>
		<lastmod>2021-09-23</lastmod>
  	</url>
	<url>
		<loc>http://www.muhammadfauzan.me/projects/Revision_Cards_Project</loc>
		<changefreq>monthly</changefreq>
		<priority>0.5</priority>
		<lastmod>2021-09-23</lastmod>
  	</url>
	<url>
		<loc>http://www.muhammadfauzan.me/projects/Game_Qode_Project</loc>
		<changefreq>monthly</changefreq>
		<priority>0.5</priority>
		<lastmod>2021-09-23</lastmod>
  	</url>
	<url>
		<loc>http://www.muhammadfauzan.me/projects/Top_Down_Project</loc>
		<changefreq>monthly</changefreq>
		<priority>0.5</priority>
		<lastmod>2021-09-23</lastmod>
  	</url>
	<url>
		<loc>http://www.muhammadfauzan.me/projects/Digital_Coursebook_Project</loc>
		<changefreq>monthly</changefreq>
		<priority>0.5</priority>
		<lastmod>2021-09-23</lastmod>
  	</url>
	<url>
		<loc>http://www.muhammadfauzan.me/about</loc>
		<changefreq>monthly</changefreq>
		<priority>0.3</priority>
		<lastmod>2021-09-23</lastmod>
  	</url>
	<url>
		<loc>http://www.muhammadfauzan.me/contact</loc>
		<changefreq>monthly</changefreq>
		<priority>0.3</priority>
		<lastmod>2021-09-23</lastmod>
  	</url>
</urlset>`

const Sitemap = () => {};

export const getServerSideProps = async ({ res }) => {

	res.setHeader("Content-Type", "text/xml");
	res.write(sitemap);
	res.end();

	return {
		props: {},
	};

};

export default Sitemap;