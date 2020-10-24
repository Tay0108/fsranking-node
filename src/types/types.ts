export interface CategoryResult {
  playerId: number;
  place: number;
}

export interface PlayerStatistics {
  starts: number;
  podiums: number;
  victories: number;
}

export interface PlayerHistoryEntry {
  place: number;
  tournamentName: string;
  date: string;
  points: number;
}
