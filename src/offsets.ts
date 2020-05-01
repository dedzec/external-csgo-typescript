import {EMemoryTypes} from "./interfaces";

export const dumpedOffsets = {
    "timestamp": 1587108956,
    "signatures": {
        "anim_overlays": 10624,
        "clientstate_choked_commands": 19752,
        "clientstate_delta_ticks": 372,
        "clientstate_last_outgoing_command": 19748,
        "clientstate_net_channel": 156,
        "convar_name_hash_table": 192760,
        "dwClientState": 5807564,
        "dwClientState_GetLocalPlayer": 384,
        "dwClientState_IsHLTV": 19776,
        "dwClientState_Map": 652,
        "dwClientState_MapDirectory": 392,
        "dwClientState_MaxPlayer": 904,
        "dwClientState_PlayerInfo": 21176,
        "dwClientState_State": 264,
        "dwClientState_ViewAngles": 19848,
        "dwEntityList": 81017524,
        "dwForceAttack": 51859592,
        "dwForceAttack2": 51859604,
        "dwForceBackward": 51859676,
        "dwForceForward": 51859640,
        "dwForceJump": 85907280,
        "dwForceLeft": 51859664,
        "dwForceRight": 51859544,
        "dwGameDir": 6456824,
        "dwGameRulesProxy": 86379052,
        "dwGetAllClasses": 13983516,
        "dwGlobalVars": 5806800,
        "dwGlowObjectManager": 86554752,
        "dwInput": 85545056,
        "dwInterfaceLinkList": 9411316,
        "dwLocalPlayer": 13826948,
        "dwMouseEnable": 13850408,
        "dwMouseEnablePtr": 13850360,
        "dwPlayerResource": 51852284,
        "dwRadarBase": 85428260,
        "dwSensitivity": 13850052,
        "dwSensitivityPtr": 13850008,
        "dwSetClanTag": 564736,
        "dwViewMatrix": 80958452,
        "dwWeaponTable": 85547812,
        "dwWeaponTableIndex": 12892,
        "dwYawPtr": 13849480,
        "dwZoomSensitivityRatioPtr": 13870544,
        "dwbSendPackets": 867418,
        "dwppDirect3DDevice9": 684080,
        "find_hud_element": 776847984,
        "force_update_spectator_glow": 3772626,
        "interface_engine_cvar": 256492,
        "is_c4_owner": 3823760,
        "m_bDormant": 237,
        "m_flSpawnTime": 41824,
        "m_pStudioHdr": 10572,
        "m_pitchClassPtr": 85428936,
        "m_yawClassPtr": 13849480,
        "model_ambient_min": 5819884,
        "set_abs_angles": 1896752,
        "set_abs_origin": 1896304
    },
    "netvars": {
        "cs_gamerules_data": 0,
        "m_ArmorValue": 45928,
        "m_Collision": 800,
        "m_CollisionGroup": 1140,
        "m_Local": 12220,
        "m_MoveType": 604,
        "m_OriginalOwnerXuidHigh": 12740,
        "m_OriginalOwnerXuidLow": 12736,
        "m_SurvivalGameRuleDecisionTypes": 4896,
        "m_SurvivalRules": 3320,
        "m_aimPunchAngle": 12332,
        "m_aimPunchAngleVel": 12344,
        "m_angEyeAnglesX": 45932,
        "m_angEyeAnglesY": 45936,
        "m_bBombPlanted": 2461,
        "m_bFreezePeriod": 32,
        "m_bGunGameImmunity": 14640,
        "m_bHasDefuser": 45944,
        "m_bHasHelmet": 45916,
        "m_bInReload": 12965,
        "m_bIsDefusing": 14620,
        "m_bIsQueuedMatchmaking": 116,
        "m_bIsScoped": 14612,
        "m_bIsValveDS": 117,
        "m_bSpotted": 2365,
        "m_bSpottedByMask": 2432,
        "m_bStartedArming": 13296,
        "m_bUseCustomAutoExposureMax": 2521,
        "m_bUseCustomAutoExposureMin": 2520,
        "m_bUseCustomBloomScale": 2522,
        "m_clrRender": 112,
        "m_dwBoneMatrix": 9896,
        "m_fAccuracyPenalty": 13104,
        "m_fFlags": 260,
        "m_flC4Blow": 10640,
        "m_flCustomAutoExposureMax": 2528,
        "m_flCustomAutoExposureMin": 2524,
        "m_flCustomBloomScale": 2532,
        "m_flDefuseCountDown": 10668,
        "m_flDefuseLength": 10664,
        "m_flFallbackWear": 12752,
        "m_flFlashDuration": 42000,
        "m_flFlashMaxAlpha": 41996,
        "m_flLastBoneSetupTime": 10532,
        "m_flLowerBodyYawTarget": 14972,
        "m_flNextAttack": 11632,
        "m_flNextPrimaryAttack": 12856,
        "m_flSimulationTime": 616,
        "m_flTimerLength": 10644,
        "m_hActiveWeapon": 12024,
        "m_hMyWeapons": 11768,
        "m_hObserverTarget": 13196,
        "m_hOwner": 10700,
        "m_hOwnerEntity": 332,
        "m_iAccountID": 12232,
        "m_iClip1": 12900,
        "m_iCompetitiveRanking": 6788,
        "m_iCompetitiveWins": 7048,
        "m_iCrosshairId": 46036,
        "m_iEntityQuality": 12204,
        "m_iFOV": 12772,
        "m_iFOVStart": 12776,
        "m_iGlowIndex": 42024,
        "m_iHealth": 256,
        "m_iItemDefinitionIndex": 12202,
        "m_iItemIDHigh": 12224,
        "m_iMostRecentModelBoneCounter": 9872,
        "m_iObserverMode": 13176,
        "m_iShotsFired": 41856,
        "m_iState": 12888,
        "m_iTeamNum": 244,
        "m_lifeState": 607,
        "m_nFallbackPaintKit": 12744,
        "m_nFallbackSeed": 12748,
        "m_nFallbackStatTrak": 12756,
        "m_nForceBone": 9868,
        "m_nTickBase": 13360,
        "m_rgflCoordinateFrame": 1092,
        "m_szCustomName": 12348,
        "m_szLastPlaceName": 13748,
        "m_thirdPersonViewAngles": 12760,
        "m_vecOrigin": 312,
        "m_vecVelocity": 276,
        "m_vecViewOffset": 264,
        "m_viewPunchAngle": 12320
    }
};


