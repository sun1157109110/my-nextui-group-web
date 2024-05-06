import { faker } from '@faker-js/faker';
export enum Role {
  PROFESSOR = '教授',
  PHD = '博士',
  MASTER = '硕士',
  GRADUATE = '毕业生'
}
export type SiteConfig = typeof siteConfig
const siteConfig = {
  name: "Niu Group",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  navItems: [
    {
      label: "首页",
      href: "/",
    },
    {
      label: "组内成员",
      href: "/members",
    },
    {
      label: "科研方向",
      href: "/research",
    },
    {
      label: "发表论文",
      href: "/publish/list/1",
    },
    {
      label: "团建活动",
      href: "/activity/list/1",
    }
  ],
  researchList: [
    {
      label: '研究方向一:二阶非线性光学高分子(电场极化调控分子聚集态结构)',
      href: '',
      imgSrc: '/researchList/researchItem1.jpeg'
    },
    {
      label: '研究方向二：力致发光(力刺激下的分子聚集态结构变化)',
      href: '/researchList/researchItem2',
      imgSrc: '/researchList/researchItem2.jpeg'
    },
    {
      label: '研究方向三：有机、高分子室温磷光(磷光信号对分子聚集态精细变化的灵敏响应)',
      href: '/researchList/researchItem3',
      imgSrc: '/researchList/researchItem3.jpeg'
    },
    {
      label: '研究方向四：光致形变(分子聚集态的光调控)',
      href: '/researchList/researchItem4',
      imgSrc: '/researchList/researchItem4.jpeg'
    },
    {
      label: '研究方向五：生物成像(聚集态结构优化及其应用探索)',
      href: '/researchList/researchItem5',
      imgSrc: '/researchList/researchItem5.jpeg'
    }
  ],
  news: [
    {
      label: '学术报告：XXX教授（华东理工大学）学术报告（2024年4月22日）',
      href: '',
      time: '2024-04-21',
      icon: 'lecture'
    },
    {
      label: '学术报告：XXX教授（XXX理工大学）学术报告（2024年4月29日）',
      href: '',
      time: '2024-04-29',
      icon: 'lecture'
    },
    {
      label: '热烈祝贺XXX的文章“Hole-transporting Materials with Rational Combination of Pyridine and Dibenzo[a,c]phenazine as Electron Acceptor for Dopant-free Perovskite Solar Cells”被Chinese Journal of Chemistry接收！',
      href: '',
      time: '2024-03-27',
      icon: 'paper'
    },
    {
      label: '欢迎报名‖《中国科学:化学》- XX大学“化学的创新与发展论坛',
      href: '',
      time: '2024-03-11',
      icon: 'news'
    },
    {
      label: '热烈祝贺XXX文章“Organic Persistent RTP Crystals: From Brittle to Flexible by Tunable Self-Partitioned Molecular Packing”被期刊Advanced Materials接收',
      href: '',
      time: '2024-2-11',
      icon: 'paper'
    },
    {
      label: '热烈祝贺XXX的文章“Hole-transporting Materials with Rational Combination of Pyridine and Dibenzo[a,c]phenazine as Electron Acceptor for Dopant-free Perovskite Solar Cells”被Chinese Journal of Chemistry接收！',
      href: '',
      time: '2024-03-27',
      icon: 'paper'
    },
    {
      label: '学术报告：XXX教授（华东理工大学）学术报告（2024年4月22日）',
      href: '',
      time: '2024-04-21',
      icon: 'lecture'
    },
    {
      label: '热烈祝贺XXX的文章“Hole-transporting Materials with Rational Combination of Pyridine and Dibenzo[a,c]phenazine as Electron Acceptor for Dopant-free Perovskite Solar Cells”被Chinese Journal of Chemistry接收！',
      href: '',
      time: '2024-03-27',
      icon: 'paper'
    },
    {
      label: '学术报告：XXX教授（华东理工大学）学术报告（2024年4月22日）',
      href: '',
      time: '2024-04-21',
      icon: 'lecture'
    },
  ],
  members: [{
    name: faker.person.fullName(),
    role: Role.PROFESSOR,
    href: `/member/${faker.person.fullName()}`,
    avatar: faker.image.avatar(),
    label: ''
  }],
  publish: [{
    img: faker.image.urlLoremFlickr({width:320,height:240,category:'nature'}),
    title: 'Xingjie Luo,+ Zhiyu Jiang,+ Siqun Yang, Xiaoyu Ren, Tianli Wang* "Organocatalyzed Asymmetric Conjugate Addition of Alcohols to β-Fluoroalkyl Vinylsulfones by Bifunctional Phosphonium Salt Catalyst" Chem. Eur. J. 2024, e202401325.',
    date: '2024-2-15',
  }, {
    img: faker.image.urlLoremFlickr({width:320,height:240,category:'nature'}),
    title: 'Access to Enantioenriched Allylic Alcohols via Peptide-Mimic Phosphonium Salt-Catalyzed Asymmetric Aerobic Hydroxylation',
    date: '2024-2-15',
  },
  {
    img: faker.image.urlLoremFlickr({width:320,height:240,category:'nature'}),
    title: 'Asymmetric Nucleophilic Additions Promoted by Quaternary Phosphonium Ion-Pair Catalysts',
    date: '2024-2-15',
  }, {
    img: faker.image.urlLoremFlickr({width:320,height:240,category:'nature'}),
    title: 'Asymmetric Nucleophilic Additions Promoted by Quaternary Phosphonium Ion-Pair Catalysts',
    date: '2024-2-15',
  }, {
    img: faker.image.urlLoremFlickr({width:320,height:240,category:'nature'}),
    title: 'Novel Stereo-Induction Pattern in Pudovik Addition/Phospha-Brook Rearrangement towards Chiral Trisubstituted Allenes',
    date: '2024-4-15',
  }, {
    img: faker.image.urlLoremFlickr({width:320,height:240,category:'nature'}),
    title: 'Organocatalytic Dynamic Kinetic ResolutionEnabled Asymmetric Synthesis of Phosphorus-Containing Chiral Helicenes',
    date: '2023-12-15',
  }, {
    img: faker.image.urlLoremFlickr({width:320,height:240,category:'nature'}),
    title: 'Atherton-Todd Reaction-Guided Enantioselective Synthesis of Axially Chiral Olefins via Bifunctional Phosphonium Salt-Regulating Ketone-Enol Tautomerism',
    date: '2024-2-15',
  }, {
    img: faker.image.urlLoremFlickr({width:320,height:240,category:'nature'}),
    title: 'Enantioselective Organocatalytic Synthesis of Axially Chiral Aldehyde-containing Styrenes via SNAr Reaction-Guided Dynamic Kinetic Resolution',
    date: '2024-2-15',
  },{
    img: faker.image.urlLoremFlickr({width:320,height:240,category:'nature'}),
    title: 'Enantioselective Organocatalytic Synthesis of Axially Chiral Aldehyde-containing Styrenes via SNAr Reaction-Guided Dynamic Kinetic Resolution',
    date: '2024-2-15',
  },{
    img: faker.image.urlLoremFlickr({width:320,height:240,category:'nature'}),
    title: 'Enantioselective Organocatalytic Synthesis of Axially Chiral Aldehyde-containing Styrenes via SNAr Reaction-Guided Dynamic Kinetic Resolution',
    date: '2024-2-15',
  },{
    img: faker.image.urlLoremFlickr({width:320,height:240,category:'nature'}),
    title: 'Enantioselective Organocatalytic Synthesis of Axially Chiral Aldehyde-containing Styrenes via SNAr Reaction-Guided Dynamic Kinetic Resolution',
    date: '2024-2-15',
  }],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev"
  },
}

const fakerMembers = (role: Role, num: number) => {
  return Array(num).fill(0).map(() => ({
    name: faker.person.fullName(),
    role: role,
    href: `/member/${faker.person.fullName()}`,
    avatar: faker.image.avatar(),
    label: ''
  }));
}
siteConfig.members.push(...fakerMembers(Role.PHD, 2), ...fakerMembers(Role.MASTER, 6))
export { siteConfig }