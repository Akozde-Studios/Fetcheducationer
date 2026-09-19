
gdjs.evtsExt__AutoTyping__AutoTyping = gdjs.evtsExt__AutoTyping__AutoTyping || {};

/**
 * Behavior generated from Auto typing text
 */
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping = class AutoTyping extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.Text = behaviorData.Text !== undefined ? behaviorData.Text : "";
    this._behaviorData.Interval = behaviorData.Interval !== undefined ? behaviorData.Interval : Number("0.05") || 0;
    this._behaviorData.CharacterJustAdded = false;
    this._behaviorData.FullText = "";
    this._behaviorData.TypedText = "";
  }

  // Hot-reload:
  applyBehaviorOverriding(behaviorOverriding) {
    
    if (behaviorOverriding.Text !== undefined)
      this._behaviorData.Text = behaviorOverriding.Text;
    if (behaviorOverriding.Interval !== undefined)
      this._behaviorData.Interval = behaviorOverriding.Interval;
    if (behaviorOverriding.CharacterJustAdded !== undefined)
      this._behaviorData.CharacterJustAdded = behaviorOverriding.CharacterJustAdded;
    if (behaviorOverriding.FullText !== undefined)
      this._behaviorData.FullText = behaviorOverriding.FullText;
    if (behaviorOverriding.TypedText !== undefined)
      this._behaviorData.TypedText = behaviorOverriding.TypedText;

    return true;
  }

  // Network sync:
  getNetworkSyncData(syncOptions) {
    return {
      ...super.getNetworkSyncData(syncOptions),
      props: {
        
    Text: this._behaviorData.Text,
    Interval: this._behaviorData.Interval,
    CharacterJustAdded: this._behaviorData.CharacterJustAdded,
    FullText: this._behaviorData.FullText,
    TypedText: this._behaviorData.TypedText,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData, options) {
    super.updateFromNetworkSyncData(networkSyncData, options);
    
    if (networkSyncData.props.Text !== undefined)
      this._behaviorData.Text = networkSyncData.props.Text;
    if (networkSyncData.props.Interval !== undefined)
      this._behaviorData.Interval = networkSyncData.props.Interval;
    if (networkSyncData.props.CharacterJustAdded !== undefined)
      this._behaviorData.CharacterJustAdded = networkSyncData.props.CharacterJustAdded;
    if (networkSyncData.props.FullText !== undefined)
      this._behaviorData.FullText = networkSyncData.props.FullText;
    if (networkSyncData.props.TypedText !== undefined)
      this._behaviorData.TypedText = networkSyncData.props.TypedText;
  }

  // Properties:
  
  _getText() {
    return this._behaviorData.Text !== undefined ? this._behaviorData.Text : "";
  }
  _setText(newValue) {
    this._behaviorData.Text = newValue;
  }
  _getInterval() {
    return this._behaviorData.Interval !== undefined ? this._behaviorData.Interval : Number("0.05") || 0;
  }
  _setInterval(newValue) {
    this._behaviorData.Interval = newValue;
  }
  _getCharacterJustAdded() {
    return this._behaviorData.CharacterJustAdded !== undefined ? this._behaviorData.CharacterJustAdded : false;
  }
  _setCharacterJustAdded(newValue) {
    this._behaviorData.CharacterJustAdded = newValue;
  }
  _toggleCharacterJustAdded() {
    this._setCharacterJustAdded(!this._getCharacterJustAdded());
  }
  _getFullText() {
    return this._behaviorData.FullText !== undefined ? this._behaviorData.FullText : "";
  }
  _setFullText(newValue) {
    this._behaviorData.FullText = newValue;
  }
  _getTypedText() {
    return this._behaviorData.TypedText !== undefined ? this._behaviorData.TypedText : "";
  }
  _setTypedText(newValue) {
    this._behaviorData.TypedText = newValue;
  }
}

/**
 * Shared data generated from Auto typing text
 */
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.SharedData = class AutoTypingSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._AutoTyping_AutoTypingSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._AutoTyping_AutoTypingSharedData = new gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.SharedData(
      initialData
    );
  }
  return instanceContainer._AutoTyping_AutoTypingSharedData;
}

