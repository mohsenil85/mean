
/*
 * GET home page.
 */

exports.index = function(todos){
  return function (req, res){
    res.render('index', {
      title: 'MEANIE',
      todos: todos
    });
  };
};
exports.addTodo = function (todos) {
  return function(req, res) {
    todos.push(req.body);
    res.json({todos: todos});
  };
};
