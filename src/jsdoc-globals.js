/* *****************************************************************************
 * Virtual objects for jsdoc documentation
 */

// Allow unused variables for demonstration
/*jshint unused:false */

/*  *
 * The jQuery namespace, also acessible by the alias `$`.
 * @name jQuery
 * @namespace
 */

/*  *
 * The <a href="http://jqueryui.com">jQuery UI</a> namespace.
 * @name ui
 * @namespace
 * @memberof jQuery
 */

/*  *
 * Create stateful jQuery plugins using the same abstraction as all jQuery UI widgets.
 * @name jQuery.Widget
 * @class
 * @classdesc Base class for <a href="http://api.jqueryui.com/jQuery.widget/">jQueryUI widgets</a>.
 * @see http://api.jqueryui.com/jQuery.widget/
 */

/*  *
 * (Upcoming) namespace for Fancytree.
 * @name moogle
 * @namespace
 */

/**
 * Context object passed to events and hook functions.
 * @name EventData
 * @type {Object}
 *
 * @property {Fancytree} tree The tree instance
 * @property {object} widget The <a href="http://api.jqueryui.com/jQuery.widget">jQuery UI tree widget</a>
 * @property {FancytreeOptions} options Shortcut to tree.options
 * @property {Event} originalEvent The <a href="http://api.jquery.com/category/events/event-object">jQuery Event</a> that initially triggered this call
 * @property {FancytreeNode | null} node The node that this call applies to (`null` for tree events)
 * @property {any} result (output parameter) Event handlers can return values back to the caller. Used by `lazyLoad`, `postProcess`, ...
 * @property {String | undefined} targetType (only for click and dblclick events) 'title' | 'prefix' | 'expander' | 'checkbox' | 'icon'
 * @property {any} response (only for postProcess event) Original ajax response
 */
var EventData = {};

/**
 * Data object passed to FancytreeNode() constructor.
 * Note: typically these attributes are accessed by class methods, e.g. `node.isExpanded()`
 * and `node.setTitle("foo")`.
 *
 * @name NodeData
 * @type {Object}
 *
 * @property {Boolean} active (Initialization only, but will not be stored  with the node.)
 * @property {NodeData[]} children Optional array of child nodes.
 * @property {object} data All unknown properties from constructor will be copied to `node.data`.
 * @property {Boolean} expanded Initial expansion state. Use `node.setExpanded()` or `node.isExpanded()` to access.
 * @property {String} extraClasses Class names added to the node markup (separate with space).
 * @property {Boolean} focus (Initialization only, but will not be stored  with the node.)
 * @property {Boolean} folder Folders have different default icons and honor the `clickFolderMode` option.
 * @property {Boolean} hideCheckbox Remove checkbox for this node.
 * @property {String} iconclass Class names added to the node icon markup to allow custom icons or glyphs (separate with space, e.g. "ui-icon ui-icon-heart").
 * @property {String} key Unique key for this node (auto-generated if omitted)
 * @property {Boolean} lazy Lazy folders call the `lazyLoad` on first expand to load their children.
 * @property {String} refKey (Reserved, used by 'clones' extension.)
 * @property {Boolean} selected Initial selection state. Use `node.setSelected()` or `node.isSelected()` to access.
 * @property {String} title Node text (may contain HTML tags). Use `node.setTitle()` to modify.
 * @property {String} tooltip Will be added as `title` attribute, thus enabling a tooltip.
 * @property {Boolean} unselectable Prevent selection using mouse or keyboard.
 * @property {any} OTHER Attributes other than listed above will be copied to `node.data`.
 *
 */
var NodeData = {};


/**
 * Data object similar to {@link NodeData}, but with additional options.
 * May be passed to {@link FancytreeNode#applyPatch}
 * (Every property that is omitted (or set to undefined) will be ignored)
 * @name NodePatch
 * @type {Object}
 *
 * @property {any} any (see NodeData)
 * @property {NodeData} appendChildren (not yet implemented)
 * @property {NodeData} replaceChildren (not yet implemented)
 * @property {NodeData} insertChildren (not yet implemented)
 */
var NodePatch = {};


/**
 * List of [key, {@link NodePatch}]  tuples.
 * May be passed to {@link Fancytree#applyPatch}.
 *
 * @name TreePatch
 * @type {Object}
 *
 */
var TreePatch = {};

