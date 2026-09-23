
if (typeof gdjs.evtsExt__LoadImageFromURL__LoadURLIntoSprite !== "undefined") {
  gdjs.evtsExt__LoadImageFromURL__LoadURLIntoSprite.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__LoadImageFromURL__LoadURLIntoSprite = {};
gdjs.evtsExt__LoadImageFromURL__LoadURLIntoSprite.idToCallbackMap = new Map();
gdjs.evtsExt__LoadImageFromURL__LoadURLIntoSprite.GDObjectObjects1= [];


gdjs.evtsExt__LoadImageFromURL__LoadURLIntoSprite.userFunc0x1f7a830 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
if (eventsFunctionContext.getArgument("ChangeResource")) {
    const texture = PIXI.BaseTexture.from(eventsFunctionContext.getArgument("URL"));
    for (const obj of objects) obj.getRendererObject().texture.baseTexture = texture;
} else {
    const texture = PIXI.Texture.from(eventsFunctionContext.getArgument("URL"));
    for (const obj of objects) obj.getRendererObject().texture = texture;
}

};
gdjs.evtsExt__LoadImageFromURL__LoadURLIntoSprite.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__LoadImageFromURL__LoadURLIntoSprite.GDObjectObjects1);

const objects = gdjs.evtsExt__LoadImageFromURL__LoadURLIntoSprite.GDObjectObjects1;
gdjs.evtsExt__LoadImageFromURL__LoadURLIntoSprite.userFunc0x1f7a830(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__LoadImageFromURL__LoadURLIntoSprite.func = function(runtimeScene, URL, Object, ChangeResource, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": gdjs.objectsListsToArray(Object)
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("LoadImageFromURL"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("LoadImageFromURL"),
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
if (argName === "URL") return URL;
if (argName === "ChangeResource") return ChangeResource;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__LoadImageFromURL__LoadURLIntoSprite.GDObjectObjects1.length = 0;

gdjs.evtsExt__LoadImageFromURL__LoadURLIntoSprite.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__LoadImageFromURL__LoadURLIntoSprite.GDObjectObjects1.length = 0;


return;
}

gdjs.evtsExt__LoadImageFromURL__LoadURLIntoSprite.registeredGdjsCallbacks = [];