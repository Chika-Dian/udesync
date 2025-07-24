'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "8439beb8b1732c0a2985d22d90c57484",
".git/config": "9b99bca4d19edce85414f8e7bdbc0ae8",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "51ed8d70163b70d42a1237316d8903e5",
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
".git/index": "34bbf06f32c7506eacfd968f20000e14",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "964566011e45e0f9c957a577a2783a33",
".git/logs/refs/heads/main": "1528c5d6c8c04105ab27b6a625931e8d",
".git/logs/refs/remotes/origin/main": "b8210fdca0efe305eae10ffc998b3d07",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/0b/2fb187129044e5573e53446dec1a34c4a1f4a1": "5bd9d2307a57ab2a9134d7d127e19e8b",
".git/objects/0d/0e9d8ed873b4201d9e44863478777d69e6908d": "19bf6c7901e1554c5a3ebd3124f5f857",
".git/objects/10/bfce03a9ee90e0598954596fe55acea00c6888": "e462ff43cf00e502ea6574973d67d65b",
".git/objects/12/2ef2373d4e1c94cd63ba20c6ab2c576b9eaf55": "e0e395574d27e08d6cfbbf0624fe3f61",
".git/objects/16/190f6d885a6330da74a94e301c3cc2d6445737": "fb2be3c2cc523010a26d439e81fa8c33",
".git/objects/16/fe21eb900c52b625dfbf43f182a4de52040cee": "0037d140f825e52a4799518cbf1276fa",
".git/objects/18/e9c6e824d0fd3040f907e0e43bfae24566db3e": "332a01e80b1bb7a7f52875eb61dc9bfa",
".git/objects/1b/8a8ddb8d70650e41d4918c46cf2be6a5fe564c": "c8d665a796a692e041b6bf9929562d33",
".git/objects/20/f12d73b69c6ebdc9b930675a13a15c3d4d332e": "fe15955e0bc319ccb02a569044c82146",
".git/objects/2b/07264169d53e7b040f0468eee61551193927b3": "3784560c91aa8cf096e4fb3979b8531f",
".git/objects/2d/fa5f2419433139dd665d45c63e0e9ac623f10e": "6f590ad10eb6502d24a011e0957ba45a",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/33/8d6c0a5ff22a40e9f9907287cae96cfc56736e": "37b79b06529d911f0f0860298c5a3d24",
".git/objects/33/8f4ea7e1c2ddbebe24091a61f9cbed3bcc13d4": "72ab0e9ff9085f187b2c0d6d21ab7546",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/3a/cb80a324ebee338daa562961410bfc82578db4": "8f181a2b5579c0104bccd8495e597003",
".git/objects/3b/3e4971ca15f79772f095c3fb22a1a40661c46a": "ffeb743caf9a089213f5b61f47298f3d",
".git/objects/3b/eb7890b45ca2875195243c4d7b8090b4f2549e": "7ad1148a6be26d6dc597bf1d110c6ccb",
".git/objects/3c/00a5e2b17735868869a28b326ffe8b485d5901": "2e90a81602fad5579aeb58811d776c06",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/45/45b8eaf094b432e53b551486b4dbcd4586844d": "ae8553488dfce048a2bf9bf1333cda81",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/ed63165b98aca813f76a50f6289907c14ffa11": "6bd4566679f9558bdf0eff9efc573209",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/56/8d1038a2c6356d1ed4f0f2fed64ce60f310d51": "bddd4941e4a0723498bc1025bd3901e6",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/57/f80986c2aab206ee0880c9b993b1a1867f0dc9": "e118a4f86cdbe874832c671ab00289ae",
".git/objects/58/2b8e023f96e06e8007b2fe2f28bd6a43b16901": "ca9b3cc1adff7f26338c33a0c8a85e61",
".git/objects/59/514fadd09a13d8a8dae784c1701cd2d4b5a35b": "22143ea61d76638a888066c29f0e2482",
".git/objects/59/c1c5f86ae045425f2e6dd614a00677e138b1fd": "efd8738bad7471ed68de89c8f631fa67",
".git/objects/5a/c687d979b3be059ef178b63becee9cc3ecd9a1": "51256e3b10413f942f8d31d330a550ee",
".git/objects/5c/a017893b2927c9a549a678278c883a97ef2a0d": "ae6097befff3fad1d76396cd065264d6",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/61/ffec5476eb9ef3766e7ff97a13d58115f06eee": "6ac79677972163ae657ed16a91bc660a",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/69/7612b856b42c7df2f6b11a751697ce3fb59ba5": "eb2c167bd5d2090211aac5d103a33a2d",
".git/objects/69/9dd63cc7aed656b23073532062e5c91ba1fce9": "eb4b4d5403a702e6206c0bf72440ed7a",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/70/6b89226856a184964d4ef26acca4690f34feb3": "b47861a6de6336cfde49244ec049778b",
".git/objects/72/ada6baac9193047a04d1ef7fc6c08c19a0aad4": "515cf0496f523efb00e1cdbca48aebe4",
".git/objects/72/d2ac11e3a7e709db33c98612eb36324b65a1c5": "c79df3f24627348b03a122af4e1edf89",
".git/objects/7a/aaf99c59b39247bd29eb4ed248aca339e38969": "08d163ffbb788f230ad74272a23560ac",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/918da2529e6cd2c0d2bb158342731db0ecae49": "13f4370733a6a398def4ef4734efe8f1",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/ab61d7ad5d78c0eaf867fee515e8eb6c962e9a": "ba208c074ff1243b69f616218392fbc5",
".git/objects/8b/154a2030e8dfe393015cd72a2c9bf715846f26": "c5e7f2dd9a3496362213e28e5ee3876b",
".git/objects/8b/3363c11863dc9760e124d7147b31df55f91ab7": "bb448979209a98962ccae994de64bb9a",
".git/objects/8f/e832dff551315d3a22a1de635e6b46d4fe8016": "1b6f8ec6156a82ed155eb578b21e6332",
".git/objects/90/ed57cc0f97fde643d263045abd7e487245b13f": "a5d10fc5ed7d504d23054605d123feb1",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/92/e75bd7560a606ed30d7d1e0e0e3967d0046934": "501688f4d950fb92cdb426ed82b6df9c",
".git/objects/93/be7fd9b9dcdd8564dafd7040a0c8c8f68d4080": "b27ff257c793a735fc818ff37f392ff9",
".git/objects/98/7e4f803debb00c41ac03c74a5da24c1d2addfa": "4d969aafad71a9ca4d35d5c3af0ca75b",
".git/objects/9b/0b32bc5962e8f685b857db9c3de608a0b41e82": "ec87d86a8b40ccd5e01585eddec65298",
".git/objects/a0/d4f7a3abdd282afd268e1be303a78c38629fa7": "91337441c9119160835acce36ff824e2",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/b1/eb1a39f6a48faccf11d4ce2f40a3cc9e132fc4": "afc3ba7164dc914ee464ad32d2a56e6a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c3/944b8a86e8e765015d9f823da8321bc425b40f": "00f2a42df0979a2759e789cb2c87b344",
".git/objects/c4/f17b867fada85a7a6a6b2f2e83e7b918cd0d16": "87390dd306e863edf0224c017459fabe",
".git/objects/cf/73a9838370e3c6242313cc82b46fab4e2110ea": "814e109481fade38eb8c375b94bc5fba",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/e00095b5a392aa4d980d2a88ff3f4cb75a6fc3": "4cee2f16110a3e13921c97964369a3af",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/da/b3241be8891dae572aea0f8f8115b54a46aa59": "91350697288d5e9ace72a4fc115a6d19",
".git/objects/df/fec740dd3d5abaf9893a0747bf8d16120ef5c9": "a571a8a10ccf2ff09ffbe2d638da722d",
".git/objects/e8/d92c20a8c0988e158cf09c47a8fed5e0054d85": "0cc86985f897b890025dc434702ec523",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ea/d56e74c7d1029d20026dc21d1d56ed2fd2ece8": "2a18e72c3829e7b7d9e21920b38c8bf2",
".git/objects/eb/4909355185891f8b2fa240e2be77227640dcdd": "c296a75fed8f4c09344d0837dc9df2ac",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/1bb5437f937e7ccf741eb31cddeaf0b809de7c": "2b7827e4026b66ad2164e518e061b33a",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/ef/eb9dbe0f99214519c785e1ed1bc68acf0bc481": "7a4767f3188b8cf161e72a3c9e00e6d9",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f7/781af5a8b39f50e138634cbbf4c128e36a5b85": "14793aac2329804fb99a6ab9b6112a23",
".git/objects/pack/pack-cb746b0686053e1864a68df0e9f11ea08f80a9e5.idx": "e2064d364d07e74d12a46fed6518f19d",
".git/objects/pack/pack-cb746b0686053e1864a68df0e9f11ea08f80a9e5.pack": "0d04c5ac04580e25e9cd3dad01884d8f",
".git/objects/pack/pack-cb746b0686053e1864a68df0e9f11ea08f80a9e5.rev": "084d44846cde59820be03a86a3164384",
".git/ORIG_HEAD": "85fd3491ce7a2077975f246608b736e1",
".git/refs/heads/main": "85fd3491ce7a2077975f246608b736e1",
".git/refs/remotes/origin/main": "85fd3491ce7a2077975f246608b736e1",
"assets/AssetManifest.bin": "d71540a0ecaff9a81780ffd6951118fe",
"assets/AssetManifest.bin.json": "a0c375c519a79b4b2c105e5bcdc42a9b",
"assets/AssetManifest.json": "ff7be7a4ffd7bbe2153f875ee85d6790",
"assets/assets/character/ayel.png": "62dd3b6770cede85565ea6900a811ef7",
"assets/assets/character/vier.png": "68378a72680b7a9e3d50d46cbaae1ce8",
"assets/assets/course/design_graphic.png": "10dda9c64f641aa111f97f4b630f61c1",
"assets/assets/course/flutter.png": "504dfbdac8daf726a75056fd14ec9871",
"assets/assets/course/uiux.png": "5b364a5a39d2f6fbf81e1b47b30fbe41",
"assets/assets/icons/courses.png": "2589a2ae0de46b99bb10735f857ecbe4",
"assets/assets/icons/date.png": "0ce037ac458ab0ec850a2e9c376f4ffb",
"assets/assets/icons/mycourses.png": "f53556eedc72e20ba65bf4ed76170b24",
"assets/assets/icons/setting.png": "f609ccfa0fc0525eeedf79889f87c1db",
"assets/assets/icons/time.png": "7ae6d49aa5d12e4b0d51a35b134b39c9",
"assets/assets/images/marker.png": "86dff3e719812e5f6286089b602f2574",
"assets/assets/logo/logo.png": "40f1a1c89858c465c26068132cc3ed78",
"assets/assets/mentors/mentor1.jpg": "8dd10818f3050f259da81c707acb918c",
"assets/assets/mentors/mentor2.jpg": "899df455bc367f8d268e078d94b59781",
"assets/assets/mentors/mentor3.jpg": "5b096dfdd6eaa86d09729f6d051fede5",
"assets/assets/profile/43.png": "1d78ba469749a32c86e46ef27d1e6041",
"assets/assets/profile/44.png": "38362e754b86f86442a23820373867f1",
"assets/assets/profile/45.png": "0a955fa763eb464692d41f3aec8a49ec",
"assets/assets/sounds/alarm.mp3": "52ad513ceb612af16901ce60353657d6",
"assets/assets/thumbnails/qiyu_youtube.png": "29d8cfbb518c5ab1c599b75333a5401a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "77bef74ae7155209be2cc9b905606028",
"assets/NOTICES": "ac36fb9979c4894854b6fbb3fe30df4d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
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
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "e99fff2f268b771f0694272106adad07",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1e52bcb2f95cb42d3f786e43ffcd1a83",
"/": "1e52bcb2f95cb42d3f786e43ffcd1a83",
"main.dart.js": "2db5094cc472b17a68b9708bcc855951",
"manifest.json": "26423cf5a81f5bfac529cb402ae5cc50",
"version.json": "5297adc442410a865c03a24966e03573"};
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
