import { ForwardRefEditor } from '@/src/components/ui/Editor/ForwardedEditor';
import React from 'react';

const markdown = `
* Item 1
* Item 2
* Item 3
  * nested item

1. Item 1
2. Item 2
`;

export default function WriteBlogPost() {
  return (
    <div>
      <h1>Write Blog Post</h1>
      <React.Suspense fallback={null}>
        <ForwardRefEditor markdown={markdown} />
      </React.Suspense>
    </div>
  );
}