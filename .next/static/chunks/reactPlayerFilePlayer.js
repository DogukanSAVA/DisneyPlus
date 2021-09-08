"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["reactPlayerFilePlayer"],{

/***/ "./node_modules/react-player/lazy/players/FilePlayer.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-player/lazy/players/FilePlayer.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/react-player/lazy/utils.js");

var _patterns = __webpack_require__(/*! ../patterns */ "./node_modules/react-player/lazy/patterns.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var HAS_NAVIGATOR = typeof navigator !== 'undefined';
var IS_IPAD_PRO = HAS_NAVIGATOR && navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;
var IS_IOS = HAS_NAVIGATOR && (/iPad|iPhone|iPod/.test(navigator.userAgent) || IS_IPAD_PRO) && !window.MSStream;
var HLS_SDK_URL = 'https://cdn.jsdelivr.net/npm/hls.js@VERSION/dist/hls.min.js';
var HLS_GLOBAL = 'Hls';
var DASH_SDK_URL = 'https://cdnjs.cloudflare.com/ajax/libs/dashjs/VERSION/dash.all.min.js';
var DASH_GLOBAL = 'dashjs';
var FLV_SDK_URL = 'https://cdn.jsdelivr.net/npm/flv.js@VERSION/dist/flv.min.js';
var FLV_GLOBAL = 'flvjs';
var MATCH_DROPBOX_URL = /www\.dropbox\.com\/.+/;
var MATCH_CLOUDFLARE_STREAM = /https:\/\/watch\.cloudflarestream\.com\/([a-z0-9]+)/;
var REPLACE_CLOUDFLARE_STREAM = 'https://videodelivery.net/{id}/manifest/video.m3u8';

var FilePlayer = /*#__PURE__*/function (_Component) {
  _inherits(FilePlayer, _Component);

  var _super = _createSuper(FilePlayer);

  function FilePlayer() {
    var _this;

    _classCallCheck(this, FilePlayer);

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(_args));

    _defineProperty(_assertThisInitialized(_this), "onReady", function () {
      var _this$props;

      return (_this$props = _this.props).onReady.apply(_this$props, arguments);
    });

    _defineProperty(_assertThisInitialized(_this), "onPlay", function () {
      var _this$props2;

      return (_this$props2 = _this.props).onPlay.apply(_this$props2, arguments);
    });

    _defineProperty(_assertThisInitialized(_this), "onBuffer", function () {
      var _this$props3;

      return (_this$props3 = _this.props).onBuffer.apply(_this$props3, arguments);
    });

    _defineProperty(_assertThisInitialized(_this), "onBufferEnd", function () {
      var _this$props4;

      return (_this$props4 = _this.props).onBufferEnd.apply(_this$props4, arguments);
    });

    _defineProperty(_assertThisInitialized(_this), "onPause", function () {
      var _this$props5;

      return (_this$props5 = _this.props).onPause.apply(_this$props5, arguments);
    });

    _defineProperty(_assertThisInitialized(_this), "onEnded", function () {
      var _this$props6;

      return (_this$props6 = _this.props).onEnded.apply(_this$props6, arguments);
    });

    _defineProperty(_assertThisInitialized(_this), "onError", function () {
      var _this$props7;

      return (_this$props7 = _this.props).onError.apply(_this$props7, arguments);
    });

    _defineProperty(_assertThisInitialized(_this), "onEnablePIP", function () {
      var _this$props8;

      return (_this$props8 = _this.props).onEnablePIP.apply(_this$props8, arguments);
    });

    _defineProperty(_assertThisInitialized(_this), "onDisablePIP", function (e) {
      var _this$props9 = _this.props,
          onDisablePIP = _this$props9.onDisablePIP,
          playing = _this$props9.playing;
      onDisablePIP(e);

      if (playing) {
        _this.play();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onPresentationModeChange", function (e) {
      if (_this.player && (0, _utils.supportsWebKitPresentationMode)(_this.player)) {
        var webkitPresentationMode = _this.player.webkitPresentationMode;

        if (webkitPresentationMode === 'picture-in-picture') {
          _this.onEnablePIP(e);
        } else if (webkitPresentationMode === 'inline') {
          _this.onDisablePIP(e);
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onSeek", function (e) {
      _this.props.onSeek(e.target.currentTime);
    });

    _defineProperty(_assertThisInitialized(_this), "mute", function () {
      _this.player.muted = true;
    });

    _defineProperty(_assertThisInitialized(_this), "unmute", function () {
      _this.player.muted = false;
    });

    _defineProperty(_assertThisInitialized(_this), "renderSourceElement", function (source, index) {
      if (typeof source === 'string') {
        return /*#__PURE__*/_react["default"].createElement("source", {
          key: index,
          src: source
        });
      }

      return /*#__PURE__*/_react["default"].createElement("source", _extends({
        key: index
      }, source));
    });

    _defineProperty(_assertThisInitialized(_this), "renderTrack", function (track, index) {
      return /*#__PURE__*/_react["default"].createElement("track", _extends({
        key: index
      }, track));
    });

    _defineProperty(_assertThisInitialized(_this), "ref", function (player) {
      if (_this.player) {
        // Store previous player to be used by removeListeners()
        _this.prevPlayer = _this.player;
      }

      _this.player = player;
    });

    return _this;
  }

  _createClass(FilePlayer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.onMount && this.props.onMount(this);
      this.addListeners(this.player);

      if (IS_IOS) {
        this.player.load();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.shouldUseAudio(this.props) !== this.shouldUseAudio(prevProps)) {
        this.removeListeners(this.prevPlayer, prevProps.url);
        this.addListeners(this.player);
      }

      if (this.props.url !== prevProps.url && !(0, _utils.isMediaStream)(this.props.url)) {
        this.player.srcObject = null;
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.removeListeners(this.player);

      if (this.hls) {
        this.hls.destroy();
      }
    }
  }, {
    key: "addListeners",
    value: function addListeners(player) {
      var _this$props10 = this.props,
          url = _this$props10.url,
          playsinline = _this$props10.playsinline;
      player.addEventListener('play', this.onPlay);
      player.addEventListener('waiting', this.onBuffer);
      player.addEventListener('playing', this.onBufferEnd);
      player.addEventListener('pause', this.onPause);
      player.addEventListener('seeked', this.onSeek);
      player.addEventListener('ended', this.onEnded);
      player.addEventListener('error', this.onError);
      player.addEventListener('enterpictureinpicture', this.onEnablePIP);
      player.addEventListener('leavepictureinpicture', this.onDisablePIP);
      player.addEventListener('webkitpresentationmodechanged', this.onPresentationModeChange);

      if (!this.shouldUseHLS(url)) {
        // onReady is handled by hls.js
        player.addEventListener('canplay', this.onReady);
      }

      if (playsinline) {
        player.setAttribute('playsinline', '');
        player.setAttribute('webkit-playsinline', '');
        player.setAttribute('x5-playsinline', '');
      }
    }
  }, {
    key: "removeListeners",
    value: function removeListeners(player, url) {
      player.removeEventListener('canplay', this.onReady);
      player.removeEventListener('play', this.onPlay);
      player.removeEventListener('waiting', this.onBuffer);
      player.removeEventListener('playing', this.onBufferEnd);
      player.removeEventListener('pause', this.onPause);
      player.removeEventListener('seeked', this.onSeek);
      player.removeEventListener('ended', this.onEnded);
      player.removeEventListener('error', this.onError);
      player.removeEventListener('enterpictureinpicture', this.onEnablePIP);
      player.removeEventListener('leavepictureinpicture', this.onDisablePIP);
      player.removeEventListener('webkitpresentationmodechanged', this.onPresentationModeChange);

      if (!this.shouldUseHLS(url)) {
        // onReady is handled by hls.js
        player.removeEventListener('canplay', this.onReady);
      }
    } // Proxy methods to prevent listener leaks

  }, {
    key: "shouldUseAudio",
    value: function shouldUseAudio(props) {
      if (props.config.forceVideo) {
        return false;
      }

      if (props.config.attributes.poster) {
        return false; // Use <video> so that poster is shown
      }

      return _patterns.AUDIO_EXTENSIONS.test(props.url) || props.config.forceAudio;
    }
  }, {
    key: "shouldUseHLS",
    value: function shouldUseHLS(url) {
      if (this.props.config.forceHLS) {
        return true;
      }

      if (IS_IOS) {
        return false;
      }

      return _patterns.HLS_EXTENSIONS.test(url) || MATCH_CLOUDFLARE_STREAM.test(url);
    }
  }, {
    key: "shouldUseDASH",
    value: function shouldUseDASH(url) {
      return _patterns.DASH_EXTENSIONS.test(url) || this.props.config.forceDASH;
    }
  }, {
    key: "shouldUseFLV",
    value: function shouldUseFLV(url) {
      return _patterns.FLV_EXTENSIONS.test(url) || this.props.config.forceFLV;
    }
  }, {
    key: "load",
    value: function load(url) {
      var _this2 = this;

      var _this$props$config = this.props.config,
          hlsVersion = _this$props$config.hlsVersion,
          hlsOptions = _this$props$config.hlsOptions,
          dashVersion = _this$props$config.dashVersion,
          flvVersion = _this$props$config.flvVersion;

      if (this.hls) {
        this.hls.destroy();
      }

      if (this.dash) {
        this.dash.reset();
      }

      if (this.shouldUseHLS(url)) {
        (0, _utils.getSDK)(HLS_SDK_URL.replace('VERSION', hlsVersion), HLS_GLOBAL).then(function (Hls) {
          _this2.hls = new Hls(hlsOptions);

          _this2.hls.on(Hls.Events.MANIFEST_PARSED, function () {
            _this2.props.onReady();
          });

          _this2.hls.on(Hls.Events.ERROR, function (e, data) {
            _this2.props.onError(e, data, _this2.hls, Hls);
          });

          if (MATCH_CLOUDFLARE_STREAM.test(url)) {
            var id = url.match(MATCH_CLOUDFLARE_STREAM)[1];

            _this2.hls.loadSource(REPLACE_CLOUDFLARE_STREAM.replace('{id}', id));
          } else {
            _this2.hls.loadSource(url);
          }

          _this2.hls.attachMedia(_this2.player);

          _this2.props.onLoaded();
        });
      }

      if (this.shouldUseDASH(url)) {
        (0, _utils.getSDK)(DASH_SDK_URL.replace('VERSION', dashVersion), DASH_GLOBAL).then(function (dashjs) {
          _this2.dash = dashjs.MediaPlayer().create();

          _this2.dash.initialize(_this2.player, url, _this2.props.playing);

          _this2.dash.on('error', _this2.props.onError);

          if (parseInt(dashVersion) < 3) {
            _this2.dash.getDebug().setLogToBrowserConsole(false);
          } else {
            _this2.dash.updateSettings({
              debug: {
                logLevel: dashjs.Debug.LOG_LEVEL_NONE
              }
            });
          }

          _this2.props.onLoaded();
        });
      }

      if (this.shouldUseFLV(url)) {
        (0, _utils.getSDK)(FLV_SDK_URL.replace('VERSION', flvVersion), FLV_GLOBAL).then(function (flvjs) {
          _this2.flv = flvjs.createPlayer({
            type: 'flv',
            url: url
          });

          _this2.flv.attachMediaElement(_this2.player);

          _this2.flv.load();

          _this2.props.onLoaded();
        });
      }

      if (url instanceof Array) {
        // When setting new urls (<source>) on an already loaded video,
        // HTMLMediaElement.load() is needed to reset the media element
        // and restart the media resource. Just replacing children source
        // dom nodes is not enough
        this.player.load();
      } else if ((0, _utils.isMediaStream)(url)) {
        try {
          this.player.srcObject = url;
        } catch (e) {
          this.player.src = window.URL.createObjectURL(url);
        }
      }
    }
  }, {
    key: "play",
    value: function play() {
      var promise = this.player.play();

      if (promise) {
        promise["catch"](this.props.onError);
      }
    }
  }, {
    key: "pause",
    value: function pause() {
      this.player.pause();
    }
  }, {
    key: "stop",
    value: function stop() {
      this.player.removeAttribute('src');

      if (this.dash) {
        this.dash.reset();
      }
    }
  }, {
    key: "seekTo",
    value: function seekTo(seconds) {
      this.player.currentTime = seconds;
    }
  }, {
    key: "setVolume",
    value: function setVolume(fraction) {
      this.player.volume = fraction;
    }
  }, {
    key: "enablePIP",
    value: function enablePIP() {
      if (this.player.requestPictureInPicture && document.pictureInPictureElement !== this.player) {
        this.player.requestPictureInPicture();
      } else if ((0, _utils.supportsWebKitPresentationMode)(this.player) && this.player.webkitPresentationMode !== 'picture-in-picture') {
        this.player.webkitSetPresentationMode('picture-in-picture');
      }
    }
  }, {
    key: "disablePIP",
    value: function disablePIP() {
      if (document.exitPictureInPicture && document.pictureInPictureElement === this.player) {
        document.exitPictureInPicture();
      } else if ((0, _utils.supportsWebKitPresentationMode)(this.player) && this.player.webkitPresentationMode !== 'inline') {
        this.player.webkitSetPresentationMode('inline');
      }
    }
  }, {
    key: "setPlaybackRate",
    value: function setPlaybackRate(rate) {
      this.player.playbackRate = rate;
    }
  }, {
    key: "getDuration",
    value: function getDuration() {
      if (!this.player) return null;
      var _this$player = this.player,
          duration = _this$player.duration,
          seekable = _this$player.seekable; // on iOS, live streams return Infinity for the duration
      // so instead we use the end of the seekable timerange

      if (duration === Infinity && seekable.length > 0) {
        return seekable.end(seekable.length - 1);
      }

      return duration;
    }
  }, {
    key: "getCurrentTime",
    value: function getCurrentTime() {
      if (!this.player) return null;
      return this.player.currentTime;
    }
  }, {
    key: "getSecondsLoaded",
    value: function getSecondsLoaded() {
      if (!this.player) return null;
      var buffered = this.player.buffered;

      if (buffered.length === 0) {
        return 0;
      }

      var end = buffered.end(buffered.length - 1);
      var duration = this.getDuration();

      if (end > duration) {
        return duration;
      }

      return end;
    }
  }, {
    key: "getSource",
    value: function getSource(url) {
      var useHLS = this.shouldUseHLS(url);
      var useDASH = this.shouldUseDASH(url);
      var useFLV = this.shouldUseFLV(url);

      if (url instanceof Array || (0, _utils.isMediaStream)(url) || useHLS || useDASH || useFLV) {
        return undefined;
      }

      if (MATCH_DROPBOX_URL.test(url)) {
        return url.replace('www.dropbox.com', 'dl.dropboxusercontent.com');
      }

      return url;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props11 = this.props,
          url = _this$props11.url,
          playing = _this$props11.playing,
          loop = _this$props11.loop,
          controls = _this$props11.controls,
          muted = _this$props11.muted,
          config = _this$props11.config,
          width = _this$props11.width,
          height = _this$props11.height;
      var useAudio = this.shouldUseAudio(this.props);
      var Element = useAudio ? 'audio' : 'video';
      var style = {
        width: width === 'auto' ? width : '100%',
        height: height === 'auto' ? height : '100%'
      };
      return /*#__PURE__*/_react["default"].createElement(Element, _extends({
        ref: this.ref,
        src: this.getSource(url),
        style: style,
        preload: "auto",
        autoPlay: playing || undefined,
        controls: controls,
        muted: muted,
        loop: loop
      }, config.attributes), url instanceof Array && url.map(this.renderSourceElement), config.tracks.map(this.renderTrack));
    }
  }]);

  return FilePlayer;
}(_react.Component);

exports.default = FilePlayer;

_defineProperty(FilePlayer, "displayName", 'FilePlayer');

_defineProperty(FilePlayer, "canPlay", _patterns.canPlay.file);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQjtBQUN0Qjs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVc7O0FBRVg7QUFDQTtBQUNBLFdBQVc7O0FBRVg7QUFDQTs7QUFFQSxzRUFBc0UsR0FBRztBQUN6RSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDs7QUFFQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQzs7QUFFRCxlQUFrQjs7QUFFbEI7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXBsYXllci9sYXp5L3BsYXllcnMvRmlsZVBsYXllci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuXG52YXIgX3BhdHRlcm5zID0gcmVxdWlyZShcIi4uL3BhdHRlcm5zXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7IGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDsgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTsgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkgeyByZXR1cm4gY2FjaGU7IH07IHJldHVybiBjYWNoZTsgfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikgeyByZXR1cm4geyBcImRlZmF1bHRcIjogb2JqIH07IH0gdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7IGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkgeyByZXR1cm4gY2FjaGUuZ2V0KG9iaik7IH0gdmFyIG5ld09iaiA9IHt9OyB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHsgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7IGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTsgfSBlbHNlIHsgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgaWYgKGNhY2hlKSB7IGNhY2hlLnNldChvYmosIG5ld09iaik7IH0gcmV0dXJuIG5ld09iajsgfVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChEYXRlLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG52YXIgSEFTX05BVklHQVRPUiA9IHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnO1xudmFyIElTX0lQQURfUFJPID0gSEFTX05BVklHQVRPUiAmJiBuYXZpZ2F0b3IucGxhdGZvcm0gPT09ICdNYWNJbnRlbCcgJiYgbmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzID4gMTtcbnZhciBJU19JT1MgPSBIQVNfTkFWSUdBVE9SICYmICgvaVBhZHxpUGhvbmV8aVBvZC8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSB8fCBJU19JUEFEX1BSTykgJiYgIXdpbmRvdy5NU1N0cmVhbTtcbnZhciBITFNfU0RLX1VSTCA9ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2hscy5qc0BWRVJTSU9OL2Rpc3QvaGxzLm1pbi5qcyc7XG52YXIgSExTX0dMT0JBTCA9ICdIbHMnO1xudmFyIERBU0hfU0RLX1VSTCA9ICdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9kYXNoanMvVkVSU0lPTi9kYXNoLmFsbC5taW4uanMnO1xudmFyIERBU0hfR0xPQkFMID0gJ2Rhc2hqcyc7XG52YXIgRkxWX1NES19VUkwgPSAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9mbHYuanNAVkVSU0lPTi9kaXN0L2Zsdi5taW4uanMnO1xudmFyIEZMVl9HTE9CQUwgPSAnZmx2anMnO1xudmFyIE1BVENIX0RST1BCT1hfVVJMID0gL3d3d1xcLmRyb3Bib3hcXC5jb21cXC8uKy87XG52YXIgTUFUQ0hfQ0xPVURGTEFSRV9TVFJFQU0gPSAvaHR0cHM6XFwvXFwvd2F0Y2hcXC5jbG91ZGZsYXJlc3RyZWFtXFwuY29tXFwvKFthLXowLTldKykvO1xudmFyIFJFUExBQ0VfQ0xPVURGTEFSRV9TVFJFQU0gPSAnaHR0cHM6Ly92aWRlb2RlbGl2ZXJ5Lm5ldC97aWR9L21hbmlmZXN0L3ZpZGVvLm0zdTgnO1xuXG52YXIgRmlsZVBsYXllciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoRmlsZVBsYXllciwgX0NvbXBvbmVudCk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihGaWxlUGxheWVyKTtcblxuICBmdW5jdGlvbiBGaWxlUGxheWVyKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBGaWxlUGxheWVyKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBfYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIF9hcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwuYXBwbHkoX3N1cGVyLCBbdGhpc10uY29uY2F0KF9hcmdzKSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwib25SZWFkeVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHM7XG5cbiAgICAgIHJldHVybiAoX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcykub25SZWFkeS5hcHBseShfdGhpcyRwcm9wcywgYXJndW1lbnRzKTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJvblBsYXlcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzMjtcblxuICAgICAgcmV0dXJuIChfdGhpcyRwcm9wczIgPSBfdGhpcy5wcm9wcykub25QbGF5LmFwcGx5KF90aGlzJHByb3BzMiwgYXJndW1lbnRzKTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJvbkJ1ZmZlclwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMzO1xuXG4gICAgICByZXR1cm4gKF90aGlzJHByb3BzMyA9IF90aGlzLnByb3BzKS5vbkJ1ZmZlci5hcHBseShfdGhpcyRwcm9wczMsIGFyZ3VtZW50cyk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwib25CdWZmZXJFbmRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzNDtcblxuICAgICAgcmV0dXJuIChfdGhpcyRwcm9wczQgPSBfdGhpcy5wcm9wcykub25CdWZmZXJFbmQuYXBwbHkoX3RoaXMkcHJvcHM0LCBhcmd1bWVudHMpO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIm9uUGF1c2VcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzNTtcblxuICAgICAgcmV0dXJuIChfdGhpcyRwcm9wczUgPSBfdGhpcy5wcm9wcykub25QYXVzZS5hcHBseShfdGhpcyRwcm9wczUsIGFyZ3VtZW50cyk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwib25FbmRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHM2O1xuXG4gICAgICByZXR1cm4gKF90aGlzJHByb3BzNiA9IF90aGlzLnByb3BzKS5vbkVuZGVkLmFwcGx5KF90aGlzJHByb3BzNiwgYXJndW1lbnRzKTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJvbkVycm9yXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczc7XG5cbiAgICAgIHJldHVybiAoX3RoaXMkcHJvcHM3ID0gX3RoaXMucHJvcHMpLm9uRXJyb3IuYXBwbHkoX3RoaXMkcHJvcHM3LCBhcmd1bWVudHMpO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIm9uRW5hYmxlUElQXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczg7XG5cbiAgICAgIHJldHVybiAoX3RoaXMkcHJvcHM4ID0gX3RoaXMucHJvcHMpLm9uRW5hYmxlUElQLmFwcGx5KF90aGlzJHByb3BzOCwgYXJndW1lbnRzKTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJvbkRpc2FibGVQSVBcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczkgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBvbkRpc2FibGVQSVAgPSBfdGhpcyRwcm9wczkub25EaXNhYmxlUElQLFxuICAgICAgICAgIHBsYXlpbmcgPSBfdGhpcyRwcm9wczkucGxheWluZztcbiAgICAgIG9uRGlzYWJsZVBJUChlKTtcblxuICAgICAgaWYgKHBsYXlpbmcpIHtcbiAgICAgICAgX3RoaXMucGxheSgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIm9uUHJlc2VudGF0aW9uTW9kZUNoYW5nZVwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKF90aGlzLnBsYXllciAmJiAoMCwgX3V0aWxzLnN1cHBvcnRzV2ViS2l0UHJlc2VudGF0aW9uTW9kZSkoX3RoaXMucGxheWVyKSkge1xuICAgICAgICB2YXIgd2Via2l0UHJlc2VudGF0aW9uTW9kZSA9IF90aGlzLnBsYXllci53ZWJraXRQcmVzZW50YXRpb25Nb2RlO1xuXG4gICAgICAgIGlmICh3ZWJraXRQcmVzZW50YXRpb25Nb2RlID09PSAncGljdHVyZS1pbi1waWN0dXJlJykge1xuICAgICAgICAgIF90aGlzLm9uRW5hYmxlUElQKGUpO1xuICAgICAgICB9IGVsc2UgaWYgKHdlYmtpdFByZXNlbnRhdGlvbk1vZGUgPT09ICdpbmxpbmUnKSB7XG4gICAgICAgICAgX3RoaXMub25EaXNhYmxlUElQKGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwib25TZWVrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBfdGhpcy5wcm9wcy5vblNlZWsoZS50YXJnZXQuY3VycmVudFRpbWUpO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIm11dGVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMucGxheWVyLm11dGVkID0gdHJ1ZTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJ1bm11dGVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMucGxheWVyLm11dGVkID0gZmFsc2U7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwicmVuZGVyU291cmNlRWxlbWVudFwiLCBmdW5jdGlvbiAoc291cmNlLCBpbmRleCkge1xuICAgICAgaWYgKHR5cGVvZiBzb3VyY2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwic291cmNlXCIsIHtcbiAgICAgICAgICBrZXk6IGluZGV4LFxuICAgICAgICAgIHNyYzogc291cmNlXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL19yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcInNvdXJjZVwiLCBfZXh0ZW5kcyh7XG4gICAgICAgIGtleTogaW5kZXhcbiAgICAgIH0sIHNvdXJjZSkpO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInJlbmRlclRyYWNrXCIsIGZ1bmN0aW9uICh0cmFjaywgaW5kZXgpIHtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwidHJhY2tcIiwgX2V4dGVuZHMoe1xuICAgICAgICBrZXk6IGluZGV4XG4gICAgICB9LCB0cmFjaykpO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInJlZlwiLCBmdW5jdGlvbiAocGxheWVyKSB7XG4gICAgICBpZiAoX3RoaXMucGxheWVyKSB7XG4gICAgICAgIC8vIFN0b3JlIHByZXZpb3VzIHBsYXllciB0byBiZSB1c2VkIGJ5IHJlbW92ZUxpc3RlbmVycygpXG4gICAgICAgIF90aGlzLnByZXZQbGF5ZXIgPSBfdGhpcy5wbGF5ZXI7XG4gICAgICB9XG5cbiAgICAgIF90aGlzLnBsYXllciA9IHBsYXllcjtcbiAgICB9KTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhGaWxlUGxheWVyLCBbe1xuICAgIGtleTogXCJjb21wb25lbnREaWRNb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHRoaXMucHJvcHMub25Nb3VudCAmJiB0aGlzLnByb3BzLm9uTW91bnQodGhpcyk7XG4gICAgICB0aGlzLmFkZExpc3RlbmVycyh0aGlzLnBsYXllcik7XG5cbiAgICAgIGlmIChJU19JT1MpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXIubG9hZCgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb21wb25lbnREaWRVcGRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgICAgaWYgKHRoaXMuc2hvdWxkVXNlQXVkaW8odGhpcy5wcm9wcykgIT09IHRoaXMuc2hvdWxkVXNlQXVkaW8ocHJldlByb3BzKSkge1xuICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVycyh0aGlzLnByZXZQbGF5ZXIsIHByZXZQcm9wcy51cmwpO1xuICAgICAgICB0aGlzLmFkZExpc3RlbmVycyh0aGlzLnBsYXllcik7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLnVybCAhPT0gcHJldlByb3BzLnVybCAmJiAhKDAsIF91dGlscy5pc01lZGlhU3RyZWFtKSh0aGlzLnByb3BzLnVybCkpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXIuc3JjT2JqZWN0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50V2lsbFVubW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICB0aGlzLnJlbW92ZUxpc3RlbmVycyh0aGlzLnBsYXllcik7XG5cbiAgICAgIGlmICh0aGlzLmhscykge1xuICAgICAgICB0aGlzLmhscy5kZXN0cm95KCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImFkZExpc3RlbmVyc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRMaXN0ZW5lcnMocGxheWVyKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMxMCA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgdXJsID0gX3RoaXMkcHJvcHMxMC51cmwsXG4gICAgICAgICAgcGxheXNpbmxpbmUgPSBfdGhpcyRwcm9wczEwLnBsYXlzaW5saW5lO1xuICAgICAgcGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ3BsYXknLCB0aGlzLm9uUGxheSk7XG4gICAgICBwbGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcignd2FpdGluZycsIHRoaXMub25CdWZmZXIpO1xuICAgICAgcGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ3BsYXlpbmcnLCB0aGlzLm9uQnVmZmVyRW5kKTtcbiAgICAgIHBsYXllci5hZGRFdmVudExpc3RlbmVyKCdwYXVzZScsIHRoaXMub25QYXVzZSk7XG4gICAgICBwbGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcignc2Vla2VkJywgdGhpcy5vblNlZWspO1xuICAgICAgcGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ2VuZGVkJywgdGhpcy5vbkVuZGVkKTtcbiAgICAgIHBsYXllci5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIHRoaXMub25FcnJvcik7XG4gICAgICBwbGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcignZW50ZXJwaWN0dXJlaW5waWN0dXJlJywgdGhpcy5vbkVuYWJsZVBJUCk7XG4gICAgICBwbGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcignbGVhdmVwaWN0dXJlaW5waWN0dXJlJywgdGhpcy5vbkRpc2FibGVQSVApO1xuICAgICAgcGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ3dlYmtpdHByZXNlbnRhdGlvbm1vZGVjaGFuZ2VkJywgdGhpcy5vblByZXNlbnRhdGlvbk1vZGVDaGFuZ2UpO1xuXG4gICAgICBpZiAoIXRoaXMuc2hvdWxkVXNlSExTKHVybCkpIHtcbiAgICAgICAgLy8gb25SZWFkeSBpcyBoYW5kbGVkIGJ5IGhscy5qc1xuICAgICAgICBwbGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2FucGxheScsIHRoaXMub25SZWFkeSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChwbGF5c2lubGluZSkge1xuICAgICAgICBwbGF5ZXIuc2V0QXR0cmlidXRlKCdwbGF5c2lubGluZScsICcnKTtcbiAgICAgICAgcGxheWVyLnNldEF0dHJpYnV0ZSgnd2Via2l0LXBsYXlzaW5saW5lJywgJycpO1xuICAgICAgICBwbGF5ZXIuc2V0QXR0cmlidXRlKCd4NS1wbGF5c2lubGluZScsICcnKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVtb3ZlTGlzdGVuZXJzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVycyhwbGF5ZXIsIHVybCkge1xuICAgICAgcGxheWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NhbnBsYXknLCB0aGlzLm9uUmVhZHkpO1xuICAgICAgcGxheWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BsYXknLCB0aGlzLm9uUGxheSk7XG4gICAgICBwbGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignd2FpdGluZycsIHRoaXMub25CdWZmZXIpO1xuICAgICAgcGxheWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BsYXlpbmcnLCB0aGlzLm9uQnVmZmVyRW5kKTtcbiAgICAgIHBsYXllci5yZW1vdmVFdmVudExpc3RlbmVyKCdwYXVzZScsIHRoaXMub25QYXVzZSk7XG4gICAgICBwbGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Vla2VkJywgdGhpcy5vblNlZWspO1xuICAgICAgcGxheWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2VuZGVkJywgdGhpcy5vbkVuZGVkKTtcbiAgICAgIHBsYXllci5yZW1vdmVFdmVudExpc3RlbmVyKCdlcnJvcicsIHRoaXMub25FcnJvcik7XG4gICAgICBwbGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignZW50ZXJwaWN0dXJlaW5waWN0dXJlJywgdGhpcy5vbkVuYWJsZVBJUCk7XG4gICAgICBwbGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignbGVhdmVwaWN0dXJlaW5waWN0dXJlJywgdGhpcy5vbkRpc2FibGVQSVApO1xuICAgICAgcGxheWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3dlYmtpdHByZXNlbnRhdGlvbm1vZGVjaGFuZ2VkJywgdGhpcy5vblByZXNlbnRhdGlvbk1vZGVDaGFuZ2UpO1xuXG4gICAgICBpZiAoIXRoaXMuc2hvdWxkVXNlSExTKHVybCkpIHtcbiAgICAgICAgLy8gb25SZWFkeSBpcyBoYW5kbGVkIGJ5IGhscy5qc1xuICAgICAgICBwbGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2FucGxheScsIHRoaXMub25SZWFkeSk7XG4gICAgICB9XG4gICAgfSAvLyBQcm94eSBtZXRob2RzIHRvIHByZXZlbnQgbGlzdGVuZXIgbGVha3NcblxuICB9LCB7XG4gICAga2V5OiBcInNob3VsZFVzZUF1ZGlvXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNob3VsZFVzZUF1ZGlvKHByb3BzKSB7XG4gICAgICBpZiAocHJvcHMuY29uZmlnLmZvcmNlVmlkZW8pIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAocHJvcHMuY29uZmlnLmF0dHJpYnV0ZXMucG9zdGVyKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTsgLy8gVXNlIDx2aWRlbz4gc28gdGhhdCBwb3N0ZXIgaXMgc2hvd25cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF9wYXR0ZXJucy5BVURJT19FWFRFTlNJT05TLnRlc3QocHJvcHMudXJsKSB8fCBwcm9wcy5jb25maWcuZm9yY2VBdWRpbztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2hvdWxkVXNlSExTXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNob3VsZFVzZUhMUyh1cmwpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmNvbmZpZy5mb3JjZUhMUykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKElTX0lPUykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfcGF0dGVybnMuSExTX0VYVEVOU0lPTlMudGVzdCh1cmwpIHx8IE1BVENIX0NMT1VERkxBUkVfU1RSRUFNLnRlc3QodXJsKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2hvdWxkVXNlREFTSFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzaG91bGRVc2VEQVNIKHVybCkge1xuICAgICAgcmV0dXJuIF9wYXR0ZXJucy5EQVNIX0VYVEVOU0lPTlMudGVzdCh1cmwpIHx8IHRoaXMucHJvcHMuY29uZmlnLmZvcmNlREFTSDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2hvdWxkVXNlRkxWXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNob3VsZFVzZUZMVih1cmwpIHtcbiAgICAgIHJldHVybiBfcGF0dGVybnMuRkxWX0VYVEVOU0lPTlMudGVzdCh1cmwpIHx8IHRoaXMucHJvcHMuY29uZmlnLmZvcmNlRkxWO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJsb2FkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxvYWQodXJsKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIF90aGlzJHByb3BzJGNvbmZpZyA9IHRoaXMucHJvcHMuY29uZmlnLFxuICAgICAgICAgIGhsc1ZlcnNpb24gPSBfdGhpcyRwcm9wcyRjb25maWcuaGxzVmVyc2lvbixcbiAgICAgICAgICBobHNPcHRpb25zID0gX3RoaXMkcHJvcHMkY29uZmlnLmhsc09wdGlvbnMsXG4gICAgICAgICAgZGFzaFZlcnNpb24gPSBfdGhpcyRwcm9wcyRjb25maWcuZGFzaFZlcnNpb24sXG4gICAgICAgICAgZmx2VmVyc2lvbiA9IF90aGlzJHByb3BzJGNvbmZpZy5mbHZWZXJzaW9uO1xuXG4gICAgICBpZiAodGhpcy5obHMpIHtcbiAgICAgICAgdGhpcy5obHMuZGVzdHJveSgpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5kYXNoKSB7XG4gICAgICAgIHRoaXMuZGFzaC5yZXNldCgpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5zaG91bGRVc2VITFModXJsKSkge1xuICAgICAgICAoMCwgX3V0aWxzLmdldFNESykoSExTX1NES19VUkwucmVwbGFjZSgnVkVSU0lPTicsIGhsc1ZlcnNpb24pLCBITFNfR0xPQkFMKS50aGVuKGZ1bmN0aW9uIChIbHMpIHtcbiAgICAgICAgICBfdGhpczIuaGxzID0gbmV3IEhscyhobHNPcHRpb25zKTtcblxuICAgICAgICAgIF90aGlzMi5obHMub24oSGxzLkV2ZW50cy5NQU5JRkVTVF9QQVJTRUQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzMi5wcm9wcy5vblJlYWR5KCk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBfdGhpczIuaGxzLm9uKEhscy5FdmVudHMuRVJST1IsIGZ1bmN0aW9uIChlLCBkYXRhKSB7XG4gICAgICAgICAgICBfdGhpczIucHJvcHMub25FcnJvcihlLCBkYXRhLCBfdGhpczIuaGxzLCBIbHMpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgaWYgKE1BVENIX0NMT1VERkxBUkVfU1RSRUFNLnRlc3QodXJsKSkge1xuICAgICAgICAgICAgdmFyIGlkID0gdXJsLm1hdGNoKE1BVENIX0NMT1VERkxBUkVfU1RSRUFNKVsxXTtcblxuICAgICAgICAgICAgX3RoaXMyLmhscy5sb2FkU291cmNlKFJFUExBQ0VfQ0xPVURGTEFSRV9TVFJFQU0ucmVwbGFjZSgne2lkfScsIGlkKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF90aGlzMi5obHMubG9hZFNvdXJjZSh1cmwpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIF90aGlzMi5obHMuYXR0YWNoTWVkaWEoX3RoaXMyLnBsYXllcik7XG5cbiAgICAgICAgICBfdGhpczIucHJvcHMub25Mb2FkZWQoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnNob3VsZFVzZURBU0godXJsKSkge1xuICAgICAgICAoMCwgX3V0aWxzLmdldFNESykoREFTSF9TREtfVVJMLnJlcGxhY2UoJ1ZFUlNJT04nLCBkYXNoVmVyc2lvbiksIERBU0hfR0xPQkFMKS50aGVuKGZ1bmN0aW9uIChkYXNoanMpIHtcbiAgICAgICAgICBfdGhpczIuZGFzaCA9IGRhc2hqcy5NZWRpYVBsYXllcigpLmNyZWF0ZSgpO1xuXG4gICAgICAgICAgX3RoaXMyLmRhc2guaW5pdGlhbGl6ZShfdGhpczIucGxheWVyLCB1cmwsIF90aGlzMi5wcm9wcy5wbGF5aW5nKTtcblxuICAgICAgICAgIF90aGlzMi5kYXNoLm9uKCdlcnJvcicsIF90aGlzMi5wcm9wcy5vbkVycm9yKTtcblxuICAgICAgICAgIGlmIChwYXJzZUludChkYXNoVmVyc2lvbikgPCAzKSB7XG4gICAgICAgICAgICBfdGhpczIuZGFzaC5nZXREZWJ1ZygpLnNldExvZ1RvQnJvd3NlckNvbnNvbGUoZmFsc2UpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfdGhpczIuZGFzaC51cGRhdGVTZXR0aW5ncyh7XG4gICAgICAgICAgICAgIGRlYnVnOiB7XG4gICAgICAgICAgICAgICAgbG9nTGV2ZWw6IGRhc2hqcy5EZWJ1Zy5MT0dfTEVWRUxfTk9ORVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBfdGhpczIucHJvcHMub25Mb2FkZWQoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnNob3VsZFVzZUZMVih1cmwpKSB7XG4gICAgICAgICgwLCBfdXRpbHMuZ2V0U0RLKShGTFZfU0RLX1VSTC5yZXBsYWNlKCdWRVJTSU9OJywgZmx2VmVyc2lvbiksIEZMVl9HTE9CQUwpLnRoZW4oZnVuY3Rpb24gKGZsdmpzKSB7XG4gICAgICAgICAgX3RoaXMyLmZsdiA9IGZsdmpzLmNyZWF0ZVBsYXllcih7XG4gICAgICAgICAgICB0eXBlOiAnZmx2JyxcbiAgICAgICAgICAgIHVybDogdXJsXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBfdGhpczIuZmx2LmF0dGFjaE1lZGlhRWxlbWVudChfdGhpczIucGxheWVyKTtcblxuICAgICAgICAgIF90aGlzMi5mbHYubG9hZCgpO1xuXG4gICAgICAgICAgX3RoaXMyLnByb3BzLm9uTG9hZGVkKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAodXJsIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgLy8gV2hlbiBzZXR0aW5nIG5ldyB1cmxzICg8c291cmNlPikgb24gYW4gYWxyZWFkeSBsb2FkZWQgdmlkZW8sXG4gICAgICAgIC8vIEhUTUxNZWRpYUVsZW1lbnQubG9hZCgpIGlzIG5lZWRlZCB0byByZXNldCB0aGUgbWVkaWEgZWxlbWVudFxuICAgICAgICAvLyBhbmQgcmVzdGFydCB0aGUgbWVkaWEgcmVzb3VyY2UuIEp1c3QgcmVwbGFjaW5nIGNoaWxkcmVuIHNvdXJjZVxuICAgICAgICAvLyBkb20gbm9kZXMgaXMgbm90IGVub3VnaFxuICAgICAgICB0aGlzLnBsYXllci5sb2FkKCk7XG4gICAgICB9IGVsc2UgaWYgKCgwLCBfdXRpbHMuaXNNZWRpYVN0cmVhbSkodXJsKSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHRoaXMucGxheWVyLnNyY09iamVjdCA9IHVybDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHRoaXMucGxheWVyLnNyYyA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKHVybCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicGxheVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwbGF5KCkge1xuICAgICAgdmFyIHByb21pc2UgPSB0aGlzLnBsYXllci5wbGF5KCk7XG5cbiAgICAgIGlmIChwcm9taXNlKSB7XG4gICAgICAgIHByb21pc2VbXCJjYXRjaFwiXSh0aGlzLnByb3BzLm9uRXJyb3IpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJwYXVzZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwYXVzZSgpIHtcbiAgICAgIHRoaXMucGxheWVyLnBhdXNlKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInN0b3BcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgIHRoaXMucGxheWVyLnJlbW92ZUF0dHJpYnV0ZSgnc3JjJyk7XG5cbiAgICAgIGlmICh0aGlzLmRhc2gpIHtcbiAgICAgICAgdGhpcy5kYXNoLnJlc2V0KCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNlZWtUb1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZWVrVG8oc2Vjb25kcykge1xuICAgICAgdGhpcy5wbGF5ZXIuY3VycmVudFRpbWUgPSBzZWNvbmRzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRWb2x1bWVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0Vm9sdW1lKGZyYWN0aW9uKSB7XG4gICAgICB0aGlzLnBsYXllci52b2x1bWUgPSBmcmFjdGlvbjtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZW5hYmxlUElQXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGVuYWJsZVBJUCgpIHtcbiAgICAgIGlmICh0aGlzLnBsYXllci5yZXF1ZXN0UGljdHVyZUluUGljdHVyZSAmJiBkb2N1bWVudC5waWN0dXJlSW5QaWN0dXJlRWxlbWVudCAhPT0gdGhpcy5wbGF5ZXIpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXIucmVxdWVzdFBpY3R1cmVJblBpY3R1cmUoKTtcbiAgICAgIH0gZWxzZSBpZiAoKDAsIF91dGlscy5zdXBwb3J0c1dlYktpdFByZXNlbnRhdGlvbk1vZGUpKHRoaXMucGxheWVyKSAmJiB0aGlzLnBsYXllci53ZWJraXRQcmVzZW50YXRpb25Nb2RlICE9PSAncGljdHVyZS1pbi1waWN0dXJlJykge1xuICAgICAgICB0aGlzLnBsYXllci53ZWJraXRTZXRQcmVzZW50YXRpb25Nb2RlKCdwaWN0dXJlLWluLXBpY3R1cmUnKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZGlzYWJsZVBJUFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkaXNhYmxlUElQKCkge1xuICAgICAgaWYgKGRvY3VtZW50LmV4aXRQaWN0dXJlSW5QaWN0dXJlICYmIGRvY3VtZW50LnBpY3R1cmVJblBpY3R1cmVFbGVtZW50ID09PSB0aGlzLnBsYXllcikge1xuICAgICAgICBkb2N1bWVudC5leGl0UGljdHVyZUluUGljdHVyZSgpO1xuICAgICAgfSBlbHNlIGlmICgoMCwgX3V0aWxzLnN1cHBvcnRzV2ViS2l0UHJlc2VudGF0aW9uTW9kZSkodGhpcy5wbGF5ZXIpICYmIHRoaXMucGxheWVyLndlYmtpdFByZXNlbnRhdGlvbk1vZGUgIT09ICdpbmxpbmUnKSB7XG4gICAgICAgIHRoaXMucGxheWVyLndlYmtpdFNldFByZXNlbnRhdGlvbk1vZGUoJ2lubGluZScpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRQbGF5YmFja1JhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0UGxheWJhY2tSYXRlKHJhdGUpIHtcbiAgICAgIHRoaXMucGxheWVyLnBsYXliYWNrUmF0ZSA9IHJhdGU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldER1cmF0aW9uXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldER1cmF0aW9uKCkge1xuICAgICAgaWYgKCF0aGlzLnBsYXllcikgcmV0dXJuIG51bGw7XG4gICAgICB2YXIgX3RoaXMkcGxheWVyID0gdGhpcy5wbGF5ZXIsXG4gICAgICAgICAgZHVyYXRpb24gPSBfdGhpcyRwbGF5ZXIuZHVyYXRpb24sXG4gICAgICAgICAgc2Vla2FibGUgPSBfdGhpcyRwbGF5ZXIuc2Vla2FibGU7IC8vIG9uIGlPUywgbGl2ZSBzdHJlYW1zIHJldHVybiBJbmZpbml0eSBmb3IgdGhlIGR1cmF0aW9uXG4gICAgICAvLyBzbyBpbnN0ZWFkIHdlIHVzZSB0aGUgZW5kIG9mIHRoZSBzZWVrYWJsZSB0aW1lcmFuZ2VcblxuICAgICAgaWYgKGR1cmF0aW9uID09PSBJbmZpbml0eSAmJiBzZWVrYWJsZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiBzZWVrYWJsZS5lbmQoc2Vla2FibGUubGVuZ3RoIC0gMSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkdXJhdGlvbjtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0Q3VycmVudFRpbWVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q3VycmVudFRpbWUoKSB7XG4gICAgICBpZiAoIXRoaXMucGxheWVyKSByZXR1cm4gbnVsbDtcbiAgICAgIHJldHVybiB0aGlzLnBsYXllci5jdXJyZW50VGltZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0U2Vjb25kc0xvYWRlZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTZWNvbmRzTG9hZGVkKCkge1xuICAgICAgaWYgKCF0aGlzLnBsYXllcikgcmV0dXJuIG51bGw7XG4gICAgICB2YXIgYnVmZmVyZWQgPSB0aGlzLnBsYXllci5idWZmZXJlZDtcblxuICAgICAgaWYgKGJ1ZmZlcmVkLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH1cblxuICAgICAgdmFyIGVuZCA9IGJ1ZmZlcmVkLmVuZChidWZmZXJlZC5sZW5ndGggLSAxKTtcbiAgICAgIHZhciBkdXJhdGlvbiA9IHRoaXMuZ2V0RHVyYXRpb24oKTtcblxuICAgICAgaWYgKGVuZCA+IGR1cmF0aW9uKSB7XG4gICAgICAgIHJldHVybiBkdXJhdGlvbjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGVuZDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0U291cmNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFNvdXJjZSh1cmwpIHtcbiAgICAgIHZhciB1c2VITFMgPSB0aGlzLnNob3VsZFVzZUhMUyh1cmwpO1xuICAgICAgdmFyIHVzZURBU0ggPSB0aGlzLnNob3VsZFVzZURBU0godXJsKTtcbiAgICAgIHZhciB1c2VGTFYgPSB0aGlzLnNob3VsZFVzZUZMVih1cmwpO1xuXG4gICAgICBpZiAodXJsIGluc3RhbmNlb2YgQXJyYXkgfHwgKDAsIF91dGlscy5pc01lZGlhU3RyZWFtKSh1cmwpIHx8IHVzZUhMUyB8fCB1c2VEQVNIIHx8IHVzZUZMVikge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICBpZiAoTUFUQ0hfRFJPUEJPWF9VUkwudGVzdCh1cmwpKSB7XG4gICAgICAgIHJldHVybiB1cmwucmVwbGFjZSgnd3d3LmRyb3Bib3guY29tJywgJ2RsLmRyb3Bib3h1c2VyY29udGVudC5jb20nKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHVybDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczExID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICB1cmwgPSBfdGhpcyRwcm9wczExLnVybCxcbiAgICAgICAgICBwbGF5aW5nID0gX3RoaXMkcHJvcHMxMS5wbGF5aW5nLFxuICAgICAgICAgIGxvb3AgPSBfdGhpcyRwcm9wczExLmxvb3AsXG4gICAgICAgICAgY29udHJvbHMgPSBfdGhpcyRwcm9wczExLmNvbnRyb2xzLFxuICAgICAgICAgIG11dGVkID0gX3RoaXMkcHJvcHMxMS5tdXRlZCxcbiAgICAgICAgICBjb25maWcgPSBfdGhpcyRwcm9wczExLmNvbmZpZyxcbiAgICAgICAgICB3aWR0aCA9IF90aGlzJHByb3BzMTEud2lkdGgsXG4gICAgICAgICAgaGVpZ2h0ID0gX3RoaXMkcHJvcHMxMS5oZWlnaHQ7XG4gICAgICB2YXIgdXNlQXVkaW8gPSB0aGlzLnNob3VsZFVzZUF1ZGlvKHRoaXMucHJvcHMpO1xuICAgICAgdmFyIEVsZW1lbnQgPSB1c2VBdWRpbyA/ICdhdWRpbycgOiAndmlkZW8nO1xuICAgICAgdmFyIHN0eWxlID0ge1xuICAgICAgICB3aWR0aDogd2lkdGggPT09ICdhdXRvJyA/IHdpZHRoIDogJzEwMCUnLFxuICAgICAgICBoZWlnaHQ6IGhlaWdodCA9PT0gJ2F1dG8nID8gaGVpZ2h0IDogJzEwMCUnXG4gICAgICB9O1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9fcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoRWxlbWVudCwgX2V4dGVuZHMoe1xuICAgICAgICByZWY6IHRoaXMucmVmLFxuICAgICAgICBzcmM6IHRoaXMuZ2V0U291cmNlKHVybCksXG4gICAgICAgIHN0eWxlOiBzdHlsZSxcbiAgICAgICAgcHJlbG9hZDogXCJhdXRvXCIsXG4gICAgICAgIGF1dG9QbGF5OiBwbGF5aW5nIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgY29udHJvbHM6IGNvbnRyb2xzLFxuICAgICAgICBtdXRlZDogbXV0ZWQsXG4gICAgICAgIGxvb3A6IGxvb3BcbiAgICAgIH0sIGNvbmZpZy5hdHRyaWJ1dGVzKSwgdXJsIGluc3RhbmNlb2YgQXJyYXkgJiYgdXJsLm1hcCh0aGlzLnJlbmRlclNvdXJjZUVsZW1lbnQpLCBjb25maWcudHJhY2tzLm1hcCh0aGlzLnJlbmRlclRyYWNrKSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEZpbGVQbGF5ZXI7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IEZpbGVQbGF5ZXI7XG5cbl9kZWZpbmVQcm9wZXJ0eShGaWxlUGxheWVyLCBcImRpc3BsYXlOYW1lXCIsICdGaWxlUGxheWVyJyk7XG5cbl9kZWZpbmVQcm9wZXJ0eShGaWxlUGxheWVyLCBcImNhblBsYXlcIiwgX3BhdHRlcm5zLmNhblBsYXkuZmlsZSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9