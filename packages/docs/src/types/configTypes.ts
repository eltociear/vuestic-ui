// @ts-ignore
import {
  TranslationString,
  ManualApiOptions,
  TranslationStringList,
} from '../components/DocsApi/ManualApiOptions'
import { TableData, TableColumn } from '../components/DocsTable/DocsTableTypes'
import { DefineComponent } from 'vue'
import { VueConstructor } from 'vue-class-component'

export type CodeStringOrObject = string | Record<string, string>
export type CodeLanguage = 'javascript' | 'scss' | 'bash' | 'html' | 'plain'
// example: for `/examples/va-affix/Bottom.vue` use `va-affix/Bottom.vue` here.

export type Dependencies = {
  [key: string]: string;
}
export type CodesandboxConfig = {
  dependencies?: Dependencies,
  devDependencies?: Dependencies,
  requireIcons?: boolean,
}

export type PathToExample = string
export type ExampleOptions = {
  hideCode?: boolean,
  hideTemplate?: boolean,
  forceShowCode?: boolean
  codesandboxConfig?: CodesandboxConfig
}

export type LinkOptions = {
  preText?: string,
  afterText?: string,
}

// NOTE If you add other block types - please document them properly in http://vuestic-ui.dev/en/contribution/documentation-page
export enum BlockType {
  TITLE = 'TITLE',
  SUBTITLE = 'SUBTITLE',
  PARAGRAPH = 'PARAGRAPH',
  HEADLINE = 'HEADLINE',
  EXAMPLE = 'EXAMPLE',
  COMPONENT = 'COMPONENT',
  API = 'API',
  CODE = 'CODE',
  TABLE = 'TABLE',
  LINK = 'LINK',
  ALERT = 'ALERT',
  LIST = 'LIST',
  FILE = 'FILE',
  FILE_STRUCTURE = 'FILE_STRUCTURE',
  MARKDOWN = 'MARKDOWN',
  COLLAPSE = 'COLLAPSE',
}

export type TextBlockType =
  | BlockType.TITLE
  | BlockType.SUBTITLE
  | BlockType.PARAGRAPH
  | BlockType.HEADLINE

export type TextBlock = {
  type: TextBlockType,
  translationString: TranslationString,
}

export type ListBlock = {
  type: BlockType.LIST,
  translationStringList: TranslationStringList,
}

export type ExampleBLock = {
  type: BlockType.EXAMPLE,
  path: string, // path to directory
  component: string, // component name
  exampleOptions?: ExampleOptions,
}

export type ApiDocsFileStructureItem = { name: string, description?: string, icon?: string, children?: ApiDocsFileStructureItem[] }

export type ApiDocsBlock =
  | TextBlock
  | ListBlock
  | ExampleBLock
  | {
    type: BlockType.COMPONENT,
    path: string, // path to directory
    component: string, // component name
    bind?: Record<string, any>,
  }
  | {
    type: BlockType.CODE,
    code: CodeStringOrObject,
    language: CodeLanguage,
  }
  | {
      type: BlockType.API,
      componentOptions: DefineComponent | VueConstructor,
      apiOptions: ManualApiOptions,
    }
  | {
      type: BlockType.TABLE,
      columns: TableColumn[],
      tableData: TableData,
    }
  | {
      type: BlockType.LINK,
      text: string,
      href: string,
      options?: LinkOptions,
    }
  | {
      type: BlockType.ALERT,
      translationString: TranslationString,
      color: string,
    }
  | {
      type: BlockType.FILE,
      file: Promise<Record<string, any>>
    }
  | {
      type: BlockType.FILE_STRUCTURE,
      files: ApiDocsFileStructureItem[]
    }
  | {
    type: BlockType.MARKDOWN,
    content: string,
  }
  | {
    type: BlockType.COLLAPSE,
    header: string,
    blocks: ApiDocsBlock[]
  }

export type GetApiBlock<Type = BlockType, P extends ApiDocsBlock = ApiDocsBlock> = P extends { type: Type } ? P : never

export function isTextBlock (block: ApiDocsBlock): block is TextBlock {
  return block.type === BlockType.TITLE
}

export function isExampleBlock (block: ApiDocsBlock): block is ExampleBLock {
  return block.type === BlockType.EXAMPLE
}
