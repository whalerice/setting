import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.capacitor.web", // 앱 아이디
  appName: "capacitor-web", // 앱 이름
  webDir: "dist", // 빌드 경로
  plugins: {
    GoogleAuth: {
      clientId: "", // 구글 클라이언트 아이디
      scopes: ["profile", "email"], // 구글 클라이언트 스코프
      serverClientId: "", // 구글 서버 클라이언트 아이디
      forceCodeForRefreshToken: true, // 리프레시 토큰 강제 코드 발급
    },
    SplashScreen: {
      launchShowDuration: 3000,
      launchAutoHide: true,
      launchFadeOutDuration: 3000,
      backgroundColor: "#8aff7a",
      androidSplashResourceName: "splash",
      androidScaleType: "CENTER_CROP",
      showSpinner: true,
      androidSpinnerStyle: "large",
      iosSpinnerStyle: "large",
      spinnerColor: "#8f149a",
      splashFullScreen: true,
      splashImmersive: true,
      layoutName: "launch_screen",
      useDialog: true,
    },
  },
};

export default config;
