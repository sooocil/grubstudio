import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type FileData = {
  id: string;
  name: string;
  content: string;
  parentId?: string | null;
};

export type TreeDataItem = {
  id: string;
  name: string;
  icon?: any;
  openIcon?: any;
  children?: TreeDataItem[];
  actions?: React.ReactNode;
  onClick?: () => void;
  draggable?: boolean;
  droppable?: boolean;
  disabled?: boolean;
};

type FileSystemState = {
  files: FileData[];
  currentFileId: string | null;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  setCurrentFile: (id: string) => void;
  updateFileContent: (id: string, content: string) => void;
  addFile: (parentId: string | null) => void;
  deleteFile: (id: string) => void;
  getCurrentFile: () => FileData | null;
};

const dummyFiles: FileData[] = [
  { id: 'folder-assets', name: 'Assets', content: '', parentId: null },
  { id: '1', name: 'background.png', content: '// image binary', parentId: 'folder-assets' },
  { id: '2', name: 'audio.mp3', content: '// audio binary', parentId: 'folder-assets' },
  { id: 'folder-theme', name: 'Theme', content: '', parentId: null },
  { id: '3', name: 'theme.js', content: '// theme.js content', parentId: 'folder-theme' },
    { id: '3', name: 'theme.js', content: '// theme.js content', parentId: null },

];

export const useFileSystemStore = create<FileSystemState>()(
  persist(
    (set, get) => ({
      files: dummyFiles, // Initialize with dummy files
      currentFileId: null,
      isLoading: false,
      setIsLoading: (loading) => set({ isLoading: loading }),
      setCurrentFile: (id) => set({ currentFileId: id }),
      updateFileContent: (id, content) =>
        set((state) => ({
          files: state.files.map((f) => (f.id === id ? { ...f, content } : f)),
        })),
      addFile: (parentId) => {
        const newId = crypto.randomUUID();
        const newFile: FileData = {
          id: newId,
          name: `newfile-${newId.slice(0, 1)}.js`,
          content: '// new file',
          parentId,
        };
        set((state) => ({ files: [...state.files, newFile] }));
      },
      deleteFile: (id) =>
        set((state) => ({
          files: state.files.filter((f) => f.id !== id),
          currentFileId: state.currentFileId === id ? null : state.currentFileId,
        })),
      getCurrentFile: () => {
        const { currentFileId, files } = get();
        return files.find((f) => f.id === currentFileId) ?? null;
      },
    }),
    { name: 'grubstudio-files' }
  )
);
