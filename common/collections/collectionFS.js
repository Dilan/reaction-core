/**
 * core collectionsFS configurations
 */
FS.HTTP.setBaseUrl("/assets");
FS.HTTP.setHeadersForGet([
  ["Cache-Control", "public, max-age=31536000"]
]);

ReactionCore.Collections.Media = new FS.Collection("Media", {
  stores: [
    new FS.Store.IFDS3("images", {
      path: Meteor.settings['TMP_UPLOAD_PATH'],
      s3auth: Meteor.settings['s3auth']
    }),
    new FS.Store.FileSystem("large",     { path: Meteor.settings['TMP_UPLOAD_PATH'] }),
    new FS.Store.FileSystem("medium",    { path: Meteor.settings['TMP_UPLOAD_PATH'] }),
    new FS.Store.FileSystem("small",     { path: Meteor.settings['TMP_UPLOAD_PATH'] }),
    new FS.Store.FileSystem("thumbnail", { path: Meteor.settings['TMP_UPLOAD_PATH'] })
  ],
  filter: {
    allow: {
      contentTypes: ["image/*"]
    }
  }
});
