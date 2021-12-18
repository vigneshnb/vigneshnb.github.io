'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "3957a8d06f7fa907712497903a98982b",
"assets/assets/fonts/Nunito/Nunito-Black.ttf": "529509f5501c7f45315210d280a456d4",
"assets/assets/fonts/Nunito/Nunito-BlackItalic.ttf": "8bf9ce6e0c5434ca0ac97f90196d0c66",
"assets/assets/fonts/Nunito/Nunito-Bold.ttf": "c0844c990ecaaeb9f124758d38df4f3f",
"assets/assets/fonts/Nunito/Nunito-BoldItalic.ttf": "b21199decd37bf9a096e0f495bb20ffd",
"assets/assets/fonts/Nunito/Nunito-ExtraBold.ttf": "438598eadc302471a495b3133620f621",
"assets/assets/fonts/Nunito/Nunito-ExtraBoldItalic.ttf": "5f67429d0ff76ec74d98b915439692ee",
"assets/assets/fonts/Nunito/Nunito-ExtraLight.ttf": "4470502486a612e2bf6f38d5bff77ce8",
"assets/assets/fonts/Nunito/Nunito-ExtraLightItalic.ttf": "ade1717e588935bdec3d38ca19bd1050",
"assets/assets/fonts/Nunito/Nunito-Italic.ttf": "380d3172fab0055a8d74ab12636f5a9b",
"assets/assets/fonts/Nunito/Nunito-Light.ttf": "08bc5f85e4505782d3fa279944f2feab",
"assets/assets/fonts/Nunito/Nunito-LightItalic.ttf": "55032f4e811253da318f967e0db3d7e9",
"assets/assets/fonts/Nunito/Nunito-Regular.ttf": "d8de52e6c5df1a987ef6b9126a70cfcc",
"assets/assets/fonts/Nunito/Nunito-SemiBold.ttf": "876701bc4fbf6166f07f152691b15159",
"assets/assets/fonts/Nunito/Nunito-SemiBoldItalic.ttf": "59cf0995782240777656a355cf08b234",
"assets/assets/fonts/Poppins/Poppins-Black.ttf": "0573b9231a8316427ad6e751b52e87a4",
"assets/assets/fonts/Poppins/Poppins-BlackItalic.ttf": "3fb21c8084013f3d0176bc98bcf76e60",
"assets/assets/fonts/Poppins/Poppins-Bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"assets/assets/fonts/Poppins/Poppins-BoldItalic.ttf": "09775bde3e9448b38c063b746e21cb6b",
"assets/assets/fonts/Poppins/Poppins-ExtraBold.ttf": "544fa4f2678a8285eb88b8dfe503c90c",
"assets/assets/fonts/Poppins/Poppins-ExtraBoldItalic.ttf": "29f7dd016eeed2bcd79ba482eb3f27ec",
"assets/assets/fonts/Poppins/Poppins-ExtraLight.ttf": "86a2f13e91ac85080ebaeaab9463b9f1",
"assets/assets/fonts/Poppins/Poppins-ExtraLightItalic.ttf": "05139b6509a2baa8f188fbade78fc3ed",
"assets/assets/fonts/Poppins/Poppins-Italic.ttf": "5e956c44060a7b3c0e39819ae390ab15",
"assets/assets/fonts/Poppins/Poppins-Light.ttf": "f6ea751e936ade6edcd03a26b8153b4a",
"assets/assets/fonts/Poppins/Poppins-LightItalic.ttf": "1eaf3af47612e6163a2e27e847c6ac7d",
"assets/assets/fonts/Poppins/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/assets/fonts/Poppins/Poppins-SemiBold.ttf": "4cdacb8f89d588d69e8570edcbe49507",
"assets/assets/fonts/Poppins/Poppins-SemiBoldItalic.ttf": "378a091bc1b1e6e6d6327beb6bfb07b9",
"assets/assets/images/1.5x/ic_edit.png": "7fe691b20d8bbbac22fc1df5a4de79ef",
"assets/assets/images/1.5x/logo.png": "af3d6b54c544577cf81d381a98e9082e",
"assets/assets/images/2.0x/ic_edit.png": "4ad3087b6f122aa03a56af3ec391c5f1",
"assets/assets/images/2.0x/logo.png": "25034254be2592e2f33df6df741b3d8d",
"assets/assets/images/3.0x/ic_edit.png": "43a71f9b145612fa27c552565d3a1b46",
"assets/assets/images/3.0x/logo.png": "af11c3e8757ecb9cd6c536646b59c3f5",
"assets/assets/images/4.0x/ic_edit.png": "edd4ada3baad850ee042852cb6b22fdf",
"assets/assets/images/4.0x/logo.png": "f547ac633bb933d2790f51483d6b98b7",
"assets/assets/images/calendar_icon.png": "64f6f712f44bdded5a7bf769d5152df7",
"assets/assets/images/chef.png": "3492e364f6bcd7c9f28337cfc742e1ec",
"assets/assets/images/contactus_icon.png": "9ec98ea5d56eefc7836681340dd7a736",
"assets/assets/images/f.png": "9735d3c71141eba2f7f803f24380e4b9",
"assets/assets/images/faq_icone.png": "cfbb7fa310bc3d958ef0358aec7a3612",
"assets/assets/images/flag.png": "4cceec114b82b660a00faa1fd895f4cd",
"assets/assets/images/flag2.png": "852db445404ade1be805c22e83149fe3",
"assets/assets/images/google.png": "5ad133a4096cd7e8261b8142ad336924",
"assets/assets/images/google_symbol.png": "58487aa70bc75b2fa0c03a5bc608f610",
"assets/assets/images/icon_left.png": "d3fc57eb05474bee833644e050f29646",
"assets/assets/images/ic_edit.png": "4abf09679f74df3df65bb593cf85d61d",
"assets/assets/images/logo.png": "a84b79f68a28d52d7a7c0912f772fbd8",
"assets/assets/images/privacy_policy_icon.png": "dca1fe7db6b422df1382aac2a489c838",
"assets/assets/images/rateus.png": "3eaf3a30160e8c4ffa9b37912e1a2c23",
"assets/assets/images/right_arrow.png": "dbc503592feac9e7964299002d589748",
"assets/assets/images/successimg.png": "e78d6edac6146a8af777e9c99fc498f5",
"assets/assets/images/tc_icon.png": "bb40337c886570e4529476e2ae1aa991",
"assets/assets/images/update_icon.png": "dca1fe7db6b422df1382aac2a489c838",
"assets/assets/images/version_icon.png": "6ac1d359ebc984bd7f5bc8723a3ab62d",
"assets/FontManifest.json": "b0d394c204873dce471866c2865b2733",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "7c055da1a4fba074017921df4b977adf",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en-US.json": "5bd908341879a431441c8208ae30e4fd",
"assets/packages/easy_localization/i18n/en.json": "5bd908341879a431441c8208ae30e4fd",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"favicon.png": "be5f95ca390875b82b8d89bc139eeb5e",
"icons/Icon-192.png": "4fc3c38c2e9ba1d4d79d87f59cab47b4",
"icons/Icon-512.png": "94f91b55f241286012a5a498af95a83e",
"index.html": "443c76c0c5b677a997fa45a376ad30e2",
"/": "443c76c0c5b677a997fa45a376ad30e2",
"main.dart.js": "9a33a439dc02a61a836cf034473ce628",
"manifest.json": "0ceccd831badde5b973e7af798d27ec1",
"version.json": "1633f73827d683cfa590fef5c5557920"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
