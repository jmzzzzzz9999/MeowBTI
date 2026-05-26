const families = {
  affinity: {
    name: "亲和系",
    label: "Soft Socials",
    color: "#e88967",
    soft: "#fff0e7",
    image: "橘白猫 / 金渐层",
    desc: "亲人、表达、撒娇、人猫关系策略。它们擅长把人类变成稳定服务系统，也擅长把气氛变软。",
  },
  stealth: {
    name: "潜行系",
    label: "Quiet Watchers",
    color: "#63558f",
    soft: "#eeeaf7",
    image: "黑猫",
    desc: "观察、敏感、慢热、低调、情绪雷达。它们不一定出现，但大多已经知道发生了什么。",
  },
  explorer: {
    name: "探索系",
    label: "Tiny Hunters",
    color: "#3b8799",
    soft: "#e6f5f7",
    image: "美短银虎斑",
    desc: "好奇、运动、捕猎、环境研究、随机行动。家不是家，是一个可交互地图。",
  },
  sovereign: {
    name: "主权系",
    label: "Home Rulers",
    color: "#39464f",
    soft: "#eceff1",
    image: "黑白猫",
    desc: "领地、边界、资源、门禁、家庭秩序。它们不是住在家里，它们是家里的制度本身。",
  },
  cozy: {
    name: "安定系",
    label: "Cozy Hermits",
    color: "#7389a0",
    soft: "#eef3f7",
    image: "长毛蓝灰猫",
    desc: "低能量、独处、稳定、舒适、慢生活。它们把舒服这件事执行得非常专业。",
  },
};

const MEOWBTI_SHARE_URL = "https://meowbti-jmz.netlify.app/";

const types = [
  { id: "Diplomeow", no: "01", name: "贴贴外交官", family: "affinity", img: "PNG/V2/01_Diplomeow.png", desc: "家里的柔软外交部。擅长用蹭腿、慢眨眼、陪睡和主动靠近来修复人类情绪。" },
  { id: "CtrlHuman", no: "02", name: "人类训练师", family: "affinity", img: "PNG/V2/02_CtrlHuman.png", desc: "表面上是你在养猫，实际上是它在调教人类。叫一声、盯一眼，人类就会行动。" },
  { id: "ATMiao", no: "03", name: "罐罐提款机", family: "affinity", img: "PNG/V2/03_ATMiao.png", desc: "爱你是真的，爱罐罐也是真的。饭点前的深情，通常含有明确需求。" },
  { id: "LurkMode", no: "04", name: "暗中观察员", family: "stealth", img: "PNG/V2/04_LurkMode.png", desc: "新东西先看，新人先审，新声音先备案。它在场，但不一定公开在场。" },
  { id: "AeroDrama", no: "05", name: "飞机耳艺术家", family: "stealth", img: "PNG/V2/05_AeroDrama.png", desc: "耳朵、尾巴、眼神全都会说话。它的身体语言像高分辨率弹幕。" },
  { id: "Unboxer", no: "06", name: "开箱工程师", family: "explorer", img: "PNG/V2/06_Unboxer.png", desc: "盒子、袋子、抽屉、柜门，都是科研现场。快递属于你，快递盒属于它。" },
  { id: "3AMRave", no: "07", name: "午夜蹦迪王", family: "explorer", img: "PNG/V2/07_3AMRave.png", desc: "白天省电，凌晨自动升级系统。全屋跑酷是它的夜间例行维护。" },
  { id: "HuntOS", no: "08", name: "猎物模拟器", family: "explorer", img: "PNG/V2/08_HuntOS.png", desc: "捕猎系统常驻后台。小动静、纸团、脚踝都可能触发任务模式。" },
  { id: "BossMeow", no: "09", name: "家庭董事长", family: "sovereign", img: "PNG/V2/09_BossMeow.png", desc: "家里所有路线、座位、窗台和沙发产权，都归它最终解释。" },
  { id: "GuardPaw", no: "10", name: "社交保安", family: "sovereign", img: "PNG/V2/10_GuardPaw.png", desc: "负责巡逻门口、监督动线、检查其他猫和人类是否越界。" },
  { id: "HugWall", no: "11", name: "亲密防火墙", family: "sovereign", img: "PNG/V2/11_HugWall.png", desc: "靠近可以，授权另算。信任需要边界，摸摸也需要权限。" },
  { id: "Pet404", no: "12", name: "三秒过载体", family: "stealth", img: "PNG/V2/12_Pet404.png", desc: "摸摸服务三秒后可能无法响应。不是翻脸，是触摸缓存爆满。" },
  { id: "SeenU", no: "13", name: "暗恋室友", family: "stealth", img: "PNG/V2/13_SeenU.png", desc: "已读你，在乎你，但表面还要装作只是普通合租。" },
  { id: "MeowNews", no: "14", name: "委屈播报员", family: "affinity", img: "PNG/V2/14_MeowNews.png", desc: "饭晚了要说，门关了要说，被忽略了也要说。家庭新闻发布会常驻嘉宾。" },
  { id: "DoorLord", no: "15", name: "门禁管理员", family: "sovereign", img: "PNG/V2/15_DoorLord.png", desc: "门关着要开，门开了要看，看完不一定出去，但你不能关。" },
  { id: "ZenNap", no: "16", name: "睡神哲学家", family: "cozy", img: "PNG/V2/16_ZenNap.png", desc: "睡眠不是偷懒，是猫生哲学。纷争会影响睡眠质量。" },
  { id: "WindowSage", no: "17", name: "窗边冥想者", family: "cozy", img: "PNG/V2/17_WindowSage.png", desc: "身体很安静，精神世界很辽阔。窗边就是它的世界频道。" },
  { id: "SoloSoul", no: "18", name: "独居主义者", family: "cozy", img: "PNG/V2/18_SoloSoul.png", desc: "可以爱人类，但未必喜欢其他猫。私人空间需要被认真尊重。" },
  { id: "MineMine", no: "19", name: "小霸王", family: "sovereign", img: "PNG/V2/19_MineMine.png", desc: "这个窝是我的，这条路是我的，这个人类也先算我的。" },
  { id: "IdleEye", no: "20", name: "省电观察家", family: "cozy", img: "PNG/V2/20_IdleEye.png", desc: "身体待机，眼睛在线。多数事情不值得起身，但值得看一眼。" },
  { id: "FollowUp", no: "21", name: "跟班小秘书", family: "affinity", img: "PNG/V2/21_FollowUp.png", desc: "你走到哪里它就跟到哪里。你的行程需要猫方备案。" },
  { id: "MoodScan", no: "22", name: "气氛雷达猫", family: "stealth", img: "PNG/V2/22_MoodScan.png", desc: "谁心情变了、声音不对、气氛变紧，它都能第一时间捕捉。" },
  { id: "Spawn?", no: "23", name: "随机刷新猫", family: "explorer", img: "PNG/V2/23_Spawn.png", desc: "上一秒还在窗边，下一秒刷新到柜顶。刷新点对人类不可见。" },
  { id: "CabHack", no: "24", name: "柜门黑客", family: "explorer", img: "PNG/V2/24_CabHack.png", desc: "柜门、抽屉、门缝，都是等待破解的隐藏地图。" },
  { id: "BlanketVIP", no: "25", name: "被窝合法居民", family: "cozy", img: "PNG/V2/25_BlanketVIP.png", desc: "它不是钻进被窝，它是回到自己的合法领地。" },
];

