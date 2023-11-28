class Storage {
  #items;
  
    constructor(items) {
      this.#items = items;
    }
  
    getItems() {
      return this.#items;
    }
  
    addItem(item) {
      this.#items.push(item);
    }
  
    removeItem(item) {
      const index = this.#items.indexOf(item);
      if (index !== -1) {
        this.#items.splice(index, 1);
      }
    }
  }
  
  const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
  console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
  
  storage.addItem("Droid");
  console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
  
  storage.removeItem("Prolonger");
  console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

//   Оголошений клас Storage
// У класі Storage оголошений метод getItems
// У класі Storage оголошений метод addItem
// У класі Storage оголошений метод removeItem
// Властивість items у класі Storage оголошена приватною
// Метод getItems повертає значення приватної властивості items екземпляра класу, який його викликає
// Метод addItem змінює значення приватної властивості items екземпляра класу, який його викликає
// Метод removeItem змінює значення приватної властивості items екземпляра класу, який його викликає
// У результаті виклику new Storage(["Nanitoids", "Prolonger", "Antigravitator"]) значення змінної storage — це об'єкт
// У об’єкта storage немає публічної властивості items
// Перший виклик storage.getItems() одразу після ініціалізації екземпляра повертає масив ["Nanitoids", "Prolonger", "Antigravitator"]
// Другий виклик storage.getItems() після виклику storage.addItem("Droid") повертає масив ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// Третій виклик storage.getItems() після виклику storage.removeItem("Prolonger") повертає масив ["Nanitoids", "Antigravitator", "Droid"]