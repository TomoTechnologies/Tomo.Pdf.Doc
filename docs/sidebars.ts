const sidebars = {
  docs: [
    {
      type: 'doc',
      id: 'intro', // Document ID to be used as the landing page
      label: 'Introduction', // Sidebar label
    },
    {
      type: 'category',
      label: 'Tutorials',
      items: [        
        'create-basic-pdf',
        'create-custom-layout',
        'create-pdf-extra-pages',
        'create-pdf-custom-font',
        'create-pdf-with-image',
        'create-pdf-with-shapes',       
      ],
    },
    {
      type: 'category',
      label: 'Tomo Elements',
      items: [
        'tomotext',
      ],
    },
  ],
};

module.exports = sidebars;