const felineFiveLabels = {
  neuroticism: "神经质",
  extraversion: "外向性",
  dominance: "支配性",
  impulsiveness: "冲动性",
  agreeableness: "亲和性",
};

const felineFiveInfo = {
  neuroticism: {
    color: "#e88967",
    soft: "#fff0e7",
    desc: "对声音、气氛和变化的敏感度。分数越高，越像一台实时运行的情绪雷达。",
  },
  extraversion: {
    color: "#3b8799",
    soft: "#e6f5f7",
    desc: "主动出现、探索和表达的倾向。分数越高，越愿意把自己放进现场。",
  },
  dominance: {
    color: "#39464f",
    soft: "#eceff1",
    desc: "领地、边界和资源管理感。分数越高，越像家里的制度制定者。",
  },
  impulsiveness: {
    color: "#d5a642",
    soft: "#fff6df",
    desc: "突然行动、快速刷新和临场发挥的程度。分数越高，越容易触发即兴猫猫任务。",
  },
  agreeableness: {
    color: "#5aa88f",
    soft: "#e8f4ef",
    desc: "亲近、配合和温柔连接的倾向。分数越高，越擅长用软乎乎的方式处理关系。",
  },
};

const typeProfiles = {
  Diplomeow: { neuroticism: 2, extraversion: 4, dominance: 2, impulsiveness: 2, agreeableness: 5 },
  CtrlHuman: { neuroticism: 2, extraversion: 4, dominance: 4, impulsiveness: 2, agreeableness: 4 },
  ATMiao: { neuroticism: 2, extraversion: 4, dominance: 3, impulsiveness: 3, agreeableness: 5 },
  LurkMode: { neuroticism: 4, extraversion: 1, dominance: 2, impulsiveness: 1, agreeableness: 3 },
  AeroDrama: { neuroticism: 5, extraversion: 3, dominance: 2, impulsiveness: 3, agreeableness: 3 },
  Unboxer: { neuroticism: 2, extraversion: 5, dominance: 2, impulsiveness: 4, agreeableness: 3 },
  "3AMRave": { neuroticism: 2, extraversion: 5, dominance: 2, impulsiveness: 5, agreeableness: 3 },
  HuntOS: { neuroticism: 2, extraversion: 4, dominance: 3, impulsiveness: 4, agreeableness: 3 },
  BossMeow: { neuroticism: 2, extraversion: 3, dominance: 5, impulsiveness: 2, agreeableness: 3 },
  GuardPaw: { neuroticism: 3, extraversion: 3, dominance: 5, impulsiveness: 2, agreeableness: 3 },
  HugWall: { neuroticism: 3, extraversion: 2, dominance: 4, impulsiveness: 2, agreeableness: 4 },
  Pet404: { neuroticism: 5, extraversion: 2, dominance: 3, impulsiveness: 4, agreeableness: 3 },
  SeenU: { neuroticism: 3, extraversion: 2, dominance: 2, impulsiveness: 1, agreeableness: 4 },
  MeowNews: { neuroticism: 4, extraversion: 5, dominance: 3, impulsiveness: 4, agreeableness: 4 },
  DoorLord: { neuroticism: 3, extraversion: 3, dominance: 5, impulsiveness: 3, agreeableness: 3 },
  ZenNap: { neuroticism: 1, extraversion: 1, dominance: 2, impulsiveness: 1, agreeableness: 4 },
  WindowSage: { neuroticism: 2, extraversion: 2, dominance: 1, impulsiveness: 1, agreeableness: 4 },
  SoloSoul: { neuroticism: 2, extraversion: 1, dominance: 3, impulsiveness: 1, agreeableness: 2 },
  MineMine: { neuroticism: 3, extraversion: 3, dominance: 5, impulsiveness: 4, agreeableness: 2 },
  IdleEye: { neuroticism: 1, extraversion: 1, dominance: 2, impulsiveness: 1, agreeableness: 3 },
  FollowUp: { neuroticism: 3, extraversion: 4, dominance: 2, impulsiveness: 2, agreeableness: 5 },
  MoodScan: { neuroticism: 5, extraversion: 2, dominance: 2, impulsiveness: 2, agreeableness: 4 },
  "Spawn?": { neuroticism: 2, extraversion: 4, dominance: 2, impulsiveness: 5, agreeableness: 3 },
  CabHack: { neuroticism: 2, extraversion: 4, dominance: 3, impulsiveness: 4, agreeableness: 3 },
  BlanketVIP: { neuroticism: 1, extraversion: 1, dominance: 3, impulsiveness: 1, agreeableness: 4 },
};

