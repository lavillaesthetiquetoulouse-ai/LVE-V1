import { getBlogPosts } from '@/lib/supabase';
import { NextResponse } from 'next/server';

export async function GET() {
  const posts = await getBlogPosts();
  const siteUrl = 'https://lavillaesthetique-toulouse.com';

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" 
     xmlns:content="http://purl.org/rss/1.0/modules/content/"
     xmlns:dc="http://purl.org/dc/elements/1.1/"
     xmlns:media="http://search.yahoo.com/mrss/"
     xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Blog Médecine Esthétique - Dr Nadine Baron</title>
    <link>${siteUrl}/blog</link>
    <description>Articles experts en médecine esthétique : épilation laser, injections anti-âge, soins du visage. Conseils scientifiques du Dr Nadine Baron à Toulouse.</description>
    <language>fr-FR</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/blog/feed.xml" rel="self" type="application/rss+xml"/>
    <managingEditor>dr.baron.nadine@gmail.com (Dr Nadine Baron)</managingEditor>
    <webMaster>dr.baron.nadine@gmail.com (Dr Nadine Baron)</webMaster>
    <category>Médecine Esthétique</category>
    <category>Santé</category>
    <category>Dermatologie</category>
    <copyright>© 2024 La Villa Esthétique. Tous droits réservés.</copyright>
    <image>
      <url>${siteUrl}/logo.png</url>
      <title>Villa Esthétique Blog</title>
      <link>${siteUrl}/blog</link>
    </image>
    ${posts.map(post => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${siteUrl}/blog/${post.slug}</link>
      <description><![CDATA[${post.excerpt}]]></description>
      <content:encoded><![CDATA[${post.content || post.excerpt}]]></content:encoded>
      <guid isPermaLink="true">${siteUrl}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.published_at).toUTCString()}</pubDate>
      <dc:creator><![CDATA[Dr Nadine Baron]]></dc:creator>
      <category><![CDATA[${post.category}]]></category>
      ${post.image_url ? `<media:content url="${post.image_url}" medium="image" />` : ''}
      <source url="${siteUrl}/blog/feed.xml">Blog Médecine Esthétique</source>
    </item>`).join('')}
  </channel>
</rss>`;

  return new NextResponse(rss, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, must-revalidate',
    },
  });
}