// on importe l'environnement
import jsdom from 'jsdom';
/**
 * @jest-environment jsdom
 */


// importer les focntions à tester
import { getUserFromLocalStorage, saveUserToLocalStorage } from "tests/localStorage/localStorage";


// ************ création d'un local storage pour JEST ******************* */
const localStorageMock = (function () {
  let store = {};

  return {
    getItem(key) {
      return store[key];
    },

    setItem(key, value) {
      store[key] = value;
    },

    clear() {
      store = {};
    },

    removeItem(key) {
      delete store[key];
    },

    getAll() {
      return store;
    },
  };
})();

Object.defineProperty(jsdom, "localStorage", { value: localStorageMock });


/**
 *  TEST
 */
describe("file localStorage.js", () => {
  describe("function saveUserToLocalStorage", () => {
    // Tester si la fonction a correctement sauvegardé l'utilisateur dans le local storage
    it("should save user to local storage", () => {
      // Créer un utilisateur fictif pour le test
      const user = { name: "Jest_test", email: "jest_test@msn.com" };

      // Appeler la fonction à tester
      saveUserToLocalStorage(user);

      // Vérifier si l'utilisateur a été correctement sauvegardé dans le local storage
      expect(jsdom.localStorage.getItem("user-arthome")).toEqual(
        JSON.stringify(user)
      );
    });
  });

  describe('function getUserFromLocalStorage', () => {
    // Tester si la fonction retourne l'utilisateur stocké dans le local storage
    it('should return user from local storage', () => {
      // Créer un utilisateur fictif pour le test
      const user = { name: 'Jest_test_two', email: 'Jest_test_two@example.com' };
  
      // Stocker l'utilisateur fictif dans le local storage
      jsdom.localStorage.setItem('user-arthome', JSON.stringify(user));
  
      // Appeler la fonction à tester
      const result = getUserFromLocalStorage();
  
      // Vérifier si la fonction a retourné l'utilisateur stocké dans le local storage
      expect(result).toEqual(user);
    });
  
    // Tester si la fonction retourne null dans le cas ou l'utilisateur n'est pas stocké dans le local storage
    it('should return null if user is not in local storage', () => {
      // Supprimer la clé 'user-arthome' dan le local storage
      jsdom.localStorage.removeItem('user-arthome');
  
      // Appeler la fonction à tester
      const result = getUserFromLocalStorage();
  
      // Vérifier si la fonction a retourné null
      expect(result).toBeNull();
    });
  });
});
