const versions = {
  renJiao: { value: "renJiao", label: "人教版" },
  yuWen: { value: "yuWen", label: "语文版" },
  suJiao: { value: "suJiao", label: "苏教版" },
  eJiao: { value: "eJiao", label: "鄂教版" },
  luJiao: { value: "luJiao", label: "鲁教版" },
  beiShiDa: { value: "beiShiDa", label: "北师大版" },
  huJiao: { value: "huJiao", label: "沪教版" },
  yiJiao: { value: "yiJiao", label: "冀教版" },
  zheJiao: { value: "zheJiao", label: "浙教版" },
  heDa: { value: "heDa", label: "河大版" },
  jingJiao: { value: "jingJiao", label: "京教版" },
  huaShiDa: { value: "huaShiDa", label: "华师大版" },
  xiangJiao: { value: "xiangJiao", label: "湘教版" },
  xinRenJiao: { value: "xinRenJiao", label: "新人教" },
  waiYan: { value: "waiYan", label: "外研版" },
  niuJing: { value: "niuJing", label: "牛津版" },
  beiShi: { value: "beiShi", label: "北师版" },
  jiaoKe: { value: "jiaoKe", label: "教科版" },
  yueHu: { value: "yueHu", label: "粤沪版" },
  suKe: { value: "suKe", label: "苏科版" },
  huKe: { value: "huKe", label: "沪科版" },
  shangHaiJiaoYu: { value: "shangHaiJiaoYu", label: "上海教育版" },
  yueJiao: { value: "yueJiao", label: "粤教版" },
  beiJingYiJiao: { value: "beiJingYiJiao", label: "北京义教版" },
  keJiao: { value: "keJiao", label: "科教版" },
  shanJiao: { value: "shanJiao", label: "陕教版" },
  renMing: { value: "renMing", label: "人民版" },
  chuanJao: { value: "chuanJao", label: "川教版" },
  jiNan: { value: "jiNan", label: "济南版" },
  beiJing: { value: "beiJing", label: "北京版" },
  zhongGuo: { value: "zhongGuo", label: "中图版" },
  yiHe: { value: "yiHe", label: "冀河版" },
  renJiaoSheHui: { value: "renJiaoSheHui", label: "人教社会版" },
};
const {
  renJiao,
  yuWen,
  suJiao,
  eJiao,
  luJiao,
  beiShiDa,
  huJiao,
  yiJiao,
  zheJiao,
  heDa,
  jingJiao,
  huaShiDa,
  xiangJiao,
  xinRenJiao,
  waiYan,
  niuJing,
  beiShi,
  jiaoKe,
  yueHu,
  suKe,
  huKe,
  shangHaiJiaoYu,
  yueJiao,
  beiJingYiJiao,
  keJiao,
  shanJiao,
  renMing,
  chuanJao,
  jiNan,
  beiJing,
  yiHe,
  renJiaoSheHui,
  zhongGuo,
 } = versions;
const course = [
   {
    value: "chinese",
    label: "语文",
    children: [
      renJiao,
      yuWen,
      suJiao,
      eJiao,
      luJiao,
      beiShiDa,
      huJiao,
      yiJiao,
      zheJiao,
      heDa,
    ],
  },
  {
    value: "math",
    label: "数学",
    children: [
      beiShiDa,
      renJiao,
      suJiao,
      jingJiao,
      luJiao,
      huaShiDa,
      zheJiao,
      xiangJiao,
      yiJiao,
    ],
  },
   {
    value: "english",
    label: "英语",
    children: [xinRenJiao, waiYan, yiHe, luJiao, niuJing, xiangJiao, beiShi],
  },
   {
    value: "physics",
    label: "物理",
    children: [xinRenJiao, jiaoKe, yueHu, suKe, beiShiDa, huKe],
  },
  {
    value: "chemistry",
    label: "化学",
    children: [
      renJiao,
      shangHaiJiaoYu,
      xiangJiao,
      yueJiao,
      luJiao,
      beiJingYiJiao,
    ],
  },
  {
    value: "politics",
    label: "政治",
    children: [
      renJiao,
      xiangJiao,
      suJiao,
      beiShi,
      eJiao,
      luJiao,
      shanJiao,
      renMing,
      keJiao,
    ],
  },
  {
    value: "history",
    label: "历史",
    children: [renJiao, renJiaoSheHui, beiShi, chuanJao],
  },
  {
    value: "biology",
    label: "生物",
    children: [xinRenJiao, jiNan, suJiao, suKe, beiShiDa, beiJing],
  },
  {
    value: "geography",
    label: "地理",
    children: [xinRenJiao, xiangJiao, zhongGuo],
  },
]
const gradeList = [
  { value: "firstGrade", label: "一年级" },
  { value: "secondGrade", label: "二年级" },
  { value: "thirdGrade", label: "三年级" },
  { value: "fourthGrade", label: "四年级" },
  { value: "fifthGrade", label: "五年级" },
  { value: "sixthGrade", label: "六年级" },
  { value: "seventhGrade", label: "初一" },
  { value: "eighthGrade", label: "初二" },
  { value: "ninthGrade", label: "初三" },
  { value: "tenthGrade", label: "高一" },
  { value: "eleventhGrade", label: "高二" },
  { value: "twelfthGrade", label: "高三" },
];

//课程选项
const courseOptions = [];
 (() => {
  let i = 0;
  for (let index = 1; index <= 12; index++) {
    i = index - 1;
    courseOptions.push({
      value: gradeList[i].value,
      label: gradeList[i].label,
      children:[...course]
    });
  }
})()
export {courseOptions} 
