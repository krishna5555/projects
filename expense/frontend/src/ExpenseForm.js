import React, {useState, useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import './ExpenseForm.css';

function ExpenseForm(){
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [date, setDate] = useState("");
    const [location, setLocation] = useState("");
    const [expenseFormData, setExpenseFormData] = useState("");

    //we are initializing categoriesList as an array as we are expecting
    //an array from backend and need it for applying map function
    const [categoriesList, setCategoriesList] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/categories")
              .then(response => response.json()
              .then(data => setCategoriesList(data)));
    }, []);

    useEffect(() => {
        var expenseData = {
                            "description" : title,
                            "category" : {
                                "id" : 1,
                                "name" : category
                            },
                            "expenseDate" : date,
                            "location" : location,
                            "user" : {
                                "id" : 1,
                                "name" : "john"
                            }
                        }
        setExpenseFormData(expenseData);
    });

    function submitExpenseForm(event){

        //to prevent browser refresh
        event.preventDefault();

        // call expense controller using fetch()
        fetch("http://localhost:8080/api/submitExpenseForm", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(expenseFormData)
        }).then(alert("Submitted the Expense successfully"))
          .then(window.location.reload());
    }

    function resetExpenseForm(){
        setTitle("");
        setCategory("");
        setDate("");
        setLocation("");
    }

    return (
        <>
            <form className="expenseForm" onSubmit={submitExpenseForm}>
                <h2>Add Expense</h2>
                <TextField label="Title" onChange = {event => setTitle(event.target.value)} />
                <br/>
                <FormControl>
                    <InputLabel id="demo-simple-select-label">Category</InputLabel>
                    <Select labelId="demo-simple-select-label"
                            className="categorySelect"
                            id="demo-simple-select"
                            onChange = {event => setCategory(event.target.value)}>
                                {categoriesList.map((category) => {
                                    return <MenuItem value={category.name}>{category.name}</MenuItem>;
                                })}
                    </Select>
                </FormControl>
                <br/><br/>
                <TextField
                    id="date"
                    label="Date"
                    type="date"
                    className=""
                    onChange = {event => setDate(event.target.value)}
                    InputLabelProps={{
                    shrink: true,
                    }}
                />
                <br/>
                <TextField label="Location" onChange = {event => setLocation(event.target.value)} />
                <br/><br/>
                <Button type="submit" className="submitButton" variant="contained" color="primary">
                    Save
                </Button>
                <Button type="reset" className="resetButton" variant="contained" color="default">
                    Cancel
                </Button>
            </form>
        </>
    );
}

export default ExpenseForm;