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
        'create-pdf-with-shapes',       
      ],
    },
  ],
};

module.exports = sidebars;
