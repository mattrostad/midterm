const renderTaskElm = (task) => {
  const taskList = $(".task-list");
  console.log("taskList", taskList);
  taskList.append(createTaskElement(task));
  // taskList.children(".task:last-child").data(task);
};

const renderTaskElms = (taskArray) => {
  for (const task of taskArray) {
    console.log(task);
    renderTaskElm(task);
  }
};

const createTaskElement = (task) => {
  console.log('task', task)
  // Mapping of category ID to the icon class name from fontAwesome
  const categoryMapping = {
    1: "fa-cart-arrow-down", // product / buy
    2: "fa-utensils", // food / eat
    3: "fa-book-open", // books / read
    4: "fa-film", // movies / watch
  };
  const categoryIcon = categoryMapping[task.category_id];

  let priorityColour = "";
  if (task.priority === "Very High") {
    priorityColour = "red";
  } else if (task.priority === "High") {
    priorityColour = "orange";
  } else if (task.priority === "Medium") {
    priorityColour = "yellow";
  } else {
    priorityColour = "gray";
  }

  let detailsText = "";

  if (task.completed_date) {
    detailsText = `Completed ${new Date(task.completed_date).toDateString()}`;
  } else {
    detailsText = task.scheduled_date
      ? new Date(task.scheduled_date).toDateString()
      : "";
  }

  // Using Bootstrap's gridding system
  const taskElm = `
    <article class="task ${task.completed_date ? "completed" : ""}">
      <div class="container">
        <div class="row">
          <div class="col col-2">
            <i class="fas ${categoryIcon} fa-2x"></i>
          </div>

          <div class="col col-7">
            <h3 class="task-name">${task.titleText.text}</h3>
            <span>${task.titleType.id}</span>
          </div>
          <div class="col col-3 task-icons">
          </div>
        </div>
      </div>
    </article>
  `;

//   const taskElm = `
//   <article class="task ${task.completed_date ? "completed" : ""}">
//     <div class="container">
//       <div class="row">
//         <div class="col col-2">
//           <i class="fas ${categoryIcon} fa-2x"></i>
//         </div>

//         <div class="col col-7">
//           <h3 class="task-name">${task.titleText.text}</h3>
//           <span>${task.titleType.id}</span>
//         </div>
//         <div class="col col-3 task-icons">
//           <ul>
//             <li><i class="fas fa-flag ${priorityColour}"></i></li>
//           <li><a href="#"><i class="fas fa-edit"></a></i></li>
//           <li><a href="#"><i class="fas fa-trash"></a></i></li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   </article>
// `;
  return taskElm;
};

// Client facing scripts here - JS Jquery -
$(() => {
  // const console = () => {
  //   console.log("hello")
  // }
  $("#todo-form").on("submit", (event) => {
    event.preventDefault();
    const searchTerm = $("#title").val();
    const settings = {
      async: true,
      crossDomain: true,
      url: `https://moviesdatabase.p.rapidapi.com/titles/search/title/${searchTerm}`,
      method: "GET",
      headers: {
        "X-RapidAPI-Key": rapidAPI,
        "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
      },
    };

    const moviesResult = $.ajax(settings)
      .then(function (response) {
        const movieArray = response.results.filter(
          (elm) => elm.titleType.id === "movie"
        );
        // Add close logic
        // $("#myModal").modal("hide"); // check
        //  $("#myModal").close();

        if (movieArray.length > 0) {
          movieArray.forEach((movie) => {
            renderTaskElm(movie);
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  });
});



// function createTodo() {
//   var todo = {
//     title: "Your todo title",
//     description: "Your todo description"
//   };

//   $.ajax({
//     url: "/post/todos",
//     type: "POST",
//     contentType: "application/json",
//     data: JSON.stringify(todo),
//     success: function(response) {
//       console.log("Todo created successfully!");
//       // Perform any additional actions after successful creation
//     },
//     error: function(xhr, status, error) {
//       console.log("Error creating todo:", error);
//       // Handle any errors that occur during the creation
//     }
//   });
// }
// app.get("/todos", function(req, res) {
//   // Retrieve the todos from your data source
//   var todos = [
//     { title: "Todo 1", description: "Description 1" },
//     { title: "Todo 2", description: "Description 2" },
//     { title: "Todo 3", description: "Description 3" }
//   ];

//   res.json(todos);
// });

// app.get("/todos", function(req, res) {
//   // Retrieve the todos from your data source
//   var todos = [
//     { title: "Todo 1", description: "Description 1" },
//     { title: "Todo 2", description: "Description 2" },
//     { title: "Todo 3", description: "Description 3" }
//   ];

//   res.json(todos);
// });
