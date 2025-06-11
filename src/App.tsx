import { Container, Typography } from "@mui/material";
import CopyHandler from "./components/CopyHandler";
import Form from "./components/Form";

function App() {
  return (
    <Container maxWidth="md" sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Визуализация выравнивания аминокислотных последовательностей
      </Typography>
      <Form />
      <CopyHandler />
    </Container>
  );
}

export default App;
