const API_BASE = "https://jsonplaceholder.typicode.com";

document.addEventListener("DOMContentLoaded", function () {
  // 1. FormData + Fetch POST
  document.getElementById("userForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", document.getElementById("name").value);
    formData.append("email", document.getElementById("email").value);
    formData.append("avatar", document.getElementById("avatar").files[0]);

    try {
      const response = await fetch(`${API_BASE}/users`, {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      document.getElementById("formStatus").textContent =
        `Создали: ${data.name || "OK"}`;
    } catch (err) {
      document.getElementById("formStatus").textContent = "Ошибка отправки!";
    }
  });

  // 2. URLSearchParams + GET
  document.querySelector(".search-btn").addEventListener("click", function () {
    const query = document.getElementById("query").value;
    const url = new URL(`${API_BASE}/users`);
    const params = new URLSearchParams({ q: query });
    url.search = params;

    fetch(url)
      .then((res) => res.json())
      .then((users) => {
        document.getElementById("searchResults").innerHTML = users
          .slice(0, 5)
          .map((u) => `<p><strong>${u.name}</strong> (${u.email})</p>`)
          .join("");
      });
  });

  // 3. XMLHttpRequest PUT
  document.querySelector(".xhr-btn").addEventListener("click", function () {
    const id = document.getElementById("postId").value;
    const title = document.getElementById("newTitle").value;
    const xhr = new XMLHttpRequest();
    xhr.open("PUT", `${API_BASE}/posts/${id}`);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = () => {
      document.getElementById("xhrStatus").textContent =
        xhr.status === 200 ? "Обновлено XHR!" : `Ошибка: ${xhr.status}`;
    };
    xhr.send(JSON.stringify({ title, id: +id }));
  });

  // 4. Cookies, localStorage, sessionStorage
  document.querySelectorAll(".storage-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      const key = document.getElementById("storageKey").value;
      const value = document.getElementById("storageValue").value;
      const action = this.dataset.action;

      if (action === "cookie") {
        document.cookie = `${key}=${value}; max-age=3600`;
      } else if (action === "local") {
        localStorage.setItem(key, value);
      } else if (action === "session") {
        sessionStorage.setItem(key, value);
      } else if (action === "show") {
        const info = document.getElementById("storageInfo");
        info.innerHTML = `
                    <p><strong>Cookie:</strong> ${document.cookie}</p>
                    <p><strong>localStorage.${key}:</strong> ${localStorage.getItem(key)}</p>
                    <p><strong>sessionStorage.${key}:</strong> ${sessionStorage.getItem(key)}</p>
                `;
      }
    });
  });

  // 5. методы API
  document.querySelectorAll(".api-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      const action = this.dataset.action;
      if (action === "get") {
        fetch(`${API_BASE}/users`)
          .then((res) => res.json())
          .then((users) => {
            const table = document.getElementById("users");
            table.innerHTML =
              "<table><thead><tr><th>ID</th><th>Имя</th><th>Email</th><th>Телефон</th></tr></thead><tbody>" +
              users
                .slice(0, 10)
                .map(
                  (u) =>
                    `<tr><td>${u.id}</td><td>${u.name}</td><td>${u.email}</td><td>${u.phone}</td></tr>`,
                )
                .join("") +
              "</tbody></table>";
          });
      } else if (action === "post") {
        fetch(`${API_BASE}/posts`, {
          method: "POST",
          body: JSON.stringify({
            title: "Мой пост",
            body: "Содержимое",
            userId: 1,
          }),
          headers: { "Content-Type": "application/json" },
        })
          .then((res) => res.json())
          .then((data) => console.log("Создан пост:", data));
      } else if (action === "delete") {
        fetch(`${API_BASE}/posts/1`, { method: "DELETE" }).then((res) =>
          console.log("Удалено:", res.status),
        );
      }
    });
  });

  // 6. Server Sent Events
  document.getElementById("startSSE").addEventListener("click", function () {
    const eventSource = new EventSource("https://httpbin.org/stream/10");
    eventSource.onmessage = (e) => {
      document.getElementById("sseMessages").innerHTML +=
        `<p>${new Date().toLocaleTimeString()}: ${e.data}</p>`;
    };
    eventSource.onerror = () => {
      document.getElementById("sseMessages").innerHTML +=
        '<p style="color:red">SSE ошибка</p>';
      eventSource.close();
    };
    document.getElementById("startSSE").disabled = true;
    document.getElementById("stopSSE").disabled = false;
    this.dataset.source = eventSource;
  });

  document.getElementById("stopSSE").addEventListener("click", function () {
    const eventSource = document.getElementById("startSSE").dataset.source;
    if (eventSource) eventSource.close();
    document.getElementById("startSSE").disabled = false;
    this.disabled = true;
    document.getElementById("sseMessages").innerHTML += "<p>Остановлено</p>";
  });

  // 7. Реализована функция для возобновляемой загрузки
  document.querySelector(".upload-btn").addEventListener("click", function () {
    const file = document.getElementById("bigFile").files[0];
    if (!file) return alert("Выберите файл");

    const uploader = new Uploader(file);
    uploader.upload();
  });

  // Здесь класс для возобновляемой загрузки 
  class Uploader {
    constructor(file) {
      this.file = file;
      this.fileId = file.name + "-" + Date.now();
    }
    async upload() {
      const progress = document.getElementById("uploadProgress");
      const xhr = new XMLHttpRequest();
      xhr.open("POST", "https://httpbin.org/post");
      xhr.setRequestHeader("X-File-Id", this.fileId);
      xhr.upload.onprogress = (e) => {
        if (e.lengthComputable) {
          const percent = Math.round((e.loaded / e.total) * 100);
          progress.textContent = `Прогресс: ${percent}%`;
        }
      };
      xhr.onload = () => {
        progress.textContent = "Загрузка завершена!";
      };
      xhr.send(this.file);
    }
  }
});