const questions = [
  ["你回家开门时，它通常会？", [
    ["主动过来迎接、蹭腿，像在接待重要来宾。", "affinity", "Diplomeow"],
    ["先在远处看一眼，确认是你，再慢慢出现。", "stealth", "LurkMode"],
    ["趁门开的一瞬间研究门外到底有什么。", "explorer", "CabHack"],
    ["站在门口，仿佛在确认你有没有按规矩进家。", "sovereign", "GuardPaw"],
    ["抬头看一下，然后继续躺着。", "cozy", "IdleEye"],
  ]],
  ["家里出现一个新纸箱，它最可能？", [
    ["先蹭蹭你，再邀请你一起围观这个新东西。", "affinity", "Diplomeow"],
    ["躲在旁边观察很久，等安全了再靠近。", "stealth", "LurkMode"],
    ["立刻钻进去、扒拉边角、测试结构强度。", "explorer", "Unboxer"],
    ["占领纸箱，并宣布这是新的私人领地。", "sovereign", "MineMine"],
    ["看一眼，觉得不如原来的睡觉地点。", "cozy", "ZenNap"],
  ]],
  ["到饭点前，它的状态更像？", [
    ["突然深情，眼神湿润，仿佛你是它唯一的宇宙。", "affinity", "ATMiao"],
    ["安静坐在附近观察你有没有意识到饭点到了。", "stealth", "SeenU"],
    ["开始在厨房、柜子、食物袋附近探索路径。", "explorer", "CabHack"],
    ["坐在食盆旁边，用气场宣布流程延误。", "sovereign", "BossMeow"],
    ["不急，睡醒再说，饭可以等但觉不能断。", "cozy", "ZenNap"],
  ]],
  ["你摸它时，它最像哪种反应？", [
    ["很享受，还会主动蹭回来。", "affinity", "Diplomeow"],
    ["一开始可以，几秒后尾巴开始报警。", "stealth", "Pet404"],
    ["摸着摸着突然发现旁边有什么东西更值得追。", "explorer", "Spawn?"],
    ["它会明确告诉你哪里能摸、哪里不能摸。", "sovereign", "HugWall"],
    ["摸不摸都行，别影响它舒服地躺着。", "cozy", "BlanketVIP"],
  ]],
  ["家里来了陌生人，它通常？", [
    ["比较快地靠近，甚至愿意营业一下。", "affinity", "Diplomeow"],
    ["找个隐蔽位置暗中观察，先做背景调查。", "stealth", "LurkMode"],
    ["闻鞋、闻包、检查陌生人带来的新气味。", "explorer", "HuntOS"],
    ["在关键路线附近巡逻，防止秩序失控。", "sovereign", "GuardPaw"],
    ["不参与，找个舒服位置待着。", "cozy", "SoloSoul"],
  ]],
  ["半夜最可能发生什么？", [
    ["它来找你，喵几声，确认你还在服务区。", "affinity", "MeowNews"],
    ["它安静地出现在黑暗里，像一直在线但没通知。", "stealth", "SeenU"],
    ["它突然全屋冲刺，像系统自动刷新。", "explorer", "3AMRave"],
    ["它检查门、走廊、其他猫的位置。", "sovereign", "DoorLord"],
    ["它睡得很沉，仿佛世界不值得重启。", "cozy", "ZenNap"],
  ]],
  ["如果你关上卧室门，它会？", [
    ["在门外叫你，表达自己被排除在外的不满。", "affinity", "MeowNews"],
    ["在门缝附近安静监听，判断里面发生了什么。", "stealth", "MoodScan"],
    ["研究门缝、门把手、开门机制。", "explorer", "CabHack"],
    ["要求开门。开了不一定进，但你不能随便关。", "sovereign", "DoorLord"],
    ["无所谓，它另有长期合作的睡眠地点。", "cozy", "IdleEye"],
  ]],
  ["它和其他猫相处时更像？", [
    ["试图缓和气氛，能和平共处最好。", "affinity", "Diplomeow"],
    ["对其他猫很敏感，先保持距离读取信号。", "stealth", "MoodScan"],
    ["想追、想玩、想测试对方反应。", "explorer", "HuntOS"],
    ["会管路线、占位置、维护自己的资源。", "sovereign", "MineMine"],
    ["最好别来，它更喜欢自己的私人空间。", "cozy", "SoloSoul"],
  ]],
  ["它最常用什么方式让你做事？", [
    ["蹭你、看你、靠近你，用温柔让你投降。", "affinity", "Diplomeow"],
    ["不直接要求，但会一直出现在你视野边缘。", "stealth", "SeenU"],
    ["自己动手试，翻柜、扒门、找入口。", "explorer", "CabHack"],
    ["坐在目标旁边，像在进行正式审批。", "sovereign", "BossMeow"],
    ["它很少要求，能不动就不动。", "cozy", "IdleEye"],
  ]],
  ["它最让你觉得“这猫也太猫了”的瞬间是？", [
    ["你刚难过，它就刚好靠过来。", "affinity", "Diplomeow"],
    ["你以为它没看见，其实它什么都知道。", "stealth", "LurkMode"],
    ["它突然从一个不合理的位置刷新出来。", "explorer", "Spawn?"],
    ["它理直气壮地占了你的座位。", "sovereign", "MineMine"],
    ["它把舒适这件事执行得像终身事业。", "cozy", "BlanketVIP"],
  ]],
  ["如果它是家庭成员里的一个角色，更像？", [
    ["调解气氛的小外交官。", "affinity", "Diplomeow", 2],
    ["让所有人按它流程行动的教练。", "affinity", "CtrlHuman", 2],
    ["饭点前突然深情的提款客户。", "affinity", "ATMiao", 2],
    ["喵语不停的小话痨。", "affinity", "MeowNews", 2],
    ["跟着你巡回办公的小秘书。", "affinity", "FollowUp", 2],
  ]],
  ["它的“内心戏”最像？", [
    ["我先看一下，暂时不暴露自己。", "stealth", "LurkMode", 2],
    ["我的耳朵和尾巴已经说得很清楚了。", "stealth", "AeroDrama", 2],
    ["喜欢你，但摸摸额度已经满了。", "stealth", "Pet404", 2],
    ["我只是路过，才不是在等你。", "stealth", "SeenU", 2],
    ["气氛不对，我先调整一下距离。", "stealth", "MoodScan", 2],
  ]],
  ["它的探索方式更像？", [
    ["每个箱子都要做结构测试。", "explorer", "Unboxer", 2],
    ["半夜能量到账，开始全屋跑酷。", "explorer", "3AMRave", 2],
    ["小动静就是任务开始。", "explorer", "HuntOS", 2],
    ["它的刷新点永远超出人类理解。", "explorer", "Spawn?", 2],
    ["柜门和门缝都是等待破解的系统。", "explorer", "CabHack", 2],
  ]],
  ["它的“主权宣言”更像？", [
    ["这个家最终解释权归我。", "sovereign", "BossMeow", 2],
    ["谁去哪里，我都要看一下。", "sovereign", "GuardPaw", 2],
    ["可以靠近，但请先通过亲密权限审核。", "sovereign", "HugWall", 2],
    ["门的开关权不属于人类单方面决定。", "sovereign", "DoorLord", 2],
    ["这个窝是我的，这条路也是我的。", "sovereign", "MineMine", 2],
  ]],
  ["它的慢生活哲学更像？", [
    ["睡眠质量高于一切。", "cozy", "ZenNap", 2],
    ["窗边就是精神世界的入口。", "cozy", "WindowSage", 2],
    ["可以爱人类，但不想和其他猫共享生活。", "cozy", "SoloSoul", 2],
    ["身体待机，眼睛在线。", "cozy", "IdleEye", 2],
    ["被窝不是选择，是合法居住权。", "cozy", "BlanketVIP", 2],
  ]],
  ["你忙自己的事时，它通常？", [
    ["待在你身边，像安静陪班。", "affinity", "FollowUp"],
    ["在不远处看着你，但不打扰。", "stealth", "SeenU"],
    ["自己找新东西研究。", "explorer", "Unboxer"],
    ["占据一个关键位置，掌控全局视野。", "sovereign", "BossMeow"],
    ["找最舒服的地方进入省电模式。", "cozy", "IdleEye"],
  ]],
  ["当你试图抱起它，它更可能？", [
    ["可以，但最好抱得有诚意。", "affinity", "Diplomeow"],
    ["身体变硬，开始发送“不太对劲”的信号。", "stealth", "AeroDrama"],
    ["扭出去，转头追别的东西。", "explorer", "Spawn?"],
    ["明确拒绝，并重新划定亲密边界。", "sovereign", "HugWall"],
    ["不想抱，除非你把它连被子一起端走。", "cozy", "BlanketVIP"],
  ]],
  ["它对声音、气氛、家里变化的反应是？", [
    ["会靠近人，像是在确认大家都还好。", "affinity", "Diplomeow"],
    ["很敏锐，声音和气氛变化都会被它捕捉。", "stealth", "MoodScan"],
    ["会去查看发生了什么。", "explorer", "HuntOS"],
    ["会检查领地和路线有没有异常。", "sovereign", "GuardPaw"],
    ["只要不影响休息，它就不参与。", "cozy", "ZenNap"],
  ]],
  ["它最像哪种“上班状态”？", [
    ["情绪支持岗。", "affinity", "Diplomeow"],
    ["风险评估岗。", "stealth", "LurkMode"],
    ["外勤探索岗。", "explorer", "Unboxer"],
    ["秩序管理岗。", "sovereign", "GuardPaw"],
    ["舒适体验岗。", "cozy", "BlanketVIP"],
  ]],
  ["如果给它一句结果页文案，哪句最像？", [
    ["我爱你，但你先把饭开一下。", "affinity", "ATMiao"],
    ["已读你，在乎你，但我不说。", "stealth", "SeenU"],
    ["刚才我在这里，现在我不一定还在这里。", "explorer", "Spawn?"],
    ["靠近可以，授权另算。", "sovereign", "HugWall"],
    ["醒着只是睡觉的加载阶段。", "cozy", "ZenNap"],
  ]],
];

