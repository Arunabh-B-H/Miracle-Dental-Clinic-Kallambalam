import { useEffect } from 'react';

/**
 * useSEO — Dynamically sets document.title and meta description.
 * @param {string} title - Page title
 * @param {string} description - Meta description
 */
const useSEO = (title, description) => {
  useEffect(() => {
    if (title) {
      document.title = title;
    }
    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', description);
    }
  }, [title, description]);
};

export default useSEO;
