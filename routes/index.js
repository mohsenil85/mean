
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'meanie',
    todos: [
  {
    description:"buy eggs",
    due: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
    done: false
  },
  {
    description:"buy more eggs",
    due: new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000),
    done: false
  },
  {
    description:"buy even more eggs",
    due: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000),
    done: true
     
  }
    ]
  });
};
