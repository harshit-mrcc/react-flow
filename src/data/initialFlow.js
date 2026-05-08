export const initialNodes = [
  // GROUP 1
  {
    id: "screening-group",

    type: "group",

    position: { x: 50, y: 50 },

    style: {
      width: 800,
      height: 500,
    },

    data: {
      label: "Resume Screening",
    },
  },

  // CHILD NODE
  {
    id: "resume-upload",

    type: "custom",

    parentNode: "screening-group",

    extent: "parent",

    position: { x: 50, y: 100 },

    data: {
      title: "Resume Upload",
    },
  },

  {
    id: "skills-check",

    type: "custom",

    parentNode: "screening-group",

    extent: "parent",

    position: { x: 300, y: 100 },

    data: {
      title: "Skills Match",
    },
  },

  {
    id: "experience-check",

    type: "condition",

    parentNode: "screening-group",

    extent: "parent",

    position: { x: 550, y: 100 },

    data: {},
  },
];

export const initialEdges = [
  {
    id: "e1-2",
    source: "resume-upload",
    sourceHandle: "right",

    target: "skills-check",
    targetHandle: "left",

    type: "smoothstep"
  },

  {
    id: "e2-3",
    source: "skills-check",
    sourceHandle: "right",

    target: "experience-check",
    targetHandle: "left",

    type: "smoothstep"
  },
];