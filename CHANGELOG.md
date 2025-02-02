# 2.12.0 / Unreleased
  * [Changed] Documented `iconClass` callback and changed signature from 
    `iconClass(node)` to `iconClass(event, data)`
  * [Improved] Add `highlight` and `fuzzy` options to ext-filter
  * [Improved] Add `fireActivate` option to ext-persist (default: true)
  * [Improved] clearFilter() performance #491
  * [Fixed] #475 Font color while editing node title with bootstrap skin
  * [Fixed] #484 Glyph plugin: Missing margin-left for span.fancytree-custom-icon
  * [Fixed] #486 node.render(true) moves the node to the end of the list
  * [Fixed] #489 `focusOnClick` option is ignored for tables, if 'dnd' is listed after 'table' extension

# 2.11.0 / 2015-07-26
  * [Changed] Adding `fancytree-plain` class to container (if not table), allowing for more efficient css
  * [Changed] #434: Use data-uris to inline loading.gif image
  * [Changed] #460: Use padding-left instead of margin-left for table indent
  * [Changed] #465: Add `node` argument to the `toDict()` callback
  * [Improved] Nicer bootstrap theme and added table to the example
  * [Improved] #464: ext-dnd supports ext-glyph
  * [Improved] #466: Add counter badges to ext-filter
  * [Fixed] Win8 theme jumpy hover effects
  * [Fixed] #411: ext-edit fails with ext-table, when edit was cancelled
  * [Fixed] #463: ext-table: render(deep) does not work
  * [Fixed] #470: Wide plugin not present in jquery.fancytree-all.min.js

# 2.10.2 / 2015-07-02
  * [Fixed] Add `dist/skin-custom-1` sample (again)
  * [Fixed] #459 Don't collapse root folder when last node is removed

# 2.10.1 / 2015-06-27
  * [Changed] Undo #340: Revert dist folder layout to v2.9.0, but add
    dist/skin-common.less

# 2.10.0 / 2015-06-26
  * [Changed] #340: New dist folder layout: moved skin-* folders into src/ folder  
    (**Note:** this change was reverted in v2.10.1)
  * [Improved] Update to jQuery UI 1.11.4, jQuery 1.11.3
  * [Improved] #340: add `dist/skin-common.less` to fix theme imports
  * [Improved] #443 Support js-cookie (still compatible with jquery-cookie)
  * [Fixed] #415 selected and unselectable shows unchecked checkbox
  * [Fixed] #427 table + themeroller: apply color to TR
  * [Fixed] #442 filterBranches shall use opts to allow autoExpand
  * [Fixed] #445 enter key not handled correctly
  * [Fixed] #449 After deleting last child, parent node remains expanded
  * [Fixed] #452 destroy not removing nodes with ext-table
  * [Fixed] #457 Autoscroll fails with lazyloading returning empty list
  * [Improved] Update to jQuery UI 1.11.4, jQuery 1.11.3

# 2.9.0 / 2015-04-19
  * [Changed] ext-filter: `tree.filterNodes(filter, opts)` now accept an `opts`
    object instead of `leavesOnly`
  * [Improved] #417 only raise exception about data being a string if dataType is "json"
  * [Added] #394 New option `autoExpand` for [ext-filter]
  * [Fixed] #402, #405 rare exception in dnd events
  * [Fixed] #420 nodeSetActive not returning promise
  * [Fixed] #270 Keyboard focus not working when using dnd extension

# 2.8.1 / 2015-03-01
  * [Improved] generateFormElements() new argument `opts`, default: `{stopOnParents: true}`
  * [Fixed] #393 ext-table: checkboxColumnIdx not working
  * [Fixed] #397 ext-edit: Creating sub category fails
  * [Fixed] #403 generateFormElements() doesn't work with string args