let current = 0;
const answers = Array(questions.length).fill(null);
let advanceTimer = null;
let currentResult = null;

const $ = (selector) => document.querySelector(selector);
const typeById = Object.fromEntries(types.map((type) => [type.id, type]));

function renderTypes() {
  $("#typeGrid").innerHTML = Object.entries(families).map(([familyKey, family]) => {
    const cards = types.filter((type) => type.family === familyKey).map((type) => `
        <article class="type-card" style="--family-color:${family.color}; --family-soft:${family.soft}">
          <div class="type-card-image">
            <img src="./${type.img}" alt="${type.name}" loading="lazy">
          </div>
          <div class="type-card-body">
            <p class="type-code">${type.id}</p>
            <h3>${type.name}</h3>
            <p>${type.desc}</p>
          </div>
        </article>
      `).join("");
    return `
      <section class="type-family-row">
        <div class="type-family-title" style="--family-color:${family.color}">
          <h3>${family.name}</h3>
        </div>
        <div class="type-family-cards">${cards}</div>
      </section>
    `;
  }).join("");
}

function showView(view) {
  const sections = ["home", "test", "result", "types"];
  sections.forEach((id) => {
    document.getElementById(id)?.classList.toggle("hidden", id !== view);
  });
  if (view === "test") {
    location.hash = "test";
  } else if (view === "types") {
    location.hash = "types";
  } else if (view === "result") {
    location.hash = "result";
  } else {
    location.hash = "top";
  }
}

