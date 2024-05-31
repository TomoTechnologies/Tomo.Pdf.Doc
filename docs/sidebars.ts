const sidebars = {
  docs: [
    {
      type: 'doc',
      id: 'intro', // Document ID to be used as the landing page
      label: 'Introduction', // Sidebar label
    },
    {
      type: 'category',
      label: 'Documentation',
      items: [
        'getting-started', // Add your documents here
        'another-doc', // Replace with your actual doc IDs
      ],
    },
  ],
};

module.exports = sidebars;