export interface Signatures {
    anim_overlays: number;
    clientstate_choked_commands: number;
    clientstate_delta_ticks: number;
    clientstate_last_outgoing_command: number;
    clientstate_net_channel: number;
    convar_name_hash_table: number;
    dwClientState: number;
    dwClientState_GetLocalPlayer: number;
    dwClientState_IsHLTV: number;
    dwClientState_Map: number;
    dwClientState_MapDirectory: number;
    dwClientState_MaxPlayer: number;
    dwClientState_PlayerInfo: number;
    dwClientState_State: number;
    dwClientState_ViewAngles: number;
    dwEntityList: number;
    dwForceAttack: number;
    dwForceAttack2: number;
    dwForceBackward: number;
    dwForceForward: number;
    dwForceJump: number;
    dwForceLeft: number;
    dwForceRight: number;
    dwGameDir: number;
    dwGameRulesProxy: number;
    dwGetAllClasses: number;
    dwGlobalVars: number;
    dwGlowObjectManager: number;
    dwInput: number;
    dwInterfaceLinkList: number;
    dwLocalPlayer: number;
    dwMouseEnable: number;
    dwMouseEnablePtr: number;
    dwPlayerResource: number;
    dwRadarBase: number;
    dwSensitivity: number;
    dwSensitivityPtr: number;
    dwSetClanTag: number;
    dwViewMatrix: number;
    dwWeaponTable: number;
    dwWeaponTableIndex: number;
    dwYawPtr: number;
    dwZoomSensitivityRatioPtr: number;
    dwbSendPackets: number;
    dwppDirect3DDevice9: number;
    find_hud_element: number;
    force_update_spectator_glow: number;
    interface_engine_cvar: number;
    is_c4_owner: number;
    m_bDormant: number;
    m_flSpawnTime: number;
    m_pStudioHdr: number;
    m_pitchClassPtr: number;
    m_yawClassPtr: number;
    model_ambient_min: number;
    set_abs_angles: number;
    set_abs_origin: number;
}

