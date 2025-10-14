'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/AUTO_MERGE": "5d486d7802a2b293d5edced9aa27a0e3",
".git/COMMIT_EDITMSG": "c92da3e2e25837835fc49280c77369b0",
".git/config": "374c1763e9feea5ebf45f880ad19c5f1",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d9ca1bc9ba810f42627b2e091af189a1",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "c10f6591e0b7da7e39427f4f7e9807ef",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b46784ff01e5787d5b300b699bead455",
".git/logs/refs/heads/gh-pages": "99ac199e80b22420b02f60a2d5334afc",
".git/logs/refs/remotes/origin/gh-pages": "2c69211e811ddba24d6d45807ac2c989",
".git/objects/00/5a604630a4409dd40954d80abdb9233108dfc3": "6855cfd4fb9ba286166c77575a27f267",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/08/e18afc5be1a94d2330cb912eb2468430877f18": "5dc166ee6e94e07221ed08c7b376b37f",
".git/objects/19/048a354c0da36927ce1b4b08bf2dbf090f354c": "85f60397e39da9b066bff746c747bce0",
".git/objects/1f/d34b5d4992d08a7829a816a62cd1b666e4ea55": "5caf645eec49c013f0622da8ef85f70a",
".git/objects/20/95c173906e1baee75598a0041aaf7798bf7153": "37b1bc313ebb68301f7b0c58223e6f8f",
".git/objects/21/a490584afa3f965f92b65fdefccf8f3fa1754f": "f3473196044ec0ec758f06883067b8b6",
".git/objects/24/ca8a53ffe9848fa2500ecb0fa739052532dd69": "6def55e99ea47af67caefd0475f672c0",
".git/objects/27/c125b423d6d5e648252555dc67407bdf0f068c": "e1de5b515684a7a536a0ad1f47e5393d",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/33/4c68fcf0fb9fe8c767d02782ff346c60a268a7": "2e9427a322a126d19a48f56f337439ef",
".git/objects/34/56392431cd0cb6193df5c76ae896df9f9d56d1": "05de347170574547754c6013c0e819e1",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/37/9766b209b906e5a04425fbc98ed4d6ab6d41de": "1073d95e2ca1504dd66d451ac7c369cd",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/31673b8c7fe2390652de734133858c9e5bdb4a": "d13c3f85fc785faa7cec4c625ef656bd",
".git/objects/4e/fc6bc133756da58a69e91d4dcebabb5a463bb2": "39958e7a7835b244f955e4b0a14e51db",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/54/c065421c7827c49f9055b77f6aaf4a7242a4c8": "26394eb93ef5a09eb120acedcd7ae671",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/58/4f7a563ac42c2aae9a0dd1268ec4a28df3b2b1": "b0738653ddaf964a808ee229becf4a6e",
".git/objects/5a/13bd5a18e506d22647433b1980295ce67bcebe": "50b077c2b68b737800ac0d99a322b746",
".git/objects/5d/54a20b86f942ecad0692e35e81d25012fd2cf4": "65662625b06563e4710d7c7c3bfbeb80",
".git/objects/5f/8fe71013f90e7d740650a72bd56538b7a0e034": "8ce1277b2f61275777faf90686040662",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/60/f52b6a35633b34aff738de13a2febd8f279074": "cca8d3ddd2d6f3b8a09a004225e4af23",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/65/65dfbb5a4290e2dd9ce56126618ff7dfdaa1b6": "03c5107beeeee33df9627ec09c72a26f",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6e/2245daf90b57db142fa139e5daf15d7bd21a52": "a5722fc4dccd1807006f88905ccc679c",
".git/objects/71/642c33ec4990a06a8c780a95fc28be3ee2d310": "32fa3879e88e9f66b8e3164fb9ab59b5",
".git/objects/72/decad9534e09484d4a219512e29c5c14d7e3f7": "6920cfa5bc3e803a03347a6ab35d0f74",
".git/objects/84/db225f048a17ba2403bb50ce6fd26be8da7af6": "b7443adcdb1163d8c637b9206af5442c",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8b/f1c9fe5a3f3ecd68b8dedb043229510b9e48a9": "9c79b00be55f0b1fc2e9da5c4056756e",
".git/objects/8f/227e98e068fa9273cc7e9a2ebc28c5d171eb01": "99dbfbf890b642f6d576ab1e182ed6d7",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/91/89aaf90368106a18150622d2d48a23b174cd31": "c47c78b3cac904dc328df4aab60a1ec5",
".git/objects/95/9385c9ef203f7957792cfb0d666f4c981c345c": "dca64bb6390a6dddcc1c57f20204efa9",
".git/objects/9a/db4e785d5c209eed03ffb326e31daff9374baa": "20fea087e536a74516c7d86604f51b65",
".git/objects/9b/3c5552b25815effe410c226592c0a2977f9329": "5bc7c880bf545b880a065d389938c8b8",
".git/objects/a5/768fd98f59857dd1514715591f0f5275e95c7a": "c165cc0c819c1381db5c6711034d125f",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/b5/daf2937395560220b9e641be617da4c1ffd1dd": "6c2bddb04fb95b32ef286a8643fa57d2",
".git/objects/b7/6815b6fd2f9723dd88b8bec6a89318badac6a7": "7884030dfc2d356debf73000060f138b",
".git/objects/cd/1982df004e9f997545fb2d4edffe5f356354c4": "6d4cb7a477341d5cddd1d28e3695a20e",
".git/objects/d2/da54056343bc0e3c8f0982b4084ce06053c3b7": "b855aeaadcc9ffee3fb02b0649d917fd",
".git/objects/d3/d8a2e71b94a954dcf507d2f7b6156a721d5135": "4fccf7f7bbea39d91451a94e38c3dd50",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d8/55087988b6d113678e005d8a8eae59549c5d75": "b2a46ecdce342e2a60d4cffe463b9d62",
".git/objects/d8/5568933d0efe5338e79d733158e616d2006abb": "7509aab14a5e5f83490ca8fea38bdaff",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/db/5795759d5b286ba281bb4cbc81ca1222338b62": "2fbf8c416b1a0c634483013abc4d8d73",
".git/objects/df/572033c0ea34cb02662615159683a1361de10b": "94c92a6d7d78fdc29598b251c8c225de",
".git/objects/e7/4eae6faaa40fd9f69b79c7705cfde4efc01ff2": "49e25e2b26a9f6fb237ac2819b3a7d4d",
".git/objects/e7/6c9c88596e152ef46907462fed6e88242cbe43": "ac5cd6704b6cb5ab8b1a0a3612578e4c",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f8/e16ef1f4e9bfccf76dbc1d353515358645ae62": "55f953afc91a2d46831ac0f09769bc36",
".git/objects/fb/7757817f5464aa0c6aac24d96945542525042f": "20440bf91c2bcce7c2e6cba310dc7dbe",
".git/ORIG_HEAD": "25c94d0ba448e29fbffb1dd6f8ecab07",
".git/refs/heads/gh-pages": "97ffba00f1218f76e141bc5347e03993",
".git/refs/remotes/origin/gh-pages": "97ffba00f1218f76e141bc5347e03993",
"assets/AssetManifest.bin": "bda69b2d94259a62c8374769b8373c49",
"assets/AssetManifest.bin.json": "bd9cec3dfa7b1b7672c7a52cfe484321",
"assets/AssetManifest.json": "2c02aa6baa311914135b63d3ee139028",
"assets/assets/logo.png": "5854015524e9436a4332465ee0dd6008",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "5c066d20ba74acf913b60ad297013355",
"assets/NOTICES": "d84e0269f500e5fd59415ea41b4ab5e7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_signin_button/assets/logos/2.0x/facebook_new.png": "dd8e500c6d946b0f7c24eb8b94b1ea8c",
"assets/packages/flutter_signin_button/assets/logos/2.0x/google_dark.png": "68d675bc88e8b2a9079fdfb632a974aa",
"assets/packages/flutter_signin_button/assets/logos/2.0x/google_light.png": "1f00e2bbc0c16b9e956bafeddebe7bf2",
"assets/packages/flutter_signin_button/assets/logos/3.0x/facebook_new.png": "689ce8e0056bb542425547325ce690ba",
"assets/packages/flutter_signin_button/assets/logos/3.0x/google_dark.png": "c75b35db06cb33eb7c52af696026d299",
"assets/packages/flutter_signin_button/assets/logos/3.0x/google_light.png": "3aeb09c8261211cfc16ac080a555c43c",
"assets/packages/flutter_signin_button/assets/logos/facebook_new.png": "93cb650d10a738a579b093556d4341be",
"assets/packages/flutter_signin_button/assets/logos/google_dark.png": "d18b748c2edbc5c4e3bc221a1ec64438",
"assets/packages/flutter_signin_button/assets/logos/google_light.png": "f71e2d0b0a2bc7d1d8ab757194a02cac",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "1bf11c83af10a04fa0cf825c13877291",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "262525e2081311609d1fdab966c82bfc",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "26e380a964be83e4394c6d7dfa5c0b2c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"CNAME": "2c0f72341f11396f3c89a942a49a68e1",
"favicon.png": "886ed5ca7b0f800cd8cfefbd9becccaa",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "8fddd8438f67f284c397c61c2c220452",
"icons/Icon-192.png": "890ad164caad638b765d1fdf7985780e",
"icons/Icon-512.png": "a1d07b366e259088dad05f54bd2f0806",
"icons/Icon-maskable-192.png": "890ad164caad638b765d1fdf7985780e",
"icons/Icon-maskable-512.png": "a1d07b366e259088dad05f54bd2f0806",
"index.html": "69767c3599eb0c75e56b5cda47b173f6",
"/": "69767c3599eb0c75e56b5cda47b173f6",
"main.dart.js": "ebb63c4a6a1bdcfcf1cd37b84ece4b20",
"manifest.json": "d793209ac0c18675c5dcffe719c8cd78",
"version.json": "c87a260eacd4b9c52baecbf36c0423e0"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
