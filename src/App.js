import "./App.css";
import "pages/note-page";
import { muiTheme } from "styles/muiTheme";
import { NotePageContainer } from "pages/note-page";
import { ThemeProvider } from "@emotion/react";
import { NoteContextProvider } from "contexts/noteContext/noteContextProvider";
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={muiTheme}>
        <NoteContextProvider>
          <NotePageContainer />
        </NoteContextProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
