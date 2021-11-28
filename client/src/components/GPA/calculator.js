import React, { useEffect, useState } from "react";
import { Paper, Box, Typography, Card, CardContent } from "@material-ui/core/";
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
  const [click, setClick] = useState(false);
  const [gpa, setGpa] = useState(true);
  const dispatch = useDispatch(0);

  useEffect(() => {
    dispatch(getCourse());
  }, [dispatch]);

  useEffect(() => {
    setCredit(creditSelected);
  }, [course]);

  const umCourses = useSelector((state) => state.umCourses);

  let match = umCourses.find((x) => x.name === course);
  const creditSelected = match ? match.credithr : "";

  const handleCourseChange = (event) => {
    setCourse(event.target.value);
  };
  const handleGradeChange = (event) => {
    setGrade(event.target.value);
  };
  const handleCreditChange = (event) => {
    setCredit(event.target.value);
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
    setClick(false);
    setGpa(0);
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
    setClick(true);
    let totalCred = 0;
    let totalGradePoints = 0;

    for (let i = 0; i < inputs.length; i++) {
      totalCred += inputs[i].credit;
      totalGradePoints += inputs[i].credit * parseFloat(inputs[i].grade);
    }

    if (totalCred === 0) return 0;

    let calgpa = totalGradePoints / totalCred;
    setGpa(calgpa.toFixed(2));
  };

  return (
    <>
      <div>
        <Typography className={classes.header}>
          Use this calculator to calculate grade point average (GPA). <br />
          Please select course and grade.{" "}
        </Typography>
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
        {click && (
          <Card variant="outlined" className={classes.card}>
            <CardContent className={classes.content}>
              <Typography variant="h6" className={classes.wording}>
                Your GPA is
              </Typography>
              <Typography variant="h5" className={classes.gpa}>
                &nbsp;&nbsp;{gpa}
              </Typography>
            </CardContent>
          </Card>
        )}
      </div>
    </>
  );
};

export default Calc;