/**
 * @name FancytreeOptions
 * @type {Object}
 *
 * @description
 * Fancytree options (see also example)
 *
 * @example $("#tree").fancytree({source: "/myService"});
 *
 * @property {Boolean} activeVisible Make sure that the active node is always visible, i.e. its parents are expanded (default: true).
 * @property {object} ajax Default options for ajax requests
 * @property {Boolean} aria (default: false) Add WAI-ARIA attributes to markup
 * @property {Boolean} autoActivate Activate a node when focused with the keyboard (default: true)
 * @property {Boolean} autoCollapse Automatically collapse all siblings, when a node is expanded (default: false).
 * @property {Boolean} autoScroll Scroll node into visible area, when focused by keyboard (default: false).
 * @property {Boolean} checkbox Display checkboxes to allow selection (default: false)
 * @property {Integer} clickFolderMode Defines what happens, when the user click a folder node.<br>1:activate, 2:expand, 3:activate and expand, 4:activate/dblclick expands  (default: 4)
 * @property {Integer} debugLevel  0..2 (null: use global setting $.ui.fancytree.debugInfo)
 * @property {function} defaultKey callback(node) is called for ner nodes without a key. Must return a new unique key. (default null: generates default keys like that: "_" + counter)
 * @property {Boolean} enableAspx Accept passing ajax data in a property named `d` (default: true).
 * @property {String[]} extensions List of active extensions (default: [])
 * @property {Boolean} focusOnSelect Set focus when node is checked by a mouse click (default: false)
 * @property {Boolean} generateIds Add `id="..."` to node markup (default: false).
 * @property {Boolean} icons Display node icons  (default: true)
 * @property {String} idPrefix (default: "ft_")
 * @property {String} imagePath Path to a folder containing icons (default: null, using 'skin/' subdirectory).
 * @property {Boolean} keyboard Support keyboard navigation (default: true).
 * @property {String} keyPathSeparator (default: "/")
 * @property {Integer} minExpandLevel 2: top-level nodes are not collapsible (default: 1)
 * @property {Boolean} quicksearch navigate to next node by typing the first letters (default: false)
 * @property {object} scrollOfs: optional margins for node.scrollIntoView() (default: {top: 0, bottom: 0})
 * @property {jQuery} scrollParent: scrollable container for node.scrollIntoView() (default: $container)
 * @property {Integer} selectMode 1:single, 2:multi, 3:multi-hier (default: 2)
 * @property {any} source Used to Initialize the tree.
 * @property {object} strings Translation table
 * @property {Boolean} tabbable Add tabindex='0' to container, so tree can be reached using TAB
 * @property {Boolean} titlesTabbable Add tabindex='0' to node title span, so it can receive keyboard focus
 * @property {object} toggleEffect Animation options, false:off (default: { effect: "blind", options: {direction: "vertical", scale: "box"}, duration: 200 })
 * @property {function} EVENT
 *
 */
var FancytreeOptions = {};

/** Fancytree events
 * @name FancytreeEvents
 * @type {Object}
 *
 * @description
 * Events are called like this:
 *    `CALLBACK_NAME(event, data)`
 * where `event` is a <a href="http://api.jquery.com/category/events/event-object">jQuery Event</a> object and `data` is of type {@link EventData}
 * The `this` context is set to  tree's the HTMLDivElement
 *
 * @see {@link http://api.jquery.com/category/events/event-object|jQuery Event}
 * @see EventData
 *
 * @example $("#tree").fancytree({
 *     activate: function(event, data){
 *         var node = data.node;
 *     }
 * });
 *
 * @property {function} activate `data.node` was activated
 * @property {function} beforeActivate `data.node` is about to tbe (de)activated. Current status is `data.node.isActive()`. Return `false` to prevent default processing
 * @property {function} beforeExpand `data.node` is about to tbe collapsed/expanded. Current status is `data.node.isExpanded()`. Return `false` to prevent default processing
 * @property {function} beforeSelect `data.node` is about to tbe (de)selected. Current status is `data.node.isSelected()`.Return `false` to prevent default processing
 * @property {function} blur `data.node` lost keyboard focus
 * @property {function} blurTree `data.tree` lost keyboard focus
 * @property {function} click `data.node` was clicked. `data.targetType` contains the region ("title", "expander", ...). Return `false` to prevent default processing, i.e. activating, expanding, selecting, etc.
 * @property {function} collapse `data.node` was collapsed
 * @property {function} create Widget was created (called only once, even if re-initialized).
 * @property {function} createNode Allow tweaking and binding, after node was created for the first time (NOTE: this event is only available as callback, but not for bind())
 * @property {function} dblclick `data.node` was double-clicked. `data.targetType` contains the region ("title", "expander", ...). Return `false` to prevent default processing, i.e. expanding, etc.
 * @property {function} deactivate `data.node` was deactivated
 * @property {function} expand `data.node` was expanded
 * @property {function} focus `data.node` received keyboard focus
 * @property {function} focusTree `data.tree` received keyboard focus
 * @property {function} iconClass Allows to override the class names added to the `data.node` icon markup to define custom icons or glyphs (separate with space, e.g. "ui-icon ui-icon-heart").
 * @property {function} init Widget was (re-)initialized.
 * @property {function} keydown `data.node` received key. `event.which` contains the key. Return `false` to prevent default processing, i.e. navigation. Call `data.result = "preventNav";` to prevent navigation but still allow default handling inside embedded input controls.
 * @property {function} keypress (currently unused)
 * @property {function} lazyLoad `data.node` is a lazy node that is expanded for the first time. The new child data must be returned in the `data.result` property (see `source` option for available formats).
 * @property {function} loadChildren Node data was loaded, i.e. `node.nodeLoadChildren()` finished
 * @property {function} loadError A load error occurred. Return `false` to prevent default processing
 * @property {function} postProcess Allows to modify the ajax response
 * @property {function} removeNode `data.node` was removed (NOTE: this event is only available as callback, but not for bind())
 * @property {function} renderColumns (used by table extension)
 * @property {function} renderNode Allow tweaking after node state was rendered (NOTE: this event is only available as callback, but not for bind())
 * @property {function} renderTitle Allow replacing the `&lt;span class='fancytree-title'>` markup (NOTE: this event is only available as callback, but not for bind())
 * @property {function} restore ext-persist has expanded, selected, and activated the previous state
 * @property {function} select `data.node` was selected
 *
 */
var FancytreeEvents = {};
