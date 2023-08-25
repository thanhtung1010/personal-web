export class AppLoadingHelper {
  public static Toggle(enable: boolean) {
      const loading = document.getElementsByClassName('main-loading');
      if (loading[0] !== undefined) {
          if (enable) {
              loading[0].setAttribute('style', 'display: flex');
          } else {
              loading[0].setAttribute('style', 'display: none');
          }
      }
  }
  public static SetText(text: string) {
      const loading = document.getElementsByClassName('main-loading-text');
      if (loading[0] !== undefined) {
          loading[0].textContent = text;
      }
  }
}
