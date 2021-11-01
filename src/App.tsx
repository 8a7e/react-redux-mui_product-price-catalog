import AppRouter from "./components/app-router";
import MainLayout from "./layouts/main";

function App() {
  return (
    <div className="App">
      <MainLayout>
        <AppRouter />
      </MainLayout>
    </div>
  );
}

export default App;
