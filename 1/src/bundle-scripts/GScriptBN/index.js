System.register("chunks:///_virtual/AdConfigInitializer.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AdConfigManager.ts', './AdManager.ts'], function (exports) {
  var _asyncToGenerator, cclegacy, _decorator, AdConfigManager, AdPlatform;
  return {
    setters: [function (module) {
      _asyncToGenerator = module.asyncToGenerator;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      AdConfigManager = module.AdConfigManager;
    }, function (module) {
      AdPlatform = module.AdPlatform;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "3f9d1jKak1LgoGdRYx4aHDH", "AdConfigInitializer", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /**
       * 广告配置初始化器
       * 用于在游戏启动时加载广告配置
       */
      var AdConfigInitializer = exports('AdConfigInitializer', (_dec = ccclass('AdConfigInitializer'), _dec(_class = /*#__PURE__*/function () {
        function AdConfigInitializer() {}
        /**
         * 初始化广告配置
         */
        AdConfigInitializer.init = function init() {
          var configManager = AdConfigManager.getInstance();

          // 尝试从本地配置文件加载
          this.loadLocalConfig();

          // 在实际项目中，可以尝试从远程服务器加载配置
          // this.loadRemoteConfig();
        }

        /**
         * 从本地配置文件加载
         */;
        AdConfigInitializer.loadLocalConfig = function loadLocalConfig() {
          try {
            // 在实际项目中，这里应该从resources目录加载配置文件
            // 这里为了演示，直接使用默认配置
            console.log('AdConfigInitializer: 使用默认广告配置');

            // 可以在这里添加自定义配置
            // const customConfig = {
            //     wechat: {
            //         rewardedVideoAdUnitId: 'your-custom-wechat-rewarded-ad-unit-id',
            //         interstitialAdUnitId: 'your-custom-wechat-interstitial-ad-unit-id',
            //     }
            // };
            // AdConfigManager.getInstance().loadFromJson(customConfig);
          } catch (error) {
            console.error('AdConfigInitializer: 加载本地广告配置失败', error);
          }
        }

        /**
         * 从远程服务器加载配置
         */;
        AdConfigInitializer.loadRemoteConfig = /*#__PURE__*/
        function () {
          var _loadRemoteConfig = _asyncToGenerator(function* () {
            try {
              // 在实际项目中，这里应该从远程服务器加载配置
              // const configUrl = 'https://your-server.com/ad-config.json';
              // await AdConfigManager.getInstance().loadFromUrl(configUrl);

              console.log('AdConfigInitializer: 远程广告配置加载功能已禁用');
            } catch (error) {
              console.error('AdConfigInitializer: 加载远程广告配置失败', error);
              // 远程配置加载失败时，使用本地默认配置
              this.loadLocalConfig();
            }
          });
          function loadRemoteConfig() {
            return _loadRemoteConfig.apply(this, arguments);
          }
          return loadRemoteConfig;
        }()
        /**
         * 获取当前广告配置
         */;

        AdConfigInitializer.getCurrentConfig = function getCurrentConfig() {
          return AdConfigManager.getInstance().getAdConfig(AdPlatform.DEFAULT);
        };
        return AdConfigInitializer;
      }()) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AdConfigManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AdManager.ts'], function (exports) {
  var _asyncToGenerator, cclegacy, AdPlatform;
  return {
    setters: [function (module) {
      _asyncToGenerator = module.asyncToGenerator;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      AdPlatform = module.AdPlatform;
    }],
    execute: function () {
      cclegacy._RF.push({}, "a0d1aUiNzNMF75o8c3b+yDk", "AdConfigManager", undefined);

      /**
       * 广告配置接口
       */

      /**
       * 平台广告配置接口
       */

      /**
       * 广告配置管理器
       * 用于管理不同平台的广告单元ID配置
       */
      var AdConfigManager = exports('AdConfigManager', /*#__PURE__*/function () {
        /**
         * 获取AdConfigManager单例
         */
        AdConfigManager.getInstance = function getInstance() {
          if (!AdConfigManager._instance) {
            AdConfigManager._instance = new AdConfigManager();
          }
          return AdConfigManager._instance;
        }

        /**
         * 平台广告配置映射
         */;

        /**
         * 构造函数，私有化确保单例
         */
        function AdConfigManager() {
          this.platformConfigs = new Map();
          // 初始化默认配置
          this.initDefaultConfigs();
        }

        /**
         * 初始化默认配置
         */
        var _proto = AdConfigManager.prototype;
        _proto.initDefaultConfigs = function initDefaultConfigs() {
          // 微信小游戏默认配置
          this.platformConfigs.set(AdPlatform.WECHAT, {
            rewardedVideoAdUnitId: 'adunit-8bb6f4d5faa29d1e',
            interstitialAdUnitId: 'adunit-interstitial-wechat',
            bannerAdUnitId: 'adunit-banner-wechat',
            nativeAdUnitId: 'adunit-native-wechat'
          });

          // 字节跳动小游戏默认配置
          this.platformConfigs.set(AdPlatform.BYTEDANCE, {
            rewardedVideoAdUnitId: 'your-bytedance-rewarded-ad-unit-id',
            interstitialAdUnitId: 'your-bytedance-interstitial-ad-unit-id',
            bannerAdUnitId: 'your-bytedance-banner-ad-unit-id',
            nativeAdUnitId: 'your-bytedance-native-ad-unit-id'
          });

          // 默认环境配置（用于测试）
          this.platformConfigs.set(AdPlatform.DEFAULT, {
            rewardedVideoAdUnitId: 'adunit-8bb6f4d5faa29d1e',
            interstitialAdUnitId: 'test-interstitial-ad-unit-id',
            bannerAdUnitId: 'test-banner-ad-unit-id',
            nativeAdUnitId: 'test-native-ad-unit-id'
          });
        }

        /**
         * 获取指定平台的广告配置
         * @param platform 平台类型
         * @returns 广告配置
         */;
        _proto.getAdConfig = function getAdConfig(platform) {
          return this.platformConfigs.get(platform) || null;
        }

        /**
         * 设置指定平台的广告配置
         * @param platform 平台类型
         * @param config 广告配置
         */;
        _proto.setAdConfig = function setAdConfig(platform, config) {
          this.platformConfigs.set(platform, config);
          console.log("AdConfigManager: \u5DF2\u66F4\u65B0 " + this.getPlatformName(platform) + " \u7684\u5E7F\u544A\u914D\u7F6E");
        }

        /**
         * 批量设置平台广告配置
         * @param configs 平台广告配置数组
         */;
        _proto.setAdConfigs = function setAdConfigs(configs) {
          var _this = this;
          configs.forEach(function (_ref) {
            var platform = _ref.platform,
              config = _ref.config;
            _this.setAdConfig(platform, config);
          });
        }

        /**
         * 从JSON对象加载配置
         * @param jsonConfig JSON配置对象
         */;
        _proto.loadFromJson = function loadFromJson(jsonConfig) {
          for (var platformName in jsonConfig) {
            var platform = this.parsePlatformName(platformName);
            if (platform !== null) {
              this.setAdConfig(platform, jsonConfig[platformName]);
            }
          }
        }

        /**
         * 从远程URL加载配置
         * @param url 配置文件URL
         * @returns Promise<void>
         */;
        _proto.loadFromUrl = /*#__PURE__*/
        function () {
          var _loadFromUrl = _asyncToGenerator(function* (url) {
            try {
              var response = yield fetch(url);
              if (!response.ok) {
                throw new Error("HTTP error! status: " + response.status);
              }
              var jsonConfig = yield response.json();
              this.loadFromJson(jsonConfig);
              console.log('AdConfigManager: 从远程URL加载配置成功');
            } catch (error) {
              console.error('AdConfigManager: 从远程URL加载配置失败', error);
            }
          });
          function loadFromUrl(_x) {
            return _loadFromUrl.apply(this, arguments);
          }
          return loadFromUrl;
        }()
        /**
         * 获取所有平台配置
         * @returns 所有平台配置
         */;

        _proto.getAllConfigs = function getAllConfigs() {
          var configs = [];
          this.platformConfigs.forEach(function (config, platform) {
            configs.push({
              platform: platform,
              config: config
            });
          });
          return configs;
        }

        /**
         * 重置为默认配置
         */;
        _proto.resetToDefault = function resetToDefault() {
          this.platformConfigs.clear();
          this.initDefaultConfigs();
          console.log('AdConfigManager: 已重置为默认配置');
        }

        /**
         * 解析平台名称
         * @param platformName 平台名称
         * @returns 平台枚举值
         */;
        _proto.parsePlatformName = function parsePlatformName(platformName) {
          switch (platformName.toLowerCase()) {
            case 'wechat':
            case 'weixin':
            case 'wx':
              return AdPlatform.WECHAT;
            case 'bytedance':
            case 'tt':
            case 'douyin':
              return AdPlatform.BYTEDANCE;
            case 'default':
            case 'test':
              return AdPlatform.DEFAULT;
            default:
              return null;
          }
        }

        /**
         * 获取平台名称
         * @param platform 平台枚举
         * @returns 平台名称
         */;
        _proto.getPlatformName = function getPlatformName(platform) {
          switch (platform) {
            case AdPlatform.WECHAT:
              return '微信小游戏';
            case AdPlatform.BYTEDANCE:
              return '字节跳动小游戏';
            case AdPlatform.DEFAULT:
              return '默认环境';
            default:
              return '未知平台';
          }
        };
        return AdConfigManager;
      }());
      AdConfigManager._instance = null;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AdManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './CoinManager.ts', './WechatAdAdapter.ts', './ByteDanceAdAdapter.ts', './PlatformDetector.ts', './AdConfigManager.ts'], function (exports) {
  var _createForOfIteratorHelperLoose, cclegacy, _decorator, CoinManager, WechatAdAdapter, ByteDanceAdAdapter, PlatformDetector, AdConfigManager;
  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      CoinManager = module.default;
    }, function (module) {
      WechatAdAdapter = module.WechatAdAdapter;
    }, function (module) {
      ByteDanceAdAdapter = module.ByteDanceAdAdapter;
    }, function (module) {
      PlatformDetector = module.PlatformDetector;
    }, function (module) {
      AdConfigManager = module.AdConfigManager;
    }],
    execute: function () {
      cclegacy._RF.push({}, "9930f2HkQhGkbweHCiqDI9n", "AdManager", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /**
       * 广告类型枚举
       */
      var AdType = exports('AdType', /*#__PURE__*/function (AdType) {
        AdType["REWARD_VIDEO"] = "reward_video";
        AdType["INTERSTITIAL"] = "interstitial";
        AdType["BANNER"] = "BANNER";
        AdType["NATIVE"] = "NATIVE";
        return AdType;
      }({})); // 插屏广告

      /**
       * 广告加载状态枚举
       */
      var AdLoadState = exports('AdLoadState', /*#__PURE__*/function (AdLoadState) {
        AdLoadState["NOT_LOADED"] = "not_loaded";
        AdLoadState["LOADING"] = "loading";
        AdLoadState["LOADED"] = "loaded";
        AdLoadState["FAILED"] = "failed";
        return AdLoadState;
      }({})); // 加载失败

      /**
       * 广告事件类型枚举
       */
      var AdEventType = exports('AdEventType', /*#__PURE__*/function (AdEventType) {
        AdEventType["LOAD_SUCCESS"] = "load_success";
        AdEventType["LOAD_FAILED"] = "load_failed";
        AdEventType["SHOW_SUCCESS"] = "show_success";
        AdEventType["SHOW_FAILED"] = "show_failed";
        AdEventType["CLICKED"] = "clicked";
        AdEventType["CLOSED"] = "closed";
        AdEventType["REWARDED"] = "rewarded";
        return AdEventType;
      }({})); // 获得奖励

      /**
       * 广告事件参数接口
       */

      /**
       * 广告事件监听器类型
       */

      /**
       * 支持的广告平台枚举
       */
      var AdPlatform = exports('AdPlatform', /*#__PURE__*/function (AdPlatform) {
        AdPlatform["WECHAT"] = "wechat";
        AdPlatform["BYTEDANCE"] = "bytedance";
        AdPlatform["DEFAULT"] = "default";
        return AdPlatform;
      }({})); // 默认模拟实现

      /**
       * 广告管理器类
       * 实现广告系统的基础功能，包括广告初始化、加载、展示等
       */
      var AdManager = exports('AdManager', /*#__PURE__*/function () {
        /**
         * 获取AdManager单例
         */
        AdManager.getInstance = function getInstance() {
          if (!AdManager._instance) {
            AdManager._instance = new AdManager();
          }
          return AdManager._instance;
        }

        /**
         * 广告事件监听器列表
         */;

        /**
         * 构造函数，私有化确保单例
         */
        function AdManager() {
          this.eventListeners = [];
          /**
           * 当前使用的广告平台
           */
          this.currentPlatform = AdPlatform.DEFAULT;
          /**
           * 广告适配器实例
           */
          this.adAdapter = null;
          /**
           * 广告加载状态映射
           */
          this.adLoadStates = new Map();
          /**
           * 激励视频广告实例
           */
          this.rewardVideoAd = null;
          /**
           * 激励视频广告加载重试次数
           */
          this.rewardVideoLoadRetryCount = 0;
          /**
           * 激励视频广告最大重试次数
           */
          this.REWARD_VIDEO_MAX_RETRY_COUNT = 3;
          /**
           * 插屏广告实例
           */
          this.interstitialAd = null;
          /**
           * 插屏广告加载重试次数
           */
          this.interstitialLoadRetryCount = 0;
          /**
           * 插屏广告最大重试次数
           */
          this.INTERSTITIAL_MAX_RETRY_COUNT = 3;
          /**
           * 广告奖励配置
           */
          this.adRewardConfig = new Map();
          /**
           * 每日观看广告次数限制
           */
          this.dailyAdWatchLimits = new Map();
          /**
           * 今日已观看广告次数
           */
          this.todayAdWatchCount = new Map();
          /**
           * 广告单元ID映射
           */
          this.adUnitIds = new Map();
          // 初始化广告加载状态
          this.adLoadStates.set(AdType.REWARD_VIDEO, AdLoadState.NOT_LOADED);
          this.adLoadStates.set(AdType.INTERSTITIAL, AdLoadState.NOT_LOADED);

          // 初始化广告单元ID（实际项目中应该从配置文件中读取）
          //adUnitId: 'adunit-8bb6f4d5faa29d1e'
          this.adUnitIds.set(AdType.REWARD_VIDEO, 'adunit-8bb6f4d5faa29d1e');
          this.adUnitIds.set(AdType.INTERSTITIAL, 'interstitial_unit_id');

          // 初始化广告奖励配置
          this.initAdRewardConfig();

          // 初始化每日观看广告次数限制
          this.dailyAdWatchLimits.set(AdType.REWARD_VIDEO, 10000); // 激励视频每日最多观看10次
          this.dailyAdWatchLimits.set(AdType.INTERSTITIAL, 20000); // 插屏广告每日最多观看20次

          // 初始化今日已观看广告次数
          this.loadTodayAdWatchCount();
        }

        /**
         * 初始化广告奖励配置
         */
        var _proto = AdManager.prototype;
        _proto.initAdRewardConfig = function initAdRewardConfig() {
          // 激励视频广告奖励配置
          this.adRewardConfig.set('reward_video_default', {
            type: 'coin',
            amount: 100
          });
          this.adRewardConfig.set('reward_video_double', {
            type: 'coin',
            amount: 200
          });
          this.adRewardConfig.set('reward_video_special', {
            type: 'coin',
            amount: 500
          });

          // 消消三国游戏相关广告奖励配置
          // reward_video_reward_video_match3_win_reward
          this.adRewardConfig.set('reward_video_match3_lose_reward', {
            type: 'coin',
            amount: 360
          });
          this.adRewardConfig.set('reward_video_reward_video_match3_win_reward', {
            type: 'coin',
            amount: 180
          });

          // 插屏广告奖励配置（插屏广告通常不提供奖励，这里仅作示例）
          this.adRewardConfig.set('interstitial_default', {
            type: 'coin',
            amount: 10
          });
        }

        /**
         * 加载今日已观看广告次数
         */;
        _proto.loadTodayAdWatchCount = function loadTodayAdWatchCount() {
          var today = new Date().toDateString();
          var savedDate = localStorage.getItem('ad_watch_date');
          if (savedDate === today) {
            // 同一天，加载已保存的观看次数
            var rewardVideoCount = parseInt(localStorage.getItem('ad_watch_reward_video_count') || '0', 10);
            var interstitialCount = parseInt(localStorage.getItem('ad_watch_interstitial_count') || '0', 10);
            this.todayAdWatchCount.set(AdType.REWARD_VIDEO, rewardVideoCount);
            this.todayAdWatchCount.set(AdType.INTERSTITIAL, interstitialCount);
          } else {
            // 新的一天，重置观看次数
            this.todayAdWatchCount.set(AdType.REWARD_VIDEO, 0);
            this.todayAdWatchCount.set(AdType.INTERSTITIAL, 0);

            // 保存日期
            localStorage.setItem('ad_watch_date', today);
            localStorage.setItem('ad_watch_reward_video_count', '0');
            localStorage.setItem('ad_watch_interstitial_count', '0');
          }
        }

        /**
         * 保存今日已观看广告次数
         */;
        _proto.saveTodayAdWatchCount = function saveTodayAdWatchCount() {
          var _this$todayAdWatchCou, _this$todayAdWatchCou2;
          localStorage.setItem('ad_watch_reward_video_count', ((_this$todayAdWatchCou = this.todayAdWatchCount.get(AdType.REWARD_VIDEO)) == null ? void 0 : _this$todayAdWatchCou.toString()) || '0');
          localStorage.setItem('ad_watch_interstitial_count', ((_this$todayAdWatchCou2 = this.todayAdWatchCount.get(AdType.INTERSTITIAL)) == null ? void 0 : _this$todayAdWatchCou2.toString()) || '0');
        }

        /**
         * 获取今日已观看广告次数
         * @param adType 广告类型
         * @returns 今日已观看次数
         */;
        _proto.getTodayAdWatchCount = function getTodayAdWatchCount(adType) {
          return this.todayAdWatchCount.get(adType) || 0;
        }

        /**
         * 获取每日观看广告次数限制
         * @param adType 广告类型
         * @returns 每日观看次数限制
         */;
        _proto.getDailyAdWatchLimit = function getDailyAdWatchLimit(adType) {
          return this.dailyAdWatchLimits.get(adType) || 0;
        }

        /**
         * 检查是否可以观看广告
         * @param adType 广告类型
         * @returns 是否可以观看
         */;
        _proto.canWatchAd = function canWatchAd(adType) {
          var todayCount = this.getTodayAdWatchCount(adType);
          var limit = this.getDailyAdWatchLimit(adType);
          return todayCount < limit;
        }

        /**
         * 增加今日观看广告次数
         * @param adType 广告类型
         */;
        _proto.incrementTodayAdWatchCount = function incrementTodayAdWatchCount(adType) {
          var currentCount = this.getTodayAdWatchCount(adType);
          this.todayAdWatchCount.set(adType, currentCount + 1);
          this.saveTodayAdWatchCount();
        };
        _proto.init = function init(adUnitIds) {
          console.log('AdManager: 初始化广告系统');

          // 初始化广告配置
          this.initAdConfig();

          // 检测当前运行平台
          this.detectPlatform();

          // 如果传入了广告单元ID配置，则更新配置
          if (adUnitIds) {
            for (var adType in adUnitIds) {
              if (adUnitIds[adType]) {
                this.adUnitIds.set(adType, adUnitIds[adType]);
              }
            }
          }

          // 初始化适配器
          this.initAdAdapter();

          // 触发初始化完成事件
          this.triggerEvent({
            type: AdEventType.LOAD_SUCCESS,
            adType: AdType.REWARD_VIDEO
          });
        }

        /**
         * 初始化广告配置
         */;
        _proto.initAdConfig = function initAdConfig() {
          // 在实际项目中，这里应该从配置文件或服务器加载广告配置
          // 这里为了演示，直接使用默认配置
          console.log('AdManager: 初始化广告配置');

          // 可以在这里添加自定义配置
          // const customConfig = {
          //     wechat: {
          //         rewardedVideoAdUnitId: 'your-custom-wechat-rewarded-ad-unit-id',
          //         interstitialAdUnitId: 'your-custom-wechat-interstitial-ad-unit-id',
          //     }
          // };
          // AdConfigManager.getInstance().loadFromJson(customConfig);
        }

        /**
         * 检测当前运行平台
         */;
        _proto.detectPlatform = function detectPlatform() {
          this.currentPlatform = PlatformDetector.getInstance().detectPlatform();
          console.log("AdManager: \u5F53\u524D\u5E73\u53F0\u4E3A " + PlatformDetector.getInstance().getPlatformName());
        }

        /**
         * 初始化广告适配器
         */;
        _proto.initAdAdapter = function initAdAdapter() {
          var _this = this;
          // 获取当前平台的广告配置
          var adConfig = AdConfigManager.getInstance().getAdConfig(this.currentPlatform);
          if (!adConfig) {
            console.error("AdManager: \u65E0\u6CD5\u83B7\u53D6 " + PlatformDetector.getInstance().getPlatformName() + " \u7684\u5E7F\u544A\u914D\u7F6E");
            return;
          }

          // 根据平台创建适配器
          switch (this.currentPlatform) {
            case AdPlatform.WECHAT:
              this.adAdapter = new WechatAdAdapter();
              console.log('AdManager: 已初始化微信小游戏广告适配器');
              break;
            case AdPlatform.BYTEDANCE:
              this.adAdapter = new ByteDanceAdAdapter();
              console.log('AdManager: 已初始化字节跳动小游戏广告适配器');
              break;
            default:
              // 默认不使用适配器，使用原有模拟实现
              this.adAdapter = null;
              // 初始化原有模拟实现
              this.initRewardVideoAd();
              this.initInterstitialAd();
              return;
          }

          // 初始化适配器
          if (this.adAdapter) {
            var _this$adAdapter$init;
            // 设置事件监听，将适配器事件转发到AdManager的事件系统
            this.adAdapter.addEventListener(function (param) {
              _this.triggerEvent(param);
            });

            // 设置适配器事件监听器
            this.setupAdapterEventListeners();

            // 初始化适配器，传递广告配置
            this.adAdapter.init((_this$adAdapter$init = {}, _this$adAdapter$init[AdType.REWARD_VIDEO] = adConfig.rewardedVideoAdUnitId, _this$adAdapter$init[AdType.INTERSTITIAL] = adConfig.interstitialAdUnitId, _this$adAdapter$init[AdType.BANNER] = adConfig.bannerAdUnitId, _this$adAdapter$init[AdType.NATIVE] = adConfig.nativeAdUnitId, _this$adAdapter$init));
          }
        }

        /**
         * 设置适配器事件监听器
         */;
        _proto.setupAdapterEventListeners = function setupAdapterEventListeners() {
          // 这个方法用于设置适配器的事件监听器
          // 由于我们在initAdAdapter中已经通过addEventListener设置了事件转发
          // 所以这个方法可以留空，或者用于额外的适配器特定事件监听
          console.log('AdManager: 设置适配器事件监听器');
        }

        /**
         * 初始化激励视频广告
         */;
        _proto.initRewardVideoAd = function initRewardVideoAd() {
          // 这里为模拟实现
          console.log('AdManager: 初始化激励视频广告');
          this.loadRewardVideoAd();
        }

        /**
         * 初始化插屏广告
         */;
        _proto.initInterstitialAd = function initInterstitialAd() {
          // 在实际项目中，这里应该根据平台初始化相应的广告SDK
          // 例如：if (window['wx']) { this.initWechatInterstitialAd(); }

          // 这里为模拟实现
          console.log('AdManager: 初始化插屏广告');
          this.loadInterstitialAd();
        }

        /**
         * 添加广告事件监听器
         * @param listener 事件监听器
         */;
        _proto.addEventListener = function addEventListener(listener) {
          if (this.eventListeners.indexOf(listener) === -1) {
            this.eventListeners.push(listener);
          }
        }

        /**
         * 移除广告事件监听器
         * @param listener 事件监听器
         */;
        _proto.removeEventListener = function removeEventListener(listener) {
          var index = this.eventListeners.indexOf(listener);
          if (index !== -1) {
            this.eventListeners.splice(index, 1);
          }
        }

        /**
         * 触发广告事件
         * @param param 事件参数
         */;
        _proto.triggerEvent = function triggerEvent(param) {
          for (var _iterator = _createForOfIteratorHelperLoose(this.eventListeners), _step; !(_step = _iterator()).done;) {
            var listener = _step.value;
            try {
              listener(param);
            } catch (error) {
              console.error('AdManager: 事件监听器执行错误', error);
            }
          }
        }

        /**
         * 获取广告配置
         * @returns 广告配置
         */;
        _proto.getAdConfig = function getAdConfig() {
          return AdConfigManager.getInstance().getAdConfig(this.currentPlatform);
        }

        /**
         * 设置广告配置
         * @param config 广告配置
         */;
        _proto.setAdConfig = function setAdConfig(config) {
          AdConfigManager.getInstance().setAdConfig(this.currentPlatform, config);
          // 如果适配器已存在，重新初始化
          if (this.adAdapter) {
            this.adAdapter.destroy();
            this.initAdAdapter();
          }
        }

        /**
         * 获取当前平台信息
         * @returns 平台信息
         */;
        _proto.getPlatformInfo = function getPlatformInfo() {
          return PlatformDetector.getInstance().getPlatformInfo();
        }

        /**
         * 获取广告加载状态
         * @param adType 广告类型
         * @returns 广告加载状态
         */;
        _proto.getAdLoadState = function getAdLoadState(adType) {
          // 如果有适配器，使用适配器的状态
          if (this.adAdapter) {
            return this.adAdapter.getAdLoadState(adType);
          }

          // 否则使用原有模拟实现的状态
          return this.adLoadStates.get(adType) || AdLoadState.NOT_LOADED;
        }

        /**
         * 获取广告单元ID
         * @param adType 广告类型
         * @returns 广告单元ID
         */;
        _proto.getAdUnitId = function getAdUnitId(adType) {
          return this.adUnitIds.get(adType);
        }

        /**
         * 检查广告是否已加载
         * @param adType 广告类型
         * @returns 是否已加载
         */;
        _proto.isAdLoaded = function isAdLoaded(adType) {
          // 如果有适配器，使用适配器的状态
          if (this.adAdapter) {
            return this.adAdapter.isAdLoaded(adType);
          }

          // 否则使用原有模拟实现的状态
          return this.getAdLoadState(adType) === AdLoadState.LOADED;
        }

        /**
         * 加载广告
         * @param adType 广告类型
         */;
        _proto.loadAd = function loadAd(adType) {
          // 如果有适配器，使用适配器加载广告
          if (this.adAdapter) {
            this.adAdapter.loadAd(adType);
            return;
          }

          // 否则使用原有模拟实现
          switch (adType) {
            case AdType.REWARD_VIDEO:
              this.loadRewardVideoAd();
              break;
            case AdType.INTERSTITIAL:
              this.loadInterstitialAd();
              break;
            default:
              console.log("AdManager: \u4E0D\u652F\u6301\u7684\u5E7F\u544A\u7C7B\u578B " + adType);
              break;
          }
        }

        /**
         * 加载插屏广告
         */;
        _proto.loadInterstitialAd = function loadInterstitialAd() {
          var _this2 = this;
          if (this.getAdLoadState(AdType.INTERSTITIAL) === AdLoadState.LOADING) {
            console.log('AdManager: 插屏广告正在加载中，请勿重复加载');
            return;
          }
          console.log('AdManager: 开始加载插屏广告');
          this.adLoadStates.set(AdType.INTERSTITIAL, AdLoadState.LOADING);

          // 在实际项目中，这里应该调用广告SDK加载广告
          // 以下为模拟加载过程
          setTimeout(function () {
            // 模拟加载成功
            _this2.adLoadStates.set(AdType.INTERSTITIAL, AdLoadState.LOADED);
            _this2.interstitialLoadRetryCount = 0;
            _this2.triggerEvent({
              type: AdEventType.LOAD_SUCCESS,
              adType: AdType.INTERSTITIAL,
              adUnitId: _this2.getAdUnitId(AdType.INTERSTITIAL)
            });
            console.log('AdManager: 插屏广告加载成功');
          }, 1000);
        }

        /**
         * 展示插屏广告
         * @returns 是否成功展示
         */;
        _proto.showInterstitialAd = function showInterstitialAd() {
          var _this3 = this;
          // 如果有适配器，不应该调用此方法
          if (this.adAdapter) {
            console.warn('AdManager: 插屏广告展示应该通过适配器进行，不应直接调用此方法');
            return false;
          }
          if (!this.isAdLoaded(AdType.INTERSTITIAL)) {
            console.log('AdManager: 插屏广告未加载，尝试重新加载');
            this.loadInterstitialAd();
            return false;
          }
          console.log('AdManager: 开始展示插屏广告');

          // 在实际项目中，这里应该调用广告SDK展示广告
          // 以下为模拟展示过程
          this.adLoadStates.set(AdType.INTERSTITIAL, AdLoadState.NOT_LOADED);
          setTimeout(function () {
            // 模拟展示成功
            _this3.triggerEvent({
              type: AdEventType.SHOW_SUCCESS,
              adType: AdType.INTERSTITIAL,
              adUnitId: _this3.getAdUnitId(AdType.INTERSTITIAL)
            });

            // 模拟广告关闭
            setTimeout(function () {
              _this3.triggerEvent({
                type: AdEventType.CLOSED,
                adType: AdType.INTERSTITIAL,
                adUnitId: _this3.getAdUnitId(AdType.INTERSTITIAL)
              });

              // 自动重新加载广告
              _this3.loadInterstitialAd();
            }, 2000);
          }, 500);
          return true;
        };
        _proto.loadRewardVideoAd = function loadRewardVideoAd() {
          var _this4 = this;
          if (this.getAdLoadState(AdType.REWARD_VIDEO) === AdLoadState.LOADING) {
            console.log('AdManager: 激励视频广告正在加载中，请勿重复加载');
            return;
          }
          console.log('AdManager: 开始加载激励视频广告');
          this.adLoadStates.set(AdType.REWARD_VIDEO, AdLoadState.LOADING);

          // 在实际项目中，这里应该调用广告SDK加载广告
          // 以下为模拟加载过程
          setTimeout(function () {
            // 模拟加载成功
            _this4.adLoadStates.set(AdType.REWARD_VIDEO, AdLoadState.LOADED);
            _this4.rewardVideoLoadRetryCount = 0;
            _this4.triggerEvent({
              type: AdEventType.LOAD_SUCCESS,
              adType: AdType.REWARD_VIDEO,
              adUnitId: _this4.getAdUnitId(AdType.REWARD_VIDEO)
            });
            console.log('AdManager: 激励视频广告加载成功');
          }, 1000);
        }

        /**
         * 展示激励视频广告
         * @param rewardKey 奖励配置键
         * @returns 是否成功展示
         */;
        _proto.showRewardVideoAd = function showRewardVideoAd(rewardKey) {
          var _this5 = this;
          if (rewardKey === void 0) {
            rewardKey = 'default';
          }
          // 如果有适配器，不应该调用此方法
          if (this.adAdapter) {
            console.warn('AdManager: 激励视频广告展示应该通过适配器进行，不应直接调用此方法');
            return false;
          }
          if (!this.isAdLoaded(AdType.REWARD_VIDEO)) {
            console.log('AdManager: 激励视频广告未加载，尝试重新加载');
            this.loadRewardVideoAd();
            return false;
          }
          if (!this.canWatchAd(AdType.REWARD_VIDEO)) {
            console.log('AdManager: 今日观看激励视频广告次数已达上限');
            return false;
          }
          console.log('AdManager: 开始展示激励视频广告');

          // 在实际项目中，这里应该调用广告SDK展示广告
          // 以下为模拟展示过程
          this.adLoadStates.set(AdType.REWARD_VIDEO, AdLoadState.NOT_LOADED);
          setTimeout(function () {
            // 模拟展示成功
            _this5.triggerEvent({
              type: AdEventType.SHOW_SUCCESS,
              adType: AdType.REWARD_VIDEO,
              adUnitId: _this5.getAdUnitId(AdType.REWARD_VIDEO)
            });

            // 模拟获得奖励
            setTimeout(function () {
              // 发放奖励
              _this5.grantAdReward(AdType.REWARD_VIDEO, rewardKey);

              // 触发奖励事件
              var rewardInfo = _this5.getAdRewardInfo(AdType.REWARD_VIDEO, rewardKey);
              _this5.triggerEvent({
                type: AdEventType.REWARDED,
                adType: AdType.REWARD_VIDEO,
                adUnitId: _this5.getAdUnitId(AdType.REWARD_VIDEO),
                reward: rewardInfo || {
                  type: 'coin',
                  amount: 0
                }
              });
            }, 2000);

            // 模拟广告关闭
            setTimeout(function () {
              _this5.triggerEvent({
                type: AdEventType.CLOSED,
                adType: AdType.REWARD_VIDEO,
                adUnitId: _this5.getAdUnitId(AdType.REWARD_VIDEO)
              });

              // 自动重新加载广告
              _this5.loadRewardVideoAd();
            }, 3000);
          }, 500);
          return true;
        }

        /**
         * 发放广告奖励
         * @param adType 广告类型
         * @param rewardKey 奖励配置键
         * @returns 是否发放成功
         */;
        _proto.grantAdReward = function grantAdReward(adType, rewardKey) {
          if (rewardKey === void 0) {
            rewardKey = 'default';
          }
          // 获取奖励配置
          var configKey = adType + "_" + rewardKey;
          var rewardConfig = this.adRewardConfig.get(configKey);
          if (!rewardConfig) {
            console.error("AdManager: \u672A\u627E\u5230\u5956\u52B1\u914D\u7F6E " + configKey);
            return false;
          }

          // 增加今日观看广告次数
          this.incrementTodayAdWatchCount(adType);

          // 发放奖励
          if (rewardConfig.type === 'coin') {
            var coinManager = CoinManager.getInstance();
            coinManager.addCoin(rewardConfig.amount, 'ad_reward');
            console.log("AdManager: \u53D1\u653E\u91D1\u5E01\u5956\u52B1 " + rewardConfig.amount);
            return true;
          }

          // 这里可以扩展其他类型的奖励
          console.error("AdManager: \u4E0D\u652F\u6301\u7684\u5956\u52B1\u7C7B\u578B " + rewardConfig.type);
          return false;
        }

        /**
         * 获取广告奖励信息
         * @param adType 广告类型
         * @param rewardKey 奖励配置键
         * @returns 奖励信息
         */;
        _proto.getAdRewardInfo = function getAdRewardInfo(adType, rewardKey) {
          if (rewardKey === void 0) {
            rewardKey = 'default';
          }
          var configKey = adType + "_" + rewardKey;
          return this.adRewardConfig.get(configKey) || null;
        }
        /**
         * 展示广告
         * @param adType 广告类型
         * @param rewardKey 奖励配置键（仅激励视频广告需要）
         * @returns 是否成功展示
         */;
        _proto.showAd = function showAd(adType, rewardKey) {
          if (rewardKey === void 0) {
            rewardKey = 'default';
          }
          // 如果有适配器，使用适配器展示广告
          if (this.adAdapter) {
            // 对于激励视频广告，需要检查观看次数限制
            if (adType === AdType.REWARD_VIDEO && !this.canWatchAd(AdType.REWARD_VIDEO)) {
              console.log('AdManager: 今日观看激励视频广告次数已达上限');
              return false;
            }
            var result = this.adAdapter.showAd(adType, rewardKey);

            // 如果展示成功且是激励视频广告，增加观看次数
            if (result && adType === AdType.REWARD_VIDEO) {
              this.incrementTodayAdWatchCount(adType);
            }
            return result;
          }

          // 否则使用原有模拟实现
          switch (adType) {
            case AdType.REWARD_VIDEO:
              return this.showRewardVideoAd(rewardKey);
            case AdType.INTERSTITIAL:
              return this.showInterstitialAd();
            default:
              console.log("AdManager: \u4E0D\u652F\u6301\u7684\u5E7F\u544A\u7C7B\u578B " + adType);
              return false;
          }
        };
        return AdManager;
      }());
      AdManager._instance = null;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AdRewardUI.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseUI.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Button, Label, Sprite, BaseUI;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Button = module.Button;
      Label = module.Label;
      Sprite = module.Sprite;
    }, function (module) {
      BaseUI = module.BaseUI;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "e5623UzQcdPaJ+Wh8+km1I5", "AdRewardUI", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var AdRewardUI = exports('AdRewardUI', (_dec = ccclass('AdRewardUI'), _dec2 = property(Node), _dec3 = property(Button), _dec4 = property(Button), _dec5 = property(Label), _dec6 = property(Sprite), _dec(_class = (_class2 = /*#__PURE__*/function (_BaseUI) {
        _inheritsLoose(AdRewardUI, _BaseUI);
        function AdRewardUI() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BaseUI.call.apply(_BaseUI, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "contentNode", _descriptor, _assertThisInitialized(_this));
          // 奖励内容显示节点
          _initializerDefineProperty(_this, "watchAdButton", _descriptor2, _assertThisInitialized(_this));
          // 观看广告按钮
          _initializerDefineProperty(_this, "closeButton", _descriptor3, _assertThisInitialized(_this));
          // 关闭按钮
          _initializerDefineProperty(_this, "rewardLabel", _descriptor4, _assertThisInitialized(_this));
          // 奖励内容文本
          _initializerDefineProperty(_this, "rewardIcon", _descriptor5, _assertThisInitialized(_this));
          // 奖励图标
          _this.rewardInfo = null;
          // 奖励信息
          _this.callback = null;
          return _this;
        }
        var _proto = AdRewardUI.prototype;
        // 回调函数
        _proto.onLoad = function onLoad() {
          // 绑定按钮事件
          if (this.watchAdButton) {
            this.watchAdButton.node.on(Button.EventType.CLICK, this.onWatchAdClick, this);
          }
          if (this.closeButton) {
            this.closeButton.node.on(Button.EventType.CLICK, this.onCloseClick, this);
          }
        };
        _proto.onDestroy = function onDestroy() {
          // 移除按钮事件
          if (this.watchAdButton) {
            this.watchAdButton.node.off(Button.EventType.CLICK, this.onWatchAdClick, this);
          }
          if (this.closeButton) {
            this.closeButton.node.off(Button.EventType.CLICK, this.onCloseClick, this);
          }
          _BaseUI.prototype.onDestroy.call(this);
        }

        /**
         * 设置奖励信息
         * @param info 奖励信息
         * @param callback 回调函数
         */;
        _proto.setRewardInfo = function setRewardInfo(info, callback) {
          if (callback === void 0) {
            callback = null;
          }
          this.rewardInfo = info;
          this.callback = callback;

          // 更新UI显示
          this.updateRewardDisplay();
        }

        /**
         * 更新奖励显示
         */;
        _proto.updateRewardDisplay = function updateRewardDisplay() {
          if (!this.rewardInfo) return;

          // 更新奖励文本
          if (this.rewardLabel) {
            this.rewardLabel.string = this.rewardInfo.description || '';
          }

          // 更新奖励图标
          if (this.rewardIcon && this.rewardInfo.icon) ;
        }

        /**
         * 观看广告按钮点击事件
         */;
        _proto.onWatchAdClick = function onWatchAdClick() {
          // 调用广告SDK观看广告
          this.showAd();
        }

        /**
         * 显示广告
         */;
        _proto.showAd = function showAd() {
          var _this2 = this;
          // 这里应该调用广告SDK
          // 假设广告播放成功后调用onAdComplete
          // 如果广告播放失败调用onAdFailed

          // 模拟广告播放成功
          setTimeout(function () {
            _this2.onAdComplete();
          }, 1000);
        }

        /**
         * 广告播放完成回调
         */;
        _proto.onAdComplete = function onAdComplete() {
          // 发放奖励
          if (this.rewardInfo && this.rewardInfo.reward) {
            // 这里应该调用游戏系统发放奖励
            console.log('发放奖励:', this.rewardInfo.reward);
          }

          // 调用回调函数
          if (this.callback) {
            this.callback(true);
          }

          // 关闭界面
          this.hide();
        }

        /**
         * 广告播放失败回调
         */;
        _proto.onAdFailed = function onAdFailed() {
          // 调用回调函数
          if (this.callback) {
            this.callback(false);
          }

          // 关闭界面
          this.hide();
        }

        /**
         * 关闭按钮点击事件
         */;
        _proto.onCloseClick = function onCloseClick() {
          // 调用回调函数
          if (this.callback) {
            this.callback(false);
          }

          // 关闭界面
          this.hide();
        };
        return AdRewardUI;
      }(BaseUI), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "contentNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "watchAdButton", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "closeButton", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "rewardLabel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "rewardIcon", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AudioManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SettingManager.ts'], function (exports) {
  var _createClass, _asyncToGenerator, cclegacy, director, AudioSource, Node, AudioClip, SettingManager, SettingEventType, SettingType;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
    }, function (module) {
      cclegacy = module.cclegacy;
      director = module.director;
      AudioSource = module.AudioSource;
      Node = module.Node;
      AudioClip = module.AudioClip;
    }, function (module) {
      SettingManager = module.SettingManager;
      SettingEventType = module.SettingEventType;
      SettingType = module.SettingType;
    }],
    execute: function () {
      cclegacy._RF.push({}, "56436i8UUxK5Zk1EXlfYxrh", "AudioManager", undefined);

      /**
       * 音频管理器
       */
      var AudioManager = exports('AudioManager', /*#__PURE__*/function () {
        function AudioManager() {
          /**AudioSource挂在在此节点上 */
          this.m_AttachNode = null;
          /**AudioSource组件 */
          this.m_AudioSource = null;
          /**当前背景音乐资源 */
          this.m_CurrentBgm = null;
          /**音效AudioSource组件 */
          this.m_SoundAudioSource = null;
          //私有化的构造函数
          // this.m_AttachNode = new Node("Sound_bg");
          // director.addPersistRootNode(this.m_AttachNode);
          this.m_AttachNode = director.getScene().getChildByName("Canvas");
          this.m_AudioSource = this.m_AttachNode.addComponent(AudioSource);

          // 创建音效AudioSource
          var soundNode = new Node("Sound_Effect");
          this.m_AttachNode.addChild(soundNode);
          this.m_SoundAudioSource = soundNode.addComponent(AudioSource);
          this.m_SoundAudioSource.loop = false;

          // 监听设置变更事件
          this.initSettingListener();
        }

        /**
         * 初始化设置监听
         */
        var _proto = AudioManager.prototype;
        _proto.initSettingListener = function initSettingListener() {
          var _this = this;
          var settingManager = SettingManager.getInstance();

          // 监听音乐设置变更
          settingManager.addEventListener(SettingEventType.SETTING_CHANGED, function (event) {
            if (event.settingType === SettingType.MUSIC) {
              _this.applyMusicSettings();
            } else if (event.settingType === SettingType.SOUND) {
              _this.applySoundSettings();
            }
          });

          // 初始化应用当前设置
          this.applyMusicSettings();
          this.applySoundSettings();
        }

        /**
         * 应用音乐设置
         */;
        _proto.applyMusicSettings = function applyMusicSettings() {
          var settingManager = SettingManager.getInstance();
          var musicSetting = settingManager.getMusicSetting();

          // 应用背景音乐开关
          if (this.m_AudioSource) {
            this.m_AudioSource.volume = musicSetting.volume;
            if (musicSetting.enabled && this.m_CurrentBgm) {
              if (!this.m_AudioSource.playing) {
                this.m_AudioSource.play();
              }
            } else {
              if (this.m_AudioSource.playing) {
                this.m_AudioSource.pause();
              }
            }
          }
          console.log("AudioManager: \u5E94\u7528\u97F3\u4E50\u8BBE\u7F6E - \u5F00\u5173: " + musicSetting.enabled + ", \u97F3\u91CF: " + musicSetting.volume);
        }

        /**
         * 应用音效设置
         */;
        _proto.applySoundSettings = function applySoundSettings() {
          var settingManager = SettingManager.getInstance();
          var soundSetting = settingManager.getSoundSetting();

          // 应用音效音量
          if (this.m_SoundAudioSource) {
            this.m_SoundAudioSource.volume = soundSetting.volume;
          }
          console.log("AudioManager: \u5E94\u7528\u97F3\u6548\u8BBE\u7F6E - \u5F00\u5173: " + soundSetting.enabled + ", \u97F3\u91CF: " + soundSetting.volume);
        }

        /**
         * 默认播放背景音乐接口
         * @param bUrl bundleName:子包名 url：资源路径
         */;
        _proto.playBgMusic = /*#__PURE__*/
        function () {
          var _playBgMusic = _asyncToGenerator(function* (bUrl) {
            //加载背景音乐后播放
            var audioClip = yield gCtrl.res.loadAssetAsync(bUrl, AudioClip);
            this.m_CurrentBgm = audioClip;
            var audioSource = this.m_AudioSource;
            audioSource.clip = audioClip;
            audioSource.loop = true;

            // 应用当前音乐设置
            var settingManager = SettingManager.getInstance();
            var musicSetting = settingManager.getMusicSetting();
            audioSource.volume = musicSetting.volume;
            if (musicSetting.enabled) {
              audioSource.play();
            }
          });
          function playBgMusic(_x) {
            return _playBgMusic.apply(this, arguments);
          }
          return playBgMusic;
        }()
        /**
         * 播放音效
         * @param bUrl bundleName:子包名 url：资源路径
         */;

        _proto.playSound = /*#__PURE__*/
        function () {
          var _playSound = _asyncToGenerator(function* (bUrl) {
            // 获取当前音效设置
            var settingManager = SettingManager.getInstance();
            var soundSetting = settingManager.getSoundSetting();

            // 如果音效被禁用，则不播放
            if (!soundSetting.enabled) {
              console.log("AudioManager: \u97F3\u6548\u5DF2\u7981\u7528\uFF0C\u8DF3\u8FC7\u64AD\u653E");
              return;
            }

            //加载音效后播放
            var audioClip = yield gCtrl.res.loadAssetAsync(bUrl, AudioClip);
            this.m_SoundAudioSource.clip = audioClip;
            this.m_SoundAudioSource.volume = soundSetting.volume;
            this.m_SoundAudioSource.play();
            console.log("AudioManager: \u64AD\u653E\u97F3\u6548\uFF0C\u97F3\u91CF: " + soundSetting.volume);
          });
          function playSound(_x2) {
            return _playSound.apply(this, arguments);
          }
          return playSound;
        }();
        _createClass(AudioManager, null, [{
          key: "ins",
          get: function get() {
            if (this._ins === null) {
              this._ins = new AudioManager();
            }
            return this._ins;
          }
        }]);
        return AudioManager;
      }());
      AudioManager._ins = null;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BagManager.ts", ['cc'], function (exports) {
  var cclegacy, sys;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      sys = module.sys;
    }],
    execute: function () {
      cclegacy._RF.push({}, "56583EuTxRAGpp6cwa6TG14", "BagManager", undefined);
      /**
       * 背包物品类型枚举
       */
      var ItemType = exports('ItemType', /*#__PURE__*/function (ItemType) {
        ItemType["PROP"] = "prop";
        ItemType["EQUIPMENT"] = "equipment";
        ItemType["MATERIAL"] = "material";
        ItemType["CONSUMABLE"] = "consumable";
        return ItemType;
      }({}));

      /**
       * 背包物品接口
       */

      /**
       * 背包系统事件类型枚举
       */
      var BagEventType = exports('BagEventType', /*#__PURE__*/function (BagEventType) {
        BagEventType["ITEM_ADDED"] = "item_added";
        BagEventType["ITEM_REMOVED"] = "item_removed";
        BagEventType["ITEM_UPDATED"] = "item_updated";
        BagEventType["ITEM_USED"] = "item_used";
        BagEventType["BAG_FULL"] = "bag_full";
        BagEventType["BAG_EXPANDED"] = "bag_expanded";
        BagEventType["BAG_SORTED"] = "bag_sorted";
        return BagEventType;
      }({}));

      /**
       * 背包事件接口
       */

      /**
       * 背包管理器
       * 实现单例模式，管理游戏中的背包系统
       */
      var BagManager = exports('BagManager', /*#__PURE__*/function () {
        // 事件监听器
        /**
         * 获取BagManager单例
         */
        BagManager.getInstance = function getInstance() {
          if (!this._instance) {
            this._instance = new BagManager();
          }
          return this._instance;
        }

        /**
         * 私有构造函数，确保单例模式
         */;
        function BagManager() {
          var _this = this;
          this._items = new Map();
          // 物品ID到物品的映射
          this._capacity = 100;
          // 背包容量
          this._eventListeners = new Map();
          // 初始化事件监听器映射
          Object.keys(BagEventType).forEach(function (key) {
            var type = BagEventType[key];
            _this._eventListeners.set(type, []);
          });
        }

        /**
         * 初始化背包系统
         */
        var _proto = BagManager.prototype;
        _proto.init = function init() {
          console.log('BagManager: 初始化背包系统');
          this.loadBagData();
        }

        /**
         * 加载背包数据
         */;
        _proto.loadBagData = function loadBagData() {
          var _this2 = this;
          try {
            var data = sys.localStorage.getItem('bag_data');
            if (data) {
              var parsedData = JSON.parse(data);
              // 使用兼容的方式重建Map
              this._items = new Map();
              if (parsedData.items) {
                Object.keys(parsedData.items).forEach(function (key) {
                  _this2._items.set(key, parsedData.items[key]);
                });
              }
              this._capacity = parsedData.capacity || 100;
              console.log('BagManager: 背包数据加载成功');
            } else {
              console.log('BagManager: 没有找到背包数据，使用默认配置');
            }
          } catch (error) {
            console.error('BagManager: 加载背包数据失败', error);
            this._items = new Map();
            this._capacity = 100;
          }
        }

        /**
         * 保存背包数据
         */;
        _proto.saveBagData = function saveBagData() {
          try {
            // 使用兼容的方式将Map转换为普通对象
            var itemsObj = {};
            this._items.forEach(function (value, key) {
              itemsObj[key] = value;
            });
            var data = {
              items: itemsObj,
              capacity: this._capacity
            };
            sys.localStorage.setItem('bag_data', JSON.stringify(data));
          } catch (error) {
            console.error('BagManager: 保存背包数据失败', error);
          }
        }

        /**
         * 添加物品到背包
         * @param item 物品对象
         * @returns 是否添加成功
         */;
        _proto.addItem = function addItem(item) {
          // 检查背包是否已满
          if (this._items.size >= this._capacity) {
            console.warn('BagManager: 背包已满，无法添加物品');
            this.triggerEvent({
              type: BagEventType.BAG_FULL
            });
            return false;
          }

          // 检查是否已有相同物品，如果有则堆叠
          var existingItem = this.getExistingStackableItem(item);
          if (existingItem) {
            var maxAddCount = existingItem.maxStack - existingItem.count;
            var addCount = Math.min(item.count, maxAddCount);
            if (addCount > 0) {
              existingItem.count += addCount;
              this._items.set(existingItem.id, existingItem);
              this.saveBagData();
              this.triggerEvent({
                type: BagEventType.ITEM_UPDATED,
                item: existingItem
              });

              // 如果还有剩余物品，递归添加
              if (item.count > addCount) {
                item.count -= addCount;
                return this.addItem(item);
              }
              return true;
            }
          }

          // 生成唯一ID并添加物品
          item.id = this.generateItemId();
          item.createTime = Date.now();
          this._items.set(item.id, item);
          this.saveBagData();
          this.triggerEvent({
            type: BagEventType.ITEM_ADDED,
            item: item
          });
          return true;
        }

        /**
         * 通过物品配置ID添加物品
         * @param itemId 物品配置ID
         * @param count 物品数量
         * @returns 是否添加成功
         */;
        _proto.addItemByShopItem = function addItemByShopItem(shopItem) {
          // 这里应该从物品配置中获取物品信息
          // 由于没有物品配置系统，这里创建一个模拟物品
          var item = {
            id: '',
            itemId: shopItem.itemId,
            type: ItemType.CONSUMABLE,
            name: shopItem.name,
            description: shopItem.description,
            icon: shopItem.icon,
            count: 1,
            maxStack: 99,
            quality: 1,
            canUse: true,
            canSell: false,
            sellPrice: 0,
            createTime: 0
          };
          return this.addItem(item);
        }

        /**
         * 移除物品
         * @param itemId 物品ID
         * @param count 移除数量，默认为全部
         * @returns 是否移除成功
         */;
        _proto.removeItem = function removeItem(itemId, count) {
          if (count === void 0) {
            count = -1;
          }
          var item = this._items.get(itemId);
          if (!item) {
            console.warn("BagManager: \u7269\u54C1" + itemId + "\u4E0D\u5B58\u5728");
            return false;
          }
          if (count === -1 || count >= item.count) {
            // 移除全部
            this._items["delete"](itemId);
            this.saveBagData();
            this.triggerEvent({
              type: BagEventType.ITEM_REMOVED,
              item: item
            });
            return true;
          } else {
            // 部分移除
            item.count -= count;
            this._items.set(itemId, item);
            this.saveBagData();
            this.triggerEvent({
              type: BagEventType.ITEM_UPDATED,
              item: item
            });
            return true;
          }
        }

        /**
         * 使用物品
         * @param itemId 物品ID
         * @param count 使用数量，默认为1
         * @returns 是否使用成功
         */;
        _proto.useItem = function useItem(itemId, count) {
          if (count === void 0) {
            count = 1;
          }
          var item = this._items.get(itemId);
          if (!item) {
            console.warn("BagManager: \u7269\u54C1" + itemId + "\u4E0D\u5B58\u5728");
            return false;
          }
          if (!item.canUse) {
            console.warn("BagManager: \u7269\u54C1" + itemId + "\u4E0D\u53EF\u4F7F\u7528");
            return false;
          }
          if (item.count < count) {
            console.warn("BagManager: \u7269\u54C1" + itemId + "\u6570\u91CF\u4E0D\u8DB3");
            return false;
          }

          // 检查物品是否过期
          if (item.expireTime && item.expireTime < Date.now()) {
            console.warn("BagManager: \u7269\u54C1" + itemId + "\u5DF2\u8FC7\u671F");
            return false;
          }

          // 使用物品
          var success = this.applyItemEffect(item, count);
          if (success) {
            // 减少物品数量
            this.removeItem(itemId, count);
            this.triggerEvent({
              type: BagEventType.ITEM_USED,
              item: item,
              data: {
                count: count
              }
            });
            return true;
          }
          return false;
        }

        /**
         * 应用物品效果
         * @param item 物品
         * @param count 使用数量
         * @returns 是否应用成功
         */;
        _proto.applyItemEffect = function applyItemEffect(item, count) {
          // 这里应该根据物品类型和效果应用相应的效果
          // 由于没有具体的效果系统，这里只是模拟
          console.log("BagManager: \u4F7F\u7528\u7269\u54C1" + item.name + " x" + count);

          // 如果是消耗品，可以在这里实现具体效果
          if (item.type === ItemType.CONSUMABLE) {
            // 例如：恢复金币
            // 这里可以集成CoinManager
            console.log("BagManager: \u7269\u54C1" + item.name + "\u6548\u679C\u5DF2\u5E94\u7528");
            return true;
          }
          return true;
        }

        /**
         * 获取物品
         * @param itemId 物品ID
         * @returns 物品对象或null
         */;
        _proto.getItem = function getItem(itemId) {
          return this._items.get(itemId) || null;
        }

        /**
         * 获取所有物品
         * @returns 物品列表
         */;
        _proto.getAllItems = function getAllItems() {
          var items = [];
          this._items.forEach(function (value) {
            items.push(value);
          });
          return items;
        }

        /**
         * 根据类型获取物品
         * @param type 物品类型
         * @returns 物品列表
         */;
        _proto.getItemsByType = function getItemsByType(type) {
          var items = [];
          this._items.forEach(function (value) {
            if (value.type === type) {
              items.push(value);
            }
          });
          return items;
        }

        /**
         * 获取背包容量
         * @returns 背包容量
         */;
        _proto.getCapacity = function getCapacity() {
          return this._capacity;
        }

        /**
         * 获取背包当前物品数量
         * @returns 物品数量
         */;
        _proto.getItemCount = function getItemCount() {
          return this._items.size;
        }

        /**
         * 扩展背包容量
         * @param addCapacity 增加的容量
         * @returns 是否扩容成功
         */;
        _proto.expandCapacity = function expandCapacity(addCapacity) {
          if (addCapacity <= 0) {
            return false;
          }
          this._capacity += addCapacity;
          this.saveBagData();
          this.triggerEvent({
            type: BagEventType.BAG_EXPANDED,
            data: {
              addCapacity: addCapacity,
              newCapacity: this._capacity
            }
          });
          return true;
        }

        /**
         * 排序背包
         * @param sortBy 排序依据，如'type', 'quality', 'name'等
         * @returns 是否排序成功
         */;
        _proto.sortBag = function sortBag(sortBy) {
          var _this3 = this;
          if (sortBy === void 0) {
            sortBy = 'type';
          }
          try {
            var items = [];
            this._items.forEach(function (value) {
              items.push(value);
            });

            // 根据排序依据进行排序
            items.sort(function (a, b) {
              switch (sortBy) {
                case 'type':
                  return a.type.localeCompare(b.type);
                case 'quality':
                  return b.quality - a.quality;
                case 'name':
                  return a.name.localeCompare(b.name);
                case 'count':
                  return b.count - a.count;
                default:
                  return 0;
              }
            });

            // 重新构建Map
            this._items = new Map();
            items.forEach(function (item) {
              _this3._items.set(item.id, item);
            });
            this.saveBagData();
            this.triggerEvent({
              type: BagEventType.BAG_SORTED,
              data: {
                sortBy: sortBy
              }
            });
            return true;
          } catch (error) {
            console.error('BagManager: 排序背包失败', error);
            return false;
          }
        }

        /**
         * 添加事件监听器
         * @param eventType 事件类型
         * @param listener 监听器函数
         */;
        _proto.addEventListener = function addEventListener(eventType, listener) {
          var listeners = this._eventListeners.get(eventType);
          if (listeners) {
            listeners.push(listener);
          }
        }

        /**
         * 移除事件监听器
         * @param eventType 事件类型
         * @param listener 监听器函数
         */;
        _proto.removeEventListener = function removeEventListener(eventType, listener) {
          var listeners = this._eventListeners.get(eventType);
          if (listeners) {
            var index = listeners.indexOf(listener);
            if (index !== -1) {
              listeners.splice(index, 1);
            }
          }
        }

        /**
         * 触发事件
         * @param event 事件对象
         */;
        _proto.triggerEvent = function triggerEvent(event) {
          var listeners = this._eventListeners.get(event.type);
          if (listeners) {
            listeners.forEach(function (listener) {
              try {
                listener(event);
              } catch (error) {
                console.error('BagManager: 事件监听器执行失败', error);
              }
            });
          }
        }

        /**
         * 查找可堆叠的相同物品
         * @param item 物品
         * @returns 可堆叠的物品或null
         */;
        _proto.getExistingStackableItem = function getExistingStackableItem(item) {
          var result = null;
          this._items.forEach(function (existingItem) {
            if (existingItem.itemId === item.itemId && existingItem.count < existingItem.maxStack && (!existingItem.expireTime || existingItem.expireTime === item.expireTime)) {
              result = existingItem;
            }
          });
          return result;
        }

        /**
         * 生成物品唯一ID
         * @returns 唯一ID
         */;
        _proto.generateItemId = function generateItemId() {
          return "item_" + Date.now() + "_" + Math.random().toString(36).substr(2, 9);
        };
        return BagManager;
      }());
      BagManager._instance = void 0;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BagUI.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseUI.ts', './UILayer.ts', './BagManager.ts', './CoinManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Label, ScrollView, Prefab, UITransform, Size, instantiate, Sprite, assetManager, SpriteFrame, BaseUI, UILayer, BagManager, CoinManager;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Label = module.Label;
      ScrollView = module.ScrollView;
      Prefab = module.Prefab;
      UITransform = module.UITransform;
      Size = module.Size;
      instantiate = module.instantiate;
      Sprite = module.Sprite;
      assetManager = module.assetManager;
      SpriteFrame = module.SpriteFrame;
    }, function (module) {
      BaseUI = module.BaseUI;
    }, function (module) {
      UILayer = module.UILayer;
    }, function (module) {
      BagManager = module.BagManager;
    }, function (module) {
      CoinManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _class3;
      cclegacy._RF.push({}, "c894dGBGeBLhLRrOEFImWkY", "BagUI", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /**
       * 背包UI界面
       * 用于展示背包中的物品，支持物品使用和详情查看
       */
      var BagUI = exports('BagUI', (_dec = ccclass('BagUI'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Label), _dec5 = property(Node), _dec6 = property(ScrollView), _dec7 = property(Node), _dec8 = property(Prefab), _dec9 = property(Label), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_BaseUI) {
        _inheritsLoose(BagUI, _BaseUI);
        function BagUI() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BaseUI.call.apply(_BaseUI, [this].concat(args)) || this;
          // 背包物品列表节点
          _initializerDefineProperty(_this, "itemList", _descriptor, _assertThisInitialized(_this));
          // 物品详情弹窗节点
          _initializerDefineProperty(_this, "detailPopup", _descriptor2, _assertThisInitialized(_this));
          // 提示标签
          _initializerDefineProperty(_this, "tipsLabel", _descriptor3, _assertThisInitialized(_this));
          // 关闭按钮
          _initializerDefineProperty(_this, "closeButton", _descriptor4, _assertThisInitialized(_this));
          // 滚动视图
          _initializerDefineProperty(_this, "scrollView", _descriptor5, _assertThisInitialized(_this));
          // 内容节点
          _initializerDefineProperty(_this, "content", _descriptor6, _assertThisInitialized(_this));
          // 背包物品预制体
          _initializerDefineProperty(_this, "bagItemPrefab", _descriptor7, _assertThisInitialized(_this));
          // 账户余额标签
          _initializerDefineProperty(_this, "balanceLabel", _descriptor8, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = BagUI.prototype;
        _proto.onLoad = function onLoad() {
          console.log('BagUI: onLoad开始');

          // 检查必要节点是否存在
          if (!this.content) {
            console.error('BagUI: content节点未设置');
            return;
          }
          if (!this.bagItemPrefab) {
            console.error('BagUI: bagItemPrefab预制体未设置');
            return;
          }
          if (!this.closeButton) {
            console.warn('BagUI: closeButton节点未设置');
          } else {
            // 绑定按钮事件
            this.closeButton.on(Node.EventType.TOUCH_END, this.onCloseClick, this);
          }

          // 初始化背包数据
          this.initBagUI();
          console.log('BagUI: onLoad完成');
        }

        /**
         * 初始化背包界面
         */;
        _proto.initBagUI = function initBagUI() {
          console.log('BagUI: 初始化背包界面');

          // 更新账户余额显示
          this.updateBalance();

          // 获取背包数据
          var bagManager = BagManager.getInstance();
          var items = bagManager.getAllItems();
          console.log("BagUI: \u83B7\u53D6\u5230 " + items.length + " \u4E2A\u80CC\u5305\u7269\u54C1");

          // 清空现有物品列表
          if (this.content) {
            this.content.removeAllChildren();
          }

          // 根据物品数量动态调整content高度
          if (this.content && this.content.getComponent(UITransform)) {
            var itemHeight = 100; // 每个物品高度为100
            var contentHeight = items.length * itemHeight;
            this.content.getComponent(UITransform).contentSize = new Size(580, contentHeight);
          }

          // 动态创建物品UI
          this.createBagItems(items);

          // 更新背包容量显示
          // this.updateCapacity(bagManager.getItemCount(), bagManager.getCapacity());
        }

        /**
         * 动态创建背包物品UI
         * @param items 背包物品列表
         */;
        _proto.createBagItems = function createBagItems(items) {
          var _this2 = this;
          if (!this.content || !this.bagItemPrefab) {
            console.error('BagUI: content或bagItemPrefab未设置');
            return;
          }
          if (items.length === 0) {
            console.log('BagUI: 背包为空，不创建物品UI');
            // 显示空背包提示
            if (this.tipsLabel) {
              this.tipsLabel.string = '当前背包为空';
              this.tipsLabel.node.active = true;
            }
            return;
          } else if (this.tipsLabel) {
            this.tipsLabel.node.active = false;
          }

          // 遍历物品列表，创建物品UI
          items.forEach(function (item, index) {
            // 实例化物品预制体
            var itemNode = instantiate(_this2.bagItemPrefab);
            var gapHeight = 40; // 物品之间的间距
            // 设置物品位置
            var yPos = -index * 100 - 50 - gapHeight * index; // 每个物品高度100，从顶部开始排列

            itemNode.setPosition(0, yPos, 0);

            // 更新物品信息
            _this2.updateItemInfo(itemNode, item);

            // 添加到content节点
            _this2.content.addChild(itemNode);
            console.log("BagUI: \u521B\u5EFA\u7269\u54C1UI " + item.name + " (ID: " + item.id + ")");
          });
        }

        /**
         * 更新物品信息显示
         * @param itemNode 物品节点
         * @param item 物品数据
         */;
        _proto.updateItemInfo = function updateItemInfo(itemNode, item) {
          var _itemNode$getChildByN, _itemNode$getChildByN2, _itemNode$getChildByN3, _itemNode$getChildByN4;
          // 更新物品图标
          var iconSprite = (_itemNode$getChildByN = itemNode.getChildByName('iconSprite')) == null ? void 0 : _itemNode$getChildByN.getComponent(Sprite);
          if (iconSprite && item.icon) {
            // 加载图标资源
            var iconPath = item.icon;
            var bundleName = 'CommonUI'; // bundle名称
            var assetPath = "ui/" + iconPath; // 资源路径

            // 加载bundle
            assetManager.loadBundle(bundleName, function (err, bundle) {
              if (err) {
                console.error("Failed to load bundle: " + bundleName, err);
                return;
              }

              // 从bundle中加载精灵帧
              bundle.load(assetPath, SpriteFrame, function (err, spriteFrame) {
                if (err) {
                  console.error("Failed to load sprite frame: " + assetPath + " from bundle: " + bundleName, err);
                  return;
                }
                if (spriteFrame && iconSprite) {
                  iconSprite.spriteFrame = spriteFrame;
                } else {
                  console.error("Failed to get sprite frame: " + assetPath + " from bundle: " + bundleName);
                }
              });
            });
          }

          // 更新物品名称
          var nameLabel = (_itemNode$getChildByN2 = itemNode.getChildByName('nameLabel')) == null ? void 0 : _itemNode$getChildByN2.getComponent(Label);
          if (nameLabel) {
            nameLabel.string = item.name;
          }

          // 更新物品描述
          var descLabel = (_itemNode$getChildByN3 = itemNode.getChildByName('descLabel')) == null ? void 0 : _itemNode$getChildByN3.getComponent(Label);
          if (descLabel) {
            descLabel.string = item.description;
          }

          // 更新物品数量
          var quatityLabel = (_itemNode$getChildByN4 = itemNode.getChildByName('quatityLabel')) == null ? void 0 : _itemNode$getChildByN4.getComponent(Label);
          if (quatityLabel) {
            quatityLabel.string = "\u62E5\u6709 X  " + item.count;
          }
        }

        /**
         * 更新账户余额显示
         */;
        _proto.updateBalance = function updateBalance() {
          if (this.balanceLabel) {
            // 这里应该从金币管理器获取当前金币数量
            var coinManager = CoinManager.getInstance();
            this.balanceLabel.string = "\u91D1\u5E01: " + coinManager.getCurrentCoin();
            // this.balanceLabel.string = '金币: 1000'; // 暂时使用固定值
          }
        }

        // /**
        //  * 更新背包容量显示
        //  * @param current 当前物品数量
        //  * @param capacity 背包容量
        //  */
        // private updateCapacity(current: number, capacity: number) {
        //     if (this.capacityLabel) {
        //         const capacityLabelComp = this.capacityLabel.getComponent(Label);
        //         if (capacityLabelComp) {
        //             capacityLabelComp.string = `背包: ${current}/${capacity}`;
        //         }
        //     }
        // }

        /**
         * 使用物品
         * @param itemId 物品ID
         */;
        _proto.useItem = function useItem(itemId) {
          console.log("BagUI: \u4F7F\u7528\u7269\u54C1 " + itemId);

          // 调用BagManager使用物品
          var bagManager = BagManager.getInstance();
          var success = bagManager.useItem(itemId);
          if (success) {
            console.log("BagUI: \u7269\u54C1 " + itemId + " \u4F7F\u7528\u6210\u529F");
            // 显示使用成功提示
            this.showToast("\u7269\u54C1\u4F7F\u7528\u6210\u529F");

            // 刷新背包界面
            this.initBagUI();
          } else {
            console.error("BagUI: \u7269\u54C1 " + itemId + " \u4F7F\u7528\u5931\u8D25");
            // 显示使用失败提示
            this.showToast("\u7269\u54C1\u4F7F\u7528\u5931\u8D25");
          }
        }

        /**
         * 显示物品详情
         * @param itemId 物品ID
         */;
        _proto.showItemDetail = function showItemDetail(itemId) {
          if (this.detailPopup) {
            // TODO: 根据物品ID显示物品详情
            this.detailPopup.active = true;
          }
        }

        /**
         * 显示提示信息
         * @param message 提示内容
         */;
        _proto.showToast = function showToast(message) {
          // 这里应该调用全局的Toast提示组件
          console.log("BagUI Toast: " + message);
          // 例如: gCtrl.ui.showToast(message);
        }

        /**
         * 关闭按钮点击事件
         */;
        _proto.onCloseClick = function onCloseClick() {
          // 发送返回主界面事件到场景节点
          var scene = this.node.scene;
          if (scene) {
            scene.emit('BACK_TO_MAIN_SCENE');
            console.log('BagUI: 已发送BACK_TO_MAIN_SCENE事件到场景节点');
          } else {
            console.warn('BagUI: 无法获取场景节点，事件发送失败');
          }
          // 关闭界面
          this.hide();
        };
        _proto.onDestroy = function onDestroy() {
          // 移除按钮事件
          if (this.closeButton) {
            this.closeButton.off(Node.EventType.TOUCH_END, this.onCloseClick, this);
          }
          _BaseUI.prototype.onDestroy.call(this);
        };
        return BagUI;
      }(BaseUI), _class3.viewLayer = UILayer.UI, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "itemList", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "detailPopup", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "tipsLabel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "closeButton", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "scrollView", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "content", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "bagItemPrefab", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "balanceLabel", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BaseUI.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "c73efxS249IYr17bQ4B3R9R", "BaseUI", undefined);
      var ccclass = _decorator.ccclass;

      /**
       * UI基类
       * 所有UI组件都应继承此类
       */
      var BaseUI = exports('BaseUI', (_dec = ccclass('BaseUI'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BaseUI, _Component);
        function BaseUI() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = BaseUI.prototype;
        /**
         * 显示UI
         */
        _proto.show = function show() {
          this.node.active = true;
        }

        /**
         * 隐藏UI
         */;
        _proto.hide = function hide() {
          this.node.active = false;
        }

        /**
         * 销毁UI
         */
        // public destroy(): boolean {
        //     return super.destroy();
        // }
        ;

        return BaseUI;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BundleDownloadManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _asyncToGenerator, cclegacy, assetManager;
  return {
    setters: [function (module) {
      _asyncToGenerator = module.asyncToGenerator;
    }, function (module) {
      cclegacy = module.cclegacy;
      assetManager = module.assetManager;
    }],
    execute: function () {
      cclegacy._RF.push({}, "23346yxJhxEKIFxSLeC5eFa", "BundleDownloadManager", undefined);
      var BundleDownloadManager = exports('BundleDownloadManager', /*#__PURE__*/function () {
        function BundleDownloadManager() {
          this.downloadingBundles = new Map();
          this.downloadedBundles = new Set();
        }
        BundleDownloadManager.getInstance = function getInstance() {
          if (!BundleDownloadManager.instance) {
            BundleDownloadManager.instance = new BundleDownloadManager();
          }
          return BundleDownloadManager.instance;
        }

        /**
         * 自动下载所有远程包
         */;
        var _proto = BundleDownloadManager.prototype;
        _proto.autoDownloadAllBundles = /*#__PURE__*/
        function () {
          var _autoDownloadAllBundles = _asyncToGenerator(function* () {
            var _this = this;
            console.log('BundleDownloadManager: 开始自动下载远程包');

            // 定义需要自动下载的分包列表
            var bundleNames = ['CommonUI', 'LoginBN', 'Match3BN', 'GScriptBN'];

            // 并行下载所有分包
            var downloadPromises = bundleNames.map(function (name) {
              return _this.downloadBundle(name);
            });
            try {
              yield Promise.all(downloadPromises);
              console.log('BundleDownloadManager: 所有远程包下载完成');
            } catch (error) {
              console.error('BundleDownloadManager: 部分远程包下载失败', error);
            }
          });
          function autoDownloadAllBundles() {
            return _autoDownloadAllBundles.apply(this, arguments);
          }
          return autoDownloadAllBundles;
        }()
        /**
         * 下载单个分包
         */;

        _proto.downloadBundle = /*#__PURE__*/
        function () {
          var _downloadBundle = _asyncToGenerator(function* (bundleName) {
            var _this2 = this;
            // 如果已经下载过，直接返回
            if (this.downloadedBundles.has(bundleName)) {
              return;
            }

            // 如果正在下载中，返回现有的Promise
            if (this.downloadingBundles.has(bundleName)) {
              return this.downloadingBundles.get(bundleName);
            }

            // 创建新的下载Promise
            var downloadPromise = new Promise(function (resolve, reject) {
              console.log("BundleDownloadManager: \u5F00\u59CB\u4E0B\u8F7D\u5206\u5305 " + bundleName);
              assetManager.loadBundle(bundleName, function (err, bundle) {
                if (err) {
                  console.error("BundleDownloadManager: \u4E0B\u8F7D\u5206\u5305 " + bundleName + " \u5931\u8D25", err);
                  reject(err);
                } else {
                  console.log("BundleDownloadManager: \u5206\u5305 " + bundleName + " \u4E0B\u8F7D\u6210\u529F");
                  _this2.downloadedBundles.add(bundleName);
                  resolve();
                }
              });
            });

            // 保存下载Promise
            this.downloadingBundles.set(bundleName, downloadPromise);
            try {
              yield downloadPromise;
            } finally {
              // 下载完成后移除Promise
              this.downloadingBundles["delete"](bundleName);
            }
          });
          function downloadBundle(_x) {
            return _downloadBundle.apply(this, arguments);
          }
          return downloadBundle;
        }()
        /**
         * 检查分包是否已下载
         */;

        _proto.isBundleDownloaded = function isBundleDownloaded(bundleName) {
          return this.downloadedBundles.has(bundleName);
        };
        return BundleDownloadManager;
      }());
      BundleDownloadManager.instance = void 0;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ByteDanceAdAdapter.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AdManager.ts', './IAdAdapter.ts'], function (exports) {
  var _createForOfIteratorHelperLoose, cclegacy, AdType, AdEventType, AdLoadState;
  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      AdType = module.AdType;
      AdEventType = module.AdEventType;
    }, function (module) {
      AdLoadState = module.AdLoadState;
    }],
    execute: function () {
      cclegacy._RF.push({}, "3295d47ni9JDYDHWv/rWSHv", "ByteDanceAdAdapter", undefined);

      /**
       * 字节跳动小游戏广告适配器
       * 实现字节跳动小游戏平台的广告功能
       */
      var ByteDanceAdAdapter = exports('ByteDanceAdAdapter', /*#__PURE__*/function () {
        /**
         * 构造函数
         */
        function ByteDanceAdAdapter() {
          /**
           * 广告事件监听器列表
           */
          this.eventListeners = [];
          /**
           * 广告加载状态映射
           */
          this.adLoadStates = new Map();
          /**
           * 广告单元ID映射
           */
          this.adUnitIds = new Map();
          /**
           * 激励视频广告实例
           */
          this.rewardVideoAd = null;
          /**
           * 插屏广告实例
           */
          this.interstitialAd = null;
          // 初始化广告加载状态
          this.adLoadStates.set(AdType.REWARD_VIDEO, AdLoadState.NOT_LOADED);
          this.adLoadStates.set(AdType.INTERSTITIAL, AdLoadState.NOT_LOADED);
        }

        /**
         * 初始化广告适配器
         * @param adUnitIds 广告单元ID配置
         */
        var _proto = ByteDanceAdAdapter.prototype;
        _proto.init = function init(adUnitIds) {
          console.log('ByteDanceAdAdapter: 初始化字节跳动小游戏广告适配器');

          // 检查是否在字节跳动小游戏环境中
          if (typeof window === 'undefined' || !window['tt']) {
            console.error('ByteDanceAdAdapter: 不在字节跳动小游戏环境中');
            return;
          }

          // 保存广告单元ID
          for (var adType in adUnitIds) {
            if (adUnitIds[adType]) {
              this.adUnitIds.set(adType, adUnitIds[adType]);
            }
          }

          // 初始化激励视频广告
          this.initRewardVideoAd();

          // 初始化插屏广告
          this.initInterstitialAd();
        }

        /**
         * 初始化激励视频广告
         */;
        _proto.initRewardVideoAd = function initRewardVideoAd() {
          var _this = this;
          var adUnitId = this.adUnitIds.get(AdType.REWARD_VIDEO);
          if (!adUnitId) {
            console.error('ByteDanceAdAdapter: 激励视频广告单元ID未配置');
            return;
          }
          try {
            // 创建激励视频广告实例
            this.rewardVideoAd = window['tt'].createRewardedVideoAd({
              adUnitId: adUnitId
            });

            // 监听广告加载事件
            this.rewardVideoAd.onLoad(function () {
              console.log('ByteDanceAdAdapter: 激励视频广告加载成功');
              _this.adLoadStates.set(AdType.REWARD_VIDEO, AdLoadState.LOADED);
              _this.triggerEvent({
                type: AdEventType.LOAD_SUCCESS,
                adType: AdType.REWARD_VIDEO,
                adUnitId: adUnitId
              });
            });

            // 监听广告加载失败事件
            this.rewardVideoAd.onError(function (err) {
              console.error('ByteDanceAdAdapter: 激励视频广告加载失败', err);
              _this.adLoadStates.set(AdType.REWARD_VIDEO, AdLoadState.FAILED);
              _this.triggerEvent({
                type: AdEventType.LOAD_FAILED,
                adType: AdType.REWARD_VIDEO,
                adUnitId: adUnitId,
                error: err.errMsg || '未知错误'
              });
            });

            // 监听广告关闭事件
            this.rewardVideoAd.onClose(function (res) {
              console.log('ByteDanceAdAdapter: 激励视频广告关闭', res);
              _this.adLoadStates.set(AdType.REWARD_VIDEO, AdLoadState.NOT_LOADED);
              _this.triggerEvent({
                type: AdEventType.CLOSED,
                adType: AdType.REWARD_VIDEO,
                adUnitId: adUnitId
              });

              // 如果用户完整观看了广告，触发奖励事件
              if (res && res.isEnded) {
                _this.triggerEvent({
                  type: AdEventType.REWARDED,
                  adType: AdType.REWARD_VIDEO,
                  adUnitId: adUnitId
                });
              }

              // 重新加载广告
              _this.loadAd(AdType.REWARD_VIDEO);
            });

            // 开始加载广告
            this.loadAd(AdType.REWARD_VIDEO);
          } catch (error) {
            console.error('ByteDanceAdAdapter: 创建激励视频广告失败', error);
            this.adLoadStates.set(AdType.REWARD_VIDEO, AdLoadState.FAILED);
          }
        }

        /**
         * 初始化插屏广告
         */;
        _proto.initInterstitialAd = function initInterstitialAd() {
          var _this2 = this;
          var adUnitId = this.adUnitIds.get(AdType.INTERSTITIAL);
          if (!adUnitId) {
            console.error('ByteDanceAdAdapter: 插屏广告单元ID未配置');
            return;
          }
          try {
            // 创建插屏广告实例
            this.interstitialAd = window['tt'].createInterstitialAd({
              adUnitId: adUnitId
            });

            // 监听广告加载事件
            this.interstitialAd.onLoad(function () {
              console.log('ByteDanceAdAdapter: 插屏广告加载成功');
              _this2.adLoadStates.set(AdType.INTERSTITIAL, AdLoadState.LOADED);
              _this2.triggerEvent({
                type: AdEventType.LOAD_SUCCESS,
                adType: AdType.INTERSTITIAL,
                adUnitId: adUnitId
              });
            });

            // 监听广告加载失败事件
            this.interstitialAd.onError(function (err) {
              console.error('ByteDanceAdAdapter: 插屏广告加载失败', err);
              _this2.adLoadStates.set(AdType.INTERSTITIAL, AdLoadState.FAILED);
              _this2.triggerEvent({
                type: AdEventType.LOAD_FAILED,
                adType: AdType.INTERSTITIAL,
                adUnitId: adUnitId,
                error: err.errMsg || '未知错误'
              });
            });

            // 监听广告关闭事件
            this.interstitialAd.onClose(function () {
              console.log('ByteDanceAdAdapter: 插屏广告关闭');
              _this2.adLoadStates.set(AdType.INTERSTITIAL, AdLoadState.NOT_LOADED);
              _this2.triggerEvent({
                type: AdEventType.CLOSED,
                adType: AdType.INTERSTITIAL,
                adUnitId: adUnitId
              });

              // 重新加载广告
              _this2.loadAd(AdType.INTERSTITIAL);
            });

            // 开始加载广告
            this.loadAd(AdType.INTERSTITIAL);
          } catch (error) {
            console.error('ByteDanceAdAdapter: 创建插屏广告失败', error);
            this.adLoadStates.set(AdType.INTERSTITIAL, AdLoadState.FAILED);
          }
        }

        /**
         * 加载广告
         * @param adType 广告类型
         */;
        _proto.loadAd = function loadAd(adType) {
          var _this3 = this;
          if (this.getAdLoadState(adType) === AdLoadState.LOADING) {
            console.log("ByteDanceAdAdapter: " + adType + "\u5E7F\u544A\u6B63\u5728\u52A0\u8F7D\u4E2D\uFF0C\u8BF7\u52FF\u91CD\u590D\u52A0\u8F7D");
            return;
          }
          console.log("ByteDanceAdAdapter: \u5F00\u59CB\u52A0\u8F7D" + adType + "\u5E7F\u544A");
          this.adLoadStates.set(adType, AdLoadState.LOADING);
          try {
            if (adType === AdType.REWARD_VIDEO && this.rewardVideoAd) {
              this.rewardVideoAd.load().then(function () {
                console.log("ByteDanceAdAdapter: " + adType + "\u5E7F\u544A\u52A0\u8F7D\u6307\u4EE4\u53D1\u9001\u6210\u529F");
              })["catch"](function (err) {
                console.error("ByteDanceAdAdapter: " + adType + "\u5E7F\u544A\u52A0\u8F7D\u5931\u8D25", err);
                _this3.adLoadStates.set(adType, AdLoadState.FAILED);
                _this3.triggerEvent({
                  type: AdEventType.LOAD_FAILED,
                  adType: adType,
                  adUnitId: _this3.adUnitIds.get(adType),
                  error: err.errMsg || '未知错误'
                });
              });
            } else if (adType === AdType.INTERSTITIAL && this.interstitialAd) {
              this.interstitialAd.load().then(function () {
                console.log("ByteDanceAdAdapter: " + adType + "\u5E7F\u544A\u52A0\u8F7D\u6307\u4EE4\u53D1\u9001\u6210\u529F");
              })["catch"](function (err) {
                console.error("ByteDanceAdAdapter: " + adType + "\u5E7F\u544A\u52A0\u8F7D\u5931\u8D25", err);
                _this3.adLoadStates.set(adType, AdLoadState.FAILED);
                _this3.triggerEvent({
                  type: AdEventType.LOAD_FAILED,
                  adType: adType,
                  adUnitId: _this3.adUnitIds.get(adType),
                  error: err.errMsg || '未知错误'
                });
              });
            } else {
              console.error("ByteDanceAdAdapter: " + adType + "\u5E7F\u544A\u5B9E\u4F8B\u4E0D\u5B58\u5728");
              this.adLoadStates.set(adType, AdLoadState.FAILED);
            }
          } catch (error) {
            console.error("ByteDanceAdAdapter: \u52A0\u8F7D" + adType + "\u5E7F\u544A\u5F02\u5E38", error);
            this.adLoadStates.set(adType, AdLoadState.FAILED);
          }
        }

        /**
         * 展示广告
         * @param adType 广告类型
         * @param rewardKey 奖励配置键（仅激励视频广告需要）
         * @returns 是否成功展示
         */;
        _proto.showAd = function showAd(adType, rewardKey) {
          var _this4 = this;
          if (!this.isAdLoaded(adType)) {
            console.log("ByteDanceAdAdapter: " + adType + "\u5E7F\u544A\u672A\u52A0\u8F7D\uFF0C\u5C1D\u8BD5\u91CD\u65B0\u52A0\u8F7D");
            this.loadAd(adType);
            return false;
          }
          console.log("ByteDanceAdAdapter: \u5F00\u59CB\u5C55\u793A" + adType + "\u5E7F\u544A");
          try {
            if (adType === AdType.REWARD_VIDEO && this.rewardVideoAd) {
              this.rewardVideoAd.show().then(function () {
                console.log("ByteDanceAdAdapter: " + adType + "\u5E7F\u544A\u5C55\u793A\u6210\u529F");
                _this4.adLoadStates.set(adType, AdLoadState.NOT_LOADED);
                _this4.triggerEvent({
                  type: AdEventType.SHOW_SUCCESS,
                  adType: adType,
                  adUnitId: _this4.adUnitIds.get(adType)
                });
              })["catch"](function (err) {
                console.error("ByteDanceAdAdapter: " + adType + "\u5E7F\u544A\u5C55\u793A\u5931\u8D25", err);
                _this4.triggerEvent({
                  type: AdEventType.SHOW_FAILED,
                  adType: adType,
                  adUnitId: _this4.adUnitIds.get(adType),
                  error: err.errMsg || '未知错误'
                });

                // 重新加载广告
                _this4.loadAd(adType);
              });
              return true;
            } else if (adType === AdType.INTERSTITIAL && this.interstitialAd) {
              this.interstitialAd.show().then(function () {
                console.log("ByteDanceAdAdapter: " + adType + "\u5E7F\u544A\u5C55\u793A\u6210\u529F");
                _this4.adLoadStates.set(adType, AdLoadState.NOT_LOADED);
                _this4.triggerEvent({
                  type: AdEventType.SHOW_SUCCESS,
                  adType: adType,
                  adUnitId: _this4.adUnitIds.get(adType)
                });
              })["catch"](function (err) {
                console.error("ByteDanceAdAdapter: " + adType + "\u5E7F\u544A\u5C55\u793A\u5931\u8D25", err);
                _this4.triggerEvent({
                  type: AdEventType.SHOW_FAILED,
                  adType: adType,
                  adUnitId: _this4.adUnitIds.get(adType),
                  error: err.errMsg || '未知错误'
                });

                // 重新加载广告
                _this4.loadAd(adType);
              });
              return true;
            } else {
              console.error("ByteDanceAdAdapter: " + adType + "\u5E7F\u544A\u5B9E\u4F8B\u4E0D\u5B58\u5728");
              return false;
            }
          } catch (error) {
            console.error("ByteDanceAdAdapter: \u5C55\u793A" + adType + "\u5E7F\u544A\u5F02\u5E38", error);
            return false;
          }
        }

        /**
         * 获取广告加载状态
         * @param adType 广告类型
         * @returns 广告加载状态
         */;
        _proto.getAdLoadState = function getAdLoadState(adType) {
          return this.adLoadStates.get(adType) || AdLoadState.NOT_LOADED;
        }

        /**
         * 检查广告是否已加载
         * @param adType 广告类型
         * @returns 是否已加载
         */;
        _proto.isAdLoaded = function isAdLoaded(adType) {
          return this.getAdLoadState(adType) === AdLoadState.LOADED;
        }

        /**
         * 添加广告事件监听器
         * @param listener 事件监听器
         */;
        _proto.addEventListener = function addEventListener(listener) {
          if (this.eventListeners.indexOf(listener) === -1) {
            this.eventListeners.push(listener);
          }
        }

        /**
         * 移除广告事件监听器
         * @param listener 事件监听器
         */;
        _proto.removeEventListener = function removeEventListener(listener) {
          var index = this.eventListeners.indexOf(listener);
          if (index !== -1) {
            this.eventListeners.splice(index, 1);
          }
        }

        /**
         * 触发广告事件
         * @param param 事件参数
         */;
        _proto.triggerEvent = function triggerEvent(param) {
          for (var _iterator = _createForOfIteratorHelperLoose(this.eventListeners), _step; !(_step = _iterator()).done;) {
            var listener = _step.value;
            try {
              listener(param);
            } catch (error) {
              console.error('ByteDanceAdAdapter: 事件监听器执行错误', error);
            }
          }
        }

        /**
         * 销毁广告适配器，释放资源
         */;
        _proto.destroy = function destroy() {
          console.log('ByteDanceAdAdapter: 销毁字节跳动小游戏广告适配器');

          // 销毁激励视频广告
          if (this.rewardVideoAd) {
            this.rewardVideoAd.offLoad();
            this.rewardVideoAd.offError();
            this.rewardVideoAd.offClose();
            this.rewardVideoAd = null;
          }

          // 销毁插屏广告
          if (this.interstitialAd) {
            this.interstitialAd.offLoad();
            this.interstitialAd.offError();
            this.interstitialAd.offClose();
            this.interstitialAd = null;
          }

          // 清空事件监听器
          this.eventListeners = [];

          // 重置广告加载状态
          this.adLoadStates.set(AdType.REWARD_VIDEO, AdLoadState.NOT_LOADED);
          this.adLoadStates.set(AdType.INTERSTITIAL, AdLoadState.NOT_LOADED);
        };
        return ByteDanceAdAdapter;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CaoChuanJieJianSkill.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SkillBase.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _createForOfIteratorHelperLoose, cclegacy, Vec3, tween, BaseSkill;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      Vec3 = module.Vec3;
      tween = module.tween;
    }, function (module) {
      BaseSkill = module.BaseSkill;
    }],
    execute: function () {
      cclegacy._RF.push({}, "06da3BGjFVD55GJ5W3AWflP", "CaoChuanJieJianSkill", undefined);

      /**
       * 草船借箭技能实现
       * 功能：随机选择收集区一种棋子，从棋盘选择对应棋子凑够3个后直接消除
       */
      var CaoChuanJieJianSkill = exports('CaoChuanJieJianSkill', /*#__PURE__*/function (_BaseSkill) {
        _inheritsLoose(CaoChuanJieJianSkill, _BaseSkill);
        function CaoChuanJieJianSkill(config, gameUI) {
          var _this;
          _this = _BaseSkill.call(this, config) || this;
          _this.gameUI = void 0;
          _this.gameUI = gameUI;
          return _this;
        }

        /**
         * 执行技能效果
         * @param params 执行参数
         * @returns 是否执行成功
         */
        var _proto = CaoChuanJieJianSkill.prototype;
        _proto.onExecute = /*#__PURE__*/
        function () {
          var _onExecute = _asyncToGenerator(function* (params) {
            try {
              console.log("\u6267\u884C\u6280\u80FD: " + this.config.name);

              // 随机选择收集区一种棋子类型
              var _ref = this.selectRandomZiTypeFromCollection() || [0, 0],
                selectedZiStyle = _ref[0],
                count = _ref[1];
              if (!selectedZiStyle) {
                console.warn('收集区没有棋子，无法执行草船借箭技能');
                return false;
              }

              // 从棋盘选择对应棋子凑够3个
              var selectedZis = this.selectZisFromBoard(selectedZiStyle, 3 - count);
              if (selectedZis.length < 1) {
                console.warn("\u68CB\u76D8\u4E0A\u6CA1\u6709\u8DB3\u591F\u7684" + selectedZiStyle + "\u7C7B\u578B\u68CB\u5B50\uFF0C\u65E0\u6CD5\u6267\u884C\u8349\u8239\u501F\u7BAD\u6280\u80FD");
                return false;
              }

              // 直接消除这些棋子
              var success = yield this.eliminateZis(selectedZis);
              if (success) {
                console.log("\u8349\u8239\u501F\u7BAD\u6280\u80FD\u6267\u884C\u6210\u529F\uFF0C\u5DF2\u6D88\u9664" + selectedZis.length + "\u4E2A" + selectedZiStyle + "\u7C7B\u578B\u68CB\u5B50");
                return true;
              } else {
                console.warn('草船借箭技能执行失败，无法消除棋子');
                return false;
              }
            } catch (error) {
              console.error('草船借箭技能执行异常', error);
              return false;
            }
          });
          function onExecute(_x) {
            return _onExecute.apply(this, arguments);
          }
          return onExecute;
        }()
        /**
         * 随机选择收集区一种棋子类型
         * @returns 选择的棋子类型或null
         */;

        _proto.selectRandomZiTypeFromCollection = function selectRandomZiTypeFromCollection() {
          // 获取收集区棋子列表
          var collectionZiList = this.gameUI.m_PlaceHolders;
          if (!collectionZiList || collectionZiList.length === 0) {
            return null;
          }

          // 统计各种类型棋子的数量
          var styleCountMap = new Map();
          collectionZiList.forEach(function (zi) {
            // 棋子有一个style属性表示类型
            var style = zi.style;
            var count = styleCountMap.get(style) || 0;
            styleCountMap.set(style, count + 1);
          });
          console.log(styleCountMap);

          // 随机选择一种类型
          var styles = Array.from(styleCountMap.entries());
          if (styles.length === 0) {
            return null;
          }
          console.log(styles);
          var randomIndex = Math.floor(Math.random() * styles.length);
          return styles[randomIndex];
        }

        /**
         * 从棋盘选择指定类型的棋子
         * @param style 棋子类型
         * @param count 需要选择的数量
         * @returns 选择的棋子数组
         */;
        _proto.selectZisFromBoard = function selectZisFromBoard(style, count) {
          // 获取棋盘上的棋子列表
          var boardZiList = this.gameUI.m_ZiList;
          if (!boardZiList || boardZiList.length === 0) {
            return [];
          }

          // 筛选出指定类型的棋子
          var matchingZis = boardZiList.filter(function (zi) {
            // 棋子有一个style属性表示类型
            var ziStyle = zi.style;
            return ziStyle === style;
          });
          console.log("\u4ECE\u68CB\u76D8\u9009\u62E9" + count + "\u4E2A" + style + "\u7C7B\u578B\u68CB\u5B50", matchingZis);

          // 如果匹配的棋子数量不足，返回全部
          if (matchingZis.length <= count) {
            return matchingZis;
          }

          // 随机选择指定数量的棋子
          var selectedZis = [];
          var indices = new Set();
          while (selectedZis.length < count && indices.size < matchingZis.length) {
            var randomIndex = Math.floor(Math.random() * matchingZis.length);
            if (!indices.has(randomIndex)) {
              indices.add(randomIndex);
              selectedZis.push(matchingZis[randomIndex]);
            }
          }
          return selectedZis;
        }

        /**
         * 消除指定的棋子
         * @param zis 要消除的棋子数组
         * @returns 是否成功
         */;
        _proto.eliminateZis = /*#__PURE__*/
        function () {
          var _eliminateZis = _asyncToGenerator(function* (zis) {
            var _this2 = this;
            try {
              // 找到收集区相同类型的棋子
              var collectionZiList = this.gameUI.m_PlaceHolders;
              if (!collectionZiList || collectionZiList.length === 0) {
                return false;
              }

              // 筛选出收集区相同类型的棋子
              var matchingZis = collectionZiList.filter(function (zi) {
                // 棋子有一个style属性表示类型
                var ziStyle = zi.style;
                return ziStyle === zis[0].style;
              });
              if (matchingZis.length === 0) {
                console.warn('收集区没有找到相同类型的棋子');
                return false;
              }

              // 获取收集区第一个匹配棋子的位置作为目标位置
              var targetZi = matchingZis[0];
              var targetPosition = new Vec3(targetZi.node.position.x, targetZi.node.position.y, targetZi.node.position.z);

              // 创建动画Promise数组
              var animationPromises = [];

              // 遍历要消除的棋子，播放飞向收集区的动画
              var _loop = function* _loop() {
                var zi = _step.value;
                // 从棋盘移除棋子
                var index = _this2.gameUI.m_ZiList.indexOf(zi);
                // if (index !== -1) {
                _this2.gameUI.m_ZiList.splice(index, 1);
                // }

                // 如果棋子节点有效，播放飞行动画
                if (zi && zi.node && zi.node.isValid) {
                  // 将棋子移动到收集区节点下
                  zi.node.setParent(_this2.gameUI.collectArea || targetZi.node.parent, true);

                  // 设置棋子的z-index，确保移动时始终在上层显示
                  zi.node.setSiblingIndex((_this2.gameUI.collectArea || targetZi.node.parent).children.length - 1);

                  // 创建飞行动画Promise
                  var animationPromise = new Promise(function (resolve) {
                    // 使用tween创建飞行动画
                    tween(zi.node).to(0.5, {
                      position: targetPosition
                    }).call(function () {
                      // 动画完成后隐藏棋子，但不立即销毁
                      // if (zi.node && (zi.node as any).isValid) {
                      //     zi.node.active = false;
                      // }
                      zi.node.destroy();
                      resolve();
                    }).start();
                  });
                  animationPromises.push(animationPromise);
                }
              };
              for (var _iterator = _createForOfIteratorHelperLoose(zis), _step; !(_step = _iterator()).done;) {
                yield* _loop();
              }

              // 等待所有飞行动画完成
              yield Promise.all(animationPromises);

              // 动画完成后，消除收集区中该类型的棋子
              for (var i = 0; i < matchingZis.length; i++) {
                var zi = matchingZis[i];
                var index = this.gameUI.m_PlaceHolders.indexOf(zi);
                if (index !== -1) {
                  this.gameUI.m_PlaceHolders.splice(index, 1);

                  // 播放消除动画
                  if (zi && zi.node && zi.node.isValid) {
                    if (typeof zi['playEliminateAnimation'] === 'function') {
                      zi['playEliminateAnimation']();
                      zi.node.destroy();
                    } else {
                      // 简单的消失效果
                      zi.node.destroy();
                    }
                  }
                }
              }
              this.gameUI.reSetStacks();
              //将收集区剩余棋子位置更新到靠左侧
              this.gameUI.updateCollectionZiPositions();

              // 更新UI显示
              this.gameUI.updateUI();

              // 检查游戏状态
              if (typeof this.gameUI['checkGameState'] === 'function') {
                this.gameUI['checkGameState']();
              }
              return true;
            } catch (error) {
              console.error('消除棋子失败', error);
              return false;
            }
          });
          function eliminateZis(_x2) {
            return _eliminateZis.apply(this, arguments);
          }
          return eliminateZis;
        }()
        /**
         * 技能激活前逻辑
         * @param params 激活参数
         * @returns 是否可以激活
         */;

        _proto.onBeforeActivate = function onBeforeActivate(params) {
          // 检查收集区是否有棋子
          var collectionZiList = this.gameUI.m_ZiStack;
          if (!collectionZiList || collectionZiList.length === 0) {
            console.warn('收集区没有棋子，无法激活草船借箭技能');
            return false;
          }
          return true;
        };
        return CaoChuanJieJianSkill;
      }(BaseSkill));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CoinManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createForOfIteratorHelperLoose, cclegacy, sys;
  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      sys = module.sys;
    }],
    execute: function () {
      cclegacy._RF.push({}, "108cdKaS4hEabitb9QRNTAw", "CoinManager", undefined);

      // 金币流水记录接口

      // 广告奖励记录接口

      // 金币变化事件类型
      var CoinEventType = exports('CoinEventType', /*#__PURE__*/function (CoinEventType) {
        CoinEventType["COIN_ADD"] = "COIN_ADD";
        CoinEventType["COIN_SUBTRACT"] = "COIN_SUBTRACT";
        return CoinEventType;
      }({}));

      // 金币变化事件参数

      // 金币变化事件回调类型
      var CoinManager = exports('default', /*#__PURE__*/function () {
        // 单例模式
        CoinManager.getInstance = function getInstance() {
          if (!CoinManager.instance) {
            CoinManager.instance = new CoinManager();
          }
          return CoinManager.instance;
        }

        // 私有构造函数
        ;

        function CoinManager() {
          // 金币数据
          this.currentCoin = 0;
          // 当前金币数量
          this.totalEarned = 0;
          // 累计赚取
          this.totalSpent = 0;
          // 累计消费
          // 金币流水记录
          this.coinRecords = [];
          // 广告奖励记录
          this.adRewardRecords = [];
          // 事件监听器
          this.eventListeners = new Map();
          this.initEventListeners();
          this.loadData();
        }

        // 初始化事件监听器
        var _proto = CoinManager.prototype;
        _proto.initEventListeners = function initEventListeners() {
          this.eventListeners.set(CoinEventType.COIN_ADD, []);
          this.eventListeners.set(CoinEventType.COIN_SUBTRACT, []);
        }

        // 增加金币
        ;

        _proto.addCoin = function addCoin(amount, source) {
          if (source === void 0) {
            source = "unknown";
          }
          if (amount <= 0) {
            console.warn("\u589E\u52A0\u91D1\u5E01\u6570\u91CF\u5FC5\u987B\u5927\u4E8E0: " + amount);
            return false;
          }
          var oldCoin = this.currentCoin;
          this.currentCoin += amount;
          this.totalEarned += amount;

          // 添加金币流水记录
          this.addCoinRecord(amount, source, this.currentCoin);

          // 触发金币增加事件
          this.triggerEvent(CoinEventType.COIN_ADD, amount, this.currentCoin, source);

          // 保存金币数据
          this.saveData();
          console.log("\u589E\u52A0\u91D1\u5E01: " + amount + ", \u6765\u6E90: " + source + ", \u5F53\u524D\u91D1\u5E01: " + this.currentCoin);
          return true;
        }

        // 减少金币
        ;

        _proto.subtractCoin = function subtractCoin(amount, source) {
          if (source === void 0) {
            source = "unknown";
          }
          if (amount <= 0) {
            console.warn("\u51CF\u5C11\u91D1\u5E01\u6570\u91CF\u5FC5\u987B\u5927\u4E8E0: " + amount);
            return false;
          }
          if (this.currentCoin < amount) {
            console.warn("\u91D1\u5E01\u4E0D\u8DB3: \u5F53\u524D\u91D1\u5E01 " + this.currentCoin + ", \u5C1D\u8BD5\u51CF\u5C11 " + amount);
            return false;
          }
          this.currentCoin -= amount;
          this.totalSpent += amount;

          // 添加金币流水记录
          this.addCoinRecord(-amount, source, this.currentCoin);

          // 触发金币减少事件
          this.triggerEvent(CoinEventType.COIN_SUBTRACT, amount, this.currentCoin, source);

          // 保存金币数据
          this.saveData();
          console.log("\u51CF\u5C11\u91D1\u5E01: " + amount + ", \u6765\u6E90: " + source + ", \u5F53\u524D\u91D1\u5E01: " + this.currentCoin);
          return true;
        }

        // 获取当前金币数量
        ;

        _proto.getCurrentCoin = function getCurrentCoin() {
          return this.currentCoin;
        }

        // 获取累计赚取金币
        ;

        _proto.getTotalEarned = function getTotalEarned() {
          return this.totalEarned;
        }

        // 获取累计消费金币
        ;

        _proto.getTotalSpent = function getTotalSpent() {
          return this.totalSpent;
        }

        // 添加金币流水记录
        ;

        _proto.addCoinRecord = function addCoinRecord(amount, source, balance) {
          var record = {
            id: this.generateRecordId(),
            amount: amount,
            source: source,
            timestamp: Date.now(),
            balance: balance
          };
          this.coinRecords.unshift(record); // 添加到数组开头，最新的记录在前面

          // 限制记录数量，避免内存占用过大
          if (this.coinRecords.length > 1000) {
            this.coinRecords = this.coinRecords.slice(0, 1000);
          }
        }

        // 生成记录ID
        ;

        _proto.generateRecordId = function generateRecordId() {
          return "record_" + Date.now() + "_" + Math.random().toString(36).substr(2, 9);
        }

        // 获取金币流水记录
        ;

        _proto.getCoinRecords = function getCoinRecords() {
          return [].concat(this.coinRecords); // 返回副本，避免外部修改
        }

        // 添加广告奖励记录
        ;

        _proto.addAdRewardRecord = function addAdRewardRecord(adType, rewardAmount, watchScene) {
          var record = {
            id: this.generateRecordId(),
            adType: adType,
            rewardAmount: rewardAmount,
            watchTime: Date.now(),
            watchScene: watchScene
          };
          this.adRewardRecords.unshift(record); // 添加到数组开头，最新的记录在前面

          // 限制记录数量，避免内存占用过大
          if (this.adRewardRecords.length > 500) {
            this.adRewardRecords = this.adRewardRecords.slice(0, 500);
          }
        }

        // 获取广告奖励记录
        ;

        _proto.getAdRewardRecords = function getAdRewardRecords() {
          return [].concat(this.adRewardRecords); // 返回副本，避免外部修改
        }

        // 监听金币变化事件
        ;

        _proto.addEventListener = function addEventListener(eventType, callback) {
          var listeners = this.eventListeners.get(eventType);
          if (listeners) {
            listeners.push(callback);
          }
        }

        // 移除事件监听器
        ;

        _proto.removeEventListener = function removeEventListener(eventType, callback) {
          var listeners = this.eventListeners.get(eventType);
          if (listeners) {
            var index = listeners.indexOf(callback);
            if (index !== -1) {
              listeners.splice(index, 1);
            }
          }
        }

        // 触发事件
        ;

        _proto.triggerEvent = function triggerEvent(eventType, amount, balance, source) {
          var listeners = this.eventListeners.get(eventType);
          if (listeners && listeners.length > 0) {
            var _param = {
              eventType: eventType,
              amount: amount,
              balance: balance,
              source: source
            };

            // 复制一份监听器数组，避免在回调过程中修改原数组
            var listenersCopy = [].concat(listeners);
            for (var _iterator = _createForOfIteratorHelperLoose(listenersCopy), _step; !(_step = _iterator()).done;) {
              var callback = _step.value;
              try {
                callback(_param);
              } catch (error) {
                console.error("\u6267\u884C\u91D1\u5E01\u53D8\u5316\u4E8B\u4EF6\u56DE\u8C03\u65F6\u51FA\u9519:", error);
              }
            }
          }
        }

        // 保存金币数据到本地存储
        ;

        _proto.saveData = function saveData() {
          try {
            var coinData = {
              currentCoin: this.currentCoin,
              totalEarned: this.totalEarned,
              totalSpent: this.totalSpent
            };
            sys.localStorage.setItem(CoinManager.COIN_KEY, JSON.stringify(coinData));
            sys.localStorage.setItem(CoinManager.COIN_RECORD_KEY, JSON.stringify(this.coinRecords));
            sys.localStorage.setItem(CoinManager.AD_REWARD_KEY, JSON.stringify(this.adRewardRecords));
            console.log("金币数据已保存");
          } catch (error) {
            console.error("保存金币数据时出错:", error);
          }
        }

        // 从本地存储加载金币数据
        ;

        _proto.loadData = function loadData() {
          try {
            console.log('CoinManager: 开始加载金币数据');

            // 加载金币基本数据
            var coinDataStr = sys.localStorage.getItem(CoinManager.COIN_KEY);
            if (coinDataStr) {
              var coinData = JSON.parse(coinDataStr);
              this.currentCoin = coinData.currentCoin || 0;
              this.totalEarned = coinData.totalEarned || 0;
              this.totalSpent = coinData.totalSpent || 0;
              console.log('CoinManager: 从本地存储加载金币数据', coinData);
            } else {
              console.log('CoinManager: 本地存储中没有金币数据，使用默认值0');
              // 如果没有数据，使用默认值0
              this.currentCoin = 0;
              this.totalEarned = 0;
              this.totalSpent = 0;
            }

            // 加载金币流水记录
            var coinRecordsStr = sys.localStorage.getItem(CoinManager.COIN_RECORD_KEY);
            if (coinRecordsStr) {
              this.coinRecords = JSON.parse(coinRecordsStr);
            }

            // 加载广告奖励记录
            var adRewardStr = sys.localStorage.getItem(CoinManager.AD_REWARD_KEY);
            if (adRewardStr) {
              this.adRewardRecords = JSON.parse(adRewardStr);
            }
            console.log("CoinManager: \u91D1\u5E01\u6570\u636E\u52A0\u8F7D\u5B8C\u6210: \u5F53\u524D\u91D1\u5E01 " + this.currentCoin);
          } catch (error) {
            console.error("CoinManager: 加载金币数据时出错:", error);
            // 加载失败时重置数据
            this.resetData();
          }
        }

        // 重置金币数据
        ;

        _proto.resetData = function resetData() {
          this.currentCoin = 0;
          this.totalEarned = 0;
          this.totalSpent = 0;
          this.coinRecords = [];
          this.adRewardRecords = [];
          console.log("金币数据已重置");
        };
        return CoinManager;
      }()); // 设置全局变量，方便其他组件访问
      CoinManager.instance = void 0;
      // 金币数据键名
      CoinManager.COIN_KEY = "game_coin_data";
      CoinManager.COIN_RECORD_KEY = "game_coin_record";
      CoinManager.AD_REWARD_KEY = "game_ad_reward";
      if (typeof window !== 'undefined') {
        window['CoinManager'] = CoinManager;
        window['CoinEventType'] = CoinEventType;
        console.log('CoinManager: 已设置全局变量');
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DailyRewardUI.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseUI.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, BaseUI;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
    }, function (module) {
      BaseUI = module.BaseUI;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "f6b69JFRSZJLYe9sbgcw7Q2", "DailyRewardUI", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /**
       * 每日登录奖励UI
       * 用于展示每日登录奖励，支持奖励领取和观看广告获得双倍奖励
       */
      var DailyRewardUI = exports('DailyRewardUI', (_dec = ccclass('DailyRewardUI'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_BaseUI) {
        _inheritsLoose(DailyRewardUI, _BaseUI);
        function DailyRewardUI() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BaseUI.call.apply(_BaseUI, [this].concat(args)) || this;
          // 连续登录天数显示节点
          _initializerDefineProperty(_this, "consecutiveDaysLabel", _descriptor, _assertThisInitialized(_this));
          // 奖励内容显示节点
          _initializerDefineProperty(_this, "rewardContent", _descriptor2, _assertThisInitialized(_this));
          // 领取奖励按钮
          _initializerDefineProperty(_this, "claimButton", _descriptor3, _assertThisInitialized(_this));
          // 观看广告双倍奖励按钮
          _initializerDefineProperty(_this, "doubleRewardButton", _descriptor4, _assertThisInitialized(_this));
          // 关闭按钮
          _initializerDefineProperty(_this, "closeButton", _descriptor5, _assertThisInitialized(_this));
          // 是否已领取奖励
          _this.isClaimed = false;
          return _this;
        }
        var _proto = DailyRewardUI.prototype;
        _proto.onLoad = function onLoad() {
          // 绑定按钮事件
          if (this.claimButton) {
            this.claimButton.on(Node.EventType.TOUCH_END, this.onClaimClick, this);
          }
          if (this.doubleRewardButton) {
            this.doubleRewardButton.on(Node.EventType.TOUCH_END, this.onDoubleRewardClick, this);
          }
          if (this.closeButton) {
            this.closeButton.on(Node.EventType.TOUCH_END, this.onCloseClick, this);
          }

          // 初始化每日登录奖励数据
          this.initDailyRewardUI();
        }

        /**
         * 初始化每日登录奖励界面
         */;
        _proto.initDailyRewardUI = function initDailyRewardUI() {
          // TODO: 从DailyRewardManager获取每日登录奖励数据
          // TODO: 更新连续登录天数显示
          // TODO: 更新奖励内容显示
          // TODO: 更新按钮状态（根据是否已领取）
          console.log('DailyRewardUI initialized');
        }

        /**
         * 领取奖励按钮点击事件
         */;
        _proto.onClaimClick = function onClaimClick() {
          var _this2 = this;
          if (this.isClaimed) {
            console.log('Reward already claimed');
            return;
          }

          // TODO: 调用DailyRewardManager领取奖励
          console.log('Claim daily reward');

          // 标记为已领取
          this.isClaimed = true;

          // 更新按钮状态
          this.updateButtonStates();

          // 关闭界面
          setTimeout(function () {
            _this2.hide();
          }, 1000);
        }

        /**
         * 观看广告双倍奖励按钮点击事件
         */;
        _proto.onDoubleRewardClick = function onDoubleRewardClick() {
          if (this.isClaimed) {
            console.log('Reward already claimed');
            return;
          }

          // TODO: 调用AdManager显示广告
          console.log('Watch ad for double reward');

          // 模拟广告观看成功
          this.onAdWatched();
        }

        /**
         * 广告观看成功回调
         */;
        _proto.onAdWatched = function onAdWatched() {
          var _this3 = this;
          if (this.isClaimed) {
            console.log('Reward already claimed');
            return;
          }

          // TODO: 调用DailyRewardManager领取双倍奖励
          console.log('Ad watched, claim double reward');

          // 标记为已领取
          this.isClaimed = true;

          // 更新按钮状态
          this.updateButtonStates();

          // 关闭界面
          setTimeout(function () {
            _this3.hide();
          }, 1000);
        }

        /**
         * 更新按钮状态
         */;
        _proto.updateButtonStates = function updateButtonStates() {
          if (this.isClaimed) {
            // 已领取，禁用按钮
            if (this.claimButton) this.claimButton.active = false;
            if (this.doubleRewardButton) this.doubleRewardButton.active = false;
          } else {
            // 未领取，启用按钮
            if (this.claimButton) this.claimButton.active = true;
            if (this.doubleRewardButton) this.doubleRewardButton.active = true;
          }
        }

        /**
         * 关闭按钮点击事件
         */;
        _proto.onCloseClick = function onCloseClick() {
          // 关闭界面
          this.hide();
        };
        _proto.onDestroy = function onDestroy() {
          // 移除按钮事件
          if (this.claimButton) {
            this.claimButton.off(Node.EventType.TOUCH_END, this.onClaimClick, this);
          }
          if (this.doubleRewardButton) {
            this.doubleRewardButton.off(Node.EventType.TOUCH_END, this.onDoubleRewardClick, this);
          }
          if (this.closeButton) {
            this.closeButton.off(Node.EventType.TOUCH_END, this.onCloseClick, this);
          }
          _BaseUI.prototype.onDestroy.call(this);
        };
        return DailyRewardUI;
      }(BaseUI), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "consecutiveDaysLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "rewardContent", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "claimButton", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "doubleRewardButton", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "closeButton", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DestoryHook.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "29189VMClxIS6uKjcRKv0fj", "DestoryHook", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var DestoryHook = exports('DestoryHook', (_dec = ccclass('DestoryHook'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DestoryHook, _Component);
        function DestoryHook() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.m_Hooks = [];
          return _this;
        }
        var _proto = DestoryHook.prototype;
        /**增加钩子方法 */
        _proto.addHook = function addHook(hook) {
          this.m_Hooks.push(hook);
        };
        _proto.onDestroy = function onDestroy() {
          for (var i = this.m_Hooks.length - 1; i >= 0; --i) {
            this.m_Hooks[i]();
          }
        };
        return DestoryHook;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameDataManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _extends, cclegacy, sys;
  return {
    setters: [function (module) {
      _extends = module.extends;
    }, function (module) {
      cclegacy = module.cclegacy;
      sys = module.sys;
    }],
    execute: function () {
      cclegacy._RF.push({}, "a1b2cPU5fZ4kKvN7xI0VniQ", "GameDataManager", undefined);

      // 用户信息接口

      var GameDataManager = exports('GameDataManager', /*#__PURE__*/function () {
        // 单例模式
        GameDataManager.getInstance = function getInstance() {
          if (!GameDataManager.instance) {
            GameDataManager.instance = new GameDataManager();
          }
          return GameDataManager.instance;
        }

        // 私有构造函数
        ;

        function GameDataManager() {
          // 用户信息
          this.userInfo = void 0;
          this.userInfo = this.getDefaultUserInfo();
        }

        // 获取默认用户信息
        var _proto = GameDataManager.prototype;
        _proto.getDefaultUserInfo = function getDefaultUserInfo() {
          return {
            userId: this.generateUserId(),
            username: "玩家",
            avatar: "",
            level: 1,
            exp: 0,
            lastLoginTime: 0,
            consecutiveLoginDays: 0,
            totalLoginDays: 0
          };
        }

        // 生成用户ID
        ;

        _proto.generateUserId = function generateUserId() {
          return "user_" + Date.now() + "_" + Math.random().toString(36).substr(2, 9);
        }

        // 保存关卡
        ;

        _proto.saveLevel = function saveLevel(level) {
          sys.localStorage.setItem(GameDataManager.LEVEL_KEY, level.toString());
          console.log("\u5DF2\u4FDD\u5B58\u5173\u5361: " + level);
        }

        // 加载关卡
        ;

        _proto.loadLevel = function loadLevel() {
          var savedLevel = sys.localStorage.getItem(GameDataManager.LEVEL_KEY);
          var level = savedLevel ? parseInt(savedLevel, 10) : 1;
          console.log("\u5DF2\u52A0\u8F7D\u5173\u5361: " + level);
          return level;
        }

        // 重置关卡
        ;

        _proto.resetLevel = function resetLevel(level) {
          sys.localStorage.setItem(GameDataManager.LEVEL_KEY, level.toString());
          console.log("\u5DF2\u91CD\u7F6E\u5173\u5361: " + level);
        }

        // 保存用户信息
        ;

        _proto.saveUserInfo = function saveUserInfo() {
          try {
            sys.localStorage.setItem(GameDataManager.USER_INFO_KEY, JSON.stringify(this.userInfo));
            console.log("用户信息已保存");
          } catch (error) {
            console.error("保存用户信息时出错:", error);
          }
        }

        // 加载用户信息
        ;

        _proto.loadUserInfo = function loadUserInfo() {
          try {
            var userInfoStr = sys.localStorage.getItem(GameDataManager.USER_INFO_KEY);
            if (userInfoStr) {
              var loadedUserInfo = JSON.parse(userInfoStr);
              // 验证数据格式
              if (this.validateUserInfo(loadedUserInfo)) {
                this.userInfo = loadedUserInfo;
                console.log("用户信息已加载");
              } else {
                console.warn("用户信息格式不正确，使用默认值");
                this.userInfo = this.getDefaultUserInfo();
              }
            } else {
              console.log("未找到用户信息，使用默认值");
              this.userInfo = this.getDefaultUserInfo();
            }
          } catch (error) {
            console.error("加载用户信息时出错:", error);
            this.userInfo = this.getDefaultUserInfo();
          }
        }

        // 验证用户信息格式
        ;

        _proto.validateUserInfo = function validateUserInfo(userInfo) {
          return userInfo && typeof userInfo.userId === 'string' && typeof userInfo.username === 'string' && typeof userInfo.avatar === 'string' && typeof userInfo.level === 'number' && typeof userInfo.exp === 'number' && typeof userInfo.lastLoginTime === 'number' && typeof userInfo.consecutiveLoginDays === 'number' && typeof userInfo.totalLoginDays === 'number';
        }

        // 获取用户信息
        ;

        _proto.getUserInfo = function getUserInfo() {
          return _extends({}, this.userInfo); // 返回副本，避免外部修改
        }

        // 更新用户信息
        ;

        _proto.updateUserInfo = function updateUserInfo(userInfo) {
          this.userInfo = _extends({}, this.userInfo, userInfo);
          this.saveUserInfo();
          console.log("用户信息已更新");
        }

        // 重置用户信息
        ;

        _proto.resetUserInfo = function resetUserInfo() {
          this.userInfo = this.getDefaultUserInfo();
          sys.localStorage.removeItem(GameDataManager.USER_INFO_KEY);
          console.log("用户信息已重置");
        }

        // 等级经验值配置
        ;
        // 获取当前等级
        _proto.getCurrentLevel = function getCurrentLevel() {
          return this.userInfo.level;
        }

        // 获取当前经验值
        ;

        _proto.getCurrentExp = function getCurrentExp() {
          return this.userInfo.exp;
        }

        // 获取下一级所需经验值
        ;

        _proto.getNextLevelExp = function getNextLevelExp() {
          var currentLevel = this.userInfo.level;
          if (currentLevel >= GameDataManager.LEVEL_EXP_CONFIG.length) {
            return -1; // 已达到最高等级
          }

          var nextLevelConfig = GameDataManager.LEVEL_EXP_CONFIG.find(function (config) {
            return config.level === currentLevel + 1;
          });
          return nextLevelConfig ? nextLevelConfig.exp : -1;
        }

        // 获取当前等级经验值进度（0-1）
        ;

        _proto.getCurrentLevelProgress = function getCurrentLevelProgress() {
          var currentLevel = this.userInfo.level;
          var currentExp = this.userInfo.exp;
          if (currentLevel >= GameDataManager.LEVEL_EXP_CONFIG.length) {
            return 1; // 已达到最高等级
          }

          var currentLevelConfig = GameDataManager.LEVEL_EXP_CONFIG.find(function (config) {
            return config.level === currentLevel;
          });
          var nextLevelConfig = GameDataManager.LEVEL_EXP_CONFIG.find(function (config) {
            return config.level === currentLevel + 1;
          });
          if (!currentLevelConfig || !nextLevelConfig) {
            return 0;
          }
          var levelExpRange = nextLevelConfig.exp - currentLevelConfig.exp;
          var currentLevelExp = currentExp - currentLevelConfig.exp;
          return Math.min(1, Math.max(0, currentLevelExp / levelExpRange));
        }

        // 增加经验值
        ;

        _proto.addExp = function addExp(exp) {
          var _this = this;
          if (exp <= 0) {
            console.warn("\u589E\u52A0\u7ECF\u9A8C\u503C\u5FC5\u987B\u5927\u4E8E0: " + exp);
            return false;
          }
          var oldLevel = this.userInfo.level;
          this.userInfo.exp += exp;

          // 检查是否升级
          var levelUp = false;
          var newLevel = oldLevel;

          // 从当前等级的下一级开始检查
          var _loop = function _loop(i) {
            var levelConfig = GameDataManager.LEVEL_EXP_CONFIG.find(function (config) {
              return config.level === i;
            });
            if (levelConfig && _this.userInfo.exp >= levelConfig.exp) {
              newLevel = i;
              levelUp = true;
            } else {
              return 1; // break
            }
          };

          for (var i = oldLevel + 1; i <= GameDataManager.LEVEL_EXP_CONFIG.length; i++) {
            if (_loop(i)) break;
          }
          if (levelUp) {
            this.userInfo.level = newLevel;
            console.log("\u606D\u559C\u5347\u7EA7\uFF01\u4ECE " + oldLevel + " \u7EA7\u5347\u7EA7\u5230 " + newLevel + " \u7EA7");
          }
          this.saveUserInfo();
          console.log("\u589E\u52A0\u7ECF\u9A8C\u503C: " + exp + ", \u5F53\u524D\u7ECF\u9A8C\u503C: " + this.userInfo.exp + ", \u5F53\u524D\u7B49\u7EA7: " + this.userInfo.level);
          return levelUp;
        }

        // 设置等级和经验值（用于测试）
        ;

        _proto.setLevelAndExp = function setLevelAndExp(level, exp) {
          if (level < 1 || level > GameDataManager.LEVEL_EXP_CONFIG.length) {
            console.warn("\u7B49\u7EA7\u5FC5\u987B\u57281-" + GameDataManager.LEVEL_EXP_CONFIG.length + "\u4E4B\u95F4: " + level);
            return;
          }
          var levelConfig = GameDataManager.LEVEL_EXP_CONFIG.find(function (config) {
            return config.level === level;
          });
          if (!levelConfig) {
            console.warn("\u627E\u4E0D\u5230\u7B49\u7EA7\u914D\u7F6E: " + level);
            return;
          }

          // 确保经验值不小于当前等级所需经验值
          this.userInfo.level = level;
          this.userInfo.exp = Math.max(levelConfig.exp, exp);
          this.saveUserInfo();
          console.log("\u8BBE\u7F6E\u7B49\u7EA7: " + level + ", \u7ECF\u9A8C\u503C: " + this.userInfo.exp);
        }

        // 每日登录奖励配置
        ;
        // 检查是否可以领取每日登录奖励
        _proto.canClaimDailyLoginReward = function canClaimDailyLoginReward() {
          var now = Date.now();
          var lastLoginTime = this.userInfo.lastLoginTime;

          // 如果从未登录过，可以领取
          if (lastLoginTime === 0) {
            return true;
          }

          // 检查是否是新的一天
          var lastLoginDate = new Date(lastLoginTime);
          var currentDate = new Date(now);

          // 如果不是同一天，可以领取
          return lastLoginDate.getDate() !== currentDate.getDate() || lastLoginDate.getMonth() !== currentDate.getMonth() || lastLoginDate.getFullYear() !== currentDate.getFullYear();
        }

        // 领取每日登录奖励
        ;

        _proto.claimDailyLoginReward = function claimDailyLoginReward() {
          if (!this.canClaimDailyLoginReward()) {
            console.log("今日已领取登录奖励");
            return {
              success: false,
              coin: 0,
              exp: 0,
              consecutiveDays: this.userInfo.consecutiveLoginDays
            };
          }
          var now = Date.now();
          var lastLoginTime = this.userInfo.lastLoginTime;

          // 计算连续登录天数
          var consecutiveDays = 1; // 默认为1天

          if (lastLoginTime > 0) {
            var lastLoginDate = new Date(lastLoginTime);
            var currentDate = new Date(now);

            // 计算日期差
            var timeDiff = currentDate.getTime() - lastLoginDate.getTime();
            var dayDiff = Math.floor(timeDiff / (1000 * 3600 * 24));
            if (dayDiff === 1) {
              // 如果是连续登录，增加连续天数
              consecutiveDays = this.userInfo.consecutiveLoginDays + 1;

              // 如果超过7天，重置为1（每周重置）
              if (consecutiveDays > 7) {
                consecutiveDays = 1;
              }
            } else if (dayDiff > 1) {
              // 如果间隔超过1天，重置连续天数
              consecutiveDays = 1;
            }
          }

          // 更新用户信息
          this.userInfo.lastLoginTime = now;
          this.userInfo.consecutiveLoginDays = consecutiveDays;
          this.userInfo.totalLoginDays += 1;

          // 获取奖励配置
          var rewardIndex = (consecutiveDays - 1) % GameDataManager.DAILY_LOGIN_REWARDS.length;
          var reward = GameDataManager.DAILY_LOGIN_REWARDS[rewardIndex];
          if (!reward) {
            console.error("找不到登录奖励配置");
            this.saveUserInfo();
            return {
              success: false,
              coin: 0,
              exp: 0,
              consecutiveDays: this.userInfo.consecutiveLoginDays
            };
          }

          // 保存用户信息
          this.saveUserInfo();
          console.log("\u9886\u53D6\u6BCF\u65E5\u767B\u5F55\u5956\u52B1\uFF1A\u91D1\u5E01 " + reward.coin + "\uFF0C\u7ECF\u9A8C " + reward.exp + "\uFF0C\u8FDE\u7EED\u767B\u5F55 " + consecutiveDays + " \u5929");
          return {
            success: true,
            coin: reward.coin,
            exp: reward.exp,
            consecutiveDays: consecutiveDays
          };
        }

        // 获取今日登录奖励信息
        ;

        _proto.getTodayLoginRewardInfo = function getTodayLoginRewardInfo() {
          var canClaim = this.canClaimDailyLoginReward();

          // 计算如果领取奖励后的连续天数
          var consecutiveDays = this.userInfo.consecutiveLoginDays;
          if (canClaim) {
            var now = Date.now();
            var lastLoginTime = this.userInfo.lastLoginTime;
            if (lastLoginTime > 0) {
              var lastLoginDate = new Date(lastLoginTime);
              var currentDate = new Date(now);

              // 计算日期差
              var timeDiff = currentDate.getTime() - lastLoginDate.getTime();
              var dayDiff = Math.floor(timeDiff / (1000 * 3600 * 24));
              if (dayDiff === 1) {
                // 如果是连续登录，增加连续天数
                consecutiveDays += 1;

                // 如果超过7天，重置为1（每周重置）
                if (consecutiveDays > 7) {
                  consecutiveDays = 1;
                }
              } else if (dayDiff > 1) {
                // 如果间隔超过1天，重置连续天数
                consecutiveDays = 1;
              }
            } else {
              // 如果从未登录过，连续天数为1
              consecutiveDays = 1;
            }
          }

          // 获取奖励配置
          var rewardIndex = (consecutiveDays - 1) % GameDataManager.DAILY_LOGIN_REWARDS.length;
          var reward = GameDataManager.DAILY_LOGIN_REWARDS[rewardIndex];
          return {
            canClaim: canClaim,
            coin: reward ? reward.coin : 0,
            exp: reward ? reward.exp : 0,
            consecutiveDays: consecutiveDays
          };
        }

        // 获取连续登录天数
        ;

        _proto.getConsecutiveLoginDays = function getConsecutiveLoginDays() {
          return this.userInfo.consecutiveLoginDays;
        }

        // 获取总登录天数
        ;

        _proto.getTotalLoginDays = function getTotalLoginDays() {
          return this.userInfo.totalLoginDays;
        }

        // 获取上次登录时间
        ;

        _proto.getLastLoginTime = function getLastLoginTime() {
          return this.userInfo.lastLoginTime;
        };
        return GameDataManager;
      }());

      // 设置全局变量
      GameDataManager.instance = void 0;
      // 关卡数据键名
      GameDataManager.LEVEL_KEY = "game_current_level";
      // 用户信息键名
      GameDataManager.USER_INFO_KEY = "game_user_info";
      GameDataManager.LEVEL_EXP_CONFIG = [{
        level: 1,
        exp: 0
      },
      // 1级需要0经验
      {
        level: 2,
        exp: 100
      },
      // 2级需要100经验
      {
        level: 3,
        exp: 300
      },
      // 3级需要300经验
      {
        level: 4,
        exp: 600
      },
      // 4级需要600经验
      {
        level: 5,
        exp: 1000
      },
      // 5级需要1000经验
      {
        level: 6,
        exp: 1500
      },
      // 6级需要1500经验
      {
        level: 7,
        exp: 2100
      },
      // 7级需要2100经验
      {
        level: 8,
        exp: 2800
      },
      // 8级需要2800经验
      {
        level: 9,
        exp: 3600
      },
      // 9级需要3600经验
      {
        level: 10,
        exp: 4500
      },
      // 10级需要4500经验
      {
        level: 11,
        exp: 5500
      },
      // 11级需要5500经验
      {
        level: 12,
        exp: 6600
      },
      // 12级需要6600经验
      {
        level: 13,
        exp: 7800
      },
      // 13级需要7800经验
      {
        level: 14,
        exp: 9100
      },
      // 14级需要9100经验
      {
        level: 15,
        exp: 10500
      },
      // 15级需要10500经验
      {
        level: 16,
        exp: 12000
      },
      // 16级需要12000经验
      {
        level: 17,
        exp: 13600
      },
      // 17级需要13600经验
      {
        level: 18,
        exp: 15300
      },
      // 18级需要15300经验
      {
        level: 19,
        exp: 17100
      },
      // 19级需要17100经验
      {
        level: 20,
        exp: 19000
      } // 20级需要19000经验
      ];

      GameDataManager.DAILY_LOGIN_REWARDS = [{
        day: 1,
        coin: 100,
        exp: 10
      },
      // 第1天：100金币，10经验
      {
        day: 2,
        coin: 150,
        exp: 15
      },
      // 第2天：150金币，15经验
      {
        day: 3,
        coin: 200,
        exp: 20
      },
      // 第3天：200金币，20经验
      {
        day: 4,
        coin: 250,
        exp: 25
      },
      // 第4天：250金币，25经验
      {
        day: 5,
        coin: 300,
        exp: 30
      },
      // 第5天：300金币，30经验
      {
        day: 6,
        coin: 350,
        exp: 35
      },
      // 第6天：350金币，35经验
      {
        day: 7,
        coin: 500,
        exp: 50
      } // 第7天：500金币，50经验（每周重置）
      ];

      if (typeof window !== 'undefined') {
        window['GameDataManager'] = GameDataManager;
        console.log('GameDataManager: 已设置全局变量');
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GCtrl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './LoginCtrl.ts', './Match3UI.ts', './ResManager.ts', './UIManager.ts', './PrefabCfg.ts', './GameDataManager.ts', './CoinManager.ts', './AdManager.ts', './BagManager.ts', './ShopManager.ts', './TaskManager.ts', './SettingManager.ts', './SignManager.ts', './ToastManager.ts', './ShopUI.ts', './BagUI.ts', './LotteryUI.ts', './SignUI.ts', './SettingUI.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, cclegacy, _decorator, Component, LoginCtrl, Match3UI, ResManager, UIManager, registerBUrlByCfg, PrefabCfg, GameDataManager, CoinManager, AdManager, BagManager, ShopManager, TaskManager, SettingManager, SignManager, ToastManager, ShopUI, BagUI, LotteryUI, SignUI, SettingUI;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      LoginCtrl = module.LoginCtrl;
    }, function (module) {
      Match3UI = module.Match3UI;
    }, function (module) {
      ResManager = module.ResManager;
    }, function (module) {
      UIManager = module.default;
      registerBUrlByCfg = module.registerBUrlByCfg;
    }, function (module) {
      PrefabCfg = module.PrefabCfg;
    }, function (module) {
      GameDataManager = module.GameDataManager;
    }, function (module) {
      CoinManager = module.default;
    }, function (module) {
      AdManager = module.AdManager;
    }, function (module) {
      BagManager = module.BagManager;
    }, function (module) {
      ShopManager = module.ShopManager;
    }, function (module) {
      TaskManager = module.TaskManager;
    }, function (module) {
      SettingManager = module.SettingManager;
    }, function (module) {
      SignManager = module.SignManager;
    }, function (module) {
      ToastManager = module.ToastManager;
    }, function (module) {
      ShopUI = module.ShopUI;
    }, function (module) {
      BagUI = module.BagUI;
    }, function (module) {
      LotteryUI = module.LotteryUI;
    }, function (module) {
      SignUI = module.SignUI;
    }, function (module) {
      SettingUI = module.SettingUI;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "bac57txy2FD+qFvoABnFPCg", "GCtrl", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      //新增全局变量声明

      var GCtrl = exports('GCtrl', (_dec = ccclass('GCtrl'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GCtrl, _Component);
        function GCtrl() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.loginCtrl = new LoginCtrl();
          _this.res = new ResManager();
          _this.ui = new UIManager();
          _this.data = GameDataManager.getInstance();
          // 添加数据管理器
          _this.coin = CoinManager.getInstance();
          // 添加金币管理器
          _this.ad = AdManager.getInstance();
          // 添加广告管理器
          _this.bag = BagManager.getInstance();
          // 添加背包管理器
          _this.shop = ShopManager.instance;
          // 添加商店管理器
          _this.task = TaskManager.getInstance();
          // 添加任务管理器
          _this.setting = SettingManager.getInstance();
          // 添加设置管理器
          _this.sign = SignManager.instance;
          // 添加签到管理器
          _this.currentGameUI = null;
          return _this;
        }
        var _proto = GCtrl.prototype;
        // 当前游戏UI引用
        _proto.init = /*#__PURE__*/
        function () {
          var _init = _asyncToGenerator(function* (param) {
            //全局变量设置
            globalThis["gCtrl"] = this;
            console.log('GCtrl: 开始初始化');

            //提前注册预制体信息
            registerBUrlByCfg(PrefabCfg);
            console.log('GCtrl: 预制体信息已注册');

            //登录模块二段构造
            this.loginCtrl.init();
            console.log('GCtrl: 登录模块已初始化');

            //金币管理器初始化，加载数据
            // this.coin.loadData(); 
            console.log('GCtrl: 金币管理器已初始化，当前金币:', this.coin.getCurrentCoin());

            //广告管理器初始化
            this.ad.init();
            console.log('GCtrl: 广告管理器已初始化');

            //背包管理器初始化
            this.bag.init();
            console.log('GCtrl: 背包管理器已初始化');

            //数据管理器初始化，加载用户信息
            this.data.loadUserInfo();
            console.log('GCtrl: 数据管理器已初始化');

            //任务管理器初始化
            this.task.init();
            console.log('GCtrl: 任务管理器已初始化');

            //设置管理器初始化
            this.setting.init();
            console.log('GCtrl: 设置管理器已初始化');

            //商店管理器初始化
            this.shop.init();
            console.log('GCtrl: 商店管理器已初始化');

            //签到管理器初始化
            this.sign.init();
            console.log('GCtrl: 签到管理器已初始化');

            // 执行自动签到
            this.sign.autoSign();
            console.log('GCtrl: 自动签到检查完成');

            //界面管理器二段构造
            gCtrl.ui.init(param.canvas2d);
            console.log('GCtrl: 界面管理器已初始化');
            console.log('GCtrl: 所有模块初始化完成');

            // 新增：在主界面初始化完成后自动下载远程包
            this.preloadRemoteBundles();

            //显示登录界面（传入登录成功回调函数）
            // this.loginCtrl.showLogin(async () => {
            //     // 登录成功后不再自动进入游戏，而是等待用户点击按钮
            //     param.releaseBoostFun();
            //     // //我们不能直接去引用 LoginBN 包中的 LoginEntry.ts 中的 LoginEntry 组件
            //     // //否则脚本的打包归属就会发生改变。而是通过引擎提供的 js.getClassByName 方法进行解引用
            //     // ResManager.ins.loadBundle("LoginBN", () => {
            //     //     const loginEntryClass = js.getClassByName("LoginCtrl") as typeof Component;
            //     //     this.node.addComponent(loginEntryClass);
            //     // })
            // })
          });

          function init(_x) {
            return _init.apply(this, arguments);
          }
          return init;
        }()
        /**
         * 进入消消三国游戏
         */;

        _proto.enterMatch3Game = /*#__PURE__*/
        function () {
          var _enterMatch3Game = _asyncToGenerator(function* () {
            console.log('GCtrl: 进入消消三国游戏');
            this.currentGameUI = yield gCtrl.ui.openUI(Match3UI);
            console.log('GCtrl: 消消三国游戏UI已打开');
          });
          function enterMatch3Game() {
            return _enterMatch3Game.apply(this, arguments);
          }
          return enterMatch3Game;
        }()
        /**
         * 获取当前游戏UI
         * @returns 当前游戏UI实例
         */;

        _proto.getCurrentGameUI = function getCurrentGameUI() {
          return this.currentGameUI;
        }

        /**
         * 进入走走三国游戏
         */;
        _proto.enterZouZouGame = function enterZouZouGame() {
          console.log('GCtrl: 进入走走三国游戏');
          ToastManager.getInstance().showMessage('敬请期待', 1);

          // 发送返回主界面事件到场景节点
          var scene = this.node.scene;
          if (scene) {
            scene.emit('BACK_TO_MAIN_SCENE');
            console.log('ZouZouEntry: 已发送BACK_TO_MAIN_SCENE事件到场景节点');
          } else {
            console.warn('ZouZouEntry: 无法获取场景节点，事件发送失败');
          }
        }

        /**
         * 打开商店界面
         */;
        _proto.openShop = /*#__PURE__*/
        function () {
          var _openShop = _asyncToGenerator(function* () {
            console.log('GCtrl: 打开商店界面');
            try {
              var shopUI = yield gCtrl.ui.openUI(ShopUI);
              console.log('GCtrl: 商店界面打开成功');
            } catch (error) {
              console.error('GCtrl: 打开商店界面失败', error);
              ToastManager.getInstance().showMessage('商店暂时无法打开，请稍后再试', 2);
            }
          });
          function openShop() {
            return _openShop.apply(this, arguments);
          }
          return openShop;
        }()
        /**
         * 打开背包界面
         */;

        _proto.openBag = /*#__PURE__*/
        function () {
          var _openBag = _asyncToGenerator(function* () {
            console.log('GCtrl: 开始打开背包界面');
            try {
              console.log('GCtrl: 调用UIManager打开BagUI');
              var bagUI = yield gCtrl.ui.openUI(BagUI);
              console.log('GCtrl: 背包界面打开成功');
            } catch (error) {
              console.error('GCtrl: 打开背包界面失败', error);
              ToastManager.getInstance().showMessage('背包暂时无法打开，请稍后再试', 2);
              throw error; // 重新抛出错误，让调用者也能捕获
            }
          });

          function openBag() {
            return _openBag.apply(this, arguments);
          }
          return openBag;
        }()
        /**
         * 打开抽奖界面
         */;

        _proto.openLottery = /*#__PURE__*/
        function () {
          var _openLottery = _asyncToGenerator(function* () {
            console.log('GCtrl: 开始打开抽奖界面');
            try {
              console.log('GCtrl: 调用UIManager打开LotteryUI');
              var lotteryUI = yield gCtrl.ui.openUI(LotteryUI);
              console.log('GCtrl: 抽奖界面打开成功');
            } catch (error) {
              console.error('GCtrl: 打开抽奖界面失败', error);
              ToastManager.getInstance().showMessage('抽奖暂时无法打开，请稍后再试', 2);
              throw error; // 重新抛出错误，让调用者也能捕获
            }
          });

          function openLottery() {
            return _openLottery.apply(this, arguments);
          }
          return openLottery;
        }()
        /**
         * 打开签到界面
         */;

        _proto.openSign = /*#__PURE__*/
        function () {
          var _openSign = _asyncToGenerator(function* () {
            console.log('GCtrl: 开始打开签到界面');
            try {
              console.log('GCtrl: 调用UIManager打开SignUI');
              var signUI = yield gCtrl.ui.openUI(SignUI);
              console.log('GCtrl: 签到界面打开成功');
            } catch (error) {
              console.error('GCtrl: 打开签到界面失败', error);
              ToastManager.getInstance().showMessage('签到界面暂时无法打开，请稍后再试', 2);
              throw error; // 重新抛出错误，让调用者也能捕获
            }
          });

          function openSign() {
            return _openSign.apply(this, arguments);
          }
          return openSign;
        }()
        /**
         * 打开设置界面
         */;

        _proto.openSettings = /*#__PURE__*/
        function () {
          var _openSettings = _asyncToGenerator(function* () {
            console.log('GCtrl: 开始打开设置界面');
            try {
              console.log('GCtrl: 调用UIManager打开SettingUI');
              var settingUI = yield gCtrl.ui.openUI(SettingUI);
              console.log('GCtrl: 设置界面打开成功');
            } catch (error) {
              console.error('GCtrl: 打开设置界面失败', error);
              ToastManager.getInstance().showMessage('设置界面暂时无法打开，请稍后再试', 2);
              throw error; // 重新抛出错误，让调用者也能捕获
            }
          });

          function openSettings() {
            return _openSettings.apply(this, arguments);
          }
          return openSettings;
        }()
        /**
         * 预加载远程包
         */;

        _proto.preloadRemoteBundles = /*#__PURE__*/
        function () {
          var _preloadRemoteBundles = _asyncToGenerator(function* () {
            console.log('GCtrl: 开始预加载远程包');
            try {
              // 使用资源管理器预加载所有分包
              yield this.res.preloadAllBundles();
              console.log('GCtrl: 远程包预加载完成');

              //执行自动签到
              SignManager.instance.autoSign();
            } catch (error) {
              console.error('GCtrl: 远程包预加载失败', error);
              // 预加载失败不影响主流程，后续按需加载仍可正常工作
            }
          });

          function preloadRemoteBundles() {
            return _preloadRemoteBundles.apply(this, arguments);
          }
          return preloadRemoteBundles;
        }();
        return GCtrl;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GScriptBN", ['./GCtrl.ts', './LoginAudio.ts', './LoginCtrl.ts', './Match3UI.ts', './Match3ZiUE.ts', './ZiStack.ts', './ZouZouEntry.ts', './JsonsCfg.ts', './PrefabCfg.ts', './SpriteFramesCfg.ts', './AdConfigInitializer.ts', './AdConfigManager.ts', './AdManager.ts', './ByteDanceAdAdapter.ts', './IAdAdapter.ts', './PlatformDetector.ts', './WechatAdAdapter.ts', './index.ts', './AudioManager.ts', './BagManager.ts', './BundleDownloadManager.ts', './CoinManager.ts', './GameDataManager.ts', './DestoryHook.ts', './ResConst.ts', './ResLoader.ts', './ResManager.ts', './SettingManager.ts', './ShopConfig.ts', './ShopManager.ts', './CaoChuanJieJianSkill.ts', './QianKunNuoYiSkill.ts', './SkillBase.ts', './SkillManager.ts', './TuoDaoHuiMaSkill.ts', './TaskConfig.ts', './TaskManager.ts', './AdRewardUI.ts', './BagUI.ts', './BaseUI.ts', './DailyRewardUI.ts', './LotteryUI.ts', './SettingUI.ts', './ShopItemUI.ts', './ShopUI.ts', './SignManager.ts', './SignUI.ts', './TaskUI.ts', './ToastManager.ts', './UILayer.ts', './UIManager.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/IAdAdapter.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "eb0f8DyG2xHPpc1+x8Lzp9f", "IAdAdapter", undefined);
      /**
       * 广告加载状态枚举
       */
      var AdLoadState = exports('AdLoadState', /*#__PURE__*/function (AdLoadState) {
        AdLoadState["NOT_LOADED"] = "not_loaded";
        AdLoadState["LOADING"] = "loading";
        AdLoadState["LOADED"] = "loaded";
        AdLoadState["FAILED"] = "failed";
        return AdLoadState;
      }({})); // 加载失败

      /**
       * 广告事件监听器类型
       */

      /**
       * 平台广告适配器接口
       * 定义了所有平台广告适配器需要实现的方法
       */
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/index.ts", ['cc', './WechatAdAdapter.ts', './ByteDanceAdAdapter.ts', './PlatformDetector.ts', './AdConfigManager.ts', './AdConfigInitializer.ts', './AdManager.ts'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      exports('WechatAdAdapter', module.WechatAdAdapter);
    }, function (module) {
      exports('ByteDanceAdAdapter', module.ByteDanceAdAdapter);
    }, function (module) {
      exports('PlatformDetector', module.PlatformDetector);
    }, function (module) {
      exports('AdConfigManager', module.AdConfigManager);
    }, function (module) {
      exports('AdConfigInitializer', module.AdConfigInitializer);
    }, function (module) {
      var _setter = {};
      _setter.AdEventType = module.AdEventType;
      _setter.AdManager = module.AdManager;
      _setter.AdPlatform = module.AdPlatform;
      _setter.AdType = module.AdType;
      exports(_setter);
    }],
    execute: function () {
      cclegacy._RF.push({}, "4c938HxcqZNBqAf2eRGywKC", "index", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/JsonsCfg.ts", ['cc', './ResConst.ts'], function (exports) {
  var cclegacy, createBundleObject;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      createBundleObject = module.createBundleObject;
    }],
    execute: function () {
      cclegacy._RF.push({}, "cbe00e0u2FMcaCcTa1PnP+N", "JsonsCfg", undefined);
      var JsonsCfg = exports('JsonsCfg', function JsonsCfg() {});
      JsonsCfg.level = function (key) {
        return createBundleObject("yang/Jsons/level/" + key, "Match3BN");
      };
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LoginAudio.ts", ['cc', './ResConst.ts'], function (exports) {
  var cclegacy, createBundleObject;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      createBundleObject = module.createBundleObject;
    }],
    execute: function () {
      cclegacy._RF.push({}, "cb96dajUFdH16+ccT+i/Jbz", "LoginAudio", undefined);
      var Bundle = function Bundle(m) {
        return createBundleObject("Res/Audio/" + m, "LoginBN");
      };
      var LoginAudio = exports('LoginAudio', {
        bgm: Bundle("bgm")
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LoginCtrl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AudioManager.ts', './LoginAudio.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Component, AudioManager, LoginAudio;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      AudioManager = module.AudioManager;
    }, function (module) {
      LoginAudio = module.LoginAudio;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "ce185WIvBhJkanEwBQ0pavs", "LoginCtrl", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var LoginCtrl = exports('LoginCtrl', (_dec = ccclass('LoginEntry'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LoginCtrl, _Component);
        function LoginCtrl() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.m_OnLoginSuccess = null;
          return _this;
        }
        var _proto = LoginCtrl.prototype;
        _proto.init = function init() {
          AudioManager.ins.playBgMusic(LoginAudio.bgm);
        }

        //模拟登录实现(后续修改此实现即可)
        ;

        _proto.autoLogin = function autoLogin() {
          var _this2 = this;
          //模拟登录耗时，1秒后回调，后面改成不同平台登录逻辑即可
          setTimeout(function () {
            _this2.m_OnLoginSuccess();
          }, 1000);
        };
        _proto.showLogin = function showLogin(onLoginSuccess) {
          this.m_OnLoginSuccess = onLoginSuccess;
          this.autoLogin();
        }

        // private async onLoginSuccess(): Promise<void> {
        //     //子包 Match3BN 在loadBundle 完成的时候，包中的脚本将被 require，Match3Entry 这样的组件就被注册到引擎的组件管理模块中。
        //     //因此就可以通过 addComponent("Match3Entry") 的形式正确的添加组件。
        //     await ResManager.ins.loadBundleAsync("Match3BN");
        //     // 不使用this.node.addComponent(Match3Entry);
        //     // 这是因为 LoginEntry.ts 脚本所在的Asset Bundle 包的优先级高于 Match3 ，因此这样的引用是错误的。
        //     //1、加载依赖关系错乱；
        //     //2、微信小游戏、抖音小游戏中 Match3BN （是小游戏分包）的脚本将被错误的打包到 LoginBN 中。
        //     let match3Entry = this.node.addComponent("Match3Entry");
        //     (match3Entry as any).init();
        // }
        ;

        return LoginCtrl;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LotteryUI.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseUI.ts', './UILayer.ts', './ShopConfig.ts', './ToastManager.ts', './AdManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Button, tween, Sprite, assetManager, SpriteFrame, UITransform, Label, sys, BaseUI, UILayer, ShopConfig, ToastManager, AdManager, AdType, AdEventType;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Button = module.Button;
      tween = module.tween;
      Sprite = module.Sprite;
      assetManager = module.assetManager;
      SpriteFrame = module.SpriteFrame;
      UITransform = module.UITransform;
      Label = module.Label;
      sys = module.sys;
    }, function (module) {
      BaseUI = module.BaseUI;
    }, function (module) {
      UILayer = module.UILayer;
    }, function (module) {
      ShopConfig = module.ShopConfig;
    }, function (module) {
      ToastManager = module.ToastManager;
    }, function (module) {
      AdManager = module.AdManager;
      AdType = module.AdType;
      AdEventType = module.AdEventType;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _class3;
      cclegacy._RF.push({}, "610958wvj1PqJoK5GhW4Wom", "LotteryUI", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /**
       * 抽奖UI
       */
      var LotteryUI = exports('LotteryUI', (_dec = ccclass('LotteryUI'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Button), _dec5 = property(Button), _dec6 = property([Node]), _dec7 = property(Node), _dec8 = property(Node), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_BaseUI) {
        _inheritsLoose(LotteryUI, _BaseUI);
        function LotteryUI() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BaseUI.call.apply(_BaseUI, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "plateSprite", _descriptor, _assertThisInitialized(_this));
          // 奖项转盘
          _initializerDefineProperty(_this, "poiterSprite", _descriptor2, _assertThisInitialized(_this));
          // 指针
          _initializerDefineProperty(_this, "lotteryButton", _descriptor3, _assertThisInitialized(_this));
          // 抽奖按钮
          _initializerDefineProperty(_this, "closeButton", _descriptor4, _assertThisInitialized(_this));
          // 关闭按钮
          _initializerDefineProperty(_this, "itemNodes", _descriptor5, _assertThisInitialized(_this));
          // 奖项节点数组
          _initializerDefineProperty(_this, "leftChanceLabel", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "video", _descriptor7, _assertThisInitialized(_this));
          _this.isRotating = false;
          // 是否正在旋转
          _this.rotationDuration = 3;
          // 旋转持续时间
          _this.rotationTimes = 5;
          // 旋转圈数
          _this.prizes = [];
          // 奖项数组
          _this.dailyFreeChances = 3;
          // 每日免费抽奖次数
          _this.leftChances = 0;
          // 剩余抽奖次数
          _this.lastLotteryDate = '';
          return _this;
        }
        var _proto = LotteryUI.prototype;
        // 上次抽奖日期
        _proto.start = function start() {
          // 初始化按钮点击事件
          if (this.lotteryButton) {
            this.lotteryButton.node.on(Button.EventType.CLICK, this.onLotteryButtonClick, this);
          }

          // 初始化关闭按钮点击事件
          if (this.closeButton) {
            this.closeButton.node.on(Button.EventType.CLICK, this.onCloseButtonClick, this);
          }

          // 初始化抽奖次数
          this.initLotteryChances();

          //初始化奖项
          this.initItems();
        }

        /**
         * 抽奖按钮点击事件
         */;
        _proto.onLotteryButtonClick = function onLotteryButtonClick() {
          if (this.isRotating) {
            return; // 如果正在旋转，则不响应点击
          }

          // 检查剩余抽奖次数
          if (this.leftChances > 0) {
            // 有免费次数，直接抽奖
            this.startLottery();
          } else {
            // 没有免费次数，显示广告
            this.showAdAndLottery();
          }
        }

        /**
         * 关闭按钮点击事件
         */;
        _proto.onCloseButtonClick = function onCloseButtonClick() {
          // 发送返回主界面事件到场景节点
          var scene = this.node.scene;
          if (scene) {
            scene.emit('BACK_TO_MAIN_SCENE');
            console.log('LotteryUI: 已发送BACK_TO_MAIN_SCENE事件到场景节点');
          } else {
            console.warn('LotteryUI: 无法获取场景节点，事件发送失败');
          }

          // 关闭界面
          this.hide();
        }

        /**
         * 根据概率随机选择奖项索引
         * @returns 选择的奖项索引
         */;
        _proto.selectPrizeByProbability = function selectPrizeByProbability() {
          // 生成一个0-1之间的随机数
          var random = Math.random();

          // 计算概率累积和，并验证概率总和是否为1
          var cumulativeProbability = 0;
          var totalProbability = 0;

          // 首先计算总概率
          for (var i = 0; i < this.prizes.length; i++) {
            totalProbability += this.prizes[i].probabiliy;
          }

          // 如果总概率不为1，进行归一化处理
          var normalized = Math.abs(totalProbability - 1.0) > 0.0001;

          // 遍历所有奖项，根据概率选择
          for (var _i = 0; _i < this.prizes.length; _i++) {
            var probability = this.prizes[_i].probabiliy;

            // 如果需要归一化，调整概率值
            if (normalized && totalProbability > 0) {
              probability = probability / totalProbability;
            }
            cumulativeProbability += probability;

            // 使用更精确的比较，避免浮点数精度问题
            if (random < cumulativeProbability || _i === this.prizes.length - 1) {
              console.log("\u62BD\u5956\u7ED3\u679C: \u7D22\u5F15=" + _i + ", \u968F\u673A\u6570=" + random + ", \u7D2F\u79EF\u6982\u7387=" + cumulativeProbability + ", \u5F52\u4E00\u5316=" + normalized + ", \u603B\u6982\u7387=" + totalProbability);
              return _i;
            }
          }

          // 理论上不会执行到这里，但作为保险
          console.warn("\u62BD\u5956\u6982\u7387\u8BA1\u7B97\u5F02\u5E38\uFF0C\u8FD4\u56DE\u6700\u540E\u4E00\u4E2A\u5956\u9879\u3002\u968F\u673A\u6570=" + random + ", \u603B\u6982\u7387=" + totalProbability);
          return this.prizes.length - 1;
        }

        /**
         * 开始抽奖
         */;
        _proto.startLottery = function startLottery(byAd) {
          var _this2 = this;
          if (byAd === void 0) {
            byAd = false;
          }
          if (this.isRotating) {
            return;
          }

          // 减少抽奖次数
          this.reduceLotteryChance();
          this.isRotating = true;
          if (this.lotteryButton) {
            this.lotteryButton.interactable = false; // 禁用按钮
          }

          var prizeIndex = 4;
          if (!byAd) {
            //看广告抽奖，必中
            var selectAbleIndexs = [0, 1, 2, 3, 5, 6, 7];
            prizeIndex = selectAbleIndexs[Math.floor(Math.random() * selectAbleIndexs.length)];
          } else {
            //免费抽奖 根据概率选择奖项索引
            prizeIndex = this.selectPrizeByProbability();
            console.log("\u901A\u8FC7\u6982\u7387\u9009\u62E9\u7684\u5956\u9879\u7D22\u5F15: " + prizeIndex);
          }

          // 计算目标角度
          // 每个奖项占45度，总共8个奖项，圆周为360度
          // 指针初始位置为0度（顶部），奖项索引0在顶部，顺时针排列
          // 为了使指针指向目标奖项，需要计算对应的角度

          // 获取当前角度，并归一化到0-360度
          var currentAngle = 0;
          if (this.poiterSprite) {
            currentAngle = (this.poiterSprite.angle + 360) % 360;
          }
          console.log("\u5F53\u524D\u89D2\u5EA6: " + currentAngle);

          // 计算基础目标角度（奖项对应的角度）
          // 索引0对应0度（顶部），索引1对应45度，以此类推
          // 由于指针是指向奖项的，所以需要调整角度使指针准确指向目标奖项
          var prizeAngle = prizeIndex * 45 * -1;

          // 计算需要旋转的总角度：多圈旋转(至少5圈) + (奖项角度 - 当前角度)
          // 注意：在Cocos Creator中，正角度值表示逆时针旋转，负角度值表示顺时针旋转
          // 为了实现顺时针旋转，我们需要计算一个负的角度值
          var angleDiff = prizeAngle - currentAngle;
          if (angleDiff > 0) {
            angleDiff -= 360; // 如果差值为负，加上360度确保顺时针旋转
          }

          var minRotation = 360 * 5; // 至少旋转5圈
          // 使用负值表示顺时针旋转
          var targetAngle = currentAngle - minRotation + angleDiff;
          console.log("\u5F53\u524D\u89D2\u5EA6: " + currentAngle + ", \u5956\u9879\u89D2\u5EA6: " + prizeAngle + ", \u89D2\u5EA6\u5DEE: " + angleDiff + ", \u76EE\u6807\u89D2\u5EA6: " + targetAngle);

          // 执行旋转动画，指定顺时针方向
          this.rotatePointer(targetAngle, true, function () {
            _this2.isRotating = false;
            if (_this2.lotteryButton) {
              _this2.lotteryButton.interactable = true; // 启用按钮
            }

            // 不再重新计算奖项索引，直接使用之前通过概率选择的奖项索引
            console.log("\u6307\u9488\u65CB\u8F6C\u5B8C\u6210\uFF0C\u663E\u793A\u5956\u9879\u7D22\u5F15: " + prizeIndex);
            _this2.showPrizeResult(prizeIndex);
          });
        }

        /**
         * 初始化奖项
         */;
        _proto.initItems = function initItems() {
          // 加载抽奖配置文件
          var prizes = [{
            "type": "item",
            "itemId": "item_ccjj",
            "count": 1,
            "probabiliy": 0.03
          }, {
            "type": "coin",
            "itemId": "100",
            "count": 100,
            "probabiliy": 0.03
          }, {
            "type": "item",
            "itemId": "item_qkny",
            "count": 1,
            "probabiliy": 0.03
          }, {
            "type": "coin",
            "count": 10,
            "probabiliy": 0.25
          }, {
            "type": "none",
            "itemId": "item1",
            "count": 1,
            "probabiliy": 0.4
          }, {
            "type": "coin",
            "count": 30,
            "probabiliy": 0.15
          }, {
            "type": "item",
            "itemId": "item_tdhm",
            "count": 1,
            "probabiliy": 0.04
          }, {
            "type": "coin",
            "count": 60,
            "probabiliy": 0.07
          }];

          // 使用配置中的奖项数据初始化奖盘
          this.setPrizes(prizes);
          console.log('抽奖配置加载成功，奖项数量:', prizes.length);
        }

        /**
         * 旋转指针
         * @param targetAngle 目标角度
         * @param clockwise 是否顺时针旋转
         * @param callback 回调函数
         */;
        _proto.rotatePointer = function rotatePointer(targetAngle, clockwise, callback) {
          if (clockwise === void 0) {
            clockwise = true;
          }
          if (!this.poiterSprite) {
            console.error("指针节点不存在");
            return;
          }

          // 获取当前角度
          var currentAngle = (this.poiterSprite.angle + 360) % 360;
          this.poiterSprite.angle = currentAngle;

          // 计算实际的目标角度
          var actualTargetAngle = targetAngle; //currentAngle + totalRotation;

          console.log("\u65CB\u8F6C\u8BE6\u60C5: \u5F53\u524D\u89D2\u5EA6=" + currentAngle + ", \u76EE\u6807\u89D2\u5EA6=" + targetAngle + ", \u603B\u65CB\u8F6C\u89D2\u5EA6=" + targetAngle + ", \u5B9E\u9645\u76EE\u6807\u89D2\u5EA6=" + actualTargetAngle + ", \u987A\u65F6\u9488=" + clockwise);

          // 使用tween实现旋转动画
          tween(this.poiterSprite).to(this.rotationDuration, {
            angle: actualTargetAngle
          }, {
            easing: 'cubicOut' // 使用缓动函数，使旋转更自然
          }).call(function () {
            if (callback) {
              callback();
            }
          }).start();
        }

        /**
         * 显示抽奖结果
         * @param prizeIndex 奖项索引
         */;
        _proto.showPrizeResult = function showPrizeResult(prizeIndex) {
          var prize = this.prizes[prizeIndex];
          var message = '';

          // 更新UI显示
          this.updateChanceDisplay();

          // 根据奖项类型生成不同的提示消息并处理奖励
          if (prize.type === 'item') {
            // 道具类型
            var itemConfig = ShopConfig.getItemById(prize.itemId);
            var itemName = itemConfig ? itemConfig.name : '神秘道具';
            message = "\u606D\u559C\u60A8\u83B7\u5F97\u4E86" + itemName + " x" + prize.count;

            // 将道具添加到背包
            try {
              // 从全局gCtrl获取ShopManager
              var shopManager = gCtrl.shop;

              // 从ShopManager获取道具信息
              var shopItem = shopManager.getItem(prize.itemId);
              if (shopItem) {
                // 设置道具数量
                shopItem.count = prize.count;

                // 使用全局gCtrl获取BagManager并添加道具到背包
                var bagManager = gCtrl.bag;
                var success = bagManager.addItemByShopItem(shopItem);
                if (success) {
                  console.log("\u9053\u5177" + itemName + " x" + prize.count + "\u5DF2\u6DFB\u52A0\u5230\u80CC\u5305");
                } else {
                  console.error("\u6DFB\u52A0\u9053\u5177" + itemName + " x" + prize.count + "\u5230\u80CC\u5305\u5931\u8D25");
                  message += '，但添加到背包失败';
                }
              } else {
                console.error("\u4ECEShopManager\u83B7\u53D6\u9053\u5177\u4FE1\u606F\u5931\u8D25: " + prize.itemId);
                message += '，但获取道具信息失败';
              }
            } catch (error) {
              console.error('添加道具到背包时出错:', error);
              message += '，但添加到背包失败';
            }
          } else if (prize.type === 'coin') {
            // 金币类型
            message = "\u606D\u559C\u60A8\u83B7\u5F97\u4E86" + prize.count + "\u91D1\u5E01";

            // 将金币添加到用户账户
            try {
              // 使用全局gCtrl获取CoinManager并添加金币到用户账户
              var coinManager = gCtrl.coin;
              var _success = coinManager.addCoin(prize.count);
              if (_success) {
                console.log(prize.count + "\u91D1\u5E01\u5DF2\u6DFB\u52A0\u5230\u7528\u6237\u8D26\u6237");
              } else {
                console.error("\u6DFB\u52A0" + prize.count + "\u91D1\u5E01\u5230\u7528\u6237\u8D26\u6237\u5931\u8D25");
                message += '，但添加到账户失败';
              }
            } catch (error) {
              console.error('添加金币到用户账户时出错:', error);
              message += '，但添加到账户失败';
            }
          } else if (prize.type === 'none') {
            // 未中奖
            message = '很遗憾，未中奖，再接再厉！';
          } else {
            // 其他类型
            message = "\u606D\u559C\u60A8\u83B7\u5F97\u4E86\u5956\u9879" + (prizeIndex + 1);
          }

          // 使用ToastManager显示中奖结果
          ToastManager.getInstance().showMessage(message, 3);
        }

        /**
         * 设置奖项数据
         * @param prizes 奖项数据数组
         */;
        _proto.setPrizes = function setPrizes(prizes) {
          this.prizes = prizes;
          if (!this.itemNodes || this.itemNodes.length === 0) {
            console.error("奖项节点数组为空");
            return;
          }

          // 确保奖项数据长度与节点数量一致
          var nodeCount = Math.min(prizes.length, this.itemNodes.length);
          for (var i = 0; i < nodeCount; i++) {
            var prize = prizes[i];
            var itemNode = this.itemNodes[i];

            // 更新奖项显示
            this.updateItemNode(itemNode, prize);
          }
        }

        /**
         * 更新奖项节点显示
         * @param itemNode 奖项节点
         * @param prize 奖项数据
         */;
        _proto.updateItemNode = function updateItemNode(itemNode, prize) {
          // 获取子节点
          var itemSprite = itemNode.getChildByName('itemSprite');
          var itemLabel = itemNode.getChildByName('itemLabel');

          // 根据奖项类型更新显示
          if (prize.type === 'item') {
            // 道具类型
            if (prize.itemId) {
              // 通过itemId获取道具配置
              var itemConfig = ShopConfig.getItemById(prize.itemId);
              if (itemConfig) {
                // 设置道具图标
                if (itemSprite) {
                  var spriteComponent = itemSprite.getComponent(Sprite);
                  if (spriteComponent) {
                    // 加载道具图标
                    var iconPath = itemConfig.icon;
                    var bundleName = 'CommonUI'; // bundle名称
                    var assetPath = "ui/" + iconPath; // 资源路径，直接加载精灵帧

                    // 检查bundle是否已经加载
                    var bundle = assetManager.getBundle(bundleName);
                    if (bundle) {
                      // Bundle已加载，直接加载精灵帧
                      bundle.load(assetPath, SpriteFrame, function (err, spriteFrame) {
                        if (err) {
                          console.error("\u4ECEbundle " + bundleName + " \u52A0\u8F7D\u7CBE\u7075\u5E27\u5931\u8D25: " + assetPath, err);
                          return;
                        }
                        if (spriteFrame) {
                          spriteComponent.spriteFrame = spriteFrame;
                          // 设置物品图标尺寸为90*90
                          var uiTransform = itemSprite.getComponent(UITransform);
                          if (uiTransform) {
                            uiTransform.setContentSize(90, 90);
                          }
                        } else {
                          console.error("\u4ECEbundle " + bundleName + " \u83B7\u53D6\u7CBE\u7075\u5E27\u5931\u8D25: " + assetPath);
                        }
                      });
                    } else {
                      // Bundle未加载，先加载bundle
                      assetManager.loadBundle(bundleName, function (err, bundle) {
                        if (err) {
                          console.error("\u52A0\u8F7Dbundle\u5931\u8D25: " + bundleName, err);
                          return;
                        }

                        // 从bundle中加载精灵帧
                        bundle.load(assetPath, SpriteFrame, function (err, spriteFrame) {
                          if (err) {
                            console.error("\u4ECEbundle " + bundleName + " \u52A0\u8F7D\u7CBE\u7075\u5E27\u5931\u8D25: " + assetPath, err);
                            return;
                          }
                          if (spriteFrame) {
                            spriteComponent.spriteFrame = spriteFrame;
                            // 设置物品图标尺寸为90*90
                            var uiTransform = itemSprite.getComponent(UITransform);
                            if (uiTransform) {
                              uiTransform.setContentSize(90, 90);
                            }
                          } else {
                            console.error("\u4ECEbundle " + bundleName + " \u83B7\u53D6\u7CBE\u7075\u5E27\u5931\u8D25: " + assetPath);
                          }
                        });
                      });
                    }
                  }
                }

                // 设置道具名称
                if (itemLabel) {
                  var labelComponent = itemLabel.getComponent(Label);
                  if (labelComponent) {
                    labelComponent.string = "X " + prize.count;
                  }
                }
              } else {
                console.error("\u672A\u627E\u5230\u9053\u5177\u914D\u7F6E: " + prize.itemId);
              }
            } else {
              console.error('道具类型奖项缺少itemId');
            }
          } else if (prize.type === 'coin') {
            // 金币类型
            if (itemSprite) {
              var _spriteComponent = itemSprite.getComponent(Sprite);
              if (_spriteComponent) {
                // 加载金币图标
                var _iconPath = 'cion';
                var _bundleName = 'CommonUI'; // bundle名称
                var _assetPath = "ui/" + _iconPath + "/spriteFrame"; // 资源路径，直接加载精灵帧

                // 检查bundle是否已经加载
                var _bundle = assetManager.getBundle(_bundleName);
                if (_bundle) {
                  // Bundle已加载，直接加载精灵帧
                  _bundle.load(_assetPath, SpriteFrame, function (err, spriteFrame) {
                    if (err) {
                      console.error("\u4ECEbundle " + _bundleName + " \u52A0\u8F7D\u7CBE\u7075\u5E27\u5931\u8D25: " + _assetPath, err);
                      return;
                    }
                    if (spriteFrame) {
                      _spriteComponent.spriteFrame = spriteFrame;
                      // 设置金币图标大小为80*50
                      var uiTransform = itemSprite.getComponent(UITransform);
                      if (uiTransform) {
                        uiTransform.setContentSize(80, 50);
                      }
                    } else {
                      console.error("\u4ECEbundle " + _bundleName + " \u83B7\u53D6\u7CBE\u7075\u5E27\u5931\u8D25: " + _assetPath);
                    }
                  });
                } else {
                  // Bundle未加载，先加载bundle
                  assetManager.loadBundle(_bundleName, function (err, bundle) {
                    if (err) {
                      console.error("\u52A0\u8F7Dbundle\u5931\u8D25: " + _bundleName, err);
                      return;
                    }

                    // 从bundle中加载精灵帧
                    bundle.load(_assetPath, SpriteFrame, function (err, spriteFrame) {
                      if (err) {
                        console.error("\u4ECEbundle " + _bundleName + " \u52A0\u8F7D\u7CBE\u7075\u5E27\u5931\u8D25: " + _assetPath, err);
                        return;
                      }
                      if (spriteFrame) {
                        _spriteComponent.spriteFrame = spriteFrame;
                        // 设置金币图标大小为80*50
                        var uiTransform = itemSprite.getComponent(UITransform);
                        if (uiTransform) {
                          uiTransform.setContentSize(80, 50);
                        }
                      } else {
                        console.error("\u4ECEbundle " + _bundleName + " \u83B7\u53D6\u7CBE\u7075\u5E27\u5931\u8D25: " + _assetPath);
                      }
                    });
                  });
                }
              }
            }

            // 设置金币数量
            if (itemLabel) {
              var _labelComponent = itemLabel.getComponent(Label);
              if (_labelComponent) {
                _labelComponent.string = "x " + prize.count;
              }
            }
          } else if (prize.type === 'none') {
            // 未中奖
            if (itemLabel) {
              var _labelComponent2 = itemLabel.getComponent(Label);
              if (_labelComponent2) {
                _labelComponent2.string = '谢谢参与';
              }
            }
            // 隐藏图标精灵
            if (itemSprite) {
              itemSprite.active = false;
            }
          }
        };
        _proto.onDestroy = function onDestroy() {
          // 移除抽奖按钮事件监听
          if (this.lotteryButton) {
            this.lotteryButton.node.off(Button.EventType.CLICK, this.onLotteryButtonClick, this);
          }

          // 移除关闭按钮事件监听
          if (this.closeButton) {
            this.closeButton.node.off(Button.EventType.CLICK, this.onCloseButtonClick, this);
          }
        }

        /**
         * 初始化抽奖次数
         */;
        _proto.initLotteryChances = function initLotteryChances() {
          // 获取当前日期
          var today = new Date();
          var todayStr = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

          // 从本地存储获取上次抽奖日期和剩余次数
          var savedLastDate = sys.localStorage.getItem('lastLotteryDate');
          var savedLeftChances = sys.localStorage.getItem('leftLotteryChances');

          // 如果是新的日期，重置抽奖次数
          if (savedLastDate !== todayStr) {
            this.leftChances = this.dailyFreeChances;
            this.lastLotteryDate = todayStr;
            // 保存到本地存储
            sys.localStorage.setItem('lastLotteryDate', this.lastLotteryDate);
            sys.localStorage.setItem('leftLotteryChances', this.leftChances.toString());
          } else {
            // 如果是同一天，使用保存的剩余次数
            this.leftChances = savedLeftChances ? parseInt(savedLeftChances) : this.dailyFreeChances;
            this.lastLotteryDate = savedLastDate || todayStr;
          }

          // 更新UI显示
          this.updateChanceDisplay();
        }

        /**
         * 获取剩余抽奖次数
         */;
        _proto.getLeftChances = function getLeftChances() {
          return this.leftChances;
        }

        /**
         * 减少抽奖次数
         */;
        _proto.reduceLotteryChance = function reduceLotteryChance() {
          if (this.leftChances > 0) {
            this.leftChances--;
            // 保存到本地存储
            sys.localStorage.setItem('leftLotteryChances', this.leftChances.toString());
            // 更新UI显示
            this.updateChanceDisplay();
          }
        }

        /**
         * 显示广告并抽奖
         */;
        _proto.showAdAndLottery = function showAdAndLottery() {
          var _this3 = this;
          console.log('点击看广告抽奖按钮');

          // 防止重复点击
          if (this.isRotating) {
            console.log('正在处理抽奖，忽略重复点击');
            return;
          }

          // 设置处理标志
          // this.isRotating = true;
          if (this.lotteryButton) {
            this.lotteryButton.interactable = false; // 禁用按钮
          }

          // 获取广告管理器实例
          var adManager = AdManager.getInstance();

          // 显示广告获取抽奖机会
          if (adManager) {
            var success = adManager.showAd(AdType.REWARD_VIDEO, 'reward_video_lottery_chance');
            if (success) {
              // 设置广告事件监听器
              var adEventListener = function adEventListener(param) {
                console.log('广告事件触发', param);
                // 根据微信广告文档，res.isEnded 描述广告被关闭时的状态
                // 在小于 2.1.0 的基础库版本中，res 是一个 undefined
                // 在大于等于 2.1.0 的版本中，需要根据 res.isEnded 判断是否视频播放结束   
                if (param.type === AdEventType.REWARDED) {
                  // 正常播放结束，可以下发奖励（开始抽奖）
                  console.log('广告观看完成，开始抽奖');
                  _this3.startLottery(true);

                  // 移除监听器
                  adManager.removeEventListener(adEventListener);
                } else if (param.type === AdEventType.CLOSED) {
                  // 播放中途退出，不下发奖励
                  console.log('广告关闭但未获得奖励（用户中途退出）');
                  _this3.isRotating = false;
                  if (_this3.lotteryButton) {
                    _this3.lotteryButton.interactable = true; // 启用按钮
                  }
                  // 移除监听器
                  adManager.removeEventListener(adEventListener);
                }
              };
              adManager.addEventListener(adEventListener);
            }
            if (!success) {
              console.error('展示激励广告失败');

              // 重置状态
              this.isRotating = false;
              if (this.lotteryButton) {
                this.lotteryButton.interactable = true; // 启用按钮
              }
            }
          } else {
            console.error('广告管理器未初始化');

            // 重置状态
            this.isRotating = false;
            if (this.lotteryButton) {
              this.lotteryButton.interactable = true; // 启用按钮
            }
          }
        }

        /**
         * 更新抽奖次数显示
         */;
        _proto.updateChanceDisplay = function updateChanceDisplay() {
          if (this.leftChanceLabel) {
            var label = this.leftChanceLabel.getComponent(Label);
            if (label) {
              label.string = "\u5269\u4F59\u6B21\u6570\uFF1A" + this.leftChances;
            }
          }

          // 根据剩余次数显示/隐藏leftChanceLabel和video节点
          if (this.leftChances > 0) {
            if (this.leftChanceLabel) this.leftChanceLabel.active = true;
            if (this.video) this.video.active = false;
          } else {
            if (this.leftChanceLabel) this.leftChanceLabel.active = false;
            if (this.video) this.video.active = true;
          }
        };
        return LotteryUI;
      }(BaseUI), _class3.viewLayer = UILayer.UI, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "plateSprite", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "poiterSprite", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lotteryButton", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "closeButton", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "itemNodes", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "leftChanceLabel", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "video", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Match3UI.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SpriteFramesCfg.ts', './Match3ZiUE.ts', './ZiStack.ts', './CoinManager.ts', './TaskManager.ts', './AdManager.ts', './BagManager.ts', './SkillManager.ts', './SkillBase.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, cclegacy, _decorator, Node, Label, Button, Prefab, Vec3, tween, Sprite, Color, instantiate, assetManager, SpriteFrame, UITransform, Component, RichText, ProgressBar, SpriteFramesCfg, Match3ZiUE, ZiStack, CoinManager, TaskManager, AdEventType, AdType, AdManager, ItemType, SkillManager, SkillEventType;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Label = module.Label;
      Button = module.Button;
      Prefab = module.Prefab;
      Vec3 = module.Vec3;
      tween = module.tween;
      Sprite = module.Sprite;
      Color = module.Color;
      instantiate = module.instantiate;
      assetManager = module.assetManager;
      SpriteFrame = module.SpriteFrame;
      UITransform = module.UITransform;
      Component = module.Component;
      RichText = module.RichText;
      ProgressBar = module.ProgressBar;
    }, function (module) {
      SpriteFramesCfg = module.SpriteFramesCfg;
    }, function (module) {
      Match3ZiUE = module.Match3ZiUE;
    }, function (module) {
      ZiStack = module.ZiStack;
    }, function (module) {
      CoinManager = module.default;
    }, function (module) {
      TaskManager = module.TaskManager;
    }, function (module) {
      AdEventType = module.AdEventType;
      AdType = module.AdType;
      AdManager = module.AdManager;
    }, function (module) {
      ItemType = module.ItemType;
    }, function (module) {
      SkillManager = module.SkillManager;
    }, function (module) {
      SkillEventType = module.SkillEventType;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _class3;
      cclegacy._RF.push({}, "56efaRtoHZJL6x5lDkC7Imo", "Match3UI", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var Match3UI = exports('Match3UI', (_dec = ccclass('Match3UI'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Button), _dec10 = property(Button), _dec11 = property(Button), _dec12 = property(Button), _dec13 = property(Node), _dec14 = property(Button), _dec15 = property(Button), _dec16 = property(Button), _dec17 = property(Label), _dec18 = property(Node), _dec19 = property(Prefab), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Match3UI, _Component);
        function Match3UI() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "board", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "gameStatus", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "collectArea", _descriptor3, _assertThisInitialized(_this));
          // 游戏胜利和失败弹窗相关属性
          _initializerDefineProperty(_this, "gameSuccess", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "gameFail", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "successCoinLabel", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "failCoinLabel", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "successContinueButton", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "successDoubleRewardButton", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "failRetryButton", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "failRecoverButton", _descriptor11, _assertThisInitialized(_this));
          // 暂停功能相关属性
          _initializerDefineProperty(_this, "pausePannel", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "pauseButton", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "cancelButton", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "failbackButton", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "pauseCoinRewardLabel", _descriptor16, _assertThisInitialized(_this));
          // 道具使用功能相关属性
          _initializerDefineProperty(_this, "skillsNode", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "skillPrefab", _descriptor18, _assertThisInitialized(_this));
          // 技能系统相关属性
          _this.skillManager = null;
          _this.bagManager = null;
          _this.currentItem = null;
          _this.levelText = null;
          _this.progressBar = null;
          _this.progressLabel = null;
          // 金币系统相关属性
          _this.coinManager = null;
          _this.entryFee = 10;
          // 入场费用
          _this.winReward = 50;
          // 胜利奖励
          _this.isGameStarted = false;
          // 游戏是否已开始
          // 任务系统相关属性
          _this.taskManager = null;
          // 广告系统相关属性
          _this.adManager = null;
          _this.gameStartTime = 0;
          // 游戏开始时间
          _this.interstitialAdShown = false;
          // 是否已显示插屏广告
          // 按钮点击状态相关属性
          _this.isProcessingContinue = false;
          // 是否正在处理继续按钮点击
          //位置占用数组
          _this.m_PlaceHolders = [];
          /**所有的棋子都会添加到此数组中一次 */
          _this.m_ZiList = [];
          _this.stacks = [];
          // 收集事件队列
          _this.m_CollectEventQueue = [];
          // 是否正在处理收集事件
          _this.m_IsProcessingCollectEvent = false;
          // 当前关卡
          _this.currentLevel = 1;
          // 初始棋子总数，用于计算进度
          _this.initialZiCount = 0;
          _this.m_IsLose = false;
          return _this;
        }
        var _proto = Match3UI.prototype;
        /**
         * 初始化弹窗状态
         */
        _proto.initPopups = function initPopups() {
          // 确保游戏胜利和失败弹窗初始状态为隐藏
          if (this.gameSuccess) {
            this.gameSuccess.active = false;
          }
          if (this.gameFail) {
            this.gameFail.active = false;
          }

          // 确保暂停面板初始状态为隐藏
          if (this.pausePannel) {
            this.pausePannel.active = false;
          }
          console.log("弹窗状态初始化完成");
        }

        /**
         * 初始化暂停功能
         */;
        _proto.initPauseFeature = function initPauseFeature() {
          var _this2 = this;
          // 设置暂停按钮点击事件
          if (this.pauseButton && this.pauseButton.node) {
            console.log("设置暂停按钮事件和效果");
            // 添加触摸效果
            this.addButtonTouchEffect(this.pauseButton);

            // 设置点击事件
            this.pauseButton.node.on(Button.EventType.CLICK, function () {
              _this2.onPauseButtonClicked();
            }, this);
          } else {
            console.error("暂停按钮或其节点未设置");
          }

          // 设置取消按钮点击事件
          if (this.cancelButton && this.cancelButton.node) {
            console.log("设置取消按钮事件和效果");
            // 添加触摸效果
            this.addButtonTouchEffect(this.cancelButton);

            // 设置点击事件
            this.cancelButton.node.on(Button.EventType.CLICK, function () {
              _this2.onCancelButtonClicked();
            }, this);
          } else {
            console.error("取消按钮或其节点未设置");
          }

          // 设置退出按钮点击事件
          if (this.failbackButton && this.failbackButton.node) {
            console.log("设置退出按钮事件和效果");
            // 添加触摸效果
            this.addButtonTouchEffect(this.failbackButton);

            // 设置点击事件
            this.failbackButton.node.on(Button.EventType.CLICK, function () {
              _this2.onFailbackButtonClicked();
            }, this);
          } else {
            console.error("退出按钮或其节点未设置");
          }
          console.log("暂停功能初始化完成");
        }

        /**
         * 暂停按钮点击事件
         */;
        _proto.onPauseButtonClicked = function onPauseButtonClicked() {
          console.log("点击暂停按钮");

          // 禁用所有棋子的点击功能
          this.disableAllZiClicks();

          // 显示暂停面板
          if (this.pausePannel) {
            this.pausePannel.active = true;

            // 设置损失金币数量（与失败弹窗相同）
            if (this.pauseCoinRewardLabel) {
              // 使用与失败弹窗相同的金币损失数量
              var lossAmount = this.entryFee; // 使用入场费作为损失金额
              this.pauseCoinRewardLabel.string = "-" + lossAmount;
            }
          } else {
            console.error("暂停面板未设置");
          }
        }

        /**
         * 取消按钮点击事件
         */;
        _proto.onCancelButtonClicked = function onCancelButtonClicked() {
          console.log("点击取消按钮");

          // 隐藏暂停面板
          if (this.pausePannel) {
            this.pausePannel.active = false;
          } else {
            console.error("暂停面板未设置");
          }

          // 启用所有棋子的点击功能
          this.enableAllZiClicks();
        }

        /**
         * 退出按钮点击事件
         */;
        _proto.onFailbackButtonClicked = function onFailbackButtonClicked() {
          console.log("点击退出按钮");

          // 隐藏暂停面板
          if (this.pausePannel) {
            this.pausePannel.active = false;
          }

          // 扣减玩家当前关卡的损失金币
          var lossAmount = this.entryFee; // 使用入场费作为损失金额
          if (this.coinManager) {
            this.coinManager.subtractCoin(lossAmount);
            console.log("\u5DF2\u6263\u9664\u635F\u5931\u91D1\u5E01: " + lossAmount);

            // 更新UI
            this.updateUI();
          } else {
            console.error("金币管理器未初始化");
          }

          // 销毁整个游戏界面
          this.node.destroy();
          this.enableAllZiClicks();
          console.log("游戏界面已销毁");
        }

        /**
         * 为按钮添加触摸效果
         * @param button 按钮组件
         */;
        _proto.addButtonTouchEffect = function addButtonTouchEffect(button) {
          var _this3 = this;
          if (!button || !button.node) {
            console.error("按钮或其节点不存在，无法添加触摸效果");
            return;
          }
          console.log("为按钮添加触摸效果");
          var buttonNode = button.node;
          var originalScale = buttonNode.scale.clone();
          var hoverScale = new Vec3(originalScale.x * 1.1, originalScale.y * 1.1, originalScale.z);
          var pressScale = new Vec3(originalScale.x * 0.95, originalScale.y * 0.95, originalScale.z);

          // 保存原始缩放，以便在事件处理中使用
          // 使用自定义属性存储缩放数据
          buttonNode.userData = buttonNode.userData || {};
          buttonNode.userData.originalScale = originalScale;
          buttonNode.userData.hoverScale = hoverScale;
          buttonNode.userData.pressScale = pressScale;

          // 鼠标悬停时放大
          buttonNode.on(Node.EventType.MOUSE_ENTER, function () {
            tween(buttonNode).to(0.1, {
              scale: hoverScale
            }).start();
          }, this);

          // 鼠标离开时恢复原始大小
          buttonNode.on(Node.EventType.MOUSE_LEAVE, function () {
            tween(buttonNode).to(0.1, {
              scale: originalScale
            }).start();
          }, this);

          // 触摸开始时放大
          buttonNode.on(Node.EventType.TOUCH_START, function (event) {
            event.propagationStopped = true; // 阻止事件传播
            tween(buttonNode).to(0.1, {
              scale: hoverScale
            }).start();

            // 延迟执行缩小效果，模拟点击时的按压感
            _this3.scheduleOnce(function () {
              tween(buttonNode).to(0.1, {
                scale: pressScale
              }).start();
            }, 0.1);
          }, this);

          // 触摸结束时恢复原始大小
          buttonNode.on(Node.EventType.TOUCH_END, function (event) {
            event.propagationStopped = true; // 阻止事件传播
            tween(buttonNode).to(0.1, {
              scale: originalScale
            }).start();
          }, this);

          // 触摸取消时恢复原始大小
          buttonNode.on(Node.EventType.TOUCH_CANCEL, function (event) {
            event.propagationStopped = true; // 阻止事件传播
            tween(buttonNode).to(0.1, {
              scale: originalScale
            }).start();
          }, this);
        }

        /**
         * 禁用所有棋子的点击功能
         * 通过设置全局变量实现，避免循环遍历所有棋子
         */;
        _proto.disableAllZiClicks = function disableAllZiClicks() {
          console.log("禁用所有棋子的点击功能");
          // 设置全局变量为false，所有棋子将不可点击
          Match3ZiUE.globalClickable = false;
        }

        /**
         * 启用所有棋子的点击功能
         * 通过设置全局变量实现，避免循环遍历所有棋子
         */;
        _proto.enableAllZiClicks = function enableAllZiClicks() {
          console.log("启用所有棋子的点击功能");
          // 设置全局变量为true，所有棋子将恢复可点击状态
          Match3ZiUE.globalClickable = true;
        }

        /**更新UI显示 */;
        _proto.updateUI = function updateUI() {
          // 更新关卡显示
          if (this.levelText) {
            this.levelText.string = "\u7B2C" + this.currentLevel + "\u5173";
          }

          // 更新进度条和标签
          this.updateProgress();

          // 检查是否应该显示插屏广告
          this.checkAndShowInterstitialAd();
        }

        /**更新进度条和标签 */;
        _proto.updateProgress = function updateProgress() {
          if (this.initialZiCount === 0) return;

          // 计算当前进度百分比
          var remainingZiCount = this.m_ZiList.length;
          var progress = Math.max(0, (this.initialZiCount - remainingZiCount) / this.initialZiCount);

          // 更新进度条
          if (this.progressBar) {
            this.progressBar.progress = progress;

            // 确保Bar子节点的尺寸正确
            var barNode = this.progressBar.node.getChildByName('Bar');
            if (barNode) {
              var uiTransform = barNode.getComponent('cc.UITransform');
              if (uiTransform && uiTransform.setContentSize) {
                // 根据进度设置Bar的宽度和高度
                var progressBarWidth = 200; // 进度条背景宽度
                var progressBarHeight = 30; // 进度条背景高度
                var newWidth = progressBarWidth * progress;
                uiTransform.setContentSize(newWidth, progressBarHeight);
              }
            }
          }

          // 更新进度标签
          if (this.progressLabel) {
            var percentage = (progress * 100).toFixed(2);
            this.progressLabel.string = "\u8FDB\u5EA6" + percentage + "%";
          }
        }

        //初始化栈数据
        ;

        Match3UI.R = function R(loader) {
          loader.addUI(Match3ZiUE);

          // 初始化characters纹理，确保在创建棋子前完成
          SpriteFramesCfg.initCharactersTexture().then(function () {
            console.log("Characters texture initialized in Match3UI");
          })["catch"](function (err) {
            console.error("Failed to initialize characters texture in Match3UI:", err);
            // 即使纹理初始化失败，也继续游戏流程，使用备用方案
            console.warn("Game will continue with fallback display for characters");
          });

          // 预加载好所有角色资源 (0-44对应5行9列的三国人物头像)
          // 这里先不加载，因为是动态切分的，会在使用时创建
        }

        /**增加旗子 */;
        _proto.addZi = function addZi(ziUE) {
          this.m_ZiList.push(ziUE);

          //加到棋子栈
          for (var r = 0; r < 6; r++) {
            for (var c = 0; c < 6; c++) {
              this.stacks[ziUE.row + r][ziUE.col + c].push(ziUE);
            }
          }
        }

        /**判断是否可以点击 */;
        _proto.calcClickable = function calcClickable(ziUE) {
          var stack = null;
          for (var r = 0; r < 6; r++) {
            for (var c = 0; c < 6; c++) {
              stack = this.stacks[ziUE.row + r][ziUE.col + c];
              if (stack && !stack.empty && stack.top !== ziUE) {
                //有一个旗子栈顶不是该棋子，就说明被遮挡，不可点击
                return false;
              }
            }
          }
          return true;
        };
        _proto.start = /*#__PURE__*/function () {
          var _start = _asyncToGenerator(function* () {
            console.log("主玩法界面");
            this.enableAllZiClicks();
            this.m_ZiList = [];
            this.stacks = [];
            this.m_PlaceHolders = [];
            this.isGameStarted = false; // 重置游戏开始状态

            // 获取金币管理器实例
            this.coinManager = CoinManager.getInstance();

            // 初始化任务管理器
            this.taskManager = TaskManager.getInstance();

            // 初始化广告管理器
            this.adManager = AdManager.getInstance();

            // 初始化背包管理器
            this.bagManager = gCtrl.bag;

            // 初始化技能管理器
            this.skillManager = SkillManager.getInstance();

            // 添加广告事件监听
            this.setupAdEventListeners();

            // 初始化弹窗状态
            this.initPopups();

            // 初始化暂停按钮和面板
            this.initPauseFeature();

            // 初始化技能系统
            this.initSkillSystem();

            // 从数据管理器加载关卡，如果没有则从第一关开始
            this.currentLevel = gCtrl.data.loadLevel();
            this.initialZiCount = 0; // 初始化棋子总数

            // 初始化UI组件引用
            if (this.gameStatus) {
              if (!this.levelText) {
                var levelNode = this.gameStatus.getChildByName('level');
                if (levelNode) {
                  this.levelText = levelNode.getComponent(RichText);
                }
              }
              if (!this.progressBar) {
                var progressBarNode = this.gameStatus.getChildByName('ProgressBar');
                if (progressBarNode) {
                  this.progressBar = progressBarNode.getComponent(ProgressBar);
                  if (!this.progressLabel) {
                    var labelNode = progressBarNode.getChildByName('Label');
                    if (labelNode) {
                      this.progressLabel = labelNode.getComponent(Label);
                    }
                  }
                }
              }
            }

            //把这些棋子的栈都初始化
            for (var r = 0, rmax = Match3UI.ROW * Match3UI.SPLIT; r < rmax; ++r) {
              var row_stacks = [];
              this.stacks.push(row_stacks);
              for (var c = 0, cmax = Match3UI.COL * Match3UI.SPLIT; c < cmax; ++c) {
                row_stacks.push(new ZiStack());
              }
            }

            // 初始化第一关
            yield this.initLevel(this.currentLevel);
          });
          function start() {
            return _start.apply(this, arguments);
          }
          return start;
        }();
        _proto.clearQipan = function clearQipan() {
          for (var r = 0, rmax = Match3UI.ROW * Match3UI.SPLIT; r < rmax; ++r) {
            for (var c = 0, cmax = Match3UI.COL * Match3UI.SPLIT; c < cmax; ++c) {
              this.stacks[r][c] = new ZiStack();
            }
          }
          this.m_ZiList = [];
        };
        _proto.reSetStacks = function reSetStacks() {
          var _this4 = this;
          for (var r = 0, rmax = Match3UI.ROW * Match3UI.SPLIT; r < rmax; ++r) {
            for (var c = 0, cmax = Match3UI.COL * Match3UI.SPLIT; c < cmax; ++c) {
              this.stacks[r][c] = new ZiStack();
            }
          }
          this.m_ZiList.forEach(function (ziUE) {
            //加到棋子栈
            for (var _r = 0; _r < 6; _r++) {
              for (var _c = 0; _c < 6; _c++) {
                _this4.stacks[ziUE.row + _r][ziUE.col + _c].push(ziUE);
              }
            }
          });
          //刷新一次所有旗子的显示
          this.m_ZiList.forEach(function (ziUE) {
            ziUE.setClickable(_this4.calcClickable(ziUE));
          });
        }

        /**初始化关卡 */;
        _proto.initLevel = /*#__PURE__*/
        function () {
          var _initLevel = _asyncToGenerator(function* (level) {
            var _this5 = this;
            // 如果是新一轮游戏，扣除入场金币
            if (!this.isGameStarted) {
              yield this.deductEntryFee();

              // 更新任务进度：开始一局消消三国
              this.updateMatch3TaskProgress();

              // 记录游戏开始时间
              this.gameStartTime = Date.now();

              // 重置插屏广告显示状态
              this.interstitialAdShown = false;
            }

            // 清空当前棋盘
            this.m_ZiList.forEach(function (ziUE) {
              ziUE.node.destroy();
            });
            // 清空收集区域
            this.collectArea.removeAllChildren();
            this.m_ZiList = [];
            this.m_PlaceHolders = [];
            this.m_IsLose = false;

            // 重置收集事件队列和处理状态
            this.m_CollectEventQueue = [];
            this.m_IsProcessingCollectEvent = false;

            // 重置栈数据
            for (var r = 0, rmax = Match3UI.ROW * Match3UI.SPLIT; r < rmax; ++r) {
              for (var c = 0, cmax = Match3UI.COL * Match3UI.SPLIT; c < cmax; ++c) {
                this.stacks[r][c] = new ZiStack();
              }
            }
            var clickFunc = function clickFunc(clickZi) {
              var isClickable = _this5.calcClickable(clickZi);
              if (!isClickable) {
                return;
              }

              // 立即播放棋子飞向收集区第一格的动画，动画完成后自动加入待处理队列
              _this5.playFlyToCollectAreaAnimation(clickZi);

              // 从棋盘上移除棋子
              _this5.removeZi(clickZi);
            };

            // 加载关卡数据
            var success = false;
            var retryCount = 0;
            var maxRetries = 3;
            while (!success && retryCount < maxRetries) {
              retryCount++;
              var levelJson = this.initZisForLevel(level);
              success = true;
              // 设置初始棋子总数
              this.initialZiCount = levelJson.zis.length;
              for (var i = 0; i < levelJson.zis.length; i++) {
                var zi = levelJson.zis[i];
                try {
                  var ziUE = gCtrl.ui.instantiate(Match3ZiUE);
                  if (!ziUE) {
                    console.error("Failed to instantiate Match3ZiUE");
                    success = false;
                    // 清理已创建的棋子
                    this.m_ZiList.forEach(function (ziUE) {
                      ziUE.node.destroy();
                    });
                    this.m_ZiList = [];
                    break;
                  }
                  ziUE.node.setParent(this.board);
                  ziUE.init(zi[0], zi[1], zi[2], clickFunc);
                  this.addZi(ziUE);
                } catch (error) {
                  console.error("Failed to initialize zi for level", level, "error:", error, "zi:", zi);
                  success = false;
                  // 清理已创建的棋子
                  this.m_ZiList.forEach(function (ziUE) {
                    ziUE.node.destroy();
                  });
                  this.m_ZiList = [];
                  break;
                }
              }
            }
            if (!success) {
              console.error("Failed to initialize level " + level + " after " + maxRetries + " retries");
              // 使用最小关卡配置作为备用方案
              var fallbackLevelJson = {
                zis: [[0, 0, 1]]
              };
              this.initialZiCount = fallbackLevelJson.zis.length;
              fallbackLevelJson.zis.forEach(function (zi) {
                try {
                  var _ziUE = gCtrl.ui.instantiate(Match3ZiUE);
                  if (!_ziUE) {
                    console.error("Failed to instantiate Match3ZiUE in fallback");
                    return;
                  }
                  _ziUE.node.setParent(_this5.board);
                  _ziUE.init(zi[0], zi[1], zi[2], clickFunc);
                  _this5.addZi(_ziUE);
                } catch (error) {
                  console.error("Even fallback initialization failed:", error);
                }
              });
            }

            //刷新一次所有旗子的显示
            this.m_ZiList.forEach(function (ziUE) {
              ziUE.setClickable(_this5.calcClickable(ziUE));
            });

            // 更新UI显示
            this.updateUI();
            console.log("\u5173\u5361 " + level + " \u521D\u59CB\u5316\u5B8C\u6210");
          });
          function initLevel(_x) {
            return _initLevel.apply(this, arguments);
          }
          return initLevel;
        }()
        /**    /**
         * level:关卡
         * 随着关卡增加，棋子层数、数量、种类逐渐增多，从而增加难度
         * **/;

        _proto.initZisForLevel = function initZisForLevel(level) {
          // if (level == 2) {
          //     level = 31;
          // }

          var types = Math.floor(level / 3) + 3; // 棋子种类，确保是整数
          types = Math.min(types, 42); // 限制最大种类数为42
          var ziNum = level * 6 + 12; // 棋子总数

          // 确保每种棋子数量能被3整除
          var ziNumPerType = Math.floor(ziNum / types);
          // 调整为能被3整除的最大数
          ziNumPerType = Math.floor(ziNumPerType / 3) * 3;
          // 如果调整后为0，则至少为3
          if (ziNumPerType === 0) ziNumPerType = 3;

          // 重新计算总棋子数
          ziNum = ziNumPerType * types;
          // 棋盘尺寸
          var COL = Match3UI.COL;
          var ROW = Match3UI.ROW;
          var SPLIT = Match3UI.SPLIT; // 每个棋子占据6x6的格子

          // 计算可用的列和行位置（以6x6为单位）, 棋子不能出现在右边和下边边界上
          var availableCols = COL - 1;
          var availableRows = ROW - 1;

          // 生成所有可能的位置
          var positions = [];
          for (var _row = 0; _row < availableRows * SPLIT; _row++) {
            for (var _col = 0; _col < availableCols * SPLIT; _col++) {
              positions.push([_col, _row]);
            }
          }

          // // 打乱位置数组
          for (var i = positions.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var _ref = [positions[j], positions[i]];
            positions[i] = _ref[0];
            positions[j] = _ref[1];
          }

          // 生成棋子数据
          var zis = [];

          // 为每种类型生成棋子
          for (var type = types - 1; type >= 0; type--) {
            // 为当前类型生成ziNumPerType个棋子
            for (var _i = 0; _i < ziNumPerType; _i++) {
              // 计算层数，从0到layers-1
              // const layer = Math.floor(i / Math.ceil(ziNumPerType / layers));

              // 获取位置，如果位置不够用，重新开始使用
              var posIndex = (type * ziNumPerType + _i) % positions.length;
              var _positions$posIndex = positions[posIndex],
                _col2 = _positions$posIndex[0],
                _row2 = _positions$posIndex[1];

              // 添加棋子数据，类型从1开始
              zis.push([_col2, _row2, type + 1]);
            }
          }

          // 按类型排序，确保层数高的棋子后添加（会覆盖在层数低的棋子上）
          // zis.sort((a, b) => b[2] - a[2]);
          // 分区段的打乱位置数组，确保前几种棋子分布在顶部
          var segBorder = [0.8, 0.2];
          if (level < 10) {
            // 小于10级，全部范围内做乱序
            segBorder = [1];
          }
          var segMinIndex = 0;
          for (var x = 0; x < segBorder.length; x++) {
            segBorder[x] = Math.floor(zis.length * segBorder[x]);
            for (var _i2 = segBorder[x] + segMinIndex - 1; _i2 > segMinIndex && _i2 < zis.length; _i2--) {
              var _j = Math.floor(Math.random() * (_i2 + 1));
              var temp = zis[_i2];
              zis[_i2] = zis[_j];
              zis[_j] = temp;
            }
            segMinIndex = segBorder[x] + 1;
          }
          return {
            zis: zis
          };
        }

        /**
         * 更新收集区棋子位置
         * 当收集区棋子发生变化时，重新排列所有棋子的位置
         */;
        _proto.updateCollectionZiPositions = function updateCollectionZiPositions() {
          try {
            // 遍历收集区所有棋子，更新它们的位置
            for (var i = 0; i < this.m_PlaceHolders.length; i++) {
              var zi = this.m_PlaceHolders[i];

              // 跳过已经被标记为消除的棋子
              if (zi.isMarkElimnate) {
                continue;
              }

              // 检查棋子节点是否有效
              if (zi && zi.node && zi.node.isValid) {
                // 设置棋子的z-index，确保移动时始终在上层显示
                zi.node.setSiblingIndex(this.collectArea.children.length - 1);

                // 如果棋子正在移动中，使用changeMoveingTargetIndex方法更改目标位置
                if (zi['m_MovingType'] !== 0) {
                  // MovingType.none = 0
                  zi.changeMoveingTargetIndex(i);
                } else {
                  // 如果棋子不在移动中，直接设置位置
                  zi.node.setPosition(new Vec3(i * 102, 0, 0));
                }
              }
            }

            // 更新进度显示
            this.updateProgress();
          } catch (error) {
            console.error('更新收集区棋子位置失败', error);
          }
        }

        /**移除棋子 */;
        _proto.removeZi = function removeZi(ziUE) {
          this.m_ZiList.splice(this.m_ZiList.indexOf(ziUE), 1);
          //棋子栈栈顶肯定是该棋子
          for (var r = 0; r < 6; r++) {
            for (var c = 0; c < 6; c++) {
              this.stacks[ziUE.row + r][ziUE.col + c].pop();
            }
          }

          // 更新进度显示
          this.updateProgress();
          var ziCol = ziUE.col;
          var ziRow = ziUE.row;

          // 刷新下方棋子的可点击状态
          var stack = null;
          for (var _r2 = 0; _r2 < 6; _r2++) {
            for (var _c2 = 0; _c2 < 6; _c2++) {
              stack = this.stacks[ziRow + _r2][ziCol + _c2];
              if (!stack.empty) {
                stack.top.setClickable(this.calcClickable(stack.top));
              }
            }
          }
        }

        /**
         * 播放棋子飞向收集区第一格的动画
         * @param ziUE 被点击的棋子
         */;
        _proto.playFlyToCollectAreaAnimation = function playFlyToCollectAreaAnimation(ziUE) {
          var _this6 = this;
          // 将棋子移动到收集区节点下
          ziUE.node.setParent(this.collectArea, true);

          // 设置棋子的z-index，确保移动时始终在上层显示
          ziUE.node.setSiblingIndex(this.collectArea.children.length - 1);

          // 播放飞向第一格的动画
          tween(ziUE.node).to(0.2, {
            position: new Vec3(0, 0, 0)
          }).call(function () {
            // 动画完成后，将棋子加入待处理队列
            _this6.addCollectEventToQueue(ziUE);
          }).start();

          // 标记棋子为已收集状态，禁用点击但保持正常外观
          ziUE.isCollected = true;
          ziUE.setClickable(true);
        }

        /**
         * 将收集事件加入队列
         * @param ziUE 被点击的棋子
         */;
        _proto.addCollectEventToQueue = function addCollectEventToQueue(ziUE) {
          // 将棋子加入事件队列
          this.m_CollectEventQueue.push(ziUE);

          // 如果当前没有在处理事件，则开始处理队列
          if (!this.m_IsProcessingCollectEvent) {
            this.processCollectEventQueue();
          }
        }

        /**
         * 处理收集事件队列
         */;
        _proto.processCollectEventQueue = /*#__PURE__*/
        function () {
          var _processCollectEventQueue = _asyncToGenerator(function* () {
            // 如果队列为空或者正在处理事件，则返回
            if (this.m_CollectEventQueue.length === 0 || this.m_IsProcessingCollectEvent) {
              return;
            }

            // 标记为正在处理事件
            this.m_IsProcessingCollectEvent = true;

            // 处理队列中的所有事件
            while (this.m_CollectEventQueue.length > 0) {
              // 取出队列中的第一个事件
              var ziUE = this.m_CollectEventQueue.shift();

              // 处理该事件
              yield this.processCollectEvent(ziUE);
            }

            // 处理完所有事件后，重置处理状态
            this.m_IsProcessingCollectEvent = false;
          });
          function processCollectEventQueue() {
            return _processCollectEventQueue.apply(this, arguments);
          }
          return processCollectEventQueue;
        }()
        /**
         * 处理单个收集事件
         * @param ziUE 被点击的棋子
         */;

        _proto.processCollectEvent = /*#__PURE__*/
        function () {
          var _processCollectEvent = _asyncToGenerator(function* (ziUE) {
            // 尝试收集棋子（处理收集区的更新逻辑）
            this.tryCollectingZi(ziUE);

            // 检查是否所有棋子都已被消除
            this.checkWin();
          });
          function processCollectEvent(_x2) {
            return _processCollectEvent.apply(this, arguments);
          }
          return processCollectEvent;
        }() /**检测胜利条件 */;
        _proto.checkWin = function checkWin() {
          // 当棋盘上没有棋子时，判定为胜利
          if (this.m_ZiList.length === 0) {
            console.log("\u6E38\u620F\u80DC\u5229\uFF01\u5173\u5361 " + this.currentLevel + " \u5B8C\u6210");

            // 计算胜利奖励
            var winReward = this.calculateWinReward();

            // 发放胜利奖励
            this.grantWinReward(winReward);

            // 检查任务完成条件
            this.checkMatch3TaskCompletion();

            // 显示胜利弹窗
            this.showGameSuccess(winReward);
          }
        }

        /**进入下一关 */;
        _proto.nextLevel = /*#__PURE__*/
        function () {
          var _nextLevel = _asyncToGenerator(function* () {
            this.currentLevel++;
            this.m_IsLose = false; // 重置游戏失败状态
            console.log("\u8FDB\u5165\u7B2C " + this.currentLevel + " \u5173");

            // 保存新关卡到数据管理器
            gCtrl.data.saveLevel(this.currentLevel);
            yield this.initLevel(this.currentLevel);
            // 更新UI显示
            this.updateUI();
          });
          function nextLevel() {
            return _nextLevel.apply(this, arguments);
          }
          return nextLevel;
        }() /**尝试收集棋子 */;
        _proto.tryCollectingZi = function tryCollectingZi(clickZi) {
          var _this7 = this;
          // 检查棋子是否已经在收集区中，避免重复处理
          if (this.m_PlaceHolders.indexOf(clickZi) !== -1) {
            return false;
          }

          //已经有7个了
          if (this.m_PlaceHolders.length === 7) {
            return false;
          }

          // 检查棋子是否已经被标记为消除
          if (clickZi.isMarkElimnate) {
            console.log("棋子已经被标记为消除，跳过处理");
            return false;
          }

          //没有7个
          //1.从后往前找，有没有同花色的棋子，有就插入
          var _loop = function _loop() {
              var zi = _this7.m_PlaceHolders[i];

              // 跳过已经被标记为消除的棋子
              if (zi.isMarkElimnate) {
                return 0; // continue
              }

              if (zi.style === clickZi.style) {
                //插入到zi后面
                _this7.m_PlaceHolders.splice(i + 1, 0, clickZi);
                //标记当前棋子是否和前面两个子形成了消除
                var elimination = [];
                if (!zi.isMarkElimnate && i >= 1 && _this7.m_PlaceHolders[i - 1].style === clickZi.style && !_this7.m_PlaceHolders[i - 1].isMarkElimnate) {
                  //形成消除
                  elimination.push(_this7.m_PlaceHolders[i - 1]);
                  elimination.push(zi);
                  elimination.push(clickZi);
                  //标记消除
                  elimination.forEach(function (it) {
                    return it.isMarkElimnate = true;
                  });
                }

                // 检查棋子是否已经在收集区第一格(0,0,0)位置
                if (clickZi.node.position.equals(new Vec3(0, 0, 0))) {
                  // 设置棋子的z-index，确保移动时始终在上层显示
                  clickZi.node.setSiblingIndex(_this7.collectArea.children.length - 1);

                  // 直接设置到目标位置
                  clickZi.node.setPosition(new Vec3((i + 1) * 102, 0, 0));

                  // 立即执行回调
                  //检测清除或者失败逻辑
                  if (elimination.length > 0) {
                    // 延迟执行消除，确保棋子已经移动到最终位置
                    setTimeout(function () {
                      //消除行为
                      var startIndex = -1;
                      elimination.forEach(function (it) {
                        if (startIndex == -1) {
                          startIndex = _this7.m_PlaceHolders.indexOf(it);
                        }
                        it.node.destroy();
                      });
                      for (var z = startIndex + 3; z < _this7.m_PlaceHolders.length; z++) {
                        _this7.m_PlaceHolders[z].changeMoveingTargetIndex(z - 3);
                      }
                      _this7.m_PlaceHolders.splice(startIndex, 3);

                      // 更新进度显示
                      _this7.updateProgress();
                    }, 100); // 短暂延迟确保位置更新完成
                  } else {
                    _this7.checkLose();
                  }
                } else {
                  // 播放移动动画
                  clickZi.moveToTargetIndex(_this7.collectArea, i + 1, function () {
                    //检测清除或者失败逻辑
                    if (elimination.length > 0) {
                      // 延迟执行消除，确保棋子已经移动到最终位置
                      setTimeout(function () {
                        //消除行为
                        var startIndex = -1;
                        elimination.forEach(function (it) {
                          if (startIndex == -1) {
                            startIndex = _this7.m_PlaceHolders.indexOf(it);
                          }
                          it.node.destroy();
                        });
                        for (var z = startIndex + 3; z < _this7.m_PlaceHolders.length; z++) {
                          _this7.m_PlaceHolders[z].changeMoveingTargetIndex(z - 3);
                        }
                        _this7.m_PlaceHolders.splice(startIndex, 3);

                        // 更新进度显示
                        _this7.updateProgress();
                      }, 100); // 短暂延迟确保动画完成
                    } else {
                      _this7.checkLose();
                    }
                  });
                }

                //后面的棋子如果正在做飞行动画，更改目标
                for (var j = i + 2; j < _this7.m_PlaceHolders.length; ++j) {
                  if (!_this7.m_PlaceHolders[j].isMarkElimnate) {
                    _this7.m_PlaceHolders[j].changeMoveingTargetIndex(j);
                  }
                }
                return {
                  v: true
                };
              }
            },
            _ret;
          for (var i = this.m_PlaceHolders.length - 1; i >= 0; --i) {
            _ret = _loop();
            if (_ret === 0) continue;
            if (_ret) return _ret.v;
          }

          //2.找不到花色，那么直接插入
          this.m_PlaceHolders.push(clickZi);

          // 如果棋子已经在收集区第一格，直接移动到目标位置，不播放飞行动画
          if (clickZi.node.position.equals(new Vec3(0, 0, 0))) {
            // 设置棋子的z-index，确保移动时始终在上层显示
            clickZi.node.setSiblingIndex(this.collectArea.children.length - 1);

            // 直接设置位置，不播放动画
            clickZi.node.setPosition(new Vec3((this.m_PlaceHolders.length - 1) * 102, 0, 0));

            // 延迟执行检查逻辑，确保棋子已经移动到最终位置
            setTimeout(function () {
              //检测消除或者失败逻辑
              _this7.checkLose();
            }, 100); // 短暂延迟确保位置更新完成
          } else {
            // 播放移动动画
            clickZi.moveToTargetIndex(this.collectArea, this.m_PlaceHolders.length - 1, function () {
              // 延迟执行检查逻辑，确保棋子已经移动到最终位置
              setTimeout(function () {
                //检测消除或者失败逻辑
                _this7.checkLose();
              }, 100); // 短暂延迟确保动画完成
            });
          }

          return true;
        };
        /**检测消耗 */
        _proto.checkLose = function checkLose() {
          if (this.m_PlaceHolders.length < 7) {
            return;
          }
          for (var i = 0; i < this.m_PlaceHolders.length; ++i) {
            if (this.m_PlaceHolders[i].isMarkElimnate) {
              return;
            }
          }
          //失败
          if (this.m_IsLose) {
            return;
          }
          this.m_IsLose = true;
          console.log("游戏失败弹窗");

          // 游戏失败，显示失败弹窗
          this.showGameFail();
        }

        /**重置游戏 */;
        _proto.resetGame = function resetGame(level) {
          this.currentLevel = level;
          this.isGameStarted = false; // 重置游戏开始状态
          this.m_IsLose = false; // 重置游戏失败状态
          // 重置数据管理器中的关卡
          gCtrl.data.resetLevel(this.currentLevel);
          console.log("游戏已重置，从第一关开始");

          // 重新初始化游戏
          this.initLevel(this.currentLevel);
        }

        /**
         * 扣除入场金币
         */;
        _proto.deductEntryFee = /*#__PURE__*/
        function () {
          var _deductEntryFee = _asyncToGenerator(function* () {
            if (!this.coinManager) {
              console.error("金币管理器未初始化");
              return;
            }
            var currentCoin = this.coinManager.getCurrentCoin();

            // 检查金币是否足够
            if (currentCoin < this.entryFee) {
              console.log("\u91D1\u5E01\u4E0D\u8DB3\uFF0C\u5F53\u524D\u91D1\u5E01: " + currentCoin + ", \u9700\u8981\u91D1\u5E01: " + this.entryFee);

              // 金币不足处理逻辑
              // 这里可以添加提示玩家金币不足，并提供获取金币的选项（如观看广告）
              // 暂时先给玩家添加足够的金币以便继续游戏
              this.coinManager.addCoin(this.entryFee - currentCoin, "游戏入场费补充");
              console.log("\u5DF2\u8865\u5145\u91D1\u5E01\uFF0C\u5F53\u524D\u91D1\u5E01: " + this.coinManager.getCurrentCoin());
            }

            // 扣除入场金币
            var success = this.coinManager.subtractCoin(this.entryFee, "消消三国入场费");
            if (success) {
              this.isGameStarted = true;
              console.log("\u5DF2\u6263\u9664\u5165\u573A\u91D1\u5E01: " + this.entryFee + ", \u5269\u4F59\u91D1\u5E01: " + this.coinManager.getCurrentCoin());
            } else {
              console.error("扣除入场金币失败");
            }
          });
          function deductEntryFee() {
            return _deductEntryFee.apply(this, arguments);
          }
          return deductEntryFee;
        }()
        /**
         * 发放胜利奖励
         */;

        _proto.grantWinReward = function grantWinReward(reward) {
          if (!this.coinManager) {
            console.error("金币管理器未初始化");
            return;
          }

          // 发放奖励
          var success = this.coinManager.addCoin(reward, "\u6D88\u6D88\u4E09\u56FD\u7B2C" + this.currentLevel + "\u5173\u80DC\u5229\u5956\u52B1");
          if (success) {
            console.log("\u5DF2\u53D1\u653E\u80DC\u5229\u5956\u52B1: " + reward + "\u91D1\u5E01, \u5F53\u524D\u91D1\u5E01: " + this.coinManager.getCurrentCoin());
          } else {
            console.error("发放胜利奖励失败");
          }
        }

        /**
         * 设置广告事件监听
         */;
        _proto.setupAdEventListeners = function setupAdEventListeners() {
          var _this8 = this;
          if (!this.adManager) {
            console.error("广告管理器未初始化");
            return;
          }

          // 监听广告关闭事件
          this.adManager.addEventListener(function (param) {
            if (param.type === AdEventType.CLOSED) {
              var _param$reward, _param$reward2, _param$reward3;
              console.log("\u5E7F\u544A\u5173\u95ED\uFF0C\u7C7B\u578B: " + param.adType + ", \u5956\u52B1ID: " + ((_param$reward = param.reward) == null ? void 0 : _param$reward.type));

              // 根据奖励ID处理不同的奖励
              if (((_param$reward2 = param.reward) == null ? void 0 : _param$reward2.type) === 'match3_lose_reward') {
                // 处理游戏失败后的广告奖励
                _this8.handleLoseAdReward();
              } else if (((_param$reward3 = param.reward) == null ? void 0 : _param$reward3.type) === 'match3_win_reward') {
                // 处理游戏胜利后的广告奖励
                _this8.handleWinAdReward();
              }
            }
          });

          // 监听广告奖励事件
          this.adManager.addEventListener(function (param) {
            if (param.type === AdEventType.REWARDED) {
              var _param$reward4, _param$reward5, _param$reward6;
              console.log("\u83B7\u5F97\u5E7F\u544A\u5956\u52B1\uFF0C\u7C7B\u578B: " + param.adType + ", \u5956\u52B1ID: " + ((_param$reward4 = param.reward) == null ? void 0 : _param$reward4.type));

              // 根据奖励ID处理不同的奖励
              if (((_param$reward5 = param.reward) == null ? void 0 : _param$reward5.type) === 'match3_lose_reward') {
                // 处理游戏失败后的广告奖励
                _this8.handleLoseAdReward();
              } else if (((_param$reward6 = param.reward) == null ? void 0 : _param$reward6.type) === 'match3_win_reward') {
                // 处理游戏胜利后的广告奖励
                _this8.handleWinAdReward();
              }
            }
          });

          // 监听广告错误事件
          this.adManager.addEventListener(function (param) {
            if (param.type === AdEventType.LOAD_FAILED || param.type === AdEventType.SHOW_FAILED) {
              console.error("\u5E7F\u544A\u9519\u8BEF\uFF0C\u7C7B\u578B: " + param.adType + ", \u9519\u8BEF: " + param.error);
            }
          });
        }

        /**
         * 处理游戏失败后的广告奖励
         */;
        _proto.handleLoseAdReward = function handleLoseAdReward() {
          if (!this.coinManager) {
            console.error("金币管理器未初始化");
            return;
          }

          // 获取失败广告奖励配置
          var rewardInfo = this.adManager.getAdRewardInfo(AdType.REWARD_VIDEO, 'match3_lose_reward');
          if (!rewardInfo) {
            console.error("获取失败广告奖励配置失败，使用默认奖励");
            // 使用默认奖励
            this.coinManager.addCoin(360, 'ad_reward');
            console.log("\u83B7\u5F97\u5931\u8D25\u5E7F\u544A\u5956\u52B1: 360 \u91D1\u5E01");
          } else {
            // 发放金币奖励
            this.coinManager.addCoin(rewardInfo.amount, 'ad_reward');
            console.log("\u83B7\u5F97\u5931\u8D25\u5E7F\u544A\u5956\u52B1: " + rewardInfo.amount + " \u91D1\u5E01");
          }

          // 更新UI显示
          this.updateUI();
        }

        /**
         * 处理游戏胜利后的广告奖励
         */;
        _proto.handleWinAdReward = function handleWinAdReward() {
          if (!this.coinManager) {
            console.error("金币管理器未初始化");
            return;
          }

          // 获取胜利广告奖励配置
          var rewardInfo = this.adManager.getAdRewardInfo(AdType.REWARD_VIDEO, 'match3_win_reward');
          if (!rewardInfo) {
            console.error("获取胜利广告奖励配置失败，使用默认奖励");
            // 使用默认奖励
            this.coinManager.addCoin(180, 'ad_reward');
            console.log("\u83B7\u5F97\u80DC\u5229\u5E7F\u544A\u5956\u52B1: 180 \u91D1\u5E01");
          } else {
            // 发放金币奖励
            this.coinManager.addCoin(rewardInfo.amount, 'ad_reward');
            console.log("\u83B7\u5F97\u80DC\u5229\u5E7F\u544A\u5956\u52B1: " + rewardInfo.amount + " \u91D1\u5E01");
          }

          // 更新UI显示
          this.updateUI();
        }

        /**
         * 检查并显示插屏广告
         */;
        _proto.checkAndShowInterstitialAd = function checkAndShowInterstitialAd() {
          if (!this.adManager || !this.isGameStarted || this.interstitialAdShown) {
            return;
          }

          // 计算游戏进行时间（秒）
          var gameTimeInSeconds = (Date.now() - this.gameStartTime) / 1000;

          // 如果游戏进行时间超过2分钟且未显示过插屏广告，则显示插屏广告
          if (gameTimeInSeconds >= 120) {
            // 检查是否可以观看广告
            if (!this.adManager.canWatchAd(AdType.INTERSTITIAL)) {
              console.log("今日观看插屏广告次数已达上限");
              return;
            }

            // 检查广告是否已加载
            if (!this.adManager.isAdLoaded(AdType.INTERSTITIAL)) {
              console.log("插屏广告未加载，尝试加载广告");
              this.adManager.loadAd(AdType.INTERSTITIAL);
              return;
            }

            // 显示插屏广告
            var success = this.adManager.showInterstitialAd();
            if (success) {
              console.log("正在展示插屏广告");
              this.interstitialAdShown = true;
            } else {
              console.error("展示插屏广告失败");
            }
          }
        }

        /**
         * 设置入场费用
         * @param fee 入场费用
         */;
        _proto.setEntryFee = function setEntryFee(fee) {
          if (fee > 0) {
            this.entryFee = fee;
            console.log("\u5165\u573A\u8D39\u7528\u5DF2\u8BBE\u7F6E\u4E3A: " + this.entryFee + "\u91D1\u5E01");
          }
        }

        /**
         * 设置胜利奖励
         * @param reward 胜利奖励
         */;
        _proto.setWinReward = function setWinReward(reward) {
          if (reward > 0) {
            this.winReward = reward;
            console.log("\u80DC\u5229\u5956\u52B1\u5DF2\u8BBE\u7F6E\u4E3A: " + this.winReward + "\u91D1\u5E01");
          }
        }

        /**
         * 更新消消三国任务进度
         */;
        _proto.updateMatch3TaskProgress = function updateMatch3TaskProgress() {
          if (!this.taskManager) {
            console.error("任务管理器未初始化");
            return;
          }
          try {
            // 更新日常任务：完成一局消消三国
            var dailyTaskId = 'daily_002';
            var dailyTask = this.taskManager.getTaskById(dailyTaskId);
            if (dailyTask && dailyTask.status === TaskManager.TaskStatus.ACCEPTED) {
              // 更新任务进度
              var currentProgress = dailyTask.progress || 0;
              this.taskManager.updateTaskProgress(dailyTaskId, currentProgress + 1);
              console.log("\u5DF2\u66F4\u65B0\u65E5\u5E38\u4EFB\u52A1\u8FDB\u5EA6: " + dailyTask.title + ", \u5F53\u524D\u8FDB\u5EA6: " + (currentProgress + 1) + "/" + dailyTask.target);
            } else if (dailyTask && dailyTask.status === TaskManager.TaskStatus.UNACCEPTED) {
              // 接取任务
              this.taskManager.acceptTask(dailyTaskId);
              console.log("\u5DF2\u63A5\u53D6\u65E5\u5E38\u4EFB\u52A1: " + dailyTask.title);

              // 更新任务进度
              this.taskManager.updateTaskProgress(dailyTaskId, 1);
              console.log("\u5DF2\u66F4\u65B0\u65E5\u5E38\u4EFB\u52A1\u8FDB\u5EA6: " + dailyTask.title + ", \u5F53\u524D\u8FDB\u5EA6: 1/" + dailyTask.target);
            }

            // 更新成就任务：消消三国新手
            var achievementTaskId1 = 'achievement_001';
            var achievementTask1 = this.taskManager.getTaskById(achievementTaskId1);
            if (achievementTask1 && achievementTask1.status === TaskManager.TaskStatus.ACCEPTED) {
              // 更新任务进度
              var _currentProgress = achievementTask1.progress || 0;
              this.taskManager.updateTaskProgress(achievementTaskId1, _currentProgress + 1);
              console.log("\u5DF2\u66F4\u65B0\u6210\u5C31\u4EFB\u52A1\u8FDB\u5EA6: " + achievementTask1.title + ", \u5F53\u524D\u8FDB\u5EA6: " + (_currentProgress + 1) + "/" + achievementTask1.target);
            } else if (achievementTask1 && achievementTask1.status === TaskManager.TaskStatus.UNACCEPTED) {
              // 接取任务
              this.taskManager.acceptTask(achievementTaskId1);
              console.log("\u5DF2\u63A5\u53D6\u6210\u5C31\u4EFB\u52A1: " + achievementTask1.title);

              // 更新任务进度
              this.taskManager.updateTaskProgress(achievementTaskId1, 1);
              console.log("\u5DF2\u66F4\u65B0\u6210\u5C31\u4EFB\u52A1\u8FDB\u5EA6: " + achievementTask1.title + ", \u5F53\u524D\u8FDB\u5EA6: 1/" + achievementTask1.target);
            }

            // 更新成就任务：消消三国达人
            var achievementTaskId2 = 'achievement_002';
            var achievementTask2 = this.taskManager.getTaskById(achievementTaskId2);
            if (achievementTask2 && achievementTask2.status === TaskManager.TaskStatus.ACCEPTED) {
              // 更新任务进度
              var _currentProgress2 = achievementTask2.progress || 0;
              this.taskManager.updateTaskProgress(achievementTaskId2, _currentProgress2 + 1);
              console.log("\u5DF2\u66F4\u65B0\u6210\u5C31\u4EFB\u52A1\u8FDB\u5EA6: " + achievementTask2.title + ", \u5F53\u524D\u8FDB\u5EA6: " + (_currentProgress2 + 1) + "/" + achievementTask2.target);
            } else if (achievementTask2 && achievementTask2.status === TaskManager.TaskStatus.UNACCEPTED) {
              // 接取任务
              this.taskManager.acceptTask(achievementTaskId2);
              console.log("\u5DF2\u63A5\u53D6\u6210\u5C31\u4EFB\u52A1: " + achievementTask2.title);

              // 更新任务进度
              this.taskManager.updateTaskProgress(achievementTaskId2, 1);
              console.log("\u5DF2\u66F4\u65B0\u6210\u5C31\u4EFB\u52A1\u8FDB\u5EA6: " + achievementTask2.title + ", \u5F53\u524D\u8FDB\u5EA6: 1/" + achievementTask2.target);
            }
          } catch (error) {
            console.error("更新消消三国任务进度时发生错误:", error);
          }
        }

        /**
         * 检查消消三国任务完成条件
         */;
        _proto.checkMatch3TaskCompletion = function checkMatch3TaskCompletion() {
          if (!this.taskManager) {
            console.error("任务管理器未初始化");
            return;
          }
          try {
            // 检查日常任务：完成一局消消三国
            var dailyTaskId = 'daily_002';
            var dailyTask = this.taskManager.getTaskById(dailyTaskId);
            if (dailyTask && dailyTask.status === TaskManager.TaskStatus.COMPLETED) {
              // 领取任务奖励
              var success = this.taskManager.claimTaskReward(dailyTaskId);
              if (success) {
                console.log("\u5DF2\u9886\u53D6\u65E5\u5E38\u4EFB\u52A1\u5956\u52B1: " + dailyTask.title);
              } else {
                console.error("\u9886\u53D6\u65E5\u5E38\u4EFB\u52A1\u5956\u52B1\u5931\u8D25: " + dailyTask.title);
              }
            }

            // 检查成就任务：消消三国新手
            var achievementTaskId1 = 'achievement_001';
            var achievementTask1 = this.taskManager.getTaskById(achievementTaskId1);
            if (achievementTask1 && achievementTask1.status === TaskManager.TaskStatus.COMPLETED) {
              // 领取任务奖励
              var _success = this.taskManager.claimTaskReward(achievementTaskId1);
              if (_success) {
                console.log("\u5DF2\u9886\u53D6\u6210\u5C31\u4EFB\u52A1\u5956\u52B1: " + achievementTask1.title);
              } else {
                console.error("\u9886\u53D6\u6210\u5C31\u4EFB\u52A1\u5956\u52B1\u5931\u8D25: " + achievementTask1.title);
              }
            }

            // 检查成就任务：消消三国达人
            var achievementTaskId2 = 'achievement_002';
            var achievementTask2 = this.taskManager.getTaskById(achievementTaskId2);
            if (achievementTask2 && achievementTask2.status === TaskManager.TaskStatus.COMPLETED) {
              // 领取任务奖励
              var _success2 = this.taskManager.claimTaskReward(achievementTaskId2);
              if (_success2) {
                console.log("\u5DF2\u9886\u53D6\u6210\u5C31\u4EFB\u52A1\u5956\u52B1: " + achievementTask2.title);
              } else {
                console.error("\u9886\u53D6\u6210\u5C31\u4EFB\u52A1\u5956\u52B1\u5931\u8D25: " + achievementTask2.title);
              }
            }
          } catch (error) {
            console.error("检查消消三国任务完成条件时发生错误:", error);
          }
        }

        /**
         * 销毁游戏界面时重新启用主界面按钮
         */;
        _proto.onDestroy = function onDestroy() {
          console.log('Match3UI: 游戏界面销毁，发送事件通知主界面启用按钮');

          // 发送事件通知主界面控制器启用按钮
          var scene = this.node.scene;
          if (scene) {
            scene.emit('BACK_TO_MAIN_SCENE');
            console.log('ZouZouEntry: 已发送BACK_TO_MAIN_SCENE事件到场景节点');
          } else {
            console.warn('ZouZouEntry: 无法获取场景节点，事件发送失败');
          }
        }

        /**
         * 计算胜利奖励
         * @returns 胜利奖励金币数量
         */;
        _proto.calculateWinReward = function calculateWinReward() {
          // 基础奖励
          var reward = this.winReward;

          // 关卡奖励，每关额外奖励5金币
          var levelBonus = Math.floor(this.currentLevel * 5);
          reward += levelBonus;

          // 根据游戏时间给予额外奖励（游戏时间越短，奖励越高）
          var gameTime = Date.now() - this.gameStartTime;
          if (gameTime < 30000) {
            // 30秒内完成
            reward += 20;
          } else if (gameTime < 60000) {
            // 1分钟内完成
            reward += 10;
          }
          console.log("\u8BA1\u7B97\u80DC\u5229\u5956\u52B1: \u57FA\u7840" + this.winReward + " + \u5173\u5361" + levelBonus + " + \u65F6\u95F4" + (reward - this.winReward - levelBonus) + " = " + reward);
          return reward;
        }

        /**
         * 显示游戏胜利弹窗
         * @param reward 胜利奖励金币数量
         */;
        _proto.showGameSuccess = function showGameSuccess(reward) {
          var _this9 = this;
          if (!this.gameSuccess) {
            console.error("游戏胜利弹窗节点未设置");
            return;
          }

          // 显示胜利弹窗
          this.gameSuccess.active = true;

          // 禁用所有棋子的点击功能
          this.disableAllZiClicks();

          // 设置奖励金额
          if (this.successCoinLabel) {
            this.successCoinLabel.getComponent(Label).string = "" + reward;
          }

          // 设置按钮点击事件和触摸效果
          if (this.successContinueButton && this.successContinueButton.node) {
            console.log("设置继续按钮事件和效果");
            // 添加触摸效果
            this.addButtonTouchEffect(this.successContinueButton);

            // 设置点击事件
            this.successContinueButton.node.on(Button.EventType.CLICK, function () {
              _this9.onSuccessContinueClicked();
            }, this);
          } else {
            console.error("继续按钮或其节点未设置");
          }
          if (this.successDoubleRewardButton && this.successDoubleRewardButton.node) {
            console.log("设置双倍奖励按钮事件和效果");
            // 添加触摸效果
            this.addButtonTouchEffect(this.successDoubleRewardButton);

            // 设置点击事件
            this.successDoubleRewardButton.node.on(Button.EventType.CLICK, function () {
              _this9.onSuccessDoubleRewardClicked(reward);
            }, this);
          } else {
            console.error("双倍奖励按钮或其节点未设置");
          }
          console.log("\u663E\u793A\u6E38\u620F\u80DC\u5229\u5F39\u7A97\uFF0C\u5956\u52B1: " + reward + "\u91D1\u5E01");
        }

        /**
         * 胜利弹窗继续按钮点击事件
         */;
        _proto.onSuccessContinueClicked = function onSuccessContinueClicked() {
          var _this10 = this;
          console.log("点击胜利弹窗继续按钮");

          // 防止重复点击
          if (this.isProcessingContinue) {
            console.log("正在处理继续按钮点击，忽略重复点击");
            return;
          }

          // 设置处理标志
          this.isProcessingContinue = true;

          // 隐藏胜利弹窗
          if (this.gameSuccess) {
            this.gameSuccess.active = false;
          }

          // 启用所有棋子的点击功能
          this.enableAllZiClicks();

          // 进入下一关
          this.nextLevel().then(function () {
            // 重置处理标志
            _this10.isProcessingContinue = false;
          })["catch"](function () {
            // 重置处理标志
            _this10.isProcessingContinue = false;
          });
        }

        /**
         * 胜利弹窗双倍奖励按钮点击事件
         * @param baseReward 基础奖励金额
         */;
        _proto.onSuccessDoubleRewardClicked = function onSuccessDoubleRewardClicked(baseReward) {
          var _this11 = this;
          console.log("点击胜利弹窗双倍奖励按钮");

          // 防止重复点击
          if (this.isProcessingContinue) {
            console.log("正在处理双倍奖励按钮点击，忽略重复点击");
            return;
          }

          // 设置处理标志
          this.isProcessingContinue = true;

          // 显示广告获取双倍奖励
          if (this.adManager) {
            var success = this.adManager.showAd(AdType.REWARD_VIDEO, 'reward_video_match3_win_reward');
            if (success) {
              // 设置广告事件监听器
              var adEventListener = function adEventListener(param) {
                if (param.type === 'rewarded') {
                  // 广告观看完成，给予双倍奖励
                  var doubleReward = baseReward * 2;
                  _this11.coinManager.addCoin(doubleReward);
                  console.log("\u5DF2\u53D1\u653E\u53CC\u500D\u80DC\u5229\u5956\u52B1: " + doubleReward + "\u91D1\u5E01");

                  // 更新UI
                  _this11.updateUI();

                  // 隐藏胜利弹窗
                  if (_this11.gameSuccess) {
                    _this11.gameSuccess.active = false;
                  }

                  // 启用所有棋子的点击功能
                  _this11.enableAllZiClicks();

                  // 进入下一关
                  _this11.nextLevel().then(function () {
                    // 重置处理标志
                    _this11.isProcessingContinue = false;
                  })["catch"](function () {
                    // 重置处理标志
                    _this11.isProcessingContinue = false;
                  });

                  // 移除监听器
                  _this11.adManager.removeEventListener(adEventListener);
                } else if (param.type === 'closed' && param.adType === 'reward_video') {
                  // 广告关闭但未获得奖励，给予基础奖励
                  _this11.coinManager.addCoin(baseReward);
                  console.log("\u5DF2\u53D1\u653E\u57FA\u7840\u80DC\u5229\u5956\u52B1: " + baseReward + "\u91D1\u5E01");

                  // 更新UI
                  _this11.updateUI();

                  // 隐藏胜利弹窗
                  if (_this11.gameSuccess) {
                    _this11.gameSuccess.active = false;
                  }

                  // 启用所有棋子的点击功能
                  _this11.enableAllZiClicks();

                  // 进入下一关
                  _this11.nextLevel().then(function () {
                    // 重置处理标志
                    _this11.isProcessingContinue = false;
                  })["catch"](function () {
                    // 重置处理标志
                    _this11.isProcessingContinue = false;
                  });

                  // 移除监听器
                  _this11.adManager.removeEventListener(adEventListener);
                }
              };
              this.adManager.addEventListener(adEventListener);
            }
            if (!success) {
              console.error("展示激励广告失败");

              // 直接给予基础奖励
              this.coinManager.addCoin(baseReward);
              console.log("\u5DF2\u53D1\u653E\u57FA\u7840\u80DC\u5229\u5956\u52B1: " + baseReward + "\u91D1\u5E01");

              // 更新UI
              this.updateUI();

              // 隐藏胜利弹窗
              if (this.gameSuccess) {
                this.gameSuccess.active = false;
              }

              // 启用所有棋子的点击功能
              this.enableAllZiClicks();

              // 进入下一关
              this.nextLevel().then(function () {
                // 重置处理标志
                _this11.isProcessingContinue = false;
              })["catch"](function () {
                // 重置处理标志
                _this11.isProcessingContinue = false;
              });
            }
          } else {
            console.error("广告管理器未初始化");

            // 直接给予基础奖励
            this.coinManager.addCoin(baseReward);
            console.log("\u5DF2\u53D1\u653E\u57FA\u7840\u80DC\u5229\u5956\u52B1: " + baseReward + "\u91D1\u5E01");

            // 更新UI
            this.updateUI();

            // 隐藏胜利弹窗
            if (this.gameSuccess) {
              this.gameSuccess.active = false;
            }

            // 启用所有棋子的点击功能
            this.enableAllZiClicks();

            // 进入下一关
            this.nextLevel().then(function () {
              // 重置处理标志
              _this11.isProcessingContinue = false;
            })["catch"](function () {
              // 重置处理标志
              _this11.isProcessingContinue = false;
            });
          }
        }

        /**
         * 显示游戏失败弹窗
         */;
        _proto.showGameFail = function showGameFail() {
          var _this12 = this;
          if (!this.gameFail) {
            console.error("游戏失败弹窗节点未设置");
            return;
          }

          // 禁用所有棋子的点击功能
          this.disableAllZiClicks();

          // 显示失败弹窗
          this.gameFail.active = true;
          if (this.failCoinLabel) {
            var lossAmount = this.entryFee; // 使用入场费作为损失金额
            this.failCoinLabel.string = "-" + lossAmount;
          }

          // 设置按钮点击事件和触摸效果
          if (this.failRetryButton && this.failRetryButton.node) {
            console.log("设置重试按钮事件和效果");
            // 添加触摸效果
            this.addButtonTouchEffect(this.failRetryButton);

            // 设置点击事件
            this.failRetryButton.node.on(Button.EventType.CLICK, function () {
              _this12.onFailRetryClicked();
            }, this);
          } else {
            console.error("重试按钮或其节点未设置");
          }
          if (this.failRecoverButton && this.failRecoverButton.node) {
            console.log("设置复活按钮事件和效果");
            // 添加触摸效果
            this.addButtonTouchEffect(this.failRecoverButton);

            // 设置点击事件
            this.failRecoverButton.node.on(Button.EventType.CLICK, function () {
              _this12.onFailRecoverClicked();
            }, this);
          } else {
            console.error("复活按钮或其节点未设置");
          }
          console.log("显示游戏失败弹窗");
        }

        /**
         * 失败弹窗重试按钮点击事件
         */;
        _proto.onFailRetryClicked = function onFailRetryClicked() {
          console.log("点击失败弹窗重试按钮");

          // 防止重复点击
          if (this.isProcessingContinue) {
            console.log("正在处理重试按钮点击，忽略重复点击");
            return;
          }

          // 设置处理标志
          this.isProcessingContinue = true;

          // 隐藏失败弹窗
          if (this.gameFail) {
            this.gameFail.active = false;
          }

          // 启用所有棋子的点击功能
          this.enableAllZiClicks();

          // 重置游戏
          this.resetGame(this.currentLevel);

          // 重置处理标志
          this.isProcessingContinue = false;
        }

        /**
         * 失败弹窗复活按钮点击事件
         */;
        _proto.onFailRecoverClicked = function onFailRecoverClicked() {
          var _this13 = this;
          console.log("点击失败弹窗复活按钮");

          // 防止重复点击
          if (this.isProcessingContinue) {
            console.log("正在处理复活按钮点击，忽略重复点击");
            return;
          }

          // 设置处理标志
          this.isProcessingContinue = true;

          // 显示广告获取复活机会
          if (this.adManager) {
            var success = this.adManager.showAd(AdType.REWARD_VIDEO, 'reward_video_match3_lose_reward');
            if (success) {
              // 设置广告事件监听器
              var adEventListener = function adEventListener(param) {
                if (param.type === 'rewarded') {
                  // 广告观看完成，复活游戏
                  console.log("广告观看完成，复活游戏");

                  // 隐藏失败弹窗
                  if (_this13.gameFail) {
                    _this13.gameFail.active = false;
                  }

                  // 启用所有棋子的点击功能
                  _this13.enableAllZiClicks();

                  // 恢复游戏状态
                  // this.recoverGame();

                  // 重置处理标志
                  _this13.isProcessingContinue = false;

                  // 移除监听器
                  _this13.adManager.removeEventListener(adEventListener);
                } else if (param.type === 'closed' && param.adType === 'reward_video') {
                  // 广告关闭但未获得奖励，不复活
                  console.log("广告观看未完成，不复活");

                  // 隐藏失败弹窗
                  if (_this13.gameFail) {
                    _this13.gameFail.active = false;
                  }

                  // 启用所有棋子的点击功能
                  _this13.enableAllZiClicks();

                  // 重置游戏
                  _this13.resetGame(_this13.currentLevel);

                  // 重置处理标志
                  _this13.isProcessingContinue = false;

                  // 移除监听器
                  _this13.adManager.removeEventListener(adEventListener);
                }
              };
              this.adManager.addEventListener(adEventListener);
            }
            if (!success) {
              console.error("展示激励广告失败");

              // 隐藏失败弹窗
              if (this.gameFail) {
                this.gameFail.active = false;
              }

              // 重置游戏
              this.resetGame(this.currentLevel);

              // 重置处理标志
              this.isProcessingContinue = false;
            }
          } else {
            console.error("广告管理器未初始化");

            // 隐藏失败弹窗
            if (this.gameFail) {
              this.gameFail.active = false;
            }

            // 重置游戏
            this.resetGame(this.currentLevel);

            // 重置处理标志
            this.isProcessingContinue = false;
          }
        }

        /**
         * 初始化技能系统
         */;
        _proto.initSkillSystem = function initSkillSystem() {
          console.log("初始化技能系统");

          // 获取skills节点
          if (!this.skillsNode) {
            this.skillsNode = this.node.getChildByName('skills');
            if (!this.skillsNode) {
              console.error("未找到skills节点");
              return;
            }
          }

          // 通过GCtrl中介进行跨bundle调用
          this.skillManager.init();

          // 显示背包中的技能道具
          this.displayBagItems();
          console.log("技能系统初始化完成");
        }

        /**
         * 技能事件处理
         * @param event 技能事件
         */;
        _proto.onSkillEvent = function onSkillEvent(event) {
          console.log("\u6536\u5230\u6280\u80FD\u4E8B\u4EF6: " + event.type);
          switch (event.type) {
            case 'skill_executed':
              // 技能执行完成
              console.log("\u6280\u80FD " + event.skillId + " \u6267\u884C\u5B8C\u6210");

              // 启用所有棋子的点击功能
              this.enableAllZiClicks();

              // 更新进度条
              this.updateProgress();

              // 检查游戏是否结束
              this.checkWin();
              break;
            case 'skill_cooldown_updated':
              // 技能冷却时间更新
              console.log("\u6280\u80FD " + event.skillId + " \u51B7\u5374\u65F6\u95F4\u66F4\u65B0: " + event.cooldownTime + "ms");
              break;
            case 'skill_error':
              // 技能错误
              console.error("\u6280\u80FD " + event.skillId + " \u6267\u884C\u9519\u8BEF: " + event.message);

              // 启用所有棋子的点击功能
              this.enableAllZiClicks();
              break;
          }
        }

        /**
         * 显示背包中的道具
         */;
        _proto.displayBagItems = function displayBagItems() {
          var _this14 = this;
          console.log("显示背包中的道具");

          // 确保skillsNode存在
          if (!this.skillsNode) {
            console.error("未找到skills节点");
            return;
          }

          // 清空skills节点下的所有子节点
          var children = this.skillsNode.children;
          for (var i = children.length - 1; i >= 0; i--) {
            children[i].destroy();
          }

          // 确保skillsNode可见
          this.skillsNode.active = true;

          // 如果skillsNode没有Sprite组件，添加一个并设置背景色
          if (!this.skillsNode.getComponent(Sprite)) {
            var bgSprite = this.skillsNode.addComponent(Sprite);
            bgSprite.color = new Color(255, 0, 0, 100); // 半透明红色背景
          }

          // 获取背包中的消耗品
          var consumables = this.bagManager.getItemsByType(ItemType.CONSUMABLE);
          console.log("\u80CC\u5305\u4E2D\u6709" + consumables.length + "\u4E2A\u6D88\u8017\u54C1");

          // 显示每个消耗品
          consumables.forEach(function (item, index) {
            _this14.createItemIcon(item, index);
          });

          // 输出skillsNode的子节点信息
          console.log("skillsNode\u73B0\u5728\u6709" + this.skillsNode.children.length + "\u4E2A\u5B50\u8282\u70B9");
          this.skillsNode.children.forEach(function (child, index) {
            console.log("\u5B50\u8282\u70B9" + index + ": " + child.name + ", \u4F4D\u7F6E(" + child.position.x + ", " + child.position.y + "), \u6FC0\u6D3B\u72B6\u6001: " + child.active);
          });
        }

        /**
         * 创建道具图标
         * @param item 道具物品
         * @param index 索引位置
         */;
        _proto.createItemIcon = function createItemIcon(item, index) {
          var _this15 = this;
          // 创建道具节点
          if (!this.skillsNode) {
            console.error("未找到skills节点");
            return;
          }
          if (!this.skillPrefab) {
            console.error("未找到skillPrefab预制体");
            return;
          }
          console.log("\u521B\u5EFA\u9053\u5177\u56FE\u6807: " + item.name + ", \u56FE\u6807\u8DEF\u5F84: " + (item.icon ? item.icon : '无'));

          // 实例化Skill预制体
          var skillNode = instantiate(this.skillPrefab);
          skillNode.setParent(this.skillsNode);
          skillNode.active = true;

          // 设置位置
          var x = -100 + index * 100; // 水平排列，每个间隔100，起始位置更靠右
          var y = 0;
          skillNode.setPosition(x, y, 0);
          console.log("\u8BBE\u7F6E\u9053\u5177\u8282\u70B9\u4F4D\u7F6E: (" + x + ", " + y + ")");

          // 设置道具节点的layer属性，与父节点保持一致
          skillNode.layer = this.skillsNode.layer;

          // 获取iconSprite节点
          var iconSpriteNode = skillNode.getChildByName('iconSprite');
          if (!iconSpriteNode) {
            console.error("未找到iconSprite节点");
            return;
          }

          // 获取Sprite组件
          var sprite = iconSpriteNode.getComponent(Sprite);
          if (!sprite) {
            console.error("未找到Sprite组件");
            return;
          }

          // 获取Button组件
          var iconButton = iconSpriteNode.getComponent(Button);
          if (!iconButton) {
            console.error("未找到Button组件");
            return;
          }

          // 获取useButton节点
          var useButtonNode = skillNode.getChildByName('useButton');
          if (!useButtonNode) {
            console.error("未找到useButton节点");
            return;
          }

          // 获取useButton组件
          var useButton = useButtonNode.getComponent(Button);
          if (!useButton) {
            console.error("未找到useButton组件");
            return;
          }

          // 加载图标资源
          if (item.icon) {
            var iconPath = item.icon;
            var bundleName = 'CommonUI'; // bundle名称
            var assetPath = "ui/" + iconPath; // 资源路径，如 "ui/skills/tuodaohuima_btn"

            console.log("\u5C1D\u8BD5\u52A0\u8F7D\u56FE\u6807: " + assetPath + " \u4ECE bundle: " + bundleName);

            // 加载bundle
            assetManager.loadBundle(bundleName, function (err, bundle) {
              if (err) {
                console.error("Failed to load bundle: " + bundleName, err);
                // 加载失败时使用默认颜色
                sprite.color = new Color(255, 0, 0, 255); // 红色表示错误
                return;
              }

              // 从bundle中加载精灵帧
              bundle.load(assetPath, SpriteFrame, function (err, spriteFrame) {
                if (err) {
                  console.error("Failed to load sprite frame: " + assetPath + " from bundle: " + bundleName, err);
                  // 加载失败时使用默认颜色
                  sprite.color = new Color(255, 0, 0, 255); // 红色表示错误
                  return;
                }
                if (spriteFrame) {
                  console.log("\u6210\u529F\u52A0\u8F7D\u56FE\u6807: " + assetPath + ", \u7CBE\u7075\u5E27\u5C3A\u5BF8: " + spriteFrame.originalSize.width + "x" + spriteFrame.originalSize.height);
                  sprite.spriteFrame = spriteFrame;
                  sprite.color = new Color(255, 255, 255, 255); // 重置为白色，完全不透明

                  // 强制更新Sprite组件，确保尺寸设置生效
                  sprite.enabled = false;
                  sprite.enabled = true;

                  // 确保节点可见
                  skillNode.active = true;

                  // 输出节点信息用于调试
                  console.log("\u9053\u5177\u8282\u70B9\u4FE1\u606F: \u4F4D\u7F6E(" + skillNode.position.x + ", " + skillNode.position.y + "), \u6FC0\u6D3B\u72B6\u6001: " + skillNode.active + ", layer: " + skillNode.layer, skillNode);
                } else {
                  console.error("Failed to get sprite frame: " + assetPath + " from bundle: " + bundleName);
                  // 加载失败时使用默认颜色
                  sprite.color = new Color(255, 0, 0, 255); // 红色表示错误
                }
              });
            });
          } else {
            // 没有图标路径时使用默认颜色
            console.log("\u9053\u5177 " + item.name + " \u6CA1\u6709\u56FE\u6807\u8DEF\u5F84");
            sprite.color = new Color(255, 255, 0, 255); // 黄色表示无图标路径，完全不透明

            // 强制更新Sprite组件，确保尺寸设置生效
            sprite.enabled = false;
            sprite.enabled = true;
          }

          // 添加数量标签
          var countLabelNode = new Node('count');
          countLabelNode.setParent(iconSpriteNode);
          countLabelNode.setPosition(30, 30, 0); // 右上角位置

          var countLabelTransform = countLabelNode.addComponent(UITransform);
          countLabelTransform.setContentSize(40, 20);
          var countLabel = countLabelNode.addComponent(Label);
          countLabel.string = item.count.toString();
          countLabel.fontSize = 16;
          countLabel.color = new Color(255, 0, 0, 255); // 红色

          // 设置iconButton点击事件
          iconButton.node.on(Button.EventType.CLICK, function () {
            _this15.onItemIconClicked(skillNode);
          }, this);

          // 设置useButton点击事件
          useButton.node.on(Button.EventType.CLICK, function () {
            _this15.onUseItemButtonClicked();
          }, this);

          // 保存物品引用
          // 使用自定义属性存储道具数据
          skillNode['itemData'] = item;
          skillNode.active = true;
          console.log("\u521B\u5EFA\u9053\u5177\u56FE\u6807\u5B8C\u6210: " + item.name + ", \u6570\u91CF: " + item.count, item);
        }

        /**
         * 道具图标点击事件
         * @param skillNode 道具节点
         */;
        _proto.onItemIconClicked = function onItemIconClicked(skillNode) {
          // 从自定义属性中获取道具数据
          var item = skillNode['itemData'];
          if (!item) {
            console.error("无法获取道具数据");
            return;
          }
          console.log("\u70B9\u51FB\u9053\u5177\u56FE\u6807: " + item.name);

          // 保存当前选中的道具
          this.currentItem = item;

          // 获取useButton节点
          var useButtonNode = skillNode.getChildByName('useButton');
          if (!useButtonNode) {
            console.error("未找到useButton节点");
            return;
          }

          // 显示useButton
          useButtonNode.active = true;
        }

        /**
         * 使用按钮点击事件
         */;
        _proto.onUseItemButtonClicked = /*#__PURE__*/
        function () {
          var _onUseItemButtonClicked = _asyncToGenerator(function* () {
            var _this16 = this;
            if (!this.currentItem) {
              console.error("没有选中的道具");
              return;
            }
            console.log("\u4F7F\u7528\u6280\u80FD\u9053\u5177: " + this.currentItem.name);

            // 禁用所有棋子的点击功能，防止在技能执行过程中进行其他操作
            this.disableAllZiClicks();

            // 调用BagManager的useItem方法消耗物品
            var useSuccess = this.bagManager.useItem(this.currentItem.id, 1);
            if (useSuccess) {
              console.log("\u6280\u80FD\u9053\u5177\u6D88\u8017\u6210\u529F: " + this.currentItem.name);

              // 使用技能
              var skillSuccess = yield this.skillManager.useSkillByItem(this.currentItem.itemId);
              if (skillSuccess) {
                console.log("\u6280\u80FD " + this.currentItem.itemId + " \u4F7F\u7528\u6210\u529F");

                // 监听技能事件
                this.skillManager.addEventListener(SkillEventType.SKILL_EXECUTED, function (event) {
                  _this16.onSkillEvent(event);
                });
                this.skillManager.addEventListener(SkillEventType.SKILL_ERROR, function (event) {
                  _this16.onSkillEvent(event);
                });
              } else {
                console.error("\u6280\u80FD " + this.currentItem.itemId + " \u4F7F\u7528\u5931\u8D25");
              }

              // 刷新道具显示
              this.displayBagItems();
            } else {
              console.error("\u6280\u80FD\u9053\u5177\u6D88\u8017\u5931\u8D25: " + this.currentItem.name);
            }
            //重新启用棋子点击功能
            this.enableAllZiClicks();

            // 清空当前选中的道具
            this.currentItem = null;
          });
          function onUseItemButtonClicked() {
            return _onUseItemButtonClicked.apply(this, arguments);
          }
          return onUseItemButtonClicked;
        }();
        return Match3UI;
      }(Component), _class3.COL = 7, _class3.ROW = 9, _class3.SPLIT = 6, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "board", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "gameStatus", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "collectArea", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "gameSuccess", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "gameFail", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "successCoinLabel", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "failCoinLabel", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "successContinueButton", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "successDoubleRewardButton", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "failRetryButton", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "failRecoverButton", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "pausePannel", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "pauseButton", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "cancelButton", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "failbackButton", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "pauseCoinRewardLabel", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "skillsNode", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "skillPrefab", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Match3ZiUE.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SpriteFramesCfg.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, cclegacy, _decorator, Sprite, Vec3, Color, tween, Component, UITransform, Size, SpriteFramesCfg;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Sprite = module.Sprite;
      Vec3 = module.Vec3;
      Color = module.Color;
      tween = module.tween;
      Component = module.Component;
      UITransform = module.UITransform;
      Size = module.Size;
    }, function (module) {
      SpriteFramesCfg = module.SpriteFramesCfg;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _class3;
      cclegacy._RF.push({}, "9a3basVhExGW6FMoTfSdolz", "Match3ZiUE", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var MovingType = /*#__PURE__*/function (MovingType) {
        MovingType[MovingType["none"] = 0] = "none";
        MovingType[MovingType["flying"] = 1] = "flying";
        MovingType[MovingType["adjusting"] = 2] = "adjusting";
        return MovingType;
      }(MovingType || {});
      var Match3ZiUE = exports('Match3ZiUE', (_dec = ccclass('Match3ZiUE'), _dec2 = property(Sprite), _dec3 = property(Sprite), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Match3ZiUE, _Component);
        function Match3ZiUE() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          /**棋子白板 */
          _initializerDefineProperty(_this, "bg", _descriptor, _assertThisInitialized(_this));
          /**棋子表面花色 */
          _initializerDefineProperty(_this, "sprite", _descriptor2, _assertThisInitialized(_this));
          _this.col = 0;
          _this.row = 0;
          _this.style = 0;
          /**点击棋子方法 */
          _this.m_ClickFunc = null;
          /**移动类型 */
          _this.m_MovingType = MovingType.none;
          /**移动到哪个目标 */
          _this.m_TargetPosition = new Vec3(0, 0, 0);
          /**用平滑因子替换，二维移动速度 */
          _this.m_SmoothFactor = 0.4;
          /**移动回调 */
          _this.m_FlyingCallBack = null;
          /**消除标记 */
          _this.isMarkElimnate = false;
          /**收集状态标记 - 是否已经进入收集区 */
          _this.isCollected = false;
          return _this;
        }
        var _proto = Match3ZiUE.prototype;
        /**
         * 初始化
         * @param col 列
         * @param row 行
         * @param style 样式
         */
        _proto.init = function init(col, row, style, clickFunc) {
          this.col = col;
          this.row = row;
          this.style = style;
          this.m_ClickFunc = clickFunc;
          this.node.setPosition(col * 17, row * 20);
          this.setDisplay(style);
        };
        _proto.click = function click() {
          // 如果全局设置为不可点击，则不能点击
          if (!Match3ZiUE.globalClickable) {
            console.log("Global clickable is false, cannot click");
            return;
          }

          // 如果卡片已经被收集到收集区，则不能点击
          if (this.isCollected) {
            console.log("Card is already collected, cannot click");
            return;
          }

          // 如果卡片已经被标记为消除，则不能点击
          if (this.isMarkElimnate) {
            console.log("Card is marked for elimination, cannot click");
            return;
          }
          this.m_ClickFunc(this);
        }

        /**设置牌面花色 */;
        _proto.setDisplay = /*#__PURE__*/
        function () {
          var _setDisplay = _asyncToGenerator(function* (style) {
            // 将原来的style值(1-30)映射到characters索引(0-44)
            // 如果style值超出范围，使用模运算确保在有效范围内
            var characterIndex;
            if (style >= 1 && style <= 30) {
              // 原来的pai-1到pai-30映射到角色0-29
              characterIndex = style - 1;
            } else {
              // 对于其他值，使用模运算映射到0-44范围
              characterIndex = Math.abs(style) % 45;
            }

            // 使用异步方式获取spriteFrame，确保纹理已加载
            var spriteFrame = yield SpriteFramesCfg.paiAsync(characterIndex);
            if (spriteFrame) {
              this.sprite.spriteFrame = spriteFrame;

              // 设置sprite尺寸为80x80
              var uiTransform = this.sprite.getComponent(UITransform);
              if (uiTransform) {
                uiTransform.setContentSize(new Size(92, 98));
              }

              // 设置sprite为简单模式以确保正确显示
              this.sprite.type = Sprite.Type.SIMPLE;
              this.sprite.sizeMode = Sprite.SizeMode.CUSTOM;

              // 暂时移除圆角效果以避免组件冲突，先确保基本功能正常
              // TODO: 后续可以通过其他方式实现圆角效果
            } else {
              console.warn("Failed to get character sprite frame for style: " + style + ", mapped to index: " + characterIndex);
            }
          });
          function setDisplay(_x) {
            return _setDisplay.apply(this, arguments);
          }
          return setDisplay;
        }() /**设置是否可以点击(不可点击的时候变暗) */;
        _proto.setClickable = function setClickable(bClickable) {
          // 如果卡片已经被收集到收集区，保持正常外观，但仍然不可点击
          if (this.isCollected) {
            // 收集区的卡片保持正常颜色，不显示遮罩
            this.bg.color = Color.WHITE;
            this.sprite.color = Color.WHITE;
            return;
          }

          // 棋盘上的卡片正常显示点击状态
          this.bg.color = bClickable ? Color.WHITE : new Color(120, 120, 120, 180);
          this.sprite.color = bClickable ? Color.WHITE : new Color(120, 120, 120, 180);
        }

        /**移动到指定位置,调用此方法时，一定是从棋盘移动到收集区 */;
        _proto.moveToTargetIndex = function moveToTargetIndex(collectArea, index, cb) {
          var _this2 = this;
          if (this.m_MovingType !== MovingType.none) {
            return;
          }
          this.m_MovingType = MovingType.flying;
          this.m_FlyingCallBack = cb;

          // 标记为已收集状态，禁用点击但保持正常外观
          this.isCollected = true;

          // 确保收集区的卡片保持正常外观
          this.setClickable(true); // 这会被setClickable方法内部的isCollected检查覆盖，确保正常外观

          //目前表现是移动到collectArea节点下
          this.node.setParent(collectArea, true);

          // 设置棋子的z-index，确保移动时始终在上层显示
          this.node.setSiblingIndex(collectArea.children.length - 1);

          // 使用tween替代schedule实现动画
          var targetPosition = new Vec3(index * 102, 0, 0);

          // 计算当前位置到目标位置的距离
          var currentPosition = this.node.position;
          var distance = Vec3.distance(currentPosition, targetPosition);

          // 根据距离和m_SmoothFactor动态计算动画耗时
          // 基础时间0.1秒，加上距离乘以平滑因子，确保动画速度合理
          var duration = Math.max(0.4, distance * 0.01 * this.m_SmoothFactor);
          tween(this.node).to(duration, {
            position: targetPosition
          }).call(function () {
            // 动画完成后的回调
            _this2.m_MovingType = MovingType.none;
            if (_this2.m_FlyingCallBack) {
              var callback = _this2.m_FlyingCallBack;
              _this2.m_FlyingCallBack = null;
              callback();
            }
          }).start();
        }

        /**中途更改目标位置 */;
        _proto.changeMoveingTargetIndex = function changeMoveingTargetIndex(index) {
          var _this3 = this;
          //设置运动目标位置
          var newTargetPosition = new Vec3(index * 102, 0, 0);

          // 停止当前正在进行的tween动画
          tween(this.node).stop();

          // 设置棋子的z-index，确保移动时始终在上层显示
          if (this.node.parent) {
            this.node.setSiblingIndex(this.node.parent.children.length - 1);
          }

          // 计算当前位置到新目标位置的距离
          var currentPosition = this.node.position;
          var distance = Vec3.distance(currentPosition, newTargetPosition);

          // 根据距离和m_SmoothFactor动态计算动画耗时
          // 基础时间0.05秒，加上距离乘以平滑因子，确保动画速度合理
          var duration = 0.2; //Math.min(0.2, distance * 0.01 * this.m_SmoothFactor);

          switch (this.m_MovingType) {
            case MovingType.none:
              //说明是收牌调整动画开启
              this.m_MovingType = MovingType.adjusting;
              // 使用tween开始新的动画
              tween(this.node).to(duration, {
                position: newTargetPosition
              }).call(function () {
                _this3.m_MovingType = MovingType.none;
              }).start();
              break;
            case MovingType.adjusting:
            case MovingType.flying:
              // 在调整动画或者飞行的时候，又修改一次目标位置
              // 停止当前动画，开始新的动画到新目标位置
              tween(this.node).to(duration, {
                position: newTargetPosition
              }).call(function () {
                // 如果是飞行类型，保持类型不变，因为飞行回调还需要执行
                if (_this3.m_MovingType === MovingType.adjusting) {
                  _this3.m_MovingType = MovingType.none;
                }
              }).start();
              break;
          }
        };
        return Match3ZiUE;
      }(Component), _class3.globalClickable = true, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bg", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "sprite", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PlatformDetector.ts", ['cc', './AdManager.ts'], function (exports) {
  var cclegacy, AdPlatform;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      AdPlatform = module.AdPlatform;
    }],
    execute: function () {
      cclegacy._RF.push({}, "64232SUwMdDub3/SPK/zQBK", "PlatformDetector", undefined);

      /**
       * 平台检测工具类
       * 用于检测当前运行环境，支持多种小游戏平台
       */
      var PlatformDetector = exports('PlatformDetector', /*#__PURE__*/function () {
        /**
         * 获取PlatformDetector单例
         */
        PlatformDetector.getInstance = function getInstance() {
          if (!PlatformDetector._instance) {
            PlatformDetector._instance = new PlatformDetector();
          }
          return PlatformDetector._instance;
        }

        /**
         * 当前检测到的平台
         */;

        /**
         * 构造函数，私有化确保单例
         */
        function PlatformDetector() {
          this.currentPlatform = AdPlatform.DEFAULT;
          /**
           * 是否已检测平台
           */
          this.detected = false;
        } // 初始化时不进行检测，延迟到首次调用detectPlatform时

        /**
         * 检测当前运行平台
         * @returns 检测到的平台
         */
        var _proto = PlatformDetector.prototype;
        _proto.detectPlatform = function detectPlatform() {
          if (this.detected) {
            return this.currentPlatform;
          }

          // 检测是否在微信小游戏环境中
          if (this.isWechatPlatform()) {
            this.currentPlatform = AdPlatform.WECHAT;
            console.log('PlatformDetector: 检测到微信小游戏环境');
          }
          // 检测是否在字节跳动小游戏环境中
          else if (this.isByteDancePlatform()) {
            this.currentPlatform = AdPlatform.BYTEDANCE;
            console.log('PlatformDetector: 检测到字节跳动小游戏环境');
          }
          // 默认使用模拟实现
          else {
            this.currentPlatform = AdPlatform.DEFAULT;
            console.log('PlatformDetector: 使用默认广告实现');
          }
          this.detected = true;
          return this.currentPlatform;
        }

        /**
         * 获取当前平台
         * @returns 当前平台
         */;
        _proto.getCurrentPlatform = function getCurrentPlatform() {
          if (!this.detected) {
            return this.detectPlatform();
          }
          return this.currentPlatform;
        }

        /**
         * 检查是否在微信小游戏环境中
         * @returns 是否在微信小游戏环境中
         */;
        _proto.isWechatPlatform = function isWechatPlatform() {
          try {
            // 检查全局对象中是否存在wx对象
            if (typeof window !== 'undefined' && window['wx']) {
              var wx = window['wx'];
              // 检查微信小游戏API是否存在
              return !!(wx.createRewardedVideoAd && wx.createInterstitialAd);
            }
            return false;
          } catch (error) {
            console.error('PlatformDetector: 检测微信平台时发生错误', error);
            return false;
          }
        }

        /**
         * 检查是否在字节跳动小游戏环境中
         * @returns 是否在字节跳动小游戏环境中
         */;
        _proto.isByteDancePlatform = function isByteDancePlatform() {
          try {
            // 检查全局对象中是否存在tt对象
            if (typeof window !== 'undefined' && window['tt']) {
              var tt = window['tt'];
              // 检查字节跳动小游戏API是否存在
              return !!(tt.createRewardedVideoAd && tt.createInterstitialAd);
            }
            return false;
          } catch (error) {
            console.error('PlatformDetector: 检测字节跳动平台时发生错误', error);
            return false;
          }
        }

        /**
         * 检查是否在默认环境中（非小游戏环境）
         * @returns 是否在默认环境中
         */;
        _proto.isDefaultPlatform = function isDefaultPlatform() {
          return this.getCurrentPlatform() === AdPlatform.DEFAULT;
        }

        /**
         * 重置检测状态，强制重新检测
         */;
        _proto.reset = function reset() {
          this.detected = false;
          this.currentPlatform = AdPlatform.DEFAULT;
        }

        /**
         * 获取平台名称
         * @param platform 平台枚举
         * @returns 平台名称
         */;
        _proto.getPlatformName = function getPlatformName(platform) {
          var targetPlatform = platform || this.getCurrentPlatform();
          switch (targetPlatform) {
            case AdPlatform.WECHAT:
              return '微信小游戏';
            case AdPlatform.BYTEDANCE:
              return '字节跳动小游戏';
            case AdPlatform.DEFAULT:
              return '默认环境';
            default:
              return '未知平台';
          }
        }

        /**
         * 获取平台特定信息
         * @returns 平台信息对象
         */;
        _proto.getPlatformInfo = function getPlatformInfo() {
          var platform = this.getCurrentPlatform();
          var name = this.getPlatformName(platform);
          var supportsAds = platform !== AdPlatform.DEFAULT;
          return {
            platform: platform,
            name: name,
            supportsAds: supportsAds
          };
        };
        return PlatformDetector;
      }());
      PlatformDetector._instance = null;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PrefabCfg.ts", ['cc', './ResConst.ts'], function (exports) {
  var cclegacy, createBundleObject;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      createBundleObject = module.createBundleObject;
    }],
    execute: function () {
      cclegacy._RF.push({}, "2f26dCIWNxDurQTEa/Bk8nn", "PrefabCfg", undefined);
      var PrefabCfg = exports('PrefabCfg', {
        //-----------Match3BN---------
        Match3UI: createBundleObject("Match3UI", "Match3BN"),
        Match3ZiUE: createBundleObject("Match3ZiUE", "Match3BN"),
        //-----------ZouZouBN---------
        ZouZouEntry: createBundleObject("ZouZouEntry", "ZouZouBN"),
        //-----------CommonUI---------
        ShopUI: createBundleObject("Shop", "CommonUI"),
        BagUI: createBundleObject("Bag", "CommonUI"),
        LotteryUI: createBundleObject("Lottery", "CommonUI"),
        SignUI: createBundleObject("Sign", "CommonUI"),
        SettingUI: createBundleObject("Settings", "CommonUI")
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/QianKunNuoYiSkill.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SkillBase.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, cclegacy, Sprite, tween, Color, Vec3, BaseSkill;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
    }, function (module) {
      cclegacy = module.cclegacy;
      Sprite = module.Sprite;
      tween = module.tween;
      Color = module.Color;
      Vec3 = module.Vec3;
    }, function (module) {
      BaseSkill = module.BaseSkill;
    }],
    execute: function () {
      cclegacy._RF.push({}, "f03edsF62FGO6VhP5dNatG2", "QianKunNuoYiSkill", undefined);

      /**
       * 乾坤挪移技能实现
       * 功能：随机改变棋盘棋子顺序
       */
      var QianKunNuoYiSkill = exports('QianKunNuoYiSkill', /*#__PURE__*/function (_BaseSkill) {
        _inheritsLoose(QianKunNuoYiSkill, _BaseSkill);
        function QianKunNuoYiSkill(config, gameUI) {
          var _this;
          _this = _BaseSkill.call(this, config) || this;
          _this.gameUI = void 0;
          _this.gameUI = gameUI;
          return _this;
        }

        /**
         * 执行技能效果
         * @param params 执行参数
         * @returns 是否执行成功
         */
        var _proto = QianKunNuoYiSkill.prototype;
        _proto.onExecute = /*#__PURE__*/
        function () {
          var _onExecute = _asyncToGenerator(function* (params) {
            try {
              console.log("\u6267\u884C\u6280\u80FD: " + this.config.name);

              // 获取棋盘上所有棋子
              var boardZis = this.getAllZisFromBoard();
              if (!boardZis || boardZis.length === 0) {
                console.warn('棋盘上没有棋子，无法执行乾坤挪移技能');
                return false;
              }

              // 记录每个棋子的原始位置
              var originalPositions = this.recordZiPositions(boardZis);

              // 随机改变棋子顺序
              var shuffledZis = this.shuffleZis(boardZis);

              // 重新分配棋子位置
              var success = yield this.reassignZiPositions(shuffledZis, originalPositions);
              if (success) {
                // 播放位置变换动画
                // this.playPositionChangeAnimation(shuffledZis);

                console.log("\u4E7E\u5764\u632A\u79FB\u6280\u80FD\u6267\u884C\u6210\u529F\uFF0C\u5DF2\u91CD\u65B0\u6392\u5217" + boardZis.length + "\u4E2A\u68CB\u5B50");
                return true;
              } else {
                console.warn('乾坤挪移技能执行失败，无法重新排列棋子');
                return false;
              }
            } catch (error) {
              console.error('乾坤挪移技能执行异常', error);
              return false;
            }
          });
          function onExecute(_x) {
            return _onExecute.apply(this, arguments);
          }
          return onExecute;
        }()
        /**
         * 获取棋盘上所有棋子
         * @returns 棋盘上的棋子数组
         */;

        _proto.getAllZisFromBoard = function getAllZisFromBoard() {
          // 获取棋盘上的棋子列表
          var boardZiList = this.gameUI.m_ZiList;
          if (!boardZiList || boardZiList.length === 0) {
            return [];
          }

          // 返回棋子的副本，避免修改原数组
          return [].concat(boardZiList);
        }

        /**
         * 记录每个棋子的原始位置
         * @param zis 棋子数组
         * @returns 位置数组
         */;
        _proto.recordZiPositions = function recordZiPositions(zis) {
          var positions = [];
          zis.forEach(function (zi) {
            if (zi && zi.node && zi.node.isValid) {
              // 记录棋子的位置
              positions.push({
                x: zi.node.position.x,
                y: zi.node.position.y,
                z: zi.node.position.z
              });
            } else {
              // 如果棋子无效，记录一个默认位置
              positions.push({
                x: 0,
                y: 0,
                z: 0
              });
            }
          });
          return positions;
        }

        /**
         * 随机打乱棋子顺序
         * @param zis 棋子数组
         * @returns 打乱后的棋子数组
         */;
        _proto.shuffleZis = function shuffleZis(zis) {
          // 创建棋子的副本
          var shuffled = [].concat(zis);

          // Fisher-Yates 洗牌算法
          for (var i = shuffled.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var _ref = [shuffled[j], shuffled[i]];
            shuffled[i] = _ref[0];
            shuffled[j] = _ref[1];
          }
          return shuffled;
        }

        /**
         * 重新分配棋子位置
         * @param zis 棋子数组
         * @param positions 位置数组
         * @returns 是否成功
         */;
        _proto.reassignZiPositions = /*#__PURE__*/
        function () {
          var _reassignZiPositions = _asyncToGenerator(function* (zis, positions) {
            var _this2 = this;
            try {
              // 确保棋子和位置数量匹配
              if (zis.length !== positions.length) {
                console.warn('棋子数量与位置数量不匹配，无法重新分配位置');
                return false;
              }

              // 创建动画Promise数组
              var animationPromises = [];

              // 为每个棋子分配新位置并添加移动动画
              var _loop = function* _loop() {
                var zi = zis[i];
                var position = positions[i];
                if (zi && zi.node && zi.node.isValid) {
                  // 保存原始位置
                  var originalPosition = zi.node.position.clone();

                  // 设置棋子的z-index，确保移动时始终在上层显示
                  zi.node.setSiblingIndex(_this2.gameUI.board.children.length - 1);

                  // 创建移动动画Promise
                  var animationPromise = new Promise(function (resolve) {
                    // 开始播放闪烁效果
                    _this2.playBlinkEffect(zi.node);

                    // 使用tween创建移动动画
                    tween(zi.node).to(0.5, {
                      position: new Vec3(position.x, position.y, position.z)
                    }).call(function () {
                      // 动画完成后更新棋子的行列信息
                      if (zi.updatePosition) {
                        zi.updatePosition();
                      }

                      // 根据新位置更新棋子的行列属性
                      // 假设每个棋子占17x20单位，根据位置计算行列
                      zi.col = Math.round(position.x / 17);
                      zi.row = Math.round(position.y / 20);

                      // 更新棋子的可点击状态
                      if (zi.setClickable) {
                        zi.setClickable(_this2.gameUI.calcClickable(zi));
                      }
                      resolve();
                    }).start();
                  });
                  animationPromises.push(animationPromise);
                }
              };
              for (var i = 0; i < zis.length; i++) {
                yield* _loop();
              }

              // 等待所有动画完成
              yield Promise.all(animationPromises);

              // 清空并重新构建栈信息
              this.gameUI.clearQipan();
              zis.forEach(function (zi) {
                _this2.gameUI.addZi(zi);
              });

              // 启用所有棋子的点击功能
              this.gameUI.enableAllZiClicks();

              // 更新所有棋子的外观和遮罩效果
              this.updateAllZisClickable(zis);

              // 更新UI显示
              this.gameUI.updateUI();
              return true;
            } catch (error) {
              console.error('重新分配棋子位置失败', error);
              return false;
            }
          });
          function reassignZiPositions(_x2, _x3) {
            return _reassignZiPositions.apply(this, arguments);
          }
          return reassignZiPositions;
        }()
        /**
         * 更新所有棋子的点击状态
         * @param zis 棋子数组
         */;

        _proto.updateAllZisClickable = function updateAllZisClickable(zis) {
          var _this3 = this;
          // 更新所有棋子的点击状态
          zis.forEach(function (zi) {
            if (zi && zi.setClickable) {
              zi.setClickable(_this3.gameUI.calcClickable(zi));
            }
          });

          // 更新所有栈中棋子的点击状态
          for (var r = 0; r < 6; r++) {
            for (var c = 0; c < 6; c++) {
              var stack = this.gameUI.stacks[r][c];
              if (!stack.empty && stack.top && stack.top.setClickable) {
                stack.top.setClickable(this.gameUI.calcClickable(stack.top));
              }
            }
          }
        }

        /**
         * 重新构建栈信息
         * @param zis 棋子数组
         */;
        _proto.rebuildStacks = function rebuildStacks(zis) {
          var _this4 = this;
          // 清空所有栈，使用与Match3UI相同的常量
          var ROW = 9;
          var COL = 7;
          var SPLIT = 6;
          for (var r = 0, rmax = ROW * SPLIT; r < rmax; ++r) {
            for (var c = 0, cmax = COL * SPLIT; c < cmax; ++c) {
              this.gameUI.stacks[r][c] = new ZiStack();
            }
          }

          // 重新添加棋子到栈
          zis.forEach(function (zi) {
            if (zi) {
              //加到棋子栈
              for (var _r = 0; _r < 6; _r++) {
                for (var _c = 0; _c < 6; _c++) {
                  // 确保索引不越界
                  var stackRow = zi.row + _r;
                  var stackCol = zi.col + _c;
                  if (stackRow < _this4.gameUI.stacks.length && stackCol < _this4.gameUI.stacks[stackRow].length) {
                    _this4.gameUI.stacks[stackRow][stackCol].push(zi);
                  }
                }
              }
            }
          });
        }

        /**
         * 播放闪烁效果
         * @param node 节点
         */;
        _proto.playBlinkEffect = function playBlinkEffect(node) {
          if (!node || !node.isValid) {
            return;
          }
          var sprite = node.getComponent(Sprite);
          if (!sprite) {
            return;
          }

          // 保存原始颜色
          var originalColor = sprite.color.clone();

          // 创建闪烁动画序列
          tween(sprite).to(0.2, {
            color: new Color(originalColor.r, originalColor.g, originalColor.b, 50)
          }).to(0.2, {
            color: originalColor
          }).to(0.2, {
            color: new Color(originalColor.r, originalColor.g, originalColor.b, 50)
          }).to(0.2, {
            color: originalColor
          }).start();
        }

        /**
         * 技能激活前逻辑
         * @param params 激活参数
         * @returns 是否可以激活
         */;
        _proto.onBeforeActivate = function onBeforeActivate(params) {
          // 检查棋盘上是否有棋子
          var boardZiList = this.gameUI.m_ZiList;
          if (!boardZiList || boardZiList.length === 0) {
            console.warn('棋盘上没有棋子，无法激活乾坤挪移技能');
            return false;
          }
          return true;
        };
        return QianKunNuoYiSkill;
      }(BaseSkill));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ResConst.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('createBundleObject', createBundleObject);
      cclegacy._RF.push({}, "a754fBR+JZMdJ9KlAxL+pe0", "ResConst", undefined);
      /**
       * 创建Bundle对象
       * @param url 路径
       * @param bundleName bundle名称
       * @param key 
       */
      function createBundleObject(url, bundleName, key) {
        var obj = Object.create(null);
        obj.bundleName = bundleName;
        obj.url = url;
        obj.id = bundleName + "/" + url;
        return obj;
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ResLoader.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UIManager.ts', './DestoryHook.ts'], function (exports) {
  var _asyncToGenerator, cclegacy, SpriteFrame, Prefab, getUIClassBUrl, DestoryHook;
  return {
    setters: [function (module) {
      _asyncToGenerator = module.asyncToGenerator;
    }, function (module) {
      cclegacy = module.cclegacy;
      SpriteFrame = module.SpriteFrame;
      Prefab = module.Prefab;
    }, function (module) {
      getUIClassBUrl = module.getUIClassBUrl;
    }, function (module) {
      DestoryHook = module.DestoryHook;
    }],
    execute: function () {
      cclegacy._RF.push({}, "3bedchjX9ZEkrgwDWTmECxi", "ResLoader", undefined);

      /**
       * 资源加载器
       */
      var ResLoader = exports('ResLoader', /*#__PURE__*/function () {
        function ResLoader() {
          /**待加载的资源 */
          this.toLoadAssets = [];
          /**已加载的资源 */
          this.loadedAssets = [];
          /**标记已调用释放资源接口 */
          this.m_Released = false;
        }
        var _proto = ResLoader.prototype;
        /**增加贴图 */
        _proto.addSpriteFrame = function addSpriteFrame(bUrl) {
          return this.addAsset(bUrl, SpriteFrame);
        }

        /**增加UI */;
        _proto.addUI = function addUI(uiClass) {
          this.addAsset(getUIClassBUrl(uiClass), Prefab);
          if (typeof uiClass['R'] == "function") {
            uiClass['R'].call(uiClass, this);
          }
          return this;
        }

        /**新增通用接口 */;
        _proto.addAsset = function addAsset(bUrl, type) {
          this.toLoadAssets.push({
            type: type,
            bUrl: bUrl
          });
          return this;
        };
        _proto.load = /*#__PURE__*/function () {
          var _load = _asyncToGenerator(function* () {
            var _this = this;
            var toLoadPromises = this.toLoadAssets.map(function (toLoad) {
              return gCtrl.res.loadAssetAsync(toLoad.bUrl, toLoad.type);
            });
            var toLoadResults = yield Promise.all(toLoadPromises);
            toLoadResults.forEach(function (asset) {
              //资源加引用计数
              asset.addRef();
              if (!_this.m_Released) {
                _this.loadedAssets.push(asset);
              } else {
                asset.decRef();
              }
            });
          });
          function load() {
            return _load.apply(this, arguments);
          }
          return load;
        }() /**释放已加载的资源的引用计数 */;
        _proto.releaseResRef = function releaseResRef() {
          if (this.m_Released) {
            return;
          }
          this.m_Released = true;
          while (this.loadedAssets.length > 0) {
            this.loadedAssets.pop().decRef(true);
          }
        }

        /**自动释放 */;
        _proto.autoRelease = function autoRelease(comp) {
          var _this2 = this;
          comp.node.addComponent(DestoryHook).addHook(function () {
            _this2.releaseResRef();
          });
          return this;
        };
        return ResLoader;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ResManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BundleDownloadManager.ts'], function (exports) {
  var _asyncToGenerator, cclegacy, assetManager, BundleDownloadManager;
  return {
    setters: [function (module) {
      _asyncToGenerator = module.asyncToGenerator;
    }, function (module) {
      cclegacy = module.cclegacy;
      assetManager = module.assetManager;
    }, function (module) {
      BundleDownloadManager = module.BundleDownloadManager;
    }],
    execute: function () {
      cclegacy._RF.push({}, "6415d70p7xIoJ5xbdcKwMPP", "ResManager", undefined);

      /**单例模式的资源管理器 */
      var ResManager = exports('ResManager', /*#__PURE__*/function () {
        function ResManager() {
          this.bundleDownloadManager = BundleDownloadManager.getInstance();
        }
        var _proto = ResManager.prototype;
        /**
         * 加载bundle
         * @param bundleName 包名
         * @param callback 回调
         */
        _proto.loadBundle = function loadBundle(bundleName, callback) {
          var _this = this;
          // 检查是否已经下载过
          if (this.bundleDownloadManager.isBundleDownloaded(bundleName)) {
            // 如果已经下载过，直接获取bundle
            var _bundle = assetManager.getBundle(bundleName);
            if (_bundle) {
              callback && callback(_bundle);
              return;
            }
          }

          // 如果没有下载过，使用原有逻辑
          assetManager.loadBundle(bundleName, function (e, bundle) {
            if (!e) {
              // 标记为已下载
              _this.bundleDownloadManager['downloadedBundles'].add(bundleName);
            }
            callback && callback(bundle);
          });
        }

        /**
         * 加载AssetManager.Bundle接口
         * @param bundleName 
         */;
        _proto.loadBundleAsync = function loadBundleAsync(bundleName) {
          var _this2 = this;
          return new Promise(function (resolve) {
            _this2.loadBundle(bundleName, resolve);
          });
        }

        /**异步资源加载资源 */;
        _proto.loadAssetAsync = function loadAssetAsync(bUrl, type) {
          var _this3 = this;
          return new Promise(function (resolve) {
            _this3.loadAsset(bUrl, type, resolve);
          });
        }

        /**
         * 加载资源
         * @param bUrl 
         * @param type 
         * @param callBack 
         */;
        _proto.loadAsset = function loadAsset(bUrl, type, callBack) {
          assetManager.loadBundle(bUrl.bundleName, function (e, bundle) {
            bundle.load(bUrl.url, type, function (err, _asset) {
              if (err) {
                console.error(err);
                return callBack(null);
              }
              callBack(_asset);
            });
          });
        }

        /**获取资源方法 */;
        _proto.getAsset = function getAsset(bUrl, type) {
          var assetBundle = assetManager.getBundle(bUrl.bundleName);
          return assetBundle.get(bUrl.url, type);
        }

        /**
         * 预加载所有分包
         */;
        _proto.preloadAllBundles = /*#__PURE__*/
        function () {
          var _preloadAllBundles = _asyncToGenerator(function* () {
            return this.bundleDownloadManager.autoDownloadAllBundles();
          });
          function preloadAllBundles() {
            return _preloadAllBundles.apply(this, arguments);
          }
          return preloadAllBundles;
        }();
        return ResManager;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SettingManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _extends, cclegacy, sys;
  return {
    setters: [function (module) {
      _extends = module.extends;
    }, function (module) {
      cclegacy = module.cclegacy;
      sys = module.sys;
    }],
    execute: function () {
      cclegacy._RF.push({}, "d272e6DHLNAR7WN1lRlG3w2", "SettingManager", undefined);

      /**
       * 设置类型枚举
       */
      var SettingType = exports('SettingType', /*#__PURE__*/function (SettingType) {
        SettingType["SOUND"] = "sound";
        SettingType["MUSIC"] = "music";
        SettingType["GRAPHICS"] = "graphics";
        SettingType["CONTROL"] = "control";
        SettingType["LANGUAGE"] = "language";
        SettingType["NOTIFICATION"] = "notification";
        return SettingType;
      }({}));

      /**
       * 音效设置接口
       */

      /**
       * 背景音乐设置接口
       */

      /**
       * 图形设置接口
       */

      /**
       * 控制设置接口
       */

      /**
       * 语言设置接口
       */

      /**
       * 通知设置接口
       */

      /**
       * 设置系统事件类型枚举
       */
      var SettingEventType = exports('SettingEventType', /*#__PURE__*/function (SettingEventType) {
        SettingEventType["SETTING_CHANGED"] = "setting_changed";
        SettingEventType["SETTING_RESET"] = "setting_reset";
        SettingEventType["SETTING_LOADED"] = "setting_loaded";
        return SettingEventType;
      }({}));

      /**
       * 设置事件接口
       */

      /**
       * 设置事件回调类型
       */

      /**
       * 设置管理器
       * 实现单例模式，管理游戏中的设置系统
       */
      var SettingManager = exports('SettingManager', /*#__PURE__*/function () {
        /**
         * 获取SettingManager单例
         */
        SettingManager.getInstance = function getInstance() {
          if (!this._instance) {
            this._instance = new SettingManager();
          }
          return this._instance;
        }

        /**
         * 私有构造函数，确保单例模式
         */;
        function SettingManager() {
          var _this = this;
          // 各类设置数据
          this._soundSetting = {
            enabled: true,
            volume: 0.8
          };
          this._musicSetting = {
            enabled: true,
            volume: 0.7
          };
          this._graphicsSetting = {
            quality: 'high',
            fps: 60
          };
          this._controlSetting = {
            vibration: true,
            sensitivity: 0.5
          };
          this._languageSetting = {
            code: 'zh',
            region: 'CN'
          };
          this._notificationSetting = {
            enabled: true,
            sound: true,
            vibration: true
          };
          // 事件监听器
          this._eventListeners = new Map();
          // 初始化事件监听器映射
          Object.keys(SettingEventType).forEach(function (key) {
            var type = SettingEventType[key];
            _this._eventListeners.set(type, []);
          });
        }

        /**
         * 初始化设置系统
         */
        var _proto = SettingManager.prototype;
        _proto.init = function init() {
          console.log('SettingManager: 初始化设置系统');
          this.loadSettingData();
        }

        /**
         * 加载设置数据
         */;
        _proto.loadSettingData = function loadSettingData() {
          try {
            var data = sys.localStorage.getItem(SettingManager.SETTING_KEY);
            if (data) {
              var parsedData = JSON.parse(data);

              // 验证数据格式
              if (this.validateSettingData(parsedData)) {
                // 加载各类设置
                if (parsedData.sound) {
                  this._soundSetting = this.validateSoundSetting(parsedData.sound);
                }
                if (parsedData.music) {
                  this._musicSetting = this.validateMusicSetting(parsedData.music);
                }
                if (parsedData.graphics) {
                  this._graphicsSetting = this.validateGraphicsSetting(parsedData.graphics);
                }
                if (parsedData.control) {
                  this._controlSetting = this.validateControlSetting(parsedData.control);
                }
                if (parsedData.language) {
                  this._languageSetting = this.validateLanguageSetting(parsedData.language);
                }
                if (parsedData.notification) {
                  this._notificationSetting = this.validateNotificationSetting(parsedData.notification);
                }
                console.log('SettingManager: 设置数据加载成功');
                this.triggerEvent({
                  type: SettingEventType.SETTING_LOADED
                });
              } else {
                console.warn('SettingManager: 设置数据格式无效，使用默认配置');
                this.saveSettingData(); // 保存默认设置
              }
            } else {
              console.log('SettingManager: 没有找到设置数据，使用默认配置');
              this.saveSettingData(); // 保存默认设置
            }
          } catch (error) {
            console.error('SettingManager: 加载设置数据失败', error);
            this.saveSettingData(); // 保存默认设置
          }
        }

        /**
         * 保存设置数据
         */;
        _proto.saveSettingData = function saveSettingData() {
          try {
            var data = {
              sound: this._soundSetting,
              music: this._musicSetting,
              graphics: this._graphicsSetting,
              control: this._controlSetting,
              language: this._languageSetting,
              notification: this._notificationSetting
            };
            sys.localStorage.setItem(SettingManager.SETTING_KEY, JSON.stringify(data));
          } catch (error) {
            console.error('SettingManager: 保存设置数据失败', error);
          }
        }

        /**
         * 获取音效设置
         */;
        _proto.getSoundSetting = function getSoundSetting() {
          return _extends({}, this._soundSetting); // 返回副本，避免外部修改
        }

        /**
         * 获取背景音乐设置
         */;
        _proto.getMusicSetting = function getMusicSetting() {
          return _extends({}, this._musicSetting); // 返回副本，避免外部修改
        }

        /**
         * 获取图形设置
         */;
        _proto.getGraphicsSetting = function getGraphicsSetting() {
          return _extends({}, this._graphicsSetting); // 返回副本，避免外部修改
        }

        /**
         * 获取控制设置
         */;
        _proto.getControlSetting = function getControlSetting() {
          return _extends({}, this._controlSetting); // 返回副本，避免外部修改
        }

        /**
         * 获取语言设置
         */;
        _proto.getLanguageSetting = function getLanguageSetting() {
          return _extends({}, this._languageSetting); // 返回副本，避免外部修改
        }

        /**
         * 获取通知设置
         */;
        _proto.getNotificationSetting = function getNotificationSetting() {
          return _extends({}, this._notificationSetting); // 返回副本，避免外部修改
        }

        /**
         * 更新音效设置
         * @param setting 音效设置
         */;
        _proto.updateSoundSetting = function updateSoundSetting(setting) {
          var oldSetting = _extends({}, this._soundSetting);
          this._soundSetting = _extends({}, this._soundSetting, setting);
          this.saveSettingData();
          this.triggerEvent({
            type: SettingEventType.SETTING_CHANGED,
            settingType: SettingType.SOUND,
            data: {
              oldSetting: oldSetting,
              newSetting: this._soundSetting
            }
          });
        }

        /**
         * 设置音效开关
         * @param enabled 是否启用音效
         */;
        _proto.setSoundEnabled = function setSoundEnabled(enabled) {
          this.updateSoundSetting({
            enabled: enabled
          });
        }

        /**
         * 设置音效音量
         * @param volume 音效音量 (0-1)
         */;
        _proto.setSoundVolume = function setSoundVolume(volume) {
          // 确保音量在有效范围内
          volume = Math.max(0, Math.min(1, volume));
          this.updateSoundSetting({
            volume: volume
          });
        }

        /**
         * 更新背景音乐设置
         * @param setting 背景音乐设置
         */;
        _proto.updateMusicSetting = function updateMusicSetting(setting) {
          var oldSetting = _extends({}, this._musicSetting);
          this._musicSetting = _extends({}, this._musicSetting, setting);
          this.saveSettingData();
          this.triggerEvent({
            type: SettingEventType.SETTING_CHANGED,
            settingType: SettingType.MUSIC,
            data: {
              oldSetting: oldSetting,
              newSetting: this._musicSetting
            }
          });
        }

        /**
         * 设置背景音乐开关
         * @param enabled 是否启用背景音乐
         */;
        _proto.setMusicEnabled = function setMusicEnabled(enabled) {
          this.updateMusicSetting({
            enabled: enabled
          });
        }

        /**
         * 设置背景音乐音量
         * @param volume 背景音乐音量 (0-1)
         */;
        _proto.setMusicVolume = function setMusicVolume(volume) {
          // 确保音量在有效范围内
          volume = Math.max(0, Math.min(1, volume));
          this.updateMusicSetting({
            volume: volume
          });
        }

        /**
         * 更新图形设置
         * @param setting 图形设置
         */;
        _proto.updateGraphicsSetting = function updateGraphicsSetting(setting) {
          var oldSetting = _extends({}, this._graphicsSetting);
          this._graphicsSetting = _extends({}, this._graphicsSetting, setting);
          this.saveSettingData();
          this.triggerEvent({
            type: SettingEventType.SETTING_CHANGED,
            settingType: SettingType.GRAPHICS,
            data: {
              oldSetting: oldSetting,
              newSetting: this._graphicsSetting
            }
          });
        }

        /**
         * 更新控制设置
         * @param setting 控制设置
         */;
        _proto.updateControlSetting = function updateControlSetting(setting) {
          var oldSetting = _extends({}, this._controlSetting);
          this._controlSetting = _extends({}, this._controlSetting, setting);
          this.saveSettingData();
          this.triggerEvent({
            type: SettingEventType.SETTING_CHANGED,
            settingType: SettingType.CONTROL,
            data: {
              oldSetting: oldSetting,
              newSetting: this._controlSetting
            }
          });
        }

        /**
         * 更新语言设置
         * @param setting 语言设置
         */;
        _proto.updateLanguageSetting = function updateLanguageSetting(setting) {
          var oldSetting = _extends({}, this._languageSetting);
          this._languageSetting = _extends({}, this._languageSetting, setting);
          this.saveSettingData();
          this.triggerEvent({
            type: SettingEventType.SETTING_CHANGED,
            settingType: SettingType.LANGUAGE,
            data: {
              oldSetting: oldSetting,
              newSetting: this._languageSetting
            }
          });
        }

        /**
         * 更新通知设置
         * @param setting 通知设置
         */;
        _proto.updateNotificationSetting = function updateNotificationSetting(setting) {
          var oldSetting = _extends({}, this._notificationSetting);
          this._notificationSetting = _extends({}, this._notificationSetting, setting);
          this.saveSettingData();
          this.triggerEvent({
            type: SettingEventType.SETTING_CHANGED,
            settingType: SettingType.NOTIFICATION,
            data: {
              oldSetting: oldSetting,
              newSetting: this._notificationSetting
            }
          });
        }

        /**
         * 重置所有设置为默认值
         */;
        _proto.resetAllSettings = function resetAllSettings() {
          var oldSettings = {
            sound: _extends({}, this._soundSetting),
            music: _extends({}, this._musicSetting),
            graphics: _extends({}, this._graphicsSetting),
            control: _extends({}, this._controlSetting),
            language: _extends({}, this._languageSetting),
            notification: _extends({}, this._notificationSetting)
          };

          // 重置为默认值
          this._soundSetting = {
            enabled: true,
            volume: 0.8
          };
          this._musicSetting = {
            enabled: true,
            volume: 0.7
          };
          this._graphicsSetting = {
            quality: 'high',
            fps: 60
          };
          this._controlSetting = {
            vibration: true,
            sensitivity: 0.5
          };
          this._languageSetting = {
            code: 'zh',
            region: 'CN'
          };
          this._notificationSetting = {
            enabled: true,
            sound: true,
            vibration: true
          };
          this.saveSettingData();
          this.triggerEvent({
            type: SettingEventType.SETTING_RESET,
            data: {
              oldSettings: oldSettings,
              newSettings: this.getAllSettings()
            }
          });
        }

        /**
         * 获取所有设置
         */;
        _proto.getAllSettings = function getAllSettings() {
          return {
            sound: _extends({}, this._soundSetting),
            music: _extends({}, this._musicSetting),
            graphics: _extends({}, this._graphicsSetting),
            control: _extends({}, this._controlSetting),
            language: _extends({}, this._languageSetting),
            notification: _extends({}, this._notificationSetting)
          };
        }

        /**
         * 添加设置事件监听器
         * @param eventType 事件类型
         * @param callback 回调函数
         */;
        _proto.addEventListener = function addEventListener(eventType, callback) {
          var listeners = this._eventListeners.get(eventType);
          if (listeners) {
            // 确保不重复添加同一个回调
            var exists = false;
            for (var i = 0; i < listeners.length; i++) {
              if (listeners[i] === callback) {
                exists = true;
                break;
              }
            }
            if (!exists) {
              listeners.push(callback);
            }
          }
        }

        /**
         * 移除设置事件监听器
         * @param eventType 事件类型
         * @param callback 回调函数
         */;
        _proto.removeEventListener = function removeEventListener(eventType, callback) {
          var listeners = this._eventListeners.get(eventType);
          if (listeners) {
            for (var i = 0; i < listeners.length; i++) {
              if (listeners[i] === callback) {
                listeners.splice(i, 1);
                break;
              }
            }
          }
        }

        /**
         * 触发设置事件
         * @param event 事件对象
         */;
        _proto.triggerEvent = function triggerEvent(event) {
          var listeners = this._eventListeners.get(event.type);
          if (listeners && listeners.length > 0) {
            listeners.forEach(function (callback) {
              try {
                callback(event);
              } catch (error) {
                console.error('SettingManager: 事件回调执行失败', error);
              }
            });
          }
        }

        /**
         * 验证设置数据格式
         * @param data 设置数据
         * @returns 是否有效
         */;
        _proto.validateSettingData = function validateSettingData(data) {
          if (!data || typeof data !== 'object') {
            return false;
          }

          // 检查是否有至少一个有效的设置类型
          var validTypes = ['sound', 'music', 'graphics', 'control', 'language', 'notification'];
          return validTypes.some(function (type) {
            return type in data && typeof data[type] === 'object';
          });
        }

        /**
         * 验证音效设置格式
         * @param setting 音效设置
         * @returns 验证后的音效设置
         */;
        _proto.validateSoundSetting = function validateSoundSetting(setting) {
          var validated = _extends({}, this._soundSetting);
          if (typeof setting.enabled === 'boolean') {
            validated.enabled = setting.enabled;
          }
          if (typeof setting.volume === 'number') {
            validated.volume = Math.max(0, Math.min(1, setting.volume));
          }
          return validated;
        }

        /**
         * 验证背景音乐设置格式
         * @param setting 背景音乐设置
         * @returns 验证后的背景音乐设置
         */;
        _proto.validateMusicSetting = function validateMusicSetting(setting) {
          var validated = _extends({}, this._musicSetting);
          if (typeof setting.enabled === 'boolean') {
            validated.enabled = setting.enabled;
          }
          if (typeof setting.volume === 'number') {
            validated.volume = Math.max(0, Math.min(1, setting.volume));
          }
          return validated;
        }

        /**
         * 验证图形设置格式
         * @param setting 图形设置
         * @returns 验证后的图形设置
         */;
        _proto.validateGraphicsSetting = function validateGraphicsSetting(setting) {
          var validated = _extends({}, this._graphicsSetting);
          if (typeof setting.quality === 'string') {
            validated.quality = setting.quality;
          }
          if (typeof setting.fps === 'number') {
            validated.fps = Math.max(30, Math.min(120, setting.fps));
          }
          return validated;
        }

        /**
         * 验证控制设置格式
         * @param setting 控制设置
         * @returns 验证后的控制设置
         */;
        _proto.validateControlSetting = function validateControlSetting(setting) {
          var validated = _extends({}, this._controlSetting);
          if (typeof setting.vibration === 'boolean') {
            validated.vibration = setting.vibration;
          }
          if (typeof setting.sensitivity === 'number') {
            validated.sensitivity = Math.max(0, Math.min(1, setting.sensitivity));
          }
          return validated;
        }

        /**
         * 验证语言设置格式
         * @param setting 语言设置
         * @returns 验证后的语言设置
         */;
        _proto.validateLanguageSetting = function validateLanguageSetting(setting) {
          var validated = _extends({}, this._languageSetting);
          if (typeof setting.code === 'string') {
            validated.code = setting.code;
          }
          if (typeof setting.region === 'string') {
            validated.region = setting.region;
          }
          return validated;
        }

        /**
         * 验证通知设置格式
         * @param setting 通知设置
         * @returns 验证后的通知设置
         */;
        _proto.validateNotificationSetting = function validateNotificationSetting(setting) {
          var validated = _extends({}, this._notificationSetting);
          if (typeof setting.enabled === 'boolean') {
            validated.enabled = setting.enabled;
          }
          if (typeof setting.sound === 'boolean') {
            validated.sound = setting.sound;
          }
          if (typeof setting.vibration === 'boolean') {
            validated.vibration = setting.vibration;
          }
          return validated;
        };
        return SettingManager;
      }());
      SettingManager._instance = void 0;
      // 设置数据键名
      SettingManager.SETTING_KEY = "game_setting_data";
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SettingUI.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseUI.ts', './SettingManager.ts', './UILayer.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Toggle, Slider, Node, BaseUI, SettingManager, UILayer;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Toggle = module.Toggle;
      Slider = module.Slider;
      Node = module.Node;
    }, function (module) {
      BaseUI = module.BaseUI;
    }, function (module) {
      SettingManager = module.SettingManager;
    }, function (module) {
      UILayer = module.UILayer;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _class3;
      cclegacy._RF.push({}, "b7c7bDQq/dG971+wDRTbpo2", "SettingUI", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /**
       * 设置UI界面
       * 用于提供音效设置选项，支持背景音乐和音效的开关及音量调节
       */
      var SettingUI = exports('SettingUI', (_dec = ccclass('SettingUI'), _dec2 = property(Toggle), _dec3 = property(Slider), _dec4 = property(Toggle), _dec5 = property(Slider), _dec6 = property(Node), _dec7 = property(Node), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_BaseUI) {
        _inheritsLoose(SettingUI, _BaseUI);
        function SettingUI() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BaseUI.call.apply(_BaseUI, [this].concat(args)) || this;
          // 背景音乐开关
          _initializerDefineProperty(_this, "bgmToggle", _descriptor, _assertThisInitialized(_this));
          // 背景音乐音量滑块
          _initializerDefineProperty(_this, "bgmSlider", _descriptor2, _assertThisInitialized(_this));
          // 音效开关
          _initializerDefineProperty(_this, "effectsToggle", _descriptor3, _assertThisInitialized(_this));
          // 音效音量滑块
          _initializerDefineProperty(_this, "effectsSlider", _descriptor4, _assertThisInitialized(_this));
          // 保存按钮
          _initializerDefineProperty(_this, "saveButton", _descriptor5, _assertThisInitialized(_this));
          // 关闭按钮
          _initializerDefineProperty(_this, "closeButton", _descriptor6, _assertThisInitialized(_this));
          // 设置管理器引用
          _this.settingManager = null;
          return _this;
        }
        var _proto = SettingUI.prototype;
        _proto.onLoad = function onLoad() {
          // 获取设置管理器实例
          this.settingManager = SettingManager.getInstance();

          // 绑定按钮事件
          if (this.saveButton) {
            this.saveButton.on(Node.EventType.TOUCH_END, this.onSaveClick, this);
          }
          if (this.closeButton) {
            this.closeButton.on(Node.EventType.TOUCH_END, this.onCloseClick, this);
          }

          // 绑定滑块事件
          if (this.bgmSlider) {
            this.bgmSlider.node.on('slide', this.onBgmVolumeChange, this);
          }
          if (this.effectsSlider) {
            this.effectsSlider.node.on('slide', this.onEffectsVolumeChange, this);
          }

          // 绑定开关事件
          if (this.bgmToggle) {
            this.bgmToggle.node.on(Toggle.EventType.TOGGLE, this.onBgmToggleChange, this);
          }
          if (this.effectsToggle) {
            this.effectsToggle.node.on(Toggle.EventType.TOGGLE, this.onEffectsToggleChange, this);
          }

          // 初始化设置数据
          this.initSettingUI();
        }

        /**
         * 初始化设置界面
         */;
        _proto.initSettingUI = function initSettingUI() {
          if (!this.settingManager) {
            console.error('SettingUI: 设置管理器未初始化');
            return;
          }

          // 从SettingManager获取当前设置
          var musicSetting = this.settingManager.getMusicSetting();
          var soundSetting = this.settingManager.getSoundSetting();

          // 根据当前设置初始化界面控件状态
          if (this.bgmToggle) {
            this.bgmToggle.isChecked = musicSetting.enabled;
          }
          if (this.bgmSlider) {
            this.bgmSlider.progress = musicSetting.volume;
          }
          if (this.effectsToggle) {
            this.effectsToggle.isChecked = soundSetting.enabled;
          }
          if (this.effectsSlider) {
            this.effectsSlider.progress = soundSetting.volume;
          }
          console.log('SettingUI initialized with current settings');
        }

        /**
         * 背景音乐开关变化事件
         */;
        _proto.onBgmToggleChange = function onBgmToggleChange() {
          if (!this.bgmToggle || !this.settingManager) return;
          var isEnabled = this.bgmToggle.isChecked;
          // 实时预览背景音乐开关效果
          this.settingManager.setMusicEnabled(isEnabled);
          console.log("BGM toggle: " + isEnabled);
        }

        /**
         * 背景音乐音量变化事件
         */;
        _proto.onBgmVolumeChange = function onBgmVolumeChange() {
          if (!this.bgmSlider || !this.settingManager) return;
          var volume = this.bgmSlider.progress;
          // 实时预览背景音乐音量变化
          this.settingManager.setMusicVolume(volume);
          console.log("BGM volume: " + volume);
        }

        /**
         * 音效开关变化事件
         */;
        _proto.onEffectsToggleChange = function onEffectsToggleChange() {
          if (!this.effectsToggle || !this.settingManager) return;
          var isEnabled = this.effectsToggle.isChecked;
          // 实时预览音效开关效果
          this.settingManager.setSoundEnabled(isEnabled);
          console.log("Effects toggle: " + isEnabled);
        }

        /**
         * 音效音量变化事件
         */;
        _proto.onEffectsVolumeChange = function onEffectsVolumeChange() {
          if (!this.effectsSlider || !this.settingManager) return;
          var volume = this.effectsSlider.progress;
          // 实时预览音效音量变化
          this.settingManager.setSoundVolume(volume);
          console.log("Effects volume: " + volume);
        }

        /**
         * 保存按钮点击事件
         */;
        _proto.onSaveClick = function onSaveClick() {
          if (!this.settingManager) {
            console.error('SettingUI: 设置管理器未初始化');
            return;
          }

          // 设置已经在交互过程中实时保存了，这里只需要关闭界面
          console.log('Settings saved');

          // 发送返回主界面事件到场景节点
          var scene = this.node.scene;
          if (scene) {
            scene.emit('BACK_TO_MAIN_SCENE');
            console.log('SettingUI: 已发送BACK_TO_MAIN_SCENE事件到场景节点');
          } else {
            console.warn('SettingUI: 无法获取场景节点，事件发送失败');
          }

          // 保存后关闭界面
          this.hide();
        }

        /**
         * 关闭按钮点击事件
         */;
        _proto.onCloseClick = function onCloseClick() {
          // 发送返回主界面事件到场景节点
          var scene = this.node.scene;
          if (scene) {
            scene.emit('BACK_TO_MAIN_SCENE');
            console.log('SettingUI: 已发送BACK_TO_MAIN_SCENE事件到场景节点');
          } else {
            console.warn('SettingUI: 无法获取场景节点，事件发送失败');
          }

          // 关闭界面
          this.hide();
        };
        _proto.onDestroy = function onDestroy() {
          // 移除按钮事件
          if (this.saveButton) {
            this.saveButton.off(Node.EventType.TOUCH_END, this.onSaveClick, this);
          }
          if (this.closeButton) {
            this.closeButton.off(Node.EventType.TOUCH_END, this.onCloseClick, this);
          }

          // 移除滑块事件
          if (this.bgmSlider) {
            this.bgmSlider.node.off('slide', this.onBgmVolumeChange, this);
          }
          if (this.effectsSlider) {
            this.effectsSlider.node.off('slide', this.onEffectsVolumeChange, this);
          }

          // 移除开关事件
          if (this.bgmToggle) {
            this.bgmToggle.node.off(Toggle.EventType.TOGGLE, this.onBgmToggleChange, this);
          }
          if (this.effectsToggle) {
            this.effectsToggle.node.off(Toggle.EventType.TOGGLE, this.onEffectsToggleChange, this);
          }
          _BaseUI.prototype.onDestroy.call(this);
        };
        return SettingUI;
      }(BaseUI), _class3.viewLayer = UILayer.UI, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bgmToggle", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "bgmSlider", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "effectsToggle", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "effectsSlider", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "saveButton", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "closeButton", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ShopConfig.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ShopManager.ts'], function (exports) {
  var _createForOfIteratorHelperLoose, _extends, cclegacy, ShopItemType;
  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _extends = module.extends;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ShopItemType = module.ShopItemType;
    }],
    execute: function () {
      cclegacy._RF.push({}, "ee3fb1BFpBM8au2fF5ZMFCH", "ShopConfig", undefined);

      /**
       * 商店商品配置
       * 包含所有可购买的商品信息
       */
      var ShopConfig = exports('ShopConfig', /*#__PURE__*/function () {
        function ShopConfig() {}
        /**
         * 获取所有商品配置
         */
        ShopConfig.getAllItems = function getAllItems() {
          return [
          // 道具类商品
          {
            id: 'item_tdhm',
            name: '拖刀回马',
            description: '撤销最近3个棋子到棋盘里',
            price: 100,
            type: ShopItemType.ITEM,
            itemId: 'item_tdhm_001',
            count: 3,
            icon: 'skills/tuodaohuima_btn',
            limit: -1
          }, {
            id: 'item_ccjj',
            name: '草船借箭',
            description: '从棋盘里借走棋子，消除收集区的1种棋子',
            price: 100,
            type: ShopItemType.ITEM,
            itemId: 'item_ccjj_001',
            count: 3,
            icon: 'skills/caochuanjiejian_btn',
            limit: -1
          }, {
            id: 'item_qkny',
            name: '乾坤挪移',
            description: '打乱棋盘上的棋子排序',
            price: 100,
            type: ShopItemType.ITEM,
            itemId: 'item_qkny_001',
            count: 3,
            icon: 'skills/qiankunnuoyi_btn',
            limit: -1
          }];
        }

        /**
         * 根据ID获取商品配置
         */;
        ShopConfig.getItemById = function getItemById(id) {
          var items = this.getAllItems();
          for (var _iterator = _createForOfIteratorHelperLoose(items), _step; !(_step = _iterator()).done;) {
            var item = _step.value;
            if (item.id === id) {
              return item;
            }
          }
          return null;
        }

        /**
         * 根据类型获取商品配置
         */;
        ShopConfig.getItemsByType = function getItemsByType(type) {
          var items = this.getAllItems();
          return items.filter(function (item) {
            return item.type === type;
          });
        }

        /**
         * 获取道具类商品
         */;
        ShopConfig.getItemProducts = function getItemProducts() {
          return this.getItemsByType(ShopItemType.ITEM);
        }

        /**
         * 获取金币类商品
         */;
        ShopConfig.getCoinProducts = function getCoinProducts() {
          return this.getItemsByType(ShopItemType.COIN);
        }

        /**
         * 获取特殊类商品
         */;
        ShopConfig.getSpecialProducts = function getSpecialProducts() {
          return this.getItemsByType(ShopItemType.SPECIAL);
        }

        /**
         * 获取特价商品配置
         * 从所有商品中随机选择部分商品作为特价商品
         */;
        ShopConfig.getSpecialOfferItems = function getSpecialOfferItems(count) {
          if (count === void 0) {
            count = 3;
          }
          var allItems = this.getAllItems();
          var specialItems = [];

          // 复制数组，避免修改原数组
          var itemsCopy = [].concat(allItems);

          // 随机选择指定数量的商品
          for (var i = 0; i < count && itemsCopy.length > 0; i++) {
            var randomIndex = Math.floor(Math.random() * itemsCopy.length);
            var item = itemsCopy[randomIndex];

            // 创建特价商品（价格为原价的70%-90%）
            var specialItem = _extends({}, item);
            specialItems.push(specialItem);
            itemsCopy.splice(randomIndex, 1);
          }
          return specialItems;
        }

        /**
         * 获取新手推荐商品
         */;
        ShopConfig.getRecommendedItemsForNewbie = function getRecommendedItemsForNewbie() {
          return [this.getItemById('coin_001'), this.getItemById('item_001'), this.getItemById('special_002')];
        }

        /**
         * 获取高级玩家推荐商品
         */;
        ShopConfig.getRecommendedItemsForAdvanced = function getRecommendedItemsForAdvanced() {
          return [this.getItemById('coin_003'), this.getItemById('item_003'), this.getItemById('special_001')];
        }

        /**
         * 获取限时特价商品
         * 在特定时间段内提供的特价商品
         */;
        ShopConfig.getLimitedTimeOfferItems = function getLimitedTimeOfferItems() {
          return [_extends({}, this.getItemById('coin_004'), {
            isSpecial: true,
            specialPrice: 400 // 原价500，特价400
          }), _extends({}, this.getItemById('item_003'), {
            isSpecial: true,
            specialPrice: 400 // 原价500，特价400
          })];
        };

        return ShopConfig;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ShopItemUI.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Sprite, Label, Button, Node, assetManager, SpriteFrame, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Sprite = module.Sprite;
      Label = module.Label;
      Button = module.Button;
      Node = module.Node;
      assetManager = module.assetManager;
      SpriteFrame = module.SpriteFrame;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;
      cclegacy._RF.push({}, "fa782pCiJZDWLIQWssOADuk", "ShopItemUI", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /**
       * 商店商品项UI组件
       * 用于显示单个商品的信息，并处理交互事件
       */
      var ShopItemUI = exports('ShopItemUI', (_dec = ccclass('ShopItemUI'), _dec2 = property(Sprite), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Button), _dec7 = property(Node), _dec8 = property(Label), _dec9 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ShopItemUI, _Component);
        function ShopItemUI() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          // 商品图标
          _initializerDefineProperty(_this, "iconSprite", _descriptor, _assertThisInitialized(_this));
          // 商品名称标签
          _initializerDefineProperty(_this, "nameLabel", _descriptor2, _assertThisInitialized(_this));
          // 商品描述标签
          _initializerDefineProperty(_this, "descLabel", _descriptor3, _assertThisInitialized(_this));
          // 商品价格标签
          _initializerDefineProperty(_this, "priceLabel", _descriptor4, _assertThisInitialized(_this));
          // 购买按钮
          _initializerDefineProperty(_this, "buyButton", _descriptor5, _assertThisInitialized(_this));
          // 特价标记节点
          _initializerDefineProperty(_this, "specialMarkNode", _descriptor6, _assertThisInitialized(_this));
          // 特价价格标签
          _initializerDefineProperty(_this, "specialPriceLabel", _descriptor7, _assertThisInitialized(_this));
          // 原价标签（用于特价商品划线显示）
          _initializerDefineProperty(_this, "originalPriceLabel", _descriptor8, _assertThisInitialized(_this));
          // 商品数据
          _this.itemData = null;
          // 详情点击回调
          _this.onDetailClick = null;
          // 购买点击回调
          _this.onBuyClick = null;
          return _this;
        }
        var _proto = ShopItemUI.prototype;
        _proto.onLoad = function onLoad() {
          // 绑定购买按钮点击事件
          if (this.buyButton) {
            this.buyButton.node.on(Button.EventType.CLICK, this.onBuyButtonClick, this);
          }

          // 绑定商品项点击事件（用于显示详情）
          this.node.on(Node.EventType.TOUCH_END, this.onItemClick, this);
        }

        /**
         * 初始化商品项
         * @param item 商品数据
         * @param onDetailClick 详情点击回调
         * @param onBuyClick 购买点击回调
         */;
        _proto.init = function init(item, onDetailClick, onBuyClick) {
          this.itemData = item;
          this.onDetailClick = onDetailClick;
          this.onBuyClick = onBuyClick;

          // 更新UI显示
          this.updateUI();
        }

        /**
         * 更新UI显示
         */;
        _proto.updateUI = function updateUI() {
          var _this2 = this;
          if (!this.itemData) {
            return;
          }

          // 更新商品名称
          if (this.nameLabel) {
            this.nameLabel.string = this.itemData.name;
          }

          // 更新商品描述
          if (this.descLabel) {
            this.descLabel.string = this.itemData.description;
          }

          // 更新商品价格
          if (this.priceLabel) {
            this.priceLabel.string = this.itemData.price.toString();
          }

          // 更新特价商品显示
          if (this.itemData.isSpecial && this.itemData.specialPrice) {
            // 显示特价标记
            if (this.specialMarkNode) {
              this.specialMarkNode.active = true;
            }

            // 显示特价价格
            if (this.specialPriceLabel) {
              this.specialPriceLabel.string = this.itemData.specialPrice.toString();
              this.specialPriceLabel.node.active = true;
            }

            // 显示原价（划线）
            if (this.originalPriceLabel) {
              this.originalPriceLabel.string = this.itemData.price.toString();
              this.originalPriceLabel.node.active = true;
            }

            // 隐藏普通价格标签
            if (this.priceLabel) {
              this.priceLabel.node.active = false;
            }
          } else {
            // 隐藏特价标记
            if (this.specialMarkNode) {
              this.specialMarkNode.active = false;
            }

            // 隐藏特价价格
            if (this.specialPriceLabel) {
              this.specialPriceLabel.node.active = false;
            }

            // 隐藏原价标签
            if (this.originalPriceLabel) {
              this.originalPriceLabel.node.active = false;
            }

            // 显示普通价格标签
            if (this.priceLabel) {
              this.priceLabel.node.active = true;
            }
          }

          // 更新商品图标（如果有图标资源）
          if (this.iconSprite && this.itemData.icon) {
            // 加载图标资源
            var iconPath = this.itemData.icon;
            var bundleName = 'CommonUI'; // bundle名称
            var assetPath = "ui/" + iconPath; // 资源路径，如 "ui/skills/tuodaohuima_btn"

            // 加载bundle
            assetManager.loadBundle(bundleName, function (err, bundle) {
              if (err) {
                console.error("Failed to load bundle: " + bundleName, err);
                return;
              }

              // 从bundle中加载精灵帧
              bundle.load(assetPath, SpriteFrame, function (err, spriteFrame) {
                if (err) {
                  console.error("Failed to load sprite frame: " + assetPath + " from bundle: " + bundleName, err);
                  return;
                }
                if (spriteFrame) {
                  _this2.iconSprite.spriteFrame = spriteFrame;
                } else {
                  console.error("Failed to get sprite frame: " + assetPath + " from bundle: " + bundleName);
                }
              });
            });
          }

          // 更新购买按钮状态
          this.updateBuyButtonState();
        }

        /**
         * 更新购买按钮状态
         */;
        _proto.updateBuyButtonState = function updateBuyButtonState() {
          if (!this.buyButton || !this.itemData) {
            return;
          }

          // 检查购买限制
          if (this.itemData.limit !== -1 && this.itemData.purchased >= this.itemData.limit) {
            // 已达到购买限制
            this.buyButton.interactable = false;
            return;
          }
        }

        /**
         * 商品项点击事件（显示详情）
         */;
        _proto.onItemClick = function onItemClick() {
          if (this.itemData && this.onDetailClick) {
            this.onDetailClick(this.itemData.id);
          }
        }

        /**
         * 购买按钮点击事件
         */;
        _proto.onBuyButtonClick = function onBuyButtonClick() {
          if (this.itemData && this.onBuyClick) {
            this.onBuyClick(this.itemData.id);
          }
        }

        /**
         * 获取商品数据
         */;
        _proto.getItemData = function getItemData() {
          return this.itemData;
        };
        _proto.onDestroy = function onDestroy() {
          // 移除按钮事件
          if (this.buyButton && this.buyButton.node) {
            this.buyButton.node.off(Button.EventType.CLICK, this.onBuyButtonClick, this);
          }

          // 移除商品项点击事件
          this.node.off(Node.EventType.TOUCH_END, this.onItemClick, this);
        };
        return ShopItemUI;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "iconSprite", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "nameLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "descLabel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "priceLabel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "buyButton", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "specialMarkNode", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "specialPriceLabel", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "originalPriceLabel", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ShopManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './CoinManager.ts', './BagManager.ts', './ShopConfig.ts'], function (exports) {
  var _createForOfIteratorHelperLoose, _extends, _createClass, cclegacy, _decorator, sys, CoinManager, BagManager, ShopConfig;
  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _extends = module.extends;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      sys = module.sys;
    }, function (module) {
      CoinManager = module.default;
    }, function (module) {
      BagManager = module.BagManager;
    }, function (module) {
      ShopConfig = module.ShopConfig;
    }],
    execute: function () {
      cclegacy._RF.push({}, "c479bN0kH9Lm6MILA/6tzxz", "ShopManager", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /**
       * 商店商品类型枚举
       */
      var ShopItemType = exports('ShopItemType', /*#__PURE__*/function (ShopItemType) {
        ShopItemType["ITEM"] = "item";
        ShopItemType["COIN"] = "coin";
        ShopItemType["SPECIAL"] = "special";
        return ShopItemType;
      }({}));

      /**
       * 商店商品接口
       */

      /**
       * 商店管理器
       * 管理商店商品、购买等功能
       */
      var ShopManager = exports('ShopManager', /*#__PURE__*/function () {
        /**
         * 私有构造函数
         */
        function ShopManager() {
          // 商品列表
          this._items = new Map();
          // 特价商品列表
          this._specialItems = new Map();
          // 购买记录
          this._purchaseRecords = [];
          // 购买回调
          this._purchaseCallbacks = [];
          // 上次刷新时间
          this._lastRefreshTime = 0;
          // 刷新间隔（毫秒）
          this._refreshInterval = 24 * 60 * 60 * 1000;
          // 24小时
          // 刷新回调
          this._refreshCallbacks = [];
          this.init();
        }

        /**
         * 初始化商店管理器
         */
        var _proto = ShopManager.prototype;
        _proto.init = function init() {
          this.loadShopData();
          this.checkRefresh();
        }

        /**
         * 加载商店数据
         */;
        _proto.loadShopData = function loadShopData() {
          try {
            // 加载商品数据
            var itemsData = sys.localStorage.getItem('shop_items');
            if (itemsData) {
              var itemsArray = JSON.parse(itemsData);
              this._items = new Map();
              for (var _iterator = _createForOfIteratorHelperLoose(itemsArray), _step; !(_step = _iterator()).done;) {
                var _item = _step.value;
                this._items.set(_item.id, _item);
              }
            } else {
              // 如果没有数据，初始化默认商品
              this.initDefaultItems();
            }

            // 加载特价商品数据
            var specialItemsData = sys.localStorage.getItem('shop_special_items');
            if (specialItemsData) {
              var specialItemsArray = JSON.parse(specialItemsData);
              this._specialItems = new Map();
              for (var _iterator2 = _createForOfIteratorHelperLoose(specialItemsArray), _step2; !(_step2 = _iterator2()).done;) {
                var _item2 = _step2.value;
                this._specialItems.set(_item2.id, _item2);
              }
            }

            // 加载购买记录
            var recordsData = sys.localStorage.getItem('shop_purchase_records');
            if (recordsData) {
              this._purchaseRecords = JSON.parse(recordsData);
            }

            // 加载上次刷新时间
            var lastRefreshTime = sys.localStorage.getItem('shop_last_refresh_time');
            if (lastRefreshTime) {
              this._lastRefreshTime = parseInt(lastRefreshTime);
            }
          } catch (error) {
            console.error('加载商店数据失败:', error);
            this.initDefaultItems();
          }
        }

        /**
         * 初始化默认商品
         */;
        _proto.initDefaultItems = function initDefaultItems() {
          // 从配置中加载商品
          var defaultItems = ShopConfig.getAllItems();
          for (var _iterator3 = _createForOfIteratorHelperLoose(defaultItems), _step3; !(_step3 = _iterator3()).done;) {
            var _item3 = _step3.value;
            this._items.set(_item3.id, _item3);
          }

          // 保存数据
          this.saveShopData();
        }

        /**
         * 保存商店数据
         */;
        _proto.saveShopData = function saveShopData() {
          try {
            // 保存商品数据
            var itemsArray = [];
            for (var _iterator4 = _createForOfIteratorHelperLoose(this._items.values()), _step4; !(_step4 = _iterator4()).done;) {
              var _item4 = _step4.value;
              itemsArray.push(_item4);
            }
            sys.localStorage.setItem('shop_items', JSON.stringify(itemsArray));

            // 保存特价商品数据
            var specialItemsArray = [];
            for (var _iterator5 = _createForOfIteratorHelperLoose(this._specialItems.values()), _step5; !(_step5 = _iterator5()).done;) {
              var _item5 = _step5.value;
              specialItemsArray.push(_item5);
            }
            sys.localStorage.setItem('shop_special_items', JSON.stringify(specialItemsArray));

            // 保存购买记录
            sys.localStorage.setItem('shop_purchase_records', JSON.stringify(this._purchaseRecords));

            // 保存上次刷新时间
            sys.localStorage.setItem('shop_last_refresh_time', this._lastRefreshTime.toString());
          } catch (error) {
            console.error('保存商店数据失败:', error);
          }
        }

        /**
         * 检查是否需要刷新
         */;
        _proto.checkRefresh = function checkRefresh() {
          var now = Date.now();
          if (now - this._lastRefreshTime > this._refreshInterval) {
            this.refreshShop();
          }
        }

        /**
         * 添加商品
         */;
        _proto.addItem = function addItem(item) {
          // 确保商品有必要的属性
          var newItem = _extends({}, item, {
            purchased: item.purchased || 0
          });
          this._items.set(item.id, newItem);
          this.saveShopData();
        }

        /**
         * 获取商品
         */;
        _proto.getItem = function getItem(id) {
          return this._items.get(id) || null;
        }

        /**
         * 获取所有商品
         */;
        _proto.getAllItems = function getAllItems() {
          var items = [];
          for (var _iterator6 = _createForOfIteratorHelperLoose(this._items.values()), _step6; !(_step6 = _iterator6()).done;) {
            var _item6 = _step6.value;
            items.push(_item6);
          }
          return items;
        }

        /**
         * 获取特价商品
         */;
        _proto.getSpecialItems = function getSpecialItems() {
          var items = [];
          for (var _iterator7 = _createForOfIteratorHelperLoose(this._specialItems.values()), _step7; !(_step7 = _iterator7()).done;) {
            var _item7 = _step7.value;
            items.push(_item7);
          }
          return items;
        }

        /**
         * 刷新商店
         */;
        _proto.refreshShop = function refreshShop(force) {
          if (force === void 0) {
            force = false;
          }
          // 检查是否可以刷新
          var now = Date.now();
          if (!force && now - this._lastRefreshTime < this._refreshInterval) {
            console.log('商店刷新冷却中，还需等待:', (this._refreshInterval - (now - this._lastRefreshTime)) / 1000, '秒');
            return false;
          }

          // 清空特价商品
          this._specialItems.clear();

          // 随机选择2-3个商品作为特价商品
          // const itemsArray = Array.from(this._items.values());
          // const specialCount = Math.floor(Math.random() * 2) + 2; // 2-3个

          // for (let i = 0; i < specialCount; i++) {
          //     if (itemsArray.length === 0) break;

          //     const randomIndex = Math.floor(Math.random() * itemsArray.length);
          //     const item = itemsArray[randomIndex];

          //     // 创建特价商品（价格为原价的70%-90%）
          //     const specialItem: ShopItem = {
          //         ...item,
          //         // isSpecial: true,
          //         // specialPrice: Math.floor(item.price * (0.7 + Math.random() * 0.2))
          //     };

          //     this._specialItems.set(item.id, specialItem);
          //     itemsArray.splice(randomIndex, 1);
          // }

          // 更新刷新时间
          this._lastRefreshTime = now;

          // 保存数据
          this.saveShopData();
          console.log('商店已刷新');

          // 触发刷新回调
          this.triggerRefreshCallbacks();
          return true;
        }

        /**
         * 触发刷新回调
         */;
        _proto.triggerRefreshCallbacks = function triggerRefreshCallbacks() {
          for (var _iterator8 = _createForOfIteratorHelperLoose(this._refreshCallbacks), _step8; !(_step8 = _iterator8()).done;) {
            var callback = _step8.value;
            try {
              callback();
            } catch (e) {
              console.error('执行刷新回调失败:', e);
            }
          }
        }

        /**
         * 注册刷新回调
         */;
        _proto.registerRefreshCallback = function registerRefreshCallback(callback) {
          if (this._refreshCallbacks.indexOf(callback) === -1) {
            this._refreshCallbacks.push(callback);
          }
        }

        /**
         * 取消注册刷新回调
         */;
        _proto.unregisterRefreshCallback = function unregisterRefreshCallback(callback) {
          var index = this._refreshCallbacks.indexOf(callback);
          if (index !== -1) {
            this._refreshCallbacks.splice(index, 1);
          }
        }

        /**
         * 购买商品
         */;
        _proto.purchaseItem = function purchaseItem(itemId, callback) {
          // 获取商品
          var item = this._items.get(itemId);
          if (!item) {
            var _error = '商品不存在: ' + itemId;
            console.error(_error);
            this.triggerPurchaseCallback(false, undefined, _error, callback);
            return false;
          }

          // 检查是否为特价商品
          var specialItem = this._specialItems.get(itemId);
          var price = specialItem ? specialItem.specialPrice : item.price;

          // 检查购买限制
          if (item.limit !== -1 && item.purchased >= item.limit) {
            var _error2 = '已达到购买限制: ' + itemId;
            console.error(_error2);
            this.triggerPurchaseCallback(false, item, _error2, callback);
            return false;
          }

          // 检查金币是否足够
          if (CoinManager.getInstance().getCurrentCoin() < price) {
            var _error3 = '金币不足，需要: ' + price + '，当前: ' + CoinManager.getInstance().getCurrentCoin();
            console.error(_error3);
            this.triggerPurchaseCallback(false, item, _error3, callback);
            return false;
          }

          // 扣除金币
          var coinDeductSuccess = CoinManager.getInstance().subtractCoin(price, 'shop_purchase');
          if (!coinDeductSuccess) {
            var _error4 = '扣除金币失败';
            console.error(_error4);
            this.triggerPurchaseCallback(false, item, _error4, callback);
            return false;
          }

          // 发放商品
          var deliverySuccess = this.deliverItem(item);
          if (!deliverySuccess) {
            // 如果发放失败，返还金币
            CoinManager.getInstance().addCoin(price, 'shop_purchase_refund');
            var _error5 = '发放商品失败';
            console.error(_error5);
            this.triggerPurchaseCallback(false, item, _error5, callback);
            return false;
          }

          // 更新购买记录
          this._purchaseRecords.push({
            itemId: itemId,
            purchaseTime: Date.now(),
            price: price
          });

          // 更新已购买数量
          item.purchased = (item.purchased || 0) + 1;

          // 保存数据
          this.saveShopData();
          console.log('购买成功:', item.name);
          this.triggerPurchaseCallback(true, item, undefined, callback);
          return true;
        }

        /**
         * 触发购买回调
         */;
        _proto.triggerPurchaseCallback = function triggerPurchaseCallback(success, item, error, callback) {
          // 调用传入的回调
          if (callback) {
            callback(success, item, error);
          }

          // 触发所有注册的回调
          for (var _iterator9 = _createForOfIteratorHelperLoose(this._purchaseCallbacks), _step9; !(_step9 = _iterator9()).done;) {
            var cb = _step9.value;
            try {
              cb(success, item, error);
            } catch (e) {
              console.error('执行购买回调失败:', e);
            }
          }
        }

        /**
         * 注册购买回调
         */;
        _proto.registerPurchaseCallback = function registerPurchaseCallback(callback) {
          if (this._purchaseCallbacks.indexOf(callback) === -1) {
            this._purchaseCallbacks.push(callback);
          }
        }

        /**
         * 取消注册购买回调
         */;
        _proto.unregisterPurchaseCallback = function unregisterPurchaseCallback(callback) {
          var index = this._purchaseCallbacks.indexOf(callback);
          if (index !== -1) {
            this._purchaseCallbacks.splice(index, 1);
          }
        }

        /**
         * 发放商品
         */;
        _proto.deliverItem = function deliverItem(item) {
          try {
            switch (item.type) {
              case ShopItemType.ITEM:
                // 添加物品到背包
                if (item.itemId && item.count) {
                  BagManager.getInstance().addItemByShopItem(item);
                }
                break;
              case ShopItemType.COIN:
                // 添加金币
                if (item.coinAmount) {
                  CoinManager.getInstance().addCoin(item.coinAmount, 'shop_purchase');
                }
                break;
              case ShopItemType.SPECIAL:
                // 特殊商品处理
                this.handleSpecialItem(item);
                break;
              default:
                console.error('未知的商品类型:', item.type);
                return false;
            }
            return true;
          } catch (error) {
            console.error('发放商品失败:', error);
            return false;
          }
        }

        /**
         * 处理特殊商品
         */;
        _proto.handleSpecialItem = function handleSpecialItem(item) {
          // 根据特殊类型处理
          switch (item.specialType) {
            case 'double_coin':
              // 双倍金币效果（示例）
              console.log('获得双倍金币效果');
              break;
            case 'extra_life':
              // 额外生命效果（示例）
              console.log('获得额外生命效果');
              break;
            default:
              console.warn('未知的特殊商品类型:', item.specialType);
              break;
          }
        }

        /**
         * 获取购买记录
         */;
        _proto.getPurchaseRecords = function getPurchaseRecords() {
          return [].concat(this._purchaseRecords);
        }

        /**
         * 获取下次刷新时间
         */;
        _proto.getNextRefreshTime = function getNextRefreshTime() {
          return this._lastRefreshTime + this._refreshInterval;
        }

        /**
         * 获取距离下次刷新的剩余时间（毫秒）
         */;
        _proto.getRefreshRemainingTime = function getRefreshRemainingTime() {
          var nextRefreshTime = this.getNextRefreshTime();
          var now = Date.now();
          return Math.max(0, nextRefreshTime - now);
        }

        /**
         * 清空数据（用于测试或重置）
         */;
        _proto.clearData = function clearData() {
          this._items.clear();
          this._specialItems.clear();
          this._purchaseRecords = [];
          this._lastRefreshTime = 0;

          // 清空本地存储
          sys.localStorage.removeItem('shop_items');
          sys.localStorage.removeItem('shop_special_items');
          sys.localStorage.removeItem('shop_purchase_records');
          sys.localStorage.removeItem('shop_last_refresh_time');

          // 重新初始化
          this.initDefaultItems();
        };
        _createClass(ShopManager, null, [{
          key: "instance",
          get:
          /**
           * 获取单例
           */
          function get() {
            if (!ShopManager._instance) {
              ShopManager._instance = new ShopManager();
            }
            return ShopManager._instance;
          }
        }]);
        return ShopManager;
      }());
      ShopManager._instance = null;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ShopUI.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseUI.ts', './UILayer.ts', './ShopManager.ts', './ShopItemUI.ts', './CoinManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Label, ScrollView, Prefab, UITransform, Size, instantiate, Vec3, BaseUI, UILayer, ShopManager, ShopItemUI, CoinManager;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Label = module.Label;
      ScrollView = module.ScrollView;
      Prefab = module.Prefab;
      UITransform = module.UITransform;
      Size = module.Size;
      instantiate = module.instantiate;
      Vec3 = module.Vec3;
    }, function (module) {
      BaseUI = module.BaseUI;
    }, function (module) {
      UILayer = module.UILayer;
    }, function (module) {
      ShopManager = module.ShopManager;
    }, function (module) {
      ShopItemUI = module.ShopItemUI;
    }, function (module) {
      CoinManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _class3;
      cclegacy._RF.push({}, "bbfbfIRd6dPYIcUjzjxxn22", "ShopUI", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /**
       * 商店UI界面
       * 用于展示商店中的商品
       */
      var ShopUI = exports('ShopUI', (_dec = ccclass('ShopUI'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(ScrollView), _dec7 = property(Prefab), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_BaseUI) {
        _inheritsLoose(ShopUI, _BaseUI);
        function ShopUI() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BaseUI.call.apply(_BaseUI, [this].concat(args)) || this;
          // 商品列表节点
          _initializerDefineProperty(_this, "itemList", _descriptor, _assertThisInitialized(_this));
          // 关闭按钮
          _initializerDefineProperty(_this, "closeButton", _descriptor2, _assertThisInitialized(_this));
          // 余额标签
          _initializerDefineProperty(_this, "balanceLabel", _descriptor3, _assertThisInitialized(_this));
          // 提示标签
          _initializerDefineProperty(_this, "tipsLabel", _descriptor4, _assertThisInitialized(_this));
          // 滚动视图
          _initializerDefineProperty(_this, "scrollView", _descriptor5, _assertThisInitialized(_this));
          // 商品预制体
          _initializerDefineProperty(_this, "shopItemPrefab", _descriptor6, _assertThisInitialized(_this));
          // 内容节点
          _this.contentNode = null;
          // 商品项UI数组
          _this.shopItemUIs = [];
          return _this;
        }
        var _proto = ShopUI.prototype;
        _proto.start = function start() {
          // super.onLoad();

          // 绑定按钮事件
          if (this.closeButton) {
            this.closeButton.on(Node.EventType.TOUCH_END, this.onCloseClick, this);
          }

          // 获取滚动视图的内容节点
          if (this.scrollView) {
            this.contentNode = this.scrollView.content;
          }
          // 初始化商店数据
          this.initShopUI();
        }

        /**
         * 初始化商店界面
         */;
        _proto.initShopUI = function initShopUI() {
          // 更新余额显示
          this.updateBalanceDisplay();

          // 清空现有商品列表
          this.clearShopItems();

          // 从ShopManager获取商店数据
          var shopItems = ShopManager.instance.getAllItems();

          // 如果没有内容节点或商品预制体，则无法生成商品列表
          if (!this.contentNode || !this.shopItemPrefab) {
            console.error('无法生成商品列表：缺少内容节点或商品预制体');
            return;
          }

          // 根据商店数据生成商品列表
          this.generateShopItems(shopItems);
          console.log('ShopUI initialized');
        }

        /**
         * 更新余额显示
         */;
        _proto.updateBalanceDisplay = function updateBalanceDisplay() {
          if (this.balanceLabel) {
            var currentCoin = CoinManager.getInstance().getCurrentCoin();
            this.balanceLabel.string = "\u5F53\u524D\u4F59\u989D: " + currentCoin;
          }
        }

        /**
         * 金币变化事件处理
         */;
        _proto.onCoinChanged = function onCoinChanged(eventParam) {
          // 更新余额显示
          this.updateBalanceDisplay();

          // 更新所有商品项的购买按钮状态
          this.updateAllShopItemStates();
        }

        /**
         * 清空商品列表
         */;
        _proto.clearShopItems = function clearShopItems() {
          if (!this.contentNode) return;

          // 销毁所有商品项
          this.shopItemUIs.forEach(function (shopItemUI) {
            if (shopItemUI && shopItemUI.node) {
              shopItemUI.node.destroy();
            }
          });

          // 清空数组
          this.shopItemUIs = [];

          // 重置内容节点高度
          var contentTransform = this.contentNode.getComponent(UITransform);
          if (contentTransform) {
            contentTransform.setContentSize(new Size(contentTransform.width, 0));
          }
        }

        /**
         * 生成商品列表
         * @param shopItems 商品数据数组
         */;
        _proto.generateShopItems = function generateShopItems(shopItems) {
          var _this2 = this;
          if (!this.contentNode || !this.shopItemPrefab) return;

          // 商品项高度
          var itemHeight = 100;

          // 计算内容节点高度
          var contentHeight = shopItems.length * itemHeight + (shopItems.length - 1);

          // 更新内容节点高度
          var contentTransform = this.contentNode.getComponent(UITransform);
          if (contentTransform) {
            contentTransform.setContentSize(new Size(contentTransform.width, contentHeight));
          }

          // 生成商品项
          shopItems.forEach(function (item, index) {
            _this2.createShopItem(item, index);
          });
        }

        /**
         * 创建单个商品项
         * @param item 商品数据
         * @param index 索引位置
         */;
        _proto.createShopItem = function createShopItem(item, index) {
          var _this3 = this;
          if (!this.contentNode || !this.shopItemPrefab) return;

          // 实例化商品预制体
          var shopItemNode = instantiate(this.shopItemPrefab);
          var gapHeight = 40;

          // 设置位置
          var itemHeight = 100;
          var yPos = -index * itemHeight - itemHeight / 2 - gapHeight * index;
          shopItemNode.setPosition(new Vec3(0, yPos, 0));

          // 添加到内容节点
          this.contentNode.addChild(shopItemNode);

          // 获取ShopItemUI组件
          var shopItemUI = shopItemNode.getComponent(ShopItemUI);
          if (shopItemUI) {
            // 初始化商品项
            shopItemUI.init(item,
            // 详情点击回调
            function (itemId) {
              console.log("\u67E5\u770B\u5546\u54C1\u8BE6\u60C5: " + itemId);
            },
            // 购买点击回调
            function (itemId) {
              _this3.buyProduct(itemId);
            });

            // 添加到数组
            this.shopItemUIs.push(shopItemUI);
          }
        }

        /**
         * 更新所有商品项的状态
         */;
        _proto.updateAllShopItemStates = function updateAllShopItemStates() {
          var _this4 = this;
          this.shopItemUIs.forEach(function (shopItemUI) {
            if (shopItemUI) {
              // 调用ShopItemUI的更新状态方法
              // 这里需要ShopItemUI提供一个更新状态的方法
              // 由于ShopItemUI没有提供，我们可以通过重新初始化来更新状态
              var itemData = shopItemUI.getItemData();
              if (itemData) {
                shopItemUI.init(itemData, function (itemId) {
                  console.log("\u67E5\u770B\u5546\u54C1\u8BE6\u60C5: " + itemId);
                }, function (itemId) {
                  _this4.buyProduct(itemId);
                });
              }
            }
          });
        }

        /**
         * 购买商品
         * @param productId 商品ID
         */;
        _proto.buyProduct = function buyProduct(productId) {
          var _this5 = this;
          // 获取商品信息
          var item = ShopManager.instance.getItem(productId);
          if (!item) {
            console.error("\u5546\u54C1\u4E0D\u5B58\u5728: " + productId);
            return;
          }

          // 获取当前金币
          var currentCoin = CoinManager.getInstance().getCurrentCoin();

          // 获取商品价格（考虑特价）
          var specialItem = ShopManager.instance.getSpecialItems().find(function (specialItem) {
            return specialItem.id === productId;
          });
          var price = specialItem ? specialItem.specialPrice : item.price;

          // 检查金币是否足够
          if (currentCoin < price) {
            // 显示余额不足提示
            this.showInsufficientBalanceTips(price);
            return;
          }

          // 调用ShopManager购买商品
          ShopManager.instance.purchaseItem(productId, function (success, purchasedItem, error) {
            if (success) {
              console.log("\u8D2D\u4E70\u6210\u529F: " + (purchasedItem == null ? void 0 : purchasedItem.name));

              // 刷新商店界面
              _this5.initShopUI();
            } else {
              console.error("\u8D2D\u4E70\u5931\u8D25: " + error);

              // 显示错误提示
              _this5.showPurchaseErrorTips(error || '购买失败，请稍后重试');
            }
          });
        }

        /**
         * 显示余额不足提示
         * @param requiredPrice 需要的金币数量
         */;
        _proto.showInsufficientBalanceTips = function showInsufficientBalanceTips(requiredPrice) {
          var _this6 = this;
          if (this.tipsLabel) {
            var currentCoin = CoinManager.getInstance().getCurrentCoin();
            this.tipsLabel.string = "\u4F59\u989D\u4E0D\u8DB3\uFF01\u9700\u8981 " + requiredPrice + " \u91D1\u5E01\uFF0C\u5F53\u524D\u53EA\u6709 " + currentCoin + " \u91D1\u5E01";
            this.tipsLabel.node.active = true;

            // 3秒后隐藏提示
            this.scheduleOnce(function () {
              if (_this6.tipsLabel) {
                _this6.tipsLabel.node.active = false;
              }
            }, 3);
          }
        }

        /**
         * 显示购买错误提示
         * @param errorMessage 错误信息
         */;
        _proto.showPurchaseErrorTips = function showPurchaseErrorTips(errorMessage) {
          var _this7 = this;
          if (this.tipsLabel) {
            this.tipsLabel.string = errorMessage;
            this.tipsLabel.node.active = true;

            // 3秒后隐藏提示
            this.scheduleOnce(function () {
              if (_this7.tipsLabel) {
                _this7.tipsLabel.node.active = false;
              }
            }, 3);
          }
        }

        /**
         * 关闭按钮点击事件
         */;
        _proto.onCloseClick = function onCloseClick() {
          // 发送返回主界面事件到场景节点
          var scene = this.node.scene;
          if (scene) {
            scene.emit('BACK_TO_MAIN_SCENE');
            console.log('ShopUI: 已发送BACK_TO_MAIN_SCENE事件到场景节点');
          } else {
            console.warn('ShopUI: 无法获取场景节点，事件发送失败');
          }

          // 关闭界面
          this.hide();
        };
        _proto.onDestroy = function onDestroy() {
          // 移除按钮事件
          if (this.closeButton) {
            this.closeButton.off(Node.EventType.TOUCH_END, this.onCloseClick, this);
          }

          // 移除金币变化事件监听器
          CoinManager.getInstance().removeEventListener(CoinManager.getInstance().constructor['CoinEventType'].COIN_ADD, this.onCoinChanged.bind(this));
          CoinManager.getInstance().removeEventListener(CoinManager.getInstance().constructor['CoinEventType'].COIN_SUBTRACT, this.onCoinChanged.bind(this));

          // 清空商品列表
          this.clearShopItems();
          _BaseUI.prototype.onDestroy.call(this);
        };
        return ShopUI;
      }(BaseUI), _class3.viewLayer = UILayer.UI, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "itemList", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "closeButton", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "balanceLabel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "tipsLabel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "scrollView", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "shopItemPrefab", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SignManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './CoinManager.ts', './ToastManager.ts'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, _decorator, sys, Component, CoinManager, ToastManager;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      sys = module.sys;
      Component = module.Component;
    }, function (module) {
      CoinManager = module.default;
    }, function (module) {
      ToastManager = module.ToastManager;
    }],
    execute: function () {
      var _dec, _class, _class2;
      cclegacy._RF.push({}, "da6de4EtRVOyYsuaIz2hcWE", "SignManager", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /**
       * 签到管理器
       * 负责处理签到相关的逻辑，包括自动签到、奖励计算等
       */
      var SignManager = exports('SignManager', (_dec = ccclass('SignManager'), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SignManager, _Component);
        function SignManager() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          // 签到数据结构
          _this.signData = null;
          return _this;
        }
        var _proto = SignManager.prototype;
        _proto.init = function init() {
          this.loadSignData();
        }

        /**
         * 加载签到数据
         */;
        _proto.loadSignData = function loadSignData() {
          try {
            var dataStr = sys.localStorage.getItem(SignManager.SIGN_DATA_KEY);
            if (dataStr) {
              this.signData = JSON.parse(dataStr);
            } else {
              // 初始化签到数据
              this.signData = {
                lastSignDate: '',
                consecutiveDays: 0,
                signHistory: [false, false, false, false, false, false, false],
                totalSignDays: 0
              };
              this.saveSignData();
            }
          } catch (error) {
            console.error('加载签到数据失败:', error);
            // 初始化签到数据
            this.signData = {
              lastSignDate: '',
              consecutiveDays: 0,
              signHistory: [false, false, false, false, false, false, false],
              totalSignDays: 0
            };
            this.saveSignData();
          }
        }

        /**
         * 保存签到数据
         */;
        _proto.saveSignData = function saveSignData() {
          try {
            sys.localStorage.setItem(SignManager.SIGN_DATA_KEY, JSON.stringify(this.signData));
          } catch (error) {
            console.error('保存签到数据失败:', error);
          }
        }

        /**
         * 检查是否可以签到
         * @returns 是否可以签到
         */;
        _proto.canSign = function canSign() {
          var today = this.getTodayDateString();
          return this.signData.lastSignDate !== today;
        }

        /**
         * 执行签到
         * @returns 签到结果，包含获得的金币数和连续天数
         */;
        _proto.doSign = function doSign() {
          if (!this.canSign()) {
            return {
              coins: 0,
              consecutiveDays: this.signData.consecutiveDays
            };
          }
          var today = this.getTodayDateString();
          var yesterday = this.getYesterdayDateString();

          // 检查是否连续签到
          if (this.signData.lastSignDate === yesterday) {
            // 连续签到
            this.signData.consecutiveDays++;
          } else {
            // 断签，重置连续天数
            this.signData.consecutiveDays = 1;
          }

          // 计算奖励
          var reward = 0;
          var dayIndex = (this.signData.consecutiveDays - 1) % 7;
          if (this.signData.consecutiveDays > 7) {
            // 超过7天，额外加50金币
            reward = SignManager.BASE_REWARDS[dayIndex] + SignManager.EXTRA_REWARD;
          } else {
            // 1-7天基础奖励
            reward = SignManager.BASE_REWARDS[dayIndex];
          }

          // 更新签到数据
          this.signData.lastSignDate = today;
          this.signData.totalSignDays++;

          // 更新最近7天签到记录
          this.updateSignHistory(dayIndex);

          // 保存数据
          this.saveSignData();

          // 添加金币
          CoinManager.getInstance().addCoin(reward, '签到奖励');
          return {
            coins: reward,
            consecutiveDays: this.signData.consecutiveDays
          };
        }

        /**
         * 更新最近7天签到记录
         * @param dayIndex 今天是第几天（0-6）
         */;
        _proto.updateSignHistory = function updateSignHistory(dayIndex) {
          // const today = new Date();
          // const todayIndex = today.getDay(); // 0是周日，1是周一...6是周六

          // 创建新的签到记录数组
          var newHistory = [false, false, false, false, false, false, false];
          newHistory[dayIndex] = true;

          // 将之前的签到记录前移一天
          for (var i = 0; i <= dayIndex; i++) {
            newHistory[i] = true;
          }
          this.signData.signHistory = newHistory;
        }

        /**
         * 获取最近7天签到记录
         * @returns 最近7天签到记录数组
         */;
        _proto.getRecentSignHistory = function getRecentSignHistory() {
          return [].concat(this.signData.signHistory);
        }

        /**
         * 获取每日奖励配置
         * @returns 每日奖励配置数组
         */;
        _proto.getDailyRewards = function getDailyRewards() {
          var rewards = [].concat(SignManager.BASE_REWARDS);

          // 如果连续签到超过7天，则每个奖励都加上额外奖励
          if (this.signData.consecutiveDays > 7) {
            for (var i = 0; i < rewards.length; i++) {
              rewards[i] += SignManager.EXTRA_REWARD;
            }
          }
          return rewards;
        }

        /**
         * 获取连续签到天数
         * @returns 连续签到天数
         */;
        _proto.getConsecutiveDays = function getConsecutiveDays() {
          return this.signData.consecutiveDays;
        }

        /**
         * 获取总签到天数
         * @returns 总签到天数
         */;
        _proto.getTotalSignDays = function getTotalSignDays() {
          return this.signData.totalSignDays;
        }

        /**
         * 自动签到
         * 在游戏启动时调用，检查是否需要自动签到
         */;
        _proto.autoSign = function autoSign() {
          if (this.canSign()) {
            var result = this.doSign();
            if (result.coins > 0) {
              // 显示自动签到提示
              try {
                ToastManager.getInstance().showMessage("\u7B7E\u5230\u6210\u529F\uFF01\u8FDE\u7EED\u7B7E\u5230" + result.consecutiveDays + "\u5929\uFF0C\u83B7\u5F97" + result.coins + "\u91D1\u5E01", 5);
              } catch (error) {
                console.error('显示自动签到提示失败:', error);
                // 即使Toast显示失败，签到仍然成功，只是不显示提示
                console.log("\u81EA\u52A8\u7B7E\u5230\u6210\u529F\uFF01\u8FDE\u7EED\u7B7E\u5230" + result.consecutiveDays + "\u5929\uFF0C\u83B7\u5F97" + result.coins + "\u91D1\u5E01");
              }
            }
          }
        }

        /**
         * 自定义字符串填充函数，替代padStart
         */;
        _proto.padStart = function padStart(str, targetLength, padString) {
          targetLength = targetLength >> 0; // 转换为整数
          str = String(str);
          if (str.length >= targetLength) {
            return str;
          }
          targetLength = targetLength - str.length;
          if (targetLength > padString.length) {
            padString += padString.repeat(Math.ceil(targetLength / padString.length));
          }
          return padString.slice(0, targetLength) + str;
        }

        /**
         * 格式化日期为YYYY-MM-DD
         */;
        _proto.formatDate = function formatDate(date) {
          var year = date.getFullYear();
          var month = this.padStart(String(date.getMonth() + 1), 2, '0');
          var day = this.padStart(String(date.getDate()), 2, '0');
          return year + "-" + month + "-" + day;
        }

        /**
         * 获取今天的日期字符串
         * @returns 今天的日期字符串，格式为YYYY-MM-DD
         */;
        _proto.getTodayDateString = function getTodayDateString() {
          var today = new Date();
          return this.formatDate(today);
        }

        /**
         * 获取昨天的日期字符串
         * @returns 昨天的日期字符串，格式为YYYY-MM-DD
         */;
        _proto.getYesterdayDateString = function getYesterdayDateString() {
          var yesterday = new Date();
          yesterday.setDate(yesterday.getDate() - 1);
          return this.formatDate(yesterday);
        };
        _createClass(SignManager, null, [{
          key: "instance",
          get: function get() {
            if (!this._instance) {
              this._instance = new SignManager();
              this._instance.init();
            }
            return this._instance;
          }
        }]);
        return SignManager;
      }(Component), _class2._instance = null, _class2.SIGN_DATA_KEY = 'sign_data', _class2.BASE_REWARDS = [10, 20, 30, 40, 50, 60, 70], _class2.EXTRA_REWARD = 50, _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SignUI.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseUI.ts', './SignManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Button, Label, BaseUI, SignManager;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Button = module.Button;
      Label = module.Label;
    }, function (module) {
      BaseUI = module.BaseUI;
    }, function (module) {
      SignManager = module.SignManager;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "0624a47vO1M8b2h1DRY4Q5e", "SignUI", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /**
       * 签到界面
       * 显示最近7天的签到记录和奖励信息
       */
      var SignUI = exports('SignUI', (_dec = ccclass('SignUI'), _dec2 = property(Node), _dec3 = property(Button), _dec4 = property(Button), _dec5 = property([Label]), _dec6 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_BaseUI) {
        _inheritsLoose(SignUI, _BaseUI);
        function SignUI() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BaseUI.call.apply(_BaseUI, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "ruleNode", _descriptor, _assertThisInitialized(_this));
          // 规则说明节点
          _initializerDefineProperty(_this, "closeButton", _descriptor2, _assertThisInitialized(_this));
          // 关闭按钮
          _initializerDefineProperty(_this, "ruleButton", _descriptor3, _assertThisInitialized(_this));
          // 规则按钮
          _initializerDefineProperty(_this, "rewardLabels", _descriptor4, _assertThisInitialized(_this));
          // SignItem-001～007的奖励标签
          _initializerDefineProperty(_this, "continusDayLabel", _descriptor5, _assertThisInitialized(_this));
          // 连续签到天数标签
          _this.signItems = [];
          return _this;
        }
        var _proto = SignUI.prototype;
        // 签到项目节点数组
        _proto.onLoad = function onLoad() {
          // 初始化签到项目节点
          this.initSignItems();

          // 绑定按钮事件
          this.bindButtonEvents();

          // 更新签到界面显示
          this.updateSignUI();
        }

        /**
         * 自定义字符串填充函数，替代padStart
         */;
        _proto.padStart = function padStart(str, targetLength, padString) {
          targetLength = targetLength >> 0; // 转换为整数
          str = String(str);
          if (str.length >= targetLength) {
            return str;
          }
          targetLength = targetLength - str.length;
          if (targetLength > padString.length) {
            padString += padString.repeat(Math.ceil(targetLength / padString.length));
          }
          return padString.slice(0, targetLength) + str;
        }

        /**
         * 初始化签到项目节点
         */;
        _proto.initSignItems = function initSignItems() {
          // 查找所有SignItem节点
          for (var i = 1; i <= 7; i++) {
            var itemName = "SignItem-" + this.padStart(String(i), 3, '0');
            var itemNode = this.node.getChildByName('itemNode').getChildByName(itemName);
            if (itemNode) {
              this.signItems.push(itemNode);
            }
          }
        }

        /**
         * 绑定按钮事件
         */;
        _proto.bindButtonEvents = function bindButtonEvents() {
          if (this.closeButton) {
            this.closeButton.node.on(Button.EventType.CLICK, this.onCloseClick, this);
          }
          if (this.ruleButton) {
            this.ruleButton.node.on(Button.EventType.CLICK, this.onRuleClick, this);
          }
          if (this.ruleNode) {
            // 使用多种事件类型确保点击时能够正确隐藏
            this.ruleNode.on(Node.EventType.TOUCH_END, this.onRuleNodeClick, this);
          }
        }

        /**
         * 更新签到界面显示
         */;
        _proto.updateSignUI = function updateSignUI() {
          // 获取签到历史记录
          var signHistory = SignManager.instance.getRecentSignHistory();

          // 获取每日奖励配置
          var dailyRewards = SignManager.instance.getDailyRewards();

          // 获取连续签到天数
          var consecutiveDays = SignManager.instance.getConsecutiveDays();

          // 更新连续签到天数显示
          if (this.continusDayLabel) {
            this.continusDayLabel.string = "\u5DF2\u8FDE\u7EED\u7B7E\u5230" + consecutiveDays + "\u5929";
          }

          // 更新每个签到项目的显示
          for (var i = 0; i < 7; i++) {
            if (i < this.signItems.length && i < this.rewardLabels.length) {
              var label = this.rewardLabels[i];
              var isSigned = signHistory[i];
              var reward = dailyRewards[i];
              if (label) {
                // 设置奖励文本
                label.string = reward + "\u91D1\u5E01";

                // 如果已签到，追加"\n已获得"文字
                if (isSigned) {
                  label.string += "\n已获得";
                }
              }
              console.log("SignUI: \u66F4\u65B0\u7B7E\u5230\u9879\u76EE" + i + "\uFF0C\u5956\u52B1" + reward + "\u91D1\u5E01\uFF0C\u5DF2\u7B7E\u5230" + isSigned + " " + label.string);
            }
          }
        }

        /**
         * 关闭按钮点击事件
         */;
        _proto.onCloseClick = function onCloseClick() {
          // 发送返回主界面事件到场景节点
          var scene = this.node.scene;
          if (scene) {
            scene.emit('BACK_TO_MAIN_SCENE');
            console.log('ShopUI: 已发送BACK_TO_MAIN_SCENE事件到场景节点');
          } else {
            console.warn('ShopUI: 无法获取场景节点，事件发送失败');
          }
          this.hide();
        }

        /**
         * 规则按钮点击事件
         */;
        _proto.onRuleClick = function onRuleClick() {
          if (this.ruleNode) {
            this.ruleNode.active = true;
          }
        }

        /**
         * 规则节点点击事件
         */;
        _proto.onRuleNodeClick = function onRuleNodeClick() {
          if (this.ruleNode) {
            this.ruleNode.active = false;
          }
        }

        /**
         * 显示签到界面
         */;
        _proto.show = function show() {
          _BaseUI.prototype.show.call(this);
          // 输出节点信息到控制台
          console.log('SignUI: 签到界面节点信息', this.node);
          console.log('SignUI: 节点名称', this.node.name);
          console.log('SignUI: 节点位置', this.node.position);
          console.log('SignUI: 节点是否激活', this.node.active);
          // 每次显示时更新界面数据
          this.updateSignUI();
        };
        _proto.onDestroy = function onDestroy() {
          // 移除所有事件监听
          if (this.closeButton) {
            this.closeButton.node.off(Button.EventType.CLICK, this.onCloseClick, this);
          }
          if (this.ruleButton) {
            this.ruleButton.node.off(Button.EventType.CLICK, this.onRuleClick, this);
          }
          if (this.ruleNode) {
            this.ruleNode.off(Node.EventType.TOUCH_END, this.onRuleNodeClick, this);
          }
          _BaseUI.prototype.onDestroy.call(this);
        };
        return SignUI;
      }(BaseUI), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "ruleNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "closeButton", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "ruleButton", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "rewardLabels", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "continusDayLabel", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SkillBase.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _asyncToGenerator, cclegacy;
  return {
    setters: [function (module) {
      _asyncToGenerator = module.asyncToGenerator;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "5f508ZAPZ5H0rMSj6h3CuIk", "SkillBase", undefined);
      /**
       * 技能类型枚举
       */
      var SkillType = exports('SkillType', /*#__PURE__*/function (SkillType) {
        SkillType["TUO_DAO_HUI_MA"] = "tuo_dao_hui_ma";
        SkillType["CAO_CHUAN_JIE_JIAN"] = "cao_chuan_jie_jian";
        SkillType["QIAN_KUN_NUO_YI"] = "qian_kun_nuo_yi";
        return SkillType;
      }({}));

      /**
       * 技能状态枚举
       */
      var SkillState = exports('SkillState', /*#__PURE__*/function (SkillState) {
        SkillState["READY"] = "ready";
        SkillState["ACTIVE"] = "active";
        SkillState["COOLDOWN"] = "cooldown";
        SkillState["DISABLED"] = "disabled";
        return SkillState;
      }({}));

      /**
       * 技能配置接口
       */

      /**
       * 技能数据接口
       */

      /**
       * 技能事件类型枚举
       */
      var SkillEventType = exports('SkillEventType', /*#__PURE__*/function (SkillEventType) {
        SkillEventType["SKILL_ACTIVATED"] = "skill_activated";
        SkillEventType["SKILL_EXECUTED"] = "skill_executed";
        SkillEventType["SKILL_COOLDOWN"] = "skill_cooldown";
        SkillEventType["SKILL_READY"] = "skill_ready";
        SkillEventType["SKILL_ERROR"] = "skill_error";
        return SkillEventType;
      }({}));

      /**
       * 技能事件接口
       */

      /**
       * 技能基类
       */
      var BaseSkill = exports('BaseSkill', /*#__PURE__*/function () {
        function BaseSkill(config) {
          this.id = void 0;
          this.config = void 0;
          this.data = void 0;
          this.config = config;
          this.data = {
            id: this.generateSkillId(),
            configId: config.id,
            state: SkillState.READY,
            lastUsedTime: 0,
            useCount: 0
          };
        }

        /**
         * 获取技能ID
         */
        var _proto = BaseSkill.prototype;
        _proto.getId = function getId() {
          return this.id;
        }

        /**
         * 获取技能配置
         */;
        _proto.getConfig = function getConfig() {
          return this.config;
        }

        /**
         * 获取技能数据
         */;
        _proto.getData = function getData() {
          return this.data;
        }

        /**
         * 获取技能状态
         */;
        _proto.getState = function getState() {
          return this.data.state;
        }

        /**
         * 检查技能是否可以使用
         */;
        _proto.canUse = function canUse() {
          var now = Date.now();
          var cooldownMs = this.config.cooldown * 1000;
          var timeSinceLastUse = now - this.data.lastUsedTime;
          return true;
          // return this.data.state === SkillState.READY && timeSinceLastUse >= cooldownMs;
        }

        /**
         * 获取冷却剩余时间（秒）
         */;
        _proto.getRemainingCooldown = function getRemainingCooldown() {
          var now = Date.now();
          var cooldownMs = this.config.cooldown * 1000;
          var timeSinceLastUse = now - this.data.lastUsedTime;
          var remainingMs = Math.max(0, cooldownMs - timeSinceLastUse);
          return remainingMs / 1000;
        }

        /**
         * 使用技能
         * @param params 使用参数
         * @returns 是否使用成功
         */;
        _proto.use = /*#__PURE__*/
        function () {
          var _use = _asyncToGenerator(function* (params) {
            if (!this.canUse()) {
              console.warn("\u6280\u80FD " + this.config.name + " \u5F53\u524D\u4E0D\u53EF\u4F7F\u7528\uFF0C\u72B6\u6001: " + this.data.state);
              return false;
            }
            try {
              // 更新状态为激活中
              this.data.state = SkillState.ACTIVE;

              // 执行技能效果
              var result = yield this.onExecute(params);
              if (result) {
                // 更新使用时间和次数
                this.data.lastUsedTime = Date.now();
                this.data.useCount++;

                // 更新状态为冷却中
                this.data.state = SkillState.COOLDOWN;
                console.log("\u6280\u80FD " + this.config.name + " \u4F7F\u7528\u6210\u529F");
                return true;
              } else {
                // 执行失败，恢复状态
                this.data.state = SkillState.READY;
                console.warn("\u6280\u80FD " + this.config.name + " \u6267\u884C\u5931\u8D25");
                return false;
              }
            } catch (error) {
              // 执行异常，恢复状态
              this.data.state = SkillState.READY;
              console.error("\u6280\u80FD " + this.config.name + " \u6267\u884C\u5F02\u5E38", error);
              return false;
            }
          });
          function use(_x) {
            return _use.apply(this, arguments);
          }
          return use;
        }()
        /**
         * 更新技能状态
         * @param deltaTime 增量时间（秒）
         */;

        _proto.update = function update(deltaTime) {
          if (this.data.state === SkillState.COOLDOWN) {
            var remainingCooldown = this.getRemainingCooldown();
            if (remainingCooldown <= 0) {
              this.data.state = SkillState.READY;
              console.log("\u6280\u80FD " + this.config.name + " \u51B7\u5374\u5B8C\u6210\uFF0C\u51C6\u5907\u5C31\u7EEA");
            }
          }
        }

        /**
         * 生成技能ID
         */;
        _proto.generateSkillId = function generateSkillId() {
          return "skill_" + this.config.id + "_" + Date.now() + "_" + Math.random().toString(36).substr(2, 9);
        }

        /**
         * 技能执行逻辑，子类需要实现
         * @param params 执行参数
         * @returns 是否执行成功
         */;
        /**
         * 技能激活前逻辑，子类可以重写
         * @param params 激活参数
         * @returns 是否可以激活
         */
        _proto.onBeforeActivate = function onBeforeActivate(params) {
          return true;
        }

        /**
         * 技能执行后逻辑，子类可以重写
         * @param params 执行参数
         * @param result 执行结果
         */;
        _proto.onAfterExecute = function onAfterExecute(params, result) {
          // 默认不做任何处理
        };
        return BaseSkill;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SkillManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './TuoDaoHuiMaSkill.ts', './CaoChuanJieJianSkill.ts', './QianKunNuoYiSkill.ts', './SkillBase.ts'], function (exports) {
  var _asyncToGenerator, _createForOfIteratorHelperLoose, cclegacy, sys, TuoDaoHuiMaSkill, CaoChuanJieJianSkill, QianKunNuoYiSkill, SkillType, SkillEventType;
  return {
    setters: [function (module) {
      _asyncToGenerator = module.asyncToGenerator;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      sys = module.sys;
    }, function (module) {
      TuoDaoHuiMaSkill = module.TuoDaoHuiMaSkill;
    }, function (module) {
      CaoChuanJieJianSkill = module.CaoChuanJieJianSkill;
    }, function (module) {
      QianKunNuoYiSkill = module.QianKunNuoYiSkill;
    }, function (module) {
      SkillType = module.SkillType;
      SkillEventType = module.SkillEventType;
    }],
    execute: function () {
      cclegacy._RF.push({}, "1b607LYc95Imru/+ulPOk/J", "SkillManager", undefined);
      /**
       * 技能管理器
       * 实现单例模式，管理游戏中的技能系统
       */
      var SkillManager = exports('SkillManager', /*#__PURE__*/function () {
        // 游戏UI引用
        /**
         * 获取SkillManager单例
         */
        SkillManager.getInstance = function getInstance() {
          if (!this._instance) {
            this._instance = new SkillManager();
          }
          return this._instance;
        }

        /**
         * 私有构造函数，确保单例模式
         */;
        function SkillManager() {
          var _this = this;
          this._skills = new Map();
          // 技能ID到技能的映射
          this._skillConfigs = new Map();
          // 技能配置ID到配置的映射
          this._skillData = new Map();
          // 技能ID到技能数据的映射
          this._eventListeners = new Map();
          // 事件监听器
          this._gameUI = void 0;
          // 初始化事件监听器映射
          Object.keys(SkillEventType).forEach(function (key) {
            var type = SkillEventType[key];
            _this._eventListeners.set(type, []);
          });

          // 初始化技能配置
          this.initSkillConfigs();
        }

        /**
         * 初始化技能系统
         * @param gameUI 游戏UI引用
         */
        var _proto = SkillManager.prototype;
        _proto.init = function init(gameUI) {
          console.log('SkillManager: 初始化技能系统');

          // 如果没有传入gameUI，尝试从GCtrl获取
          if (!gameUI) {
            try {
              var _gCtrl;
              // 通过全局gCtrl获取当前游戏UI
              this._gameUI = (_gCtrl = globalThis.gCtrl) == null ? void 0 : _gCtrl.getCurrentGameUI();
              if (!this._gameUI) {
                console.warn('SkillManager: 无法从GCtrl获取游戏UI，技能系统可能无法正常工作');
              }
            } catch (error) {
              console.error('SkillManager: 获取游戏UI失败', error);
            }
          } else {
            this._gameUI = gameUI;
          }
          this.loadSkillData();
          this.initSkills();
        }

        /**
         * 初始化技能配置
         */;
        _proto.initSkillConfigs = function initSkillConfigs() {
          // 拖刀回马技能配置
          var tuoDaoHuiMaConfig = {
            id: 'tuo_dao_hui_ma',
            name: '拖刀回马',
            type: SkillType.TUO_DAO_HUI_MA,
            description: '将收集区最后一个棋子返回棋盘',
            icon: 'textures/skills/tuo_dao_hui_ma',
            cooldown: 0,
            // 30秒冷却时间
            duration: 0,
            // 瞬发技能，无持续时间
            itemId: 'item_tdhm_001',
            // 触发物品ID
            targetType: 'collection',
            effectParams: {}
          };

          // 草船借箭技能配置
          var caoChuanJieJianConfig = {
            id: 'cao_chuan_jie_jian',
            name: '草船借箭',
            type: SkillType.CAO_CHUAN_JIE_JIAN,
            description: '随机选择收集区一种棋子，从棋盘选择对应棋子凑够3个后直接消除',
            icon: 'textures/skills/cao_chuan_jie_jian',
            cooldown: 45,
            // 45秒冷却时间
            duration: 0,
            // 瞬发技能，无持续时间
            itemId: 'item_ccjj_001',
            // 触发物品ID
            targetType: 'board',
            effectParams: {
              count: 3
            }
          };

          // 乾坤挪移技能配置
          var qianKunNuoYiConfig = {
            id: 'qian_kun_nuo_yi',
            name: '乾坤挪移',
            type: SkillType.QIAN_KUN_NUO_YI,
            description: '随机改变棋盘棋子顺序',
            icon: 'textures/skills/qian_kun_nuo_yi',
            cooldown: 60,
            // 60秒冷却时间
            duration: 0,
            // 瞬发技能，无持续时间
            itemId: 'item_qkny_001',
            // 触发物品ID
            targetType: 'board',
            effectParams: {}
          };

          // 添加技能配置
          this._skillConfigs.set(tuoDaoHuiMaConfig.id, tuoDaoHuiMaConfig);
          this._skillConfigs.set(caoChuanJieJianConfig.id, caoChuanJieJianConfig);
          this._skillConfigs.set(qianKunNuoYiConfig.id, qianKunNuoYiConfig);
        }

        /**
         * 初始化技能实例
         */;
        _proto.initSkills = function initSkills() {
          if (!this._gameUI) {
            console.error('SkillManager: 游戏UI未设置，无法初始化技能');
            return;
          }

          // 清空现有技能
          this._skills.clear();

          // 创建拖刀回马技能
          var tuoDaoHuiMaConfig = this._skillConfigs.get('tuo_dao_hui_ma');
          if (tuoDaoHuiMaConfig) {
            var tuoDaoHuiMaSkill = new TuoDaoHuiMaSkill(tuoDaoHuiMaConfig, this._gameUI);
            this._skills.set(tuoDaoHuiMaSkill.getConfig().id, tuoDaoHuiMaSkill);
          }

          // 创建草船借箭技能
          var caoChuanJieJianConfig = this._skillConfigs.get('cao_chuan_jie_jian');
          if (caoChuanJieJianConfig) {
            var caoChuanJieJianSkill = new CaoChuanJieJianSkill(caoChuanJieJianConfig, this._gameUI);
            this._skills.set(caoChuanJieJianSkill.getConfig().id, caoChuanJieJianSkill);
          }

          // 创建乾坤挪移技能
          var qianKunNuoYiConfig = this._skillConfigs.get('qian_kun_nuo_yi');
          if (qianKunNuoYiConfig) {
            var qianKunNuoYiSkill = new QianKunNuoYiSkill(qianKunNuoYiConfig, this._gameUI);
            this._skills.set(qianKunNuoYiSkill.getConfig().id, qianKunNuoYiSkill);
          }
          console.log("SkillManager: \u5DF2\u521D\u59CB\u5316" + this._skills.size + "\u4E2A\u6280\u80FD");
        }

        /**
         * 加载技能数据
         */;
        _proto.loadSkillData = function loadSkillData() {
          var _this2 = this;
          try {
            var data = sys.localStorage.getItem('skill_data');
            if (data) {
              var parsedData = JSON.parse(data);
              // 使用兼容的方式重建Map
              this._skillData = new Map();
              if (parsedData.data) {
                Object.keys(parsedData.data).forEach(function (key) {
                  _this2._skillData.set(key, parsedData.data[key]);
                });
              }
              console.log('SkillManager: 技能数据加载成功');
            } else {
              console.log('SkillManager: 没有找到技能数据，使用默认配置');
            }
          } catch (error) {
            console.error('SkillManager: 加载技能数据失败', error);
            this._skillData = new Map();
          }
        }

        /**
         * 保存技能数据
         */;
        _proto.saveSkillData = function saveSkillData() {
          try {
            // 使用兼容的方式将Map转换为普通对象
            var dataObj = {};
            this._skillData.forEach(function (value, key) {
              dataObj[key] = value;
            });
            var data = {
              data: dataObj
            };
            sys.localStorage.setItem('skill_data', JSON.stringify(data));
          } catch (error) {
            console.error('SkillManager: 保存技能数据失败', error);
          }
        }

        /**
         * 通过物品使用技能
         * @param itemId 物品ID
         * @returns 是否使用成功
         */;
        _proto.useSkillByItem = /*#__PURE__*/
        function () {
          var _useSkillByItem = _asyncToGenerator(function* (itemId) {
            // 查找对应的技能配置
            var targetConfig = null;
            for (var _iterator = _createForOfIteratorHelperLoose(this._skillConfigs.values()), _step; !(_step = _iterator()).done;) {
              var config = _step.value;
              if (config.itemId === itemId) {
                targetConfig = config;
                break;
              }
            }
            if (!targetConfig) {
              console.warn("SkillManager: \u672A\u627E\u5230\u7269\u54C1ID\u4E3A" + itemId + "\u7684\u6280\u80FD");
              return false;
            }

            // 查找对应的技能实例
            var targetSkill = null;
            for (var _iterator2 = _createForOfIteratorHelperLoose(this._skills.values()), _step2; !(_step2 = _iterator2()).done;) {
              var skill = _step2.value;
              if (skill.getConfig().id === targetConfig.id) {
                targetSkill = skill;
                break;
              }
            }
            if (!targetSkill) {
              console.warn("SkillManager: \u672A\u627E\u5230\u914D\u7F6EID\u4E3A" + targetConfig.id + "\u7684\u6280\u80FD\u5B9E\u4F8B", targetConfig, this._skills);
              return false;
            }

            // 检查技能是否可以使用
            if (!targetSkill.canUse()) {
              console.warn("SkillManager: \u6280\u80FD" + targetConfig.name + "\u5F53\u524D\u4E0D\u53EF\u4F7F\u7528");
              return false;
            }

            // 使用技能
            var result = yield targetSkill.use();
            if (result) {
              // 更新技能数据
              var skillData = targetSkill.getData();
              this._skillData.set(targetSkill.getId(), skillData);
              this.saveSkillData();

              // 触发技能使用事件
              this.triggerEvent({
                type: SkillEventType.SKILL_EXECUTED,
                skillId: targetSkill.getId()
              });
              console.log("SkillManager: \u6280\u80FD" + targetConfig.name + "\u4F7F\u7528\u6210\u529F");
              return true;
            } else {
              // 触发技能错误事件
              this.triggerEvent({
                type: SkillEventType.SKILL_ERROR,
                skillId: targetSkill.getId()
              });
              console.warn("SkillManager: \u6280\u80FD" + targetConfig.name + "\u4F7F\u7528\u5931\u8D25");
              return false;
            }
          });
          function useSkillByItem(_x) {
            return _useSkillByItem.apply(this, arguments);
          }
          return useSkillByItem;
        }()
        /**
         * 获取技能配置
         * @param configId 配置ID
         * @returns 技能配置或null
         */;

        _proto.getSkillConfig = function getSkillConfig(configId) {
          return this._skillConfigs.get(configId) || null;
        }

        /**
         * 获取所有技能配置
         * @returns 技能配置数组
         */;
        _proto.getAllSkillConfigs = function getAllSkillConfigs() {
          var configs = [];
          this._skillConfigs.forEach(function (value) {
            configs.push(value);
          });
          return configs;
        }

        /**
         * 获取技能
         * @param skillId 技能ID
         * @returns 技能实例或null
         */;
        _proto.getSkill = function getSkill(skillId) {
          return this._skills.get(skillId) || null;
        }

        /**
         * 获取所有技能
         * @returns 技能实例数组
         */;
        _proto.getAllSkills = function getAllSkills() {
          var skills = [];
          this._skills.forEach(function (value) {
            skills.push(value);
          });
          return skills;
        }

        /**
         * 更新技能状态
         * @param deltaTime 增量时间（秒）
         */;
        _proto.update = function update(deltaTime) {
          this._skills.forEach(function (skill) {
            skill.update(deltaTime);
          });
        }

        /**
         * 添加事件监听器
         * @param eventType 事件类型
         * @param callback 回调函数
         */;
        _proto.addEventListener = function addEventListener(eventType, callback) {
          var listeners = this._eventListeners.get(eventType);
          if (listeners) {
            listeners.push(callback);
          }
        }

        /**
         * 移除事件监听器
         * @param eventType 事件类型
         * @param callback 回调函数
         */;
        _proto.removeEventListener = function removeEventListener(eventType, callback) {
          var listeners = this._eventListeners.get(eventType);
          if (listeners) {
            var index = listeners.indexOf(callback);
            if (index !== -1) {
              listeners.splice(index, 1);
            }
          }
        }

        /**
         * 触发事件
         * @param event 事件对象
         */;
        _proto.triggerEvent = function triggerEvent(event) {
          var listeners = this._eventListeners.get(event.type);
          if (listeners) {
            listeners.forEach(function (callback) {
              try {
                callback(event);
              } catch (error) {
                console.error("SkillManager: \u4E8B\u4EF6\u56DE\u8C03\u6267\u884C\u5931\u8D25", error);
              }
            });
          }
        };
        return SkillManager;
      }());
      SkillManager._instance = void 0;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SpriteFramesCfg.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ResConst.ts', './ResManager.ts'], function (exports) {
  var _asyncToGenerator, cclegacy, SpriteFrame, Rect, Vec2, Texture2D, createBundleObject, ResManager;
  return {
    setters: [function (module) {
      _asyncToGenerator = module.asyncToGenerator;
    }, function (module) {
      cclegacy = module.cclegacy;
      SpriteFrame = module.SpriteFrame;
      Rect = module.Rect;
      Vec2 = module.Vec2;
      Texture2D = module.Texture2D;
    }, function (module) {
      createBundleObject = module.createBundleObject;
    }, function (module) {
      ResManager = module.ResManager;
    }],
    execute: function () {
      var _class;
      cclegacy._RF.push({}, "38554gzRGBLIbB346jNQJmR", "SpriteFramesCfg", undefined);
      var SpriteFramesCfg = exports('SpriteFramesCfg', /*#__PURE__*/function () {
        function SpriteFramesCfg() {}
        /**
         * 初始化characters纹理
         */
        SpriteFramesCfg.initCharactersTexture = function initCharactersTexture() {
          if (this._isInitialized) {
            return Promise.resolve();
          }
          if (this._initPromise) {
            return this._initPromise;
          }
          this._initPromise = this._doInitCharactersTexture();
          return this._initPromise;
        };
        SpriteFramesCfg._doInitCharactersTexture = /*#__PURE__*/function () {
          var _doInitCharactersTexture2 = _asyncToGenerator(function* () {
            var resManager = new ResManager();
            try {
              // 如果加载spriteFrame失败，尝试直接加载texture
              var textureUrl = createBundleObject("yang/SpriteFrames/characters/characters/texture", "Match3BN");
              var texture = yield resManager.loadAssetAsync(textureUrl, Texture2D);
              if (texture) {
                this.setCharactersTexture(texture);
                this._isInitialized = true;
                console.log("Characters texture loaded directly");
                return;
              }
            } catch (error) {
              console.error("Error loading characters texture:", error);
            }
            console.error("Failed to load characters texture through all methods");
          });
          function _doInitCharactersTexture() {
            return _doInitCharactersTexture2.apply(this, arguments);
          }
          return _doInitCharactersTexture;
        }()
        /**
         * 动态切分characters纹理创建SpriteFrame
         * @param index 索引 (0-44, 对应5行9列)
         * @returns SpriteFrame
         */;

        SpriteFramesCfg.createCharacterSpriteFrame = function createCharacterSpriteFrame(index) {
          if (!this._charactersTexture) {
            console.error("Characters texture not loaded, call initCharactersTexture() first");
            return null;
          }

          // 5行9列，总共45个角色
          var cols = 9;
          var rows = 5;
          var totalCount = cols * rows;
          if (index < 0 || index >= totalCount) {
            console.error("Character index out of range: " + index + ", should be 0-" + (totalCount - 1));
            return null;
          }

          // 计算每个格子的尺寸
          var textureWidth = this._charactersTexture.width;
          var textureHeight = this._charactersTexture.height;
          var cellWidth = textureWidth / cols;
          var cellHeight = textureHeight / rows;

          // 计算当前索引对应的行列
          var col = index % cols;
          var row = Math.floor(index / cols);

          // 计算切分区域 (注意Cocos Creator的Y轴是从下往上的)
          var x = col * cellWidth;
          var y = (rows - 1 - row) * cellHeight; // 翻转Y轴

          // 创建SpriteFrame
          var spriteFrame = new SpriteFrame();
          spriteFrame.texture = this._charactersTexture;
          spriteFrame.rect = new Rect(x, y, cellWidth, cellHeight);
          spriteFrame.offset = new Vec2(0, 0);
          return spriteFrame;
        }

        /**
         * 获取角色SpriteFrame (同步版本，纹理必须已经初始化)
         * @param index 角色索引 (0-44)
         * @returns SpriteFrame | null
         */;
        SpriteFramesCfg.getCharacterSpriteFrame = function getCharacterSpriteFrame(index) {
          // 如果没有初始化，返回null
          if (!this._isInitialized) {
            console.warn("Characters texture not initialized. Call initCharactersTexture() first.");
            return null;
          }

          // 检查缓存
          if (this._charactersSpriteFrames.has(index)) {
            return this._charactersSpriteFrames.get(index);
          }

          // 创建新的SpriteFrame
          var spriteFrame = this.createCharacterSpriteFrame(index);
          if (spriteFrame) {
            this._charactersSpriteFrames.set(index, spriteFrame);
          }
          return spriteFrame;
        }

        /**
         * 异步获取角色SpriteFrame
         * @param index 角色索引 (0-44)
         * @returns Promise<SpriteFrame | null>
         */;
        SpriteFramesCfg.getCharacterSpriteFrameAsync = /*#__PURE__*/
        function () {
          var _getCharacterSpriteFrameAsync = _asyncToGenerator(function* (index) {
            yield this.initCharactersTexture();
            return this.getCharacterSpriteFrame(index);
          });
          function getCharacterSpriteFrameAsync(_x) {
            return _getCharacterSpriteFrameAsync.apply(this, arguments);
          }
          return getCharacterSpriteFrameAsync;
        }()
        /**
         * 设置characters纹理
         * @param texture Texture2D
         */;

        SpriteFramesCfg.setCharactersTexture = function setCharactersTexture(texture) {
          this._charactersTexture = texture;
          // 清空缓存，重新生成
          this._charactersSpriteFrames.clear();
        }

        //-----------Match3BN---------
        // 使用动态切分的characters纹理，key为0-44对应5行9列的三国人物头像
        // 注意：纹理必须已经通过initCharactersTexture()初始化
        ;
        // 异步版本的pai
        SpriteFramesCfg.paiAsync = /*#__PURE__*/
        function () {
          var _paiAsync = _asyncToGenerator(function* (key) {
            var index = typeof key === 'string' ? parseInt(key) : key;
            return yield this.getCharacterSpriteFrameAsync(index);
          });
          function paiAsync(_x2) {
            return _paiAsync.apply(this, arguments);
          }
          return paiAsync;
        }();
        return SpriteFramesCfg;
      }());
      _class = SpriteFramesCfg;
      SpriteFramesCfg._charactersTexture = null;
      SpriteFramesCfg._charactersSpriteFrames = new Map();
      SpriteFramesCfg._isInitialized = false;
      SpriteFramesCfg._initPromise = null;
      SpriteFramesCfg.pai = function (key) {
        var index = typeof key === 'string' ? parseInt(key) : key;
        return _class.getCharacterSpriteFrame(index);
      };
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TaskConfig.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _extends, cclegacy;
  return {
    setters: [function (module) {
      _extends = module.extends;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "5582ftR1YVJ9ooMnPcRNyXY", "TaskConfig", undefined);
      /**
       * 任务接口定义
       */
      /**
       * 奖励接口定义
       */
      /**
       * 任务配置类
       */
      var TaskConfig = exports('TaskConfig', /*#__PURE__*/function () {
        /**
         * 获取单例实例
         */
        TaskConfig.getInstance = function getInstance() {
          if (!TaskConfig._instance) {
            TaskConfig._instance = new TaskConfig();
          }
          return TaskConfig._instance;
        }

        /**
         * 私有构造函数
         */;
        function TaskConfig() {
          this._taskConfigs = {};
          this.init();
        }

        /**
         * 初始化任务配置
         */
        var _proto = TaskConfig.prototype;
        _proto.init = function init() {
          this.loadTaskConfigs();
        }

        /**
         * 加载任务配置
         */;
        _proto.loadTaskConfigs = function loadTaskConfigs() {
          // 日常任务配置
          this._taskConfigs['daily_001'] = {
            id: 'daily_001',
            type: 'daily',
            title: '每日登录',
            description: '每日登录游戏',
            target: 1,
            progress: 0,
            status: 'unaccepted',
            rewards: [{
              type: 'coin',
              itemId: 'coin',
              count: 100
            }]
          };
          this._taskConfigs['daily_002'] = {
            id: 'daily_002',
            type: 'daily',
            title: '完成一局消消三国',
            description: '完成一局消消三国游戏',
            target: 1,
            progress: 0,
            status: 'unaccepted',
            rewards: [{
              type: 'coin',
              itemId: 'coin',
              count: 200
            }]
          };
          this._taskConfigs['daily_003'] = {
            id: 'daily_003',
            type: 'daily',
            title: '观看广告',
            description: '观看一次广告',
            target: 1,
            progress: 0,
            status: 'unaccepted',
            rewards: [{
              type: 'coin',
              itemId: 'coin',
              count: 50
            }]
          };
          this._taskConfigs['daily_004'] = {
            id: 'daily_004',
            type: 'daily',
            title: '商店购买',
            description: '在商店购买一次商品',
            target: 1,
            progress: 0,
            status: 'unaccepted',
            rewards: [{
              type: 'item',
              itemId: 'item_001',
              count: 1
            }]
          };

          // 成就任务配置
          this._taskConfigs['achievement_001'] = {
            id: 'achievement_001',
            type: 'achievement',
            title: '消消三国新手',
            description: '完成10局消消三国游戏',
            target: 10,
            progress: 0,
            status: 'unaccepted',
            rewards: [{
              type: 'item',
              itemId: 'item_001',
              count: 1
            }],
            unlocked: true
          };
          this._taskConfigs['achievement_002'] = {
            id: 'achievement_002',
            type: 'achievement',
            title: '消消三国达人',
            description: '完成50局消消三国游戏',
            target: 50,
            progress: 0,
            status: 'unaccepted',
            rewards: [{
              type: 'coin',
              itemId: 'coin',
              count: 1000
            }, {
              type: 'item',
              itemId: 'item_002',
              count: 1
            }],
            unlocked: true
          };
          this._taskConfigs['achievement_003'] = {
            id: 'achievement_003',
            type: 'achievement',
            title: '金币达人',
            description: '累计获得1000金币',
            target: 1000,
            progress: 0,
            status: 'unaccepted',
            rewards: [{
              type: 'coin',
              itemId: 'coin',
              count: 500
            }],
            unlocked: true
          };
          this._taskConfigs['achievement_004'] = {
            id: 'achievement_004',
            type: 'achievement',
            title: '金币大师',
            description: '累计获得5000金币',
            target: 5000,
            progress: 0,
            status: 'unaccepted',
            rewards: [{
              type: 'coin',
              itemId: 'coin',
              count: 2000
            }, {
              type: 'item',
              itemId: 'item_003',
              count: 1
            }],
            unlocked: true
          };
          this._taskConfigs['achievement_005'] = {
            id: 'achievement_005',
            type: 'achievement',
            title: '购物狂人',
            description: '在商店购买10次商品',
            target: 10,
            progress: 0,
            status: 'unaccepted',
            rewards: [{
              type: 'item',
              itemId: 'item_004',
              count: 1
            }],
            unlocked: true
          };
          this._taskConfigs['achievement_006'] = {
            id: 'achievement_006',
            type: 'achievement',
            title: '广告达人',
            description: '累计观看20次广告',
            target: 20,
            progress: 0,
            status: 'unaccepted',
            rewards: [{
              type: 'coin',
              itemId: 'coin',
              count: 800
            }],
            unlocked: true
          };

          // 带解锁条件的成就任务
          this._taskConfigs['achievement_007'] = {
            id: 'achievement_007',
            type: 'achievement',
            title: '消消三国大师',
            description: '完成100局消消三国游戏',
            target: 100,
            progress: 0,
            status: 'unaccepted',
            rewards: [{
              type: 'coin',
              itemId: 'coin',
              count: 3000
            }, {
              type: 'item',
              itemId: 'item_005',
              count: 1
            }],
            unlocked: false,
            unlockCondition: {
              type: 'achievement_completed',
              value: 'achievement_002'
            }
          };
          this._taskConfigs['achievement_008'] = {
            id: 'achievement_008',
            type: 'achievement',
            title: '金币富豪',
            description: '累计获得10000金币',
            target: 10000,
            progress: 0,
            status: 'unaccepted',
            rewards: [{
              type: 'coin',
              itemId: 'coin',
              count: 5000
            }, {
              type: 'item',
              itemId: 'item_006',
              count: 1
            }],
            unlocked: false,
            unlockCondition: {
              type: 'achievement_completed',
              value: 'achievement_004'
            }
          };
        }

        /**
         * 获取任务配置
         */;
        _proto.getTaskConfig = function getTaskConfig(taskId) {
          return this._taskConfigs[taskId] || null;
        }

        /**
         * 获取所有任务配置
         */;
        _proto.getAllTaskConfigs = function getAllTaskConfigs() {
          return _extends({}, this._taskConfigs);
        }

        /**
         * 获取日常任务配置
         */;
        _proto.getDailyTaskConfigs = function getDailyTaskConfigs() {
          var dailyTasks = {};
          for (var taskId in this._taskConfigs) {
            if (this._taskConfigs[taskId].type === 'daily') {
              dailyTasks[taskId] = this._taskConfigs[taskId];
            }
          }
          return dailyTasks;
        }

        /**
         * 获取成就任务配置
         */;
        _proto.getAchievementTaskConfigs = function getAchievementTaskConfigs() {
          var achievementTasks = {};
          for (var taskId in this._taskConfigs) {
            if (this._taskConfigs[taskId].type === 'achievement') {
              achievementTasks[taskId] = this._taskConfigs[taskId];
            }
          }
          return achievementTasks;
        }

        /**
         * 获取已解锁的成就任务配置
         */;
        _proto.getUnlockedAchievementTaskConfigs = function getUnlockedAchievementTaskConfigs() {
          var unlockedTasks = {};
          for (var taskId in this._taskConfigs) {
            if (this._taskConfigs[taskId].type === 'achievement' && this._taskConfigs[taskId].unlocked) {
              unlockedTasks[taskId] = this._taskConfigs[taskId];
            }
          }
          return unlockedTasks;
        }

        /**
         * 检查任务是否解锁
         */;
        _proto.isTaskUnlocked = function isTaskUnlocked(taskId) {
          var task = this._taskConfigs[taskId];
          if (!task) {
            return false;
          }

          // 如果没有解锁条件，默认已解锁
          if (!task.unlockCondition) {
            return true;
          }

          // TODO: 根据解锁条件检查任务是否解锁
          // 这里暂时返回任务的unlocked属性
          return task.unlocked || false;
        }

        /**
         * 解锁任务
         */;
        _proto.unlockTask = function unlockTask(taskId) {
          var task = this._taskConfigs[taskId];
          if (!task) {
            console.error('任务不存在', taskId);
            return false;
          }
          if (task.unlocked) {
            console.warn('任务已解锁', taskId);
            return true;
          }

          // 检查解锁条件
          if (task.unlockCondition) {
            // TODO: 检查解锁条件是否满足
            // 这里暂时直接解锁
            task.unlocked = true;
            return true;
          }
          return false;
        };
        return TaskConfig;
      }());
      TaskConfig._instance = null;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TaskManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './TaskConfig.ts', './CoinManager.ts'], function (exports) {
  var _extends, _createForOfIteratorHelperLoose, cclegacy, TaskConfig, CoinManager;
  return {
    setters: [function (module) {
      _extends = module.extends;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      TaskConfig = module.TaskConfig;
    }, function (module) {
      CoinManager = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "87da0oYIFVEq5Dx5GT0HdNS", "TaskManager", undefined);
      var TaskManager = exports('TaskManager', /*#__PURE__*/function () {
        // 日常任务刷新回调
        /**
         * 获取单例实例
         */
        TaskManager.getInstance = function getInstance() {
          if (!TaskManager._instance) {
            TaskManager._instance = new TaskManager();
          }
          return TaskManager._instance;
        }

        /**
         * 私有构造函数
         */;
        function TaskManager() {
          // 任务数据
          this._dailyTasks = [];
          // 日常任务列表
          this._achievementTasks = [];
          // 成就任务列表
          this._taskRecords = {};
          // 任务记录
          // 回调函数
          this._taskUpdateCallbacks = [];
          // 任务更新回调
          this._taskCompleteCallbacks = [];
          // 任务完成回调
          this._taskRewardClaimedCallbacks = [];
          // 任务奖励领取回调
          this._onDailyTasksRefreshed = null;
        } // 构造函数中不调用init，等待外部显式调用

        /**
         * 初始化任务管理器
         */
        var _proto = TaskManager.prototype;
        _proto.init = function init() {
          this.loadTaskData();
          this.loadTaskRecords();
          this.checkDailyTasksRefresh();
        }

        /**
         * 加载任务数据
         */;
        _proto.loadTaskData = function loadTaskData() {
          var taskConfig = TaskConfig.getInstance();

          // 加载日常任务配置
          var dailyTaskConfigs = taskConfig.getDailyTaskConfigs();
          this._dailyTasks = [];
          for (var _taskId in dailyTaskConfigs) {
            // 深拷贝任务配置，避免修改原始配置
            var task = JSON.parse(JSON.stringify(dailyTaskConfigs[_taskId]));
            this._dailyTasks.push(task);
          }

          // 加载成就任务配置
          var achievementTaskConfigs = taskConfig.getAchievementTaskConfigs();
          this._achievementTasks = [];
          for (var _taskId2 in achievementTaskConfigs) {
            // 深拷贝任务配置，避免修改原始配置
            var _task = JSON.parse(JSON.stringify(achievementTaskConfigs[_taskId2]));
            this._achievementTasks.push(_task);
          }
        }

        /**
         * 检查并刷新日常任务
         */;
        _proto.checkDailyTasksRefresh = function checkDailyTasksRefresh() {
          var today = new Date().toDateString();
          var lastRefreshDate = this._taskRecords['lastDailyRefresh'] || '';

          // 如果今天还没有刷新过，则刷新日常任务
          if (lastRefreshDate !== today) {
            this.refreshDailyTasks();
          }
        }

        /**
         * 加载任务记录
         */;
        _proto.loadTaskRecords = function loadTaskRecords() {
          // TODO: 从本地存储加载任务记录
          // 这里先使用空记录
          this._taskRecords = {};
        }

        /**
         * 保存任务记录
         */;
        _proto.saveTaskRecords = function saveTaskRecords() {
          // TODO: 保存任务记录到本地存储
          console.log('保存任务记录', this._taskRecords);
        }

        /**
         * 保存单个任务记录
         * @param taskId 任务ID
         * @param record 记录数据
         */;
        _proto.saveTaskRecord = function saveTaskRecord(taskId, record) {
          this._taskRecords[taskId] = _extends({}, this._taskRecords[taskId], record);
          this.saveTaskRecords();
        }

        /**
         * 获取日常任务列表
         * @returns 日常任务列表
         */;
        _proto.getDailyTasks = function getDailyTasks() {
          return [].concat(this._dailyTasks); // 返回副本，避免外部修改
        }

        /**
         * 获取成就任务列表
         * @returns 成就任务列表
         */;
        _proto.getAchievementTasks = function getAchievementTasks() {
          return [].concat(this._achievementTasks); // 返回副本，避免外部修改
        }

        /**
         * 获取所有任务
         */;
        _proto.getAllTasks = function getAllTasks() {
          return [].concat(this._dailyTasks, this._achievementTasks);
        }

        /**
         * 根据ID获取任务
         */;
        _proto.getTaskById = function getTaskById(taskId) {
          var task = this._dailyTasks.find(function (t) {
            return t.id === taskId;
          });
          if (task) {
            return task;
          }
          return this._achievementTasks.find(function (t) {
            return t.id === taskId;
          });
        }

        /**
         * 接取任务
         * @param taskId 任务ID
         * @returns 是否接取成功
         */;
        _proto.acceptTask = function acceptTask(taskId) {
          // 查找任务
          var task = null;
          for (var _iterator = _createForOfIteratorHelperLoose(this._dailyTasks), _step; !(_step = _iterator()).done;) {
            var _t = _step.value;
            if (_t.id === taskId) {
              task = _t;
              break;
            }
          }
          if (!task) {
            for (var _iterator2 = _createForOfIteratorHelperLoose(this._achievementTasks), _step2; !(_step2 = _iterator2()).done;) {
              var t = _step2.value;
              if (t.id === taskId) {
                task = t;
                break;
              }
            }
          }
          if (!task) {
            console.error("Task not found: " + taskId);
            return false;
          }

          // 检查任务状态
          if (task.status !== TaskManager.TaskStatus.UNACCEPTED) {
            console.error("Task cannot be accepted, current status: " + task.status);
            return false;
          }

          // 更新任务状态
          task.status = TaskManager.TaskStatus.ACCEPTED;

          // 保存任务记录
          this.saveTaskRecord(taskId, {
            status: task.status,
            progress: task.progress,
            acceptTime: Date.now()
          });

          // 触发回调
          this.triggerTaskUpdateCallbacks(task);
          return true;
        }

        /**
         * 更新任务进度
         * @param taskId 任务ID
         * @param progress 新进度
         * @returns 是否更新成功
         */;
        _proto.updateTaskProgress = function updateTaskProgress(taskId, progress) {
          // 查找任务
          var task = null;
          for (var _iterator3 = _createForOfIteratorHelperLoose(this._dailyTasks), _step3; !(_step3 = _iterator3()).done;) {
            var _t2 = _step3.value;
            if (_t2.id === taskId) {
              task = _t2;
              break;
            }
          }
          if (!task) {
            for (var _iterator4 = _createForOfIteratorHelperLoose(this._achievementTasks), _step4; !(_step4 = _iterator4()).done;) {
              var t = _step4.value;
              if (t.id === taskId) {
                task = t;
                break;
              }
            }
          }
          if (!task) {
            console.error("Task not found: " + taskId);
            return false;
          }

          // 检查任务状态
          if (task.status !== TaskManager.TaskStatus.ACCEPTED) {
            console.error("Task cannot be updated, current status: " + task.status);
            return false;
          }

          // 更新进度
          task.progress = Math.min(progress, task.target);

          // 保存任务记录
          this.saveTaskRecord(taskId, {
            status: task.status,
            progress: task.progress
          });

          // 检查任务是否完成
          if (task.progress >= task.target) {
            task.status = TaskManager.TaskStatus.COMPLETED;

            // 保存任务记录
            this.saveTaskRecord(taskId, {
              status: task.status,
              progress: task.progress,
              completeTime: Date.now()
            });

            // 触发任务完成回调
            this.triggerTaskCompleteCallbacks(task);
          }

          // 触发任务奖励领取回调
          this.triggerTaskRewardClaimedCallbacks(task);
          return true;
        }

        /**
         * 领取任务奖励
         * @param taskId 任务ID
         * @returns 是否领取成功
         */;
        _proto.claimTaskReward = function claimTaskReward(taskId) {
          var task = this.getTaskById(taskId);
          if (!task) {
            console.error('任务不存在', taskId);
            return false;
          }
          if (task.status !== TaskManager.TaskStatus.COMPLETED) {
            console.error('任务状态不允许领取奖励', taskId, task.status);
            return false;
          }

          // 发放奖励
          var rewardResults = [];
          for (var _iterator5 = _createForOfIteratorHelperLoose(task.rewards), _step5; !(_step5 = _iterator5()).done;) {
            var reward = _step5.value;
            var result = this.grantReward(reward);
            rewardResults.push({
              type: reward.type,
              success: result.success,
              data: result.data
            });
            if (!result.success) {
              console.error("\u53D1\u653E\u5956\u52B1\u5931\u8D25: " + reward.type, result.error);
            }
          }

          // 检查是否所有奖励都发放成功
          var allRewardsGranted = rewardResults.every(function (r) {
            return r.success;
          });
          if (allRewardsGranted) {
            task.status = TaskManager.TaskStatus.REWARDED;

            // 保存任务记录
            this.saveTaskRecord(taskId, {
              status: task.status,
              progress: task.progress,
              claimTime: Date.now()
            });

            // 触发任务奖励领取回调
            this.triggerTaskRewardClaimedCallbacks(task);
            return true;
          } else {
            // 如果有奖励发放失败，回滚已发放的奖励
            this.rollbackRewards(rewardResults.filter(function (r) {
              return r.success;
            }));
            return false;
          }
        }

        /**
         * 发放单个奖励
         * @param reward 奖励配置
         * @returns 发放结果
         */;
        _proto.grantReward = function grantReward(reward) {
          try {
            switch (reward.type) {
              case 'coin':
                // 通过CoinManager发放金币奖励
                var coinManager = CoinManager.getInstance();
                coinManager.addCoin(reward.count, '任务奖励');
                console.log("\u53D1\u653E\u91D1\u5E01\u5956\u52B1 " + reward.count);
                return {
                  success: true,
                  data: {
                    coin: reward.count
                  }
                };
              case 'item':
                // 发放物品奖励
                // TODO: 通过BagManager发放物品
                console.log('发放物品奖励', reward.itemId, reward.count);
                // 临时实现，实际应该调用BagManager
                return {
                  success: true,
                  data: {
                    item: reward.itemId,
                    count: reward.count
                  }
                };
              case 'hero':
                // 发放英雄奖励
                // TODO: 通过HeroManager发放英雄
                console.log('发放英雄奖励', reward.heroId);
                // 临时实现，实际应该调用HeroManager
                return {
                  success: true,
                  data: {
                    hero: reward.heroId
                  }
                };
              case 'exp':
                // 发放经验奖励
                // TODO: 通过PlayerManager发放经验
                console.log('发放经验奖励', reward.count);
                // 临时实现，实际应该调用PlayerManager
                return {
                  success: true,
                  data: {
                    exp: reward.count
                  }
                };
              case 'vip_exp':
                // 发放VIP经验奖励
                // TODO: 通过VIPManager发放VIP经验
                console.log('发放VIP经验奖励', reward.count);
                // 临时实现，实际应该调用VIPManager
                return {
                  success: true,
                  data: {
                    vipExp: reward.count
                  }
                };
              default:
                console.error('未知的奖励类型', reward.type);
                return {
                  success: false,
                  error: "\u672A\u77E5\u7684\u5956\u52B1\u7C7B\u578B: " + reward.type
                };
            }
          } catch (e) {
            console.error('发放奖励时发生错误', e);
            return {
              success: false,
              error: e.message
            };
          }
        }

        /**
         * 回滚已发放的奖励
         * @param grantedRewards 已发放的奖励列表
         */;
        _proto.rollbackRewards = function rollbackRewards(grantedRewards) {
          for (var _iterator6 = _createForOfIteratorHelperLoose(grantedRewards), _step6; !(_step6 = _iterator6()).done;) {
            var reward = _step6.value;
            try {
              switch (reward.type) {
                case 'coin':
                  // 通过CoinManager扣除金币
                  var coinManager = CoinManager.getInstance();
                  coinManager.subtractCoin(reward.data.coin, "\u4EFB\u52A1\u5956\u52B1\u56DE\u6EDA: " + reward.data.coin);
                  console.log('回滚金币奖励', reward.data.coin);
                  break;
                case 'item':
                  // TODO: 通过BagManager扣除物品
                  console.log('回滚物品奖励', reward.data.item, reward.data.count);
                  break;
                case 'hero':
                  // TODO: 通过HeroManager移除英雄
                  console.log('回滚英雄奖励', reward.data.hero);
                  break;
                case 'exp':
                  // TODO: 通过PlayerManager扣除经验
                  console.log('回滚经验奖励', reward.data.exp);
                  break;
                case 'vip_exp':
                  // TODO: 通过VIPManager扣除VIP经验
                  console.log('回滚VIP经验奖励', reward.data.vipExp);
                  break;
              }
            } catch (e) {
              console.error('回滚奖励时发生错误', e);
            }
          }
        }

        /**
         * 批量领取任务奖励
         * @param taskIds 任务ID列表
         * @returns 领取结果
         */;
        _proto.claimMultipleTaskRewards = function claimMultipleTaskRewards(taskIds) {
          var results = {};
          for (var _iterator7 = _createForOfIteratorHelperLoose(taskIds), _step7; !(_step7 = _iterator7()).done;) {
            var _taskId3 = _step7.value;
            results[_taskId3] = this.claimTaskReward(_taskId3);
          }
          return results;
        }

        /**
         * 获取可领取奖励的任务列表
         * @returns 可领取奖励的任务ID列表
         */;
        _proto.getClaimableTasks = function getClaimableTasks() {
          var allTasks = this.getAllTasks();
          return allTasks.filter(function (task) {
            return task.status === TaskManager.TaskStatus.COMPLETED;
          }).map(function (task) {
            return task.id;
          });
        }

        /**
         * 检查成就任务进度
         * 根据游戏事件自动检查并更新相关成就任务的进度
         * @param eventType 事件类型
         * @param eventData 事件数据
         */;
        _proto.checkAchievementProgress = function checkAchievementProgress(eventType, eventData) {
          var _this = this;
          var taskConfig = TaskConfig.getInstance();
          var achievementConfigs = taskConfig.getAchievementTaskConfigs();
          var _loop = function _loop(_taskId4) {
            var config = achievementConfigs[_taskId4];

            // 检查成就任务是否与当前事件相关
            if (config.triggerEvent === eventType) {
              var task = _this._achievementTasks.find(function (t) {
                return t.id === _taskId4;
              });

              // 如果任务不存在，则创建一个新的成就任务
              if (!task) {
                task = JSON.parse(JSON.stringify(config));
                _this._achievementTasks.push(task);
              }

              // 如果任务还未接取，则自动接取
              if (task.status === TaskManager.TaskStatus.UNACCEPTED) {
                _this.acceptTask(_taskId4);
              }

              // 计算新的进度
              var newProgress = task.progress;
              switch (eventType) {
                case 'login':
                  // 登录事件，可能用于累计登录天数成就
                  if (config.condition === 'login_days') {
                    // TODO: 从任务记录中获取累计登录天数
                    newProgress = (_this._taskRecords[_taskId4 + "_loginDays"] || 0) + 1;
                    _this._taskRecords[_taskId4 + "_loginDays"] = newProgress;
                  }
                  break;
                case 'battle_win':
                  // 战斗胜利事件
                  if (config.condition === 'battle_wins') {
                    newProgress = (_this._taskRecords[_taskId4 + "_battleWins"] || 0) + 1;
                    _this._taskRecords[_taskId4 + "_battleWins"] = newProgress;
                  }
                  break;
                case 'hero_collect':
                  // 收集英雄事件
                  if (config.condition === 'hero_count') {
                    // eventData应该包含当前英雄数量
                    newProgress = eventData.heroCount || 0;
                  }
                  break;
                case 'level_up':
                  // 等级提升事件
                  if (config.condition === 'player_level') {
                    // eventData应该包含当前玩家等级
                    newProgress = eventData.playerLevel || 0;
                  }
                  break;

                // 可以添加更多事件类型和对应的进度计算逻辑
              }

              // 更新任务进度
              if (newProgress > task.progress) {
                _this.updateTaskProgress(_taskId4, newProgress);
              }
            }
          };
          for (var _taskId4 in achievementConfigs) {
            _loop(_taskId4);
          }

          // 保存任务记录
          this.saveTaskRecords();
        }

        /**
         * 解锁成就任务
         * 检查成就任务的解锁条件，如果满足则解锁任务
         * @param taskId 任务ID
         * @returns 是否解锁成功
         */;
        _proto.unlockAchievementTask = function unlockAchievementTask(taskId) {
          var task = this._achievementTasks.find(function (t) {
            return t.id === taskId;
          });
          if (!task) {
            console.error("Achievement task not found: " + taskId);
            return false;
          }

          // 如果任务已经解锁，则直接返回
          if (task.status !== TaskManager.TaskStatus.UNACCEPTED) {
            return false;
          }
          var taskConfig = TaskConfig.getInstance();
          var config = taskConfig.getAchievementTaskConfigs()[taskId];
          if (!config || !config.unlockCondition) {
            // 如果没有解锁条件，则直接接取任务
            return this.acceptTask(taskId);
          }

          // 检查解锁条件
          var canUnlock = false;
          switch (config.unlockCondition.type) {
            case 'player_level':
              // 玩家等级解锁条件
              // TODO: 从PlayerManager获取玩家等级
              var playerLevel = 1; // 临时值，实际应该从PlayerManager获取
              canUnlock = playerLevel >= config.unlockCondition.value;
              break;
            case 'previous_task':
              // 前置任务完成解锁条件
              var previousTask = this._achievementTasks.find(function (t) {
                return t.id === config.unlockCondition.taskId;
              });
              canUnlock = previousTask && previousTask.status === TaskManager.TaskStatus.REWARDED;
              break;
            case 'game_progress':
              // 游戏进度解锁条件
              // TODO: 从GameManager获取游戏进度
              var gameProgress = 0; // 临时值，实际应该从GameManager获取
              canUnlock = gameProgress >= config.unlockCondition.value;
              break;

            // 可以添加更多解锁条件类型
          }

          // 如果满足解锁条件，则接取任务
          if (canUnlock) {
            return this.acceptTask(taskId);
          }
          return false;
        }

        /**
         * 检查所有成就任务的解锁条件
         */;
        _proto.checkAllAchievementUnlockConditions = function checkAllAchievementUnlockConditions() {
          var _this2 = this;
          var taskConfig = TaskConfig.getInstance();
          var achievementConfigs = taskConfig.getAchievementTaskConfigs();
          var _loop2 = function _loop2(_taskId5) {
            var config = achievementConfigs[_taskId5];

            // 只检查未接取的成就任务
            var task = _this2._achievementTasks.find(function (t) {
              return t.id === _taskId5;
            });
            if (!task || task.status === TaskManager.TaskStatus.UNACCEPTED) {
              _this2.unlockAchievementTask(_taskId5);
            }
          };
          for (var _taskId5 in achievementConfigs) {
            _loop2(_taskId5);
          }
        }

        /**
         * 刷新日常任务
         * @returns 是否刷新成功
         */;
        _proto.refreshDailyTasks = function refreshDailyTasks() {
          // 保存当前任务记录
          var today = new Date().toDateString();
          var lastRefreshDate = this._taskRecords['lastDailyRefresh'] || '';

          // 检查是否已经刷新过
          if (lastRefreshDate === today) {
            console.log('Daily tasks already refreshed today');
            return false;
          }

          // 重置日常任务
          var taskConfig = TaskConfig.getInstance();
          var dailyTaskConfigs = taskConfig.getDailyTaskConfigs();
          this._dailyTasks = [];
          for (var _taskId6 in dailyTaskConfigs) {
            // 深拷贝任务配置，避免修改原始配置
            var task = JSON.parse(JSON.stringify(dailyTaskConfigs[_taskId6]));
            this._dailyTasks.push(task);
          }

          // 保存刷新记录
          this._taskRecords['lastDailyRefresh'] = today;
          this.saveTaskRecords();

          // 触发日常任务刷新回调
          if (this._onDailyTasksRefreshed) {
            this._onDailyTasksRefreshed(this._dailyTasks);
          }
          return true;
        }

        /**
         * 注册日常任务刷新回调
         * @param callback 回调函数
         */;
        _proto.registerDailyTasksRefreshedCallback = function registerDailyTasksRefreshedCallback(callback) {
          this._onDailyTasksRefreshed = callback;
        }

        /**
         * 注册任务更新回调
         * @param callback 回调函数
         */;
        _proto.registerTaskUpdateCallback = function registerTaskUpdateCallback(callback) {
          if (this._taskUpdateCallbacks.indexOf(callback) === -1) {
            this._taskUpdateCallbacks.push(callback);
          }
        }

        /**
         * 注销任务更新回调
         */;
        _proto.unregisterTaskUpdateCallback = function unregisterTaskUpdateCallback(callback) {
          var index = this._taskUpdateCallbacks.indexOf(callback);
          if (index !== -1) {
            this._taskUpdateCallbacks.splice(index, 1);
          }
        }

        /**
         * 注册任务完成回调
         * @param callback 回调函数
         */;
        _proto.registerTaskCompleteCallback = function registerTaskCompleteCallback(callback) {
          if (this._taskCompleteCallbacks.indexOf(callback) === -1) {
            this._taskCompleteCallbacks.push(callback);
          }
        }

        /**
         * 注册任务奖励领取回调
         * @param callback 回调函数
         */;
        _proto.registerTaskRewardClaimedCallback = function registerTaskRewardClaimedCallback(callback) {
          if (this._taskRewardClaimedCallbacks.indexOf(callback) === -1) {
            this._taskRewardClaimedCallbacks.push(callback);
          }
        }

        /**
         * 注销任务奖励领取回调
         */;
        _proto.unregisterTaskRewardClaimedCallback = function unregisterTaskRewardClaimedCallback(callback) {
          var index = this._taskRewardClaimedCallbacks.indexOf(callback);
          if (index !== -1) {
            this._taskRewardClaimedCallbacks.splice(index, 1);
          }
        }

        /**
         * 注销任务完成回调
         */;
        _proto.unregisterTaskCompleteCallback = function unregisterTaskCompleteCallback(callback) {
          var index = this._taskCompleteCallbacks.indexOf(callback);
          if (index !== -1) {
            this._taskCompleteCallbacks.splice(index, 1);
          }
        }

        /**
         * 触发任务更新回调
         */;
        _proto.triggerTaskUpdateCallbacks = function triggerTaskUpdateCallbacks(task) {
          for (var _iterator8 = _createForOfIteratorHelperLoose(this._taskUpdateCallbacks), _step8; !(_step8 = _iterator8()).done;) {
            var callback = _step8.value;
            try {
              callback(task);
            } catch (e) {
              console.error('任务更新回调执行错误', e);
            }
          }
        }

        /**
         * 触发任务完成回调
         */;
        _proto.triggerTaskCompleteCallbacks = function triggerTaskCompleteCallbacks(task) {
          for (var _iterator9 = _createForOfIteratorHelperLoose(this._taskCompleteCallbacks), _step9; !(_step9 = _iterator9()).done;) {
            var callback = _step9.value;
            try {
              callback(task);
            } catch (e) {
              console.error('任务完成回调执行错误', e);
            }
          }
        }

        /**
         * 触发任务奖励领取回调
         */;
        _proto.triggerTaskRewardClaimedCallbacks = function triggerTaskRewardClaimedCallbacks(task) {
          for (var _iterator10 = _createForOfIteratorHelperLoose(this._taskRewardClaimedCallbacks), _step10; !(_step10 = _iterator10()).done;) {
            var callback = _step10.value;
            try {
              callback(task);
            } catch (e) {
              console.error('任务奖励领取回调执行错误', e);
            }
          }
        }

        /**
         * 清理数据
         */;
        _proto.clearData = function clearData() {
          this._dailyTasks = [];
          this._achievementTasks = [];
          this._taskRecords = {};
          this._taskUpdateCallbacks = [];
          this._taskCompleteCallbacks = [];
          this._taskRewardClaimedCallbacks = [];
          this._onDailyTasksRefreshed = null;
        };
        return TaskManager;
      }());
      TaskManager._instance = null;
      // 任务类型枚举
      TaskManager.TaskType = {
        DAILY: 'daily',
        // 日常任务
        ACHIEVEMENT: 'achievement' // 成就任务
      };
      // 任务状态枚举
      TaskManager.TaskStatus = {
        UNACCEPTED: 'unaccepted',
        // 未接取
        ACCEPTED: 'accepted',
        // 已接取
        COMPLETED: 'completed',
        // 已完成
        REWARDED: 'rewarded' // 已领取奖励
      };

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TaskUI.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseUI.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, ToggleContainer, Node, Toggle, BaseUI;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      ToggleContainer = module.ToggleContainer;
      Node = module.Node;
      Toggle = module.Toggle;
    }, function (module) {
      BaseUI = module.BaseUI;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "b23eeVGI6FMuZ+mjnemgKxH", "TaskUI", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /**
       * 任务UI界面
       * 用于展示日常任务和成就任务，支持任务进度查看和奖励领取
       */
      var TaskUI = exports('TaskUI', (_dec = ccclass('TaskUI'), _dec2 = property(ToggleContainer), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_BaseUI) {
        _inheritsLoose(TaskUI, _BaseUI);
        function TaskUI() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BaseUI.call.apply(_BaseUI, [this].concat(args)) || this;
          // 任务分类切换容器
          _initializerDefineProperty(_this, "tabContainer", _descriptor, _assertThisInitialized(_this));
          // 日常任务列表节点
          _initializerDefineProperty(_this, "dailyTaskList", _descriptor2, _assertThisInitialized(_this));
          // 成就任务列表节点
          _initializerDefineProperty(_this, "achievementTaskList", _descriptor3, _assertThisInitialized(_this));
          // 任务详情弹窗节点
          _initializerDefineProperty(_this, "detailPopup", _descriptor4, _assertThisInitialized(_this));
          // 关闭按钮
          _initializerDefineProperty(_this, "closeButton", _descriptor5, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = TaskUI.prototype;
        _proto.onLoad = function onLoad() {
          // 绑定按钮事件
          if (this.closeButton) {
            this.closeButton.on(Node.EventType.TOUCH_END, this.onCloseClick, this);
          }

          // 绑定标签切换事件
          if (this.tabContainer) {
            this.tabContainer.node.on('toggle', this.onTabSwitch, this);
          }

          // 初始化任务界面
          this.initTaskUI();
        }

        /**
         * 初始化任务界面
         */;
        _proto.initTaskUI = function initTaskUI() {
          // TODO: 从TaskManager获取任务数据
          // TODO: 根据任务数据生成日常任务列表
          // TODO: 根据任务数据生成成就任务列表
          console.log('TaskUI initialized');
        }

        /**
         * 标签切换事件
         */;
        _proto.onTabSwitch = function onTabSwitch() {
          if (!this.tabContainer) return;
          var toggles = this.tabContainer.getComponentsInChildren(Toggle);
          if (toggles.length >= 2) {
            // 显示/隐藏对应的任务列表
            if (toggles[0].isChecked) {
              // 日常任务标签
              if (this.dailyTaskList) this.dailyTaskList.active = true;
              if (this.achievementTaskList) this.achievementTaskList.active = false;
            } else if (toggles[1].isChecked) {
              // 成就任务标签
              if (this.dailyTaskList) this.dailyTaskList.active = false;
              if (this.achievementTaskList) this.achievementTaskList.active = true;
            }
          }
        }

        /**
         * 显示任务详情
         * @param taskId 任务ID
         */;
        _proto.showTaskDetail = function showTaskDetail(taskId) {
          if (this.detailPopup) {
            // TODO: 根据任务ID显示任务详情
            this.detailPopup.active = true;
          }
        }

        /**
         * 领取任务奖励
         * @param taskId 任务ID
         */;
        _proto.claimReward = function claimReward(taskId) {
          // TODO: 调用TaskManager领取任务奖励
          console.log("Claim reward for task: " + taskId);

          // 领取奖励后刷新任务界面
          this.initTaskUI();
        }

        /**
         * 关闭按钮点击事件
         */;
        _proto.onCloseClick = function onCloseClick() {
          // 关闭界面
          this.hide();
        };
        _proto.onDestroy = function onDestroy() {
          // 移除按钮事件
          if (this.closeButton) {
            this.closeButton.off(Node.EventType.TOUCH_END, this.onCloseClick, this);
          }

          // 移除标签切换事件
          if (this.tabContainer) {
            this.tabContainer.node.off('toggle', this.onTabSwitch, this);
          }
          _BaseUI.prototype.onDestroy.call(this);
        };
        return TaskUI;
      }(BaseUI), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "tabContainer", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "dailyTaskList", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "achievementTaskList", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "detailPopup", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "closeButton", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ToastManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, director, Node, Layers, UITransform, Vec3, Sprite, Color, Label, tween, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      director = module.director;
      Node = module.Node;
      Layers = module.Layers;
      UITransform = module.UITransform;
      Vec3 = module.Vec3;
      Sprite = module.Sprite;
      Color = module.Color;
      Label = module.Label;
      tween = module.tween;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class, _class2;
      cclegacy._RF.push({}, "51fecjwW9FJF6g6izu0bC/I", "ToastManager", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ToastManager = exports('ToastManager', (_dec = ccclass('ToastManager'), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ToastManager, _Component);
        function ToastManager() {
          return _Component.apply(this, arguments) || this;
        }
        ToastManager.getInstance = function getInstance() {
          if (!ToastManager.instance) {
            ToastManager.instance = new ToastManager();
          }
          return ToastManager.instance;
        };
        var _proto = ToastManager.prototype;
        _proto.showMessage = function showMessage(message, duration) {
          if (duration === void 0) {
            duration = 3;
          }
          console.log('ToastManager:', message);

          // 获取当前场景
          var scene = director.getScene();
          if (!scene) {
            console.error('ToastManager: 无法获取当前场景');
            return;
          }

          // 获取Canvas节点
          var canvas = scene.getChildByName('Canvas');
          if (!canvas) {
            console.error('ToastManager: 无法获取Canvas节点');
            return;
          }

          // 创建Toast节点
          var toastNode = new Node('Toast');
          toastNode.layer = Layers.Enum.UI_2D;

          // 添加到Canvas下
          canvas.addChild(toastNode);

          // 创建UITransform组件
          var uiTransform = toastNode.addComponent(UITransform);
          uiTransform.setContentSize(700, 200); // 增加高度以适应多行文字

          // 创建背景节点
          var bgNode = new Node('Background');
          bgNode.layer = Layers.Enum.UI_2D;
          toastNode.addChild(bgNode);
          var bgTransform = bgNode.addComponent(UITransform);
          bgTransform.setContentSize(720, 220); // 增加背景大小以适应多行文字
          bgNode.position = new Vec3(0, 0, 0);

          // 创建背景Sprite组件
          var bgSprite = bgNode.addComponent(Sprite);
          bgSprite.color = new Color(0, 0, 0, 200); // 半透明黑色背景

          // 创建消息标签
          var label = new Node('Label');
          label.layer = Layers.Enum.UI_2D;
          toastNode.addChild(label);
          var labelComponent = label.addComponent(Label);
          labelComponent.string = message;
          labelComponent.fontSize = 40; // 稍微减小字体大小以适应多行显示
          labelComponent.color = new Color(255, 255, 255, 255); // 白色文字
          labelComponent.horizontalAlign = 1; // CENTER
          labelComponent.verticalAlign = 1; // CENTER
          labelComponent.overflow = 2; // RESIZE_HEIGHT - 根据宽度自动换行并调整高度

          var labelTransform = label.addComponent(UITransform);
          labelTransform.setContentSize(700, 100); // 设置宽度，高度会根据文字内容自动调整

          // 设置位置 - 相对于Canvas的中心位置，向上偏移一些
          toastNode.position = new Vec3(0, -350, 0);

          // 执行动画
          toastNode.setScale(0, 0, 0);
          tween(toastNode).to(0.3, {
            scale: new Vec3(1, 1, 1)
          }, {
            easing: 'backOut'
          }).delay(Math.max(0, duration - 0.6)).to(0.3, {
            scale: new Vec3(0, 0, 0)
          }, {
            easing: 'backIn'
          }).call(function () {
            toastNode.destroy();
          }).start();
        };
        return ToastManager;
      }(Component), _class2.instance = null, _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TuoDaoHuiMaSkill.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SkillBase.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, cclegacy, tween, Vec3, BaseSkill;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
    }, function (module) {
      cclegacy = module.cclegacy;
      tween = module.tween;
      Vec3 = module.Vec3;
    }, function (module) {
      BaseSkill = module.BaseSkill;
    }],
    execute: function () {
      cclegacy._RF.push({}, "68d12OnrlFP4L3Vsk12QuPw", "TuoDaoHuiMaSkill", undefined);

      /**
       * 拖刀回马技能实现
       * 功能：将收集区最后一个棋子返回棋盘
       */
      var TuoDaoHuiMaSkill = exports('TuoDaoHuiMaSkill', /*#__PURE__*/function (_BaseSkill) {
        _inheritsLoose(TuoDaoHuiMaSkill, _BaseSkill);
        function TuoDaoHuiMaSkill(config, gameUI) {
          var _this;
          _this = _BaseSkill.call(this, config) || this;
          _this.gameUI = void 0;
          _this.gameUI = gameUI;
          return _this;
        }

        /**
         * 执行技能效果
         * @param params 执行参数
         * @returns 是否执行成功
         */
        var _proto = TuoDaoHuiMaSkill.prototype;
        _proto.onExecute = /*#__PURE__*/
        function () {
          var _onExecute = _asyncToGenerator(function* (params) {
            try {
              console.log("\u6267\u884C\u6280\u80FD: " + this.config.name);

              // 获取收集区最后一个棋子
              var lastZi = this.getLastZiFromCollection();
              if (!lastZi) {
                console.warn('收集区没有棋子，无法执行拖刀回马技能');
                return false;
              }

              // 将棋子返回棋盘
              var success = yield this.returnZiToBoard(lastZi);
              if (success) {
                console.log("\u62D6\u5200\u56DE\u9A6C\u6280\u80FD\u6267\u884C\u6210\u529F\uFF0C\u5DF2\u5C06\u68CB\u5B50\u8FD4\u56DE\u68CB\u76D8");
                return true;
              } else {
                console.warn('拖刀回马技能执行失败，无法将棋子返回棋盘');
                return false;
              }
            } catch (error) {
              console.error('拖刀回马技能执行异常', error);
              return false;
            }
          });
          function onExecute(_x) {
            return _onExecute.apply(this, arguments);
          }
          return onExecute;
        }()
        /**
         * 获取收集区最后一个棋子
         * @returns 最后一个棋子或null
         */;

        _proto.getLastZiFromCollection = function getLastZiFromCollection() {
          // 通过Match3UI获取收集区棋子列表
          var collectionZiList = this.gameUI.m_PlaceHolders;
          if (!collectionZiList || collectionZiList.length === 0) {
            return null;
          }

          // 返回最后一个棋子
          return collectionZiList[collectionZiList.length - 1];
        }

        /**
         * 将棋子返回棋盘
         * @param zi 要返回的棋子
         * @returns 是否成功
         */;
        _proto.returnZiToBoard = /*#__PURE__*/
        function () {
          var _returnZiToBoard = _asyncToGenerator(function* (zi) {
            var _this2 = this;
            try {
              // 从收集区移除棋子
              var index = this.gameUI.m_PlaceHolders.indexOf(zi);
              if (index !== -1) {
                this.gameUI.m_PlaceHolders.splice(index, 1);
              }

              // 检查棋子是否有原始位置信息
              if (zi.row === undefined || zi.col === undefined) {
                console.warn('棋子缺少位置信息，无法返回棋盘');
                return false;
              }

              // 重置棋子的收集状态
              zi.isCollected = false;

              // 将棋子节点设置为棋盘节点的子节点
              zi.node.parent = this.gameUI.board;

              // 设置棋子的z-index，确保移动时始终在上层显示
              zi.node.setSiblingIndex(this.gameUI.board.children.length - 1);

              // 计算棋子原始位置的实际坐标
              // 根据Match3UI中的计算方式：col * 17, row * 20
              var targetX = zi.col * 17;
              var targetY = zi.row * 20;

              // 播放返回棋盘的动画
              yield new Promise(function (resolve) {
                tween(zi.node).to(0.3, {
                  position: new Vec3(targetX, targetY, 0)
                }).call(function () {
                  // 动画完成后，使用Match3UI的addZi方法将棋子添加回棋盘
                  _this2.gameUI.addZi(zi);

                  // 重新启用棋子的交互
                  if (zi && zi.setClickable) {
                    zi.setClickable(_this2.gameUI.calcClickable(zi));
                  }

                  // 更新受影响棋子的点击状态
                  _this2.updateAffectedZisClickable(zi);

                  // 更新UI显示
                  _this2.gameUI.updateUI();
                  resolve();
                }).start();
              });
              return true;
            } catch (error) {
              console.error('将棋子返回棋盘失败', error);
              return false;
            }
          });
          function returnZiToBoard(_x2) {
            return _returnZiToBoard.apply(this, arguments);
          }
          return returnZiToBoard;
        }()
        /**
         * 更新受影响棋子的点击状态
         * @param returnedZi 刚返回棋盘的棋子
         */;

        _proto.updateAffectedZisClickable = function updateAffectedZisClickable(returnedZi) {
          var _this3 = this;
          // 更新返回棋子自身下方的棋子的点击状态
          var stack = null;
          for (var r = 0; r < 6; r++) {
            for (var c = 0; c < 6; c++) {
              stack = this.gameUI.stacks[returnedZi.row + r][returnedZi.col + c];
              if (!stack.empty && stack.top && stack.top !== returnedZi) {
                // 更新栈顶棋子的点击状态
                if (stack.top.setClickable) {
                  stack.top.setClickable(this.gameUI.calcClickable(stack.top));
                }
              }
            }
          }

          // 更新所有可能被返回棋子遮挡的棋子的点击状态
          this.gameUI.m_ZiList.forEach(function (zi) {
            if (zi !== returnedZi && zi.setClickable) {
              zi.setClickable(_this3.gameUI.calcClickable(zi));
            }
          });
        }

        /**
         * 技能激活前逻辑
         * @param params 激活参数
         * @returns 是否可以激活
         */;
        _proto.onBeforeActivate = function onBeforeActivate(params) {
          // 检查收集区是否有棋子
          var collectionZiList = this.gameUI.m_PlaceHolders;
          if (!collectionZiList || collectionZiList.length === 0) {
            console.warn('收集区没有棋子，无法激活拖刀回马技能');
            return false;
          }
          return true;
        };
        return TuoDaoHuiMaSkill;
      }(BaseSkill));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UILayer.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "8cdf456KJFOCaPSMzYEYiCj", "UILayer", undefined);
      /**
       * UI层类型
       */
      var UILayer = exports('UILayer', /*#__PURE__*/function (UILayer) {
        UILayer[UILayer["Scene"] = 0] = "Scene";
        UILayer[UILayer["UI"] = 1] = "UI";
        UILayer[UILayer["Guide"] = 2] = "Guide";
        UILayer[UILayer["Anim"] = 3] = "Anim";
        UILayer[UILayer["Transform"] = 4] = "Transform";
        UILayer[UILayer["Loading"] = 5] = "Loading";
        UILayer[UILayer["Modal"] = 6] = "Modal";
        UILayer[UILayer["Toast"] = 7] = "Toast";
        return UILayer;
      }({}));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UIManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UILayer.ts', './ResLoader.ts'], function (exports) {
  var _asyncToGenerator, cclegacy, Size, js, assetManager, Prefab, instantiate, view, screen, ResolutionPolicy, Node, Layers, UITransform, UILayer, ResLoader;
  return {
    setters: [function (module) {
      _asyncToGenerator = module.asyncToGenerator;
    }, function (module) {
      cclegacy = module.cclegacy;
      Size = module.Size;
      js = module.js;
      assetManager = module.assetManager;
      Prefab = module.Prefab;
      instantiate = module.instantiate;
      view = module.view;
      screen = module.screen;
      ResolutionPolicy = module.ResolutionPolicy;
      Node = module.Node;
      Layers = module.Layers;
      UITransform = module.UITransform;
    }, function (module) {
      UILayer = module.UILayer;
    }, function (module) {
      ResLoader = module.ResLoader;
    }],
    execute: function () {
      exports({
        getUIClassBUrl: getUIClassBUrl,
        registerBUrlByCfg: registerBUrlByCfg,
        setUIClassBUrl: setUIClassBUrl
      });
      cclegacy._RF.push({}, "1034agU+/ZMOaaU/Snj3nnf", "UIManager", undefined);
      var g_KeyCls2BUrl = new Map();
      /**注册UI */
      function registerBUrlByCfg(cfg) {
        for (var _uiClassName in cfg) {
          g_KeyCls2BUrl.set(_uiClassName, cfg[_uiClassName]);
        }
      }
      var g_UICls2BUrl = new Map();

      /** 
       * 画布的标准化尺寸，就是之前说的
       * iPad 设备中的画布尺寸 = 1001 x 1334 (其中 1001 ≈ 1668/1.6672)
       * iPhone16设备中的画布尺寸 = 750 x1626（其中 1626 = 2556/1.572）
       */
      var G_VIEW_SIZE = exports('G_VIEW_SIZE', new Size(0, 0));
      /**
      * 适配屏幕
      */
      function adapterScreen() {
        //当前分辨率方案
        var resolutionPolicy = view.getResolutionPolicy();
        //视图的设计分辨率。
        var designSize = view.getDesignResolutionSize();
        //获取和设置当前窗口的物理像素尺寸。
        var frameSize = screen.windowSize;
        var frameW = frameSize.width;
        var frameH = frameSize.height;
        //是否是屏幕更宽
        var isScreenWidthLarger = frameW / frameH > designSize.width / designSize.height;
        //先适配小的，然后根据倍数，修改大的
        var targetResolutionPolicy = isScreenWidthLarger ? ResolutionPolicy.FIXED_HEIGHT : ResolutionPolicy.FIXED_WIDTH;
        if (targetResolutionPolicy != resolutionPolicy.getContentStrategy().strategy) {
          //保证设计分辨率的内容都能显示出来
          view.setDesignResolutionSize(designSize.width, designSize.height, targetResolutionPolicy);
          view.emit("canvas-resize");
        }

        /**实际的尺寸会和设计分辨率在一个维度，但是宽或高更大 */
        if (isScreenWidthLarger) {
          G_VIEW_SIZE.width = Math.ceil(designSize.height * frameSize.width / frameSize.height);
          G_VIEW_SIZE.height = designSize.height;
        } else {
          G_VIEW_SIZE.width = designSize.width;
          G_VIEW_SIZE.height = Math.ceil(designSize.width * frameSize.height / frameSize.width);
        }
        console.log("\u5C4F\u5E55" + (isScreenWidthLarger ? "更宽, 高度适配" : "更高, 宽度适配") + "\u8BBE\u8BA1\u5206\u8FA8\u7387\u6BD4\u4F8B\u4E0B\u7684\u5C4F\u5E55\u5C3A\u5BF8: " + G_VIEW_SIZE.width + "x" + G_VIEW_SIZE.height);
      }

      /**注册接口 */
      function setUIClassBUrl(uiClass, bUrl) {
        g_UICls2BUrl.set(uiClass, bUrl);
      }

      /**获取接口 */
      function getUIClassBUrl(uiClass) {
        //如果有类->BUrl的注册信息，直接拿
        if (g_UICls2BUrl.has(uiClass)) {
          return g_UICls2BUrl.get(uiClass);
        }
        //如果没有的话，从配置表拿
        var uiClassName = js.getClassName(uiClass);
        var bUrl = g_KeyCls2BUrl.get(uiClassName);
        if (!bUrl) {
          //没有找到类型对应的预制体
          debugger;
          console.error("没有找到类型对应的预制体");
          return null;
        }
        //缓存住
        g_UICls2BUrl.set(uiClass, bUrl);
        return bUrl;
      }

      // g_UICls2BUrl.set(Match3UI, createBundleObject("Match3UI", "Match3BN"));
      var MyLayer = function MyLayer(layer, canvas, name) {
        this.node = void 0;
        this.layer = layer;
        this.canvas = canvas;
        var node = this.node = new Node(name);
        node.layer = layer;
        if (!node.layer) {
          node.layer = Layers.Enum.UI_2D;
        }
        node.addComponent(UITransform);
        canvas.node.addChild(node);
      };
      /**
       * UI管理类
       */
      var UIManager = exports('default', /*#__PURE__*/function () {
        function UIManager() {
          this.m_Canvas = null;
          this.m_Layers = [];
        }
        var _proto = UIManager.prototype;
        // private constructor() {
        //     //私有化构造函数
        // }
        _proto.init = function init(canvas) {
          this.m_Canvas = canvas;
          adapterScreen();
          for (var _layer = UILayer.Scene, maxLayer = UILayer.Toast; _layer <= maxLayer; ++_layer) {
            this.m_Layers.push(new MyLayer(_layer, canvas, UILayer[_layer]));
          }
        }

        /**
         * 打开界面
         * @param uiClass 
         */
        /**
         * 打开UI界面
         * @param uiClass UI类
         * @returns 返回UI实例
         */;
        _proto.openUI = /*#__PURE__*/
        function () {
          var _openUI = _asyncToGenerator(function* (uiClass) {
            console.log('UIManager: 开始打开UI界面', js.getClassName(uiClass));

            //确定层级界面
            var viewLayer = typeof uiClass.viewLayer == 'number' ? uiClass.viewLayer : UILayer.UI;
            if (!viewLayer) {
              console.error('UIManager: UI类未定义viewLayer属性', js.getClassName(uiClass));
              throw new Error("UI\u7C7B " + js.getClassName(uiClass) + " \u672A\u5B9A\u4E49viewLayer\u5C5E\u6027");
            }

            // 获取UI配置
            var config = getUIClassBUrl(uiClass);
            if (!config) {
              console.error('UIManager: UI类未在PrefabCfg中注册', js.getClassName(uiClass));
              throw new Error("UI\u7C7B " + js.getClassName(uiClass) + " \u672A\u5728PrefabCfg\u4E2D\u6CE8\u518C");
            }
            console.log('UIManager: UI配置', config);
            var resLoader = new ResLoader();
            resLoader.addUI(uiClass);
            console.log('UIManager: 加载UI资源', {
              bundleName: config.bundleName,
              url: config.url
            });
            try {
              yield resLoader.load();
            } catch (error) {
              console.error('UIManager: 加载UI资源失败', error);
              throw new Error("\u52A0\u8F7DUI\u8D44\u6E90\u5931\u8D25: " + js.getClassName(uiClass));
            }
            console.log('UIManager: UI资源加载成功');
            var ui = this.instantiate(uiClass);
            if (!ui) {
              console.error('UIManager: UI实例化失败', js.getClassName(uiClass));
              throw new Error("UI\u5B9E\u4F8B\u5316\u5931\u8D25: " + js.getClassName(uiClass));
            }
            console.log('UIManager: UI实例化成功');
            this.m_Layers[viewLayer].node.addChild(ui.node);
            ui.getComponent(UITransform).setContentSize(G_VIEW_SIZE.clone());
            resLoader.autoRelease(ui);
            console.log('UIManager: UI界面打开成功', js.getClassName(uiClass));
            return ui;
          });
          function openUI(_x) {
            return _openUI.apply(this, arguments);
          }
          return openUI;
        }() /**实例化节点 */;
        _proto.instantiate = function instantiate$1(ueClass) {
          var bUrl = getUIClassBUrl(ueClass);
          var bundle = assetManager.getBundle(bUrl.bundleName);
          var prefab = bundle.get(bUrl.url, Prefab);
          var node = instantiate(prefab);
          return node.getComponent(ueClass) || node.addComponent(ueClass);
        };
        return UIManager;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/WechatAdAdapter.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AdManager.ts', './IAdAdapter.ts'], function (exports) {
  var _createForOfIteratorHelperLoose, cclegacy, AdType, AdEventType, AdLoadState;
  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      AdType = module.AdType;
      AdEventType = module.AdEventType;
    }, function (module) {
      AdLoadState = module.AdLoadState;
    }],
    execute: function () {
      cclegacy._RF.push({}, "98ff2sTuV9HsKjZwNqNiv9h", "WechatAdAdapter", undefined);

      /**
       * 微信小游戏广告适配器
       * 实现微信小游戏平台的广告功能
       */
      var WechatAdAdapter = exports('WechatAdAdapter', /*#__PURE__*/function () {
        /**
         * 构造函数
         */
        function WechatAdAdapter() {
          /**
           * 广告事件监听器列表
           */
          this.eventListeners = [];
          /**
           * 广告加载状态映射
           */
          this.adLoadStates = new Map();
          /**
           * 广告单元ID映射
           */
          this.adUnitIds = new Map();
          /**
           * 激励视频广告实例
           */
          this.rewardVideoAd = null;
          /**
           * 插屏广告实例
           */
          this.interstitialAd = null;
          // 初始化广告加载状态
          this.adLoadStates.set(AdType.REWARD_VIDEO, AdLoadState.NOT_LOADED);
          this.adLoadStates.set(AdType.INTERSTITIAL, AdLoadState.NOT_LOADED);
        }

        /**
         * 初始化广告适配器
         * @param adUnitIds 广告单元ID配置
         */
        var _proto = WechatAdAdapter.prototype;
        _proto.init = function init(adUnitIds) {
          console.log('WechatAdAdapter: 初始化微信小游戏广告适配器');

          // 检查是否在微信小游戏环境中
          if (typeof window === 'undefined' || !window['wx']) {
            console.error('WechatAdAdapter: 不在微信小游戏环境中');
            return;
          }

          // 保存广告单元ID
          for (var adType in adUnitIds) {
            if (adUnitIds[adType]) {
              this.adUnitIds.set(adType, adUnitIds[adType]);
              console.log("WechatAdAdapter: \u914D\u7F6E" + adType + "\u5E7F\u544A\u5355\u5143ID\u4E3A" + adUnitIds[adType]);
            }
          }

          // 初始化激励视频广告
          this.initRewardVideoAd();

          // 初始化插屏广告
          this.initInterstitialAd();
        }

        /**
         * 初始化激励视频广告
         */;
        _proto.initRewardVideoAd = function initRewardVideoAd() {
          var _this = this;
          var adUnitId = this.adUnitIds.get(AdType.REWARD_VIDEO);
          if (!adUnitId) {
            console.error('WechatAdAdapter: 激励视频广告单元ID未配置');
            return;
          }
          try {
            // 创建激励视频广告实例
            this.rewardVideoAd = window['wx'].createRewardedVideoAd({
              adUnitId: adUnitId
            });

            // 监听广告加载事件
            this.rewardVideoAd.onLoad(function () {
              console.log('WechatAdAdapter: 激励视频广告加载成功');
              _this.adLoadStates.set(AdType.REWARD_VIDEO, AdLoadState.LOADED);
              _this.triggerEvent({
                type: AdEventType.LOAD_SUCCESS,
                adType: AdType.REWARD_VIDEO,
                adUnitId: adUnitId
              });
            });

            // 监听广告加载失败事件
            this.rewardVideoAd.onError(function (err) {
              // 详细记录错误信息
              var errorDetails = {
                errCode: err.errCode || '未知错误代码',
                errMsg: err.errMsg || '未知错误消息',
                errDetail: err.errDetail || '无详细错误信息',
                fullError: JSON.stringify(err)
              };
              console.error('WechatAdAdapter: 激励视频广告加载失败', errorDetails);
              _this.adLoadStates.set(AdType.REWARD_VIDEO, AdLoadState.FAILED);
              _this.triggerEvent({
                type: AdEventType.LOAD_FAILED,
                adType: AdType.REWARD_VIDEO,
                adUnitId: adUnitId,
                error: err.errMsg || '未知错误'
              });
            });

            // 监听广告关闭事件
            this.rewardVideoAd.onClose(function (res) {
              console.log('WechatAdAdapter: 激励视频广告关闭', res);
              _this.adLoadStates.set(AdType.REWARD_VIDEO, AdLoadState.NOT_LOADED);

              // 如果用户完整观看了广告，触发奖励事件
              if (res && res.isEnded || res === undefined) {
                _this.triggerEvent({
                  type: AdEventType.REWARDED,
                  adType: AdType.REWARD_VIDEO,
                  adUnitId: adUnitId
                });
              } else {
                _this.triggerEvent({
                  type: AdEventType.CLOSED,
                  adType: AdType.REWARD_VIDEO,
                  adUnitId: adUnitId
                });
              }

              // 重新加载广告
              _this.loadAd(AdType.REWARD_VIDEO);
            });

            // 开始加载广告
            this.loadAd(AdType.REWARD_VIDEO);
          } catch (error) {
            console.error('WechatAdAdapter: 创建激励视频广告失败', error);
            this.adLoadStates.set(AdType.REWARD_VIDEO, AdLoadState.FAILED);
          }
        }

        /**
         * 初始化插屏广告
         */;
        _proto.initInterstitialAd = function initInterstitialAd() {
          var _this2 = this;
          var adUnitId = this.adUnitIds.get(AdType.INTERSTITIAL);
          if (!adUnitId) {
            console.error('WechatAdAdapter: 插屏广告单元ID未配置');
            return;
          }
          try {
            // 创建插屏广告实例
            this.interstitialAd = window['wx'].createInterstitialAd({
              adUnitId: adUnitId
            });

            // 监听广告加载事件
            this.interstitialAd.onLoad(function () {
              console.log('WechatAdAdapter: 插屏广告加载成功');
              _this2.adLoadStates.set(AdType.INTERSTITIAL, AdLoadState.LOADED);
              _this2.triggerEvent({
                type: AdEventType.LOAD_SUCCESS,
                adType: AdType.INTERSTITIAL,
                adUnitId: adUnitId
              });
            });

            // 监听广告加载失败事件
            this.interstitialAd.onError(function (err) {
              // 详细记录错误信息
              var errorDetails = {
                errCode: err.errCode || '未知错误代码',
                errMsg: err.errMsg || '未知错误消息',
                errDetail: err.errDetail || '无详细错误信息',
                fullError: JSON.stringify(err)
              };
              console.error('WechatAdAdapter: 插屏广告加载失败', errorDetails);
              _this2.adLoadStates.set(AdType.INTERSTITIAL, AdLoadState.FAILED);
              _this2.triggerEvent({
                type: AdEventType.LOAD_FAILED,
                adType: AdType.INTERSTITIAL,
                adUnitId: adUnitId,
                error: err.errMsg || '未知错误'
              });
            });

            // 监听广告关闭事件
            this.interstitialAd.onClose(function () {
              console.log('WechatAdAdapter: 插屏广告关闭');
              _this2.adLoadStates.set(AdType.INTERSTITIAL, AdLoadState.NOT_LOADED);
              _this2.triggerEvent({
                type: AdEventType.CLOSED,
                adType: AdType.INTERSTITIAL,
                adUnitId: adUnitId
              });

              // 重新加载广告
              _this2.loadAd(AdType.INTERSTITIAL);
            });

            // 开始加载广告
            this.loadAd(AdType.INTERSTITIAL);
          } catch (error) {
            console.error('WechatAdAdapter: 创建插屏广告失败', error);
            this.adLoadStates.set(AdType.INTERSTITIAL, AdLoadState.FAILED);
          }
        }

        /**
         * 加载广告
         * @param adType 广告类型
         */;
        _proto.loadAd = function loadAd(adType) {
          var _this3 = this;
          if (this.getAdLoadState(adType) === AdLoadState.LOADING) {
            console.log("WechatAdAdapter: " + adType + "\u5E7F\u544A\u6B63\u5728\u52A0\u8F7D\u4E2D\uFF0C\u8BF7\u52FF\u91CD\u590D\u52A0\u8F7D");
            return;
          }
          console.log("WechatAdAdapter: \u5F00\u59CB\u52A0\u8F7D" + adType + "\u5E7F\u544A");
          this.adLoadStates.set(adType, AdLoadState.LOADING);
          try {
            if (adType === AdType.REWARD_VIDEO && this.rewardVideoAd) {
              this.rewardVideoAd.load().then(function () {
                console.log("WechatAdAdapter: " + adType + "\u5E7F\u544A\u52A0\u8F7D\u6307\u4EE4\u53D1\u9001\u6210\u529F");
              })["catch"](function (err) {
                // 详细记录错误信息
                var errorDetails = {
                  errCode: err.errCode || '未知错误代码',
                  errMsg: err.errMsg || '未知错误消息',
                  errDetail: err.errDetail || '无详细错误信息',
                  fullError: JSON.stringify(err)
                };
                console.error("WechatAdAdapter: " + adType + "\u5E7F\u544A\u52A0\u8F7D\u5931\u8D25", errorDetails);
                _this3.adLoadStates.set(adType, AdLoadState.FAILED);
                _this3.triggerEvent({
                  type: AdEventType.LOAD_FAILED,
                  adType: adType,
                  adUnitId: _this3.adUnitIds.get(adType),
                  error: err.errMsg || '未知错误'
                });
              });
            } else if (adType === AdType.INTERSTITIAL && this.interstitialAd) {
              this.interstitialAd.load().then(function () {
                console.log("WechatAdAdapter: " + adType + "\u5E7F\u544A\u52A0\u8F7D\u6307\u4EE4\u53D1\u9001\u6210\u529F");
              })["catch"](function (err) {
                // 详细记录错误信息
                var errorDetails = {
                  errCode: err.errCode || '未知错误代码',
                  errMsg: err.errMsg || '未知错误消息',
                  errDetail: err.errDetail || '无详细错误信息',
                  fullError: JSON.stringify(err)
                };
                console.error("WechatAdAdapter: " + adType + "\u5E7F\u544A\u52A0\u8F7D\u5931\u8D25", errorDetails);
                _this3.adLoadStates.set(adType, AdLoadState.FAILED);
                _this3.triggerEvent({
                  type: AdEventType.LOAD_FAILED,
                  adType: adType,
                  adUnitId: _this3.adUnitIds.get(adType),
                  error: err.errMsg || '未知错误'
                });
              });
            } else {
              console.error("WechatAdAdapter: " + adType + "\u5E7F\u544A\u5B9E\u4F8B\u4E0D\u5B58\u5728");
              this.adLoadStates.set(adType, AdLoadState.FAILED);
            }
          } catch (error) {
            console.error("WechatAdAdapter: \u52A0\u8F7D" + adType + "\u5E7F\u544A\u5F02\u5E38", error);
            this.adLoadStates.set(adType, AdLoadState.FAILED);
          }
        }

        /**
         * 展示广告
         * @param adType 广告类型
         * @param rewardKey 奖励配置键（仅激励视频广告需要）
         * @returns 是否成功展示
         */;
        _proto.showAd = function showAd(adType, rewardKey) {
          var _this4 = this;
          if (!this.isAdLoaded(adType)) {
            console.log("WechatAdAdapter: " + adType + "\u5E7F\u544A\u672A\u52A0\u8F7D\uFF0C\u5C1D\u8BD5\u91CD\u65B0\u52A0\u8F7D");
            this.loadAd(adType);
            return false;
          }
          console.log("WechatAdAdapter: \u5F00\u59CB\u5C55\u793A" + adType + "\u5E7F\u544A");
          try {
            if (adType === AdType.REWARD_VIDEO && this.rewardVideoAd) {
              this.rewardVideoAd.show().then(function () {
                console.log("WechatAdAdapter: " + adType + "\u5E7F\u544A\u5C55\u793A\u6210\u529F");
                _this4.adLoadStates.set(adType, AdLoadState.NOT_LOADED);
                _this4.triggerEvent({
                  type: AdEventType.SHOW_SUCCESS,
                  adType: adType,
                  adUnitId: _this4.adUnitIds.get(adType)
                });
              })["catch"](function (err) {
                // 详细记录错误信息
                var errorDetails = {
                  errCode: err.errCode || '未知错误代码',
                  errMsg: err.errMsg || '未知错误消息',
                  errDetail: err.errDetail || '无详细错误信息',
                  fullError: JSON.stringify(err)
                };
                console.error("WechatAdAdapter: " + adType + "\u5E7F\u544A\u5C55\u793A\u5931\u8D25", errorDetails);
                _this4.triggerEvent({
                  type: AdEventType.SHOW_FAILED,
                  adType: adType,
                  adUnitId: _this4.adUnitIds.get(adType),
                  error: err.errMsg || '未知错误'
                });

                // 重新加载广告
                _this4.loadAd(adType);
              });
              return true;
            } else if (adType === AdType.INTERSTITIAL && this.interstitialAd) {
              this.interstitialAd.show().then(function () {
                console.log("WechatAdAdapter: " + adType + "\u5E7F\u544A\u5C55\u793A\u6210\u529F");
                _this4.adLoadStates.set(adType, AdLoadState.NOT_LOADED);
                _this4.triggerEvent({
                  type: AdEventType.SHOW_SUCCESS,
                  adType: adType,
                  adUnitId: _this4.adUnitIds.get(adType)
                });
              })["catch"](function (err) {
                // 详细记录错误信息
                var errorDetails = {
                  errCode: err.errCode || '未知错误代码',
                  errMsg: err.errMsg || '未知错误消息',
                  errDetail: err.errDetail || '无详细错误信息',
                  fullError: JSON.stringify(err)
                };
                console.error("WechatAdAdapter: " + adType + "\u5E7F\u544A\u5C55\u793A\u5931\u8D25", errorDetails);
                _this4.triggerEvent({
                  type: AdEventType.SHOW_FAILED,
                  adType: adType,
                  adUnitId: _this4.adUnitIds.get(adType),
                  error: err.errMsg || '未知错误'
                });

                // 重新加载广告
                _this4.loadAd(adType);
              });
              return true;
            } else {
              console.error("WechatAdAdapter: " + adType + "\u5E7F\u544A\u5B9E\u4F8B\u4E0D\u5B58\u5728");
              return false;
            }
          } catch (error) {
            console.error("WechatAdAdapter: \u5C55\u793A" + adType + "\u5E7F\u544A\u5F02\u5E38", error);
            return false;
          }
        }

        /**
         * 获取广告加载状态
         * @param adType 广告类型
         * @returns 广告加载状态
         */;
        _proto.getAdLoadState = function getAdLoadState(adType) {
          return this.adLoadStates.get(adType) || AdLoadState.NOT_LOADED;
        }

        /**
         * 检查广告是否已加载
         * @param adType 广告类型
         * @returns 是否已加载
         */;
        _proto.isAdLoaded = function isAdLoaded(adType) {
          return this.getAdLoadState(adType) === AdLoadState.LOADED;
        }

        /**
         * 添加广告事件监听器
         * @param listener 事件监听器
         */;
        _proto.addEventListener = function addEventListener(listener) {
          if (this.eventListeners.indexOf(listener) === -1) {
            this.eventListeners.push(listener);
          }
        }

        /**
         * 移除广告事件监听器
         * @param listener 事件监听器
         */;
        _proto.removeEventListener = function removeEventListener(listener) {
          var index = this.eventListeners.indexOf(listener);
          if (index !== -1) {
            this.eventListeners.splice(index, 1);
          }
        }

        /**
         * 触发广告事件
         * @param param 事件参数
         */;
        _proto.triggerEvent = function triggerEvent(param) {
          for (var _iterator = _createForOfIteratorHelperLoose(this.eventListeners), _step; !(_step = _iterator()).done;) {
            var listener = _step.value;
            try {
              listener(param);
            } catch (error) {
              console.error('WechatAdAdapter: 事件监听器执行错误', error);
            }
          }
        }

        /**
         * 销毁广告适配器，释放资源
         */;
        _proto.destroy = function destroy() {
          console.log('WechatAdAdapter: 销毁微信小游戏广告适配器');

          // 销毁激励视频广告
          if (this.rewardVideoAd) {
            this.rewardVideoAd.offLoad();
            this.rewardVideoAd.offError();
            this.rewardVideoAd.offClose();
            this.rewardVideoAd = null;
          }

          // 销毁插屏广告
          if (this.interstitialAd) {
            this.interstitialAd.offLoad();
            this.interstitialAd.offError();
            this.interstitialAd.offClose();
            this.interstitialAd = null;
          }

          // 清空事件监听器
          this.eventListeners = [];

          // 重置广告加载状态
          this.adLoadStates.set(AdType.REWARD_VIDEO, AdLoadState.NOT_LOADED);
          this.adLoadStates.set(AdType.INTERSTITIAL, AdLoadState.NOT_LOADED);
        };
        return WechatAdAdapter;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ZiStack.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createClass, cclegacy;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "9052aCLMdtHN6CD6hHmEa8p", "ZiStack", undefined);
      var ZiStack = exports('ZiStack', /*#__PURE__*/function () {
        function ZiStack() {
          /**用数组来实现栈 */
          this.m_Stack = [];
        }
        var _proto = ZiStack.prototype;
        /**添加的时候，放到数组最后一项 */
        _proto.push = function push(zi) {
          this.m_Stack.push(zi);
        }

        /**移除顶元素 */;
        _proto.pop = function pop() {
          return this.m_Stack.pop();
        };
        _createClass(ZiStack, [{
          key: "empty",
          get: /**栈是否为空 */
          function get() {
            return this.m_Stack.length == 0;
          }

          /**获取栈顶元素 */
        }, {
          key: "top",
          get: function get() {
            if (this.empty) {
              return null;
            }
            return this.m_Stack[this.m_Stack.length - 1];
          }
        }]);
        return ZiStack;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ZouZouEntry.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UILayer.ts', './ResLoader.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, cclegacy, _decorator, Node, Label, Button, Vec3, tween, Component, UILayer, ResLoader;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Label = module.Label;
      Button = module.Button;
      Vec3 = module.Vec3;
      tween = module.tween;
      Component = module.Component;
    }, function (module) {
      UILayer = module.UILayer;
    }, function (module) {
      ResLoader = module.ResLoader;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _class3;
      cclegacy._RF.push({}, "de6ff5rClhNqa1Z/5Oj8mOE", "ZouZouEntry", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /**
       * 走走三国入口界面
       */
      var ZouZouEntry = exports('ZouZouEntry', (_dec = ccclass('ZouZouEntry'), _dec2 = property(Node), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Button), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ZouZouEntry, _Component);
        function ZouZouEntry() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "contentNode", _descriptor, _assertThisInitialized(_this));
          // 内容节点
          _initializerDefineProperty(_this, "titleLabel", _descriptor2, _assertThisInitialized(_this));
          // 标题标签
          _initializerDefineProperty(_this, "descLabel", _descriptor3, _assertThisInitialized(_this));
          // 描述标签
          _initializerDefineProperty(_this, "closeButton", _descriptor4, _assertThisInitialized(_this));
          // 关闭按钮
          _this.resLoader = null;
          return _this;
        }
        // 资源加载器
        /**
         * 注册UI组件
         * @param loader 资源加载器
         */
        ZouZouEntry.R = function R(loader) {
          // 预加载资源
          console.log("ZouZouEntry: 注册UI组件");
        };
        var _proto = ZouZouEntry.prototype;
        _proto.onLoad = function onLoad() {
          // 初始化资源加载器
          this.resLoader = new ResLoader();
        };
        _proto.start = function start() {
          // 初始化UI
          this.initUI();

          // 注册按钮事件
          this.registerButtonEvents();

          // 添加入场动画
          this.addEnterAnimation();
        }

        /**
         * 初始化UI
         */;
        _proto.initUI = function initUI() {
          // 设置标题
          if (this.titleLabel) {
            this.titleLabel.string = '走走三国';
          }

          // 设置描述
          if (this.descLabel) {
            this.descLabel.string = '敬请期待';
          }
        }

        /**
         * 注册按钮事件
         */;
        _proto.registerButtonEvents = function registerButtonEvents() {
          // 关闭按钮点击事件
          if (this.closeButton) {
            this.closeButton.node.on(Button.EventType.CLICK, this.onCloseButtonClick, this);
          }
        }

        /**
         * 添加入场动画
         */;
        _proto.addEnterAnimation = function addEnterAnimation() {
          if (this.contentNode) {
            // 初始缩放为0
            this.contentNode.setScale(new Vec3(0, 0, 1));

            // 缩放动画
            tween(this.contentNode).to(0.3, {
              scale: new Vec3(1.1, 1.1, 1)
            }).to(0.1, {
              scale: new Vec3(1, 1, 1)
            }).start();
          }
        }

        /**
         * 添加退出动画
         */;
        _proto.addExitAnimation = function addExitAnimation() {
          var _this2 = this;
          return new Promise(function (resolve) {
            if (_this2.contentNode) {
              tween(_this2.contentNode).to(0.2, {
                scale: new Vec3(0.8, 0.8, 1)
              }).to(0.1, {
                scale: new Vec3(0, 0, 1)
              }).call(function () {
                resolve();
              }).start();
            } else {
              resolve();
            }
          });
        }

        /**
         * 关闭按钮点击事件处理
         */;
        _proto.onCloseButtonClick = /*#__PURE__*/
        function () {
          var _onCloseButtonClick = _asyncToGenerator(function* () {
            // 发送返回主界面事件到场景节点
            var scene = this.node.scene;
            if (scene) {
              scene.emit('BACK_TO_MAIN_SCENE');
              console.log('ZouZouEntry: 已发送BACK_TO_MAIN_SCENE事件到场景节点');
            } else {
              console.warn('ZouZouEntry: 无法获取场景节点，事件发送失败');
            }

            // 播放退出动画
            yield this.addExitAnimation();

            // 关闭界面
            this.close();
          });
          function onCloseButtonClick() {
            return _onCloseButtonClick.apply(this, arguments);
          }
          return onCloseButtonClick;
        }()
        /**
         * 关闭界面
         */;

        _proto.close = function close() {
          // 销毁节点
          this.node.destroy();
        }

        /**
         * 预留游戏开发接口
         */;
        _proto.startGame = function startGame() {
          console.log('走走三国游戏开发中...');
          // TODO: 实现游戏启动逻辑
        };

        _proto.onDestroy = function onDestroy() {
          // 移除按钮事件
          if (this.closeButton) {
            this.closeButton.node.off(Button.EventType.CLICK, this.onCloseButtonClick, this);
          }

          // 释放资源
          if (this.resLoader) {
            this.resLoader.releaseResRef();
            this.resLoader = null;
          }
        };
        return ZouZouEntry;
      }(Component), _class3.viewLayer = UILayer.UI, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "contentNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "titleLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "descLabel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "closeButton", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/GScriptBN', 'chunks:///_virtual/GScriptBN'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});