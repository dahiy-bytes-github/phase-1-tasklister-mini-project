document.addEventListener("DOMContentLoaded", () => {
    const taskForm = document.getElementById("create-task-form");
    const taskList = document.getElementById("tasks");

    // Add event listener for form submission
    taskForm.addEventListener("submit", (e) => {
        // Prevent the form from refreshing the page
        e.preventDefault();

        // Get the input value from the form
        const newTaskDescription = document.getElementById("new-task-description").value;

        // Create a new list item for the task
        const newTaskItem = document.createElement("li");
        newTaskItem.textContent = newTaskDescription;

        // Add the new task to the task list
        taskList.appendChild(newTaskItem);

        // Clear the input field after adding the task
        taskForm.reset();
    });
});
