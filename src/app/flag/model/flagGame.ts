import {Player} from '../../models/player';

export interface FlagGame {
  id: string;
  player: Player;
  percentage: number;
  scoreTime: number;
}
