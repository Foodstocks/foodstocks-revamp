import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    defineField({ name: 'partnerName', title: 'Nama Mitra', type: 'string', validation: (r) => r.required() }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: { source: 'partnerName', maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline/Headline',
      type: 'string',
      description: 'Contoh: "+340% order volume dalam 6 bulan"',
    }),
    defineField({
      name: 'location',
      type: 'string',
      description: 'Contoh: "Surabaya"',
    }),
    defineField({
      name: 'industry',
      type: 'string',
      description: 'Contoh: "Retail mini-market"',
    }),
    defineField({
      name: 'model',
      title: 'Model bisnis',
      type: 'string',
      options: { list: ['Wholesale', 'Consignment', 'Dropship', 'Consignment + Wholesale', 'Mixed'] },
    }),
    defineField({
      name: 'coverImage',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'metrics',
      title: 'Metrik headline (4 angka)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', type: 'string' },
            { name: 'value', type: 'string' },
          ],
        },
      ],
      validation: (r) => r.max(6),
    }),
    defineField({
      name: 'challenge',
      title: 'Tantangan (body)',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'solution',
      title: 'Solusi (body)',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'result',
      title: 'Hasil (body)',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'quote',
      title: 'Testimoni',
      type: 'object',
      fields: [
        { name: 'text', type: 'text', rows: 3 },
        { name: 'author', type: 'string' },
        { name: 'role', type: 'string' },
      ],
    }),
    defineField({ name: 'publishedAt', type: 'datetime', initialValue: () => new Date().toISOString() }),
  ],
  preview: {
    select: { title: 'partnerName', subtitle: 'tagline', media: 'coverImage' },
  },
});
