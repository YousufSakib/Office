import React, { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";

const SettingsPanel = () => {
  const [todos, setTodos] = useState({
    en: [
      { id: 1, task: "Pick up kids from school", isCompleted: false },
      { id: 2, task: "Prepare for presentation", isCompleted: true },
      { id: 3, task: "Print Statements", isCompleted: false },
      { id: 4, task: "Create invoice", isCompleted: false },
      { id: 5, task: "Call John", isCompleted: true },
      { id: 6, task: "Meeting with Alisa", isCompleted: false },
    ],
    rtl: [
      { id: 1, task: "التقاط الاطفال من المدرسة", isCompleted: false },
      { id: 2, task: "الاستعداد للعرض التقديمي الخاص بك", isCompleted: true },
      { id: 3, task: "طباعة البيانات", isCompleted: false },
      { id: 4, task: "انشاء الفواتير", isCompleted: false },
      { id: 5, task: "استدعاء جون", isCompleted: true },
      { id: 6, task: "مقابلة مع اليسا", isCompleted: false },
    ],
  });

  const [inputValue, setInputValue] = useState("");
  const [activeLang, setActiveLang] = useState("en");

  const handleStatusChange = (event, id, lang) => {
    const updatedTodos = [...todos[lang]];
    updatedTodos[id].isCompleted = event.target.checked;
    setTodos((prev) => ({ ...prev, [lang]: updatedTodos }));
  };

  const handleAddTodo = (event, lang) => {
    event.preventDefault();
    const newTodo = {
      id: Date.now(),
      task: inputValue,
      isCompleted: false,
    };

    setTodos((prev) => ({
      ...prev,
      [lang]: [newTodo, ...prev[lang]],
    }));
    setInputValue("");
  };

  const handleRemoveTodo = (index, lang) => {
    const updatedTodos = [...todos[lang]];
    updatedTodos.splice(index, 1);
    setTodos((prev) => ({ ...prev, [lang]: updatedTodos }));
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const closeRightSidebar = () => {
    document.querySelector(".right-sidebar").classList.remove("open");
  };

  return (
    <div>
      <div id="right-sidebar" className="settings-panel right-sidebar">
        <i
          className="settings-close mdi mdi-close"
          onClick={closeRightSidebar}
        ></i>
        <Tabs
          defaultActiveKey="TODOLIST"
          className="bg-gradient-primary"
          id="uncontrolled-tab-example"
        >
          <Tab eventKey="TODOLIST" title="TO DO LIST">
            <div>
              <h4 className="card-title">Todo List</h4>
              <form
                className="add-items d-flex"
                onSubmit={(e) => handleAddTodo(e, activeLang)}
              >
                <input
                  type="text"
                  className="form-control h-auto"
                  placeholder="What do you need to do today?"
                  value={inputValue}
                  onChange={handleInputChange}
                  required
                />
                <button
                  type="submit"
                  className="btn btn-gradient-primary font-weight-bold"
                >
                  Add
                </button>
              </form>
              <div className="list-wrapper">
                {["en", "rtl"].map((lang) => (
                  <ul
                    className={`todo-list ${lang === "rtl" ? "rtl-todo" : ""}`}
                    key={lang}
                  >
                    {todos[lang].map((todo, index) => (
                      <ListItem
                        key={todo.id}
                        isCompleted={todo.isCompleted}
                        changed={(event) =>
                          handleStatusChange(event, index, lang)
                        }
                        remove={() => handleRemoveTodo(index, lang)}
                      >
                        {todo.task}
                      </ListItem>
                    ))}
                  </ul>
                ))}
              </div>
            </div>
          </Tab>
          {/* Add the CHATS tab here */}
        </Tabs>
      </div>
    </div>
  );
};

const ListItem = ({ isCompleted, changed, remove, children }) => (
  <li className={isCompleted ? "completed" : ""}>
    <div className="form-check">
      <label className="form-check-label">
        <input
          className="checkbox"
          type="checkbox"
          checked={isCompleted}
          onChange={changed}
        />{" "}
        {children} <i className="input-helper"></i>
      </label>
    </div>
    <i className="remove mdi mdi-close-circle-outline" onClick={remove}></i>
  </li>
);

export default SettingsPanel;
