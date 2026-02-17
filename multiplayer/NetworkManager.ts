import { ref, set, onValue } from "firebase/database";
import { db } from "../firebase/firebaseConfig";

export class NetworkManager {
  sendInput(playerId, input) {
    set(ref(db, `inputs/${playerId}`), input);
  }

  listenState(callback) {
    onValue(ref(db, "gameState"), snapshot => {
      callback(snapshot.val());
    });
  }
}
