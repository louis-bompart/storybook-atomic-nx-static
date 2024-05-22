import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { o as ow } from './headless.esm.js';
import { t as snakeToCamel } from './utils.js';
import { R as ResultContext } from './result-template-decorators.js';
import { d as defineCustomElement$3 } from './atomic-component-error2.js';
import { d as defineCustomElement$2 } from './atomic-icon2.js';

var bgStandard_common = {
  headerDiscounts: "rgb(92, 92, 92)",
  contact: "rgb(150, 2, 199)",
  cryptoTransaction: "rgb(255, 93, 45)",
  multiSelectCheckbox: "rgb(147, 147, 147)",
  workOrder: "rgb(6, 165, 154)",
  post: "rgb(27, 150, 255)",
  globalConstant: "rgb(16, 124, 173)",
  changeRequest: "rgb(5, 103, 100)",
  indicatorPerformancePeriod: "rgb(3, 45, 96)",
  dataCloud: "rgb(90, 27, 169)",
  carousel: "rgb(59, 167, 85)",
  workContract: "rgb(27, 150, 255)",
  impactStrategyAssignment: "rgb(6, 165, 154)",
  resourceSkill: "rgb(59, 167, 85)",
  systemAndGlobalVariable: "rgb(16, 124, 173)",
  segments: "rgb(255, 93, 45)",
  accountInfo: "rgb(88, 103, 232)",
  promptBuilder: "rgb(47, 44, 183)",
  goals: "rgb(27, 150, 255)",
  tourCheck: "rgb(144, 80, 233)",
  adjustValue: "rgb(59, 167, 85)",
  caseWrapUp: "rgb(255, 93, 45)",
  investmentAccount: "rgb(59, 167, 85)",
  store: "rgb(57, 101, 71)",
  slider: "rgb(147, 147, 147)",
  output: "rgb(16, 124, 173)",
  medicationIngredient: "rgb(6, 165, 154)",
  storeGroup: "rgb(27, 150, 255)",
  all: "rgb(16, 124, 173)",
  serviceTerritoryPolicy: "rgb(27, 150, 255)",
  slackConversations: "rgb(72, 26, 84)",
  picklistChoice: "rgb(16, 124, 173)",
  choice: "rgb(16, 124, 173)",
  fundingRequirement: "rgb(57, 101, 71)",
  yourAccount: "rgb(27, 150, 255)",
  app: "rgb(255, 93, 45)",
  default: "rgb(147, 147, 147)",
  caseMilestone: "rgb(255, 93, 45)",
  today: "rgb(255, 83, 138)",
  buyerAccount: "rgb(57, 101, 71)",
  leadList: "rgb(255, 93, 45)",
  workPlanTemplate: "rgb(6, 165, 154)",
  tableau: "rgb(15, 30, 60)",
  shift: "rgb(255, 83, 138)",
  productItemTransaction: "rgb(255, 93, 45)",
  personLanguage: "rgb(6, 165, 154)",
  apex: "rgb(16, 124, 173)",
  replyText: "rgb(255, 83, 138)",
  answerPrivate: "rgb(255, 93, 45)",
  immunization: "rgb(255, 83, 138)",
  assetDowntimePeriod: "rgb(16, 124, 173)",
  opportunityContactRole: "rgb(88, 103, 232)",
  retailBankingConsole: "rgb(6, 165, 154)",
  channelProgramMembers: "rgb(6, 165, 154)",
  appsAdmin: "rgb(88, 103, 232)",
  datadotcom: "rgb(27, 150, 255)",
  settings: "rgb(57, 101, 71)",
  networkContract: "rgb(59, 167, 85)",
  cryptoTransactionEnvelopeItem: "rgb(16, 124, 173)",
  productItem: "rgb(27, 150, 255)",
  metrics: "rgb(27, 150, 255)",
  topic2: "rgb(27, 150, 255)",
  partnerFundAllocation: "rgb(6, 165, 154)",
  careRequestReviewer: "rgb(59, 167, 85)",
  indicatorDefinition: "rgb(3, 45, 96)",
  cryptoTransactionEnvelopeChangeSnapshot: "rgb(203, 101, 255)",
  approval: "rgb(59, 167, 85)",
  workQueue: "rgb(16, 124, 173)",
  iotOrchestrations: "rgb(16, 124, 173)",
  visualforcePage: "rgb(255, 93, 45)",
  personAccount: "rgb(88, 103, 232)",
  entity: "rgb(255, 93, 45)",
  dynamicHighlightsPanel: "rgb(59, 167, 85)",
  serviceTerritoryLocation: "rgb(88, 103, 232)",
  qualifications: "rgb(57, 101, 71)",
  documentPreview: "rgb(182, 5, 84)",
  taxTreatment: "rgb(57, 101, 71)",
  entitlementPolicy: "rgb(57, 101, 71)",
  form: "rgb(59, 167, 85)",
  products: "rgb(90, 27, 169)",
  prompt: "rgb(6, 165, 154)",
  orderItem: "rgb(27, 150, 255)",
  readReceipts: "rgb(59, 167, 85)",
  javascriptButton: "rgb(255, 93, 45)",
  maintenanceAsset: "rgb(16, 124, 173)",
  workPlanRule: "rgb(6, 165, 154)",
  loop: "rgb(255, 93, 45)",
  portalRolesAndSubordinates: "rgb(27, 150, 255)",
  workCapacityLimit: "rgb(16, 124, 173)",
  employeeOrganization: "rgb(27, 150, 255)",
  workforceEngagement: "rgb(182, 5, 84)",
  constant: "rgb(16, 124, 173)",
  marketingActions: "rgb(59, 167, 85)",
  caseTranscript: "rgb(255, 93, 45)",
  timesheetEntry: "rgb(59, 167, 85)",
  keyDates: "rgb(27, 150, 255)",
  multiPicklist: "rgb(147, 147, 147)",
  facilityBed: "rgb(255, 83, 138)",
  productWorkspace: "rgb(57, 101, 71)",
  visitTemplates: "rgb(27, 150, 255)",
  restrictionPolicy: "rgb(27, 150, 255)",
  task: "rgb(59, 167, 85)",
  schedulingWorkspaceTerritory: "rgb(255, 83, 138)",
  answerBest: "rgb(255, 93, 45)",
  attach: "rgb(144, 80, 233)",
  assetAction: "rgb(16, 124, 173)",
  section: "rgb(147, 147, 147)",
  serviceRequest: "rgb(27, 150, 255)",
  orders: "rgb(27, 150, 255)",
  propagationPolicy: "rgb(27, 150, 255)",
  budget: "rgb(16, 124, 173)",
  reportType: "rgb(59, 167, 85)",
  pastChat: "rgb(255, 93, 45)",
  cryptoTransactionEnvelopeChangeLog: "rgb(8, 73, 104)",
  feedback: "rgb(27, 150, 255)",
  actionListComponent: "rgb(16, 124, 173)",
  opportunitySplits: "rgb(255, 93, 45)",
  locationPermit: "rgb(6, 165, 154)",
  messagingUser: "rgb(6, 165, 154)",
  filterCriteria: "rgb(16, 124, 173)",
  taxPolicy: "rgb(57, 101, 71)",
  trailhead: "rgb(3, 45, 96)",
  entitlements: "rgb(144, 80, 233)",
  checkout: "rgb(57, 101, 71)",
  formula: "rgb(16, 124, 173)",
  caseLogACall: "rgb(255, 93, 45)",
  shiftPatternEntry: "rgb(255, 83, 138)",
  thanksLoading: "rgb(147, 147, 147)",
  jobFamily: "rgb(27, 150, 255)",
  serviceAppointmentCapacityUsage: "rgb(16, 124, 173)",
  channelProgramLevels: "rgb(6, 165, 154)",
  letterhead: "rgb(27, 150, 255)",
  promotionsWorkspace: "rgb(57, 101, 71)",
  nftSettings: "rgb(255, 83, 138)",
  assetHierarchy: "rgb(16, 124, 173)",
  emailChatter: "rgb(255, 93, 45)",
  custodyChainEntry: "rgb(6, 165, 154)",
  documentReference: "rgb(16, 124, 173)",
  announcement: "rgb(27, 150, 255)",
  fieldSales: "rgb(144, 80, 233)",
  bot: "rgb(16, 124, 173)",
  macros: "rgb(6, 165, 154)",
  dashboardEa: "rgb(88, 103, 232)",
  jobProfile: "rgb(255, 83, 138)",
  steps: "rgb(16, 124, 173)",
  snippetAlt: "rgb(16, 124, 173)",
  assetRelationship: "rgb(255, 93, 45)",
  highVelocitySales: "rgb(6, 165, 154)",
  brand: "rgb(88, 103, 232)",
  historicalAdherence: "rgb(6, 165, 154)",
  visits: "rgb(27, 150, 255)",
  einsteinReplies: "rgb(255, 83, 138)",
  coaching: "rgb(255, 83, 138)",
  recordLookup: "rgb(255, 83, 138)",
  productServiceCampaignItem: "rgb(16, 124, 173)",
  schedulingConstraint: "rgb(255, 83, 138)",
  lightningComponent: "rgb(147, 147, 147)",
  search: "rgb(27, 150, 255)",
  connectedApps: "rgb(88, 103, 232)",
  swarmRequest: "rgb(255, 83, 138)",
  workTypeGroup: "rgb(16, 124, 173)",
  education: "rgb(27, 150, 255)",
  workType: "rgb(16, 124, 173)",
  travelMode: "rgb(59, 167, 85)",
  environmentHub: "rgb(16, 124, 173)",
  identifier: "rgb(255, 93, 45)",
  cms: "rgb(59, 167, 85)",
  callCoaching: "rgb(27, 150, 255)",
  salesforceCms: "rgb(16, 124, 173)",
  priceSheet: "rgb(59, 167, 85)",
  thanks: "rgb(255, 83, 138)",
  serviceTerritoryMember: "rgb(88, 103, 232)",
  workForecast: "rgb(255, 93, 45)",
  cryptoProductCategoryWalletRole: "rgb(5, 103, 100)",
  holidayOperatingHours: "rgb(27, 150, 255)",
  uploadedModel: "rgb(6, 165, 154)",
  userRole: "rgb(59, 167, 85)",
  observationComponent: "rgb(88, 103, 232)",
  orchestrator: "rgb(16, 124, 173)",
  workCapacityUsage: "rgb(16, 124, 173)",
  recordCreate: "rgb(255, 83, 138)",
  campaignMembers: "rgb(255, 93, 45)",
  retailBanking: "rgb(6, 165, 154)",
  productServiceCampaign: "rgb(16, 124, 173)",
  portalRoles: "rgb(255, 93, 45)",
  calibration: "rgb(6, 165, 154)",
  answerPublic: "rgb(255, 93, 45)",
  displayText: "rgb(147, 147, 147)",
  productConsumedState: "rgb(6, 165, 154)",
  budgetCategoryValue: "rgb(27, 150, 255)",
  schedulingWorkspace: "rgb(255, 83, 138)",
  unmatched: "rgb(27, 150, 255)",
  partners: "rgb(6, 165, 154)",
  emailIq: "rgb(88, 103, 232)",
  mulesoft: "rgb(27, 150, 255)",
  serviceCrew: "rgb(255, 93, 45)",
  paymentGateway: "rgb(5, 103, 100)",
  voiceCall: "rgb(59, 167, 85)",
  cancelCheckout: "rgb(147, 147, 147)",
  assetWarranty: "rgb(16, 124, 173)",
  resourceCapacity: "rgb(59, 167, 85)",
  repeaters: "rgb(6, 165, 154)",
  setupModal: "rgb(16, 124, 173)",
  channelPrograms: "rgb(6, 165, 154)",
  quip: "rgb(255, 93, 45)",
  quipSheet: "rgb(59, 167, 85)",
  timeslot: "rgb(255, 93, 45)",
  liveChat: "rgb(255, 93, 45)",
  serviceRequestDetail: "rgb(6, 165, 154)",
  medRecStatementRecommendation: "rgb(88, 103, 232)",
  jobPosition: "rgb(27, 150, 255)",
  sobjectCollection: "rgb(16, 124, 173)",
  user: "rgb(16, 124, 173)",
  client: "rgb(6, 165, 154)",
  screen: "rgb(27, 150, 255)",
  portal: "rgb(59, 167, 85)",
  partnerFundRequest: "rgb(6, 165, 154)",
  assetAudit: "rgb(144, 80, 233)",
  resourcePreference: "rgb(59, 167, 85)",
  firstNonEmpty: "rgb(255, 83, 138)",
  impactStrategy: "rgb(6, 165, 154)",
  customer360: "rgb(3, 45, 96)",
  employeeJob: "rgb(27, 150, 255)",
  resourceAbsence: "rgb(59, 167, 85)",
  registeredModel: "rgb(59, 167, 85)",
  panelDetail: "rgb(8, 73, 104)",
  textTemplate: "rgb(16, 124, 173)",
  entitlementTemplate: "rgb(88, 103, 232)",
  lightningUsage: "rgb(88, 103, 232)",
  volumeDiscounts: "rgb(255, 93, 45)",
  indicatorResult: "rgb(3, 45, 96)",
  productTransferState: "rgb(255, 93, 45)",
  medicationDispense: "rgb(27, 150, 255)",
  entitlement: "rgb(88, 103, 232)",
  empty: "rgb(147, 147, 147)",
  text: "rgb(147, 147, 147)",
  delegatedAccount: "rgb(57, 101, 71)",
  fulfillmentOrder: "rgb(147, 147, 147)",
  caseEmail: "rgb(255, 93, 45)",
  account: "rgb(88, 103, 232)",
  couponCodes: "rgb(57, 101, 71)",
  assignment: "rgb(255, 93, 45)",
  wealthManagementConsole: "rgb(6, 165, 154)",
  task2: "rgb(59, 167, 85)",
  patientMedicationDosage: "rgb(6, 165, 154)",
  codePlayground: "rgb(16, 124, 173)",
  social: "rgb(255, 83, 138)",
  endorsement: "rgb(88, 103, 232)",
  folder: "rgb(88, 103, 232)",
  serviceCrewMember: "rgb(88, 103, 232)",
  variationAttributeSetup: "rgb(57, 101, 71)",
  realTime: "rgb(255, 93, 45)",
  connectWallet: "rgb(182, 5, 84)",
  flow: "rgb(16, 124, 173)",
  recipe: "rgb(16, 124, 173)",
  expenseReportEntry: "rgb(47, 44, 183)",
  employee: "rgb(27, 150, 255)",
  omniSupervisor: "rgb(88, 103, 232)",
  capacityPlan: "rgb(255, 83, 138)",
  assetObject: "rgb(16, 124, 173)",
  product: "rgb(144, 80, 233)",
  cryptoTransactionEnvelope: "rgb(5, 103, 100)",
  topic: "rgb(27, 150, 255)",
  productRequired: "rgb(255, 83, 138)",
  dynamicRecordChoice: "rgb(16, 124, 173)",
  aggregationPolicy: "rgb(27, 150, 255)",
  warrantyTerm: "rgb(16, 124, 173)",
  process: "rgb(16, 124, 173)",
  swarmSession: "rgb(255, 83, 138)",
  people: "rgb(6, 165, 154)",
  medication: "rgb(59, 167, 85)",
  reward: "rgb(255, 83, 138)",
  employeeContact: "rgb(27, 150, 255)",
  bundlePolicy: "rgb(27, 150, 255)",
  performance: "rgb(255, 93, 45)",
  promotions: "rgb(57, 101, 71)",
  caseComment: "rgb(255, 93, 45)",
  priceBookEntries: "rgb(57, 101, 71)",
  salesChannel: "rgb(16, 124, 173)",
  apexPlugin: "rgb(16, 124, 173)",
  campaign: "rgb(144, 80, 233)",
  contactRequest: "rgb(255, 93, 45)",
  businessHours: "rgb(59, 167, 85)",
  evernote: "rgb(59, 167, 85)",
  variationProducts: "rgb(57, 101, 71)",
  trailheadAlt: "rgb(3, 45, 96)",
  serviceTerritory: "rgb(88, 103, 232)",
  customerLifecycleAnalytics: "rgb(88, 103, 232)",
  codeSet: "rgb(16, 124, 173)",
  case: "rgb(255, 83, 138)",
  slack: "rgb(74, 21, 75)",
  currency: "rgb(147, 147, 147)",
  record: "rgb(59, 167, 85)",
  codeSetBundle: "rgb(16, 124, 173)",
  queue: "rgb(16, 124, 173)",
  scheduleObjective: "rgb(16, 124, 173)",
  contractLineItem: "rgb(59, 167, 85)",
  skillEntity: "rgb(88, 103, 232)",
  fundingAwardAdjustment: "rgb(27, 150, 255)",
  skill: "rgb(255, 93, 45)",
  operatingHours: "rgb(27, 150, 255)",
  cryptoProduct: "rgb(144, 80, 233)",
  custom: "rgb(147, 147, 147)",
  relatedList: "rgb(6, 165, 154)",
  botTraining: "rgb(16, 124, 173)",
  caseChangeStatus: "rgb(255, 93, 45)",
  insuranceConsole: "rgb(6, 165, 154)",
  dashboardComponent: "rgb(88, 103, 232)",
  incident: "rgb(182, 5, 84)",
  contract: "rgb(57, 101, 71)",
  sobject: "rgb(147, 147, 147)",
  salesCadenceTarget: "rgb(16, 124, 173)",
  photo: "rgb(147, 147, 147)",
  apps: "rgb(27, 150, 255)",
  timesheet: "rgb(88, 103, 232)",
  drafts: "rgb(27, 150, 255)",
  outcome: "rgb(255, 93, 45)",
  discounts: "rgb(57, 101, 71)",
  workOrderItem: "rgb(27, 150, 255)",
  pricebook: "rgb(144, 80, 233)",
  scanCard: "rgb(255, 93, 45)",
  note: "rgb(182, 5, 84)",
  serializedProductTransaction: "rgb(27, 150, 255)",
  shiftPattern: "rgb(255, 83, 138)",
  buyerGroup: "rgb(57, 101, 71)",
  productQuantityRules: "rgb(57, 101, 71)",
  medicationReconciliation: "rgb(16, 124, 173)",
  procedure: "rgb(27, 150, 255)",
  opportunity: "rgb(255, 93, 45)",
  news: "rgb(88, 103, 232)",
  sortPolicy: "rgb(27, 150, 255)",
  displayRichText: "rgb(147, 147, 147)",
  strategy: "rgb(59, 167, 85)",
  timePeriod: "rgb(3, 45, 96)",
  callHistory: "rgb(255, 93, 45)",
  webcart: "rgb(57, 101, 71)",
  serializedProduct: "rgb(27, 150, 255)",
  taxRate: "rgb(57, 101, 71)",
  report: "rgb(6, 165, 154)",
  customerWorkspace: "rgb(57, 101, 71)",
  groups: "rgb(27, 150, 255)",
  dataModel: "rgb(255, 83, 138)",
  dashboard: "rgb(47, 44, 183)",
  genericLoading: "rgb(147, 147, 147)",
  numberInput: "rgb(147, 147, 147)",
  toggle: "rgb(147, 147, 147)",
  address: "rgb(59, 167, 85)",
  priceBooks: "rgb(57, 101, 71)",
  entityMilestone: "rgb(255, 93, 45)",
  contractLineOutcome: "rgb(57, 101, 71)",
  wealthManagement: "rgb(6, 165, 154)",
  customers: "rgb(6, 165, 154)",
  disclosureAndCompliance: "rgb(6, 165, 154)",
  story: "rgb(16, 124, 173)",
  serviceAppointment: "rgb(88, 103, 232)",
  maintenancePlan: "rgb(16, 124, 173)",
  contractLineOutcomeData: "rgb(57, 101, 71)",
  dataIntegrationHub: "rgb(16, 124, 173)",
  personName: "rgb(88, 103, 232)",
  workPlanTemplateEntry: "rgb(6, 165, 154)",
  hierarchy: "rgb(6, 165, 154)",
  customComponentTask: "rgb(88, 103, 232)",
  partnerMarketingBudget: "rgb(6, 165, 154)",
  assetActionSource: "rgb(16, 124, 173)",
  skillRequirement: "rgb(255, 93, 45)",
  filterCriteriaRule: "rgb(16, 124, 173)",
  noCodeModel: "rgb(27, 150, 255)",
  location: "rgb(59, 167, 85)",
  promotionTiers: "rgb(57, 101, 71)",
  radioButton: "rgb(147, 147, 147)",
  avatarLoading: "rgb(147, 147, 147)",
  article: "rgb(255, 93, 45)",
  custodyEntryVerification: "rgb(6, 165, 154)",
  learnerProgram: "rgb(255, 93, 45)",
  invocableAction: "rgb(16, 124, 173)",
  device: "rgb(88, 103, 232)",
  proposition: "rgb(27, 150, 255)",
  snippets: "rgb(6, 165, 154)",
  customerPortalUsers: "rgb(27, 150, 255)",
  actionsAndButtons: "rgb(255, 93, 45)",
  recordUpdate: "rgb(255, 83, 138)",
  shiftType: "rgb(255, 83, 138)",
  water: "rgb(88, 103, 232)",
  logACall: "rgb(6, 165, 154)",
  cryptoWallet: "rgb(57, 101, 71)",
  cryptoWalletGroup: "rgb(16, 124, 173)",
  quotes: "rgb(59, 167, 85)",
  questionFeed: "rgb(255, 93, 45)",
  attributeBasedPricing: "rgb(182, 5, 84)",
  walkthroughs: "rgb(6, 165, 154)",
  kanban: "rgb(27, 150, 255)",
  workPlan: "rgb(6, 165, 154)",
  shiftTemplate: "rgb(255, 83, 138)",
  merge: "rgb(255, 93, 45)",
  expense: "rgb(47, 44, 183)",
  dataset: "rgb(144, 80, 233)",
  workSummary: "rgb(182, 5, 84)",
  shiftPreference: "rgb(255, 83, 138)",
  productConsumed: "rgb(6, 165, 154)",
  canvas: "rgb(147, 147, 147)",
  bundlesPricing: "rgb(27, 150, 255)",
  forecasts: "rgb(59, 167, 85)",
  relationship: "rgb(27, 150, 255)",
  tour: "rgb(144, 80, 233)",
  serviceResource: "rgb(88, 103, 232)",
  filter: "rgb(47, 44, 183)",
  salesPath: "rgb(16, 124, 173)",
  shiftSchedulingOperation: "rgb(255, 83, 138)",
  dataGraph: "rgb(6, 165, 154)",
  events: "rgb(27, 150, 255)",
  dataMapping: "rgb(3, 45, 96)",
  sms: "rgb(59, 167, 85)",
  impactOutcome: "rgb(6, 165, 154)",
  rtcPresence: "rgb(6, 165, 154)",
  avatar: "rgb(27, 150, 255)",
  recordDelete: "rgb(255, 83, 138)",
  solution: "rgb(59, 167, 85)",
  nftStudio: "rgb(88, 103, 232)",
  manualDiscounts: "rgb(16, 124, 173)",
  agentHome: "rgb(3, 45, 96)",
  linked: "rgb(6, 165, 154)",
  partnerFundClaim: "rgb(6, 165, 154)",
  individual: "rgb(27, 150, 255)",
  customNotification: "rgb(27, 150, 255)",
  contractPayment: "rgb(144, 80, 233)",
  dateInput: "rgb(147, 147, 147)",
  catalog: "rgb(57, 101, 71)",
  template: "rgb(27, 150, 255)",
  activationTarget: "rgb(203, 101, 255)",
  sellingModel: "rgb(144, 80, 233)",
  shipment: "rgb(88, 103, 232)",
  budgetAllocation: "rgb(16, 124, 173)",
  custodyOverride: "rgb(6, 165, 154)",
  recordSignatureTask: "rgb(255, 83, 138)",
  event: "rgb(203, 101, 255)",
  insurance: "rgb(6, 165, 154)",
  liveChatVisitor: "rgb(255, 93, 45)",
  textarea: "rgb(147, 147, 147)",
  workStep: "rgb(6, 165, 154)",
  picklistType: "rgb(147, 147, 147)",
  survey: "rgb(16, 124, 173)",
  link: "rgb(27, 150, 255)",
  messagingSession: "rgb(6, 165, 154)",
  video: "rgb(144, 80, 233)",
  listEmail: "rgb(147, 147, 147)",
  medRecRecommendation: "rgb(6, 165, 154)",
  cryptoWalletGroupItem: "rgb(144, 80, 233)",
  recycleBin: "rgb(27, 150, 255)",
  document: "rgb(147, 147, 147)",
  productTransfer: "rgb(255, 93, 45)",
  instoreLocations: "rgb(16, 124, 173)",
  recent: "rgb(27, 150, 255)",
  practitionerRole: "rgb(255, 83, 138)",
  password: "rgb(147, 147, 147)",
  datashareTarget: "rgb(255, 83, 138)",
  expenseReport: "rgb(47, 44, 183)",
  branchMerge: "rgb(255, 83, 138)",
  aiAcceleratorCard: "rgb(16, 124, 173)",
  insights: "rgb(203, 101, 255)",
  budgetPeriod: "rgb(150, 2, 199)",
  market: "rgb(57, 101, 71)",
  dropbox: "rgb(27, 150, 255)",
  unifiedHealthScore: "rgb(88, 103, 232)",
  billOfMaterials: "rgb(255, 93, 45)",
  calculatedInsights: "rgb(27, 150, 255)",
  employeeJobPosition: "rgb(27, 150, 255)",
  file: "rgb(147, 147, 147)",
  outcomeActivity: "rgb(6, 165, 154)",
  currencyInput: "rgb(147, 147, 147)",
  dataTransforms: "rgb(88, 103, 232)",
  variable: "rgb(16, 124, 173)",
  teamMember: "rgb(255, 93, 45)",
  pricingWorkspace: "rgb(57, 101, 71)",
  agentSession: "rgb(255, 93, 45)",
  guidanceCenter: "rgb(88, 103, 232)",
  cryptoCategoryWalletGroup: "rgb(182, 5, 84)",
  groupLoading: "rgb(147, 147, 147)",
  lead: "rgb(27, 150, 255)",
  email: "rgb(147, 147, 147)",
  serviceContract: "rgb(88, 103, 232)",
  decision: "rgb(255, 93, 45)",
  promotionSegments: "rgb(57, 101, 71)",
  durationDownscale: "rgb(27, 150, 255)",
  snippet: "rgb(88, 103, 232)",
  entitlementProcess: "rgb(88, 103, 232)",
  priceAdjustmentMatrix: "rgb(6, 165, 154)",
  contactList: "rgb(88, 103, 232)",
  planogram: "rgb(27, 150, 255)",
  activations: "rgb(144, 80, 233)",
  schedulingPolicy: "rgb(255, 83, 138)",
  channelProgramHistory: "rgb(6, 165, 154)",
  questionBest: "rgb(255, 93, 45)",
  collectionVariable: "rgb(16, 124, 173)",
  indicatorAssignment: "rgb(3, 45, 96)",
  procedureDetail: "rgb(6, 165, 154)",
  salesValue: "rgb(27, 150, 255)",
  knowledge: "rgb(203, 101, 255)",
  datashares: "rgb(150, 2, 199)",
  dateTime: "rgb(147, 147, 147)",
  category: "rgb(57, 101, 71)",
  maintenanceWorkRule: "rgb(16, 124, 173)",
  dataStreams: "rgb(255, 83, 138)",
  textbox: "rgb(147, 147, 147)",
  leadInsights: "rgb(27, 150, 255)",
  waits: "rgb(255, 93, 45)",
  concur: "rgb(6, 165, 154)",
  feed: "rgb(27, 150, 255)",
  sort: "rgb(47, 44, 183)",
  messagingConversation: "rgb(6, 165, 154)",
  serviceReport: "rgb(88, 103, 232)",
  iotContext: "rgb(16, 124, 173)",
  assetStatePeriod: "rgb(16, 124, 173)",
  call: "rgb(255, 93, 45)",
  collection: "rgb(255, 93, 45)",
  stage: "rgb(255, 93, 45)",
  salesCadence: "rgb(16, 124, 173)",
  productRequestLineItem: "rgb(59, 167, 85)",
  returnOrderLineItem: "rgb(6, 165, 154)",
  chart: "rgb(6, 165, 154)",
  customer: "rgb(57, 101, 71)",
  buyerGroupQualifier: "rgb(57, 101, 71)",
  quickText: "rgb(27, 150, 255)",
  home: "rgb(255, 83, 138)",
  sossession: "rgb(16, 124, 173)",
  digitalVerificationConfig: "rgb(47, 44, 183)",
  bundleConfig: "rgb(27, 150, 255)",
  titleParty: "rgb(5, 103, 100)",
  employeeAsset: "rgb(27, 150, 255)",
  processException: "rgb(255, 93, 45)",
  productWarrantyTerm: "rgb(144, 80, 233)",
  problem: "rgb(255, 93, 45)",
  stageCollection: "rgb(255, 93, 45)",
  productRequest: "rgb(59, 167, 85)",
  logging: "rgb(16, 124, 173)",
  digitalVerificationConfigGroup: "rgb(47, 44, 183)",
  assignedResource: "rgb(59, 167, 85)",
  returnOrder: "rgb(6, 165, 154)",
  poll: "rgb(27, 150, 255)",
  household: "rgb(6, 165, 154)",
  workStepTemplate: "rgb(6, 165, 154)",
  medicationStatement: "rgb(27, 150, 255)",
};

