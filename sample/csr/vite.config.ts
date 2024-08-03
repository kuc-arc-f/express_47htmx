import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import buildCommon from './src/lib/buildCommon';
const directoryPath = './src/client';
//
export default defineConfig(async({ mode }) => {
  if (mode === 'client') {
    const entryFiles = await buildCommon.getEntryItems(directoryPath);
    //console.log(entryFiles);
    return {
      plugins: [react()], 
      define: {
        "process.env.NODE_ENV": '"production"',
      },
      build: {
        lib: {
          entry: entryFiles,
          formats: ['es'],
          fileName: '[name]',
        },
        rollupOptions: {
          output: {
            dir: './public/static'
          }
        },
        emptyOutDir: false,
        copyPublicDir: false
      }
    }
  } else {
    return {
      plugins: [react()], 
    }
  }
})
/*
      define: {
        "process.env.NODE_ENV": '"production"',
      },
*/