function startTest() {
  current = 0;
  renderQuestion();
  showView("test");
}

function renderQuestion(message = "") {
  const [title, options] = questions[current];
  const answered = answers.filter((answer) => answer !== null).length;
  $("#questionCounter").textContent = `第 ${current + 1} / ${questions.length} 题`;
  $("#answeredCounter").textContent = `已答 ${answered} 题`;
  $("#progressBar").style.width = `${(answered / questions.length) * 100}%`;
  $("#questionTitle").textContent = title;
  $("#optionList").innerHTML = options.map((option, index) => `
    <button type="button" class="option-button ${answers[current] === index ? "selected" : ""}" data-option="${index}">
      ${String.fromCharCode(65 + index)}. ${option[0]}
    </button>
  `).join("");
  $("#quizMessage").textContent = message;
  $("#quizMessage").classList.toggle("hidden", !message);
  $("#prevBtn").disabled = current === 0;
  $("#submitBtn").classList.toggle("hidden", current !== questions.length - 1);
  $("#submitBtn").disabled = false;
}

function goToFirstMissingQuestion() {
  const missing = answers.findIndex((answer) => answer === null);
  if (missing === -1) return false;

  current = missing;
  const missingCount = answers.filter((answer) => answer === null).length;
  renderQuestion(`还有 ${missingCount} 题没回答，先补这一题。`);
  showView("test");
  return true;
}

function computeResult() {
  const familyScores = Object.fromEntries(Object.keys(families).map((family) => [family, 0]));
  const typeScores = Object.fromEntries(types.map((type) => [type.id, 0]));
  const factorTotals = Object.fromEntries(Object.keys(felineFiveLabels).map((factor) => [factor, 0]));
  let factorWeight = 0;

  answers.forEach((answer, questionIndex) => {
    if (answer === null) return;
    const option = questions[questionIndex][1][answer];
    const weight = option[3] ?? 1;
    familyScores[option[1]] += 1;
    typeScores[option[2]] += weight;
    const profile = typeProfiles[option[2]];
    if (profile) {
      Object.keys(felineFiveLabels).forEach((factor) => {
        factorTotals[factor] += profile[factor] * weight;
      });
      factorWeight += weight;
    }
  });

  const factorScores = Object.fromEntries(Object.keys(felineFiveLabels).map((factor) => [
    factor,
    factorWeight ? Math.round((factorTotals[factor] / factorWeight) * 10) / 10 : 0,
  ]));
  const topFamily = Object.entries(familyScores).sort((a, b) => b[1] - a[1])[0][0];
  const familyTypes = types.filter((type) => type.family === topFamily);
  const topType = familyTypes.sort((a, b) => typeScores[b.id] - typeScores[a.id])[0];
  const secondary = types
    .filter((type) => type.id !== topType.id)
    .sort((a, b) => typeScores[b.id] - typeScores[a.id])[0];

  return { familyScores, typeScores, factorScores, topFamily, topType, secondary };
}

