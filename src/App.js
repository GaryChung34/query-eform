import logo from "./logo.svg";
import "./App.css";
import {
    Box,
    Typography,
    FormControl,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio,
    FormGroup,
    Checkbox,
} from "@mui/material";
import localeTC from "./locale";
import { useState } from "react";
import QuestionBox from "./QuestionBox";

function App() {
    const [q1, setQ1] = useState("");
    const [q2, setQ2] = useState("");
    const [q3, setQ3] = useState("");
    const [q4, setQ4] = useState("");
    const [q5, setQ5] = useState("");
    const [q7, setQ7] = useState("");

    console.log({
        q1: q1,
        q2: q2,
        q3: q3,
        q4: q4,
        q5: q5,
        q7: q7,
    });

    return (
        <Box>
            <Box
                sx={{
                    width: "60%",
                    margin: "5rem auto",
                    backgroundColor: "white",
                    padding: "2rem 4rem",
                }}
            >
                <Typography variant="h4" align="center">
                    {localeTC.heading}
                </Typography>
                <Box mb={4}>
                    <Typography variant="body7">
                        {localeTC.headingDetail}
                    </Typography>
                </Box>
                <QuestionBox
                    question={localeTC.question1}
                    onChange={(e) => setQ1(e.target.value)}
                    value={q1}
                />
                <QuestionBox
                    question={localeTC.question2}
                    onChange={(e) => setQ2(e.target.value)}
                />
                <QuestionBox
                    question={localeTC.question3}
                    onChange={(e) => setQ3(e.target.value)}
                />
                <QuestionBox
                    question={localeTC.question4}
                    onChange={(e) => setQ4(e.target.value)}
                />
                <Box mb={3}>
                    <FormControl>
                        <FormLabel id="question-5-label">
                            {localeTC.question5}
                        </FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            name="radio-buttons-group"
                            onChange={(e) => setQ5(e.target.value)}
                        >
                            {Object.entries(localeTC.question5Opt).map(
                                ([key, value]) => (
                                    <FormControlLabel
                                        value={key}
                                        control={<Radio />}
                                        label={value}
                                    />
                                )
                            )}
                        </RadioGroup>
                    </FormControl>
                </Box>
                <Box mb={3}>
                    <FormGroup>
                        <FormLabel id="question-6-label">
                            {localeTC.question6}
                        </FormLabel>
                        {Object.entries(localeTC.question6Opt).map(
                            ([key, value]) => (
                                <FormControlLabel
                                    value={key}
                                    label={value}
                                    control={<Checkbox />}
                                />
                            )
                        )}
                    </FormGroup>
                </Box>
                <QuestionBox
                    question={localeTC.question7}
                    onChange={(e) => setQ7(e.target.value)}
                    multiline
                />
            </Box>
        </Box>
    );
}

export default App;
