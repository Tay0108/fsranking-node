export interface CategoryResult {
  playerId: number;
  place: number;
}

export interface PlayerCategoryStatistics {
  starts: number;
  podiums: number;
  victories: number;
}

export interface PlayerStatistics {
  [key: string]: PlayerCategoryStatistics;
}
