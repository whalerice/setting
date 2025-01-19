export default defineNuxtRouteMiddleware((to, from) => {
  // const auth = useCookie("auth");
  // const authRequired = ["/account", "/blog"];

  // // console.log(`${to.path} -> ${from.path}`);

  // if (authRequired.includes(to.path) && !auth.value) {
  //   return navigateTo("/login");
  // }

  // return abortNavigation();
  return true;
});
