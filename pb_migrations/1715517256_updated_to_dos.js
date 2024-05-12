/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("aaof5w0do94f03z")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gvxglpgr",
    "name": "urgency",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "1",
        "2",
        "3"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("aaof5w0do94f03z")

  // remove
  collection.schema.removeField("gvxglpgr")

  return dao.saveCollection(collection)
})
