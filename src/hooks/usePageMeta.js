import { useEffect } from 'react';

/**
 * Sets the document title and meta description per route. The site renders
 * client-side, so each page needs to write its own tags on mount.
 */
export function usePageMeta(title, description) {
  useEffect(() => {
    if (title) document.title = title;

    if (description) {
      let tag = document.querySelector('meta[name="description"]');
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', 'description');
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', description);
    }
  }, [title, description]);
}