function factorLevel(score) {
  if (score >= 4.2) return "很高";
  if (score >= 3.2) return "偏高";
  if (score >= 2.2) return "中等";
  return "偏低";
}

function renderFactorFeedback(key, score) {
  const info = felineFiveInfo[key];
  return `
    <div class="factor-feedback-card" style="--factor-color:${info.color}; --factor-soft:${info.soft}">
      <span>${felineFiveLabels[key]} · ${factorLevel(score)}</span>
      <strong>${score} / 5</strong>
      <p>${info.desc}</p>
    </div>
  `;
}

function renderRadar(factorScores) {
  const keys = Object.keys(felineFiveLabels);
  const center = 120;
  const maxRadius = 78;
  const levels = [1, 2, 3, 4, 5];
  const activeKey = keys.slice().sort((a, b) => factorScores[b] - factorScores[a])[0];
  const pointFor = (index, value) => {
    const angle = -Math.PI / 2 + (index * Math.PI * 2) / keys.length;
    const radius = (value / 5) * maxRadius;
    return [center + Math.cos(angle) * radius, center + Math.sin(angle) * radius];
  };
  const polygon = keys.map((key, index) => pointFor(index, factorScores[key]).join(",")).join(" ");
  const grids = levels.map((level) => {
    const points = keys.map((_, index) => pointFor(index, level).join(",")).join(" ");
    return `<polygon class="radar-grid" points="${points}"></polygon>`;
  }).join("");
  const axes = keys.map((key, index) => {
    const [x, y] = pointFor(index, 5);
    const [lx, ly] = pointFor(index, 6.0);
    const color = felineFiveInfo[key].color;
    return `
      <line class="radar-axis" x1="${center}" y1="${center}" x2="${x}" y2="${y}" style="--factor-color:${color}"></line>
      <text class="radar-label" x="${lx}" y="${ly}" text-anchor="middle" dominant-baseline="middle">${felineFiveLabels[key]}</text>
    `;
  }).join("");
  const dots = keys.map((key, index) => {
    const [x, y] = pointFor(index, factorScores[key]);
    const color = felineFiveInfo[key].color;
    return `
      <g class="radar-point" data-factor="${key}" data-score="${factorScores[key]}" style="--factor-color:${color}" tabindex="0" role="button" aria-label="${felineFiveLabels[key]} ${factorScores[key]} 分">
        <circle class="radar-dot-hit" cx="${x}" cy="${y}" r="13"></circle>
        <circle class="radar-dot" cx="${x}" cy="${y}" r="5"></circle>
      </g>
    `;
  }).join("");
  const list = keys.map((key) => `
    <button class="factor-item ${key === activeKey ? "active" : ""}" type="button" data-factor="${key}" data-score="${factorScores[key]}" style="--factor-color:${felineFiveInfo[key].color}; --factor-soft:${felineFiveInfo[key].soft}">
      <span>${felineFiveLabels[key]}</span>
      <div class="factor-track"><div class="factor-fill" style="width:${(factorScores[key] / 5) * 100}%"></div></div>
      <span>${factorScores[key]}</span>
    </button>
  `).join("");

  return `
    <svg class="radar-chart" viewBox="0 0 240 240" role="img" aria-label="Feline Five 雷达图">
      <defs>
        <linearGradient id="radarFill" x1="35" y1="35" x2="205" y2="205" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#e88967"/>
          <stop offset=".28" stop-color="#d5a642"/>
          <stop offset=".55" stop-color="#5aa88f"/>
          <stop offset=".78" stop-color="#3b8799"/>
          <stop offset="1" stop-color="#9285bd"/>
        </linearGradient>
      </defs>
      ${grids}
      ${axes}
      <polygon class="radar-shape" points="${polygon}"></polygon>
      ${dots}
    </svg>
    <div class="factor-panel">
      <div class="factor-list">${list}</div>
      <div id="factorFeedback" class="factor-feedback">${renderFactorFeedback(activeKey, factorScores[activeKey])}</div>
    </div>
  `;
}

function renderResult() {
  if (goToFirstMissingQuestion()) return;

  const result = computeResult();
  currentResult = result;
  const family = families[result.topFamily];
  $("#result").classList.remove("hidden");
  $("#result").style.setProperty("--result-bg", family.soft);
  $("#resultImage").src = `./${result.topType.img}`;
  $("#resultImage").alt = result.topType.name;
  $("#resultFamily").textContent = family.name;
  $("#resultName").textContent = `${result.topType.id} ${result.topType.name}`;
  $("#resultDesc").textContent = result.topType.desc;
  $("#resultTags").innerHTML = "";

  const max = Math.max(...Object.values(result.familyScores), 1);
  $("#radarWrap").innerHTML = renderRadar(result.factorScores);

  $("#secondaryResult").innerHTML = `隐藏副猫格：<strong>${result.secondary.id} ${result.secondary.name}</strong><br>${result.secondary.desc}`;
  showView("result");
}

