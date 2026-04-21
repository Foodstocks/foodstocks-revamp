import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Judul',
      type: 'string',
      validation: (r) => r.required().max(120),
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Ringkasan',
      description: 'Tampil di kartu blog preview.',
      type: 'text',
      rows: 3,
      validation: (r) => r.max(240),
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'category',
      title: 'Kategori',
      type: 'string',
      options: {
        list: [
          { title: 'Tren', value: 'Tren' },
          { title: 'Guide', value: 'Guide' },
          { title: 'Tech', value: 'Tech' },
          { title: 'Insight', value: 'Insight' },
        ],
      },
    }),
    defineField({
      name: 'readTime',
      title: 'Estimasi baca',
      type: 'string',
      description: 'Contoh: "5 min read"',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Tanggal terbit',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'body',
      title: 'Konten',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }],
    }),
  ],
  orderings: [
    {
      title: 'Terbaru',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],
  preview: {
    select: { title: 'title', subtitle: 'category', media: 'coverImage' },
  },
});
