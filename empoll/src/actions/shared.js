import api from "../api/empoll";
import { receiveUsers } from "./users";

export function loadData(dispatch) {
  Promise.all([api.loadUsers(), api.loadQuestions()]).then(
    ([users, questions]) => {
      dispatch(receiveUsers(users));
    },
  );
}