function blobToDataUrl(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

async function loadImage(src) {
  const response = await fetch(src);
  if (!response.ok) throw new Error(`Image request failed: ${src}`);
  const dataUrl = await blobToDataUrl(await response.blob());

  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = dataUrl;
  });
}

function drawRoundRect(ctx, x, y, width, height, radius) {
  const r = Math.min(radius, width / 2, height / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + width, y, x + width, y + height, r);
  ctx.arcTo(x + width, y + height, x, y + height, r);
  ctx.arcTo(x, y + height, x, y, r);
  ctx.arcTo(x, y, x + width, y, r);
  ctx.closePath();
}

function drawCoverImage(ctx, image, x, y, width, height, radius) {
  const scale = Math.max(width / image.width, height / image.height);
  const drawWidth = image.width * scale;
  const drawHeight = image.height * scale;
  const dx = x + (width - drawWidth) / 2;
  const dy = y + (height - drawHeight) / 2;

  ctx.save();
  drawRoundRect(ctx, x, y, width, height, radius);
  ctx.clip();
  ctx.drawImage(image, dx, dy, drawWidth, drawHeight);
  ctx.restore();
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight, maxLines = 3) {
  const chars = Array.from(text);
  const lines = [];
  let line = "";

  chars.forEach((char) => {
    const next = line + char;
    if (ctx.measureText(next).width > maxWidth && line) {
      lines.push(line);
      line = char;
    } else {
      line = next;
    }
  });
  if (line) lines.push(line);

  lines.slice(0, maxLines).forEach((item, index) => {
    const finalLine = index === maxLines - 1 && lines.length > maxLines ? `${item.slice(0, -1)}…` : item;
    ctx.fillText(finalLine, x, y + index * lineHeight);
  });
}

function drawWordmark(ctx, x, y) {
  ctx.textBaseline = "alphabetic";
  ctx.font = "700 42px Georgia, 'Times New Roman', serif";
  ctx.fillStyle = "#2F3742";
  ctx.fillText("M", x, y);
  const mWidth = ctx.measureText("M").width;
  ctx.font = "700 28px Georgia, 'Times New Roman', serif";
  ctx.fillStyle = "#6F7B82";
  ctx.fillText("eow", x + mWidth + 2, y - 3);
  const eowWidth = ctx.measureText("eow").width;
  ctx.font = "700 42px Georgia, 'Times New Roman', serif";
  ctx.fillStyle = "#2F3742";
  ctx.fillText("BTI", x + mWidth + eowWidth + 6, y);
}

function getCardData(catName) {
  const family = families[currentResult.topFamily];
  const type = currentResult.topType;
  return {
    catName: catName.trim() || "我家猫",
    family,
    type,
    title: `${catName.trim() || "我家猫"}的猫格档案`,
    certification: "经 MeowBTI 非严肃认证",
    footerTitle: "MeowBTI 猫格测试",
    footerNote: "娱乐结果，不替代兽医或行为诊断",
    logoSrc: "./meowbti-logo-mark.svg",
    typeImageSrc: `./${type.img}`,
    qrSrc: "./assets/meowbti-qr.png",
    shareUrl: MEOWBTI_SHARE_URL,
  };
}

async function createShareCard(catName) {
  if (!currentResult) return "";

  const card = getCardData(catName);
  const canvas = document.createElement("canvas");
  canvas.width = 1080;
  canvas.height = 1440;
  const ctx = canvas.getContext("2d");

  const [logo, catImage, qrImage] = await Promise.all([
    loadImage(card.logoSrc),
    loadImage(card.typeImageSrc),
    loadImage(card.qrSrc),
  ]);

  ctx.fillStyle = "#FFFAF3";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const bgGradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  bgGradient.addColorStop(0, "rgba(240, 169, 119, 0.23)");
  bgGradient.addColorStop(0.55, "rgba(255, 255, 255, 0)");
  bgGradient.addColorStop(1, "rgba(90, 168, 143, 0.18)");
  ctx.fillStyle = bgGradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.save();
  ctx.globalAlpha = 0.58;
  ctx.fillStyle = family.soft;
  drawRoundRect(ctx, 74, 92, 932, 1256, 36);
  ctx.fill();
  ctx.restore();

  ctx.drawImage(logo, 94, 96, 76, 76);
  drawWordmark(ctx, 186, 150);

  ctx.fillStyle = "#2F3742";
  ctx.font = "900 76px 'Microsoft YaHei', 'PingFang SC', sans-serif";
  ctx.fillText(card.title, 94, 270);

  ctx.fillStyle = "#6F7B82";
  ctx.font = "800 28px 'Microsoft YaHei', 'PingFang SC', sans-serif";
  ctx.fillText(card.certification, 96, 318);

  drawCoverImage(ctx, catImage, 170, 372, 740, 560, 18);

  ctx.fillStyle = "#2F3742";
  ctx.font = "900 64px Inter, 'Microsoft YaHei', sans-serif";
  ctx.fillText(card.type.id, 96, 1038);
  ctx.font = "900 54px 'Microsoft YaHei', 'PingFang SC', sans-serif";
  ctx.fillText(card.type.name, 96, 1104);

  ctx.fillStyle = card.family.color;
  drawRoundRect(ctx, 96, 1140, 154, 44, 22);
  ctx.fill();
  ctx.fillStyle = "#FFFFFF";
  ctx.font = "900 24px 'Microsoft YaHei', 'PingFang SC', sans-serif";
  ctx.fillText(card.family.name, 122, 1170);

  ctx.fillStyle = "#F4F1EB";
  drawRoundRect(ctx, 270, 1140, 196, 44, 22);
  ctx.fill();
  ctx.fillStyle = "#6F7B82";
  ctx.fillText(card.family.label, 296, 1170);

  ctx.fillStyle = "#6F7B82";
  ctx.font = "700 32px 'Microsoft YaHei', 'PingFang SC', sans-serif";
  wrapText(ctx, card.type.desc, 96, 1244, 628, 48, 3);

  ctx.fillStyle = "#FFFFFF";
  drawRoundRect(ctx, 800, 1208, 156, 156, 14);
  ctx.fill();
  ctx.drawImage(qrImage, 812, 1220, 132, 132);
  ctx.fillStyle = "#6F7B82";
  ctx.font = "800 20px 'Microsoft YaHei', 'PingFang SC', sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("扫码测猫格", 878, 1392);
  ctx.textAlign = "left";

  ctx.fillStyle = "rgba(37, 48, 56, 0.16)";
  ctx.fillRect(96, 1324, 888, 2);
  ctx.fillStyle = "#2F3742";
  ctx.font = "900 26px Inter, 'Microsoft YaHei', sans-serif";
  ctx.fillText(card.footerTitle, 96, 1376);
  ctx.fillStyle = "#6F7B82";
  ctx.font = "700 24px 'Microsoft YaHei', 'PingFang SC', sans-serif";
  ctx.fillText(card.footerNote, 318, 1376);

  return canvas.toDataURL("image/png");
}

