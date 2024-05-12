/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "aaof5w0do94f03z",
    "created": "2024-05-12 12:31:02.883Z",
    "updated": "2024-05-12 12:31:02.883Z",
    "name": "to_dos",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "vreywbhz",
        "name": "content",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("aaof5w0do94f03z");

  return dao.deleteCollection(collection);
})
