const baseUrl = 'https://arttools.com';

const pages = [
  '/',
  '/catalogo',
  '/produtos/precision-ceramic-white',
  '/produtos/carbon-fiber-speedliner',
  '/produtos/titanium-stealth-minimalist',
  '/produtos/minimalist-matte-slate',
  '/produtos/lunar-silver-monolith',
  '/produtos/obsidian-matte-black',
  '/produtos/brass-heritage-signature',
  '/produtos/bronze-artisan-special',
  '/produtos/midnight-gold-executive'
];

export async function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map(
      (path) => `
  <url>
    <loc>${baseUrl}${path}</loc>
  </url>`
    )
    .join('')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400'
    }
  });
}