function openCardModal() {
  if (!currentResult) return;
  $("#catNameInput").value = "";
  $("#cardPreviewShell").classList.add("hidden");
  $("#cardPreview").removeAttribute("src");
  $("#downloadCardLink").removeAttribute("href");
  $("#cardModal").classList.remove("hidden");
  window.setTimeout(() => $("#catNameInput").focus(), 0);
}

function closeCardModal() {
  $("#cardModal").classList.add("hidden");
}

document.addEventListener("click", (event) => {
  const option = event.target.closest("[data-option]");
  if (option) {
    const questionIndex = current;
    answers[questionIndex] = Number(option.dataset.option);
    renderQuestion();
    if (advanceTimer) window.clearTimeout(advanceTimer);
    if (questionIndex < questions.length - 1) {
      advanceTimer = window.setTimeout(() => {
        if (current !== questionIndex) return;
        current = questionIndex + 1;
        renderQuestion();
      }, 180);
    } else if (!answers.includes(null)) {
      window.setTimeout(renderResult, 220);
    }
  }
});

document.addEventListener("click", (event) => {
  const factor = event.target.closest("[data-factor]");
  if (!factor) return;

  const key = factor.dataset.factor;
  const score = Number(factor.dataset.score);
  document.querySelectorAll("[data-factor]").forEach((item) => {
    item.classList.toggle("active", item.dataset.factor === key);
  });
  $("#factorFeedback").innerHTML = renderFactorFeedback(key, score);
});

document.addEventListener("click", (event) => {
  if (event.target.closest("[data-start]")) {
    event.preventDefault();
    startTest();
  }
  if (event.target.closest("[data-gallery]")) {
    event.preventDefault();
    showView("types");
  }
  if (event.target.closest("[data-home]")) {
    event.preventDefault();
    showView("home");
  }
});

$("#prevBtn").addEventListener("click", () => {
  current = Math.max(0, current - 1);
  renderQuestion();
});

$("#submitBtn").addEventListener("click", renderResult);

$("#openCardBtn").addEventListener("click", openCardModal);
$("#closeCardBtn").addEventListener("click", closeCardModal);
$("#cardModal").addEventListener("click", (event) => {
  if (event.target === $("#cardModal")) closeCardModal();
});
$("#generateCardBtn").addEventListener("click", async () => {
  const button = $("#generateCardBtn");
  const catName = $("#catNameInput").value.trim() || "我家猫";
  button.disabled = true;
  button.textContent = "生成中...";
  try {
    const dataUrl = await createShareCard(catName);
    $("#cardPreview").src = dataUrl;
    $("#downloadCardLink").href = dataUrl;
    $("#downloadCardLink").download = `${catName}-MeowBTI猫格卡片.png`;
    $("#cardPreviewShell").classList.remove("hidden");
  } catch (error) {
    console.error(error);
    window.alert("卡片生成失败，请确认页面是通过本地服务打开的，然后刷新后再试一次。");
  } finally {
    button.disabled = false;
    button.textContent = "生成卡片";
  }
});
$("#catNameInput").addEventListener("keydown", (event) => {
  if (event.key === "Enter") $("#generateCardBtn").click();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeCardModal();
});

$("#restartBtn").addEventListener("click", () => {
  answers.fill(null);
  currentResult = null;
  current = 0;
  $("#result").classList.add("hidden");
  renderQuestion();
  showView("test");
});

renderTypes();
renderQuestion();
if (location.hash === "#types") {
  showView("types");
} else if (location.hash === "#test") {
  showView("test");
} else {
  showView("home");
}
