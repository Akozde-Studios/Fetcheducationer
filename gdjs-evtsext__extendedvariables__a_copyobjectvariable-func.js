
if (typeof gdjs.evtsExt__ExtendedVariables__A_CopyObjectVariable !== "undefined") {
  gdjs.evtsExt__ExtendedVariables__A_CopyObjectVariable.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ExtendedVariables__A_CopyObjectVariable = {};
gdjs.evtsExt__ExtendedVariables__A_CopyObjectVariable.idToCallbackMap = new Map();
gdjs.evtsExt__ExtendedVariables__A_CopyObjectVariable.GDSourceObjectObjects1= [];
gdjs.evtsExt__ExtendedVariables__A_CopyObjectVariable.GDSourceObjectObjects2= [];
gdjs.evtsExt__ExtendedVariables__A_CopyObjectVariable.GDTargetObjectObjects1= [];
gdjs.evtsExt__ExtendedVariables__A_CopyObjectVariable.GDTargetObjectObjects2= [];


gdjs.evtsExt__ExtendedVariables__A_CopyObjectVariable.mapOfGDgdjs_9546evtsExt_9595_9595ExtendedVariables_9595_9595A_9595CopyObjectVariable_9546GDSourceObjectObjects1Objects = Hashtable.newFrom({"SourceObject": gdjs.evtsExt__ExtendedVariables__A_CopyObjectVariable.GDSourceObjectObjects1});
gdjs.evtsExt__ExtendedVariables__A_CopyObjectVariable.mapOfGDgdjs_9546evtsExt_9595_9595ExtendedVariables_9595_9595A_9595CopyObjectVariable_9546GDTargetObjectObjects1Objects = Hashtable.newFrom({"TargetObject": gdjs.evtsExt__ExtendedVariables__A_CopyObjectVariable.GDTargetObjectObjects1});
gdjs.evtsExt__ExtendedVariables__A_CopyObjectVariable.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("SourceObject"), gdjs.evtsExt__ExtendedVariables__A_CopyObjectVariable.GDSourceObjectObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("TargetObject"), gdjs.evtsExt__ExtendedVariables__A_CopyObjectVariable.GDTargetObjectObjects1);
{gdjs.evtsExt__ExtendedVariables__CopyObjectVariable.func(runtimeScene, gdjs.evtsExt__ExtendedVariables__A_CopyObjectVariable.mapOfGDgdjs_9546evtsExt_9595_9595ExtendedVariables_9595_9595A_9595CopyObjectVariable_9546GDSourceObjectObjects1Objects, eventsFunctionContext.getArgument("SourceVariableName"), gdjs.evtsExt__ExtendedVariables__A_CopyObjectVariable.mapOfGDgdjs_9546evtsExt_9595_9595ExtendedVariables_9595_9595A_9595CopyObjectVariable_9546GDTargetObjectObjects1Objects, eventsFunctionContext.getArgument("TargetVariableName"), false, eventsFunctionContext);
}
}

}


};

gdjs.evtsExt__ExtendedVariables__A_CopyObjectVariable.func = function(runtimeScene, SourceObject, SourceVariableName, TargetObject, TargetVariableName, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
"SourceObject": SourceObject
, "TargetObject": TargetObject
},
  _objectArraysMap: {
"SourceObject": gdjs.objectsListsToArray(SourceObject)
, "TargetObject": gdjs.objectsListsToArray(TargetObject)
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ExtendedVariables"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ExtendedVariables"),
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
if (argName === "SourceVariableName") return SourceVariableName;
if (argName === "TargetVariableName") return TargetVariableName;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__ExtendedVariables__A_CopyObjectVariable.GDSourceObjectObjects1.length = 0;
gdjs.evtsExt__ExtendedVariables__A_CopyObjectVariable.GDSourceObjectObjects2.length = 0;
gdjs.evtsExt__ExtendedVariables__A_CopyObjectVariable.GDTargetObjectObjects1.length = 0;
gdjs.evtsExt__ExtendedVariables__A_CopyObjectVariable.GDTargetObjectObjects2.length = 0;

gdjs.evtsExt__ExtendedVariables__A_CopyObjectVariable.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ExtendedVariables__A_CopyObjectVariable.GDSourceObjectObjects1.length = 0;
gdjs.evtsExt__ExtendedVariables__A_CopyObjectVariable.GDSourceObjectObjects2.length = 0;
gdjs.evtsExt__ExtendedVariables__A_CopyObjectVariable.GDTargetObjectObjects1.length = 0;
gdjs.evtsExt__ExtendedVariables__A_CopyObjectVariable.GDTargetObjectObjects2.length = 0;


return;
}

gdjs.evtsExt__ExtendedVariables__A_CopyObjectVariable.registeredGdjsCallbacks = [];