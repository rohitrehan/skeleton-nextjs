import { EnumChangefreq, SitemapItemLoose } from "sitemap";

const applicationBase = process.env.SITE_URL;
export const getServerSideProps = async ({ res }: any) => {
  const staticPages = [{
    url: '/'
  }, {
    url: '/privacy-policy-Avatars'
  }, {
    url: '/cookie-policy'
  }, {
    url: '/legal-notice'
  }, {
    url: '/tnc'
  }]

  const urls: SitemapItemLoose[] = []
  urls.push(...staticPages.map((page) => {
    return {
      url: `${page.url}`,
      changefreq: EnumChangefreq.MONTHLY,
      priority: 1
    }
  }))
  

  const toUrlTag = (url: SitemapItemLoose) => {
    return `<url>
      <loc>${applicationBase}${url.url}</loc>
      ${url.lastmod !== undefined ? `<lastmod>${url.lastmod}</lastmod>` : ''}
      ${url.changefreq !== undefined ? `<changefreq>${url.changefreq}</changefreq>` : ''}
      ${url.priority !== undefined ? `<priority>${url.priority}</priority>` : ''}
    </url>`;
  }
  const sm = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
    ${urls.map(toUrlTag).join('')}
    </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sm);
  res.end();

  return {
    props: {},
  }
}

export default function Sitemap() { };