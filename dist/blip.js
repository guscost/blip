!function(e){function r(e,r,t){e in l||(l[e]={name:e,declarative:!0,deps:r,declare:t,normalizedDeps:r})}function t(e){return p[e]||(p[e]={name:e,dependencies:[],exports:{},importers:[]})}function n(r){if(!r.module){var o=r.module=t(r.name),a=r.module.exports,u=r.declare.call(e,function(e,r){if(o.locked=!0,"object"==typeof e)for(var t in e)a[t]=e[t];else a[e]=r;for(var n=0,u=o.importers.length;u>n;n++){var i=o.importers[n];if(!i.locked)for(var l=0;l<i.dependencies.length;++l)i.dependencies[l]===o&&i.setters[l](a)}return o.locked=!1,r},r.name);o.setters=u.setters,o.execute=u.execute;for(var s=0,d=r.normalizedDeps.length;d>s;s++){var f,c=r.normalizedDeps[s],v=l[c],m=p[c];m?f=m.exports:v&&!v.declarative?f=v.esModule:v?(n(v),m=v.module,f=m.exports):f=i(c),m&&m.importers?(m.importers.push(o),o.dependencies.push(m)):o.dependencies.push(null),o.setters[s]&&o.setters[s](f)}}}function o(r){var t={};if(("object"==typeof r||"function"==typeof r)&&r!==e)if(d)for(var n in r)"default"!==n&&a(t,r,n);else{var o=r&&r.hasOwnProperty;for(var n in r)"default"===n||o&&!r.hasOwnProperty(n)||(t[n]=r[n])}return t["default"]=r,c(t,"__useDefault",{value:!0}),t}function a(e,r,t){try{var n;(n=Object.getOwnPropertyDescriptor(r,t))&&c(e,t,n)}catch(o){return e[t]=r[t],!1}}function u(r,t){var n=l[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,a=n.normalizedDeps.length;a>o;o++){var d=n.normalizedDeps[o];-1==s.call(t,d)&&(l[d]?u(d,t):i(d))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function i(e){if(m[e])return m[e];if("@node/"==e.substr(0,6))return m[e]=o(v(e.substr(6)));var r=l[e];if(!r)throw"Module "+e+" not present.";return n(l[e]),u(e,[]),l[e]=void 0,r.declarative&&c(r.module.exports,"__esModule",{value:!0}),m[e]=r.declarative?r.module.exports:r.esModule}var l={},s=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},d=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(f){d=!1}var c;!function(){try{Object.defineProperty({},"a",{})&&(c=Object.defineProperty)}catch(e){c=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var p={},v="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&require.resolve&&"undefined"!=typeof process&&require,m={"@empty":{}};return function(e,t,n,a){return function(u){u(function(u){for(var l=0;l<t.length;l++)(function(e,r){r&&r.__esModule?m[e]=r:m[e]=o(r)})(t[l],arguments[l]);a({register:r});var s=i(e[0]);if(e.length>1)for(var l=1;l<e.length;l++)i(e[l]);return n?s["default"]:s})}}}("undefined"!=typeof self?self:global)

(["1"], [], false, function($__System) {
var require = this.require, exports = this.exports, module = this.module;
$__System.register('2', ['3', '4'], function (_export, _context) {
  "use strict";

  var ctx, BlipNode, destination;
  return {
    setters: [function (_) {
      ctx = _.default;
    }, function (_2) {
      BlipNode = _2.default;
    }],
    execute: function () {
      destination = BlipNode.fromAudioNode(ctx.destination);

      _export('default', destination);
    }
  };
});
$__System.register("5", [], function (_export, _context) {
  "use strict";

  /**
   * Generates a GUID string.
   * @returns {String} The generated GUID.
   * @example af8a8416-6e18-a307-bd9c-f2c947bbb3aa
   * @author Slavik Meltser (slavik@meltser.info).
   * @link http://slavik.meltser.info/?p=142
   */
  function guid() {
    function _p8(s) {
      var p = (Math.random().toString(16) + "000000000").substr(2, 8);
      return s ? "-" + p.substr(0, 4) + "-" + p.substr(4, 4) : p;
    }
    return _p8() + _p8(true) + _p8(true) + _p8();
  }

  return {
    setters: [],
    execute: function () {
      _export("default", guid);
    }
  };
});
$__System.register("6", [], function (_export, _context) {
  "use strict";

  function BlipNodeCollection(nodes) {
    this.nodes = nodes || [];
  }

  return {
    setters: [],
    execute: function () {
      BlipNodeCollection.prototype = {

        count: function count() {
          return this.nodes.length;
        },

        each: function each(f) {
          for (var i = 0; i < this.nodes.length; i++) {
            f.call(this, this.nodes[i], i, this.nodes);
          }
        },

        contains: function contains(node) {
          for (var i = 0; i < this.nodes.length; i++) {
            if (this.nodes[i] === node) return true;
          }
          return false;
        },

        add: function add(node) {
          if (this.nodes.indexOf(node) === -1) this.nodes.push(node);
        },

        remove: function remove(node) {
          var index = this.nodes.indexOf(node);
          if (index !== -1) this.nodes.splice(index, 1);
        },

        removeAll: function removeAll() {
          this.nodes = [];
        }

      };

      _export("default", BlipNodeCollection);
    }
  };
});
$__System.register('4', ['3', '5', '6'], function (_export, _context) {
  "use strict";

  var ctx, guid, BlipNodeCollection, NODE_TYPES;


  // alias
  function BlipNode() {
    this.inputs = new BlipNodeCollection();
    this.outputs = new BlipNodeCollection();
    return this;
  }return {
    setters: [function (_) {
      ctx = _.default;
    }, function (_2) {
      guid = _2.default;
    }, function (_3) {
      BlipNodeCollection = _3.default;
    }],
    execute: function () {
      NODE_TYPES = {
        'gain': ctx.createGain,
        'delay': ctx.createDelay,
        'panner': ctx.createPanner,
        'convolver': ctx.createConvolver,
        'analyser': ctx.createAnalyser,
        'channelSplitter': ctx.createChannelSplitter,
        'channelMerger': ctx.createChannelMerger,
        'dynamicsCompressor': ctx.createDynamicsCompressor,
        'biquadFilter': ctx.createBiquadFilter,
        'waveShaper': ctx.createWaveShaper,
        'oscillator': ctx.createOscillator,
        'periodicWave': ctx.createPeriodicWave,
        'bufferSource': ctx.createBufferSource,
        'audioBufferSource': ctx.createBufferSource };
      ;

      BlipNode.prototype.connect = function (blipnode) {
        if (this.node().numberOfOutputs > 0 && blipnode.node().numberOfInputs > 0) {
          this.node().connect(blipnode.node());
          this.outputs.add(blipnode);
          blipnode.inputs.add(this);
        }
        return this;
      };

      BlipNode.prototype.disconnect = function (blipnode) {
        // disconnect all
        this.node().disconnect();

        var me = this;

        if (blipnode) {
          this.outputs.remove(blipnode);
          blipnode.inputs.remove(this);

          // reconnect to remaining outputs
          this.outputs.each(function (n) {
            this.connect(n);
          });
        } else {
          this.outputs.each(function (n) {
            n.inputs.remove(me);
          });
          this.outputs.removeAll();
        }

        return this;
      };

      BlipNode.prototype.prop = function (name, value) {
        if (arguments.length < 2) {
          if (typeof name === 'object') {
            for (var p in name) {
              this.node()[p] = name[p];
            }
            return this;
          } else {
            return this.node()[name];
          }
        }
        this.node()[name] = value;
        return this;
      };

      BlipNode.prototype.param = function (name, f) {
        if (arguments.length < 2) return this.node()[name];
        if (typeof f !== 'function') {
          this.node()[name].value = f;
        } else {
          f.call(this.node()[name]);
        }
        return this;
      };

      BlipNode.prototype.start = function (t) {
        this.node().start.call(this.node(), t);
      };

      BlipNode.prototype.stop = function (t) {
        this.node().stop.call(this.node(), t);
      };

      BlipNode.prototype.node = function () {
        return this.node();
      };

      BlipNode.prototype.toString = function () {
        return '[object BlipNode]';
      };

      BlipNode.prototype.valueOf = function () {
        return this.id();
      };

      BlipNode.prototype.call = function (methodName) {
        var args = Array.prototype.slice.call(arguments, 1);
        var node = this.node();
        if (typeof node[methodName] !== 'function') return;
        node[methodName].apply(node, args);
      };

      // wrap an existing AudioNode as a BlipNode
      BlipNode.fromAudioNode = function (ref) {
        var node = new BlipNode();
        var id = guid();
        node.node = function () {
          return ref;
        };
        node.id = function () {
          return id;
        };
        return node;
      };

      BlipNode.create = function (type) {
        var restParams = Array.prototype.slice.call(arguments, 1);
        var ref = createNode(type);
        var id = guid();

        var node = new BlipNode();

        function createNode(t) {
          return NODE_TYPES[t].apply(ctx, restParams);
        }

        node.node = function () {
          return ref;
        };
        node.id = function () {
          return id;
        };
        return node;
      };

      _export('default', BlipNode);
    }
  };
});
$__System.register('7', ['3', '2', '4', '8'], function (_export, _context) {
  "use strict";

  var ctx, destination, BlipNode, sampleLibrary, clipFactory;
  return {
    setters: [function (_) {
      ctx = _.default;
    }, function (_2) {
      destination = _2.default;
    }, function (_3) {
      BlipNode = _3.default;
    }, function (_4) {
      sampleLibrary = _4.default;
    }],
    execute: function () {
      clipFactory = function clipFactory() {
        var sample = undefined,
            rate = 1,
            gain = 1;

        var chain = null;

        var outputGain = BlipNode.create('gain').connect(destination);

        var clip = {};

        clip.sample = function (name) {
          if (!arguments.length) return sample;
          sample = sampleLibrary.get(name);
          return clip;
        };
        clip.rate = function (number) {
          if (!arguments.length) return rate;
          rate = number;
          return clip;
        };
        clip.gain = function (number) {
          if (!arguments.length) return gain;
          gain = number;
          outputGain.param('gain', gain);
          return clip;
        };
        clip.chain = function (c) {
          if (!arguments.length) return chain;
          chain = c;
          outputGain.disconnect(destination);
          chain.from(outputGain).to(destination);
          return clip;
        };
        clip.play = function (time, sourceAccessor) {
          time = time || 0;
          var source = ctx.createBufferSource();
          source.buffer = sample;
          source.playbackRate.value = clip.rate();
          if (typeof sourceAccessor === 'function') {
            sourceAccessor.call(clip, source);
          }
          source.connect(outputGain.node());
          source.start(time);
        };
        return clip;
      };

      _export('default', clipFactory);
    }
  };
});
$__System.register("9", [], function (_export, _context) {
  "use strict";

  var chainFactory;
  return {
    setters: [],
    execute: function () {
      chainFactory = function chainFactory(nodes) {
        nodes = nodes || [];

        wire();

        function wire() {
          for (var i = 0; i < nodes.length - 1; i++) {
            nodes[i].connect(nodes[i + 1]);
          }
        }

        var chain = {};

        chain.node = function (blipnode) {
          nodes.push(blipnode);
          wire();
          return chain;
        };
        chain.start = function () {
          var a = nodes.slice(0, 1);
          return a.length ? a[0] : null;
        };
        chain.end = function () {
          var a = nodes.slice(-1);
          return a.length ? a[0] : null;
        };
        chain.from = function (blipnode) {
          blipnode.connect(chain.start());
          return chain;
        };
        chain.to = function (blipnode) {
          chain.end().connect(blipnode);
          return chain;
        };
        chain.wire = function () {
          wire();
          return chain;
        };

        return chain;
      };

      _export("default", chainFactory);
    }
  };
});
$__System.register('a', ['3'], function (_export, _context) {
  "use strict";

  var ctx, loopFactory;
  return {
    setters: [function (_) {
      ctx = _.default;
    }],
    execute: function () {
      loopFactory = function loopFactory() {
        var lookahead = 25.0,

        // ms
        scheduleAheadTime = 0.1; // s

        var tempo = undefined; // ticks per minute

        var tickInterval = undefined; // seconds per tick

        var data = [];

        var currentTick = 0,
            nextTickTime = 0;

        var tick = function tick(t, d, i) {};
        var each = function each(t, i) {};

        var iterations = 0,
            limit = 0;

        var timer = undefined;

        var loop = {};

        function nextTick() {
          nextTickTime += tickInterval;

          // cycle through ticks
          if (++currentTick >= data.length) {
            currentTick = 0;
            iterations += 1;
          }
        }

        function scheduleTick(tickNum, time) {
          tick.call(loop, time, data[tickNum], tickNum);
        }

        function scheduleIteration(iterationNum, time) {
          each.call(loop, time, iterationNum);
        }

        function scheduler() {
          while (nextTickTime < ctx.currentTime + scheduleAheadTime) {
            scheduleTick(currentTick, nextTickTime);
            if (currentTick === 0) {
              scheduleIteration(iterations, nextTickTime);
            }
            nextTick();
            if (limit && iterations >= limit) {
              loop.reset();
              return;
            }
          }
          timer = window.setTimeout(scheduler, lookahead);
        }

        loop.tempo = function (bpm) {
          if (!arguments.length) return tempo;
          tempo = bpm;
          tickInterval = 60 / tempo;
          return loop;
        };
        loop.tickInterval = function (s) {
          if (!arguments.length) return tickInterval;
          tickInterval = s;
          tempo = 60 / tickInterval;
          return loop;
        };
        loop.data = function (a) {
          if (!arguments.length) return data;
          data = a;
          return loop;
        };
        loop.lookahead = function (ms) {
          if (!arguments.length) return lookahead;
          lookahead = ms;
          return loop;
        };
        loop.scheduleAheadTime = function (s) {
          if (!arguments.length) return scheduleAheadTime;
          scheduleAheadTime = s;
          return loop;
        };
        loop.limit = function (n) {
          if (!arguments.length) return limit;
          limit = n;
          return loop;
        };
        loop.tick = function (f) {
          if (!arguments.length) return tick;
          tick = f;
          return loop;
        };
        loop.each = function (f) {
          if (!arguments.length) return each;
          each = f;
          return loop;
        };
        loop.start = function (t) {
          nextTickTime = t || ctx.currentTime;
          scheduler();
          return loop;
        };
        loop.stop = function () {
          window.clearTimeout(timer);
          return loop;
        };
        loop.reset = function () {
          currentTick = 0;
          iterations = 0;
          return loop;
        };

        return loop;
      };

      _export('default', loopFactory);
    }
  };
});
$__System.register("8", [], function (_export, _context) {
  "use strict";

  var _samples, sampleLibrary;

  return {
    setters: [],
    execute: function () {
      _samples = {};
      sampleLibrary = {};

      sampleLibrary.get = function (name) {
        return _samples[name];
      };
      sampleLibrary.set = function (name, sample) {
        _samples[name] = sample;
      };
      sampleLibrary.list = function () {
        return Object.keys(_samples);
      };

      _export("default", sampleLibrary);
    }
  };
});
$__System.register('b', ['3', '8'], function (_export, _context) {
  "use strict";

  var ctx, sampleLibrary, loadSamples;
  return {
    setters: [function (_) {
      ctx = _.default;
    }, function (_2) {
      sampleLibrary = _2.default;
    }],
    execute: function () {
      loadSamples = function loadSamples(samples) {
        var sampleNames = Object.keys(samples);
        // map sample names to promises for decoded audio buffers
        var bufferPromises = sampleNames.map(function (name) {
          var sampleUrl = samples[name];
          return new Promise(function (resolve, reject) {
            fetch(sampleUrl, {
              method: 'GET'
            }).then(function (response) {
              return response.arrayBuffer();
            }, reject).then(function (arrayBuffer) {
              ctx.decodeAudioData(arrayBuffer, function (audioBuffer) {
                resolve(audioBuffer);
              }, reject);
            }, reject);
          });
        });
        return Promise.all(bufferPromises).then(function (buffers) {
          sampleNames.map(function (name, index) {
            sampleLibrary.set(name, buffers[index]);
          });
        });
      };

      _export('default', loadSamples);
    }
  };
});
$__System.register("3", [], function (_export, _context) {
  "use strict";

  var ctx;
  return {
    setters: [],
    execute: function () {
      ctx = new (window.AudioContext || window.webkitAudioContext)();

      _export("default", ctx);
    }
  };
});
$__System.register('c', ['3'], function (_export, _context) {
  "use strict";

  var ctx, time;


  function getContextCurrentTime() {
    return ctx.currentTime;
  }

  return {
    setters: [function (_) {
      ctx = _.default;
    }],
    execute: function () {
      time = {};


      time.now = getContextCurrentTime;

      time.in = function (offsetSeconds) {
        return getContextCurrentTime() + offsetSeconds;
      };

      // identity, kinda useless
      time.seconds = function (t) {
        return t;
      };

      time.ms = function (seconds) {
        return seconds / 1000;
      };
      time.samp = function (samples) {
        return samples / ctx.sampleRate;
      };

      _export('default', time);
    }
  };
});
$__System.register("d", [], function (_export, _context) {
  "use strict";

  var random;
  return {
    setters: [],
    execute: function () {
      random = function random(a, b) {
        switch (arguments.length) {
          case 0:
            return Math.random();
          case 1:
            return Math.random() * a;
          case 2:
            return Math.random() * (b - a) + a;
        }
      };

      _export("default", random);
    }
  };
});
$__System.register("e", [], function (_export, _context) {
  "use strict";

  var chance;
  return {
    setters: [],
    execute: function () {
      chance = function chance(p) {
        var attempt = Math.random();
        return attempt < p;
      };

      _export("default", chance);
    }
  };
});
$__System.register('1', ['3', '2', '4', '7', '9', 'a', '8', 'b', 'c', 'd', 'e'], function (_export, _context) {
  "use strict";

  var ctx, destination, BlipNode, clipFactory, chainFactory, loopFactory, sampleLibrary, loadSamples, time, random, chance, blip;
  return {
    setters: [function (_) {
      ctx = _.default;
    }, function (_2) {
      destination = _2.default;
    }, function (_3) {
      BlipNode = _3.default;
    }, function (_4) {
      clipFactory = _4.default;
    }, function (_5) {
      chainFactory = _5.default;
    }, function (_a) {
      loopFactory = _a.default;
    }, function (_6) {
      sampleLibrary = _6.default;
    }, function (_b) {
      loadSamples = _b.default;
    }, function (_c) {
      time = _c.default;
    }, function (_d) {
      random = _d.default;
    }, function (_e) {
      chance = _e.default;
    }],
    execute: function () {
      blip = {};


      blip.version = '0.4.0';

      blip.time = time;
      blip.random = random;
      blip.chance = chance;

      blip.node = BlipNode.create;

      blip.clip = clipFactory;
      blip.chain = chainFactory;
      blip.loop = loopFactory;

      blip.destination = destination;
      blip.listener = BlipNode.fromAudioNode(ctx.listener);

      blip.getContext = function () {
        return ctx;
      };

      blip.loadSamples = loadSamples;

      blip.sampleLibrary = sampleLibrary;

      _export('default', blip);
    }
  };
});
})
(function(factory) {
  if (typeof define == 'function' && define.amd)
    define([], factory);
  else if (typeof module == 'object' && module.exports && typeof require == 'function')
    module.exports = factory();
  else
    blip = factory();
});