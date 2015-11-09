/**
 * core collectionsFS configurations
 */
FS.HTTP.setBaseUrl("/assets");
FS.HTTP.setHeadersForGet([
  ["Cache-Control", "public, max-age=31536000"]
]);

var uploadPath = '/Users/dilan/upload/'; // Meteor.settings.IMAGE_UPLOAD_PATH;
ReactionCore.Collections.Media = new FS.Collection("Media", {
  stores: [
    new FS.Store.FileSystem("images",    { path: uploadPath }),
    new FS.Store.FileSystem("large",     { path: uploadPath }),
    new FS.Store.FileSystem("medium",    { path: uploadPath }),
    new FS.Store.FileSystem("small",     { path: uploadPath }),
    new FS.Store.FileSystem("thumbnail", { path: uploadPath })
  ],
  filter: {
    allow: {
      contentTypes: ["image/*"]
    }
  }
});
