import sinon from 'sinon';

export const createServer = () => {
  const server = sinon.fakeServer.create();
  server.autoRespond = true;
  server.autoRespondAfter = 1000;
  const headers = { 'Content-Type': 'application/json' };

  // Counter to fake/simulate errors every N requests.
  /*
  let counter = 0;
  const failureRate = 4;
  */

  const requestShouldSucceed = (request) => {
    return true;
    /*
    counter++;

    if (counter % failureRate === 0) {
      counter = 0;
      request.respond(500, headers, 'The request failed.');
      return false;
    }
    return true;
    */
  };

  const createCarList = () => {
    return [
      { id: 'c4', make: 'Honda', model: 'Civic', options: [] },
      { id: 'c2', make: 'Acura', model: 'Integra', options: [] },
      { id: 'c3', make: 'Audi', model: 'Q5', options: [] },
      { id: 'c5', make: 'Honda', model: 'CR-V', options: [] },
      { id: 'c1', make: 'Acura', model: '1.6 EL', options: [] }
    ];
  };
  let carList = [];

  const getCarList = () => {
    if (carList.length === 0) {
      carList = createCarList();
    }
    return carList;
  };

  server.respondWith('GET', '/path/to/cars', (request) => {
    if (requestShouldSucceed(request)) {
      request.respond(200, headers, JSON.stringify({ records: getCarList() }));
      return true;
    }
    return false;
  });

  /*
  var deleteTodo = function(todoId) {
    for (var i = 0, t = todoList.length; i < t; i++) {
      if (todoList[i].id === todoId) {
        todoList.splice(i, 1)
        break
      }
    }
  }

  server.respondWith('DELETE', /\/api\/deleteTodo\/(.+)/, function(request, todoId) {
    if (requestShouldSucceed(request)) {
      deleteTodo(todoId)
      request.respond(204)
    }
  })

  var saveTodo = function(todo) {
    todo.priority = parseInt(todo.priority, 10)

    if (!todo.id) {
      todo.id = 't' + nextId
      nextId++
      todoList.push(todo)
    } else {
      for (var i = 0, t = todoList.length; i < t; i++) {
        if (todoList[i].id === todo.id) {
          todoList[i] = todo
          break
        }
      }
    }
    return todo
  }

  server.respondWith('POST', '/api/saveTodo', function(request) {
    if (requestShouldSucceed(request)) {
      const todo = JSON.parse(request.requestBody)
      request.respond(200, headers, JSON.stringify(saveTodo(todo)))
    }
  })
  */
};
