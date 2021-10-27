import { HeroETO } from "../hero/hero.service.interface";

export interface MissionsETO {
    _embedded: MissionsETOEmbedded;
    _links:    MissionsETOLinks;
}

export interface MissionsETOEmbedded {
    missions: MissionETO[];
}

export interface MissionETO {
    instructions: string;
    _embedded?:   MissionEmbedded;
    _links?:       MissionLinks;
}

export interface MissionEmbedded {
    heroes: HeroETO[];
}


export interface MissionLinks {
    self:    Profile;
    mission: HeroesLink;
    heroes:  HeroesLink;
}

export interface HeroesLink {
    href:      string;
    templated: boolean;
}

export interface Profile {
    href: string;
}

export interface MissionsETOLinks {
    self:    Profile;
    profile: Profile;
}