// Methods:
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.onCreatedContext = {};
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.onCreatedContext.idToCallbackMap = new Map();
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.onCreatedContext.GDObjectObjects2= [];


gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.onCreatedContext.GDObjectObjects1);
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setFullText((( gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.onCreatedContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.onCreatedContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Text")).getText()))
}
{for(var i = 0, len = gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).RestartFromBeginning(eventsFunctionContext);
}
}
}

}


};

gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.onCreated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Text": this._getText()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AutoTyping"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AutoTyping"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.onCreatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.onCreatedContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.doStepPostEventsContext.idToCallbackMap = new Map();
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects3= [];
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects4= [];


gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects3 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsNextWordWrapped(eventsFunctionContext) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
{eventsFunctionContext.localVariables[0].getFromIndex(0).setString(gdjs.evtTools.string.newLine());
}
}

}


};gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.doStepPostEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.localVariables[0].getFromIndex(0).getAsString() == " ");
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects3);

{for(var i = 0, len = gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).ClearForcedLineBreak(eventsFunctionContext);
}
}

{ //Subevents
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects2);

{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTypedText(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTypedText()+eventsFunctionContext.localVariables[0].getFromIndex(0).getAsString())
}
{for(var i = 0, len = gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Text")).setText(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTypedText());
}
}
}

}


};gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.doStepPostEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setString("");
variables._declare("NextCharacter", variable);
}
eventsFunctionContext.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{
{eventsFunctionContext.localVariables[0].getFromIndex(0).setString(gdjs.evtTools.string.strAt(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFullText(), gdjs.evtTools.string.strLen(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTypedText())));
}

{ //Subevents
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.doStepPostEventsContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}
eventsFunctionContext.localVariables.pop();

}


{

/* Reuse gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsFinished(eventsFunctionContext) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects1 */
{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, "__AutoTyping.WriteTimer");
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTypedText(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFullText())
}
{for(var i = 0, len = gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Text")).setText(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTypedText());
}
}
}

}


};gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.doStepPostEventsContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Text")).getText() != eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTypedText() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects1 */
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setFullText((( gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Text")).getText()))
}
{for(var i = 0, len = gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).RestartFromBeginning(eventsFunctionContext);
}
}
}

}


{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCharacterJustAdded(false)
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects1[i].getTimerElapsedTimeInSecondsOrNaN("__AutoTyping.WriteTimer") >= eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getInterval() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects1 */
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCharacterJustAdded(true)
}
{for(var i = 0, len = gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects1[i].resetTimer("__AutoTyping.WriteTimer");
}
}

{ //Subevents
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.doStepPostEventsContext.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Text": this._getText()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AutoTyping"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AutoTyping"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects4.length = 0;

gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.doStepPostEventsContext.eventsList3(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.doStepPostEventsContext.GDObjectObjects4.length = 0;


return;
}
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.IsNextWordWrappedContext = {};
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.IsNextWordWrappedContext.idToCallbackMap = new Map();
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.IsNextWordWrappedContext.GDObjectObjects1= [];
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.IsNextWordWrappedContext.GDObjectObjects2= [];
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.IsNextWordWrappedContext.GDObjectObjects3= [];


gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.IsNextWordWrappedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.IsNextWordWrappedContext.GDObjectObjects1, gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.IsNextWordWrappedContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber() < (( gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.IsNextWordWrappedContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.IsNextWordWrappedContext.GDObjectObjects2[0].getHeight()));
}
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}
}

}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.IsNextWordWrappedContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.IsNextWordWrappedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.IsNextWordWrappedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Text")).setText(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTypedText());
}
}
}

}


};gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.IsNextWordWrappedContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("Height", variable);
}
eventsFunctionContext.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.IsNextWordWrappedContext.GDObjectObjects1);
{eventsFunctionContext.localVariables[0].getFromIndex(0).setNumber((( gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.IsNextWordWrappedContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.IsNextWordWrappedContext.GDObjectObjects1[0].getHeight()));
}
{for(var i = 0, len = gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.IsNextWordWrappedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.IsNextWordWrappedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Text")).setText(gdjs.evtTools.string.subStr(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFullText(), 0, gdjs.evtTools.string.strFindFrom(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFullText(), " ", gdjs.evtTools.string.strLen(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTypedText()) + 1)));
}
}

{ //Subevents
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.IsNextWordWrappedContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}
eventsFunctionContext.localVariables.pop();

}


};

gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.IsNextWordWrapped = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Text": this._getText()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AutoTyping"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AutoTyping"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.IsNextWordWrappedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.IsNextWordWrappedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.IsNextWordWrappedContext.GDObjectObjects3.length = 0;

gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.IsNextWordWrappedContext.eventsList1(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.IsNextWordWrappedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.IsNextWordWrappedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.IsNextWordWrappedContext.GDObjectObjects3.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.ClearForcedLineBreakContext = {};
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.ClearForcedLineBreakContext.idToCallbackMap = new Map();
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.ClearForcedLineBreakContext.GDObjectObjects1= [];
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.ClearForcedLineBreakContext.GDObjectObjects2= [];


gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.ClearForcedLineBreakContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTypedText(gdjs.evtTools.string.subStr(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFullText(), 0, gdjs.evtTools.string.strLen(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTypedText())))
}
}

}


};

gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.ClearForcedLineBreak = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Text": this._getText()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AutoTyping"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AutoTyping"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.ClearForcedLineBreakContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.ClearForcedLineBreakContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.ClearForcedLineBreakContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.ClearForcedLineBreakContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.ClearForcedLineBreakContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.onDeActivateContext = {};
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.onDeActivateContext.idToCallbackMap = new Map();
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.onDeActivateContext.GDObjectObjects1= [];
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.onDeActivateContext.GDObjectObjects2= [];


gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.onDeActivateContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.onDeActivateContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.onDeActivateContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.onDeActivateContext.GDObjectObjects1[i].pauseTimer("__AutoTyping.WriteTimer");
}
}
}

}


};

gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.onDeActivate = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Text": this._getText()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AutoTyping"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AutoTyping"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.onDeActivateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.onDeActivateContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.onDeActivateContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.onDeActivateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.onDeActivateContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.onActivateContext = {};
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.onActivateContext.idToCallbackMap = new Map();
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.onActivateContext.GDObjectObjects1= [];
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.onActivateContext.GDObjectObjects2= [];


gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.onActivateContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.onActivateContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.onActivateContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.onActivateContext.GDObjectObjects1[i].unpauseTimer("__AutoTyping.WriteTimer");
}
}
}

}


};

gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.onActivate = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Text": this._getText()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AutoTyping"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AutoTyping"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.onActivateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.onActivateContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.onActivateContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.onActivateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.onActivateContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.IsFinishedContext = {};
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.IsFinishedContext.idToCallbackMap = new Map();
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.IsFinishedContext.GDObjectObjects1= [];
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.IsFinishedContext.GDObjectObjects2= [];


gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.IsFinishedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.string.strLen(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTypedText()) == gdjs.evtTools.string.strLen(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFullText()));
}
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}
}

}


};

gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.IsFinished = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Text": this._getText()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AutoTyping"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AutoTyping"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.IsFinishedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.IsFinishedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.IsFinishedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.IsFinishedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.IsFinishedContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.HasJustTypedContext = {};
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.HasJustTypedContext.idToCallbackMap = new Map();
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.HasJustTypedContext.GDObjectObjects1= [];
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.HasJustTypedContext.GDObjectObjects2= [];


gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.HasJustTypedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCharacterJustAdded();
}
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}
}

}


};

gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.HasJustTyped = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Text": this._getText()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AutoTyping"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AutoTyping"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.HasJustTypedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.HasJustTypedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.HasJustTypedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.HasJustTypedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.HasJustTypedContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.RestartFromBeginningContext = {};
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.RestartFromBeginningContext.idToCallbackMap = new Map();
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.RestartFromBeginningContext.GDObjectObjects1= [];
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.RestartFromBeginningContext.GDObjectObjects2= [];


gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.RestartFromBeginningContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.RestartFromBeginningContext.GDObjectObjects1);
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTypedText("")
}
{for(var i = 0, len = gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.RestartFromBeginningContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.RestartFromBeginningContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Text")).setText("");
}
}
{for(var i = 0, len = gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.RestartFromBeginningContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.RestartFromBeginningContext.GDObjectObjects1[i].resetTimer("__AutoTyping.WriteTimer");
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.RestartFromBeginningContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.RestartFromBeginningContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.RestartFromBeginningContext.GDObjectObjects1[i].behaviorActivated(eventsFunctionContext.getBehaviorName("Behavior"))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.RestartFromBeginningContext.GDObjectObjects1[k] = gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.RestartFromBeginningContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.RestartFromBeginningContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.RestartFromBeginningContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.RestartFromBeginningContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.RestartFromBeginningContext.GDObjectObjects1[i].pauseTimer("__AutoTyping.WriteTimer");
}
}
}

}


};

gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.RestartFromBeginning = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Text": this._getText()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AutoTyping"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AutoTyping"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.RestartFromBeginningContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.RestartFromBeginningContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.RestartFromBeginningContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.RestartFromBeginningContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.RestartFromBeginningContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.JumpToPositionContext = {};
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.JumpToPositionContext.idToCallbackMap = new Map();
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.JumpToPositionContext.GDObjectObjects1= [];
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.JumpToPositionContext.GDObjectObjects2= [];


gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.JumpToPositionContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.JumpToPositionContext.GDObjectObjects1);
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTypedText(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTypedText()+gdjs.evtTools.string.subStr(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFullText(), 0, eventsFunctionContext.getArgument("CharacterIndex")))
}
{for(var i = 0, len = gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.JumpToPositionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.JumpToPositionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Text")).setText(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTypedText());
}
}
}

}


};

gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.JumpToPosition = function(CharacterIndex, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Text": this._getText()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AutoTyping"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AutoTyping"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "CharacterIndex") return CharacterIndex;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.JumpToPositionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.JumpToPositionContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.JumpToPositionContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.JumpToPositionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.JumpToPositionContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.ShowFullTextContext = {};
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.ShowFullTextContext.idToCallbackMap = new Map();
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.ShowFullTextContext.GDObjectObjects1= [];
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.ShowFullTextContext.GDObjectObjects2= [];


gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.ShowFullTextContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.ShowFullTextContext.GDObjectObjects1);
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTypedText(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTypedText()+eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFullText())
}
{for(var i = 0, len = gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.ShowFullTextContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.ShowFullTextContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Text")).setText(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTypedText());
}
}
{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, "__AutoTyping.WriteTimer");
}
}

}


};

gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.ShowFullText = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Text": this._getText()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AutoTyping"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AutoTyping"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.ShowFullTextContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.ShowFullTextContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.ShowFullTextContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.ShowFullTextContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.ShowFullTextContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.IntervalContext = {};
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.IntervalContext.idToCallbackMap = new Map();
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.IntervalContext.GDObjectObjects1= [];
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.IntervalContext.GDObjectObjects2= [];


gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.IntervalContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getInterval();}
}

}


};

gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.Interval = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Text": this._getText()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AutoTyping"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AutoTyping"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.IntervalContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.IntervalContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.IntervalContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.IntervalContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.IntervalContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.SetIntervalContext = {};
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.SetIntervalContext.idToCallbackMap = new Map();
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.SetIntervalContext.GDObjectObjects1= [];
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.SetIntervalContext.GDObjectObjects2= [];


gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.SetIntervalContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setInterval(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.SetInterval = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Text": this._getText()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AutoTyping"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AutoTyping"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.SetIntervalContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.SetIntervalContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.SetIntervalContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.SetIntervalContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.SetIntervalContext.GDObjectObjects2.length = 0;


return;
}

gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("AutoTyping::AutoTyping", gdjs.evtsExt__AutoTyping__AutoTyping.AutoTyping);
