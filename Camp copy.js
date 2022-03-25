const mongoose = require('mongoose');
const CampSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  addr1: {
    type: String,
  },
  addr2: {
    type: String,
  },
  allar: {
    type: String,
  },
  animalCmgCl: {
    type: String,
  },
  autoSiteCo: {
    type: String,
  },
  bizrno: {
    type: String,
    unique: true,
  },
  brazierCl: {
    type: String,
  },
  caravAcmpnyAt: {
    type: String,
  },
  CaravSiteCo: {
    type: String,
  },
  culturEventAt: {
    type: String,
  },
  caravAcmpnyAt: {
    type: String,
  },
  caravSiteCo: {
    type: String,
  },
  clturEventAt: {
    type: String,
  },
  contentId: {
    type: String,
  },
  createdtime: {
    type: String,
  },
  doNm: {
    type: String,
  },
  exprnProgrmAt: {
    type: String,
  },
  extshrCo: {
    type: String,
  },
  facltDivNm: {
    type: String,
  },
  facltNm: {
    type: String,
  },
  fireSensorCo: {
    type: String,
  },
  firstImageUrl: {
    type: String,
  },
  frprvtSandCo: {
    type: String,
  },
  frprvtSandCo: {
    type: String,
  },
  glampSiteCo: {
    type: String,
  },
  gnrlSiteCo: {
    type: String,
  },
  homepage: {
    type: String,
  },
  induty: {
    type: String,
  },
  indvdlCaravSiteCo: {
    type: String,
  },
  insrncAt: {
    type: String,
  },
  intro: {
    type: String,
  },
  lctCl: {
    type: String,
  },
  lineIntro: {
    type: String,
  },
  manageNmpr: {
    type: String,
  },
  manageSttus: {
    type: String,
  },
  mangeDivNm: {
    type: String,
  },
  mapX: {
    type: Number,
  },
  mapY: {
    type: Number,
  },
  modifiedtime: {
    type: String,
  },
  operDeCl: {
    type: String,
  },
  operPdCl: {
    type: String,
  },
  operPdCl: {
    type: String,
  },
  operPdCl: {
    type: String,
  },
  posblFcltyCl: {
    type: String,
  },
  prmisnDe: {
    type: String,
  },
  resveCl: {
    type: String,
  },
  resveUrl: {
    type: String,
  },
  sigunNm: {
    type: String,
  },
  siteBottomCl1: {
    type: Number,
  },
  siteBottomCl2: {
    type: Number,
  },
  siteBottomCl3: {
    type: Number,
  },
  siteBottomCl5: {
    type: Number,
  },
  siteMg1Co: {
    type: Number,
  },
  siteMg1Vrticl: {
    type: Number,
  },
  siteMg1Width: {
    type: Number,
  },
  siteMg2Co: {
    type: Number,
  },
  siteMg2Vrticl: {
    type: Number,
  },
  siteMg2Width: {
    type: Number,
  },
  siteMg3Co: {
    type: Number,
  },
  siteMg3Vrticl: {
    type: Number,
  },
  siteMg3Width: {
    type: Number,
  },
  sitedStnc: {
    type: Number,
  },
  swrmCo: {
    type: Number,
  },
  tel: {
    type: String,
  },
  themaEnvrnCl: {
    type: String,
  },
  toiletCo: {
    type: Number,
  },
  trlerAcmpnyAt: {
    type: String,
  },
  wtrplCo: {
    type: Number,
  },
  zipcode: {
    type: Number,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Camp', CampSchema);
