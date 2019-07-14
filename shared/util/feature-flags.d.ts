export type FeatureFlags = {
  admin: boolean
  airdrop: boolean
  chatIndexProfilingEnabled: boolean
  conflictResolution: boolean
  crypto: boolean
  dbCleanEnabled: boolean
  fastAccountSwitch: boolean
  foldersInProfileTab: boolean
  kbfsOfflineMode: boolean
  moveOrCopy: boolean
  newTeamBuildingForChatAllowMakeTeam: boolean
  outOfDateBanner: boolean
  plansEnabled: boolean
  proofProviders: boolean
  sbsContacts: boolean
  stellarExternalPartners: boolean
  lagRadar: boolean
}

declare const ff: FeatureFlags
export default ff