const fileTypeIcons = {
    'box user': 'user',
    html: 'html',
    wiki: 'html',
    webscraperwebpage: 'html',
    image: 'image',
    folder: 'folder',
    txt: 'txt',
    zip: 'zip',
    oleFile: 'file',
    gmailmessage: 'email',
    pdf: 'pdf',
    swf: 'flash',
    xml: 'xml',
    vsd: 'visio',
    svg: 'image',
    svm: 'word',
    rssitem: 'feed',
    doc: 'word',
    docx: 'word',
    xls: 'excel',
    ppt: 'ppt',
    video: 'video',
    youtube: 'video',
    saleforceitem: 'related_list',
    dynamicscrmitem: 'link',
    salesforceitem: 'default',
    odt: 'file',
    box: 'user',
    jiraissue: 'service_report',
    cfpage: 'article',
    cfcomment: 'question_feed',
    cfspace: 'folder',
    cfblogentry: 'insights',
    confluencespace: 'folder',
    exchangemessage: 'email',
    exchangeappointment: 'calendar',
    exchangenote: 'picklist_type',
    exchangetask: 'case',
    exchangeperson: 'user',
    activedirperson: 'user',
    exchangeactivity: 'picklist_type',
    exchangecalendarmessage: 'calendar',
    exchangedocument: 'file',
    exchangedsn: 'email',
    exchangefreebusy: 'custom',
    exchangegroup: 'user',
    exchangemdn: 'custom',
    exchangerecallmessage: 'email',
    exchangerecallreport: 'email',
    exchangeobject: 'custom',
    exchangerssfeed: 'picklist_type',
    exchangejunkmessage: 'email',
    exchangeofficecom: 'picklist_type',
    lithiummessage: 'feedback',
    lithiumthread: 'feedback',
    lithiumboard: 'groups',
    lithiumcategory: 'related_list',
    lithiumcommunity: 'team_member',
    sn_hr_core_case: 'case',
    sc_cat_item: 'custom',
    sn_customerservice_case: 'case',
    kb_social_qa_answer: 'picklist_type',
    kb_social_qa_question: 'picklist_type',
    kb_social_qa_comment: 'picklist_type',
    incident: 'case',
    kb_knowledge: 'knowledge',
    spportal: 'html',
    spsite: 'link',
    spuserprofile: 'user',
    sparea: 'custom',
    spannouncement: 'picklist_type',
    spannouncementlist: 'picklist_type',
    spcontact: 'user',
    spcontactlist: 'user',
    spcustomlist: 'custom',
    spdiscussionboard: 'picklist_type',
    spdiscussionboardlist: 'picklist_type',
    spdocumentlibrarylist: 'folder',
    spevent: 'calendar',
    speventlist: 'calendar',
    spformlibrarylist: 'folder',
    spissue: 'link',
    spissuelist: 'link',
    splink: 'link',
    splinklist: 'link',
    sppicturelibrarylist: 'images',
    spsurvey: 'custom',
    spsurveylist: 'custom',
    sptask: 'calendar',
    sptasklist: 'calendar',
    spagenda: 'calendar',
    spagendalist: 'calendar',
    spattendee: 'user',
    spattendeelist: 'user',
    spcustomgridlist: 'custom',
    spdecision: 'custom',
    spdecisionlist: 'custom',
    spobjective: 'custom',
    spobjectivelist: 'custom',
    sptextbox: 'picklist_type',
    sptextboxlist: 'picklist_type',
    spthingstobring: 'custom',
    spthingstobringlist: 'custom',
    sparealisting: 'custom',
    spmeetingserie: 'calendar',
    spmeetingserielist: 'calendar',
    spsitedirectory: 'folder',
    spsitedirectorylist: 'folder',
    spdatasource: 'knowledge',
    spdatasourcelist: 'knowledge',
    splisttemplatecataloglist: 'folder',
    spwebpartcataloglist: 'folder',
    spwebtemplatecataloglist: 'folder',
    spworkspacepagelist: 'folder',
    spunknownlist: 'custom',
    spadministratortask: 'calendar',
    spadministratortasklist: 'calendar',
    spareadocumentlibrarylist: 'folder',
    spblogcategory: 'picklist_type',
    spblogcategorylist: 'picklist_type',
    spblogcomment: 'picklist_type',
    spblogcommentlist: 'picklist_type',
    spblogpost: 'picklist_type',
    spblogpostlist: 'picklist_type',
    spdataconnectionlibrarylist: 'knowledge',
    spdistributiongroup: 'custom',
    spdistributiongrouplist: 'custom',
    spipfslist: 'knowledge',
    spkeyperformanceindicator: 'custom',
    spkeyperformanceindicatorlist: 'custom',
    splanguagesandtranslator: 'picklist_type',
    splanguagesandtranslatorlist: 'picklist_type',
    spmasterpagescataloglist: 'folder',
    spnocodeworkflowlibrarylist: 'folder',
    spprojecttask: 'case',
    spprojecttasklist: 'case',
    sppublishingpageslibrarylist: 'folder',
    spreportdocumentlibrarylist: 'folder',
    spreportlibrarylist: 'folder',
    spslidelibrarylist: 'folder',
    sptab: 'custom',
    sptablist: 'custom',
    sptranslationmanagementlibrarylist: 'folder',
    spuserinformation: 'user',
    spuserinformationlist: 'user',
    spwikipagelibrarylist: 'related_list',
    spworkflowhistory: 'calendar',
    spworkflowhistorylist: 'calendar',
    spworkflowprocess: 'custom',
    spworkflowprocesslist: 'custom',
    sppublishingimageslibrarylist: 'folder',
    spcirculation: 'custom',
    spcirculationlist: 'custom',
    spdashboardslibrarylist: 'folder',
    spdataconnectionforperformancepointlibrarylist: 'folder',
    sphealthreport: 'picklist_type',
    sphealthreportlist: 'picklist_type',
    sphealthrule: 'picklist_type',
    sphealthrulelist: 'picklist_type',
    spimedictionary: 'folder',
    spimedictionarylist: 'folder',
    spperformancepointcontent: 'picklist_type',
    spperformancepointcontentlist: 'picklist_type',
    spphonecallmemo: 'picklist_type',
    spphonecallmemolist: 'picklist_type',
    sprecordlibrarylist: 'folder',
    spresource: 'file',
    spresourcelist: 'file',
    spprocessdiagramslibrarylist: 'folder',
    spsitethemeslibrarylist: 'folder',
    spsolutionslibrarylist: 'folder',
    spwfpublibrarylist: 'folder',
    spwhereabout: 'custom',
    spwhereaboutlist: 'custom',
    spdocumentlink: 'link',
    spdocumentset: 'folder',
    spmicrofeedpost: 'picklist_type',
    spmicrofeedlist: 'picklist_type',
    splistfolder: 'folder',
    youtubevideo: 'video',
    youtubeplaylistitem: 'video',
    youtubeplaylist: 'video',
};

