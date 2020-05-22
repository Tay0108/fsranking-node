import { BuildOptions, DataTypes, Model, Sequelize } from "sequelize";

export interface SocialMediaAttributes {
  playerId: number;
  facebookUrl: string;
  instagramUrl: string;
  youtubeUrl: string;
}

export interface SocialMediaModel
  extends Model<SocialMediaAttributes>,
    SocialMediaAttributes {}
export class SocialMediaModel extends Model<
  SocialMediaModel,
  SocialMediaAttributes
> {}

export type SocialMediaStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): SocialMediaModel;
};

export function socialMediaFactory(sequelize: Sequelize): SocialMediaStatic {
  return <SocialMediaStatic>sequelize.define("social_media", {
    playerId: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
    },
    facebookUrl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    instagramUrl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    youtubeUrl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  });
}
