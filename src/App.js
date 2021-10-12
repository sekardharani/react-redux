import "./App.css";
import store from "./store/index";
import { Provider } from "react-redux";
import UserList from "./components/userList";
// import { fetchUsers } from "./store/action/creator";
// import { ADD_USERS } from "./store/action/constants";

// store.dispatch(fetchUsers(1));

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserList />
      </div>
    </Provider>
  );
}

export default App;