const objectTypeIcons = {
    people: 'user',
    message: 'email',
    feed: 'feed',
    thread: 'feedback',
    file: 'file',
    board: 'picklist_type',
    category: 'picklist_type',
    account: 'account',
    annotation: 'file',
    campaign: 'campaign',
    case: 'case',
    contact: 'contact',
    contract: 'contract',
    event: 'event',
    email: 'email',
    goal: 'goals',
    incident: 'case',
    invoice: 'picklist_type',
    lead: 'lead',
    list: 'related_list',
    solution: 'solution',
    report: 'report',
    task: 'task',
    user: 'user',
    attachment: 'attachment',
    casecomment: 'feedback',
    opportunity: 'opportunity',
    opportunityproduct: 'opportunity',
    feeditem: 'post',
    feedcomment: 'post',
    note: 'note',
    product: 'product',
    partner: 'user',
    queueitem: 'picklist_type',
    quote: 'quotes',
    salesliterature: 'article',
    salesorder: 'orders',
    service: 'service_contract',
    socialprofile: 'social',
    kbdocumentation: 'knowledge',
    kbtechnicalarticle: 'knowledge',
    kbsolution: 'solution',
    kbknowledgearticle: 'knowledge',
    kbattachment: 'attachment',
    kbarticle: 'article',
    kbarticlecomment: 'feedback',
    knowledgearticle: 'article',
    topic: 'topic',
    dashboard: 'dashboard',
    contentversion: 'document',
    collaborationgroup: 'groups',
    phonecall: 'call',
    appointment: 'service_appointment',
};

