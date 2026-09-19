
if (typeof gdjs.evtsExt__ExtendedVariables__C_object_variable_exist !== "undefined") {
  gdjs.evtsExt__ExtendedVariables__C_object_variable_exist.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ExtendedVariables__C_object_variable_exist = {};
gdjs.evtsExt__ExtendedVariables__C_object_variable_exist.idToCallbackMap = new Map();
gdjs.evtsExt__ExtendedVariables__C_object_variable_exist.GDObjectToCheckObjects1= [];
gdjs.evtsExt__ExtendedVariables__C_object_variable_exist.GDObjectToCheckObjects2= [];


gdjs.evtsExt__ExtendedVariables__C_object_variable_exist.mapOfGDgdjs_9546evtsExt_9595_9595ExtendedVariables_9595_9595C_9595object_9595variable_9595exist_9546GDObjectToCheckObjects1Objects = Hashtable.newFrom({"ObjectToCheck": gdjs.evtsExt__ExtendedVariables__C_object_variable_exist.GDObjectToCheckObjects1});
gdjs.evtsExt__ExtendedVariables__C_object_variable_exist.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = false;}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("ObjectToCheck"), gdjs.evtsExt__ExtendedVariables__C_object_variable_exist.GDObjectToCheckObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__ExtendedVariables__ObjectVariableExist.func(runtimeScene, gdjs.evtsExt__ExtendedVariables__C_object_variable_exist.mapOfGDgdjs_9546evtsExt_9595_9595ExtendedVariables_9595_9595C_9595object_9595variable_9595exist_9546GDObjectToCheckObjects1Objects, eventsFunctionContext.getArgument("ObjectVariableName"), eventsFunctionContext);
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}
}

}


};

gdjs.evtsExt__ExtendedVariables__C_object_variable_exist.func = function(runtimeScene, ObjectToCheck, ObjectVariableName, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
"ObjectToCheck": ObjectToCheck
},
  _objectArraysMap: {
"ObjectToCheck": gdjs.objectsListsToArray(ObjectToCheck)
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
if (argName === "ObjectVariableName") return ObjectVariableName;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__ExtendedVariables__C_object_variable_exist.GDObjectToCheckObjects1.length = 0;
gdjs.evtsExt__ExtendedVariables__C_object_variable_exist.GDObjectToCheckObjects2.length = 0;

gdjs.evtsExt__ExtendedVariables__C_object_variable_exist.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ExtendedVariables__C_object_variable_exist.GDObjectToCheckObjects1.length = 0;
gdjs.evtsExt__ExtendedVariables__C_object_variable_exist.GDObjectToCheckObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__ExtendedVariables__C_object_variable_exist.registeredGdjsCallbacks = [];