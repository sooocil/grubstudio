'use client';

import Editor from '@monaco-editor/react';
import { useFileSystemStore } from '@/stores/useFileStore';
import { memo } from 'react';

function getLanguageFromFileName(fileName: string): string {
  const ext = fileName.split('.').pop()?.toLowerCase();
  switch (ext) {
    case 'js':
      return 'javascript';
    case 'ts':
      return 'typescript';
    case 'json':
      return 'json';
    case 'css':
      return 'css';
    case 'html':
      return 'html';
    case 'md':
      return 'markdown';
    case 'py':
      return 'python';
    case 'java':
      return 'java';
    case 'c':
    case 'h':
      return 'c';
    case 'cpp':
    case 'hpp':
      return 'cpp';
    case 'txt':
      return 'plaintext';
    default:
      return 'plaintext';
  }
}

function MonacoEditor() {
  const currentFileId = useFileSystemStore((s) => s.currentFileId);
  const updateFileContent = useFileSystemStore((s) => s.updateFileContent);
  const currentFile = useFileSystemStore((s) => s.getCurrentFile());

  if (!currentFile) {
    return (
      <div className="w-full h-full flex items-center justify-center text-white bg-gray-900">
        <p>Select a file to start editing</p>
      </div>
    );
  }

  const isBinary = /\.(png|jpe?g|gif|mp3|mp4|webm|svg)$/.test(currentFile.name);

  if (isBinary) {
    return (
      <div className="w-full h-full flex items-center justify-center text-white bg-gray-900">
        <p>
          <span className="text-red-400">{currentFile.name}</span> is a binary file. Preview not supported.
        </p>
      </div>
    );
  }

  const upperCaseName = currentFile.name.charAt(0).toUpperCase() + currentFile.name.slice(1);

  return (
    <div className="h-full w-full flex flex-col bg-gray-900 text-white">
      <div className="p-2 border-b border-gray-700 text-sm font-mono bg-gray-800">
        <span className="text-green-400">{upperCaseName}</span>
      </div>
      <Editor
        className="flex-1"
        language={getLanguageFromFileName(currentFile.name)}
        value={currentFile.content}
        onChange={(val) => val !== undefined && updateFileContent(currentFile.id, val)}
        theme="vs-dark"
        options={{
          minimap: { enabled: false },
          automaticLayout: true,
          fontSize: 14,
          scrollBeyondLastLine: false,
        }}
      />
    </div>
  );
}

export default memo(MonacoEditor);