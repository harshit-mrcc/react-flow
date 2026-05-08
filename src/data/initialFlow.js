export const initialNodes = [
  // GROUP 1
  {
    id: "screening-group",

    type: "group",

    position: { x: 50, y: 50 },

    style: {
      width: 1200,
      height: 700,
    },

    data: {
      label: "Resume Screening",
    },
  },

  // RESUME NODE
  {
    id: "resume-upload",

    type: "custom",

    parentNode: "screening-group",

    extent: "parent",

    expandParent: true,

    position: { x: 80, y: 180 },

    data: {
      title: "Resume Upload",
    },
  },

  // CONDITION NODE
  {
    id: "experience-check",

    type: "condition",

    parentNode: "screening-group",

    extent: "parent",

    expandParent: true,

    position: { x: 450, y: 180 },

    data: {
      title: "Experience Check",
    },
  },

  // YES NODE
  {
    id: "eligible-node",

    type: "custom",

    parentNode: "screening-group",

    extent: "parent",

    expandParent: true,

    position: { x: 850, y: 80 },

    data: {
      title: "Eligible For Interview",
    },
  },

  // NO NODE
  {
    id: "reject-node",

    type: "custom",

    parentNode: "screening-group",

    extent: "parent",

    expandParent: true,

    position: { x: 850, y: 380 },

    data: {
      title: "Need More Experience",
    },
  },
];

export const initialEdges = [
  // RESUME → EXPERIENCE
  {
    id: "e1-2",

    source: "resume-upload",
    sourceHandle: "right",

    target: "experience-check",
    targetHandle: "left",

    type: "smoothstep",

    animated: true,
  },

  // YES BRANCH
  {
    id: "yes-edge",

    source: "experience-check",
    sourceHandle: "yes",

    target: "eligible-node",
    targetHandle: "left",

    label: "YES",

    type: "smoothstep",

    animated: true,
  },

  // NO BRANCH
  {
    id: "no-edge",

    source: "experience-check",
    sourceHandle: "no",

    target: "reject-node",
    targetHandle: "left",

    label: "NO",

    type: "smoothstep",

    animated: true,
  },
];