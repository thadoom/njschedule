window.SCHEDULE_CONFIG={
  storageKey:'schedule-maker-state',
  days:[
    {key:'mon',short:'LUN',label:'Lun'},
    {key:'tue',short:'MAR',label:'Mar'},
    {key:'wed',short:'MER',label:'Mer'},
    {key:'thu',short:'GIO',label:'Gio'},
    {key:'fri',short:'VEN',label:'Ven'},
    {key:'sat',short:'SAB',label:'Sab'},
    {key:'sun',short:'DOM',label:'Dom'}
  ],
  defaults:{
    mon:{enabled:true,activity:'League of Legends',time:'20:30'},
    tue:{enabled:true,activity:'Valorant',time:'21:00'},
    wed:{enabled:true,activity:'Just Chatting',time:'20:30'},
    thu:{enabled:false,activity:'Just Chatting',time:'21:00'},
    fri:{enabled:true,activity:'Stardew Valley',time:'21:30'},
    sat:{enabled:true,activity:'Ori & The Blind Forest',time:'18:00'},
    sun:{enabled:true,activity:'League of Legends',time:'20:30'}
  },
  themes:{
    lilac:{bgA:'#f0e5ff',bgB:'#d9c0f4',bgC:'#a985d2',ink:'#2e1b3d',soft:'#78608a',white:'#fffafe',panel:'rgba(255,255,255,.22)',strong:'rgba(255,255,255,.52)',glass:'rgba(255,255,255,.31)',chip:'#9365c4',chip2:'#f8f1ff',accent:'#6f459b',line:'rgba(255,255,255,.68)',lineSoft:'rgba(255,255,255,.34)',shadow:'rgba(83,48,113,.18)',decoA:'#f7cfe8',decoB:'#d7b4ff',dark:false},
    rose:{bgA:'#ffe8f2',bgB:'#edc7e6',bgC:'#b88dca',ink:'#47263f',soft:'#865d78',white:'#fffafc',panel:'rgba(255,255,255,.24)',strong:'rgba(255,255,255,.52)',glass:'rgba(255,255,255,.31)',chip:'#c77ba7',chip2:'#fff4fa',accent:'#965073',line:'rgba(255,255,255,.64)',lineSoft:'rgba(255,255,255,.31)',shadow:'rgba(104,56,80,.17)',decoA:'#ffd0e3',decoB:'#e8b7dc',dark:false},
    mint:{bgA:'#e5fbf5',bgB:'#c2e7df',bgC:'#8cbdb5',ink:'#203b38',soft:'#587d77',white:'#fbfffd',panel:'rgba(255,255,255,.24)',strong:'rgba(255,255,255,.52)',glass:'rgba(255,255,255,.31)',chip:'#69a59d',chip2:'#effbf7',accent:'#3c746e',line:'rgba(255,255,255,.62)',lineSoft:'rgba(255,255,255,.30)',shadow:'rgba(35,73,68,.16)',decoA:'#d8f0ea',decoB:'#a9d8d0',dark:false},
    midnight:{bgA:'#263247',bgB:'#151c29',bgC:'#0b0f17',ink:'#f3f7ff',soft:'#9aa8bd',white:'#ffffff',panel:'rgba(255,255,255,.06)',strong:'rgba(255,255,255,.12)',glass:'rgba(255,255,255,.10)',chip:'#3d5f8f',chip2:'#dfe9f8',accent:'#6fa7ff',line:'rgba(255,255,255,.20)',lineSoft:'rgba(255,255,255,.10)',shadow:'rgba(0,0,0,.38)',decoA:'#4d6f9f',decoB:'#7ba6e8',dark:true},
    ocean:{bgA:'#1c5065',bgB:'#103343',bgC:'#081b24',ink:'#eefcff',soft:'#9bc2cf',white:'#ffffff',panel:'rgba(255,255,255,.07)',strong:'rgba(255,255,255,.14)',glass:'rgba(255,255,255,.11)',chip:'#197c99',chip2:'#dff7fb',accent:'#54d0ef',line:'rgba(255,255,255,.22)',lineSoft:'rgba(255,255,255,.11)',shadow:'rgba(0,0,0,.34)',decoA:'#1d91b3',decoB:'#63d6f1',dark:true},
    carbon:{bgA:'#35312f',bgB:'#1e1d1c',bgC:'#101010',ink:'#fff7f1',soft:'#bea99d',white:'#ffffff',panel:'rgba(255,255,255,.06)',strong:'rgba(255,255,255,.12)',glass:'rgba(255,255,255,.10)',chip:'#8d4b2f',chip2:'#f3e2d9',accent:'#ff8a52',line:'rgba(255,255,255,.18)',lineSoft:'rgba(255,255,255,.09)',shadow:'rgba(0,0,0,.40)',decoA:'#a84f2b',decoB:'#ff9a62',dark:true}
  },
  fonts:{
    dynapuff:{display:'"DynaPuff"',weight:650},
    bricolage:{display:'"Bricolage Grotesque"',weight:780},
    syne:{display:'"Syne"',weight:780}
  }
};
