'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "64d42024f1a77ee5e61e4096bdebac78",
".git/config": "e0f77f06ab0a63dfa2c0f1febc4c4371",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "5ca7d5f566fe23720f6fa27d7300290e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "ecdaaf331dfd177a027f122e91f96b01",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "fc9034c4004239bd83aa83e85f82baa9",
".git/logs/refs/heads/main": "23a55b95620a112da8bdd2732c7343a9",
".git/logs/refs/remotes/origin/main": "3084459816ff7036773b114cdc46bea4",
".git/objects/01/bd84c4bb63f85fa3dfc86b6a1140440fea8b4c": "08b021d2f39142c797450e0e31b9ac13",
".git/objects/03/62f6d5fb1ec81499f15732adcfe1cf970897f0": "21bf0701974159059df721e78c277b86",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/04/ef44ccd1fdaf30904021960bb45e7981b7348b": "ba5221d6ece6a393a7771dd3b8a8b028",
".git/objects/06/986cdf8bed076f6be66a564af0b99529311d0a": "8c780b738077dc4e8626be153ebca253",
".git/objects/09/feabd786ce409340cd780acc7bf059ef6f1c3c": "adc3026cb00d506963c85221edf1f954",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/11/2b5f0bceecae8cb06ceef250c696adb55a6f7f": "d3584c85e76c46579e40a7b437b51567",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/14/9e08c8ad5bb8d5428eed246faf1a1dd174b520": "303007cb5fd4bce704c335a9616ada0b",
".git/objects/19/98c8cb6454db2a99e270fb9ee4b1e766b4259c": "ca397eafb79f12c456994b1e4a0d5300",
".git/objects/1a/47a01f9374958aefa721b6b53668c7c5dfbabf": "1f6342d23432b5fedb38b1a9fab1c237",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/20/061da2c80b803bd37fb60db0b9d22f41ed94fb": "5de2184cc2d41a503851beb3652bb600",
".git/objects/21/99512f109fee0ef7a6a3e79a55a5b3952861c7": "fc6ec0f37e7c580f4e1214f634f30e36",
".git/objects/24/f621c37deb391bccfc5f150cda0b7f30294004": "64d4ee4331d70be57d1aa87f259395bb",
".git/objects/26/b22d3675281366c48a73af03591494e4093d9d": "11192579dfa980ef22de09b98ee64e64",
".git/objects/26/d33521af10bcc7fd8cea344038eaaeb78d0ef5": "39554bb11371007e021a7fb3361ecd47",
".git/objects/27/2ae9ed6e1a4c8b8a16fb5ab59d9325fc79d613": "4eed0b5849d5f6f57bba42c98f764266",
".git/objects/2b/bd3b33847e230fdc1dfc047910f0c1e8538b51": "62e25e3708a1c44a9a0383f872e9c1c6",
".git/objects/33/a5931822a97f6158d7e34169908118110a9897": "05166a21090cacbdac24779d24047c31",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/35/eb1ddfbbc029bcab630581847471d7f238ec53": "b69277a8e391674b63a06b70141a9094",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/3a/d1e0b39d5d6eb7ea000b85b18a4480b6d7e41a": "84805614ec101c87fa55ef911120b769",
".git/objects/40/c7a5a485346efa0772fd1ca66fa9ddb62b40d9": "451b61a24dbac78dec181a078962fe57",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/42/04a9fd800e13d141d98a6775f8a40e9e7a5a73": "c38022e4d303aff4333504ed5d7f51a1",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/77c2ee9db1bec8dabb60e2d646eb8d9b7b4f58": "37131b0ec19bed1c4cca17533a2a73af",
".git/objects/49/938d3f0c07beb7194c72b623c46ebc2acc28a1": "c52513b902ead034bc9a32ad0ecef9b8",
".git/objects/4b/442f97513bc6b5de87c77a76c70e096a70bc58": "5f807748de1d49bb6130a6999d3be14e",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/4e/0c11a67c096bb1aef6c724fdf514a18862b1a7": "e794b28674a6f0d308dbb1623dabbcbb",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/56/717a6e15cd3a22eb878ef562a4d642caed5934": "5f88ca3237306b0d7fa78baf6d76e127",
".git/objects/58/32e9bc0af180c5f9860d3323599db38ea888a9": "483d234f29a8150133d4e18155e90bc6",
".git/objects/5e/39b608ce8d5cac029d3baa8c321742ba935568": "01c2bfa4d9859ad6121444d4b251af06",
".git/objects/5e/ec61484b685e3833e1681f686cef719a5da9fe": "faacf4dccb93d31e965bc80fa9a2e678",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/63/9900d13c6182e452e33a3bd638e70a0146c785": "488924a8ec51457535ebf377a60e23c8",
".git/objects/66/87f4a213cf637cc3c455bf4783d94d171563aa": "a592597e886d8fc9890d64b100b01344",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6e/8f8dfe5d1019c043225e80e468a7bb6ba08dde": "99db03508ea74f1d934b379bc1eb360d",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/76/6bc1f003525576e5276fc7be2dbae5cffcc102": "da2dbfb46963a0f3afc75077fd7aa1d0",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/0c5624d5cad63483beef01f9e9a053e23a1178": "4e360d17f1118977bd6614d6d748000f",
".git/objects/82/2d846aff47d8b19a6c9dc77fc0f85051a4ad83": "59164f0e902290b898a100eb91046233",
".git/objects/88/095e46034b27ae81fbe1ba524081986b4a6e5e": "172bea85463487faa860c418c59dc37e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/93/5bb151b46383ea848aa148ae131296521862d1": "c53f23ed5acd85866ca21a4e5c1328cd",
".git/objects/97/2d6fde9ea549c19b8a4ce39f4c9679f896ebda": "3b16ead9e38ccb30e0dbb59354dd1488",
".git/objects/a0/3deb1fd83443e8109d5021aacb2008285ac360": "27146812af513a3eeefc0c6fe3d64d12",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/2f8ac7b62d9e46ccd3f85054858b8f19fbb969": "3f44c69e29e3d66d86a562adb76bd2a9",
".git/objects/ae/ba1700bfe7e6e6348db8535f34728b24df7caa": "1d457472e62196b4650521b7ca637f12",
".git/objects/ae/ef1c23aaa18a75ee6544c297924a0ad61f8d34": "c03f07660ba607b83a0ba7840208b8a8",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b5/7d4ae54930e0bb32f687b9506bd67554a092c7": "a195217ce6f7c657efc68ab50d785afa",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/8186d779c8bcf73343bd9e486a70e91cb4cd6e": "de7cd9a0ba3130c5b487c1bf1bdc03b8",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/c4/b76e535802241ba9e3134672d6f06c530c6083": "1ea6e3da8f04c330b039dfa65428bbc3",
".git/objects/cd/d824927f7982942b131ab14834201174dd6365": "7e81d4da9971a64d81b144ecab50ce7e",
".git/objects/cf/674e3b038c66f5215a3b71f63a81a7c07e80ad": "b898d906d058277b0871764c714c6e53",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d6/591c5122388c4529915c53a9ba1274d234bd64": "b08f0e58daa4a7a7c6ea21f41e4ff4dd",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/ebd4805981b8400db3e3291c74a743fef9a824": "6c33f0e88a71d9ba8563eab3ee932f04",
".git/objects/d7/12574798bc56a6a5689da1006a72985cd2576a": "7fa020b7340cc6eee68b2cbc3f34c8f7",
".git/objects/db/47c30a48149b60a3ade3c2d591de0d23deaac9": "61dfbc40317715f7d13f7f7401e078eb",
".git/objects/db/99bdad9c02b4b167ad4bbff4cee450c50e2671": "73e6e1fa27beac2fef8b8f72227df6eb",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/8cd6f1c28fa3e7de83b84aba59e7286fe226d8": "1220d9882ca0b5e90ab25d7948e9e4ed",
".git/objects/e9/37343a009c4ace0e00e2b99b990a20fe38855a": "d05ce6312483533543fcabad1901acbd",
".git/objects/e9/9e16ad449ce7b9422a10cc9009398f05590141": "88f5186b5af3642d349d6577e3ac8e00",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f5/89ca37d210990980a9d9b1a5cb4a29d2db6c70": "8b8d21aac8e6cdbec1fc106163311c31",
".git/objects/f6/c4dfc8eb6b577009dbfae952529a6a518b05f1": "116d9fcff2853585a825c4d036f4f272",
".git/objects/f8/4c720a477cc788a15178c1ef33576c48cb8899": "e0caf00d8e4d9faca73fd637793b2e58",
".git/objects/fb/04e56b038b6d1c2633c6d0f4569d608e462c2a": "ee16927683aa7e422ea91b9014cac764",
".git/ORIG_HEAD": "718bb32f4adce749b51221f430421b7f",
".git/refs/heads/main": "91bec8862458aeb4c34500852075d7fb",
".git/refs/remotes/origin/main": "2cc29dc539d60d5d1761ff2f6813224d",
".idea/dictionaries": "f91deaf85a6c21b826881e937a2a668b",
".idea/misc.xml": "d4f288593ec15175e0ab2246a477dada",
".idea/modules.xml": "9e76b956e97dbf7d14a4b3d83c8c2375",
".idea/vcs.xml": "74d3a64f52848d5e8db631b1685e58c8",
".idea/web.iml": "24742e734b568c3f23d56498828ad0f3",
".idea/workspace.xml": "5466175a45040e97194f9c5c3d1f6e1a",
"assets/AssetManifest.json": "31a0bdd12239e8f221c83045aa70ca23",
"assets/AssetManifest.smcbin": "b61bab162dccb4654b854565ac87b4b9",
"assets/assets/images/haber1.png": "efda6f6c7a382e673d6115d27b66831c",
"assets/assets/images/haber2.png": "88ec7bf5799277f67c996d1fd4ca5c43",
"assets/assets/images/sondakika.png": "8afbf8d7e92d7f62a51a359101b88fff",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "99ec0e4d2bfc330390e13ddc3d15550f",
"assets/NOTICES": "8dbb95eaa7cfd5616f41fbbac8cf2345",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "3dec447b7cb8eec55aed598fe2296ccc",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6fcce95c19b032bc190f4459311243fb",
"/": "6fcce95c19b032bc190f4459311243fb",
"main.dart.js": "fccbfad306909185691081aa3cc1ed48",
"manifest.json": "9e1c8732e1cbf9cde31310a2497f920a",
"version.json": "0c8ac72a2a0bdff5e0a08505f5697dde"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
