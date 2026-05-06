class TodoApp {
  constructor() {
    this.tasks = JSON.parse(localStorage.getItem("todos")) || [];
    this.currentFilter = "all";
    this.editingId = null;
    this.init();
  }

  init() {
    this.cacheElements();
    this.bindEvents();
    this.render();
  }

  cacheElements() {
    this.todoForm = document.getElementById("todoForm");
    this.newTaskInput = document.getElementById("newTask");
    this.todoList = document.getElementById("todoList");
    this.taskCounter = document.getElementById("taskCounter");
    this.clearCompletedBtn = document.getElementById("clearCompleted");
    this.clearAllBtn = document.getElementById("clearAll");
  }

  bindEvents() {

    this.todoForm.addEventListener("submit", (e) => {
      e.preventDefault();
      this.saveTask();
    });

   
    document.querySelectorAll(".filter-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        this.setFilter(btn.dataset.filter);
      });
    });

    
    this.clearCompletedBtn.addEventListener("click", () =>
      this.clearCompleted(),
    );
    this.clearAllBtn.addEventListener("click", () => this.clearAll());

    document
      .getElementById("exportBtn")
      .addEventListener("click", () => this.exportData());
    document
      .getElementById("importBtn")
      .addEventListener("click", () => this.importData());
    document
      .getElementById("importFile")
      .addEventListener("change", (e) => this.handleImport(e));

  
    this.todoList.addEventListener("change", (e) => {
      if (e.target.classList.contains("task-checkbox")) {
        const taskId = parseInt(e.target.dataset.taskId);
        this.toggleTask(taskId);
      }
    });

    this.todoList.addEventListener("click", (e) => {
      const taskId = parseInt(e.target.dataset.taskId);

      if (e.target.classList.contains("delete-btn")) {
        this.deleteTask(taskId);
      } else if (e.target.classList.contains("edit-btn")) {
        this.startEdit(taskId);
      }
    });
  }

  saveTask() {
    const text = this.newTaskInput.value.trim();
    if (!text) return;

    if (this.editingId !== null) {
  
      this.tasks = this.tasks.map((task) =>
        task.id === this.editingId ? { ...task, text } : task,
      );
      this.editingId = null;
    } else {
  
      const task = {
        id: Date.now(),
        text,
        completed: false,
        created: new Date().toISOString(),
      };
      this.tasks.unshift(task);
    }

    this.newTaskInput.value = "";
    this.save();
    this.render();
  }

  toggleTask(id) {
    this.tasks = this.tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task,
    );
    this.save();
    this.render();
  }

  startEdit(id) {
    const task = this.tasks.find((t) => t.id === id);
    if (task) {
      this.editingId = id;
      this.newTaskInput.value = task.text;
      this.newTaskInput.focus();
      this.newTaskInput.select();
    }
  }

  deleteTask(id) {
    if (confirm("Удалить задачу?")) {
      this.tasks = this.tasks.filter((task) => task.id !== id);
      this.save();
      this.render();
    }
  }

  setFilter(filter) {
    this.currentFilter = filter;
    document.querySelectorAll(".filter-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.filter === filter);
    });
    this.render();
  }

  clearCompleted() {
    this.tasks = this.tasks.filter((task) => !task.completed);
    this.save();
    this.render();
  }

  clearAll() {
    if (confirm("Удалить ВСЕ задачи?")) {
      this.tasks = [];
      this.save();
      this.render();
    }
  }

  exportData() {
    const dataStr = JSON.stringify(this.tasks, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `todos-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  handleImport(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const tasks = JSON.parse(event.target.result);
        if (Array.isArray(tasks)) {
          this.tasks = tasks.map((task) => ({
            id: task.id || Date.now() + Math.random(),
            text: task.text || "",
            completed: !!task.completed,
            created: task.created || new Date().toISOString(),
          }));
          this.save();
          this.render();
          alert("✅ Импорт завершен!");
        }
      } catch {
        alert("❌ Неверный JSON файл!");
      }
    };
    reader.readAsText(file);
  }

  importData() {
    document.getElementById("importFile").click();
  }

  getFilteredTasks() {
    const tasks = this.tasks;
    switch (this.currentFilter) {
      case "active":
        return tasks.filter((task) => !task.completed);
      case "completed":
        return tasks.filter((task) => task.completed);
      default:
        return tasks;
    }
  }

  render() {
    const tasks = this.getFilteredTasks();
    const html =
      tasks.length === 0
        ? '<li class="empty">🎉 Нет задач! Добавьте первую! 🎉</li>'
        : tasks
            .map(
              (task) => `
                <li class="todo-item ${task.completed ? "completed" : ""}" data-id="${task.id}">
                    <input type="checkbox" class="task-checkbox" 
                           data-task-id="${task.id}"
                           ${task.completed ? "checked" : ""}>
                    <span class="task-text">${this.escapeHtml(task.text)}</span>
                    <div class="task-actions">
                        <button class="edit-btn" data-task-id="${task.id}" title="Редактировать">✏️</button>
                        <button class="delete-btn" data-task-id="${task.id}" title="Удалить">🗑️</button>
                    </div>
                </li>
            `,
            )
            .join("");

    this.todoList.innerHTML = html;
    this.updateUI();
  }

  escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }

  updateUI() {
    const total = this.tasks.length;
    const completed = this.tasks.filter((t) => t.completed).length;
    this.taskCounter.textContent = `Задач: ${total} (выполнено: ${completed})`;

    const hasCompleted = this.tasks.some((t) => t.completed);
    const hasTasks = this.tasks.length > 0;

    this.clearCompletedBtn.disabled = !hasCompleted;
    this.clearAllBtn.disabled = !hasTasks;


    if (this.editingId !== null) {
      const editingItem = this.todoList.querySelector(
        `[data-id="${this.editingId}"]`,
      );
      if (editingItem) {
        editingItem.style.outline = "3px solid #4facfe";
      }
    }
  }

  save() {
    localStorage.setItem("todos", JSON.stringify(this.tasks));
    this.updateUI();
  }
}


const todoApp = new TodoApp();
