
if (typeof gdjs.evtsExt__PopUp__Prompt !== "undefined") {
  gdjs.evtsExt__PopUp__Prompt.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__PopUp__Prompt = {};
gdjs.evtsExt__PopUp__Prompt.idToCallbackMap = new Map();


gdjs.evtsExt__PopUp__Prompt.userFunc0x1f520d0 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const message = eventsFunctionContext.getArgument("Message");
const defaultText = eventsFunctionContext.getArgument("DefaultText");

const response = prompt(message, defaultText);
runtimeScene
    .getVariables()
    .get("__PopUp")
    .getChild("Prompt")
    .setString(response || "");

};
gdjs.evtsExt__PopUp__Prompt.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__PopUp__Prompt.userFunc0x1f520d0(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__PopUp__Prompt.func = function(runtimeScene, Message, DefaultText, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PopUp"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PopUp"),
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
if (argName === "Message") return Message;
if (argName === "DefaultText") return DefaultText;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__PopUp__Prompt.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__PopUp__Prompt.registeredGdjsCallbacks = [];