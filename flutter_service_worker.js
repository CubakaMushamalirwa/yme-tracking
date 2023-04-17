'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "e68f7204232703803bef17a8cbbc8ae3",
".git/config": "4690a4eda2eae0a9ef910e1b815d4147",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "3e4cbf60cabba9d20c7b3bf97eebe02d",
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
".git/index": "587b9e36e4b81122b4d05c37597e1c27",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "eb5c9eb8c2f79dacd3d30a1985e54a74",
".git/logs/refs/heads/main": "0bc75b8948b39f4477ee7de40e32e5ca",
".git/logs/refs/remotes/origin/main": "c7ec47a794b6a03ceaab364eb267fe9c",
".git/objects/01/12e7da626ca2f959eca850c806779ba55dbfbd": "c094fa0b00e6ea2120d2a30cd1da087e",
".git/objects/04/981a4f4e39dd8988a82abc0ff67f3f7c568553": "0877532395f0db6f669752abf5fd092a",
".git/objects/04/d22f8ab51e81f0b325be90c168da3e3b1bdf0e": "43c4fc46a969a6f7a113e04bff79c704",
".git/objects/06/163e03da37130cc81c7e4aed19d09611db8cd7": "e02688bdb3efd7d6483ad8cf1a151a48",
".git/objects/06/bda8551e072a5a2f9810253c0a4bfa0db9f0b1": "5000b43b838c80c44162696f71b3ae65",
".git/objects/08/4f9c0f5365952d4d860431a1c2dca147e4a9b5": "dab2b7ce77b85dd7850aef2e03638cf6",
".git/objects/0a/52f16f2d15b64f607178e8f6cd506f80b9a05b": "3a631cc7f3177d2d4bf1c8824fc9986d",
".git/objects/0b/2210d5ba9b6b48dfa3305683e075413c24b3ae": "0b63aed817859a6500d56bb3b5d00d15",
".git/objects/0b/dbc3a38234aa71066e6cc9403eeb511aec282e": "8ab9548c0fb8ab04f5bc170e3f165724",
".git/objects/0c/713fa4f50e802ab1a0f2c148f92ea0a09a54e1": "162c73f7ddfb42027116953d55d7141b",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/12/7ac3d11ed9fe1820783ec0b2c38df3b9bb36cf": "eef258243d3b31800882f3f4866526fd",
".git/objects/13/2372c4a2d9cfa21074f439809466a540b6a8f3": "515420372c90cdcf708466b5ba6ca5f0",
".git/objects/16/eb971537e98e067d0de85bf929a426d9e4cf86": "6947d68938d175cdcaf0bce1771cabb5",
".git/objects/19/800dcc01e41779ac1b151b54bac70f536290ee": "e2f994d60c54990d43cc1d0074e8576a",
".git/objects/1b/5eaa361c7306b4246c48497c79475c0e05c5e2": "797c30b38f4b43082bf674ed21553c74",
".git/objects/1e/17cbcbcc2524fe634c4431a81f5dec0e15efe6": "719fca67573501cd491234fbbac1fd87",
".git/objects/24/45ffe7c59e09f19072a6b5d40abcc0b5346c21": "aceace7ffc5f82d05c45f9c0c1759349",
".git/objects/25/3bf44f8e3d72045f5d3f66f19580c86a8021f4": "975f17fbf82afa2a4230359b29ef0b17",
".git/objects/25/57476a43f108476cd05a12b0987fd35a05b651": "249abf091ad2f8786f9c9d04359d4bc6",
".git/objects/25/dac2ae5bc34d93f9d811d5da7a15fff7cc8328": "b6057ebd359d3f2dce44a04088c118f6",
".git/objects/26/3ba347b9c0dbfd5b4a31e69c79f29ac9d3e2ec": "099a3d008682ff0b74a79d148958a358",
".git/objects/28/298999cdbd1855e34a76dca812c2dba63bf2c6": "a35d4cc855fa14bc3057c3a642d65376",
".git/objects/2b/6168ab6849a5ea4cada3265d6d51f3e5625f8b": "89fa47b432e5c8b442921043b1d1e835",
".git/objects/2b/bc0ed6c1e38fa5b42ccd0f843afe4acdd6b94e": "f4a5462d011d780ec246d4ad9b0942a4",
".git/objects/2d/277afb231f7613a49d983217c1aba871741433": "9047448a3d09251b8161710e65810e36",
".git/objects/2e/0dee6a833c4b568d44ac99727f7e0c17c6eb67": "c7ad2d2981af735bdf2421a44b61acb1",
".git/objects/2f/5743e145b8682ed51a1aeb8288feed02454ad5": "bdbeba30dde423a54324032a85a5275e",
".git/objects/31/ed357d44be0bae38e2aad765df37a3b1397f6c": "c7767a747afde5e9022ceece52316260",
".git/objects/32/a7bf342cdb6ac47f1e2dfa474b200567e0f422": "bbbb90a38773162b4e7324d98933e05a",
".git/objects/34/8e71dd15c93827af67416505c6b0f9bbc1f8a8": "8bba193b0c3ca075d2880b42652a8b6a",
".git/objects/35/68f18802e56eb358e513a4b3fe8bee60ab71d2": "db46713e2721357f3cff43f4bd5a3211",
".git/objects/35/b73571540d2b58f1efcd22372f529b7f6c1aab": "93b086406a2c5503a7509a59566ed857",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/38/25a641c4c127d41ddf3524abff48c296e3bdaf": "db42a9e7a248e3cc35793fe157a94421",
".git/objects/3b/396a1e6c93029b69bbb5942a8122c5199b37b4": "50eb3785923a4d5c3e343b14b05f1e03",
".git/objects/3b/d015ac6a02dbfea1646e5479b6b9f00ef9243a": "562bc670dfc0f830c2ef195a7f405436",
".git/objects/41/573e0f7942e72bb28a7159248d1aae2b9b9bac": "bd2e3aac15d49d5bdc4799334fd4c4ca",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/43/da14d84ecb949ca5f5e8ecca3a514aa7fe1c7d": "d970b955bbe605c4f81533fde279992d",
".git/objects/44/3bf692a1278850b4f1d374c5d8422d3ef817c3": "9d2f766c96ed9e9f69324a25bb4ddbdf",
".git/objects/48/37b109059d5bedd49921ce82fe7727b15d72ab": "716471ecd476bddbd382659a9939f5bd",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/4c/f18be171c5c18d301c8320f6c797efda195940": "1e54ef2dd68787fd2327e58a15c2a163",
".git/objects/4e/1cd267220549722fc3298f0d64860abec7c981": "84b2b299d6215857bae137a5fc1fd479",
".git/objects/53/24733f4d847514a6cf1a94205fd8afbc7dffb2": "7e220671e79d3825f295695674c491f4",
".git/objects/53/3a49d1c2ca497df3c949589873990bed1623df": "800daa92a34a867f52ce530b9c0291f0",
".git/objects/53/9285107c1b3455be69a2745be43b6380cfc533": "50b40ddccf4517e250f5e0b25d167d26",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/5b/01669bab773810c9b6082cb00cf37eeda72269": "2209c348e4e24e0d0d3e3941eb5ce610",
".git/objects/5b/6dc9503c6908c0cef34448d31f75dae3224e87": "c264ed2af50c48840089180ede797789",
".git/objects/5f/a77b9c46a7eb762e0cd70c29289cc74f54ec3d": "5fe73cd1c3e9c7f67f1298721c8dd392",
".git/objects/64/3d6188d031e6b8c2a474d39d7b6eeecaf280e9": "97350e643ce07e58a76e5d3a604bbc74",
".git/objects/64/f8796617b83768072f6a0e09b2dfb4bd4463c0": "4e084aa85035a950aa58d95d154509ca",
".git/objects/66/e018946c1321139ca6c8ed31d53ed38d7343fb": "6408a69fd503a78c395603687a7c8b70",
".git/objects/67/04a23440029539f78bba48032c684cbcabec4f": "2296d13cb5ce00ed5ad972964ee0764f",
".git/objects/67/76564b16e9f14a4345cba83582ecddcd98328d": "5e50c4acf218798a44fd5ad14b47ce39",
".git/objects/67/ad0bfe6d2f67fc4301424245f0db2ce47caff9": "48ce98abca1dafab7d665c16b49243c2",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6a/dce9ec78d71a2108ffd79fe758c31788d5e880": "51b26aa1eff94f5c8c280e6848cad204",
".git/objects/6b/117ab0eace2d8e642882aea59ebc2959f2c52f": "458c1f91241a677e976e2f9a11e0463f",
".git/objects/6c/68a1ac52e5256e802d7bb94365583dc96b6214": "7d358ed25e9c61019b3faab4098c1148",
".git/objects/6f/bf2e7c2ddbe1b4c6cfa13256f95f3c13c187e3": "9e9fdca1297457e1f9f3a15dd7622b92",
".git/objects/70/88d5875135ca47064e1f44b3bdc7eab246e08a": "2cced5b72001d2aab9830a7eae90ccb0",
".git/objects/71/aad807dbc574624fbc67787a817570f078e3c8": "d891f090af18e063a9720ad1df20cf70",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/76/e2c9e25e29476c01536cb23e077e64ed2105ca": "3078394d03379f9d96f42192e12e0175",
".git/objects/7b/bedde3d6942380a53d84b6103a9dafae5838f9": "5d5733a28183f0a0f43f95ecbbfb1255",
".git/objects/7d/12c9aa955da1e26f5f7f4fcc7f74bbd03b0f27": "4bcae9bedc814639c957619fa5250006",
".git/objects/7e/233e488b451f042b44f2ebdbacb7537d4949f0": "edbc6ffa30d02f0ab24deb48115ab08e",
".git/objects/7f/164368e40b613edd8913daeb61c5b7924e3368": "ac66688bf60c1525dcd29ef4ed831644",
".git/objects/81/7d88f28c9af8673ec4ff70de5cfea881c918eb": "f0007dde275c959a3e7aaf14a5c1c1a8",
".git/objects/84/00685707eef730dce2f4f20b8a0997a4e25505": "352b1b77180912c33e66cf4f6770d00f",
".git/objects/86/8b6fbbc7d2e5a915d48aa6da9cae13c9d2217b": "d8149ff798c64ec5a65227ef5ff2bcb6",
".git/objects/87/5dc1cdd9fe9215eb2f8888c21db2be49807a10": "99ed9545cf44cf4ee356f20e639b73a1",
".git/objects/8a/a037d6046f4dfaf10fb11c264be88ccf85cb74": "9095ca971cab234decb898b759d53421",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8d/12e1be30b539da4a1a826c0b2bf01981b5b95b": "cf07d918e7434bd39a817e1c5dad09b2",
".git/objects/8d/24f1405eee2f40bdbd074bb7f5f3ec4c9b5765": "8de397d259d3902a0d24eab672dd2597",
".git/objects/8e/4fbfdfa809e0794b8fb4d20794812cfa83c56f": "8ae375dba575b576947c8875e07d7ad6",
".git/objects/8f/168ed9aa98ae2e9d8b26fc038e95184af8e340": "de0ef772ca9bd73d3b772009201db329",
".git/objects/93/01178e6e13ab6a748aed1ff8cf9fbf4faa8f9e": "1811697cfd8992b057a1573f231d6add",
".git/objects/94/f73ac5c2f10050133ec8e7c4d019346919d9fd": "14d41c190ecb793bf6c491a9e22aebb0",
".git/objects/96/d6d037e74e98da111806558dc14c0cfa785770": "ae87030d49b4ea11137b531e45e91928",
".git/objects/97/e5dc9af6e1093966c5cd42d608fd6fbb6a0c59": "769bbf0edfb872ed024f198c9d8d02c4",
".git/objects/9a/676ca42f8ab746481efea42b97ba8bd6fc8fe3": "96243d0b7bb048c6ad71cbfd38b6968b",
".git/objects/9a/ee969d52b7f43b3d411b0cd36d50cbedf5f896": "3e6e6f67b63eaab8db1eed02149df35c",
".git/objects/9c/091ea6a5899c9d3e66234395a40d3ee51ff987": "4f18e6f1b6f9f0a970dca732bbb665fb",
".git/objects/9c/43cdb4d7e5b6a19867c1f528f0c481cfa2d0b7": "afb1de7e91cca8434770ede841587551",
".git/objects/9e/a165b8aab5d6e77a5dcf99dd0b32ac8735ddb7": "adb35293569ae7c23ade59dbeefd2bf6",
".git/objects/9f/1284674193d86a46672c4d98ea07084c628d61": "8f37f13cc26f5ac148340a6a18418144",
".git/objects/a3/0e41a12bec53ec014424740dfa481ca01e9cd8": "6edd1f1bee1ed29f66a54be12180f22b",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/ac/0f908b9c9c73da558b45d65cc5c6094874d3e8": "36f70284c45d845ee774c46e7288afe5",
".git/objects/ae/cf5a07b15b97afa2c22e6385a192165377aaf8": "416e8a587c46bec20429b8f5344ba271",
".git/objects/af/ee7a507a9760eee07e7ded93f9683a7c602e98": "0bcde5761435760c3d0bf142c2617c5a",
".git/objects/b1/44c7bedc1aee19f0dde497ebb443764d59ac7a": "f657800b810ca957bf38f68557cbf7e0",
".git/objects/b2/c6aca57bc0d92ab3197d595766bf9285deea00": "a9be37e0f080009d8095a09eb2a7a1c8",
".git/objects/b3/c363d529006b02c6b8dd5dbda2a2c36b55a268": "27da77712b86c4fd7c08d0842b72b709",
".git/objects/b3/c4f6a1d74b4c4e2be283ec99668086b334167d": "b78d1edb426b191681fd7d190949f5b5",
".git/objects/b5/c6ca710c937527ca8d2d344214243d6db33832": "1e6ca9406fc3150067eabb10040766e1",
".git/objects/b5/def916f966e35b70eb8c19b3bd0f6a86b76ae7": "05aad75216e6ddc35b5f22dc19b5d14e",
".git/objects/b6/5164de707ffeaf0adfca5fca65532bf97e6903": "b0c794f74453ae77a83e942b9d58d94f",
".git/objects/b6/c7a0dc8c29a53abf4d8aaf7732da5292f61e50": "099a9560d98c8a34bac879f8743bbda2",
".git/objects/b8/10c255932af3a788b56c27367460e7c00723f8": "32061973dddc8512c552c21e6ec7fc23",
".git/objects/b9/5898f3a9de61f885e5c464006fa3429e9b5499": "6a5d2159f203b5dfa9e9945b5ed5d3a8",
".git/objects/bc/6af2e719a13748027561c7edf60ae2a0f9214c": "de776dd2fe2fe2ecb06c45151d7cee46",
".git/objects/bc/fdab4311f2201f45b341b36310e1cdb8051e34": "0b0600863ba421ab0448fd6eb8546d41",
".git/objects/bd/a64c34c8e1c6a2e5d0509f1b338db2c863c79f": "bc5bc21ba2df33ec28ef8fd619eaaf45",
".git/objects/be/ccb630ec032087c3bdb4282393c5147eb0bbcd": "52f27cbcc93dd9e72ea59b24a0d046f8",
".git/objects/bf/06238a272552bb824303f1ffd5f2a6c2631667": "6eb9406eedc423d40a98028a16aac1ef",
".git/objects/c0/cac73e8ebbee7caed4a3d9d6f816c7a8aed618": "aad6a07cd9f4b2788e004472f2b5a211",
".git/objects/c1/11d294e8e120be85c4c97301585ee3ac3855dc": "73a6254ad015e70040359ddd035c6aef",
".git/objects/c6/98c176e2c1247304a795c783cc6493cb69f770": "dbd4f66d564e21c1d9e970711aba0de5",
".git/objects/c9/e144f3d139f4bb72a01c2862455960a8cfc88a": "b074c9eba00d30126c0ab4c157dcdbea",
".git/objects/d3/cad61f917d281ebe50a1006041e324adc313b7": "46d5b1d719368cc3acffe6a2dab14385",
".git/objects/d4/653a1f72c8051bb6f225eab793ed254cb1cada": "6593c27d8d2d06b0c8972757ff2a69a4",
".git/objects/d9/b7ed20fb015b22cf73d1b3733a48c2c5dc10fb": "ccfc49fbf29f30ff2a0771fc2387e4f8",
".git/objects/da/bb421d2e766f3d2cc3a70cc7c95f390b4a7aac": "702e04d23258c09e86bb23d840575ac7",
".git/objects/dd/5d12458a0deae75b278b71dfa966fd4ad192a3": "9cef17bc04024093061aa8ac46f1eb03",
".git/objects/dd/b6126bffc8bde38bfc3d8ac677bbc1cca56c79": "2e226ab10967ec87ca14bdfa5322e20e",
".git/objects/dd/c84aa8eb70019270b812a6f7958f644cb12850": "8cc2436fd9552a58b71bebbb74e243b7",
".git/objects/dd/f4bfacb396e97546364ccfeeb9c31dfaea4c25": "049d11285bcbd30a249b4dff756126a0",
".git/objects/de/3c6877a2cb961937b2eff1cc0dae3a88cb5e8f": "671c263ac7f386e0cd7019d4f9fd5040",
".git/objects/de/467b7a5dd7d81b066be23c30efc36e2a665fcf": "c76d6fa8e1e423b53ffbdb43a09fb410",
".git/objects/de/bfa35241bab697399c63e0f895c4d7d9a74264": "40178027a2c9f451976860c6e98d262e",
".git/objects/e0/ad32a234e426bfd25538338f4105c64528705f": "562204313cf73e7b8aa9c07862a12684",
".git/objects/e1/5d8b84967ece8bd1ffaaa508ac8d69a7cb4994": "5ee2912f60a6725e78902100cc469019",
".git/objects/e3/4c2733c6ae28a0a48de6a1c1f233eeba43e961": "6159ecc92a8e7229d0db887188e85073",
".git/objects/e7/307e72c5e7bced5d36c776d0986bf71b605f15": "e493f8bfd12abe75c70dc4782e5beae0",
".git/objects/e7/3c59f3e8516053756b1aa209307af70fd48989": "9032ee57b22a17dd7425bccce9af0313",
".git/objects/e9/d97aca9071ee98a27216d5e8ccb0a8f7e8742f": "010c7c75a4c0dc9f7852c9dfd6f0bb3c",
".git/objects/ea/42351f99e7be2011a51bd1e17e1283a7a2330f": "90a95ef50ac0dce4c59e58a4c6607497",
".git/objects/ef/31d54c204d5ea7b5005ecff879e087ff8964c6": "e9420202d1de7d89538215a08561169c",
".git/objects/ef/c42e9876b58d5594a2a1efea82fbe80d621be4": "30bb0bd61fa0e413acad793a2a24c3e2",
".git/objects/f0/c3910d804d8e8aa39e2bfd85f5b3a973cd1811": "d136b03efdfea65e2bc855d279d58df4",
".git/objects/f1/008d60739a92a19227b71b3e5d91cd091d11fa": "80c5391db5ecc85886ac7035d9d8e9ca",
".git/objects/f1/e1283c067a3476db4e67584c3f747a8868a355": "62c738d1c5b4c1a3bf1dffd559a9bd4a",
".git/objects/f2/375d45ec28df88cd81ff57fba40ea5adbb0ee8": "12dc5f6048823e590307ae495b3946f4",
".git/objects/f2/4df7eef4d683353561499827bad6ad5c40c81e": "ea71f314e523569241ddd2eaeecca464",
".git/objects/f2/c66f047677e3e32b8235c525135e94c26af8eb": "500ca741bc58153cc0f54cc6916c2a6e",
".git/objects/f4/019b7551852a4a1c056e68ea6126a58ec81041": "2cdc863417565d48fdc46fb839dfaf88",
".git/objects/f4/071308ed4131a5056e629750d6b2591cf63d02": "6d9b71e36077144c70838aa8ffa858ef",
".git/objects/f5/20a1861086a3bb983fdb3e8b987c1ccbe9350b": "7e44bd8fe53122e575b8f9f892adfc24",
".git/objects/f6/7103d4f0fa7c8a6f4351fa552ca007faa89db3": "1e31420ea46713b2a2aeda72c6cc12df",
".git/objects/f7/e8c2673176c624bf759f5b0a1c70a5b46628a1": "7c89c356bde67cde893ae97cfc66e585",
".git/objects/f9/da71fc732ac7edc0fe263fb676729d44b5c77d": "49db4721da56fae0c7a21fa0e51a15ee",
".git/objects/fc/36a4785c50c04c9b18260e4709cda077ed352d": "ab0d50fcc4cfcaba8a0f3772db0b5fed",
".git/objects/fd/59feecb1a7b6e6c3f8a9da5fa50683db4ebae3": "0e8b9eb8a34e2d34b7475694306b7a30",
".git/ORIG_HEAD": "a230a29e8610133d847b80e56647777c",
".git/refs/heads/main": "3a19798e0de913904398beb425bf4e11",
".git/refs/remotes/origin/main": "3a19798e0de913904398beb425bf4e11",
"assets/AssetManifest.json": "3b70e455d5fcb873032ec64e8dc38027",
"assets/assets/fonts/bauhaus-93/Bauhaus%252093%2520Regular.ttf": "3066b11123e63381b8e2aa554b18bf32",
"assets/assets/fonts/Roboto/Roboto-Black.ttf": "d6a6f8878adb0d8e69f9fa2e0b622924",
"assets/assets/fonts/Roboto/Roboto-BlackItalic.ttf": "c3332e3b8feff748ecb0c6cb75d65eae",
"assets/assets/fonts/Roboto/Roboto-Bold.ttf": "b8e42971dec8d49207a8c8e2b919a6ac",
"assets/assets/fonts/Roboto/Roboto-BoldItalic.ttf": "fd6e9700781c4aaae877999d09db9e09",
"assets/assets/fonts/Roboto/Roboto-Italic.ttf": "cebd892d1acfcc455f5e52d4104f2719",
"assets/assets/fonts/Roboto/Roboto-Light.ttf": "881e150ab929e26d1f812c4342c15a7c",
"assets/assets/fonts/Roboto/Roboto-LightItalic.ttf": "5788d5ce921d7a9b4fa0eaa9bf7fec8d",
"assets/assets/fonts/Roboto/Roboto-Medium.ttf": "68ea4734cf86bd544650aee05137d7bb",
"assets/assets/fonts/Roboto/Roboto-MediumItalic.ttf": "c16d19c2c0fd1278390a82fc245f4923",
"assets/assets/fonts/Roboto/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/assets/fonts/Roboto/Roboto-Thin.ttf": "66209ae01f484e46679622dd607fcbc5",
"assets/assets/fonts/Roboto/Roboto-ThinItalic.ttf": "7bcadd0675fe47d69c2d8aaef683416f",
"assets/assets/images/2.0x/flutter_logo.png": "4efb9624185aff46ca4bf5ab96496736",
"assets/assets/images/3.0x/flutter_logo.png": "b8ead818b15b6518ac627b53376b42f2",
"assets/assets/images/flutter_logo.png": "478970b138ad955405d4efda115125bf",
"assets/assets/images/Group%252068.png": "87e45eda8e31c68a52e2e9ff34be54be",
"assets/assets/images/icon_overview.png": "5a4b71a41a9f7491fa467efe08b054d3",
"assets/assets/images/Logo1.png": "bce6061e748cf9f4983ac43b91e74846",
"assets/assets/images/Logo2_%2520dark%2520theme.png": "66b4dab04ff7d6c0069572e41a0a8c3e",
"assets/FontManifest.json": "08be4f07e4043dd734fa976e3fdf6c4f",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "774bbba52ac8e6a07d368e829cc7fb1c",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "bce6061e748cf9f4983ac43b91e74846",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "bce6061e748cf9f4983ac43b91e74846",
"icons/Icon-512.png": "bce6061e748cf9f4983ac43b91e74846",
"icons/Icon-maskable-192.png": "bce6061e748cf9f4983ac43b91e74846",
"icons/Icon-maskable-512.png": "bce6061e748cf9f4983ac43b91e74846",
"index.html": "7e64f70e869eea774d5d274e23626ce7",
"/": "7e64f70e869eea774d5d274e23626ce7",
"main.dart.js": "e6b5ff5db3eca950504fff13d81d27cb",
"manifest.json": "605a0a834e8b64cec9bf3a1efae96fe2",
"version.json": "0256e032b27e8e8e9e87c3236a573c6a"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
