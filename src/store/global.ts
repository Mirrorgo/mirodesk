import create from "zustand";

type Config = {
  consoleConfig: {
    theme: string;
    sites: {
      domain: string;
      name: string;
    }[];
  };
};
interface ConfigState {
  configData: Config;
  setConfigData: (data: Config) => void;
}

const useConfigStore = create<ConfigState>((set) => ({
  configData: {
    consoleConfig: {
      theme: "default",
      sites: [
        {
          domain: "www.google.com",
          name: "google",
        },
        {
          domain: "https://cowtransfer.com/",
          name: "奶牛快传",
        },
      ],
    },
  },
  setConfigData: (data) => set({ configData: data }),
}));

export default useConfigStore;
