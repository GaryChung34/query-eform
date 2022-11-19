import { InputBase, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";

const QuestionBox = ({ question, multiline, ...rest }) => (
    <Box mb={3}>
        <Typography mb={1}>{question}</Typography>
        <Paper
            square
            elevation={2}
            sx={{
                width: "100%",
                height: multiline ? 100 : 40,
                backgroundColor: "white",
                "&:hover": {
                    backgroundColor: "#FFFAF0",
                },
            }}
        >
            <InputBase
                sx={{ padding: 0.5 }}
                fullWidth
                rows={multiline ? 4 : 1}
                multiline={multiline}
                {...rest}
            />
        </Paper>
    </Box>
);

export default QuestionBox;
