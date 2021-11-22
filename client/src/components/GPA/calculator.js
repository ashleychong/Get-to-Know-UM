import React, { useEffect, useState } from "react";
import { Paper, Box, Typography } from "@material-ui/core/";
import useStyles from "./style";
import { getCourse } from "../../actions/gpa";
import { useDispatch, useSelector } from "react-redux";
import CourseForm from "./CourseForm";
import { v4 as uuid } from "uuid";
import CourseList from "./CourseList";

const initialInput = [];

const Calc = () => {
  const classes = useStyles();
  const [inputs, setInput] = useState(initialInput);
  const [course, setCourse] = useState("");
  const [grade, setGrade] = useState("");
  const [credit, setCredit] = useState("");
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState(0);
  const [value, setValue] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCourse());
  }, [dispatch]);

  const umCourses = useSelector((state) => state.umCourses);

  let match = umCourses.find((x) => x.name === course);
  const creditSelected = match ? match.credithr : "";

  const handleCourseChange = (event) => {
    setCourse(event.target.value);
    setCredit(creditSelected);
  };
  const handleGradeChange = (event) => {
    setCredit(creditSelected);
    setGrade(event.target.value);
  };
  const handleCreditChange = (e) => {
    setCredit(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (course !== "" && grade != "") {
      if (edit) {
        let temp = inputs.map((item) => {
          return item.id === id ? { ...item, course, credit, grade } : item;
        });
        setInput(temp);
        setEdit(false);
      } else {
        const singleInput = { id: uuid(), course, credit, grade };
        setInput([...inputs, singleInput]);
      }
      setCourse("");
      setCredit("");
      setGrade("");
      setValue(true);
    } else {
      setValue(false);
    }
  };

  const handleDelete = (id) => {
    let temp = inputs.filter((item) => item.id !== id);
    setInput(temp);
  };

  const clearItems = () => {
    setInput([]);
  };

  const handleEdit = (id) => {
    let editInput = inputs.find((item) => item.id === id);
    let { course, credit, grade } = editInput;
    setCourse(course);
    setGrade(grade);
    setCredit(credit);
    setEdit(true);
    setId(id);
  };
  const calculate = () => {
    let totalCred = 0;
    let totalGradePoints = 0;

    for (let i = 0; i < inputs.length; i++) {
      totalCred += inputs[i].credit;
      totalGradePoints += inputs[i].credit * parseFloat(inputs[i].grade);
    }

    if (totalCred === 0) return 0;

    const gpa = totalGradePoints / totalCred.toFixed(2);
    return gpa;
  };

  return (
    <Paper className={classes.paper} elevation={3}>
      <CourseForm
        handleSubmit={handleSubmit}
        course={course}
        handleCourseChange={handleCourseChange}
        credit={credit}
        handleCreditChange={handleCreditChange}
        grade={grade}
        handleGradeChange={handleGradeChange}
        edit={edit}
        value={value}
        setValue={setValue}
      />
      <CourseList
        inputs={inputs}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        clearItems={clearItems}
        calculate={calculate}
      />
      <Box component="span" sx={{ border: "1px dashed grey" }}>
        <Typography></Typography>
      </Box>
    </Paper>
  );
};

export default Calc;
