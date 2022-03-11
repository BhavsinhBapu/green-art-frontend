import React, { SetStateAction } from "react";
import {
  UserSettingsApi,
  Google2faSetupApi,
  LanguageListApi,
} from "service/settings";

export const UserSettingsAction = async (
  setSettings: React.Dispatch<SetStateAction<object>>,
  setLanguageList: React.Dispatch<
    SetStateAction<
      Array<
        [
          {
            lang: string;
            key: string;
          }
        ]
      >
    >
  >
) => {
  const settings = await UserSettingsApi();
  const language = await LanguageListApi();
  setSettings(settings.data);
  setLanguageList(language.data);
  console.log(language.data, "language data");
};
