// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  wordpress_server: "http://19.234.238.248/wordpress/index.php/wp-json/wp/v2",
  lambda_api: "http://selfhel-env-1.eba-gmdmh3bp.us-east-1.elasticbeanstalk.com/content/v1/content",
  lambda_post_api: "http://selfhelpbff-env-1.eba-gmdmh3bp.us-east-1.elasticbeanstalk.com/content/v1/content/details",
  iframe_self_help: "http://localhost:4200/selfhelp?tag=",
  iframe_self_helpV2: "http://localhost:4200/#/selfhelp?channel=_CHANNEL&application=_APPLICATION&module=_MODULE&tag=_TAGS",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.