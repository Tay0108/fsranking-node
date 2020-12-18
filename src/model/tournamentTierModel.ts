import { BuildOptions, DataTypes, Model, Sequelize } from "sequelize";

export interface TournamentTierAttributes {
  id: number,
  name: string,
  weight: number
}

export interface TournamentTierModel
  extends Model<TournamentTierAttributes>,
    TournamentTierAttributes {}
export class TournamentTierModel extends Model<
  TournamentTierModel,
  TournamentTierAttributes
> {}

export type TournamentTierStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): TournamentTierModel;
};

export function tournamentTierFactory(
  sequelize: Sequelize
): TournamentTierStatic {
  return <TournamentTierStatic>sequelize.define("tournament_tier", {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    weight: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    }
  });
}
