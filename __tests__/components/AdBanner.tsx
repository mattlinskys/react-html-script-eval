import React, { FC, useRef } from 'react';
import { useHtmlScriptEval } from '../../src/index';

interface AdBannerProps {
  html: string;
}

const AdBanner: FC<AdBannerProps> = ({ html }) => {
  const ref = useRef<HTMLDivElement>(null);

  useHtmlScriptEval(html, ref);

  return <div ref={ref} dangerouslySetInnerHTML={{ __html: html }} />;
};

export default AdBanner;
