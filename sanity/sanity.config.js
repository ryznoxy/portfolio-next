import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {projectId, dataset} from './env'

export default defineConfig({
  name: 'default',
  title: 'reza',

  projectId: `${projectId}`,
  dataset: `${dataset}`,

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
