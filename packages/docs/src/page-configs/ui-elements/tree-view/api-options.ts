import { defineManualApi } from '@/components/DocsApi/ManualApiOptions'

export const VaTreeViewOptions = defineManualApi({
  props: {
    nodes: { types: '(TreeNode | object)[]' },
    selectable: { types: 'boolean' },
    selectionType: { types: "'leaf' | 'independent'" },
    valueBy: { types: 'string | function' },
    textBy: { types: 'string | function' },
    trackBy: { types: 'string | function' },
    iconBy: { types: 'string | function' },
    disabledBy: { types: 'string | function' },
    expandedBy: { types: 'string | function' },
    expandAll: { types: 'boolean' },
    filter: { types: 'string' },
    filterMethod: { types: 'function' },
    checked: { types: '(string | number | TreeNode | object)[]' },
    color: { types: 'string' },
  },
  slots: {
    'not-found': { },
    icon: { },
    content: { },
    checkbox: { },
    'icon-toggle': { },
  },
})
