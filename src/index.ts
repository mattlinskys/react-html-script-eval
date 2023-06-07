import { useEffect, type RefObject } from 'react';

export const useHtmlScriptEval = (
  html: string,
  ref: RefObject<HTMLElement>,
) => {
  useEffect(() => {
    const containerEl = ref.current;
    if (containerEl) {
      const scripts = Array.from(containerEl.querySelectorAll('script'));
      for (const script of scripts) {
        const newScript = document.createElement('script');

        if (script.innerHTML) {
          newScript.innerHTML = script.innerHTML;
        }

        for (const key of script.getAttributeNames()) {
          const attr = script.getAttribute(key);
          if (attr) {
            newScript.setAttribute(key, attr);
          }
        }

        if (script.async) {
          newScript.async = true;
        }

        if (script.defer) {
          newScript.defer = true;
        }

        script.after(newScript);
      }

      for (const script of scripts) {
        script.remove();
      }
    }
  }, [html]);
};