export interface Netvars {
    cs_gamerules_data: number;
    m_ArmorValue: number;
    m_Collision: number;
    m_CollisionGroup: number;
    m_Local: number;
    m_MoveType: number;
    m_OriginalOwnerXuidHigh: number;
    m_OriginalOwnerXuidLow: number;
    m_SurvivalGameRuleDecisionTypes: number;
    m_SurvivalRules: number;
    m_aimPunchAngle: number;
    m_aimPunchAngleVel: number;
    m_angEyeAnglesX: number;
    m_angEyeAnglesY: number;
    m_bBombPlanted: number;
    m_bFreezePeriod: number;
    m_bGunGameImmunity: number;
    m_bHasDefuser: number;
    m_bHasHelmet: number;
    m_bInReload: number;
    m_bIsDefusing: number;
    m_bIsQueuedMatchmaking: number;
    m_bIsScoped: number;
    m_bIsValveDS: number;
    m_bSpotted: number;
    m_bSpottedByMask: number;
    m_bStartedArming: number;
    m_bUseCustomAutoExposureMax: number;
    m_bUseCustomAutoExposureMin: number;
    m_bUseCustomBloomScale: number;
    m_clrRender: number;
    m_dwBoneMatrix: number;
    m_fAccuracyPenalty: number;
    m_fFlags: number;
    m_flC4Blow: number;
    m_flCustomAutoExposureMax: number;
    m_flCustomAutoExposureMin: number;
    m_flCustomBloomScale: number;
    m_flDefuseCountDown: number;
    m_flDefuseLength: number;
    m_flFallbackWear: number;
    m_flFlashDuration: number;
    m_flFlashMaxAlpha: number;
    m_flLastBoneSetupTime: number;
    m_flLowerBodyYawTarget: number;
    m_flNextAttack: number;
    m_flNextPrimaryAttack: number;
    m_flSimulationTime: number;
    m_flTimerLength: number;
    m_hActiveWeapon: number;
    m_hMyWeapons: number;
    m_hObserverTarget: number;
    m_hOwner: number;
    m_hOwnerEntity: number;
    m_iAccountID: number;
    m_iClip1: number;
    m_iCompetitiveRanking: number;
    m_iCompetitiveWins: number;
    m_iCrosshairId: number;
    m_iEntityQuality: number;
    m_iFOV: number;
    m_iFOVStart: number;
    m_iGlowIndex: number;
    m_iHealth: number;
    m_iItemDefinitionIndex: number;
    m_iItemIDHigh: number;
    m_iMostRecentModelBoneCounter: number;
    m_iObserverMode: number;
    m_iShotsFired: number;
    m_iState: number;
    m_iTeamNum: number;
    m_lifeState: number;
    m_nFallbackPaintKit: number;
    m_nFallbackSeed: number;
    m_nFallbackStatTrak: number;
    m_nForceBone: number;
    m_nTickBase: number;
    m_rgflCoordinateFrame: number;
    m_szCustomName: number;
    m_szLastPlaceName: number;
    m_thirdPersonViewAngles: number;
    m_vecOrigin: number;
    m_vecVelocity: number;
    m_vecViewOffset: number;
    m_viewPunchAngle: number;
}
export const MemoryTypesForNetvars =  {
    cs_gamerules_data : EMemoryTypes.vector3,
    m_ArmorValue : EMemoryTypes.vector3,
    m_Collision : EMemoryTypes.vector3,
    m_CollisionGroup : EMemoryTypes.vector3,
    m_Local : EMemoryTypes.vector3,
    m_MoveType : EMemoryTypes.vector3,
    m_OriginalOwnerXuidHigh : EMemoryTypes.vector3,
    m_OriginalOwnerXuidLow : EMemoryTypes.vector3,
    m_SurvivalGameRuleDecisionTypes : EMemoryTypes.vector3,
    m_SurvivalRules : EMemoryTypes.vector3,
    m_aimPunchAngle : EMemoryTypes.vector3,
    m_aimPunchAngleVel : EMemoryTypes.vector3,
    m_angEyeAnglesX : EMemoryTypes.float,
    m_angEyeAnglesY : EMemoryTypes.float,
    m_bBombPlanted : EMemoryTypes.boolean,
    m_bFreezePeriod : EMemoryTypes.int32,
    m_bGunGameImmunity : EMemoryTypes.vector3,
    m_bHasDefuser : EMemoryTypes.boolean,
    m_bHasHelmet : EMemoryTypes.boolean,
    m_bInReload : EMemoryTypes.boolean,
    m_bIsDefusing : EMemoryTypes.boolean,
    m_bIsQueuedMatchmaking : EMemoryTypes.boolean,
    m_bIsScoped : EMemoryTypes.boolean,
    m_bIsValveDS : EMemoryTypes.boolean,
    m_bSpotted : EMemoryTypes.boolean,
    m_bSpottedByMask : EMemoryTypes.boolean,
    m_bStartedArming : EMemoryTypes.boolean,
    m_bUseCustomAutoExposureMax : EMemoryTypes.boolean,
    m_bUseCustomAutoExposureMin : EMemoryTypes.boolean,
    m_bUseCustomBloomScale : EMemoryTypes.boolean,
    m_clrRender : EMemoryTypes.vector3,
    m_dwBoneMatrix : EMemoryTypes.dword,
    m_fAccuracyPenalty : EMemoryTypes.float,
    m_fFlags : EMemoryTypes.float,
    m_flC4Blow : EMemoryTypes.float,
    m_flCustomAutoExposureMax : EMemoryTypes.float,
    m_flCustomAutoExposureMin : EMemoryTypes.float,
    m_flCustomBloomScale : EMemoryTypes.float,
    m_flDefuseCountDown : EMemoryTypes.float,
    m_flDefuseLength : EMemoryTypes.float,
    m_flFallbackWear : EMemoryTypes.float,
    m_flFlashDuration : EMemoryTypes.float,
    m_flFlashMaxAlpha : EMemoryTypes.float,
    m_flLastBoneSetupTime : EMemoryTypes.float,
    m_flLowerBodyYawTarget : EMemoryTypes.float,
    m_flNextAttack : EMemoryTypes.float,
    m_flNextPrimaryAttack : EMemoryTypes.float,
    m_flSimulationTime : EMemoryTypes.float,
    m_flTimerLength : EMemoryTypes.float,
    m_hActiveWeapon : EMemoryTypes.dword,
    m_hMyWeapons : EMemoryTypes.dword,
    m_hObserverTarget : EMemoryTypes.dword,
    m_hOwner : EMemoryTypes.dword,
    m_hOwnerEntity : EMemoryTypes.dword,
    m_iAccountID : EMemoryTypes.int,
    m_iClip1 : EMemoryTypes.int,
    m_iCompetitiveRanking : EMemoryTypes.int,
    m_iCompetitiveWins : EMemoryTypes.int,
    m_iCrosshairId : EMemoryTypes.int,
    m_iEntityQuality : EMemoryTypes.int,
    m_iFOV : EMemoryTypes.int,
    m_iFOVStart : EMemoryTypes.int,
    m_iGlowIndex : EMemoryTypes.int,
    m_iHealth : EMemoryTypes.int,
    m_iItemDefinitionIndex : EMemoryTypes.int,
    m_iItemIDHigh : EMemoryTypes.int,
    m_iMostRecentModelBoneCounter : EMemoryTypes.int,
    m_iObserverMode : EMemoryTypes.int,
    m_iShotsFired : EMemoryTypes.int,
    m_iState : EMemoryTypes.int,
    m_iTeamNum : EMemoryTypes.int,
    m_lifeState : EMemoryTypes.int,
    m_nFallbackPaintKit : EMemoryTypes.vector3,
    m_nFallbackSeed : EMemoryTypes.vector3,
    m_nFallbackStatTrak : EMemoryTypes.vector3,
    m_nForceBone : EMemoryTypes.vector3,
    m_nTickBase : EMemoryTypes.vector3,
    m_rgflCoordinateFrame : EMemoryTypes.vector3,
    m_szCustomName : EMemoryTypes.vector3,
    m_szLastPlaceName : EMemoryTypes.vector3,
    m_thirdPersonViewAngles : EMemoryTypes.vector3,
    m_vecOrigin: EMemoryTypes.vector3,
    m_vecVelocity : EMemoryTypes.vector3,
    m_vecViewOffset : EMemoryTypes.vector3,
    m_viewPunchAngle : EMemoryTypes.vector3,
};


