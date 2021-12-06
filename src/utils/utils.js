import { CategoryMap } from '../data/constants'

export const prepareElements = (data) => {
  const nodes = data.nodes.map(({ name, description, id, icon, ...nodeProps }) => {
    const nodeObject = {
      id,
      type: 'node',
      position: { x: nodeProps.left + 24, y: nodeProps.top + 24 },
      data: {
        name,
        description,
        icon,
        nodeCategory: CategoryMap[nodeProps.component],
        handles: nodeProps.config.output_states
          .filter((opState) => opState.selected)
          .map((opState) => ({
            id: `${id}.${opState.id}`,
            label: opState.name,
          })),
      },
    }
    return nodeObject
  })

  const edges = data.connections.map(({ source, target }) => ({
    source: source.split('.')[0],
    target: target.split('.')[0],
    sourceHandle: source,
    targetHandle: target,
    id: `${source}${target}`,
    type: 'step',
  }))

  return [...nodes, ...edges]
}

export const prepareLeftBar = (data) => {
  return data.palettes.map((section) => ({
    name: section.category,
    components: section.components.map(({ name, icon, component }) => ({ name, icon, component })),
  }))
}
