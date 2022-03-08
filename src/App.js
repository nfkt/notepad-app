import './App.css';
import 'pages/note-page';
import { muiTheme } from "styles/muiTheme";
import { NotePageContainer } from 'pages/note-page';
import { ThemeProvider } from '@emotion/react';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={muiTheme}>
        <NotePageContainer />
      </ThemeProvider>
    </div>
  );
}

export default App;
