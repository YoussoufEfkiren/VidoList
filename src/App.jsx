import { Provider } from "react-redux"
import store from "./store/store"
import YoutubeClone from "./components/youtube-clone"
import "./styles.css"

// App component with Redux Provider
const App = () => (
  <Provider store={store}>
    <YoutubeClone />
  </Provider>
)

export default App