const atomicResultIconCss = ":host{display:inline_block;width:100%;height:auto}:host atomic-icon{width:100%}";
const AtomicResultIconStyle0 = atomicResultIconCss;

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const AtomicResultIcon$1 = /*@__PURE__*/ proxyCustomElement(class AtomicResultIcon extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.license = "Salesforce's specific icons originally from lightning design system (https://www.lightningdesignsystem.com/icons/). Icons licensed under Creative Commons Attribution-NoDerivatives 4.0 (https://github.com/salesforce-ux/design-system).";
    }
    get icon() {
        const fileTypeValue = ow.getResultProperty(this.result, 'filetype');
        const objectTypeValue = ow.getResultProperty(this.result, 'objecttype');
        const fileType = fileTypeIcons[fileTypeValue === null || fileTypeValue === void 0 ? void 0 : fileTypeValue.toLowerCase()];
        const objectType = objectTypeIcons[objectTypeValue === null || objectTypeValue === void 0 ? void 0 : objectTypeValue.toLowerCase()];
        if (!fileType && !objectType) {
            return null;
        }
        return objectType || fileType;
    }
    renderIcon() {
        const icon = this.icon || 'document';
        const backgroundColor = bgStandard_common[snakeToCamel(icon)] || 'transparent';
        return (h("atomic-icon", { icon: 'assets://' + icon, class: icon, title: icon, style: { backgroundColor } }));
    }
    render() {
        return this.icon ? this.renderIcon() : h("slot", null, this.renderIcon());
    }
    get host() { return this; }
    static get style() { return AtomicResultIconStyle0; }
}, [1, "atomic-result-icon"]);
__decorate([
    ResultContext()
], AtomicResultIcon$1.prototype, "result", void 0);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atomic-result-icon", "atomic-component-error", "atomic-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "atomic-result-icon":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtomicResultIcon$1);
            }
            break;
        case "atomic-component-error":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "atomic-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const AtomicResultIcon = AtomicResultIcon$1;
const defineCustomElement = defineCustomElement$1;

export { AtomicResultIcon, defineCustomElement };

//# sourceMappingURL=atomic-result-icon.js.map