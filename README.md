# react-html-script-eval

React hook to execute or load scripts inside element with html provided by dangerouslySetInnerHTML. It'll mount scripts within the component provided by react ref and execute scripts with correct **`document.currentScript`** property.

## Installation

```bash
$  npm i react-html-script-eval
```

## Usage

```js
import { useHtmlScriptEval } from "react-html-script-eval";

useHtmlScriptEval(
  html: string,
  ref: RefObject<HTMLElement>
) => void;
```

## Example

```js
import React, { FC, useRef } from 'react';
import { useHtmlScriptEval } from 'react-html-script-eval';

interface AdBannerProps {
  html: string;
}

const AdBanner: FC<AdBannerProps> = ({ html }) => {
  const ref = useRef < HTMLDivElement > null;
  useHtmlScriptEval(html, ref);

  return <div ref={ref} dangerouslySetInnerHTML={{ __html: html }} />;
};

export default AdBanner;
```

## Test

```bash
$  npm  run  test
```
