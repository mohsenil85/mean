var indexRoutes = require('../routes/index.js');

exports.testAddTodo = function(test) {
  
  var d = new Date() ;
  var req = {
    body : {
      due : d.toString() ,
      done : false,
      description : 'Learn TDD'
    }
  };
  var Todo = function(obj) {
    this.data = obj;
    this.save = function(callback){
      test.equals(obj, req.body);
      callback(null, this);
    }
  }

  var fun = indexRoutes.addTodo(Todo);

  var res = {
    json : function(obj) {
      test.equals(req.body, obj.todo.data);


      // test.expect means 'expect 5 tests will be run'
      test.expect(5);
      test.done() ;
    }
  };

  fn(req, res);
};

