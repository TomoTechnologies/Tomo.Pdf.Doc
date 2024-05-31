const sidebars = {
  docs: [
    {
      type: 'doc',
      id: 'intro', // Document ID to be used as the landing page
      label: 'Introduction', // Sidebar label
    },
    {
      type: 'category',
      label: 'Doc and Examples',
      items: [        
        'create-basic-pdf',
        'create-custom-layout',       
      ],
    },
  ],
};

module.exports = sidebars;
