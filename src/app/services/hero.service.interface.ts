export interface HeroesETO {
    _embedded: HeroesETOEmbedded;
    _links:    HeroesETOLinks;
}

export interface HeroesETOEmbedded {
    heroes: HeroETO[];
}

export interface HeroETO {
    firstName: string;
    lastName:  string;
    heroName:  string;
    heroPower: string;
    id:        number;
    _embedded?: HeroEmbedded;
    _links?:    HeroLinks;
}

export interface HeroEmbedded {
    missions: Mission[];
}

export interface Mission {
    instructions: string;
    id:           number;
}

export interface HeroLinks {
    self:     Profile;
    hero:     MissionsClass;
    missions: MissionsClass;
}

export interface MissionsClass {
    href:      string;
    templated: boolean;
}

export interface Profile {
    href: string;
}

export interface HeroesETOLinks {
    self:    Profile;
    profile: Profile;
    search:  Profile;
}