import OnePasswordMetaItem from "../OnePasswordMetaItem.dto";

export enum AppVersion {
  Automatic = "automatic",
  V8 = "onepassword8",
  V7 = "onepassword7",
}

export interface Preferences {
  appVersion: AppVersion;
}

export interface OnePassword {
  cliFolder: string;
  cliRequiredMessage: string;
  openAndFill: (metaItem: OnePasswordMetaItem) => Promise<void>;
  edit: (metaItem: OnePasswordMetaItem) => Promise<void>;
  view: (metaItem: OnePasswordMetaItem) => Promise<void>;
}