# 2.8.0 / 2015-02-08
  * [Changed] Deprecated ext-menu (was never officially supported, see http://localhost:8080/demo/index.html#sample-ext-menu.html)
  * [Improved] Bluring the widget will now blur the focused node too.
  * [Improved] Persistence will only set node focus if widget had focus (otherwise only activate the node).
  * [Improved] Set default focus on first keypress to active node (first node otherwise)
  * [Improved] #383 Accept [ECMAScript 6 Promise](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise) as source
  * [Added] `_superApply()` for hook handlers.
  * [Added] eventToString() supports mouse events
  * [Fixed] persistence for focus (when using non-cookie storage)
  * [Fixed] #391 Exception on autoscrolling filtered trees

# 2.7.0 / 2014-12-21
  * [CHANGED] Dropped `fx` option. Use `toggleEffect` instead.
  * [CHANGED] 'win8' and 'bootstrap' skins where modified to highlight the 
    title span instead of the node span, in order to be compatible with
    [ext-wide]. The original skins are available as 'skin-win8-n' and
    'skin-bootstrap-n' respectively.
  * [Added] ext-wide extension (experimental)
  * [Added] LESS files to distribution
  * [Added] Publish on [cdnjs](https://cdnjs.com/libraries/jquery.fancytree)
  * [Improved] tree.reactivate() returns a promise
  * [Fixed] #246 Gaps when filtering in hide mode (patch by @lefunque)
  * [Fixed] #287 wrong image on hovers
  * [Fixed] #368 Standard browser behavior prevented (e.g. zoom with Ctrl+'+'/'-')
  * [Fixed] #369 Suppress warning, when dropping top- on top-node

# 2.6.0 / 2014-11-29
  * [Added] Option `focusOnSelect` to set focus when node is checked by a mouse 
    click (default: false)
  * [Added] `restore` event, sent after ext-persist has restored the tree state
  * [Improved] #359 Better navigation performance when skipping hidden nodes
  * Publish on npm Registry

# 2.5.0 / 2014-11-23
  * [CHANGED] [ext-persist] overrideSource option now defaults to true
  * [Added] [ext-filter] Option `autoApply` re-applies filter on lazy loading
    (on by default)
  * [Added] quicksearch: navigate to next node by typing the first letters
  * [Improved] [ext-dnd] Make draggable helper and parent configurable
  * [Improved] #153 Add class `fancytree-unselectable` to respective nodes and
    dimm unselectable checkboxes
  * [Improved] Update to jQuery 1.1.11, jQuery UI 1.11.2
  * [Improved] New mode 'firstChild' for node.addNode()
  * [Fixed] #324 Fix problem where minExpandLevel was not expanding root node
  * [Fixed] #300 dnd.focusOnClick for jQuery UI 1.11
  * [Fixed] #354 [ext-persist] with selectMode 3

# 2.4.1 / 2014-09-23
  * [Fixed] Regression #323

# 2.4.0 / 2014-09-21
  * [CHANGED] Renamed dist/jquery.fancytree-custom.min.js to jquery.fancytree-all.min.js
  * [CHANGED] ext-edit callbacks no longer pass `data.value` (use `data.input.val()` instead).
  * [Added] CDN support (http://www.jsdelivr.com/#!jquery.fancytree)
  * [Added] New method `node.visitAndLoad()`
  * [Added] New method `node.editCreateNode()` (ext-edit)
  * [Added] New method `node.isRootNode()`
  * [Added] New method `node.isTopLevel()`
  * [Added] New option `id` to override default tree id
  * [Added] New argument `stopOnParents` for tree.generateFormElements()
  * [Improved] #294 node.load() should resolve 'ok', if node is already loaded
  * [Improved] #293 minExpandLevel does not auto-expand
  * [Improved] #313 Allow HTML in tooltips
  * [Fixed] crash in scrollIntoView() when parent is `window`
  * [Fixed] #305 Checkbox doesn't show with Glyph + Table
  * [Fixed] #316 Fix hasChildren() when children = []
  * [Fixed] #237 ajax LoadError not updated in StatusNode with Table ext
  * [Fixed] #295 loadKeyPath with multiple paths
  * [Deprecated] node.isRoot(). Use node.isRootNode() instead

# 2.3.0 / 2014-08-17
  * [CHANGED] renamed (undocumented) event 'loaderror' to 'loadError'
  * [Added] postProcess now allows to signal error conditions (so it becomes easy to handle custom ajax response formats)
  * [Added] node.setStatus()
  * [Added] ext-clones to the standard distribution.
  * [Improved] loadError allows to return `false` to prevent default handling
  * [Fixed] #258 Fix moveTo when moving a node to same parent
  * [Fixed] #257 Glyph expander sometimes disappears

# 2.2.0 / 2014-06-28
  * [Added] Option dnd.focusOnClick sets focus to tree widget, even when dragging 
    is enabled
  * [Added] node.info()
  * [Improved] #245 tree.generateInput() now returns data using PHPs array
    convention, i.e. by appending brackets to the name: 'ft_1[]'.
  * [Fixed] #250: Children lazy empty nodes remain checked when parent is 
    unchecked with hierarchical multi-selection
  * [Fixed] #272 Navigation in filtered trees


# 2.1.0 / 2014-05-29
  * [Added] #210: [ext-persist] optionally store information in sessionStorage or localStorage
  * [Added] #64 [ext-filter] filterBranches() will restrict display to sub-trees
  * [Added] New options 'scrollParent' and 'scrollOfs' are evaluated by node.scrollIntoView()
    (which is also called on expand). This allows autoScroll to work with 
    [ext-table]: set scrollParent to `window` or a wrapper DIV with  overflow: auto
  * [Added] [ext-wide] use 100% wide selection bar (experimental)
  * [Added] $.ui.fancytree.debounce()
  * [Improved] [ext-columnview] css
  * [Improved] skin-win8 now includes the loading.gif as inline CSS for faster response
  * [Improved] Add 'fancytree-icon' class to icon IMG
  * [Improved] css v-align for checkboxes and icons
  * [Fixed] #217: persistence when node keys are numeric
  * [Fixed] #228: html in node title prevents click
  * [Fixed] #235: D'n'd helper is displaced, when window is scrolled
  * [Fixed] #241: fromDict() does not update node title
  * [Fixed] relative custom imagePath option
  * [Deprecated] [ext-filter] Use filterNodes() instead of applyFilter()
  * [Deprecated] [ext-filter] 'leavesOnly' option removed (see filterNodes())


# 2.0.0 / 2014-05-01
  * [Added] [ext-clones] #213 New method Fancytree.changeRefKey()


# 2.0.0-12 / 2014-04-29
  * [Added] /dist/src folder contains uncompressed extensions for bower
  * [Improved] cleanup


# 2.0.0-11 / 2014-04-27
  * [Added] /dist/jquery.fancytree-custom.min.js with AMD support
  * [Added] #56: Allow to set special node.attributes from data-...
  * [Added] #191: Allow to set additional tree.data attributes from <ul data-...>
  * [Added] [ext-childcounter] #202: Allow lazy children count
  * [Improved] #192: Removed 'height: 100%' for container (was introduced to fix 
     an IE 9 bug, that now should be solved by 'min-height: 0%')
  * [Improved] [ext-table] #93 renderColumns called for status nodes 
    (added 'customStatus' option)
  * [Improved] [ext-dnd] #196 Make draggable/droppable options configurable
  * [Fixed] [ext-glyph] #194 Render noExpander icon from icon map for leaf nodes
  * [Fixed] #197: Allow special characters in tooltips
  * [Fixed] #68: renderStatus method doesn't render 'loading' status
  * [Fixed] #201: originalEvent not passed along to activate callback
  * [Fixed] [ext-glyph] compatible with ext-table


# 2.0.0-10 / 2014-04-13
  * [Added] New method node.appendSibling()
  * [Improved] setExpanded resolves promise *after* scrollIntoView
  * [Improved] Allow to return false in lazyLoad for manual loading.
  * [Improved] [ext-table] trigger expand event *after* anPimations
  * [Improved] [ext-gridnav] skips empty and merged cells
  * [Improved] grunt build no longer depends on tabfix.py
  * [Fixed] selectMode: 1 + "selected": true looks buggy


# 2.0.0-9 / 2014-04-02
  * [Added] New helper method $.ui.fancytree.escapeHtml().
  * [Added] [ext-clones] new method node,reRegister(key, refKey)
  * [Added] Support for bower.
  * [Added] dist/ folder to repository
  * [Improved] [ext-edit] handles `<`, `>`, ...
  * [Improved] [ext-table] node.render(force) trigger renderColumns event
  * [Fixed] [ext-table] #178 children are not displayed when filtering


# 2.0.0-8 / 2014-04-01
  * [FEATURE] #18: load lazy nodes, if initialized as 'expanded'.
  * [FEATURE] #162: Optional parameter `noEvents` for node.setActive() and .setExpanded().
  * [CHANGE] Prefixed all Less variables with '@fancy-' and introduced '@fancy-image-dir'.
  * [CHANGE] 'loadChildren' event is now also triggered for initial tree load (before it was only triggered for lazy child nodes)
  * [BUGFIX] #117: line height too large when using doctype xhtml
  * [BUGFIX] #115: Fixed error when trying to drag table headers
  * [BUGFIX] #163: lazy load throws error if autoscroll: true and result is empty
  * [FEATURE] [ext-clones] (experimental) new extension that introduces 
    `node.refKey`, which may occur multiple times in one tree (as opposed to `key`, 
    which must be unique).
    New methods `node.isClone()`, `node.getCloneList()` and `tree.getNodesByRef()`.
    Optionally, clones are tagged wit the `fancytree-clone` class.
  * [FEATURE] New option 'defaultKey'. This calback allows to generate keys while loading.
  * build process creates /dist folder
  * "bower install fancytree" delivers dist folder


# 2.0.0-7 / 2014-03-09
  * [BREAKING CHANGE] node.isStatusNode() is now a function (was a property before).
    Added new property `node.statusNodeType`.
  * [BREAKING CHANGE] Renamed ext-awesome to ext-glyph
  * [DEPRECATION] Deprecated event `lazyload`, use `lazyLoad` (upper case L) instead.
  * [DEPRECATION] Deprecated methods node.lazyLoad() and node.discard(). use load() and resetLazy() instead.
  * [FEATURE] Added node.isUndefined(), isLoaded(), resetLazy(), load(), resetLazy()
  * [FEATURE] [ext-persist] Added option `expandLazy` for recursive loading (still experimental).
  * [FEATURE] [ext-filter] 'mode: hide' now works with ext-table (still experimental).
  * [FEATURE] node.makeVisible() accepts options, scrolls into view, and returns a promise.
  * [FEATURE] Sample xxl and bootstrap themes.
  * [CHANGE] nodeRenderStatus() is now implicitly called by nodeRenderTitle().<br>
    This also means that now all markup and css classes are finshed, when `renderNode` 
    is fired.
  * [CHANGE] Calling setExpanded() on a leaf node fires .done() (not .fail())
  * [CHANGE] Removing the last child node collapses the parent; lazy nodes become empty (not undefined).


# 2.0.0-6 / 2014-02-08

  * [BREAKING CHANGE] Removed 'name' argument from `$.ui.fancytree.registerExtension()`
    (now the extension object requires a 'name' property)
  * [DEPRECATION]  Deprecated startEdit/endEdit to use editStart/editEnd
  * [FEATURE] New method `tree._requireExtension()`
  * [FEATURE] Fixed d'n'd for ext-table
  * [FEATURE] New option `titlesTabbable`
  * [FEATURE] New argument `opts` for setExpanded() and setActive()
  * [BUGFIX] ext-edit: fixed loosing focus and made chainable
  * [BUGFIX] ext-filter: fixed navigation for hidden nodes
  * Added browser test matrix (saucelabs)


# 2.0.0-5 / 2013-12-23

  * [BREAKING CHANGE] Refactored drag'n'drop extension.
    For example `dnd.onDrop(node)` --> `dnd.dragDrop(node, data)`.
    See [[TutorialExtDnd]]
  * [BREAKING CHANGE] Renamed `rencercolumns` event to `renderColumns`
  * [BREAKING CHANGE] Renamed `fancytree-focused` class to `fancytree-treefocus` (container only)
  * [FEATURE] Experimental `ext-gridnav` implents key navigation for tables.
    Refactored keyboard handling. Keydown handlers are now bound to the container instead of document
    (Co-work with Koloto)
  * [FEATURE] Allow to return 'preventNav' in keydown event to prevent withput blocking keys in embedded input controls.
  * [FEATURE] New method `node.navigate()` to support custom keyboard handlers
  * [FEATURE] Refactored CSS style to use a common LESS template
  * [FEATURE] Improvement of lazy load errors handling (Koloto, issue #87)
  * [FEATURE] Allow to pass metadata with `source` on initialization
  * [FEATURE] The edit extension is now beta
  * [BUGFIX] Fixed BACKSPACE on top-level nodes
  * [BUGFIX] Fixed #71, #75, #90, #104, #105
  * Improved table render speed by 15%
  * `grunt dev` combines `grunt server` + `grunt watch` (trigger jshint and
    less on save)


# 2.0.0-4 / 2013-10-14

  * Misc. fixes


# 2.0.0-3

  * [BREAKING CHANGE] Changed extension syntax
  * [FEATURE] Edit extension (alpha)


# 2.0.0-2 / 2013-09-15

  * [BREAKING CHANGE] Renamed `onCustomRender` to `renderTitle`.
    `renderTitle`, `renderNode` and `createNode` events are only triggered as options callback (not DOM events), for performance reasons.
  * [BREAKING CHANGE] Renamed `data.orgEvent` to `data.originalEvent`
  * [BREAKING CHANGE] Renamed events to camelCase as suggested by the jQuery style guide (`rendernnode` -> `renderNode`, ...)
  * See also [[WhatsNew]] since Dynatree 1.x in general.


# 1.x

* See [Dynatree](https://code.google.com/p/dynatree/)
