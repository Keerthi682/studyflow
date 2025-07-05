import React, { useState } from 'react';
import { marked } from 'marked';

const NoteEditor: React.FC = () => {
  const [markdown, setMarkdown] = useState('');

  return (
    <div className="flex flex-col md:flex-row p-4 gap-4">
      {/* Editor */}
      <textarea
        className="w-full md:w-1/2 h-64 p-2 border rounded shadow"
        placeholder="Write your notes in Markdown..."
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      />

      {/* Preview */}
      <div
        className="w-full md:w-1/2 h-64 p-2 border rounded shadow bg-white overflow-auto prose"
        dangerouslySetInnerHTML={{ __html: marked(markdown) }}
      />
    </div>
  );
};

export default NoteEditor;
