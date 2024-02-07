export default {
  name: 'experiences',
  title: 'Experiences',
  type: 'document',
  fields: [
    {
      name: 'position',
      title: 'Jabatan',
      type: 'string',
    },
    {
      name: 'company',
      title: 'Perusahaan',
      type: 'string',
    },
    {
      name: 'logo',
      title: 'Logo Perusahaan',
      type: 'image',
    },
    {
      name: 'location',
      title: 'Lokasi',
      type: 'string',
    },
    {
      name: 'location_type',
      title: 'Jenis Lokasi',
      type: 'string',
      options: {
        list: [
          {title: 'Remote', value: 'Remote'},
          {title: 'Onsite', value: 'Onsite'},
          {title: 'Hybrid', value: 'Hybrid'},
        ],
      },
    },
    {
      name: 'type',
      title: 'Jenis Pekerjaan',
      type: 'string',
      options: {
        list: [
          {title: 'Fulltime', value: 'Fulltime'},
          {title: 'Part-time', value: 'Part-time'},
          {title: 'Contract', value: 'Contract'},
          {title: 'Freelance', value: 'Freelance'},
        ],
      },
    },
    {
      name: 'start_date',
      title: 'Tanggal Mulai',
      type: 'date',
    },
    {
      name: 'end_date',
      title: 'Tanggal Selesai (Opsional)',
      type: 'date',
    },
    {
      name: 'industry',
      title: 'Industri Di Bidang',
      type: 'string',
      options: {
        list: [
          {title: 'Tech', value: 'Tech'},
          {title: 'Finance', value: 'Finance'},
          {title: 'OTA', value: 'OTA'},
          {title: 'Retail', value: 'Retail'},
          {title: 'Education', value: 'Education'},
          {title: 'Wellness', value: 'Wellness'},
        ],
      },
    },
    {
      name: 'link',
      title: 'Website Perusahaan (Opsional)',
      type: 'url',
    },
    {
      name: 'description',
      title: 'Deskripsi',
      type: 'text',
      description: 'Deskripsi singkat tentang pekerjaan Anda.',
    },
  ],
}
