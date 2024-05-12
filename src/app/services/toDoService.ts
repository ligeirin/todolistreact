import PocketBase from "pocketbase";

export default class ToDoService {
  pb: PocketBase;

  constructor() {
    this.pb = new PocketBase("http://127.0.0.1:8090");
  }

  create(body: object) {
    const result = this.pb.collection("to_dos").create(body);
    return result;
  }

  get() {
    const result = this.pb.collection("to_dos").getList(1, 20, {
      sort: "-urgency,created",
    });
    return result;
  }

  delete(id: string) {
    const result = this.pb.collection("to_dos").delete(id);
    return result;
  }

  update(id: string, body: object) {
    const result = this.pb.collection("to_dos").update(id, body);
    return result;
  }
}
