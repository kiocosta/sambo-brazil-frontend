export const MenuEnum = {
  SAMBO: 'SAMBO',
  INSTITUCIONAL: 'INSTITUCIONAL'
};
Object.freeze(MenuEnum);

export const MenuItems = [
  {
    label: 'Início',
    url: '#',
  },
  {
    enum: MenuEnum.SAMBO,
    label: 'Sambo',
    children: [
      {
        label: 'História',
        url: '#'
      },
      {
        label: 'Onde treinar',
        url: '#'
      }
    ]
  },
  {
    enum: MenuEnum.INSTITUCIONAL,
    label: 'Institucional',
    children: [
      {
        label: 'A Faserj',
        url: '#'
      },
      {
        label: 'Diretoria',
        url: '#'
      }
    ]
  }
];
Object.freeze(MenuItems);