export const TypesForSignatures = {
    anim_overlays: EMemoryTypes.dword,
    clientstate_choked_commands: EMemoryTypes.dword,
    clientstate_delta_ticks: EMemoryTypes.dword,
    clientstate_last_outgoing_command: EMemoryTypes.dword,
    clientstate_net_channel: EMemoryTypes.dword,
    convar_name_hash_table: EMemoryTypes.dword,
    dwClientState: EMemoryTypes.dword,
    dwClientState_GetLocalPlayer: EMemoryTypes.int,
    dwClientState_IsHLTV: EMemoryTypes.boolean,
    dwClientState_Map: EMemoryTypes.string,
    dwClientState_MapDirectory: EMemoryTypes.string,
    dwClientState_MaxPlayer: EMemoryTypes.int,
    dwClientState_PlayerInfo: EMemoryTypes.dword,
    dwClientState_State: EMemoryTypes.dword,
    dwClientState_ViewAngles: EMemoryTypes.vector3,
    dwEntityList: EMemoryTypes.dword,
    dwForceAttack: EMemoryTypes.dword,
    dwForceAttack2: EMemoryTypes.dword,
    dwForceBackward: EMemoryTypes.dword,
    dwForceForward: EMemoryTypes.dword,
    dwForceJump: EMemoryTypes.dword,
    dwForceLeft: EMemoryTypes.dword,
    dwForceRight: EMemoryTypes.dword,
    dwGameDir: EMemoryTypes.dword,
    dwGameRulesProxy: EMemoryTypes.dword,
    dwGetAllClasses: EMemoryTypes.dword,
    dwGlobalVars: EMemoryTypes.dword,
    dwGlowObjectManager: EMemoryTypes.dword,
    dwInput: EMemoryTypes.dword,
    dwInterfaceLinkList: EMemoryTypes.dword,
    dwLocalPlayer: EMemoryTypes.dword,
    dwMouseEnable: EMemoryTypes.dword,
    dwMouseEnablePtr: EMemoryTypes.dword,
    dwPlayerResource: EMemoryTypes.dword,
    dwRadarBase: EMemoryTypes.dword,
    dwSensitivity: EMemoryTypes.dword,
    dwSensitivityPtr: EMemoryTypes.dword,
    dwSetClanTag: EMemoryTypes.dword,
    dwViewMatrix: EMemoryTypes.dword,
    dwWeaponTable: EMemoryTypes.dword,
    dwWeaponTableIndex: EMemoryTypes.dword,
    dwYawPtr: EMemoryTypes.dword,
    dwZoomSensitivityRatioPtr: EMemoryTypes.dword,
    dwbSendPackets: EMemoryTypes.dword,
    dwppDirect3DDevice9: EMemoryTypes.dword,
    find_hud_element: EMemoryTypes.dword,
    force_update_spectator_glow: EMemoryTypes.dword,
    interface_engine_cvar: EMemoryTypes.dword,
    is_c4_owner: EMemoryTypes.dword,
    m_bDormant: EMemoryTypes.dword,
    m_flSpawnTime: EMemoryTypes.dword,
    m_pStudioHdr: EMemoryTypes.dword,
    m_pitchClassPtr: EMemoryTypes.dword,
    m_yawClassPtr: EMemoryTypes.dword,
    model_ambient_min: EMemoryTypes.dword,
    set_abs_angles: EMemoryTypes.dword,
    set_abs_origin: EMemoryTypes.dword,
};

export interface RootObject {
    timestamp: number;
    signatures: Signatures;
    netvars: Netvars;
}

