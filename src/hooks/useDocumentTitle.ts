import { useEffect } from 'react';

export const useDocumentTitle = (title: string, description?: string) => {
  useEffect(() => {
    const originalTitle = document.title;
    document.title = title;

    if (description) {
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', description);
      }
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });

    return () => {
      document.title = originalTitle;
    };
  }, [title, description]);
};
